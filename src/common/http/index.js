/**
 * 封装http
 * index.js
 * @author wangbo
 * @since 2020/4/11
 * @github https://github.com/BoWang816
 */

import wbaxios from 'wbaxios';
import { apiPrefix, apiUri } from '../../../server-config';

wbaxios.init(apiPrefix, { 'X-Token': 'wangbo' });
wbaxios.defaults.withCredentials = true;

// 基础接口
export const basicService = new Proxy(wbaxios, {
    get(target, prop) {
        wbaxios.defaults.baseURL = `${apiUri}${apiPrefix}`;
        return target[prop];
    }
});

wbaxios.interceptors.response.use(
    resp => {
        return resp.data;
    },
    error => {
        let msg = '';
        if (error.response) {
            msg = error.response?.data?.message || error.response?.data?.msg || '服务器响应错误';
        } else if (error.request) {
            msg = error.request || '请求发生错误';
        } else {
            msg = error.message || '本地错误';
        }
        throw Error(msg);
    }
);

export default wbaxios;
