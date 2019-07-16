import { observable, action } from 'mobx';

class Store {
  @observable public isCover: boolean = false;

  @action.bound
  public toggleCover = () => {
    this.isCover = !this.isCover;
    console.log(this.isCover);
  }
}

const store = new Store();
export default store;
