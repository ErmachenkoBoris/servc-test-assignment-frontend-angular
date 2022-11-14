import { Poke } from '../inrefaces/poke';
import { PokeFullInfo } from '../inrefaces/poke-full-info';

export function addImageSrc(poke: Poke | PokeFullInfo): Poke | PokeFullInfo {
  return {
    ...poke,
    imageSrc: `https://avatars.dicebear.com/api/avataaars/${poke.name}.svg`
  };
}
