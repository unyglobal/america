// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belford-roxo","repository":"america","path":"brazil/rio-de-janeiro/belford-roxo","depth":3,"parent":"brazil/rio-de-janeiro","children":["vila-dagmar"]});
export const childModules = Object.freeze({"vila-dagmar":"./vila-dagmar/vila-dagmar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
