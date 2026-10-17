// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"teja-sur","repository":"america","path":"chile/los-rios-region/valdivia/teja-sur","depth":4,"parent":"chile/los-rios-region/valdivia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
