import uuid from 'node-uuid';

export default class TaskClass {
  constructor(title = '', done = false, id) {
    this.title = title;
    this.done = done;
    this.id = id || uuid.v4();
  }
}
