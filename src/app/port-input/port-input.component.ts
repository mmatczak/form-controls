import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Port, PortSearchService, portServiceInjectionToken } from '../port-search-service/port-search.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-port-input',
  templateUrl: './port-input.component.html',
  styleUrls: ['./port-input.component.scss']
})
export class PortInputComponent {
  @Input()
  ofFormControl: FormControl;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => this.portSearch.search(term))
    )

  resultFormatter = (port: Port) => `${port.name} (${port.code})`;
  formatter = (port: Port) => `${port.name}`;

  constructor(@Inject(portServiceInjectionToken) private readonly portSearch: PortSearchService) {
  }
}
