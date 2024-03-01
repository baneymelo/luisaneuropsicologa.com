import { Icon } from '@iconify-icon/react';
import HomeFilled from "@ant-design/icons/HomeFilled";
import type { MenuProps } from 'antd';
import { useIntl } from 'react-intl';
import messages from "../Messages/messages"
import {MenuItem} from "@/types";
import React from "react";
import {HomeOutlined} from "@ant-design/icons";

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return {
        label,
        key,
        icon,
        children,
        type,
    } as MenuItem;
}


export const getMenuItems = () => {
    const intl = useIntl();
    const items: MenuItem[]  = [
        getItem(
            `${intl.formatMessage(messages.navBar.home)}`,
            'home',
            <HomeOutlined />,
        ),
        getItem(
            `${intl.formatMessage(messages.navBar.about)}`,
            'about',
            <Icon icon={"mdi:university"} />,
        ),
        getItem(
            `${intl.formatMessage(messages.navBar.specializations.label)}`,
            'specializations',
            <Icon icon={"ic:baseline-psychology"} />,
            [
                getItem(
                    `${intl.formatMessage(messages.navBar.specializations.psychology.label)}`,
                    'p',
                    null,
                    [
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.child)}`,
                            'p-child',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.psychology.s1)}`,
                                    'p-child:1',
                                    null
                                )
                            ]
                        ),
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.young)}`,
                            'p-young',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.psychology.s1)}`,
                                    'p-young:1',
                                    null
                                )
                            ]
                        ),
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.adult)}`,
                            'p-adult',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.psychology.s1)}`,
                                    'p-adult:1',
                                    null
                                )
                            ]
                        )
                    ],
                    "group"
                ),
                getItem(
                    `${intl.formatMessage(messages.navBar.specializations.neuropsychology.label)}`,
                    'n',
                    null,
                    [
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.child)}`,
                            'n-child',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.neuropsychology.s1)}`,
                                    'n-child:1',
                                    null
                                )
                            ]
                        ),
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.young)}`,
                            'n-young',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.neuropsychology.s1)}`,
                                    'n-young:1',
                                    null
                                )
                            ]
                        ),
                        getItem(
                            `${intl.formatMessage(messages.navBar.specializations.ages.adult)}`,
                            'n-adult',
                            null,
                            [
                                getItem(
                                    `${intl.formatMessage(messages.navBar.specializations.neuropsychology.s1)}`,
                                    'n-adult:1',
                                    null
                                )
                            ]
                        )
                    ],
                    "group"
                )
            ]
        ),
        getItem(
            `${intl.formatMessage(messages.navBar.blog)}`,
            'blog',
            <Icon icon={"la:blog"} />,
        ),
        getItem(
            `${intl.formatMessage(messages.navBar.contact)}`,
            'contact',
            <Icon icon={"mingcute:phone-fill"} />,
        )
        
    ]
    return items;
}

export const getAppointmentItems = () => {
    const intl = useIntl();
    const items: MenuProps['items'] = [
        getItem(
            `${intl.formatMessage(messages.navBar.appointment.label)}`,
            "appointment",
            <Icon icon={"ri:calendar-schedule-fill"}/>,
            [
                getItem(
                    `${intl.formatMessage(messages.navBar.appointment.new)}`,
                    "a-new",
                    null
                ),
                getItem(
                    `${intl.formatMessage(messages.navBar.appointment.patient)}`,
                    "a-patient",
                    null
                )
            ]
        )
    ]

    return items;
}