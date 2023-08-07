import { PokemonCard } from '@/components/PokemonCard';

interface PokemonIdProps {
  params: {
    id: string;
  };
}

export default async function Pokemon({ params: { id } }: PokemonIdProps) {
  return <PokemonCard id={id} />;
}
