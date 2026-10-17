// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pearl-city","repository":"america","path":"united-states/hawaii/pearl-city","depth":3,"parent":"united-states/hawaii","children":["ewa-scofield-junction","manana-housing","pearl-highlands"]});
export const childModules = Object.freeze({"ewa-scofield-junction":"./ewa-scofield-junction/ewa-scofield-junction.js","manana-housing":"./manana-housing/manana-housing.js","pearl-highlands":"./pearl-highlands/pearl-highlands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
