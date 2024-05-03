import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
type TermDefinition = {
  id: number,
  term: string,
  definition: string
  grade_level: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'interactive_glossary_frontend';

  termDefinitions: TermDefinition[] = [
    {
      id: 1,
      term: 'Fraction',
      definition: 'A way to represent a part of a whole number, written with a numerator (top number) and a denominator (bottom number). For example, 1/2 is a fraction.',
      grade_level: 8
    },
    {
      id: 2,
      term: 'Numerator',
      definition: 'The top number in a fraction. It represents the number of parts you have.',
      grade_level: 8
    },
    {
      id: 3,
      term: 'Denominator',
      definition: 'The bottom number in a fraction. It represents the total number of parts in the whole.',
      grade_level: 8
    }
  ]

}
