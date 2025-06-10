import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thing } from '../../models/thing.model';
import { Area } from '../../models/area.model';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  private http = inject(HttpClient);

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('/assets/data/things.json');
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('/assets/data/areas.json');
  }
}
