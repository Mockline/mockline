import {twMerge} from "tailwind-merge";
import {useAppConfig} from "./AppConfigContext.tsx";
import {useMemo} from "react";
import {components} from "@mockline/themes"

export function useComponent(componentName: string, componentProps?: any): {
    getClasses: (slotName: string, overrideClass?: string) => string
} {
    const appConfig = useAppConfig();

    const componentConfig = useMemo(
        // @ts-expect-error - This is a valid key
        () => appConfig.mockline?.components?.[componentName],
        [appConfig, componentName]
    );

    const ui = useMemo(
        () => {
            // @ts-expect-error - This is a valid key
            const baseComponent = components?.[componentName]
            const resolvedProps = componentProps || {}
            return baseComponent({
                ...resolvedProps,
                transitions: appConfig.mockline?.transitions
            })
        }, [appConfig, componentName, componentProps]);

    return {
        getClasses: (slotName: string, overrideClass ?: string): string => {
            const base = slotName === 'default' ? (typeof ui === 'string' ? ui : ui.base) : (typeof ui[slotName] === 'function' ? ui[slotName]() : ui[slotName])

            const config = typeof componentConfig === 'string'
                ? componentConfig
                : componentConfig?.slots?.[slotName as string] || ''

            return twMerge(base, config, overrideClass);
        }
    }
}
