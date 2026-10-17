// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mirador-de-vasconcelos","repository":"america","path":"mexico/nuevo-leon/san-pedro-garza-garcia/mirador-de-vasconcelos","depth":4,"parent":"mexico/nuevo-leon/san-pedro-garza-garcia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
