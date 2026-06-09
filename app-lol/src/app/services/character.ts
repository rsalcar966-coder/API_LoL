import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from '../../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  private filteredChampions$ = new BehaviorSubject<Character[] | null>(null);
  readonly filtered$ = this.filteredChampions$.asObservable();

  private activeFilter$ = new BehaviorSubject<string | null>(null);
  readonly activeFilter = this.activeFilter$.asObservable();

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  getTanks(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/filter/tank`);
  }


}
