import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  persona = {
    name: '',
    surname: '',
    email: ''
  }

  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showCV(name: string, surname: string, email: string): void {

 
      this.persona.name = name.trim();
      this.persona.surname = surname.trim();    
      this.persona.email = email.trim();
    

    //this.hidden = false;
    const props: Array<string> = Object.values(this.persona);
    this.hidden = props.every(val => val === '');

    console.log(this.hidden);

    /* a = [1,2,3,4] 
    b = a.map((num) => num *2)
    c = b.filter((num) => num > 4)
    d = c.every((num) => num > 7)
    */
  }
}
