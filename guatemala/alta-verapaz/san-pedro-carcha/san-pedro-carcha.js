// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pedro-carcha","repository":"america","path":"guatemala/alta-verapaz/san-pedro-carcha","depth":3,"parent":"guatemala/alta-verapaz","children":["caniab","la-trinidad"]});
export const childModules = Object.freeze({"caniab":"./caniab/caniab.js","la-trinidad":"./la-trinidad/la-trinidad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
