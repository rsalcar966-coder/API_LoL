import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';
import { ChampionsComponent } from '../components/champions/champions';
import { StatisticsComponent } from '../components/statistics/statistics';
import { BuildsComponent } from '../components/builds/builds';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: Home },
    { path: 'campeones', component: ChampionsComponent },
    { path: 'estadisticas', component: StatisticsComponent },
    { path: 'builds', component: BuildsComponent },
    { path: 'contacto', component: Contact },
];
