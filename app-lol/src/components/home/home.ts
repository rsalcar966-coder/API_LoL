import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../app/services/character';

interface Role {
  name: string;
  icon: string;
  description: string;
}

interface Champion {
  id: string;
  name: string;
  title: string;
  role: string;
  imageUrl: string;
  winRate: number;
  pickRate: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
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

  featuredChampions: Champion[] = [];
  isLoading = true;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.featuredChampions = data.map((char) => ({
          id: char.id,
          name: char.name,
          title: char.title,
          role: char.roles && char.roles.length > 0 ? char.roles[0] : 'Desconocido',
          imageUrl: char.thumbnailUrl,
          winRate: 50.0,
          pickRate: 10.0,
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los campeones:', err);
        this.isLoading = false;
      },
    });
  }
}
