export * from 'vitest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(task: any, options?: { maxPixelDiff?: number }): R;
      toHaveNoViolations(): R;
    }
  }
}
