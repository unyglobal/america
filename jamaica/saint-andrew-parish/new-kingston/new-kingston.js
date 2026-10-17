// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-kingston","repository":"america","path":"jamaica/saint-andrew-parish/new-kingston","depth":3,"parent":"jamaica/saint-andrew-parish","children":["worthington"]});
export const childModules = Object.freeze({"worthington":"./worthington/worthington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
