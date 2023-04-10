import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
  personMenuOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {}

  togglePersonMenu = () => {
    this.personMenuOpen = !this.personMenuOpen;
  }

  closePersonMenu = () => {
    this.personMenuOpen = false;
  }

  openLinkInNewTab(link: string) {
    window.open(link, '_blank');
    this.closePersonMenu(); 
  }

  doPreventDefault($event: Event) {
    $event.preventDefault();
  }
}
