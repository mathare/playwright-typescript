export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PASSWORD: string;
      TEST_MODE: 'full' | 'limited';
    }
  }
}
