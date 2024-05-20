import {Component, Input, signal, WritableSignal} from '@angular/core';
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
  @Input() term = "";
  @Input() definition = "";
  @Input() gradeLevel = 0;
  @Input() subject = "Math";
  constructor() {}
}
