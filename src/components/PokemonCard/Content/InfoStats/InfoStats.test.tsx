import { render, screen } from '@testing-library/react';
import { InfoStats } from '.';
import { abbreviations, getColorByPokemonType } from '@/utils';

describe('InfoStarts component', () => {
  const type = 'normal';
  const stats = [
    {
      stat: {
        name: 'attack'
      },
      base_stat: 50
    }
  ];

  const infoStatesData = {
    type,
    stats
  };

  it('randers name stat', () => {
    render(<InfoStats infoStatsData={infoStatesData} />);

    expect(
      screen.getByText(abbreviations(stats[0].stat.name))
    ).toBeInTheDocument();
  });

  it('randers ability bar', () => {
    render(<InfoStats infoStatsData={infoStatesData} />);

    expect(screen.getByTestId('ability-bar')).toHaveStyle({
      background: `${getColorByPokemonType(type)}`
    });
  });
});
