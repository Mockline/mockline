"use client";

import {FC, ReactNode, createContext, useContext} from 'react';
import {MocklineConfig, defaultAppConfig} from "@mockline/themes";

interface AppConfig {
    mockline: MocklineConfig;
}

let appConfig: AppConfig

try {
    appConfig = {
        ...require('../app/app.config').appConfig,
        "mockline": {
            ...defaultAppConfig,
            ...(require('../app/app.config').appConfig.mockline)
        },
    }
} catch (error) {
    console.warn('No app config found, using default config')
    appConfig = {"mockline": defaultAppConfig}
}


const AppConfigContext = createContext<AppConfig | null>(null);

export const AppConfigProvider: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <AppConfigContext.Provider value={appConfig}>
            {children}
        </AppConfigContext.Provider>
    );
};

export const useAppConfig = () => {
    const context = useContext(AppConfigContext);
    if (!context) {
        throw new Error('useAppConfig must be used within an AppConfigProvider');
    }
    return context;
};
