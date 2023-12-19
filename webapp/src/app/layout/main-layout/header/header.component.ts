import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
//two methods for animating current title, and another for animating navbar
//reusable methods with parameters for delay?
export class HeaderComponent {
  showMenu = false;

  private menuItems: string[] = ['home', 'about', 'projects'];

  public toggleMenu(): void {
    //anim menu btn on each click
    gsap.to('.toggle-btn', {
      duration: 0.1,
      y: -10,
      yoyo: true,
      repeat: 1,
      ease: 'expo.out',
    });

    if (this.showMenu) {
      setTimeout(() => {
        gsap.from('.current-menu', {
          duration: 1,
          x: 700,
          ease: 'expo.out',
          scale: 0.2,
        });
      }, 851);

      setTimeout(() => {
        this.showMenu = !this.showMenu;
      }, 850);

      //anim navbar items
      gsap.to('.home-button', {
        duration: 1.4,
        ease: 'bounce.out',
        y: -160,
        scale: 0.5,
      });

      setTimeout(() => {
        gsap.to('.about-button', {
          duration: 1.4,
          ease: 'bounce.out',
          y: -160,
          scale: 0.5,
        });
      }, 100);

      setTimeout(() => {
        gsap.to('.projects-button', {
          duration: 1.4,
          ease: 'bounce.out',
          y: -160,
          scale: 0.5,
        });
      }, 200);

      setTimeout(() => {
        gsap.to('.music-button', {
          duration: 1.4,
          y: -160,
          ease: 'bounce.out',
          scale: 0.5,
        });
      }, 300);

      setTimeout(() => {
        gsap.to('.contact-button', {
          duration: 1.4,
          y: -160,
          ease: 'bounce.out',
          scale: 0.5,
        });
      }, 400);
    } else {
      //make disappear current menu
      gsap.to('.current-menu', {
        duration: 1.2,
        x: 600,
        ease: 'expo.out',
        scale: 0.2,
      });
      setTimeout(() => {
        this.showMenu = !this.showMenu;

        //anim navbar when home btn disappear
        setTimeout(() => {
          gsap.from('.home-button', {
            duration: 1.4,
            ease: 'expo.out',
            y: -160,
            scale: 0.5,
          });

          gsap.from('.about-button', {
            duration: 1.6,
            ease: 'expo.out',
            y: -200,
            scale: 0.5,
          });

          gsap.from('.projects-button', {
            duration: 1.8,
            ease: 'expo.out',
            y: -200,
            scale: 0.5,
          });

          gsap.from('.music-button', {
            duration: 2,
            y: -200,
            ease: 'expo.out',
            scale: 0.5,
          });

          gsap.from('.contact-button', {
            duration: 2.2,
            y: -200,
            ease: 'expo.out',
            scale: 0.5,
          });
        });
      }, 330);
    }
  }
}
