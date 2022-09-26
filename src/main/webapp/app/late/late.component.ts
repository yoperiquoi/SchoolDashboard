import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'jhi-late',
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.scss'],
})
export class LateComponent implements OnInit {
  public lateStudents: Photo[] = [];
  public absentStudents: Photo[] = [];

  ngOnInit(): void {
    const students: Photo[] = new StudentsService().allStudents();
    this.lateStudents = students.filter((photo: Photo): boolean => photo.state === 'late');
    this.absentStudents = students.filter((photo: Photo): boolean => photo.state === 'absent');
  }
}
