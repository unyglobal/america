// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-juarez-sur","repository":"america","path":"mexico/oaxaca/matias-romero-avendano/barrio-juarez-sur","depth":4,"parent":"mexico/oaxaca/matias-romero-avendano","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
