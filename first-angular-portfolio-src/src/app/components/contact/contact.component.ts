import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputErr:string = '*Please fill in missing input fields or fill a valid email address';
  msgSuccess:string = 'Your message has been sent!';
  bool:boolean;
 
  constructor(private http: HttpClient, private router: Router) { 
  }

  ngOnInit() {
  }

  alertInput() {
    var name = <HTMLInputElement>document.getElementById('inputName'),
        email = <HTMLInputElement>document.getElementById('inputEmail'),
        msg = <HTMLInputElement>document.getElementById('inputMsg');

    var obj = {
      name: name.value,
      email: email.value,
      message: msg.value
    } 
    
   let validateEmail = () => {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;
      return re.test(email.value); 
    }

     if(!name.value || !email.value || !msg.value || !validateEmail()) {    
      this.bool = true;
     } else {
       this.bool = false;
       
       setTimeout(() => {
        window.location.reload()
       }, 1500);

       // http request must have return statement
       // no need to use json.stringify if you use body-parser
      return this.http.post('https://mrwanzein.herokuapp.com/client-contact', obj).subscribe();
     }
  }

  
}
