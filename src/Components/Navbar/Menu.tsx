import { Menu, Col, type MenuProps } from 'antd';
import { useState } from 'react';
import {getItems} from '../../Utils'

export default () => {
    const [current, setCurrent] = useState('home');
    const items  = getItems();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Col className="gutter-row" span={6}>
            <Menu style={{ padding: '8px 0' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
    )
}