import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TalksComponent } from './talks/talks.component';
import { AboutComponent } from './about/about.component';



import {TransferHttpCacheModule} from '@nguniversal/common';

import { routes } from './routes';

import { TalksService } from './services/talks.services';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

/*Pipes*/
import { ExistsPipe } from './pipes/exists.pipe';
import {LimitTo}from './pipes/limitTo.pipe';

/*Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TalksComponent,
    AboutComponent,
    ExistsPipe,
    LimitTo,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
