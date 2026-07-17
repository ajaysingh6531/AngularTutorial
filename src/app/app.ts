import { Component, computed, effect, signal, WritableSignal,Signal } from '@angular/core';
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

  color=4;
  handlecolor(val:number){
    this.color=val;
  }
  handleInput(ev:Event){
    this.color=parseInt((ev.target as HTMLInputElement).value);
  }

  color1='yellow';

  handle_color(val:string){
    this.color1=val;
  }
  handle_Input(ev:Event){
    this.color1=((ev.target as HTMLInputElement).value);
  }
  users=["ajay","sam","tonny","bruce"]
  student=[
    {name:'anil',age:20,email:'a@gmail.com'},
    {name:'avah',age:22,email:'b@gmail.com'},
    {name:'ansh',age:24,email:'c@gmail.com'}

  ]

  naming="";
  get_Name(n:string){
    this.naming=n;
  }
  counter=signal(10);

  // effect will be called every time if there any change in signal
  constructor(){
    effect(()=>{
      //console.log(this.x);
      console.log(this.counter());
      console.log(this.username());

      if(this.count3()%3==0){
        this.displayheading.set(true);
        setTimeout(()=>{
          this.displayheading.set(false);
        },2000)
      }
      else{
        this.displayheading.set(false);
      }
    })
  }
  // updateValue(){
  //   //this.x=30;
  //   // this.counter.set(100);
  //   this.counter.set(this.counter()+1);

  // }
    updateValue(val:string){
    //this.x=30;
    // this.counter.set(100);
    //this.counter.set(this.counter()+1);
    if(val=='inc'){
      this.counter.set(this.counter()+1);
    }
    else{
      this.counter.set(this.counter()-1);
    }

  }
  data=signal<number | string>(10) //can store both number and string
  //both are same
  //data1: WritableSignal<number |string>=signal(10); 
  data1:Signal<number>=computed(()=>200);

  updatesignal(){
    this.data.set("hello");
    //this.data1.set("hey"); this cant be updated because its computed signal work as final
  }

  // i=10;
  // j=20;
  // z=this.i+this.j;

  // showValue(){

  //   console.log(this.z);
  //   this.i=100;
  //   console.log(this.z);
  // }
  //output will be 30 in both console but you want that w
  // hen ever  any value update in middle this z get update with latest values use computed


  i=signal(10); // these are writebale signal
  j=signal(20);
  z=computed(()=>this.i()+this.j()) //computed signal dont update as they are read only but if dependecy change its value get update

  showValue(){

    console.log(this.z());
    this.i.set(100);
    console.log(this.z());
    //this.z.set(300);  wont work as z is final | const
  }

  username=signal('Ajay');

  count3=signal(2);
  displayheading=signal(true);

  updateusername(){
    this.username.set('hey singh');
  }

  togglevalue(){
    //this.displayheading=!this.displayheading
    this.count3.set(this.count3()+1);
  }

student1=['Ajay','singh','sam','praveen','gaurav'];

student2=[];


}