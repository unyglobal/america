// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"punto-fijo","repository":"america","path":"venezuela/falcon/punto-fijo","depth":3,"parent":"venezuela/falcon","children":["barrio-andres-eloy-blanco"]});
export const childModules = Object.freeze({"barrio-andres-eloy-blanco":"./barrio-andres-eloy-blanco/barrio-andres-eloy-blanco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
