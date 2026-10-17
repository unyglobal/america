// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montes-claros","repository":"america","path":"brazil/minas-gerais/montes-claros","depth":3,"parent":"brazil/minas-gerais","children":["morrinhos"]});
export const childModules = Object.freeze({"morrinhos":"./morrinhos/morrinhos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
