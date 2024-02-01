import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ChildComponent],
})
export class AppComponent {
  greeting = 'Hello!Angular....';
  imgUrl =
    'https://images.unsplash.com/photo-1706354924659-582cec69ce3b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  switch: boolean = true;

  public onOff() {
    this.switch = !this.switch;
  }

  public getFromChild(msg: string) {
    this.greeting = msg;
  }

  student = {
    name: 'John Doe',
    hobby: 'Reading',
  };
  public sayHello() {
    return 'Life is beautiful!';
  }
}
