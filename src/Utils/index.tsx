import DownOutlined from "@ant-design/icons/DownOutlined";
import HomeFilled from "@ant-design/icons/HomeFilled";
import type { MenuProps } from 'antd';
import { useIntl } from 'react-intl';
import messages from "../Messages/messages"

export const getItems = () => {
    const intl = useIntl();
    const items: MenuProps['items'] = [
        {
            label: `${intl.formatMessage(messages.navBar.home)}`,
            key: 'home',
            icon: <HomeFilled />,
        },
        {
            label: `${intl.formatMessage(messages.navBar.about)}`,
            key: 'about',
            icon: <DownOutlined />,
        },
        {
            label: `${intl.formatMessage(messages.navBar.specializations.label)}`,
            key: 'specializations',
            icon: <DownOutlined />,
            children: [
                {
                    type: 'group',
                    label: `${intl.formatMessage(messages.navBar.specializations.psychology.label)}`,
                    children: [
                      {
                        label: `${intl.formatMessage(messages.navBar.specializations.psychology.s1)}`,
                        key: 'setting:1',
                      },
                      {
                        label: `${intl.formatMessage(messages.navBar.specializations.psychology.s2)}`,
                        key: 'setting:2',
                      },
                    ],
                },
                {
                    type: 'group',
                    label: `${intl.formatMessage(messages.navBar.specializations.neuropsychology.label)}`,
                    children: [
                    {
                        label: `${intl.formatMessage(messages.navBar.specializations.neuropsychology.s1)}`,
                        key: 'setting:1',
                    },
                    {
                        label: `${intl.formatMessage(messages.navBar.specializations.neuropsychology.s2)}`,
                        key: 'setting:2',
                    },
                    ],
                },
            ]
        },
        
    ]
    return items;
}