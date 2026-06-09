import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from '../../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  /** Stream reactivo: emite la lista filtrada cada vez que cambia */
  private filteredChampions$ = new BehaviorSubject<Character[] | null>(null);
  readonly filtered$ = this.filteredChampions$.asObservable();

  /** Indica si hay un filtro activo */
  private activeFilter$ = new BehaviorSubject<string | null>(null);
  readonly activeFilter = this.activeFilter$.asObservable();

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  getTanks(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/filter/tank`);
  }

  /** Aplica un filtro y emite los resultados a todos los suscriptores */
  applyTankFilter(): void {
    this.activeFilter$.next('Tank');
    this.getTanks().subscribe({
      next: (data) => this.filteredChampions$.next(data),
      error: (err) => {
        console.error('Error filtrando tanques:', err);
        this.filteredChampions$.next([]);
      },
    });
  }

  /** Limpia el filtro (vuelve a mostrar todos) */
  clearFilter(): void {
    this.activeFilter$.next(null);
    this.filteredChampions$.next(null);
  }
}
