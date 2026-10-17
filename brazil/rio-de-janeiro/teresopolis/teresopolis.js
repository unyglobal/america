// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"teresopolis","repository":"america","path":"brazil/rio-de-janeiro/teresopolis","depth":3,"parent":"brazil/rio-de-janeiro","children":["agrioes","agrioles"]});
export const childModules = Object.freeze({"agrioes":"./agrioes/agrioes.js","agrioles":"./agrioles/agrioles.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
