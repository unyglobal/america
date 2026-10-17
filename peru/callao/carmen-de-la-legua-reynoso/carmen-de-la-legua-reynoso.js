// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carmen-de-la-legua-reynoso","repository":"america","path":"peru/callao/carmen-de-la-legua-reynoso","depth":3,"parent":"peru/callao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
