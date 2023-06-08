import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeLine } from 'src/shared/generic/models/Calendar.model';

@Component({
  selector: 'app-conflict-timeline',
  templateUrl: './conflict-timeline.component.html',
  styleUrls: ['./conflict-timeline.component.css']
})
export class ConflictTimelineComponent implements OnInit {
  users: any[]; // Array to store available users
  requests: any[]; // Array to store requests
  filteredUsers: any[] = [];
  filteredRequest :any[]=[];
  tasks: any[] = [];
  searchuser = '';
  searchrequest = '';
  constructor(private http: HttpClient,private snackBar: MatSnackBar) {
    this.users = [];
    this.requests = [];
  }

  async ngOnInit() {
    await this.fetchUsers().toPromise();
    await this.getRequests().toPromise();
  }

  isHovered = false;
  toggleScroll() {
    this.isHovered = !this.isHovered;
  }

  fetchUsers(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      this.http.get<any[]>(`${environment.baseUrl}/api/Users/UsersBySkill`).subscribe(
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
  filterUsers() {
    if (this.searchuser.trim() !== '') {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.searchuser.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchuser.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users; // Show all users when search term is empty
    }
  }

  getRequests() : Observable<any[]> {
    return new Observable<any[]>(observer => {
      this.http.get<any[]>(`${environment.baseUrl}/api/RequestManagement?parameterValue=1`).subscribe(
        (data) => {
          this.filteredRequest = data;
          this.requests = data;
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
  filterrequest() {
    if (this.searchrequest.trim() !== '') {
      this.filteredRequest = this.requests.filter(request =>
        request.name.toLowerCase().includes(this.searchrequest.toLowerCase())
      );
    } else {
      this.filteredRequest = this.requests; // Show all users when search term is empty
    }
  }
  
  selectedRequest: any; 
  timeline: TimeLine = {
    displaycollumn: 'name',
    endDateCollumn: 'endDate',
    endpoint: '', // The endpoint will be dynamically updated
    startDateCollumn: 'startDate'
  };
  showTimelineComponent: boolean = false;
  showTimeline(request: any) {
    this.selectedRequest = request;
    this.timeline.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/${request.id}`;
    this.showTimelineComponent = false;
    setTimeout(() => {
      this.showTimelineComponent = true;
    });
  }
  selectedRequest1: any; 
  showTasks(request: any) {
    if (this.selectedRequest1 === request) {
      this.selectedRequest1 = null; // Deselect the request if it is already selected
      this.tasks = []; // Clear the tasks
    } else {
      this.selectedRequest1 = request;
      this.fetchTasksByRequest(request.id);
    }
  }

  // Fetch tasks for the selected request
  fetchTasksByRequest(requestId: string) {
    const url = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/${requestId}`;
    this.http.get(url).subscribe((response: any) => {
      this.tasks = response;
      console.log(this.tasks)
    });
  }
  selectedTaskId: string | null = null;
  selectedTaskUsers: any[] = [];
  showUsers(taskId: string, event: Event): void {
    event.stopPropagation(); 
    if (this.selectedTaskId === taskId) {
      this.selectedTaskId = null;
      this.selectedTaskUsers = [];
    } else {
      this.selectedTaskId = taskId;
      this.selectedTaskUsers = this.getUsersByTaskId(taskId);
    }
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
  drop(event: CdkDragDrop<any[]>, task: any): void {
    const userId = event.item.data.id;
    const taskId = task.id;
    this.assignUserToTaskOnBackend(userId, taskId);
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
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          if (!task.users.find(u => u === userId)) {
            const user = this.users.find(u => u.id === userId);
            if (user) {
              task.users.push(user);
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
        const task = this.tasks.find(t => t.id === taskId);
  
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

}