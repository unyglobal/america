// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huamantla","repository":"america","path":"mexico/tlaxcala/huamantla","depth":3,"parent":"mexico/tlaxcala","children":["la-preciosa","san-jose","san-sebastian"]});
export const childModules = Object.freeze({"la-preciosa":"./la-preciosa/la-preciosa.js","san-jose":"./san-jose/san-jose.js","san-sebastian":"./san-sebastian/san-sebastian.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
