// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-charleston","repository":"america","path":"united-states/south-carolina/north-charleston","depth":3,"parent":"united-states/south-carolina","children":["cherokee-place","chicora-place","tillman-homes"]});
export const childModules = Object.freeze({"cherokee-place":"./cherokee-place/cherokee-place.js","chicora-place":"./chicora-place/chicora-place.js","tillman-homes":"./tillman-homes/tillman-homes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
