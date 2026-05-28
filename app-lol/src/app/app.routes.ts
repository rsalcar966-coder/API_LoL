import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';

export const routes: Routes = [
    { path: "contact", component: Contact },
    { path: "", component: Home }
];
