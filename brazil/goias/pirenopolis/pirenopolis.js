// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pirenopolis","repository":"america","path":"brazil/goias/pirenopolis","depth":3,"parent":"brazil/goias","children":["carmo","centro","vila-pequizeiro"]});
export const childModules = Object.freeze({"carmo":"./carmo/carmo.js","centro":"./centro/centro.js","vila-pequizeiro":"./vila-pequizeiro/vila-pequizeiro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
