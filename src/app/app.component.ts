import { Component, Input, Output } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  skills: Skill[] = []
}
