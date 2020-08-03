/**
 * main.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import ContentMain from '@components/ContentMain';
import appStore from '../appStore';

const { Content, Header, Footer } = Layout;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        console.log(appStore.menuList);
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
            <Layout>
                <Header style={{ padding: 0, background: '#7dbcea' }}>我是头部</Header>
                <Content style={{ background: 'white' }}>
                    <ContentMain />
                </Content>
                <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>Wangbo ©2018</Footer>
            </Layout>
        );
    }
}
