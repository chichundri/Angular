import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})

export class ExpressionComponent {
  private star = false;
  private get symbol(): string {
      return this.star ? '&#10032;' : '&#10003;';
  }

  private rating(count: number): string {
      return 'Your current rating is ' + count;
  }
}