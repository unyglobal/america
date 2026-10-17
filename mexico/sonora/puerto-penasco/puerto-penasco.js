// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-penasco","repository":"america","path":"mexico/sonora/puerto-penasco","depth":3,"parent":"mexico/sonora","children":["centro","ferrocarrilera","penasco"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","ferrocarrilera":"./ferrocarrilera/ferrocarrilera.js","penasco":"./penasco/penasco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
