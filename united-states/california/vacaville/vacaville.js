// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vacaville","repository":"america","path":"united-states/california/vacaville","depth":3,"parent":"united-states/california","children":["ulatis-park"]});
export const childModules = Object.freeze({"ulatis-park":"./ulatis-park/ulatis-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
