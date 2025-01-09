import { getInput } from "@actions/core";
const name = getInput("name");
console.log(´name: ${name}`);
