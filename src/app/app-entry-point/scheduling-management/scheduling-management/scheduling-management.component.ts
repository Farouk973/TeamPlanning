import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/shared/models/user.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SolveConflictComponent } from '../../conflict-management/solve-conflict/solve-conflict.component';

@Component({
  selector: 'app-scheduling-management',
  templateUrl: './scheduling-management.component.html',
  styleUrls: ['./scheduling-management.component.css']
})
export class SchedulingManagementComponent implements OnInit {
  element: any;
  requestid
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';
  Tasks: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute,private snackBar: MatSnackBar,private dialog: MatDialog) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['element']) {
        this.requestid = JSON.parse(params['element']);
      }
    });
  
    try {
      console.log(this.requestid)
      await this.fetchrequest().toPromise();
      await this.fetchUsers().toPromise();
       // Wait for fetchUsers() to complete
      this.fetchTasks();
      
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }
  }
  fetchrequest():Observable<any>{
   return new Observable<any>(observer=>{
    this.http.get<any>(`${environment.baseUrl}/api/RequestManagement/${this.requestid}`).subscribe((data)=>{
      this.element=data
      observer.next(data); // Emit the received data
      observer.complete();
    },
    (error) => {
      console.error('Error fetching request:', error);
      observer.error(error); // Emit the error
    })
   })
  }
  fetchUsers(): Observable<User[]> {
    return new Observable<User[]>(observer => {
      this.http.get<User[]>(`${environment.baseUrl}/api/Users/UsersBySkill`).subscribe(
        (data) => {
          this.filteredUsers = data;
          this.users = data;
          observer.next(data); // Emit the received data
          observer.complete(); // Signal that the Observable has completed
        },
        (error) => {
          console.error('Error fetching users:', error);
          observer.error(error); // Emit the error
        }
      );
    });
  }
  fetchTasks() {
    this.Tasks = [];
    if (this.element.tasksIds){
      for (const taskid of this.element.tasksIds){
        this.http.get<any[]>(`${environment.baseUrl}/api/Task/get-task/${taskid}`).subscribe(
          (data) => {
            const userList = this.getUsersByTaskId(taskid);
            data['userList'] = userList;
            this.Tasks.push(data);
          },
        );
      }
  }
  }
  filterUsers() {
    if (this.searchTerm.trim() !== '') {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users; // Show all users when search term is empty
    }
  }
  drop(event: CdkDragDrop<any[]>, task: any): void {
    const userId = event.item.data.id;
    const taskId = task.id;
  
    // if (this.hasTimeConflict(userId, taskId)) {
    //   this.snackBar.open("This user has a conflicting task.", 'Close', {
    //     duration: 3000, // Adjust the duration as needed
    //   });
    //   return;
    // }
  
    this.assignUserToTaskOnBackend(userId, taskId);
  }
  
  goBack(): void {
     window.history.back();
  }
  getUsersByTaskId(taskId: string): any[] {
    const matchingUsers: any[] = [];
    
    for (const user of this.users) {
      for (const taskIdOfUser of user['tasks']) {
        if (taskIdOfUser === taskId) {
          matchingUsers.push(user);
        }
      }
    }
    return matchingUsers;
  }
  getTasksByUserId(userId: string): any[] {
    const userTasks: any[] = [];
  
    for (const task of this.Tasks) {
      if (task.userList && task.userList.some(user => user.id === userId)) {
        userTasks.push(task);
        console.log(task)
      }
    }
    return userTasks;
  }
  assignUserToTaskOnBackend(userId: string, taskId: string) {
    const endpoint = `${environment.baseUrl}/api/Users/assignTaskToUser/` + userId + '/' + taskId;
    return this.http.options(endpoint).subscribe(
      (data) => {const user = this.users.find(u => u.id === userId);
        if (user) {
          if (!user.tasks.includes(taskId)) {
            user.tasks.push(taskId);
          } else {
            this.snackBar.open("This user is already assigned to this task", 'Close', {
              duration: 3000, // Adjust the duration as needed
            });
          }
        }
        const task = this.Tasks.find(t => t.id === taskId);
        if (task) {
          if (!task.userList.find(u => u.id === userId)) {
            const user = this.users.find(u => u.id === userId);
            if (user) {
              task.userList.push(user);
            }
          }
        } },
        (error) => {
          this.snackBar.open("Error assigning task to user", 'Close', {
            duration: 3000, // Adjust the duration as needed
          });
        }
    );
  }
  unassignUserFromTaskOnBackend(userId: string, taskId: string) {
    const endpoint = `${environment.baseUrl}/api/Users/unassignTaskFromUser/` + userId + '/' + taskId;
    return this.http.options(endpoint).subscribe(
      () => {
        const user = this.users.find(u => u.id === userId);
        const task = this.Tasks.find(t => t.id === taskId);
  
        if (user && task) {
          user.tasks = user.tasks.filter(t => t !== taskId);
          task.userList = task.userList.filter(u => u.id !== userId);
        }
      },
      (error) => {
        this.snackBar.open("Error unassigning task from user", 'Close', {
          duration: 3000, // Adjust the duration as needed
        });
      }
    );
  }
  ////////////////////////conflit/////////////////////////////////////////////////////////////////////
  hasTimeConflict(userId: string, taskId: string): boolean {
    const userTasks = this.getTasksByUserId(userId);

    for (const userTask of userTasks) {
      if (userTask.id !== taskId && this.isPeriodConflict(userTask, taskId)) {
        return true; // Conflict detected
      }
    }
  
    return false; // No conflicts found
  }
  isPeriodConflict(task1: any, task2Id: string): boolean {
    const task2 = this.Tasks.find(task => task.id === task2Id);
  
    if (task1 && task2 && task1.startDate && task1.endDate && task2.startDate && task2.endDate) {
      const task1StartDate = new Date(task1.startDate);
      const task1EndDate = new Date(task1.endDate);
      const task2StartDate = new Date(task2.startDate);
      const task2EndDate = new Date(task2.endDate);
      return (
        (task1StartDate >= task2StartDate && task1StartDate <= task2EndDate) ||
        (task1EndDate >= task2StartDate && task1EndDate <= task2EndDate) ||
        (task1StartDate <= task2StartDate && task1EndDate >= task2EndDate)
      );
    }
  
    return false; // Invalid task or task2 data
  }
  ////////////////////////solve conflit/////////////////////////////////////////////////////////////////////
  openConflictPopup(userId: string, taskId: string): void {
    const availableUsers = this.getUsersWithoutConflicts(taskId);
    const Userconflict = this.users.find(user=>user.id===userId);
    const dialogRef = this.dialog.open(SolveConflictComponent, {
      width: '400px',
      data: { Userconflict, taskId ,availableUsers }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.unassignUserFromTaskOnBackend(userId,taskId);
        this.assignUserToTaskOnBackend(result,taskId);
      }
    });
  }
  getUsersWithoutConflicts(taskId: string): User[] {
    const task = this.Tasks.find(t => t.id === taskId);
  
    if (!task) {
      return []; // Task not found
    }
  
    // Fetch all users who don't have conflicts with the selected task
    const usersWithoutConflicts = this.users.filter(user => !this.hasTimeConflict(user.id, taskId) && !this.getUsersByTaskId(taskId).includes(user));
  
    return usersWithoutConflicts;
  }

}
