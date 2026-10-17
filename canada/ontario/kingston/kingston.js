// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingston","repository":"america","path":"canada/ontario/kingston","depth":3,"parent":"canada/ontario","children":["inner-harbour","sydenham"]});
export const childModules = Object.freeze({"inner-harbour":"./inner-harbour/inner-harbour.js","sydenham":"./sydenham/sydenham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
