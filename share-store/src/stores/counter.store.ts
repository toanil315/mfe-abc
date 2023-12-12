import { atom } from "nanostores";

const $counter = atom<number>(0);

console.log($counter);
export default $counter;
