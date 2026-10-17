// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-paz-department","repository":"america","path":"honduras/la-paz-department","depth":2,"parent":"honduras","children":["la-paz"]});
export const childModules = Object.freeze({"la-paz":"./la-paz/la-paz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
