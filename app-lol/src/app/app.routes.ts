import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';
import { ChampionsComponent } from '../components/champions/champions';
import { StatisticsComponent } from '../components/statistics/statistics';
import { BuildsComponent } from '../components/builds/builds';
import { CharacterDetail } from '../components/character-detail/character-detail';
import { TanksComponent } from '../components/tanks/tanks';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: Home },
    { path: 'campeones', component: ChampionsComponent },
    { path: 'campeon/:id', component: CharacterDetail },
    { path: 'estadisticas', component: StatisticsComponent },
    { path: 'builds', component: BuildsComponent },
    { path: 'tanques', component: TanksComponent },
    { path: 'contacto', component: Contact },
];
