// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itapissuma","repository":"america","path":"brazil/pernambuco/itapissuma","depth":3,"parent":"brazil/pernambuco","children":["cidade-crianca"]});
export const childModules = Object.freeze({"cidade-crianca":"./cidade-crianca/cidade-crianca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
