import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developer!: Developer;
  title: string = 'Fiche employé';

  ngOnInit(): void {
    this.developer = new Developer(
      'Doe',
      'John',
      30,
      'Male',
      'A passionate developer.',
      [
        new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'https://angular.io'),
        new Skill('TypeScript', 'https://www.typescriptlang.org/assets/images/icons/apple-touch-icon-180x180.png', 'https://www.typescriptlang.org')
      ]
    );
  }
}
