import React from 'react';
import { SlideProps, GrowProps, FadeProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { JSX } from 'react/jsx-runtime';
interface TransitionComponentProps extends TransitionProps {
    transitionType: 'slide' | 'grow' | 'fade';
    anchorOrigin?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right';
    };
}
export declare const GrowTransition: (props: JSX.IntrinsicAttributes & GrowProps) => React.JSX.Element;
export declare const FadeTransition: (props: JSX.IntrinsicAttributes & FadeProps) => React.JSX.Element;
export declare const SlideTransition: (props: JSX.IntrinsicAttributes & SlideProps) => React.JSX.Element;
export declare const Transition: React.FC<TransitionComponentProps>;
export {};
