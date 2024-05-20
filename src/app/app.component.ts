import {Component, effect, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
 import {ApiService} from "./api-service.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'interactive_glossary_frontend';
  api: ApiService = inject(ApiService);

  ngOnInit() {
    this.api.fetchTerms();

  }


}
