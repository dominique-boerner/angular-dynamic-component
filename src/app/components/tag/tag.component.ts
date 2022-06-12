import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input()
  icon: string;

  @Input()
  text: string;

  @Input()
  append?: TemplateRef<any>;
}
