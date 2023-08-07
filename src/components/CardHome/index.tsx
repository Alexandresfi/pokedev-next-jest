import Image from 'next/image';
import Link from 'next/link';
import { formatId } from '../../utils';

interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemon: PokemonProps;
}

export function CardHome({ pokemon }: Props) {
  const { id, name } = pokemon;

  return (
    <Link
      className="flex flex-col justify-center items-center p-1"
      prefetch={false}
      href={`/pokemon/${id}`}
    >
      <div className="self-end text-xs text-grayscale pt-1 pr-2">
        {formatId(id)}{' '}
      </div>
      <Image src={pokemon.url} width={120} height={120} alt={name} />
      <p className="text-blackdarck text-sm capitalize">{name}</p>
    </Link>
  );
}
