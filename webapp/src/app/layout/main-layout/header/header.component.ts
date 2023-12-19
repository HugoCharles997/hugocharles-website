import { Component, EventEmitter, Output } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
