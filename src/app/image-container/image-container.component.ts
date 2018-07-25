import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config-service.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
  providers: [
    ConfigService
  ]
})
export class ImageContainerComponent implements OnInit {
  image: string;  
  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=dprxci4RQ0As7j9xXiPjf1cd6YO9taNaks7AKwLz';

  getImages(): void {
    this.image = this.configService.getConfig();
  }

  randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
  }

  constructor(private configService: ConfigService) {
    this.configService.getConfig()
      .subscribe((data : Config) => this.config = {
        this.placeholder = data
      });
  }

  ngOnInit() {
  }

}
