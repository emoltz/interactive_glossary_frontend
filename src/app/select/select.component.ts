import {Component, Input, WritableSignal} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    NgForOf
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() selection!: WritableSignal<number>
  @Input() dropdownOptions!: any[]
  @Input() title!: string

  onGradeChange(event: MatSelectChange) {
    this.selection.set(event.value);
  }

}
