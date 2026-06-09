import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
