import {ItemType} from "antd/es/menu/hooks/useItems";
import {Menu} from "antd";
import React from "react";

const MItem = ({item}: {item: ItemType}) => {
    return (
        <Menu.Item key={item?.key}>
            {item?.icon} {item?.label}
        </Menu.Item>
    )
}

const MItemGroup = ({item}: {item: ItemType}) => {
    return (
        <Menu.ItemGroup key={item?.key}>
            {item?.label}
            {
                item.children.map(itemChild => <MItem item={itemChild}/>)
            }
        </Menu.ItemGroup>
    )
}

export default MItem;