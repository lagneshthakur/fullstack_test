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
      this.createCSV(response, 'people.csv');
    }, (error) => {
      console.log(error);
    });
  }

  createCSV(data: any, filename: string) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    const csv = [];
    data.forEach(dataItem => {
      csv.push(dataItem.firstName + ',' + dataItem.lastName);
    });
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], {type: 'text/csv' });
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'people.csv';
    anchor.href = blobURL;
    anchor.click();
  }
}
