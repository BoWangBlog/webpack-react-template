/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '@assets/css/common.less';
import Index from './Main';

export default class App extends Component {
    render() {
        return (
            <Switch>
                {/* other router */}
                <Route component={Index} />
            </Switch>
        );
    }
}
