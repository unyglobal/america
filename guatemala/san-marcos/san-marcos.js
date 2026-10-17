// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-marcos","repository":"america","path":"guatemala/san-marcos","depth":2,"parent":"guatemala","children":["comitancillo","malacatan","san-pedro-sacatepequez"]});
export const childModules = Object.freeze({"comitancillo":"./comitancillo/comitancillo.js","malacatan":"./malacatan/malacatan.js","san-pedro-sacatepequez":"./san-pedro-sacatepequez/san-pedro-sacatepequez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
