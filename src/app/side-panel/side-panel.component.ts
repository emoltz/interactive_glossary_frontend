import {Component, EventEmitter, Input, Output, WritableSignal} from '@angular/core';
import {TermAndDefinition} from "../../../lib/types";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-side-panel',
  standalone: true,
  templateUrl: './side-panel.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  @Input() termsAndDefs: TermAndDefinition[] = [];
  @Output() close = new EventEmitter<TermAndDefinition>();

  onClose(termAndDef: TermAndDefinition){
    this.close.emit(termAndDef);
  }
}
