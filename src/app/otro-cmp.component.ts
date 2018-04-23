import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otro-cmp',
  template: `
    <p>
      otro-cmp works!
    </p>
  `,
  styles: [`
    p{
      color: yellow;
      }
      `]
})
export class OtroCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
