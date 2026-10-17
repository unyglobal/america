// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayview-hunters-point","repository":"america","path":"united-states/california/bayview-hunters-point","depth":3,"parent":"united-states/california","children":["hunters-point"]});
export const childModules = Object.freeze({"hunters-point":"./hunters-point/hunters-point.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
