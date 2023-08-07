export function getColorByPokemonType(color: string) {
  const ColorList: { [key: string]: string } = {
    normal: '#aaa67f',
    fighting: '#c12239',
    flying: '#a891ec',
    ground: '#dec16b',
    poison: '#a43e9e',
    rock: '#b69e31',
    bug: '#a7b723',
    ghost: '#70559b',
    steel: '#b7b9d0',
    fire: '#f57d31',
    water: '#6493eb',
    grass: '#74cb48',
    electric: '#f9cf30',
    psychic: '#fb5584',
    ice: '#9ad6df',
    dragon: '#7037ff',
    dark: '#75574c',
    fairy: '#e69eac'
  };

  return ColorList[color];
}

export function abbreviations(stats: string) {
  let value = '';
  switch (stats) {
    case 'hp':
      value = 'HP';
      break;

    case 'attack':
      value = 'ATK';
      break;

    case 'defense':
      value = 'DEF';
      break;

    case 'special-attack':
      value = 'SATK';
      break;

    case 'special-defense':
      value = 'SDEF';
      break;

    case 'speed':
      value = 'SPD';
      break;
  }

  return value;
}

export function formtHeightAndWeight(size: number) {
  return (size / 10).toLocaleString('pt-BR', { minimumFractionDigits: 1 });
}

export function formatId(id: number) {
  if (id.toLocaleString().length === 1) {
    return `#00${id}`;
  } else if (id.toLocaleString().length >= 3) {
    return `#${id}`;
  } else {
    return `#0${id}`;
  }
}
