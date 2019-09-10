import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DisclaimersComponent } from './disclaimers/disclaimers.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';
import { DalphateamComponent } from './dalphateam/dalphateam.component';
import { DalphaportfolioComponent } from './dalphaportfolio/dalphaportfolio.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [ StrategyComponent, PortfolioComponent, DisclaimersComponent, OurteamComponent, PortfolioCardComponent,  DalphateamComponent, DalphaportfolioComponent, ContactusComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }