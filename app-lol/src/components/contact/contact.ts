import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  summonerName: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;

  formData: ContactForm = {
    summonerName: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    if (!this.formData.summonerName || !this.formData.email || !this.formData.message) {
      return;
    }

    console.log('Formulario enviado:', this.formData);
    this.submitted = true;

    // Reset after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        summonerName: '',
        email: '',
        subject: '',
        message: '',
      };
    }, 3000);
  }
}
