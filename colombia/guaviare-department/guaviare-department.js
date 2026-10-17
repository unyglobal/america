// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guaviare-department","repository":"america","path":"colombia/guaviare-department","depth":2,"parent":"colombia","children":["san-jose-del-guaviare"]});
export const childModules = Object.freeze({"san-jose-del-guaviare":"./san-jose-del-guaviare/san-jose-del-guaviare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
