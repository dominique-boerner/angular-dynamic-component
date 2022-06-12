import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-head',
  templateUrl: './card-head.component.html',
})
export class CardHeadComponent {
  @Input()
  title: string;
}
