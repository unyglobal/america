// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alta-verapaz","repository":"america","path":"guatemala/alta-verapaz","depth":2,"parent":"guatemala","children":["chisec","coban","panzos","san-cristobal-verapaz","san-pedro-carcha"]});
export const childModules = Object.freeze({"chisec":"./chisec/chisec.js","coban":"./coban/coban.js","panzos":"./panzos/panzos.js","san-cristobal-verapaz":"./san-cristobal-verapaz/san-cristobal-verapaz.js","san-pedro-carcha":"./san-pedro-carcha/san-pedro-carcha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
