import type { GlobEnvConfig } from './types';

export function getEnvConfig() {
  if ((import.meta.env as unknown as GlobEnvConfig).VITE_IS_MOCK) {
    return '';
  } else {
    return (import.meta.env as unknown as GlobEnvConfig).VITE_API_BASE_URL;
  }
}

/**
 *@method 获取默认接口BaseUrl
 *@author msyml
 *@version 1.0
 *@return {string} BaseUrl
 */
export function getDefaultBaseUrl(): string {
  const { VITE_IS_MOCK, VITE_API_BASE_URL } = import.meta.env as unknown as GlobEnvConfig;
  if (VITE_IS_MOCK) {
    return '';
  } else {
    return VITE_API_BASE_URL;
  }
}
