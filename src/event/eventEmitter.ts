import { SnackbarItem } from "../types";

class EventEmitter {
  private listeners = new Set<(snackbar: SnackbarItem) => void>();
  private active = false;
  private queue: SnackbarItem[] = [];
  private processing = false;
  private activeMessages = new Set<string>();

  async emit(snackbar: SnackbarItem): Promise<void> {
    if (!this.active) return;

    if (snackbar.preventDuplicate && this.activeMessages.has(snackbar.message)) {
      return;
    }

    this.queue.push(snackbar);
    if (snackbar.preventDuplicate) {
      this.activeMessages.add(snackbar.message);
    }

    if (!this.processing) {
      this.processing = true;
      while (this.queue.length > 0) {
        const next = this.queue.shift();
        if (next) {
          this.listeners.forEach(listener => listener(next));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
      this.processing = false;
    }
  }

  subscribe(listener: (snackbar: SnackbarItem) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
      this.queue = [];
      this.activeMessages.clear();
    };
  }

  setActive(value: boolean): void {
    this.active = value;
  }

  // Add this to snackbarReducer.ts
  removeFromActiveMessages(message: string): void {
    this.activeMessages.delete(message);
  }
}

export const eventEmitter = new EventEmitter();