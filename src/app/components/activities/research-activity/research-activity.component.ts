import { Component } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-research-activity',
  templateUrl: './research-activity.component.html',
  styleUrls: ['./research-activity.component.css']
})
export class ResearchActivityComponent {
  activities: any[]=[];
  searchDate !: Date ;
  constructor (private activityService : ActivityService){}

  searchActivities(): void {
    this.activityService.getActivitiesByDate(this.searchDate).subscribe(
      data => this.activities =data
    )
  }

}
