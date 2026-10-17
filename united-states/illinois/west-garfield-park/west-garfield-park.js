// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-garfield-park","repository":"america","path":"united-states/illinois/west-garfield-park","depth":3,"parent":"united-states/illinois","children":["central-park"]});
export const childModules = Object.freeze({"central-park":"./central-park/central-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
