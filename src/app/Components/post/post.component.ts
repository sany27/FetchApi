import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports:[HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  httpClient = inject(HttpClient);
  data : any =[];

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData(){
    this.httpClient
    .get('https://dummyjson.com/products')
    .subscribe((data : any)=>{
      this.data = data.products;
      // console.log(data.products);
    })
  }
      
}
