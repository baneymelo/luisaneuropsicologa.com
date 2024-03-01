import {createContext, useMemo, useState} from "react";
import {ChildrenProp} from "@/types";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

export const AppContext = createContext<any>({});

export const AppProvider = ({children}: ChildrenProp) => {
    const screens = useBreakpoint();
    const [isPanelVisible, setIsPanelVisible] = useState<boolean>()

    const screen = useMemo(() => (
        { xs: screens.xs, md: screens.md }
    ), [screens.xs]);

    const value = {
        screen,
        isPanelVisible,
        handlePanel: () => setIsPanelVisible(!isPanelVisible)
    }

    console.log(value.screen)

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}