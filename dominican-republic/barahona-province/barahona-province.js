// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barahona-province","repository":"america","path":"dominican-republic/barahona-province","depth":2,"parent":"dominican-republic","children":["santa-cruz-de-barahona"]});
export const childModules = Object.freeze({"santa-cruz-de-barahona":"./santa-cruz-de-barahona/santa-cruz-de-barahona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
