import React from 'react';
import { 
    Slide, SlideProps, 
    Grow, GrowProps, 
    Fade, FadeProps 
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { JSX } from 'react/jsx-runtime';

interface TransitionComponentProps extends TransitionProps {
  transitionType: 'slide' | 'grow' | 'fade';
  anchorOrigin?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
}

export const GrowTransition = (props: JSX.IntrinsicAttributes & GrowProps) => {
  return <Grow {...props} />;
};
export const FadeTransition = (props: JSX.IntrinsicAttributes & FadeProps) => {
  return <Fade {...props} />;
};
export const SlideTransition = (props: JSX.IntrinsicAttributes & SlideProps) => {
  return <Slide {...props} />;
};

export const Transition: React.FC<TransitionComponentProps> = (props) => {
    const { transitionType, anchorOrigin, ...rest  } = props;

    switch (transitionType) {
        case 'slide':
            return <SlideTransition {...rest as SlideProps}  />;
        case 'grow':
            return <GrowTransition {...rest as GrowProps} />;
        case 'fade':
            return <FadeTransition {...rest as FadeProps} />;
        default:
            return null;
    }
};