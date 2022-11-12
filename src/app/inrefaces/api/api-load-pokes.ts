import {Poke} from "../poke";

export interface ApiLoadPokes {
  count: number,
  results: Poke[],
}
