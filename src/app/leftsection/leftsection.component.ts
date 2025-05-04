import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-leftsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leftsection.component.html',
  styleUrl: './leftsection.component.css'
})
export class LeftsectionComponent {

  element=[
    {btn:"One",icon:"fa-solid fa-user-tie", title:"Administrator",title2:[{title1:"title1",list:["1"]},{title1:"title1",list:["1"]}]},
    {btn:"Two",icon:"fa-solid fa-arrow-right-to-bracket", title:"Registration",title2:[{title1:"title1",list:["1"]},{title1:"title1",list:["1"]}]},
    {btn:"Four",icon:"fa-solid fa-book-open", title:"LMS",title2:[{title1:"subject Categories",list:["subject","Evoluation","Daily Performance","Weekly Plan"]},{title1:"Lesson Live",list:["Question Bank","Assignment","Weight Types"]}]},
    {btn:"Five",icon:"fa-solid fa-lock", title:"Accounting",title2:[{title1:"title1",list:["1"]},{title1:"title1",list:["1"]}]},
    {btn:"Six",icon:"fa-solid fa-clipboard-list", title:"Inventory",title2:[{title1:"title1",list:["1"]},{title1:"title1",list:["1"]}]},]


    activeIndex: number | null = null;

    toggleMenu(i: number) {
      this.activeIndex = this.activeIndex === i ? null : i;
    }
    


  }
