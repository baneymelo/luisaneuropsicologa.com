import React, {ReactNode, useState} from 'react';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Col, Menu, Row} from 'antd';
import HomeFilled from "@ant-design/icons/HomeFilled";
import {Icon} from "@iconify-icon/react";
import "./Menu.css"
import messages from "../../../Messages/messages.ts";
import {useIntl} from "react-intl";

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
    const intl = useIntl();
    const [key, setKey] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setKey(e.key);
    };

    return <Menu
        onClick={onClick}
        selectedKeys={[key]}
        mode="inline"
        //items={items}
    >
        <Menu.Item key={"home"} icon={<Icon icon={"carbon:home"} />}>
            {intl.formatMessage(messages.navBar.home)}
        </Menu.Item>
        <Menu.Item key={"experience"} icon={<Icon icon={"mdi:university"} />}>
            {intl.formatMessage(messages.navBar.about)}
        </Menu.Item>
        <Menu.SubMenu
            key={"services"}
            icon={<Icon icon={"ic:baseline-psychology"} />}
            title={intl.formatMessage(messages.navBar.services.label)}>
            <Menu.ItemGroup key={"n"} title={intl.formatMessage(messages.navBar.services.neuropsychology.label)}>
                <Menu.Item key={"n-1"} >{intl.formatMessage(messages.navBar.services.psychology.s1)}</Menu.Item>
                <Menu.Item key={"n-2"} >{intl.formatMessage(messages.navBar.services.psychology.s1)}</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key={"p"} title={intl.formatMessage(messages.navBar.services.psychology.label)}>
                <Menu.Item key={"p-1"} >{intl.formatMessage(messages.navBar.services.psychology.s1)}</Menu.Item>
                <Menu.Item key={"p-2"} >{intl.formatMessage(messages.navBar.services.psychology.s1)}</Menu.Item>
            </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key={"blog"} icon={<Icon icon={"solar:notes-bold"} />}>
            {intl.formatMessage(messages.navBar.blog)}
        </Menu.Item>
        <Menu.Item key={"contact"} icon={<Icon icon={"mdi:contact"} />}>
            {intl.formatMessage(messages.navBar.contact)}
        </Menu.Item>
        <Menu.SubMenu
            key={"appointment"}
            icon={<Icon icon={"line-md:calendar"} />}
            title={intl.formatMessage(messages.navBar.appointment.label)}
        >
            <Menu.Item key={"a-new"} >{intl.formatMessage(messages.navBar.appointment.new)}</Menu.Item>
            <Menu.Item key={"a-patient"} >{intl.formatMessage(messages.navBar.appointment.patient)}</Menu.Item>
        </Menu.SubMenu>
    </Menu>
}