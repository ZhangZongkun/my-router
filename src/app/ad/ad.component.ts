import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  template: `
    <div>
      <app-add-banner [ads]="ads"></app-add-banner>
    </div>
  `
})
export class AdComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {
  }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
