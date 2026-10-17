// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castanos","repository":"america","path":"mexico/coahuila/castanos","depth":3,"parent":"mexico/coahuila","children":["independencia-norte","san-jose","zona-centro-norte","zona-centro-sur"]});
export const childModules = Object.freeze({"independencia-norte":"./independencia-norte/independencia-norte.js","san-jose":"./san-jose/san-jose.js","zona-centro-norte":"./zona-centro-norte/zona-centro-norte.js","zona-centro-sur":"./zona-centro-sur/zona-centro-sur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
