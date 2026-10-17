// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roseau","repository":"america","path":"dominica/saint-george-parish/roseau","depth":3,"parent":"dominica/saint-george-parish","children":["goodwill","potter-s-ville","stock-farm"]});
export const childModules = Object.freeze({"goodwill":"./goodwill/goodwill.js","potter-s-ville":"./potter-s-ville/potter-s-ville.js","stock-farm":"./stock-farm/stock-farm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
