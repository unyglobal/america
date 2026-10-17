// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-lucas-sacatepequez","repository":"america","path":"guatemala/sacatepequez/san-lucas-sacatepequez","depth":3,"parent":"guatemala/sacatepequez","children":["jardines-de-san-lucas-dos","jardines-de-san-lucas-uno"]});
export const childModules = Object.freeze({"jardines-de-san-lucas-dos":"./jardines-de-san-lucas-dos/jardines-de-san-lucas-dos.js","jardines-de-san-lucas-uno":"./jardines-de-san-lucas-uno/jardines-de-san-lucas-uno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
