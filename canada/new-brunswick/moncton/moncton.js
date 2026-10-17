// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moncton","repository":"america","path":"canada/new-brunswick/moncton","depth":3,"parent":"canada/new-brunswick","children":["central-moncton","downtown-moncton"]});
export const childModules = Object.freeze({"central-moncton":"./central-moncton/central-moncton.js","downtown-moncton":"./downtown-moncton/downtown-moncton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
