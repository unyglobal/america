// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"westmoreland","repository":"america","path":"jamaica/westmoreland","depth":2,"parent":"jamaica","children":["savanna-la-mar"]});
export const childModules = Object.freeze({"savanna-la-mar":"./savanna-la-mar/savanna-la-mar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
