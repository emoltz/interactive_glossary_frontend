import {Component, signal} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-grade-select',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    NgForOf
  ],
  templateUrl: './grade-select.component.html',
  styleUrl: './grade-select.component.scss'
})
export class GradeSelectComponent {
  gradeLevel = signal<number>(1);
  grades = [1, 2, 3, 4, 5, 6, 7, 8];

  onGradeChange(event: any): void {
    this.gradeLevel.set(event.value);
  }

}
