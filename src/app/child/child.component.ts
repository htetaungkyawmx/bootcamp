import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input()
  message!: string;

  fruits: string[] = [];
  @Output()
  greetingFromChild:EventEmitter<string>=
  new EventEmitter<string>();

  

  public sendToParent(msg:string){
    this.greetingFromChild.emit(msg);
  }

  public addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
}
