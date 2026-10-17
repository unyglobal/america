// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marpole-south","repository":"america","path":"canada/british-columbia/marpole/marpole-south","depth":4,"parent":"canada/british-columbia/marpole","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
