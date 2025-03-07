import {ReactNode} from 'react';
import {AppConfigProvider} from '../utils/AppConfigContext.tsx';
import {useComponent} from "../utils/useComponent.tsx";

type AppProps = {
    children: ReactNode;
    className?: string;
};

export const App = (props: AppProps) => {
    return (
        <AppConfigProvider>
            <Root {...props} />
        </AppConfigProvider>
    );
};

// Necessary because useComponent can only be used if AppConfigProvider is a parent
const Root = (props: AppProps) => {
    const {getClasses} = useComponent('app', props);

    return (
        <div className={getClasses('root', props.className)}>
            {props.children}
        </div>
    );
};
