import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile,RouterOutlet],
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

  handleClickEvent() {
    alert('Button clicked!');
    //this.handleClickEvent2();
  } 
  handleClickEvent2() {
    alert('Button clicked 2!');
  }
  //variable declaration
  //here we have defined property name of type string and initialized it with value 'Ajay'
  name:string='Ajay';
  updateName(){
    //here we have defined variable x; we cant define variable in class level but we can define variable in method level
    let x=30;
    //here y can be type of number or string; we can define variable with multiple types using union operator
    let y:number| string=40;

  }
  sum(x:number,y:number){
    console.log(x+y);
    //return x+y;
  }
}