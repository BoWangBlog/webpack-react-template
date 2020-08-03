/**
 * 顶部加载进度条
 * loadProgress.js
 * @author
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';

class LoadProgressComponent extends React.Component {
    componentWillMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    render() {
        return <div />;
    }
}

const LoadProgress = component => {
    return Loadable({
        loader: component,
        loading: () => <LoadProgressComponent />
    });
};

export default LoadProgress;
