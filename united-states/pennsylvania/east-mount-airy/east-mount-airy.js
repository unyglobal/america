// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-mount-airy","repository":"america","path":"united-states/pennsylvania/east-mount-airy","depth":3,"parent":"united-states/pennsylvania","children":["mount-airy"]});
export const childModules = Object.freeze({"mount-airy":"./mount-airy/mount-airy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
