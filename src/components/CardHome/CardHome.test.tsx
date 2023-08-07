import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CardHome } from '@/components/CardHome';
import React, { ReactNode } from 'react';

interface ImgProps {
  src: string;
  alt: string;
}

interface LinkProps {
  href: string;
  children: ReactNode;
}
// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: ImgProps) => (
  <img src={src} alt={alt} />
));

// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children, href }: LinkProps) => (
  <a href={href}>{children}</a>
));

describe('Card Home', () => {
  const pokemon = {
    id: 1,
    name: 'fake name pokemon',
    url: 'https://fake.url.pnj'
  };

  it('renders name pokemon correctly', () => {
    render(<CardHome pokemon={pokemon} />);

    expect(screen.getByText('fake name pokemon')).toBeInTheDocument();
  });

  it('renders href is correctly', () => {
    render(<CardHome pokemon={pokemon} />);

    expect(
      screen.getByRole('link', {
        current: false
      })
    ).toHaveAttribute('href', `/pokemon/${pokemon.id}`);
  });

  it('renders image is correctly', () => {
    render(<CardHome pokemon={pokemon} />);
    expect(screen.getByAltText(pokemon.name)).toHaveAttribute(
      'src',
      pokemon.url
    );
  });
});
