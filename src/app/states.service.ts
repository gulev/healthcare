  import { Injectable }     from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Headers, RequestOptions } from '@angular/http';
  import { States }        from './states';

  import 'rxjs/add/operator/map';
  import { Observable } from 'rxjs/Rx';

  @Injectable()
  export class StatesService {

    constructor(
      private http: Http
    ) { }

      getStates(): Observable<States[]> {
        return this.http.get(`https://www.healthcare.gov/api/states.json`)
        .map((res:Response) => res.json());
    }

  }
