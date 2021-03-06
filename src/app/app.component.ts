import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shop';
  results = [];
  products = [];

  constructor(private http: HttpClient){

  }

  ngOnInit() : void {
    interface Product {
      name: string;
      category: string;
      price: number;
      image: string;
    }
    this.http.get('https://localhost:44358/api/Products').subscribe(data => {
      for (let i in data) this.results.push(data[i])
    });
  }
}
