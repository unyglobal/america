// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esperanza","repository":"america","path":"dominican-republic/valverde-province/esperanza","depth":3,"parent":"dominican-republic/valverde-province","children":["barrio-norte","barrio-yaguita"]});
export const childModules = Object.freeze({"barrio-norte":"./barrio-norte/barrio-norte.js","barrio-yaguita":"./barrio-yaguita/barrio-yaguita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
