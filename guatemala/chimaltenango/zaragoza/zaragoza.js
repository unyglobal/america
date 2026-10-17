// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaragoza","repository":"america","path":"guatemala/chimaltenango/zaragoza","depth":3,"parent":"guatemala/chimaltenango","children":["la-virgen-del-pilar"]});
export const childModules = Object.freeze({"la-virgen-del-pilar":"./la-virgen-del-pilar/la-virgen-del-pilar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
