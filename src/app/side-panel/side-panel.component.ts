import {Component, Input, WritableSignal} from '@angular/core';
import {TermAndDefinition} from "../../../lib/types";

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {
  @Input() termAndDef?: TermAndDefinition;

  constructor() { }

}
