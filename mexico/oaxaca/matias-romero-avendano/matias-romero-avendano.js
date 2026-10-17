// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matias-romero-avendano","repository":"america","path":"mexico/oaxaca/matias-romero-avendano","depth":3,"parent":"mexico/oaxaca","children":["barrio-juarez-sur"]});
export const childModules = Object.freeze({"barrio-juarez-sur":"./barrio-juarez-sur/barrio-juarez-sur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
