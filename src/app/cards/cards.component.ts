import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() image!: string
  @Input() title!: string
  @Input() description!: string
}
