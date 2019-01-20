import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  config: Config;
  headers: string[];
  error: any;

  constructor(private configService: ConfigService) {
  }

  clear() {
    this.config = undefined;
    this.headers = undefined;
    this.error = undefined;
  }

  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile
      })
  }

  showConfig_v2() {
    this.configService.getConfig_2()
      .subscribe(data => this.config = data);
  }
}
