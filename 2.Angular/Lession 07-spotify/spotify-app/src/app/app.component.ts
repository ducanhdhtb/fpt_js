import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Artists } from './artist/artist.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spotify-app';
  value: string;
  data = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  onSearch(value) {
    if (value) {
      this.dataService
        .getArtist(value) // Observable
        .toPromise()
        .then(({ artists: { items } }: Artists) => {
          this.data = items;
        })
        .catch(err => {
          this.data = [];
          alert('Error token');
        });
    } else {
      this.data = [];
      this.router.navigateByUrl('/');
    }
  }
}
