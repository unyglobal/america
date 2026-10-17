// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-andrew-parish","repository":"america","path":"jamaica/saint-andrew-parish","depth":2,"parent":"jamaica","children":["half-way-tree","new-kingston"]});
export const childModules = Object.freeze({"half-way-tree":"./half-way-tree/half-way-tree.js","new-kingston":"./new-kingston/new-kingston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
