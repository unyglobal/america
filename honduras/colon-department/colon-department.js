// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colon-department","repository":"america","path":"honduras/colon-department","depth":2,"parent":"honduras","children":["iriona","saba","sonaguera","tocoa"]});
export const childModules = Object.freeze({"iriona":"./iriona/iriona.js","saba":"./saba/saba.js","sonaguera":"./sonaguera/sonaguera.js","tocoa":"./tocoa/tocoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
