import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent, MainContentComponent],
  imports: [CommonModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
