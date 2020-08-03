/**
 * appStore.js
 * @author
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import { action, observable } from 'mobx';

class AppStore {
    // doSomething
    @observable
    isLoading = false;

    @action
    getSomething = () => {
        this.isLoading = true;
    };
}

export default new AppStore();
