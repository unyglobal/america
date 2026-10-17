// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-de-cuba-province","repository":"america","path":"cuba/santiago-de-cuba-province","depth":2,"parent":"cuba","children":["contramaestre","palma-soriano","san-luis","santiago-de-cuba"]});
export const childModules = Object.freeze({"contramaestre":"./contramaestre/contramaestre.js","palma-soriano":"./palma-soriano/palma-soriano.js","san-luis":"./san-luis/san-luis.js","santiago-de-cuba":"./santiago-de-cuba/santiago-de-cuba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
