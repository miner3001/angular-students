import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  MALE_COLOR ="lightblue";
  FEMALE_COLOR="pink";
  students: any[]=[
    {name: "Pippo ",city:"topolinia",gender:"m",present:"true"},
    {name: "Minnie ",city:"topolinia",gender:"f",present:"false"},
    {name: "Rozzani ",city:"paperopoli",gender:"m",present:"true"},
    {name: "Pippo Cattivo ",city:"paperopoli",gender:"f",present:"true"},
    {name: "Peano",city:"topolinia",gender:"m",present:"true"}

  ]
}
