import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [FeatherModule, CommonModule, RouterModule]
})
export class WelcomeComponent {

  constructor() { }

}
