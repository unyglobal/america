// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jatai","repository":"america","path":"brazil/goias/jatai","depth":3,"parent":"brazil/goias","children":["bela-vista","centro","santa-aeroporto","santa-lucia"]});
export const childModules = Object.freeze({"bela-vista":"./bela-vista/bela-vista.js","centro":"./centro/centro.js","santa-aeroporto":"./santa-aeroporto/santa-aeroporto.js","santa-lucia":"./santa-lucia/santa-lucia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
