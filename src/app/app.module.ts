
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { HeaderComponent } from './layouts/basic-layout/header/header.component';
import { MainComponent } from './layouts/basic-layout/main/main.component';
import { FooterComponent } from './layouts/basic-layout/footer/footer.component';
import { SearchModalComponent } from './layouts/basic-layout/header/search-modal/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
