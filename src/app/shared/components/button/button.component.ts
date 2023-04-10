import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  letterDisplay: string = 'C';

  @Input()
  type: string = 'number';
  
  @Output()
  keyPress: EventEmitter<{ letterDisplay: string, type: string }> = new EventEmitter<{ letterDisplay: string, type: string }>();
  
  ngOnInit(): void {}

  performKey() {
    this.keyPress.emit({ letterDisplay: this.letterDisplay, type: this.type});
  }
  
}
