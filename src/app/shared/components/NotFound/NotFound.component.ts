import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './NotFound.component.html',
  styleUrl: './NotFound.component.css',
})
export class NotFoundComponent {}
