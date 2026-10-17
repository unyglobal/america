// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marpole","repository":"america","path":"canada/british-columbia/marpole","depth":3,"parent":"canada/british-columbia","children":["marpole-south"]});
export const childModules = Object.freeze({"marpole-south":"./marpole-south/marpole-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
