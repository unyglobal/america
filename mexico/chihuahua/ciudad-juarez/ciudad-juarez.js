// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-juarez","repository":"america","path":"mexico/chihuahua/ciudad-juarez","depth":3,"parent":"mexico/chihuahua","children":["rivera-del-rio-bravo"]});
export const childModules = Object.freeze({"rivera-del-rio-bravo":"./rivera-del-rio-bravo/rivera-del-rio-bravo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
