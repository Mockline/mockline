"use client";

import {useMemo} from 'react';
import {useAppConfig} from "../utils/AppConfigContext.tsx";

export type UseComponentIconsProps = {
    /** Display an icon based on the `leading` and `trailing` props. */
    icon?: string;
    /** When `true`, the icon will be displayed on the left side. */
    leading?: boolean;
    /** Display an icon on the left side. */
    leadingIcon?: string;
    /** When `true`, the icon will be displayed on the right side. */
    trailing?: boolean;
    /** Display an icon on the right side. */
    trailingIcon?: string;
    /** When `true`, the loading icon will be displayed. */
    loading?: boolean;
    /**
     * The icon when the `loading` prop is `true`.
     * @defaultValue appConfig.mockline.icons.loading
     */
    loadingIcon?: string;
};

type UseComponentIconsReturn = {
    isLeading: boolean;
    isTrailing: boolean;
    leadingIconName?: string;
    trailingIconName?: string;
};

export function useComponentIcons(props: UseComponentIconsProps): UseComponentIconsReturn {
    const appConfig = useAppConfig();

    const isLeading = useMemo(
        () =>
            (props.icon && props.leading) ||
            (props.icon && !props.trailing) ||
            (props.loading && !props.trailing) ||
            !!props.leadingIcon,
        [props]
    );

    const isTrailing = useMemo(
        () =>
            (props.icon && props.trailing) ||
            (props.loading && props.trailing) ||
            !!props.trailingIcon,
        [props]
    );

    const leadingIconName = useMemo(() => {
        if (props.loading) {
            return props.loadingIcon || appConfig.mockline.icons?.loading;
        }
        return props.leadingIcon || props.icon;
    }, [props, appConfig]);

    const trailingIconName = useMemo(() => {
        if (props.loading && !isLeading) {
            return props.loadingIcon || appConfig.mockline.icons?.loading;
        }
        return props.trailingIcon || props.icon;
    }, [props, appConfig, isLeading]);

    return {
        isLeading,
        isTrailing,
        leadingIconName,
        trailingIconName,
    };
}
