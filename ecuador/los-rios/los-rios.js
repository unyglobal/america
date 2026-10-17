// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-rios","repository":"america","path":"ecuador/los-rios","depth":2,"parent":"ecuador","children":["babahoyo","montalvo","quevedo","valencia","ventanas","vinces"]});
export const childModules = Object.freeze({"babahoyo":"./babahoyo/babahoyo.js","montalvo":"./montalvo/montalvo.js","quevedo":"./quevedo/quevedo.js","valencia":"./valencia/valencia.js","ventanas":"./ventanas/ventanas.js","vinces":"./vinces/vinces.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
