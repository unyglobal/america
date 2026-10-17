// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paraiba-do-sul","repository":"america","path":"brazil/rio-de-janeiro/paraiba-do-sul","depth":3,"parent":"brazil/rio-de-janeiro","children":["barrio-paraiba-do-sul"]});
export const childModules = Object.freeze({"barrio-paraiba-do-sul":"./barrio-paraiba-do-sul/barrio-paraiba-do-sul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
