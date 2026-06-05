import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {
  public id: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!;
  }
}
