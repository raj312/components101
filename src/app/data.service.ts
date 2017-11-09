import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'nissan', 'toyota'
  ];

  myData() {
    return 'This is my data';
  }
}
