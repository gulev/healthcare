import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http }                   from '@angular/http';
import { GlossaryService }         from '../glossary.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private glossaryService: GlossaryService,
  ) { }

  glossary:Array<any> = [];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 // To Do
 // Place live data to the barChart
  public barChartLabels:string[] = ['2010', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Spanish'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'English'}
  ];

  // events
  public chart_Clicked(e:any):void {
    console.log(e);
  }

  public chart_Hovered(e:any):void {
    console.log(e);
  }

  // PolarArea
  // To Do
  // Place live data to the polarArea
public polarAreaChartLabels:string[] = ['Available To All','Unknown Availability', 'Type Glossary', 'Type Unknown'];
public polarAreaChartData:number[] = [213, 287, 287, 213];
public polarAreaLegend:boolean = true;

public polarAreaChartType:string = 'polarArea';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

loadGlossary() {
   this.glossaryService.getGlossary().subscribe(data => this.glossary = data);
 }

ngOnInit() {
   this.loadGlossary();
}

  ngAfterViewInit(){
    //console.log(this)
    setTimeout(() => {
        console.log('View is fully loaded');
        console.log(this.glossary);
    }, 1000);
  }
}
