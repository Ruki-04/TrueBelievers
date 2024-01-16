import { Component, Input } from '@angular/core';
import { ComicsServiceService } from '../comics-service.service';
@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent {
  @Input() j: number = 0;
  constructor(public info: ComicsServiceService) {}
}
