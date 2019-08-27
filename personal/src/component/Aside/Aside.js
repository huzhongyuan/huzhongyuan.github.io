import React from 'react'
import { Menu, Icon } from 'antd';
import './Aside.css'
const { SubMenu } = Menu;

class Aside extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    state = {
        //openKeys: ['sub1'],
    };
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div className="aside">
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>热门帖子</span>
                        </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="社区热门">
                        <Menu.Item key="1">今日推荐</Menu.Item>
                        <Menu.Item key="2">关注最多</Menu.Item>
                    </Menu.ItemGroup>
                    {/* <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup> */}
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>我的帖子</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">我的发布</Menu.Item>
                    <Menu.Item key="6">我的收藏</Menu.Item>
                    <Menu.Item key="7">新建发布</Menu.Item>
                    {/* <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu> */}
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>关于</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
            </div>

        )

    }
}
export default Aside;