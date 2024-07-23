import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // first
  img = '../../assets/map_1865269.png';
  header = 'Allow Location Acccess';
  description =
    '  Your Company needs it Personalised recommendations of service providers.  ';

  //second
  img2 = '../../assets/pushnoti.png';
  header2 = 'Get Notified';
  description2 =
    'Enhance your user experience by ensuring a seamless flow through the activation of notifications';

  // third
  img3 = '../../assets/done.png';
  header3 = 'Help us to improve the service';
  description3 =
    'In order to provide a better service we would like to collect your data for research purposes, you can decline it anytime!  ';
}
