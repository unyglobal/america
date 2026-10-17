// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meta-department","repository":"america","path":"colombia/meta-department","depth":2,"parent":"colombia","children":["acacias","granada","puerto-lopez","restrepo","villavicencio"]});
export const childModules = Object.freeze({"acacias":"./acacias/acacias.js","granada":"./granada/granada.js","puerto-lopez":"./puerto-lopez/puerto-lopez.js","restrepo":"./restrepo/restrepo.js","villavicencio":"./villavicencio/villavicencio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
