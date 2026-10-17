// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"charlottesville","repository":"america","path":"united-states/virginia/charlottesville","depth":3,"parent":"united-states/virginia","children":["belmont","north-downtown","vinegar-hill"]});
export const childModules = Object.freeze({"belmont":"./belmont/belmont.js","north-downtown":"./north-downtown/north-downtown.js","vinegar-hill":"./vinegar-hill/vinegar-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
