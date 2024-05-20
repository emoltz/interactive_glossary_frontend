import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://0.0.0.0:8000/api/'
const endpoints = {
  post_all_terms_by_grade_level: 'all_terms_by_grade_level/',
  terms: 'get_terms'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  terms = signal<string[]>([]);


  constructor(private http: HttpClient) {
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
