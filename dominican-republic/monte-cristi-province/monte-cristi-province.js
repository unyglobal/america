// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monte-cristi-province","repository":"america","path":"dominican-republic/monte-cristi-province","depth":2,"parent":"dominican-republic","children":["san-fernando-de-monte-cristi"]});
export const childModules = Object.freeze({"san-fernando-de-monte-cristi":"./san-fernando-de-monte-cristi/san-fernando-de-monte-cristi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
