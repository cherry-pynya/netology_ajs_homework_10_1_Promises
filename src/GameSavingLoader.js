import read from './Reader';
import json from './Json';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}
