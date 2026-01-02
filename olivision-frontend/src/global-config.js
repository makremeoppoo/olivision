
import packageJson from '../package.json';

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: 'Olivision',
  appVersion: packageJson.version,
  serverUrl: import.meta.env.VITE_SERVER_URL ?? 'http://localhost:8000',
  assetsDir: import.meta.env.VITE_ASSETS_DIR ?? '',

};
