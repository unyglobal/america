// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-largo","repository":"america","path":"brazil/alagoas/rio-largo","depth":3,"parent":"brazil/alagoas","children":["cidade-de-deus","grota-da-raposa"]});
export const childModules = Object.freeze({"cidade-de-deus":"./cidade-de-deus/cidade-de-deus.js","grota-da-raposa":"./grota-da-raposa/grota-da-raposa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
