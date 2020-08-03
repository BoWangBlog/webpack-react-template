/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import history from '@utils/history';
import store from './store';
import Main from './app';

ReactDOM.render(
    <Router history={history}>
        <ConfigProvider>
            <Provider {...store}>
                <Main />
            </Provider>
        </ConfigProvider>
    </Router>,
    document.querySelector('#root')
);
