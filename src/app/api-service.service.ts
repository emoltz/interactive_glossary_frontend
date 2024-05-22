import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TermAndDefinition, TermsAndDefsResponse} from "../../lib/types";

const BASE_URL = 'http://0.0.0.0:8000/api/'
const endpoints = {
  all_terms_and_defs: 'all_terms_and_defs/',
  terms: 'get_terms',
  languages: 'get_languages/',
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  terms = signal<string[]>([]);
  termsAndDefs = signal<TermAndDefinition[]>([]);
  languages = signal<string[]>([]);


  constructor(private http: HttpClient) {

  }

  fetchLanguages(): void {
    this.http.get<string[]>(`${BASE_URL + endpoints.languages}`, {}).subscribe({
      next: (data: any) => {
        const res: string[] = data.languages
        this.languages.set(res);
      },
      error: error => {
        console.error('Error fetching languages:', error);
      }
    });
  }


  fetchTermsAndDefinitions(grade_level: number | null = null, language: string | null = null) {
    let body = {}
    if (grade_level || language) {
      body = {
        grade_level: grade_level,
        language: language
      }
    }

    this.http.post<TermsAndDefsResponse>(`${BASE_URL + endpoints.all_terms_and_defs}`, body).subscribe({
      next: data => {
        const dataArr: TermAndDefinition[] = data.terms_and_definitions
        this.termsAndDefs.set(dataArr);
      },
      error: error => {
        console.error('Error fetching terms and defs:', error);
      }
    });

  }


  fetchTerms() {
    this.http.get<any>(`${BASE_URL + endpoints.terms}`).subscribe({
      next: data => {
        this.terms.set(data.terms); // Update the signal value
      },
      error: error => {
        console.error('Error fetching terms:', error);
      }
    });
  }
}
