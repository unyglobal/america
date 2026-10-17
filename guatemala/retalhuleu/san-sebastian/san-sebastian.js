// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-sebastian","repository":"america","path":"guatemala/retalhuleu/san-sebastian","depth":3,"parent":"guatemala/retalhuleu","children":["ixpatz","paaj","pajoson","parinox"]});
export const childModules = Object.freeze({"ixpatz":"./ixpatz/ixpatz.js","paaj":"./paaj/paaj.js","pajoson":"./pajoson/pajoson.js","parinox":"./parinox/parinox.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
