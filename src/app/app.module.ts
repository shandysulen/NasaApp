import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
