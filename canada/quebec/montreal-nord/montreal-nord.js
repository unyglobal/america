// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montreal-nord","repository":"america","path":"canada/quebec/montreal-nord","depth":3,"parent":"canada/quebec","children":["centre","centre-nord"]});
export const childModules = Object.freeze({"centre":"./centre/centre.js","centre-nord":"./centre-nord/centre-nord.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
