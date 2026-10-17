// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cojimar","repository":"america","path":"cuba/havana/cojimar","depth":3,"parent":"cuba/havana","children":["loma"]});
export const childModules = Object.freeze({"loma":"./loma/loma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
