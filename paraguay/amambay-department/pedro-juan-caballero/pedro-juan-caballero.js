// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pedro-juan-caballero","repository":"america","path":"paraguay/amambay-department/pedro-juan-caballero","depth":3,"parent":"paraguay/amambay-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
