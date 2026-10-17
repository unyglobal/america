// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"francisco-i-madero","repository":"america","path":"mexico/sinaloa/la-cruz/francisco-i-madero","depth":4,"parent":"mexico/sinaloa/la-cruz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
