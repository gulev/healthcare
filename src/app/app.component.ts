import { Component } from '@angular/core';
import { Http ,HttpModule }                                   from '@angular/http';
import { HttpInterceptorModule, HttpInterceptorService } from 'ng-http-interceptor';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  requests:Array<any> = [];
  res:any = null;
  error:any = null;

  constructor(
    private http: Http,
    private httpInterceptor: HttpInterceptorService
  ) {

    this.httpInterceptor.request().addInterceptor((data, method) => {
      $(".loadingIndicator").css('display',"block")
      return data;
    });

    this.httpInterceptor.response().addInterceptor(
      res => res.do(
        () => $(".loadingIndicator").css('display',"none"),
        e => this.error = e)
      );


  }
}
