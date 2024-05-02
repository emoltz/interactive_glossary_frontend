import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./card/card.component";

type TermDefinition = {
  term: string,
  definition: string

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'interactive_glossary_frontend';

  termDefinitions: TermDefinition[] = [
    {
      term: 'Fraction',
      definition: 'A way to represent a part of a whole number, written with a numerator (top number) and a denominator (bottom number). For example, 1/2 is a fraction.'
    },
    {
      term: 'Numerator',
      definition: 'The top number in a fraction. It represents the number of parts you have.'
    },
    {
       term: 'Denominator',
      definition: 'The bottom number in a fraction. It represents the total number of parts in the whole.'
    }
  ]

}
