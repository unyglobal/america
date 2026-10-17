// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amambay-department","repository":"america","path":"paraguay/amambay-department","depth":2,"parent":"paraguay","children":["pedro-juan-caballero"]});
export const childModules = Object.freeze({"pedro-juan-caballero":"./pedro-juan-caballero/pedro-juan-caballero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
