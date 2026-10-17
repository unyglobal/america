// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montemorelos","repository":"america","path":"mexico/nuevo-leon/montemorelos","depth":3,"parent":"mexico/nuevo-leon","children":["burocratas-federales","matamoros","paras","zapata","zaragoza","zona-centro"]});
export const childModules = Object.freeze({"burocratas-federales":"./burocratas-federales/burocratas-federales.js","matamoros":"./matamoros/matamoros.js","paras":"./paras/paras.js","zapata":"./zapata/zapata.js","zaragoza":"./zaragoza/zaragoza.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
