import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'white' | 'black';
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
