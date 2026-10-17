// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carmelo","repository":"america","path":"uruguay/colonia/carmelo","depth":3,"parent":"uruguay/colonia","children":["barrio-centenario"]});
export const childModules = Object.freeze({"barrio-centenario":"./barrio-centenario/barrio-centenario.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
