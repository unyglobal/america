// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vancouver","repository":"america","path":"canada/british-columbia/vancouver","depth":3,"parent":"canada/british-columbia","children":["south-cambie"]});
export const childModules = Object.freeze({"south-cambie":"./south-cambie/south-cambie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
