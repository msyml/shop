import type { GlobEnvConfig} from './types'

export function getEnvConfig(){
    console.log("import.meta",import.meta.env as GlobEnvConfig);
    console.log("import.meta",import.meta.env.API_BASE_URL);
}