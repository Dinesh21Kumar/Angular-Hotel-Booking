import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../Hotel';
import { Router } from '@angular/router';
import { Booking } from '../Booking';


@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.scss']
})
export class BookingpageComponent implements OnInit {

  hotelId: string;
  h: Hotel;
  url: string;
  public bookingOrder: Booking;
  public bookingResponse: any;
  public created: number;
  date1: any;
  date2: any;
  noOfRooms:any;
  noOfGuests: any;
  constructor(private route: ActivatedRoute, private hotelService: HotelService, private r: Router) { }

  ngOnInit() {

    this.route.params.subscribe(res => { this.hotelId = res.id });
    console.log("hotel id = " + this.hotelId);
    this.url = "http://localhost:8080/Hotel_Management/rest/HotelService/hotels/" + this.hotelId;
    console.log(this.url);
    this.hotelService.doGet(this.url).subscribe((d: Hotel[]) => {
      console.log(d[0]);
      this.h = d[0];
    })
  }

  goBackHome() {
    this.r.navigate(['home']);
  }

  submit(name: any, id: any, d1: any, d2: any, g: any, rms: any) {
    console.log("check in:" + d1);
    console.log("check out:" + d2);
    console.log("guests" + g);
    console.log("rooms:" + rms);
    if (d1 == null || d2 == null || g == null || rms == null) {
      alert("Please make sure all details are filled Properly! Thank You")
    }
    else if (d2 < d1) {
      alert("Please make sure check out time is larger than check in time! Thank You")
    }
    else if (g <= 0 || rms <= 0) {
      alert("Please make sure no of guests or no of rooms >=1! Thank You")
    }
    else {
      this.bookingOrder = {
        hotel_id: id, user_name: "", hotel_name: "", check_in_date: null, check_out_date: null,
        no_of_guest: 0, no_of_rooms: 0, booking_date: null, booking_status: ""
      };
      this.bookingOrder.check_in_date = d1.toDateString();
      this.bookingOrder.check_out_date = d2.toDateString();
      this.bookingOrder.no_of_guest = g;
      this.bookingOrder.no_of_rooms = rms;
      this.bookingOrder.booking_status = "booked";
      this.bookingOrder.hotel_name = name;
      this.bookingOrder.booking_date = new Date().toDateString();
      this.bookingOrder.hotel_id = id;
      this.bookingOrder.user_name = "dinesh@test";
      console.log(this, this.bookingOrder);
      this.url = "http://localhost:8080/Hotel_Management/rest/HotelService/booking/create";

      //calling the create booking request api
      this.hotelService.doPost(this.url, this.bookingOrder).subscribe(
        response => {
          console.log("PUT Request is successful ", response);
          this.bookingResponse = response;
          this.created = response["created"];
        },
        error => {
          console.log("Error", error);
        });
    }
  }

}
