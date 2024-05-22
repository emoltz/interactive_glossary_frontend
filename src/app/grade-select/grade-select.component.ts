import {Component, Input, WritableSignal} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
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
  @Input() gradeLevel!: WritableSignal<number>
  grades = [1, 2, 3, 4, 5, 6, 7, 8];

  onGradeChange(event: MatSelectChange) {
    this.gradeLevel.set(event.value);
  }

}
