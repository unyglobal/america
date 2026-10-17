// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"callao","repository":"america","path":"peru/callao","depth":2,"parent":"peru","children":["carmen-de-la-legua-reynoso"]});
export const childModules = Object.freeze({"carmen-de-la-legua-reynoso":"./carmen-de-la-legua-reynoso/carmen-de-la-legua-reynoso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
