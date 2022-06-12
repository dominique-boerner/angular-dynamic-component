import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card/templates/card-body/card-body.component';
import { CardHeadComponent } from './components/card/templates/card-head/card-head.component';
import { TagComponent } from './components/tag/tag.component';
import { AppComponent as DynamicAppModule } from 'ng-dynamic-components/src/app/app.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DynamicAppModule],
  declarations: [
    AppComponent,
    CardComponent,
    CardBodyComponent,
    CardHeadComponent,
    TagComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
