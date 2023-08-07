import { Poppins } from 'next/font/google';

import { Header } from '@/components/Header';
import { CardHome } from '@/components/CardHome';
export interface PokeProps {
  name: string;
  url: string;
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin']
});

export default async function Home() {
  const limitPokemon = '?limit=111';
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${limitPokemon}`
  );
  const result = await response.json();
  const pokemons: PokeProps[] = result.results;

  return (
    <main className={poppins.className}>
      <Header />
      <article className="p-1 bg-primary">
        <ul className="px-2 py-3 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-3 bg-white shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] roudend-lg sm:px-6">
          {' '}
          {pokemons.map((item, index) => (
            <li
              key={item.name}
              className="shrink-0 w-[145px] h-[185px] rounded-xl shadow-[0px_1px_3px_1px_rgba(0,0,0,0.2)] transition-all hover:shadow-cyan-500/50 hover:transition-all"
            >
              <CardHome
                pokemon={{
                  id: index + 1,
                  name: item.name,
                  url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`
                }}
              />
            </li>
          ))}{' '}
        </ul>
      </article>
    </main>
  );
}
