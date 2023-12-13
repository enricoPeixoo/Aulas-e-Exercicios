import { Compontent } from "./Component.js";
import { Input } from "./input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Compontent('h1', 'body', { textContent: 'Olá, Mundo!' })

console.log(title)

title.render()

