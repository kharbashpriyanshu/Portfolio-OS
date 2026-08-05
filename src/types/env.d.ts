/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_ENV: "development" | "production" | "test";
  readonly VITE_ENABLE_DARK_MODE: string;
  readonly VITE_ENABLE_SEO_INDEXING: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
