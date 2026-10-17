// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quiche","repository":"america","path":"guatemala/quiche","depth":2,"parent":"guatemala","children":["chichicastenango","nebaj","santa-cruz-del-quiche"]});
export const childModules = Object.freeze({"chichicastenango":"./chichicastenango/chichicastenango.js","nebaj":"./nebaj/nebaj.js","santa-cruz-del-quiche":"./santa-cruz-del-quiche/santa-cruz-del-quiche.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
