// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-englewood","repository":"america","path":"united-states/illinois/west-englewood","depth":3,"parent":"united-states/illinois","children":["drexel-estate"]});
export const childModules = Object.freeze({"drexel-estate":"./drexel-estate/drexel-estate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
