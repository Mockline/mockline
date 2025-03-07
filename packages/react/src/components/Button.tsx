import {FC, ReactNode} from "react";
import {Icon} from './Icon.tsx';
import {useComponent} from '../utils/useComponent.tsx';
import {useComponentIcons, UseComponentIconsProps} from '../composables/useComponentIcons.tsx';

type ButtonProps = {
    square?: boolean;
    label?: string;
    className?: string;
    iconClass?: string;
    labelClass?: string;
    children?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
} & UseComponentIconsProps;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {isLeading, isTrailing, leadingIconName, trailingIconName} = useComponentIcons(props)

    const componentProps = {
        ...props,
        square: props.square || (!props.children && !props.label),
        leading: isLeading,
        trailing: isTrailing,
    };

    const {getClasses} = useComponent("button", componentProps);

    return (
        <button className={getClasses("base", props.className)}>
            {(typeof props.leading != 'boolean' && props.leading) ||
                (isLeading && leadingIconName && (
                    <Icon name={leadingIconName} className={getClasses("leadingIcon", props.iconClass)}/>
                ))
            }

            {props.children || (props.label && (
                <span className={getClasses("label", props.labelClass)}>
                  {props.children || props.label}
                </span>
            ))}

            {(typeof props.trailing != 'boolean' && props.trailing) ||
                (isTrailing && trailingIconName && (
                    <Icon name={trailingIconName} className={getClasses("trailingIcon", props.iconClass)}/>
                ))}
        </button>
    );
};
