import * as _ from "lodash";
let xwing = {
    name: "X-Wing",
    pilot: "luke",
    speed: 50,
    weapons: 4
};
console.log(_.camelCase(xwing.pilot));
console.log(_.kebabCase(xwing.pilot));
