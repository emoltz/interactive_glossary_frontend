import {Component, effect, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ApiService} from "./api-service.service";
import {TermAndDefinition, TermsAndDefsResponse} from "../../lib/types";
import {GradeSelectComponent} from "./grade-select/grade-select.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatSlideToggle, GradeSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'interactive_glossary_frontend';
  api: ApiService = inject(ApiService);
  gradeLevel = signal<number>(1)
  language = signal<string>("english")

  ngOnInit() {
    this.api.fetchTerms();
    this.api.fetchTermsAndDefinitions(this.gradeLevel(), this.language());
  }

  get termsAndDefs(): TermAndDefinition[] {

    return this.api.termsAndDefs();
  }

  get terms(): string[] {
    return this.api.terms();
  }


}
