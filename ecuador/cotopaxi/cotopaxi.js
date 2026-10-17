// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cotopaxi","repository":"america","path":"ecuador/cotopaxi","depth":2,"parent":"ecuador","children":["la-mana","latacunga","pujili"]});
export const childModules = Object.freeze({"la-mana":"./la-mana/la-mana.js","latacunga":"./latacunga/latacunga.js","pujili":"./pujili/pujili.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
