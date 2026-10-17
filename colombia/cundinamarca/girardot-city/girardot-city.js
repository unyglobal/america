// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"girardot-city","repository":"america","path":"colombia/cundinamarca/girardot-city","depth":3,"parent":"colombia/cundinamarca","children":["giradot"]});
export const childModules = Object.freeze({"giradot":"./giradot/giradot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
