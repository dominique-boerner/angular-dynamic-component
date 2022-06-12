import { Component, Input, TemplateRef } from '@angular/core';
import { CardBodyComponent } from './templates/card-body/card-body.component';
import { CardHeadComponent } from './templates/card-head/card-head.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input()
  title: string;

  @Input()
  text: string;

  @Input()
  head?: TemplateRef<CardHeadComponent>;

  @Input()
  body?: TemplateRef<CardBodyComponent>;
}
