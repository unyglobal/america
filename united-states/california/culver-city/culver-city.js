// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"culver-city","repository":"america","path":"united-states/california/culver-city","depth":3,"parent":"united-states/california","children":["culver-junction","palms"]});
export const childModules = Object.freeze({"culver-junction":"./culver-junction/culver-junction.js","palms":"./palms/palms.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
