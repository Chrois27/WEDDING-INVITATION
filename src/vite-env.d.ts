/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GROOM_NAME: string;
    readonly VITE_BRIDE_NAME: string;
    readonly VITE_GROOM_ACCOUNT: string;
    readonly VITE_BRIDE_ACCOUNT: string;
    readonly VITE_GROOM_FATHER_NAME: string;
    readonly VITE_GROOM_MOTHER_NAME: string;
    readonly VITE_BRIDE_FATHER_NAME: string;
    readonly VITE_BRIDE_MOTHER_NAME: string;
    readonly VITE_GROOM_MOTHER_ACCOUNT: string;
    readonly VITE_BRIDE_MOTHER_ACCOUNT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }