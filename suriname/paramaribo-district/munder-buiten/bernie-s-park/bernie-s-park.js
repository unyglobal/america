// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bernie-s-park","repository":"america","path":"suriname/paramaribo-district/munder-buiten/bernie-s-park","depth":4,"parent":"suriname/paramaribo-district/munder-buiten","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
