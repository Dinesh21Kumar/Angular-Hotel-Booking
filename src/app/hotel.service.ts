import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Booking } from './Booking';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url = 'http://localhost:8080/Hotel_Management/rest/HotelService/hotels';
  constructor(private http: HttpClient) { }


  getHotels() {
    return this
      .http
      .get(this.url);
  }

  doGet(u) {
    this.url = u;
    return this.http.get(this.url);
  }

  doPost(u, b: Booking) {
    this.url = u;
    var h = { "Content-Type": "application/json" };
    let headers = new HttpHeaders(
      { "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Origin": "true" }
    );
    return this.http.post(this.url, {
      "hotel_id": b.hotel_id,
      "hotel_name": b.hotel_name,
      "check_in_date": b.check_in_date,
      "check_out_date": b.check_out_date,
      "no_of_guest": b.no_of_guest,
      "no_of_rooms": b.no_of_rooms,
      "user_name": b.user_name,
      "booking_date": b.booking_date,
      "booking_status": b.booking_status
    }, { headers })
  }

  getHotelsByCity(u, city: string) {
    this.url = u;
    var h = { "Content-Type": "application/json" };
    let headers = new HttpHeaders(
      { "Content-Type": "application/json", "Accept": "application/json" }
    )
      ;
    return this.http.post(this.url, {
      "city": city
    }, { headers })
  }
}
