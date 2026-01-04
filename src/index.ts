// Explicitly re-export the type definitions
// This creates a reference that TypeScript will follow during compilation
import type {} from './custom-elements';

// Import the component to register it as a custom element
import './lib/Counter.svelte';

