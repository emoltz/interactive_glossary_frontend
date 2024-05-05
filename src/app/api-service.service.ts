import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const BASE_URL = 'http://0.0.0.0:8000/api/'
const endpoints = {
  post_all_terms_by_grade_level: 'all_terms_by_grade_level/',
  terms: 'get_terms'
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getTerms() {
    return this.http.get(BASE_URL + endpoints.terms)
  }
}
