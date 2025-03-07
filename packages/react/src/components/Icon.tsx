import {FC} from 'react';
import {Icon as IconifyIcon} from '@iconify/react';

type IconProps = {
    name: string;
    className?: string;
};

export const Icon: FC<IconProps> = (props: IconProps) => {
    return <IconifyIcon icon={props.name.replace(/^i-/, '')} className={props.className}/>;
};
