import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*

  styles: [`
    Use backticks for multiple lines of internal css styles
  `];

  Note: When creating a project, use ng new project-name --style=scss to make the project build with scss files
  */
})
export class AppComponent {
  
  title = 'app';
  
  myObject = {
    gender: 'Male',
    age: 33,
    location: 'USA'
  }

  myArr = ['him', 'hers', 'yours'];

  angularLogo = 'images/angular.svg';

  buttonStatus = 'True';

  myEvent(event){
    console.log(event);
  }

  titleClasses = {
    'red-para': true,
    'underline-para': true,
    'italic-para': false
  }

  styleErrorColor = "true";

  titleStyles = {
    'color': 'blue',
    'text-decoration': 'underline'
  }

  constructor( private dataService:DataService) {
    
  }

  someProperty:string = ''; //this means someProperty of type string

  ngOnInit() { //anything inside this runs when the component loads
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

}
