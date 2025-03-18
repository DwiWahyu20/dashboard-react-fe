export declare const env: {
    NODE_ENV: "development";
    WASP_SERVER_URL: string;
    WASP_WEB_CLIENT_URL: string;
    PORT: number;
    DATABASE_URL: string;
    SKIP_EMAIL_VERIFICATION_IN_DEV: boolean;
    PG_BOSS_NEW_OPTIONS?: string | undefined;
} | {
    NODE_ENV: "production";
    WASP_SERVER_URL: string;
    WASP_WEB_CLIENT_URL: string;
    PORT: number;
    DATABASE_URL: string;
    SKIP_EMAIL_VERIFICATION_IN_DEV: boolean;
    PG_BOSS_NEW_OPTIONS?: string | undefined;
};
