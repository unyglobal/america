// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panama-city","repository":"america","path":"united-states/florida/panama-city","depth":3,"parent":"united-states/florida","children":["pine-hill"]});
export const childModules = Object.freeze({"pine-hill":"./pine-hill/pine-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
