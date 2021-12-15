import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  SERVICE_ID = 'service_r0b5wqi'
  TEMPLATE_ID = 'template_mzog1g8'
  USER_ID = 'user_i7gGxnGkYMcFUFT4IdYm4'

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.USER_ID)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}