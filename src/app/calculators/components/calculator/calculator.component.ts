import { Component, OnInit } from '@angular/core';

interface KeyInfo {
  name: string;
  length: number;
  type: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title: string = 'angular-calculator';
  problemTitle: string = '';
  
  totalValue: number = 0;
  mathProblem: string[] = [];

  keyButtons: KeyInfo[][] = [
    [{ name: 'C', length: 2, type: 'clear' }, { name: '%', length: 1, type: 'percentage' }, { name: '/',  length: 1, type: 'math' }],
    [{ name: '7', length: 1, type: 'number' }, { name: '8', length: 1, type: 'number' }, { name: '9',  length: 1, type: 'number' }, { name: '*',  length: 1, type: 'math' }],
    [{ name: '4', length: 1, type: 'number' }, { name: '5', length: 1, type: 'number' }, { name: '6',  length: 1, type: 'number' }, { name: '-',  length: 1, type: 'math' }],
    [{ name: '1', length: 1, type: 'number' }, { name: '2', length: 1, type: 'number' }, { name: '3',  length: 1, type: 'number' }, { name: '+',  length: 1, type: 'math' }],
    [{ name: '+/-', length: 1, type: 'sign' }, { name: '0', length: 1, type: 'number' }, { name: '.',  length: 1, type: 'decimal' }, { name: '=',  length: 1, type: 'equal' }]
  ];

  ngOnInit(): void {}  

  keyPress(event: any) {
    switch(event.type) {
      case 'number': 
        if(this.mathProblem.length !== 0 && this.mathProblem[this.mathProblem.length-1] === '=') {
          this.mathProblem.length = 0;
        }
        if(this.mathProblem.length === 0 || !Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
          this.mathProblem.push(event.letterDisplay);
        }else {
          this.mathProblem[this.mathProblem.length-1] = this.mathProblem[this.mathProblem.length-1] + event.letterDisplay;
        }
        break;
      case 'clear':
        this.mathProblem.length = 0;
        break;
      case 'percentage':
        if(this.mathProblem.length != 0 && Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
          this.mathProblem[this.mathProblem.length-1] = (parseFloat(this.mathProblem[this.mathProblem.length-1])/100).toString();
        }
        break;
      case 'math':
        if(this.mathProblem.length != 0 && Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
          this.mathProblem.push(event.letterDisplay);
        }
        break;
      case 'equal':
        if(this.mathProblem.length != 0 && Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
          this.mathProblem.push(event.letterDisplay);  
        }
        break;
      case 'sign':
        if(this.mathProblem.length != 0 && Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
          this.mathProblem[this.mathProblem.length-1] = (parseInt(this.mathProblem[this.mathProblem.length-1])*-1).toString();
        }
        break;
      case 'decimal':
        if(this.mathProblem.length != 0 
          && Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1])) 
          && !this.mathProblem[this.mathProblem.length-1].includes('.')) {
          this.mathProblem[this.mathProblem.length-1] = this.mathProblem[this.mathProblem.length-1] + event.letterDisplay;
        }
        break;
    }

    this.problemTitle = this.mathProblem.join(" ");

    if(this.mathProblem.length > 0) {
      if(Number.isFinite(parseInt(this.mathProblem[this.mathProblem.length-1]))) {
        this.totalValue = eval(this.problemTitle);
      }
    }else {
      this.totalValue = 0;
    }
  }

  getButtonStyle(length: number): string {
    let styleName: string = "btn-quarter";

    switch(length) {
      case 2:
        styleName = "btn-half";
        break;
      case 3:
        styleName = "btn-third-quarter";
        break;
      case 4:
        styleName = "btn-full";
        break;
    }

    return styleName;
  }
}
