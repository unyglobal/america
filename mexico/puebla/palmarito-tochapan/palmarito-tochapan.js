// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palmarito-tochapan","repository":"america","path":"mexico/puebla/palmarito-tochapan","depth":3,"parent":"mexico/puebla","children":["san-jose"]});
export const childModules = Object.freeze({"san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
