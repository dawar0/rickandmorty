export interface Filters {
  status: "Alive" | "Dead" | "unknown" | "";
  species:
    | "Human"
    | "Alien"
    | "Humanoid"
    | "Mytholog"
    | "Poopybutthole"
    | "Animal"
    | "Robot"
    | "Cronenberg"
    | "Disease"
    | "Parasite"
    | "Vampire"
    | "unknown"
    | "";
  gender: "male" | "female" | "genderless" | "unknown" | "";
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  episode: Episode[];
  url: string;
}
export type Episode = {
  name: string;
};

export type FavoriteCharacter = Character;
