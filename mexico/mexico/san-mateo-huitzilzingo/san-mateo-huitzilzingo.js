// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-mateo-huitzilzingo","repository":"america","path":"mexico/mexico/san-mateo-huitzilzingo","depth":3,"parent":"mexico/mexico","children":["san-lorenzo-chimalpa"]});
export const childModules = Object.freeze({"san-lorenzo-chimalpa":"./san-lorenzo-chimalpa/san-lorenzo-chimalpa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
