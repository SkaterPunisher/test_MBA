export type Course = {
  id: number;
  title: string;
  whatWillYouLearn: WhatWillYouLearn[];
};

export type WhatWillYouLearn = {
  id: number;
  title: string;
};
