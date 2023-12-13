import { Compontent } from "./Component.js";

export class Label extends Compontent {
  constructor(text, parent, options) {
    super('label', parent, Object.assign({}, options, { textContent: text }))
  }
}