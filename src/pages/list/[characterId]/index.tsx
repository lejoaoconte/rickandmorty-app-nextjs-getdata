import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { CharacterInfos } from "src/redux";
import api from "src/redux/api";

import {
  Container,
  ButtonGoBack,
  CharacterData,
  CharacterName,
  MoreInformations,
} from "./styles";

export default function Character() {
  const router = useRouter();
  const { characterId } = router.query;
  const [character, setCharacter] = useState<CharacterInfos>();

  useEffect(() => {
    (async () => {
      await api
        .get(`character/${characterId}`)
        .then((res) => {
          const character = res.data;
          setCharacter(character);
        })
        .catch((e) => {
          router.back();
        });
    })();
  }, []);

  return (
    <Container>
      <ButtonGoBack onClick={() => router.back()}>&#x3c; Go Back</ButtonGoBack>
      <CharacterName>{character?.name}</CharacterName>
      <CharacterData>
        <img alt={character?.name} src={character?.image} />
        <MoreInformations>
          <p>
            <span>Gender:</span> {character?.gender}{" "}
          </p>
          <p>
            <span>Location:</span> {character?.location.name}
          </p>
          <p>
            <span>Origin:</span> {character?.origin.name}
          </p>
          <p>
            <span>Species:</span> {character?.species}
          </p>
          <p>
            <span>Status:</span> {character?.status}{" "}
          </p>
        </MoreInformations>
      </CharacterData>
    </Container>
  );
}
