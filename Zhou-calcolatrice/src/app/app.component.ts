import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  somma(a:HTMLInputElement,b:HTMLInputElement){
    var c= Number(a)+Number(b)
    console.log(c)
    document.getElementById("ris").innerHTML=String(c);
  }
  dif(a:HTMLInputElement,b:HTMLInputElement){
    var c= Number(a)-Number(b)
    console.log(c)
    document.getElementById("ris").innerHTML=String(c);
  }
  mult(a:HTMLInputElement,b:HTMLInputElement){
    var c= Number(a)*Number(b)
    console.log(c)
    document.getElementById("ris").innerHTML=String(c);
  }
  div(a:HTMLInputElement,b:HTMLInputElement){
    var c= Number(a)%Number(b)
    console.log(c)
    document.getElementById("ris").innerHTML=String(c);
  }
}
