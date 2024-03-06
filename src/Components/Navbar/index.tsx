import {Button, Col, Drawer, DrawerProps, Layout, MenuProps, RadioChangeEvent, Row} from 'antd';
import {NavbarProps} from "@/types"
//import "./styles.css"
import Logo from './Logo'
import Appointment from './Appointment'
import Menu from './Menu/Menu.tsx'
import {Panel} from "@/Components";
import {useState} from "react";
import {getAppointmentItems, getMenuItems} from "../../Utils";
import {Icon} from "@iconify-icon/react";


const Navbar = ({children}: NavbarProps) => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('top');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };

    const navbarStyle: React.CSSProperties = {
        height: "64px",
        zIndex: "1000 !important"
    }

    const colStyle: React.CSSProperties = {
        height: "64px",
    }

    const navStyle: React.CSSProperties = {
        width: "100%",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)"
    }

    return (
        <nav style={navStyle}>
            <Row justify={"center"} align={"middle"} style={navbarStyle}>
                <Col xs={{span: 4}} align={"middle"}>
                    <Button type="default" onClick={showDrawer}>
                        <Icon icon={"simple-line-icons:menu"}/>
                    </Button>
                </Col>
                <Col xs={{span: 20}} align={"middle"} style={colStyle}>
                    <Logo/>
                </Col>
            </Row>
            <Drawer
               // style={drawerStyle}
                title={(
                    <Col xs={21} align={"middle"} style={colStyle}>
                        <Logo/>
                    </Col>
                )}
                placement={placement}
                width={"100%"}
                onClose={onClose}
                open={open}
                //size={"large"}
                //extra={}
            >
                <Menu/>
            </Drawer>
        </nav>
    )
}

export default Navbar;