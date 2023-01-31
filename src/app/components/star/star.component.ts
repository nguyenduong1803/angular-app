import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  faStar = faStar;
  starWidth: number = 0;
  @Input() star: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    this.starWidth = (this.star * 90) / 5;
  }
  @Output() onClickStar: EventEmitter<any> = new EventEmitter();
  onClick() {
    this.onClickStar.emit(this.star);
  }
  constructor() {}
}
