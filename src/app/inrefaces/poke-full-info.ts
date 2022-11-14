export interface PokeFullInfoItem {
  name: string;
  url: string;
  [key: string]: unknown;
}

export interface PokeStats {
  base_stat: number;
  effort: number;
  stat: PokeFullInfoItem;
}

export interface PokeTypes {
  slot: number;
  type: PokeFullInfoItem;
}

export interface PokeFullInfo {
  abilities: PokeFullInfoItem[];
  base_experience: unknown;
  forms: PokeFullInfoItem[];
  game_indices: PokeFullInfoItem[];
  height: number;
  held_items: PokeFullInfoItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokeFullInfoItem[];
  name: string;
  order: number;
  past_types: PokeFullInfoItem[];
  species: PokeFullInfoItem;
  sprites: PokeFullInfoItem;
  stats: PokeStats[];
  types: PokeTypes[];
  weight: number;

  // custom fields
  imageSrc?: string;
}
