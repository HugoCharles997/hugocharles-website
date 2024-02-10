import { Component, OnInit } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.animSocialMediaIcons();
  }

  timeout: boolean = false;

  private animSocialMediaIcons(): void {
    gsap.from('.twitter', {
      duration: 1.5,
      ease: 'expo.out',
      x: -230,
      scale: 0.5,
    });

    gsap.from('.github', {
      duration: 1.5,
      ease: 'expo.out',
      x: -230,
      scale: 0.5,
    });

    gsap.from('.linkedin', {
      duration: 1.5,
      ease: 'expo.out',
      x: -230,
      scale: 0.5,
    });
  }
}
