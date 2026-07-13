import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet ,RouterLinkActive} from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-19-tut');
  title1='Ajay Bro';
  x=10;
  y=20;
   k: number | null = null;
  // hello(){
  //   let x=20;
  // }

  handleClickEvent() {
    alert('Button clicked!');
    this.k = this.x + this.y;
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
  count:number=0; //count=0;
  handleIncrement(){
    this.count++;
  }
  handleDecrement(){
    this.count--;
  } 
  handleReset(){
    this.count=0;
  }

  handleCounter(val:string){
    if(val==='plus'){
      this.count++;
    } 
    else if(val==='minus'){
      this.count--;
    }
    else if(val==='reset'){
      this.count=0;
    }
  }

  handleEvent(ev:MouseEvent){
    console.log("function called",ev);
    console.log("function called",ev.type);
    //console.log("function called",ev.target.name); if you put ev:any this console will work
    console.log("function called",(ev.target as Element).className);
    

  }
   handleEvent_1(ev:Event){
    //console.log("function called",ev);
    console.log("function called",ev.type);
    console.log("value",(ev.target as HTMLInputElement).value)
    //console.log("function called",ev.target.name); if you put ev:any this console will work
    //console.log("function called",(ev.target as Element).className);
    

  }
  name1="";
  displayname="";
  getName(ev:Event){
    //console.log(ev)
    const value=(ev.target as HTMLInputElement).value
    this.name1=value;
  }
  showname(){
    this.displayname=this.name1;
  }
  setname(){
    this.name1="saurav"
  }

email="";
  getEmail(val:string){

    //console.log(val);
    this.email=val
  }
  setEmail(){
    this.email="defaultl@.com"
  }

  display=true;

  hidediv(){
    this.display=false;
  }
  unhidediv(){
    this.display=true;
  }
  togglediv(){
    this.display=!this.display
  }


}