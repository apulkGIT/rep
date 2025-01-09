import { GetInput } from "@actions/core";
const name = GetInput("name");
console.log('name: ${name}');
