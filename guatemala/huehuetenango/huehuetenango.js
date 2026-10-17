// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huehuetenango","repository":"america","path":"guatemala/huehuetenango","depth":2,"parent":"guatemala","children":["jacaltenango","soloma"]});
export const childModules = Object.freeze({"jacaltenango":"./jacaltenango/jacaltenango.js","soloma":"./soloma/soloma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
