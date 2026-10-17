// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chetumal","repository":"america","path":"mexico/quintana-roo/chetumal","depth":3,"parent":"mexico/quintana-roo","children":["andres-quintana-roo"]});
export const childModules = Object.freeze({"andres-quintana-roo":"./andres-quintana-roo/andres-quintana-roo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
