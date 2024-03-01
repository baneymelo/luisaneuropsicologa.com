import { Icon } from '@iconify-icon/react';
import {Button, Col, Flex, Menu, Row} from "antd";
import React, {useContext} from "react";
import {AppContext} from "../Context/App";
import {MenuProps} from "@/types";
import {getAppointmentItems} from "../../Utils";
export default ({mode, current, onSelectItem, items}: MenuProps) => {
    return (
        <Menu
            mode={mode}
            //style={centerStyle}
            inlineCollapsed={true}
            onClick={onSelectItem}
            selectedKeys={[current]}
        >
            {
                items.map(item => {
                    return (
                        <Menu.SubMenu title={item.label} icon={item.icon}>
                            {
                                item.children.map(itemChild => (
                                    <Menu.Item key={itemChild.key}>
                                        {itemChild.label}
                                    </Menu.Item>
                                ) )
                            }
                        </Menu.SubMenu>
                    )
                })
            }
        </Menu>
    )
}