export interface CharacterType {
  id: number;
  name: string;
  image: string;
}

interface LocalizationOriginProps {
  name: string;
  url: string;
}

export interface CharacterInfos extends CharacterType {
  gender: string;
  location: LocalizationOriginProps;
  origin: LocalizationOriginProps;
  species: string;
  status: string;
}
