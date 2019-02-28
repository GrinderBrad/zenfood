import { Component } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'my-angular-app';
}
