/* eslint-disable @typescript-eslint/no-explicit-any */
// theme.d.ts
// import { Theme as BaseTheme } from 'theme-ui';

declare module 'theme-ui' {
  interface BaseTheme {
    containers?: {
      headerMain?: any;
      headerTop?: any;
      headerSearchContainer?: any;
      container?: any;
    };
  }
}
