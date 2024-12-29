import React from 'react';
import { Slide, SlideProps } from '@mui/material';
import { JSX } from 'react/jsx-runtime';

export const SlideTransition = (
  props: JSX.IntrinsicAttributes & SlideProps
) => {
  return <Slide {...props} direction="right" />;
};
