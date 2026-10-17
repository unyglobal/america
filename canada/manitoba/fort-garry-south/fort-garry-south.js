// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fort-garry-south","repository":"america","path":"canada/manitoba/fort-garry-south","depth":3,"parent":"canada/manitoba","children":["fairfield-park"]});
export const childModules = Object.freeze({"fairfield-park":"./fairfield-park/fairfield-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
