import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/shared/models/user.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scheduling-management',
  templateUrl: './scheduling-management.component.html',
  styleUrls: ['./scheduling-management.component.css']
})
export class SchedulingManagementComponent implements OnInit {
  element: any;
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';
  Tasks: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute,private snackBar: MatSnackBar) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['element']) {
        this.element = JSON.parse(params['element']);
      }
    });
  
    try {
      await this.fetchUsers().toPromise(); // Wait for fetchUsers() to complete
      this.fetchTasks();
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }
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
    if (this.element.tasksIds){
      for (const taskid of this.element.tasksIds){
    this.http.get<any[]>(`${environment.baseUrl}/api/Task/get-task/${taskid}`).subscribe(
      (data) => {
        this.Tasks.push(data)
        console.log(this.Tasks)
      },
      (error) => {
        console.error('Error fetching task:', error);
      }
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
  drop(event: CdkDragDrop<any[]> , a :any) {
    console.log(event.item.data.id);
console.log(a.id);

   //   moveItemInArray(event.previousContainer.data, event.previousIndex, event.currentIndex);
      
      this.assignUserToTaskOnBackend(event.item.data.id,a.id)
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
 
  
  assignUserToTaskOnBackend(userId: string, taskId: string) {
    const endpoint = `${environment.baseUrl}/api/Users/assignTaskToUser/`+userId +'/'+taskId; 

    return this.http.options(endpoint).subscribe((data) => {
      console.log(data);
      window.location.reload();
    },(error) => {
      this.snackBar.open("This user is already assigned to this task", 'Close', {
        duration: 3000, // Adjust the duration as needed
      });
    }
    );
  }
  

}
