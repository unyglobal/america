// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tallahassee","repository":"america","path":"united-states/florida/tallahassee","depth":3,"parent":"united-states/florida","children":["college-park"]});
export const childModules = Object.freeze({"college-park":"./college-park/college-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
