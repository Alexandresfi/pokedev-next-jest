import { getColorByPokemonType, abbreviations } from '@/utils';
import { StatsProps } from '../..';

interface infoStatsPorps {
  infoStatsData: {
    type: string;
    stats: StatsProps[];
  };
}

export function InfoStats({ infoStatsData: { type, stats } }: infoStatsPorps) {
  return (
    <div className=" m-auto">
      <p
        className={'font-bold mb-1 mx-auto text-center text-300'}
        style={{
          color: getColorByPokemonType(type)
        }}
      >
        Base Stats
      </p>

      <div className="flex items-center gap-4 w-[300px] m-auto">
        <ul className=" pr-10 border-r-2 border-r-bordercolor w-[31px]">
          {stats.map((item, index) => (
            <li
              key={index}
              className="font-bold mb-1 mx-auto text-left text-200"
              style={{
                color: getColorByPokemonType(type)
              }}
            >
              <span>{abbreviations(item.stat.name)}</span>
            </li>
          ))}
        </ul>
        <ul className="w-full">
          {stats.map((item, index) => (
            <li key={index} className="flex items-center mb-1">
              <label
                htmlFor="stat"
                className="text-blackdarck text-200 block w-8 "
              >
                {item.base_stat}
              </label>

              <div className="relative">
                <div
                  className={'w-[209px] h-1 rounded opacity-20 '}
                  style={{
                    backgroundColor: getColorByPokemonType(type)
                  }}
                />
                <div
                  className={
                    'h-1 rounded opacity-100 absolute top-0 max-w-full'
                  }
                  data-testid="ability-bar"
                  style={{
                    width: `${item.base_stat}%`,
                    background: getColorByPokemonType(type)
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
