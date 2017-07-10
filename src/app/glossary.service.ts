import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';
import { Glossary }                 from './glossary';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GlossaryService {

  constructor(
    private http: Http
  ) { }

    getGlossary(): Observable<Glossary[]> {
      return this.http.get(`https://www.healthcare.gov/api/glossary.json`)
      .map((res:Response) => res.json());
  }

}
