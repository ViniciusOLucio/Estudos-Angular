import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
name: string = 'Matheds';
age: number = 20;
job = 'Programer';
}
