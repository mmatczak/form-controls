import { Observable, of } from 'rxjs';
import { InjectionToken } from '@angular/core';

export interface Port {
  code: string;
  name: string;
}

export interface PortSearchService {
  search(term: string): Observable<Port[]>;
}

export const portServiceInjectionToken = new InjectionToken<PortSearchService>('PortSearchService');


const ports: Port[] = [
  {code: 'DEHAM', name: 'Hamburg'},
  {code: 'PLGDY', name: 'Gdynia'},
  {code: 'CNSHA', name: 'Shanghai'}
];

export class PortSearchDummyService implements PortSearchService {
  search(term: string): Observable<Port[]> {
    const matchingPorts = term ?
      ports.filter(port => port.code.toUpperCase().indexOf(term.toUpperCase()) !== -1
        || port.name.toUpperCase().indexOf(term.toUpperCase()) !== -1)
      : [...ports];
    return of(matchingPorts);
  }
}


