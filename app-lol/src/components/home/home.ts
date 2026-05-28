import { Component } from '@angular/core';

interface Role {
  name: string;
  icon: string;
  description: string;
}

interface Champion {
  name: string;
  title: string;
  role: string;
  imageUrl: string;
  winRate: number;
  pickRate: number;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  championCount = 168;

  roles: Role[] = [
    {
      name: 'Top',
      icon: '🗡️',
      description: 'Domina la línea superior con duelos intensos y splitpush.',
    },
    {
      name: 'Jungla',
      icon: '🌿',
      description: 'Controla el mapa, asegura objetivos y gankea a tu equipo.',
    },
    {
      name: 'Mid',
      icon: '⚡',
      description: 'El centro del mapa. Roamea y genera impacto global.',
    },
    {
      name: 'ADC',
      icon: '🏹',
      description: 'Daño sostenido a distancia. Lleva el late game.',
    },
    {
      name: 'Support',
      icon: '🛡️',
      description: 'Protege, visiona y habilita a tu equipo para la victoria.',
    },
  ];

  featuredChampions: Champion[] = [
    {
      name: 'Yasuo',
      title: 'El Imperdonable',
      role: 'Mid',
      imageUrl: 'Yasuo.jpg',
      winRate: 49.8,
      pickRate: 10.2,
    },
    {
      name: 'Jinx',
      title: 'La Bala Perdida',
      role: 'ADC',
      imageUrl: 'Jinx_.jpg',
      winRate: 52.1,
      pickRate: 8.7,
    },
    {
      name: 'Thresh',
      title: 'El Carcelero',
      role: 'Support',
      imageUrl: 'Thresh.jpg',
      winRate: 51.3,
      pickRate: 12.4,
    },
    {
      name: 'Lee Sin',
      title: 'El Monje Ciego',
      role: 'Jungla',
      imageUrl: 'Lee Sin.jpg',
      winRate: 48.9,
      pickRate: 14.1,
    },
    {
      name: 'Darius',
      title: 'La Mano de Noxus',
      role: 'Top',
      imageUrl: 'Darius.jpg',
      winRate: 51.7,
      pickRate: 7.3,
    },
    {
      name: 'Ahri',
      title: 'La Zorra de Nueve Colas',
      role: 'Mid',
      imageUrl: 'Ahri.jpg',
      winRate: 52.4,
      pickRate: 9.8,
    },
  ];
}
