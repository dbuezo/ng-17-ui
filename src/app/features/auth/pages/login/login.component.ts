import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
} from '../../../../shared/components/ui';
import { FooterComponent } from '../../../../shared/components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    FooterComponent,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
