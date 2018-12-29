import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <h3>Crisis Detail</h3>
    <div>Crisis id: {{id}} - {{name}}</div>
    <br>
    <a routerLink="../">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit {
  id: number;
  name: string;

  constructor(private route: ActivatedRoute,
              private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // this.crisisService.getCrisis(this.id)
    //   .then(crisis => this.name = crisis.name);
    this.crisisService.getCrisis(this.id)
      .subscribe(crisis => {
        this.name = crisis.name
      });
  }
}
