import msalInstance from "@/msalConfig";

// import { msalConfig } from "../msalConfig";


// const msalInstance = new PublicClientApplication(msalConfig);

// Initialize the MSAL instance
export const initializeMsalInstance = async () => {
    if (!msalInstance) {
        throw new Error("MSAL instance not initialized");
    }

    await msalInstance.initialize();
};

export default msalInstance;