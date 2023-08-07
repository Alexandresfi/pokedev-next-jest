import { render, screen } from '@testing-library/react';
import { Header } from '.';

interface ImgProps {
  src: string;
  alt: string;
}

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

describe('header component', () => {
  const id = 1;
  const name = 'Pokemon Fake';

  it('rends link href correctly', () => {
    render(<Header id={id} name={name} />);

    expect(screen.getByRole('link', { current: false })).toHaveAttribute(
      'href',
      '/'
    );
  });

  it('rends link have tag h1 with name pokemon', () => {
    render(<Header id={id} name={name} />);

    const LinkElement = screen.getByRole('link', { current: false });

    expect(LinkElement.querySelector('h1')).toBeInTheDocument();

    expect(LinkElement.querySelector('h1')).toHaveTextContent(name);
  });

  it('rends id pokemon correctly', () => {
    render(<Header id={id} name={name} />);

    expect(screen.getByText(`#00${id}`)).toBeInTheDocument();
  });
});
