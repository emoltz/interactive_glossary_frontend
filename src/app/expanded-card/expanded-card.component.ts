import {Component, Inject, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {count} from "rxjs";

@Component({
  selector: 'app-expanded-card',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './expanded-card.component.html',
  styleUrl: './expanded-card.component.scss'
})
export class ExpandedCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("expanded data: ", data);
  }
}
