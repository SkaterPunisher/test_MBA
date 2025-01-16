import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TextProps = { color?: 'white' | 'black' } & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
