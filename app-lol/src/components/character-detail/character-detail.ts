import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../app/services/character';
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {
  public id: string = '';
  public character: Character | null = null;
  public errorMessage: string = ''; // Chivato por si falla la carga

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!;

    this._characterService.getCharacterById(this.id).subscribe({
      next: (data) => {
        console.log('Datos recibidos del backend:', data);
        if (!data) {
          this.errorMessage = 'El backend respondió, pero el personaje no existe en MongoDB.';
        }
        this.character = data;
      },
      error: (err) => {
        console.error('Error cargando campeón:', err);
        this.errorMessage = 'No se pudo conectar con Spring Boot. Comprueba el puerto y los CORS.';
      },
    });
  }
}