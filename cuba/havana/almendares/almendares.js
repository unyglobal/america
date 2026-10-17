// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"almendares","repository":"america","path":"cuba/havana/almendares","depth":3,"parent":"cuba/havana","children":["la-sierra"]});
export const childModules = Object.freeze({"la-sierra":"./la-sierra/la-sierra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
