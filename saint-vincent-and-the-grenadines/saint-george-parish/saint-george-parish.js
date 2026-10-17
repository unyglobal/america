// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-george-parish","repository":"america","path":"saint-vincent-and-the-grenadines/saint-george-parish","depth":2,"parent":"saint-vincent-and-the-grenadines","children":["calliaqua","kingstown"]});
export const childModules = Object.freeze({"calliaqua":"./calliaqua/calliaqua.js","kingstown":"./kingstown/kingstown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
