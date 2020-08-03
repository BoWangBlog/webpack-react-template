/**
 * main.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import ContentMain from '@components/ContentMain';

const { Sider, Content } = Layout;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    toggle = () => {
        // console.log(this)  状态提升后，到底是谁调用的它
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    render() {
        return (
            <div id="page">
                <Layout>
                    <Sider collapsible trigger={null} collapsed={this.state.collapsed}>
                        我是左侧菜单，你也可以把我写成组件
                    </Sider>
                    <Layout>
                        <Content>
                            <ContentMain />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
