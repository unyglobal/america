// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tupelo","repository":"america","path":"united-states/mississippi/tupelo","depth":3,"parent":"united-states/mississippi","children":["clark-place","parkway","terrace-park"]});
export const childModules = Object.freeze({"clark-place":"./clark-place/clark-place.js","parkway":"./parkway/parkway.js","terrace-park":"./terrace-park/terrace-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
