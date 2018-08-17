

export const log = (...args) =>
  process.env.__DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) =>
  process.env.__DEBUG__ ? console.error(...args) : undefined


  export class Todo {
    constructor(todoMessage){
      this.todoMessage = todoMessage;
      this.completed = false;
      this.destroy = function (refName) {
        eval(refName + " = null;");
        eval("delete " + refName + ";");
    };
    }
  }