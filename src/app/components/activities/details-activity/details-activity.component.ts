import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit{
  activity: any;
  constructor(private route:ActivatedRoute, private activityService:ActivityService){}
  //Si on remplace ActivatedRoute par Router, on n'aura pas accès aux informations de la route, comme les paramètres de l'URL (id dans notre cas).

  ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  const id = idParam ? +idParam : null; //+ permet la conversion en un nombre (pour verifier si idParam est nulle ou undefiened)
  if (id !== null) {
    this.afficherActiviteParId(id);
  }
  }

  afficherActiviteParId(id:number): void{
    this.activityService.getActivityById(id).subscribe(data=>
      this.activity=data
    )
  }


}
