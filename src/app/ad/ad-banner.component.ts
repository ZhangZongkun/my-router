import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnDestroy, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { HeroComponent } from './hero.component';

@Component({
  selector: 'app-add-banner',
  template: `
    <div class="ad-banner">
      <h3>Advertisements</h3>
      <ng-template ad-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,) {
  }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<HeroComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
