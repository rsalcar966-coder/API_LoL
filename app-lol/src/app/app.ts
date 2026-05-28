import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
