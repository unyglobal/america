// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-andres-y-providencia","repository":"america","path":"colombia/san-andres-y-providencia","depth":2,"parent":"colombia","children":["san-andres"]});
export const childModules = Object.freeze({"san-andres":"./san-andres/san-andres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
