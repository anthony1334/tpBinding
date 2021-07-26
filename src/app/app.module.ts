import { SharedModule } from './site/shared/shared.module';
import { ErrorsModule } from './site/errors/errors.module';
import { HomeModule } from './site/home/home.module';
import { FilmsModule } from './site/films/films.module';
import { AboutModule } from './site/about/about.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    FilmsModule,
    HomeModule,
    AppRoutingModule,
    ErrorsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
