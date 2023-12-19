import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu = false;

  toggleMenu() {
    gsap.to('.toggle-btn', { duration: 0.3, y: -10, yoyo: true, repeat: 1 });
    setTimeout(() => {
      this.showMenu = !this.showMenu;
    }, 1000);

    gsap.to('.current-menu', {
      duration: 2,
      x: '100%',
      ease: 'bounce.out(1, 0.75)',
    });
  }
}
