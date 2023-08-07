import Image from 'next/image';
import { typesProps } from '..';
import { getColorByPokemonType } from '@/utils';

interface Props {
  imgAndTypes: {
    front_default: string;
    name: string;
    types: typesProps[];
  };
}

export function ContainerImgType({
  imgAndTypes: { front_default, types, name }
}: Props) {
  return (
    <div className="absolute text-center bottom-[336px] right-0 left-0 ">
      <Image
        src={front_default}
        alt={name}
        width={200}
        height={200}
        className="m-auto w-[200px] h-[200px]"
      />
      <div className="w-[360px] m-auto flex items-center justify-center gap-4">
        {types.map((item, index) => (
          <span
            className={
              'text-center text-white px-2 py-1 rounded-[10px] font-bold text-100 m-0 mt-1'
            }
            key={index}
            style={{
              backgroundColor: getColorByPokemonType(item.type.name)
            }}
          >
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
