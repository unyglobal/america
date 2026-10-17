// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanchez-ramirez","repository":"america","path":"dominican-republic/sanchez-ramirez","depth":2,"parent":"dominican-republic","children":["cotui"]});
export const childModules = Object.freeze({"cotui":"./cotui/cotui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
