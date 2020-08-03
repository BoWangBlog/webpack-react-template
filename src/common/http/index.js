/**
 * 封装http
 * index.js
 * @author wangbo
 * @since 2020/4/11
 * @github https://github.com/BoWang816
 */

import wbaxios from 'wbaxios';
import { apiPrefix } from '../../../server-config';

wbaxios.init(apiPrefix, { 'X-Token': 'wangbo' });

export default wbaxios;
