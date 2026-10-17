// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casablanca","repository":"america","path":"chile/valparaiso/casablanca","depth":3,"parent":"chile/valparaiso","children":["casa-blanca"]});
export const childModules = Object.freeze({"casa-blanca":"./casa-blanca/casa-blanca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
