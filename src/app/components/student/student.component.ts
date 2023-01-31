import { Component } from '@angular/core';
import Student from 'src/app/types/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  student: Student = {
    dob:"18/03/2000",
    gender:"Nam",
    gpa:10,
    image:"link image",
    name:"Nguyễn Dương"
  };
}
