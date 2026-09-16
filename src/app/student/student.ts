import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[]=[
    {name: "Pippo ",city:"topolinia",gender:"m",present:"true"},
    {name: "Minnie ",city:"topolinia",gender:"f",present:"false"},
    {name: "Rozzani ",city:"paperopoli",gender:"m",present:"true"},
    {name: "Pippo ",city:"paperopoli",gender:"f",present:"true"},
    {name: "Peano",city:"topolinia",gender:"m",present:"true"}

  ]
}
