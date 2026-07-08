import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-19-tut');
  title1='Ajay Bro';
  x=10;
  y=20;
  // hello(){
  //   let x=20;
  // }

}
