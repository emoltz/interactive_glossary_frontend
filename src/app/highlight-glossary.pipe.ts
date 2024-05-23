import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {TermAndDefinition} from "../../lib/types";

@Pipe({
  name: 'highlightGlossary',
  standalone: true
})
export class HighlightGlossaryPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, terms: TermAndDefinition[]): SafeHtml {
    if (!terms) {
      return value;
    }

    const termNames = terms.map(term => term.term);
    const regex = new RegExp(`\\b(${termNames.join('|')})\\b`, 'gi');
    const newValue = value.replace(regex, match => {
      return `<a href="#" class="underline" data-term="${match}">${match}</a>`;
    });

    return this.sanitizer.bypassSecurityTrustHtml(newValue);

  }

}
