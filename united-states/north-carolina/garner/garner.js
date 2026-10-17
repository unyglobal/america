// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"garner","repository":"america","path":"united-states/north-carolina/garner","depth":3,"parent":"united-states/north-carolina","children":["school-acres"]});
export const childModules = Object.freeze({"school-acres":"./school-acres/school-acres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
