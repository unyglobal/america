// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"millbrook","repository":"america","path":"united-states/alabama/millbrook","depth":3,"parent":"united-states/alabama","children":["great-oaks","rose-hill"]});
export const childModules = Object.freeze({"great-oaks":"./great-oaks/great-oaks.js","rose-hill":"./rose-hill/rose-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
