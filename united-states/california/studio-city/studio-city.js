// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"studio-city","repository":"america","path":"united-states/california/studio-city","depth":3,"parent":"united-states/california","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
