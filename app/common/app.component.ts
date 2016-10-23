import { Component } from '@angular/core'
import { CarPartsComponent } from '../car-parts/car-parts.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/common/app.html',
  directives:[CarPartsComponent]
})

export class AppComponent {
  title = 'Racing Cars'
}