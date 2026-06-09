import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../app/services/character';
import { Character } from '../../model/character';

interface Role {
  name: string;
  icon: string;
  description: string;
}

interface Champion {
  id: string;
  name: string;
  title?: string;
  role: string;
  imageUrl?: string;
  winRate: number;
  pickRate: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
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
  allChampions: Champion[] = [];
  isLoading = true;
  activeFilter: string | null = null;

  private filterSub!: Subscription;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.allChampions = this.mapChampions(data);
        this.featuredChampions = this.allChampions;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los campeones:', err);
        this.isLoading = false;
      },
    });

    this.filterSub = this.characterService.filtered$.subscribe((filtered) => {
      if (filtered === null) {
        this.featuredChampions = this.allChampions;
        this.activeFilter = null;
      } else {
        this.featuredChampions = this.mapChampions(filtered);
      }
    });

    this.characterService.activeFilter.subscribe(
      (filter) => (this.activeFilter = filter)
    );
  }

  ngOnDestroy(): void {
    this.filterSub?.unsubscribe();
  }

  private mapChampions(data: Character[]): Champion[] {
    return data.map((char) => ({
      id: char.id,
      name: char.name,
      title: char.title,
      role: char.roles && char.roles.length > 0 ? char.roles[0] : (char.role ?? 'Desconocido'),
      imageUrl: char.thumbnailUrl ?? char.imageUrl,
      winRate: 50.0,
      pickRate: 10.0,
    }));
  }
}
