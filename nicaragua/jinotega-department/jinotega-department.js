// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jinotega-department","repository":"america","path":"nicaragua/jinotega-department","depth":2,"parent":"nicaragua","children":["jinotega"]});
export const childModules = Object.freeze({"jinotega":"./jinotega/jinotega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
