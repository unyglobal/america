// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baie-comeau","repository":"america","path":"canada/quebec/baie-comeau","depth":3,"parent":"canada/quebec","children":["marquette"]});
export const childModules = Object.freeze({"marquette":"./marquette/marquette.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
