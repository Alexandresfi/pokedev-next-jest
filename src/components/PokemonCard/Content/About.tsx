import Image from 'next/image';

import IconWeight from '../../../assets/icons/icon-weight.png';
import IconHeight from '../../../assets/icons/icon-height.png';
import { formtHeightAndWeight, getColorByPokemonType } from '@/utils';

interface AboutProps {
  pokemonAbout: {
    height: number;
    weight: number;
    ability_normal: string;
    ability_hidden: string;
    type: string;
  };
}

export function About({
  pokemonAbout: { ability_hidden, ability_normal, weight, height, type }
}: AboutProps) {
  return (
    <div className="m-auto mb-8">
      <p
        className={'font-bold text-300 text-center'}
        style={{
          color: getColorByPokemonType(type)
        }}
      >
        About
      </p>
      <div className="w-[300px] h-12 flex items-center justify-between m-auto">
        <div>
          <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
            <Image src={IconWeight} width={16} height={16} alt="icon weight" />
            <span className="text-200">{formtHeightAndWeight(weight)} kg</span>
          </p>
          <p className="text-center text-100 leading-3 mt-1 text-grayscale">
            Weight
          </p>
        </div>
        <div className="border-r-2 border-r-bordercolor border-l-2 border-l-bordercolor">
          <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
            <Image src={IconHeight} width={16} height={16} alt="icon height" />
            <span className="text-200">{formtHeightAndWeight(height)} m</span>
          </p>
          <p className="text-center text-100 leading-3 mt-1 text-grayscale">
            Height
          </p>
        </div>
        <div>
          <p className="flex items-center justify-center flex-col py-1 w-[103.33px]">
            <span className="text-200 leading-4 text-blackdarck">
              {ability_normal}
            </span>
            <span className="text-200 leading-4 text-blackdarck">
              {ability_hidden}
            </span>
          </p>
          <p className="text-center text-100 leading-3 mt-1 text-grayscale">
            Moves
          </p>
        </div>
      </div>
    </div>
  );
}
