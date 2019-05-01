import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ormae';

  constructor(private httpService: HttpService) {

  }

  downloadData() {
    this.httpService.getData().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
}
