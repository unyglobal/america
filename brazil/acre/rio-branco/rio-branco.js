// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-branco","repository":"america","path":"brazil/acre/rio-branco","depth":3,"parent":"brazil/acre","children":["dom-giocondo"]});
export const childModules = Object.freeze({"dom-giocondo":"./dom-giocondo/dom-giocondo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
