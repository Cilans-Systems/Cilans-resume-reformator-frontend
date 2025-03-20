import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}`,
        redirectUri: process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
    scopes: ["user.read"],
};

export default msalInstance;
