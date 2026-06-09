import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../app/services/character';
import { Character } from '../../model/character';

@Component({
  selector: 'app-tanks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tanks.html',
  styleUrl: './tanks.css',
})
export class TanksComponent implements OnInit {
  tanks: Character[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getTanks().subscribe({
      next: (data) => {
        this.tanks = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando tanques:', err);
        this.errorMessage = 'No se pudieron cargar los tanques. Verifica que el backend esté activo.';
        this.isLoading = false;
      },
    });
  }
}
