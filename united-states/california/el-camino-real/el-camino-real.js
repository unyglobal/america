// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-camino-real","repository":"america","path":"united-states/california/el-camino-real","depth":3,"parent":"united-states/california","children":["the-meadows"]});
export const childModules = Object.freeze({"the-meadows":"./the-meadows/the-meadows.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
