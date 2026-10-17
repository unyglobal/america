// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-san-pedro","repository":"america","path":"dominican-republic/monte-cristi-province/san-fernando-de-monte-cristi/barrio-san-pedro","depth":4,"parent":"dominican-republic/monte-cristi-province/san-fernando-de-monte-cristi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
