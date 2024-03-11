import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() userData!: {email:string, role: string};
  // o ! é usado para dizar que não tem um valor definido ainda, mas terá. pode usar a string vazia('') ou !, os dois fazem a mesma coisa
  constructor(){

  }
  ngOnInit(): void{

  }
}
