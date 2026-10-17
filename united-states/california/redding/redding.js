// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"redding","repository":"america","path":"united-states/california/redding","depth":3,"parent":"united-states/california","children":["riverside-mobile-park"]});
export const childModules = Object.freeze({"riverside-mobile-park":"./riverside-mobile-park/riverside-mobile-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
