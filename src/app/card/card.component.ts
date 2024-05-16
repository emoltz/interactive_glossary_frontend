import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ExpandedCardComponent } from '../expanded-card/expanded-card.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() header!: string;
  @Input() body!: string;
  @Input() gradeLevel!: number;
  @Input() type!: string;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ExpandedCardComponent, {
      data: {
        header: this.header,
        body: this.body,
        gradeLevel: this.gradeLevel,
        type: this.type
      }
    });
  }
}
