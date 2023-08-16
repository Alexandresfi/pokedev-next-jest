import { Header } from './Content/Header';
import { About } from './Content/About';
import { ContainerImgType } from './Content/ContainerImgType';
import { InfoStats } from './Content/InfoStats';
import { getColorByPokemonType } from '@/utils';

interface PokemonDataProps {
  abilities: AbilityProps[];
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  stats: StatsProps[];
  types: typesProps[];
}

export interface typesProps {
  type: {
    name: string;
  };
}

interface AbilityProps {
  ability: {
    name: string;
  };
}

export interface StatsProps {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface DescriptionProps {
  description: string;
}

interface Props {
  id: string;
}

export async function PokemonCard({ id }: Props) {
  const [PokemonData, PokemonDescription] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'no-store'
    }),

    fetch(`https://pokeapi.glitch.me/v1/pokemon/${id}`, {
      cache: 'no-store'
    })
  ]);
  const pokemonData: PokemonDataProps = await PokemonData.json();
  const pokemonDescription: DescriptionProps[] =
    await PokemonDescription.json();

  const pokemonAbout = {
    height: pokemonData?.height,
    weight: pokemonData?.weight,
    ability_normal: pokemonData?.abilities[0].ability.name,
    ability_hidden: pokemonData?.abilities[1]?.ability.name,
    type: pokemonData?.types[0].type.name
  };

  const imgAndTypes = {
    front_default: pokemonData?.sprites.other.dream_world.front_default,
    name: pokemonData?.name,
    types: pokemonData?.types
  };

  const infoStatsData = {
    type: pokemonData?.types[0].type.name,
    stats: pokemonData?.stats
  };

  return (
    <main className="flex items-center justify-center h-[100vh] bg-black">
      <div
        className={
          'flex items-center justify-between flex-col w-[360px] h-[640px] p-1 text-white m-auto relative'
        }
        style={{
          backgroundColor: getColorByPokemonType(
            pokemonData?.types[0].type.name
          )
        }}
      >
        <Header id={pokemonData.id} name={pokemonData.name} />
        <div className="w-full h-[412px] bg-white text-black shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] rounded-lg">
          <ContainerImgType imgAndTypes={imgAndTypes} />

          <div className="mt-[92px]">
            <About pokemonAbout={pokemonAbout} />

            <p className="h-[60px] text-200 text-blackdarck text-center mx-auto w-[300px]">
              {pokemonDescription[0]?.description}
            </p>

            <InfoStats infoStatsData={infoStatsData} />
          </div>
        </div>
      </div>
    </main>
  );
}
