// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wihkwentowin","repository":"america","path":"canada/alberta/wihkwentowin","depth":3,"parent":"canada/alberta","children":["river-valley-victoria"]});
export const childModules = Object.freeze({"river-valley-victoria":"./river-valley-victoria/river-valley-victoria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
