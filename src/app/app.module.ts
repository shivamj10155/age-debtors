import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/nav/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './shared/nav/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
