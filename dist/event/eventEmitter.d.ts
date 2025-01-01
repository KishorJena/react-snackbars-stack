import { SnackbarPayload } from '../types';
declare class EventEmitter {
    private listeners;
    private active;
    private queue;
    private processing;
    private activeMessages;
    emit(snackbar: SnackbarPayload): Promise<void>;
    subscribe(listener: (snackbar: SnackbarPayload) => void): () => void;
    setActive(value: boolean): void;
    removeFromActiveMessages(message: string): void;
}
export declare const eventEmitter: EventEmitter;
export {};
