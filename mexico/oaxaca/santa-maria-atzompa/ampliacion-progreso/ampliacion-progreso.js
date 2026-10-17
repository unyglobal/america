// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ampliacion-progreso","repository":"america","path":"mexico/oaxaca/santa-maria-atzompa/ampliacion-progreso","depth":4,"parent":"mexico/oaxaca/santa-maria-atzompa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
