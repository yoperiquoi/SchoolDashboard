import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'jhi-trombinoscope',
  templateUrl: './trombinoscope.component.html',
  styleUrls: ['./trombinoscope.component.scss'],
})
export class TrombinoscopeComponent implements OnInit {
  public displayedStudents: Photo[] = [];

  ngOnInit(): void {
    this.displayedStudents = new StudentsService().allStudents();
    this.shuffle();
    this.sort();
  }

  shuffle(): void {
    const presentStudents: Photo[] = this.displayedStudents.filter((photo: Photo): boolean => photo.state === 'here');
    const lateStudents: Photo[] = this.displayedStudents.filter((photo: Photo): boolean => photo.state === 'late');
    const absentStudents: Photo[] = this.displayedStudents.filter((photo: Photo): boolean => photo.state === 'absent');
    this.displayedStudents = [...presentStudents.sort((): number => 0.5 - Math.random()), ...lateStudents, ...absentStudents];
  }

  sort(): void {
    this.displayedStudents = this.displayedStudents.sort((a: Photo, b: Photo): number => {
      if ((a.state === 'absent' && b.state !== 'absent') || (a.state === 'late' && b.state === 'here')) {
        return -1;
      } else if ((b.state === 'absent' && a.state !== 'absent') || (b.state === 'late' && a.state === 'here')) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
