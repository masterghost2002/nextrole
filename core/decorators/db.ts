import DB from '@/core/db';
export function InjectDB() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        (this as any).db = DB.getInstance();
      }
    };
  };
}
