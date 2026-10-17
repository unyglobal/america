// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patzicia","repository":"america","path":"guatemala/chimaltenango/patzicia","depth":3,"parent":"guatemala/chimaltenango","children":["tzanjay"]});
export const childModules = Object.freeze({"tzanjay":"./tzanjay/tzanjay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
