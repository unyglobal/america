// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woodlawn","repository":"america","path":"canada/nova-scotia/woodlawn","depth":3,"parent":"canada/nova-scotia","children":["commodore-park","ellenvale"]});
export const childModules = Object.freeze({"commodore-park":"./commodore-park/commodore-park.js","ellenvale":"./ellenvale/ellenvale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
