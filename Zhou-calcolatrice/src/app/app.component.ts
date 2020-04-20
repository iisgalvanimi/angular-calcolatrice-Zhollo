import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  somma(a,b){
    var c= Number(a.value)+Number(b.value);
    console.log(c);
    document.getElementById("ris").innerHTML=String(c);
    this.Seq(a,b);
  };
  dif(a,b){
    var c= Number(a.value)-Number(b.value);
    console.log(c);
    document.getElementById("ris").innerHTML=String(c);
    this.Seq(a,b);
  };
  mult(a,b){
    var c= Number(a.value)*Number(b.value);
    console.log(c);
    document.getElementById("ris").innerHTML=String(c);
    this.Seq(a,b);
  };
  div(a,b){
    var c= Number(a.value)/Number(b.value);
    console.log(c);
    document.getElementById("ris").innerHTML=String(c);
    this.Seq(a,b);
  };
  Seq(x,y){
    var sequenza = "";
    x=Number(x.value);
    y=Number(y.value);
    var sequenza = "";
    if(x>y){
      for (var i=y;i<=x;i++){
        sequenza+=i+" ";
      }
    }else if(x<y){
      for (var i=y;i>=x;i--){
        sequenza+=i+" ";
      }
    }else{
      sequenza=x+" "+y;
    }
    document.getElementById("seq").innerHTML=String(sequenza);
  };
}
