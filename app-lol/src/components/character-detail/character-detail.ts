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

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!;
    this._characterService.getCharacterById(this.id).subscribe({
      next: (data) => (this.character = data),
      error: (err) => console.error('Error cargando campeón:', err),
    });
  }
}
