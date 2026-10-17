// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-presidentes-primera-seccion","repository":"america","path":"mexico/oaxaca/ciudad-de-huajuapan-de-leon/los-presidentes-primera-seccion","depth":4,"parent":"mexico/oaxaca/ciudad-de-huajuapan-de-leon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
