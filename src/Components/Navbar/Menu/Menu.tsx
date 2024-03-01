import React, {ReactNode, useState} from 'react';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Col, Menu, Row} from 'antd';
import HomeFilled from "@ant-design/icons/HomeFilled";
import {Icon} from "@iconify-icon/react";
import "./Menu.css"

const items: MenuProps['items'] = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

export default () => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        //items={items}
    >
        <Menu.Item key={"home"} icon={<Icon icon={"carbon:home"} />}>
            Home
        </Menu.Item>
        <Menu.Item key={"experience"} icon={<Icon icon={"mdi:university"} />}>
            Experiencia
        </Menu.Item>
        <Menu.SubMenu
            key={"specializations"}
            icon={<Icon icon={"ic:baseline-psychology"} />}
            title={"Especializaciones - Consultas"}>
            <Menu.ItemGroup key={"p"} title="Psicologia">
                <Menu.SubMenu
                    key={"p-child"}
                    //icon={<Icon icon={"ic:baseline-psychology"} />}
                    title={"Niños"}>
                    <Menu.Item>Tratamiento 1</Menu.Item>
                    <Menu.Item>Tratamiento 1</Menu.Item>
                    <Menu.Item>Tratamiento 1</Menu.Item>
                    <Menu.Item>Tratamiento 1</Menu.Item>
                </Menu.SubMenu>
            </Menu.ItemGroup>
        </Menu.SubMenu>
    </Menu>


}

const MenuItemContent = ({Icon, label}: {Icon: ReactNode, label: string}) => (
    <Row align={"middle"}>
        <Col xs={2} align="middle"  >
                {Icon}
        </Col>
        <Col xs={22}>
            <span>{label}</span>
        </Col>
    </Row>
)