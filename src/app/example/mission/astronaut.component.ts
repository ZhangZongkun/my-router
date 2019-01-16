import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button type="button" class="btn btn-primary" (click)="confirm()"
              [disabled]="!announced || confirmed">Confirm
      </button>
    </p>`
})
export class AstronautComponent implements OnDestroy {
  @Input()
  astronaut: string;
  mission = '<no mission announce>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
