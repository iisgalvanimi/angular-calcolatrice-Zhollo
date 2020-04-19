import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zhou-calcolatrice';

}

export class operazioni{
  somma(){
    var a = Number(document.getElementById("num1"));
    var b = Number(document.getElementById("num2"));

    var c = a+b;
    console.log(c)
  }
}
