import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent {

   // Radar
  public radarChartLabels:string[] = ['Cabeza', 'Tiros libres', 'Remate', 'Gambeta', 'Tiros del punto penal', 'Velocidad', 'Defensa'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Lionel Messi'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Cristiano Ronaldo'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
