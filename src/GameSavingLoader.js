import read from './Reader.js';
import json from './Json.js';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}
