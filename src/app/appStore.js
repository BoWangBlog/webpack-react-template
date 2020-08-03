/**
 * appStore.js
 * @author
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import { action, observable } from 'mobx';
import { basicService } from '@http';

class AppStore {
    constructor() {
        this.getSomething();
    }

    // doSomething
    @observable
    isLoading = false;

    @observable
    menuList = [];

    @action
    getSomething = () => {
        this.isLoading = true;
        basicService.get('/menu').then(res => {
            console.log(res);
            this.menuList = res;
        });
    };
}

export default new AppStore();
