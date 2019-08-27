import React from 'react'
import { Menu, Icon, Tooltip, Badge  } from 'antd';
import './Header.css'
const { SubMenu } = Menu;

// let text = <span>关于我</span>
// let Tooltip = antd.Tooltip;
class Header extends React.Component {

    state = {
        iconTip: '问题提示',
        emailTip: '邮箱提示',
        name: '胡钟元',
        fristName: '胡',
    };

    render () {
        return (
            <div className="header">
                <div className="headerTitle">欢迎来到wechat</div>
                <div className="setting">
                    <Tooltip className="tips" placement="bottom" title={this.state.iconTip}>
                        <Icon type="question-circle"></Icon>
                    </Tooltip>
                    <Tooltip className="tips" placement="bottom" title={this.state.emailTip}>
                    <Badge dot={true}>
                        <Icon type="notification"></Icon>
                    </Badge>
                    </Tooltip>
                    <div className="person">
                        <div className="portrait">{ this.state.fristName }</div>
                        <div className="name">{ this.state.name }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header