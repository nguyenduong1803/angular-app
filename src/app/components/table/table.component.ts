import { Component } from '@angular/core';
import Inventor from 'src/app/types/inventor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  inventors: Inventor[] = [
    {
      firt: 'Duong',
      id: '001',
      last: 'Nguyen',
      passed: 12,
      year: 2000,
    },
    {
      firt: 'Duong',
      id: '001',
      last: 'Nguyen',
      passed: 12,
      year: 2000,
    },
    {
      firt: 'Duong',
      id: '001',
      last: 'Nguyen',
      passed: 12,
      year: 2000,
    },
    {
      firt: 'Duong',
      id: '001',
      last: 'Nguyen',
      passed: 12,
      year: 2000,
    },
  ];
}
