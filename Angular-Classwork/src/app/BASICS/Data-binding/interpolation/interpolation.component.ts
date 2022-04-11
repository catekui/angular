import { Component, OnInit } from '@angular/core';
import { catecomponent } from 'src/app/Intro-to-Angular/Cate-component/cate-component';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 
  name: string = 'interpolation component';
  cars= ["toyota", "benz", "audi"];
  person = {name:"Cate", age: 25, car:this.cars[1]
   }

  constructor() { 
    setTimeout(() =>{
      this.name = "interpolation Component 2,0,0";
    }, 4000);
  }     

  ngOnInit(): void {
  }

}
