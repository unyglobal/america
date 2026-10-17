// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monterrey","repository":"america","path":"mexico/nuevo-leon/monterrey","depth":3,"parent":"mexico/nuevo-leon","children":["obrerista","sarabia"]});
export const childModules = Object.freeze({"obrerista":"./obrerista/obrerista.js","sarabia":"./sarabia/sarabia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
