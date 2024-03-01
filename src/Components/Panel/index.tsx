import {useContext} from "react";
import {AppContext} from "@/Components";
import {Drawer} from "antd";
import {PanelProps} from "@/types";

const Panel = ({Menu, Appointment}: PanelProps) => {
    const {isPanelVisible, handlePanel } = useContext(AppContext);
    return (
        <Drawer
            title={"Brand Here"}
            placement="right"
            closable={true}
            onClose={handlePanel}
            open={isPanelVisible}
            style={{ zIndex: 99999 }}
        >
            <Menu mode={"inline"} />
            <Appointment mode={"inline"} />
        </Drawer>
    )
}

export default Panel;
