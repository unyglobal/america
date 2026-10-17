// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lempira-department","repository":"america","path":"honduras/lempira-department","depth":2,"parent":"honduras","children":["erandique","la-iguala","lepaera"]});
export const childModules = Object.freeze({"erandique":"./erandique/erandique.js","la-iguala":"./la-iguala/la-iguala.js","lepaera":"./lepaera/lepaera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
