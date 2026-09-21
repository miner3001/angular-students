import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {

  M_COLOR = "lightblue";
  F_COLOR = "pink";

  students: any[] = [{ "name": "Bumbuz", "city": "Saluzzo", "gender": "M", "present": true },
  { "name": "Tesio", "city": "Bagge", "gender": "M", "present": false },
  { "name": "Mossello", "city": "Monasterolo di Savigliano", "gender": "M", "present": true },
  { "name": "Parola", "city": "Centallo", "gender": "F", "present": true }
  ];

  getStyle(s:any) {
    return {
      'backgroundColor': s.gender == 'F' ? this.F_COLOR : this.M_COLOR,
      'textdecoration': s.present ? 'none' : 'underline',
      'font-weight' : s.present ? 'norlma' : 'bold'
    }
  }
}