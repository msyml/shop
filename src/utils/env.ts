import type { GlobEnvConfig } from './types';

export function getEnvConfig() {
  if ((import.meta.env as unknown as GlobEnvConfig).VITE_IS_MOCK) {
    return '';
  } else {
    return (import.meta.env as unknown as GlobEnvConfig).VITE_API_BASE_URL;
  }
}

// VITE_IS_MOCK设置为boolean类型，从env中取到的值也是string类型的，要观察下
export function getDefaultBaseUrl() {
  if ((import.meta.env as unknown as GlobEnvConfig).VITE_IS_MOCK === 'true') {
    return '';
  } else {
    return (import.meta.env as unknown as GlobEnvConfig).VITE_API_BASE_URL;
  }
}
