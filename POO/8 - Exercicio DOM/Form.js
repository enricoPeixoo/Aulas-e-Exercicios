import { Compontent } from "./Component.js";

export class Form extends Compontent {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) {
    children.forEach(child => {
      this.getElement().appendChild(child.getElement())
    })
  }
}