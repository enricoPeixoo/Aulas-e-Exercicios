import { Spaceship } from "./index";
import * as _ from "lodash"

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: "X-Wing",
  pilot: "luke",
  speed: 50,
  weapons: 4
}

console.log(_.camelCase(xwing.pilot))
console.log(_.kebabCase(xwing.pilot))

