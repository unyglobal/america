// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tecamac-de-felipe-villanueva","repository":"america","path":"mexico/mexico/tecamac-de-felipe-villanueva","depth":3,"parent":"mexico/mexico","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
