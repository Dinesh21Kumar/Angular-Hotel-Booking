import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service'
import { Hotel } from '../Hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  p: number = 1;
  hotels: Hotel[];
  url:string;
  constructor(private hotelService: HotelService,private route:Router) { }

  ngOnInit() {
    this.url = "http://localhost:8080/Hotel_Management/rest/HotelService/hotels";
    this.hotels =[];
    this
      .hotelService
      .doGet(this.url)
      .subscribe((data: Hotel[]) => {
        this.hotels = data;
    });
  }

  bookHotel(id) {
    this.route.navigate(['bookhotel/'+id]);
  }

}
