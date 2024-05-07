import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesBaseComponent } from './courses-base/courses-base.component';
import { CoursesAddEditeComponent } from './courses-add-edite/courses-add-edite.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesBaseComponent,
    CoursesAddEditeComponent,
    CoursesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
