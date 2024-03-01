import {ResponsiveProps} from "@/types";
import {useContext} from "react";
import {AppContext} from "@/Components";

export default ({Mobile, Desktop}: ResponsiveProps) => {
    const { screen } = useContext(AppContext)
    return screen.xs ? <Mobile/> : <Desktop/>;
}