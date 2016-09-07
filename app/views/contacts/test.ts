// import { Component } from '@angular/core';
// import { MdDialog } from "ng2-material/components/dialog/dialog";
// //import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
// @Component({
//   selector: 'my-app',

//   templateUrl: './app/views/contacts/test.html',
//    directives: [
// //MATERIAL_DIRECTIVES
//        MdDialog
//        // MODAL_DIRECTIVES

//     ],
//     //providers:[MATERIAL_PROVIDERS]
// })
// export class AppComponent { }


import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';


import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';

// webpack html imports
// let template = require('./single-demo.html');

@Component({
  selector: 'my-app',
  templateUrl: './app/views/contacts/test.html'

})
export class SingleDemoComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  constructor(){
    console.log("This is constructor");

  }

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
