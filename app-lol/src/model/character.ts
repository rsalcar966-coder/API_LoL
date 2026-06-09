export interface CharacterInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface Character {
  id: string;
  name: string;
  title?: string;
  lore?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  role?: string;
  roles?: string[];
  info?: CharacterInfo;
}
