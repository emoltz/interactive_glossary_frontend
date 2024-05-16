import {Component, input} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIcon
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  header = input<string>()
  body = input<string>()
  gradeLevel = input<number>()
  type = input<string>()


  isExpanded = false;

  toggleCard() {
    this.isExpanded = !this.isExpanded;
  }

}
