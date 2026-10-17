// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pacasmayo","repository":"america","path":"peru/la-libertad/pacasmayo","depth":3,"parent":"peru/la-libertad","children":["las-palmeras"]});
export const childModules = Object.freeze({"las-palmeras":"./las-palmeras/las-palmeras.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
