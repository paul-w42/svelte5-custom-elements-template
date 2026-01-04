
import type * as React from 'react';

declare global {
  // Modern React (18 / 19)
  namespace React.JSX {
    interface IntrinsicElements {
      'ui-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'start-count'?: number;
        step?: number;
      };
    }
  }

  // Fallback for tooling that still reads global JSX
  namespace JSX {
    interface IntrinsicElements {
      'ui-counter': any;
    }
  }
}

export {};

// Commented out and added above to allow (hopefully) proper linting inside consuming (React) apps
// src/custom-elements.d.ts
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'ui-counter': Partial<HTMLButtonElement> & {
//         startCount?: number;
//         step?: number;
//       };
//     }
//   }
// }

// export {}
