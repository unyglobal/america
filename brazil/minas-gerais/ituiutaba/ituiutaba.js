// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ituiutaba","repository":"america","path":"brazil/minas-gerais/ituiutaba","depth":3,"parent":"brazil/minas-gerais","children":["centro","progresso"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","progresso":"./progresso/progresso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
