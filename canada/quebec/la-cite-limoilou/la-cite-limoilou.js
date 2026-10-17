// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-cite-limoilou","repository":"america","path":"canada/quebec/la-cite-limoilou","depth":3,"parent":"canada/quebec","children":["vieux-limoilou"]});
export const childModules = Object.freeze({"vieux-limoilou":"./vieux-limoilou/vieux-limoilou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
