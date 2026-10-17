// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-sebastian-el-grande","repository":"america","path":"mexico/jalisco/san-sebastian-el-grande","depth":3,"parent":"mexico/jalisco","children":["chirimoyo","jardines-de-la-primavera","las-flores","villas-de-san-sebastian","villas-de-zapotepec"]});
export const childModules = Object.freeze({"chirimoyo":"./chirimoyo/chirimoyo.js","jardines-de-la-primavera":"./jardines-de-la-primavera/jardines-de-la-primavera.js","las-flores":"./las-flores/las-flores.js","villas-de-san-sebastian":"./villas-de-san-sebastian/villas-de-san-sebastian.js","villas-de-zapotepec":"./villas-de-zapotepec/villas-de-zapotepec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
