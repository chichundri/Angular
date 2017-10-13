import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { PaneDirective } from '../directives/pane.directive';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(PaneDirective) topLevelPanes : QueryList<PaneDirective>;
  @ContentChildren(PaneDirective, { descendants : true }) arbitraryNestedPanes : QueryList<PaneDirective>;

  get serializedPanes() : string {
    return this.topLevelPanes ? this.topLevelPanes.map(pane => pane.id).join(', ') : '';
  }

  get serializedNestedPanes() : string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(nestedPanes => nestedPanes.id).join(', ') : '';
  }
}
