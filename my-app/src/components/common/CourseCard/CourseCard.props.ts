import { WhatWillYouLearn } from '@/type/course';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type CourseCardProps = {
  title: string;
  modules: WhatWillYouLearn[];
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
