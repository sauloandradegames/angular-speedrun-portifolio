import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = '';
  @Input()
  gamePlatform:string = '';
  @Input()
  gameName:string = '';
  @Input()
  runCategory:string = '';
  @Input()
  runDate:string = '';
  @Input()
  runTime:string = '';
  @Input()
  runTimeMethod:string = '';
  @Input()
  runLink:string = '';
}
