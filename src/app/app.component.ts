import {Component, effect, inject, OnInit, signal, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ApiService} from "./api-service.service";
import {TermAndDefinition} from "../../lib/types";
import {SelectComponent} from "./select/select.component";
import {SidePanelComponent} from "./side-panel/side-panel.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatSlideToggle, SelectComponent, SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'interactive_glossary_frontend';
  api: ApiService = inject(ApiService);
  renderer: Renderer2 = inject(Renderer2);
  gradeLevel = signal<number>(5)
  language = signal<string>("english")
  selectedTermsAndDefs = signal<TermAndDefinition[]>([])

  constructor() {
    // fetches on change
    effect(() => {
      this.api.fetchTermsAndDefinitions(this.gradeLevel(), this.language());
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('glossary-term')) {
        const term = target.getAttribute('data-term');
        this.onGlossaryTermClick(term!);
        event.preventDefault();
      }
    });
  }

  ngOnInit() {
    this.api.fetchTerms();
    this.api.fetchTermsAndDefinitions(this.gradeLevel(), this.language());
    this.api.fetchLanguages();
  }

  get availableLanguages(): string[] {
    let languages = this.api.languages();
    // turn all to title case
    return languages.map((lang: string) => lang.charAt(0).toUpperCase() + lang.slice(1));
  }

  get termsAndDefs(): TermAndDefinition[] {

    return this.api.termsAndDefs();
  }

  get terms(): string[] {
    return this.api.terms();
  }

  onCardClick(termAndDef: TermAndDefinition){
    this.selectedTermsAndDefs.update(terms => [...terms, termAndDef]);
  }

  onGlossaryTermClick(term: string) {
    const termAndDef = this.termsAndDefs.find(t => t.term === term);
    if (termAndDef) {
      this.selectedTermsAndDefs.update(terms => {
        // Avoid adding duplicate terms
        if (!terms.some(t => t.term === term)) {
          return [...terms, termAndDef];
        }
        return terms;
      });
    }
  }


}
