// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dayton","repository":"america","path":"united-states/ohio/dayton","depth":3,"parent":"united-states/ohio","children":["oregon-historic-district"]});
export const childModules = Object.freeze({"oregon-historic-district":"./oregon-historic-district/oregon-historic-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
