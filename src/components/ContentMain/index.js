/**
 * index.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';

@withRouter
class ContentMain extends Component {
    render() {
        return (
            <section style={{ padding: 20, position: 'relative' }}>
                <Switch>
                    hello, 我是一个组件，剩下的需要你自由发挥
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </section>
        );
    }
}
export default ContentMain;
