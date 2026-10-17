// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mountain-view","repository":"america","path":"united-states/california/mountain-view","depth":3,"parent":"united-states/california","children":["cuesta-park"]});
export const childModules = Object.freeze({"cuesta-park":"./cuesta-park/cuesta-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
