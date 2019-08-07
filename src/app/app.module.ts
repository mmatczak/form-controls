import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeObjectFormComponent } from './some-object-form/some-object-form.component';
import { PortInputComponent } from './port-input/port-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PortSearchDummyService, portServiceInjectionToken } from './port-search-service/port-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SomeObjectFormComponent,
    PortInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  providers: [{provide: portServiceInjectionToken, useClass: PortSearchDummyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
