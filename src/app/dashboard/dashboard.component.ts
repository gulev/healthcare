import { Component, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http }                   from '@angular/http';
import { GlossaryService }         from '../glossary.service';
import { StatesService }         from '../states.service';

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
    private statesService: StatesService,
  ) { }

  glossary:Array<any> = [];
  states:Array<any> = [];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 // To Do
 // Place live data to the barChart
  public barChartLabels:string[] = ['2000'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [], label: 'Spanish'},
    {data: [], label: 'English'}
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

 loadStates(){
   this.statesService.getStates().subscribe(data => this.states = data)
 }

 reloadData() {
   let allPageAudiance:number = 0;
   let otherPageAudiance:number = 0;
   let unknownType:number = 0;
   let glossaryType:number = 0;
   let langEn:number = 0;
   let langEs:number = 0;

   this.glossaryService.getGlossary().subscribe(data => this.glossary = data);
   this.statesService.getStates().subscribe(data => this.states = data);


   for(let item of this.states["states"]){
     if(item.lang === 'en'){
       langEn = langEn + 1;
     }else{
       langEs = langEs + 1;
     }
   }

    this.barChartOptions = {
     scaleShowVerticalLines: false,
     responsive: true
   };

    this.barChartType = 'bar';
    this.barChartLegend = true;

   this.barChartLabels = [];
   this.barChartLabels = ['2000'];

   this.barChartData = [
     {data: [langEs], label: 'Spanish'},
     {data: [langEn], label: 'English'}
   ]

   console.log(langEs, langEn)

   for( let item of this.glossary["glossary"]){
     if(item.page_audience === 'all'){
       allPageAudiance = allPageAudiance + 1
     }else{
       otherPageAudiance =  otherPageAudiance + 1
     }
     if(item.page_type === 'glossary'){
       glossaryType = glossaryType + 1
     }else{
       unknownType = unknownType + 1
     }

   }

    this.polarAreaChartData = [allPageAudiance, otherPageAudiance, glossaryType, unknownType];
 }

  ngOnInit() {
     this.loadGlossary();
     this.loadStates();
  }

  ngAfterViewInit(){
  }
}
