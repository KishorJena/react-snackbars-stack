import { DirectionTypes, Severity } from '../types';
export declare const SnackbarDefaults: {
    readonly anchorOrigin: {
        readonly vertical: "bottom";
        readonly horizontal: "left";
    };
    readonly maxSnackbars: 4;
    readonly theme: "light";
    readonly transitionType: "slide";
};
export declare const OPPOSITE_DIRECTIONS: Record<DirectionTypes, DirectionTypes>;
export declare const DEFAULT_OPTIONS: {
    readonly severity: Severity;
    readonly duration: 3000;
    readonly preventDuplicate: false;
};
