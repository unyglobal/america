// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kailua","repository":"america","path":"united-states/hawaii/kailua","depth":3,"parent":"united-states/hawaii","children":["beachside"]});
export const childModules = Object.freeze({"beachside":"./beachside/beachside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
