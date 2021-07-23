declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_MAPBOX_API_TOKEN: string;
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_PRIVATE_KEY: string;
    DATABASE_URL: string;
    NEXT_PUBLIC_NFT_ADDRESS: string;
    NEXT_PUBLIC_MARKETPLACE_ADDRESS: string;
  }
}
