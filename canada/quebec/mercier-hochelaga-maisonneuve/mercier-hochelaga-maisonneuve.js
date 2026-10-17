// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mercier-hochelaga-maisonneuve","repository":"america","path":"canada/quebec/mercier-hochelaga-maisonneuve","depth":3,"parent":"canada/quebec","children":["ct-0012","ct-0013"]});
export const childModules = Object.freeze({"ct-0012":"./ct-0012/ct-0012.js","ct-0013":"./ct-0013/ct-0013.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
