// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"francisco-morazan-department","repository":"america","path":"honduras/francisco-morazan-department","depth":2,"parent":"honduras","children":["sabanagrande","san-juan-de-flores","tegucigalpa"]});
export const childModules = Object.freeze({"sabanagrande":"./sabanagrande/sabanagrande.js","san-juan-de-flores":"./san-juan-de-flores/san-juan-de-flores.js","tegucigalpa":"./tegucigalpa/tegucigalpa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
