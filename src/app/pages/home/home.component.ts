import { Component } from '@angular/core';
import { dataFake } from '../../dataFake/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  speedruns = dataFake;
}
