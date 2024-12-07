import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-landingpage',
  imports: [HeroComponent, WhyMeComponent, MySkillsComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {}
