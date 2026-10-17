// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"danforth-east-york","repository":"america","path":"canada/ontario/danforth-east-york","depth":3,"parent":"canada/ontario","children":["danforth"]});
export const childModules = Object.freeze({"danforth":"./danforth/danforth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
