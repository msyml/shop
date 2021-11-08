import type { GlobEnvConfig } from './types';

export function getEnvConfig() {
  console.log('import.meta.env', import.meta.env);
  console.log(
    'import.meta.env.VITE_API_BASE_URL',
    (import.meta.env as unknown as GlobEnvConfig).VITE_API_BASE_URL
  );
}
