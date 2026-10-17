// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-maria-atzompa","repository":"america","path":"mexico/oaxaca/santa-maria-atzompa","depth":3,"parent":"mexico/oaxaca","children":["ampliacion-progreso"]});
export const childModules = Object.freeze({"ampliacion-progreso":"./ampliacion-progreso/ampliacion-progreso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
