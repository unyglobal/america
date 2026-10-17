// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maracaibo","repository":"america","path":"venezuela/zulia/maracaibo","depth":3,"parent":"venezuela/zulia","children":["la-ciega","sector-bolivar"]});
export const childModules = Object.freeze({"la-ciega":"./la-ciega/la-ciega.js","sector-bolivar":"./sector-bolivar/sector-bolivar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
