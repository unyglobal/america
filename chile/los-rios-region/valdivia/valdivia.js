// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valdivia","repository":"america","path":"chile/los-rios-region/valdivia","depth":3,"parent":"chile/los-rios-region","children":["teja-sur"]});
export const childModules = Object.freeze({"teja-sur":"./teja-sur/teja-sur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
