export class Cache<T> {
  private store: Map<string, { value: T, expires: number }>;

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: T, ttl: number): void {
    this.store.set(key, { value, expires: Date.now() + ttl });
  }

  has(key: string): boolean {
    const entry = this.store.get(key);
    if (!entry) return false;

    if (entry.expires && Date.now() > entry.expires) {
      this.store.delete(key);
      return false;
    }

    return true;
  }

  get(key: string): T {
    const entry = this.store.get(key);
    if (!entry) throw new Error('key not found.');

    if (entry.expires && Date.now() > entry.expires) {
      this.store.delete(key);
      throw new Error('key not found.');
    }

    return entry.value;
  }

  delete(key: string): void {
    this.store.delete(key);
  }
}
