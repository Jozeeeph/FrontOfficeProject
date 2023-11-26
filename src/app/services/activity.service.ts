import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../classes/activity';
const URL = 'http://localhost:3000/events';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
 constructor(private http:HttpClient){}
  activities: any[]=[];
 
 getAllActivities():Observable<Activity[]>{
  return this.http.get<Activity[]>(URL);
 }

 getActivityById(id: number): Observable<Activity>{
  return this.http.get<Activity>(URL+"/"+id);
 }

 getActivitiesByDate(date:Date):Observable<any[]>{
  const filteredActivities = this.activities.filter(activity => activity.date === date);
    return of (filteredActivities); //of utilisée pour convertir ce tableau filtré en un observable
 }
}
