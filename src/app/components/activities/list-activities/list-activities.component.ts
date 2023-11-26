import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit{
  activities: any[] = []; 
  searchText="";

  constructor(private activityService: ActivityService, private router: Router) {}

  ngOnInit(): void {
    this.afficherActivites();
  }
  afficherDetails(id: number): void {

    this.router.navigate(['/list-activities',id]);
  }

  afficherActivites(){
    this.activityService.getAllActivities().subscribe(data => this.activities = data)
  }
}



