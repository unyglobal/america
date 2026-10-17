// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-au-prince","repository":"america","path":"haiti/ouest/port-au-prince","depth":3,"parent":"haiti/ouest","children":["bel-air","morne-a-tuf","poste-marchand"]});
export const childModules = Object.freeze({"bel-air":"./bel-air/bel-air.js","morne-a-tuf":"./morne-a-tuf/morne-a-tuf.js","poste-marchand":"./poste-marchand/poste-marchand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
