// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northbrook","repository":"america","path":"united-states/illinois/northbrook","depth":3,"parent":"united-states/illinois","children":["shermerville"]});
export const childModules = Object.freeze({"shermerville":"./shermerville/shermerville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
