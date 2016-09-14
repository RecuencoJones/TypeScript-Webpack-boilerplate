import {Promise} from 'es6-promise';

export default class Main {
  public greet(): Promise<string> {
    return Promise.resolve('Hello, World!');
  }
}
