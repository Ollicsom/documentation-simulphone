import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.index);
  }

}
