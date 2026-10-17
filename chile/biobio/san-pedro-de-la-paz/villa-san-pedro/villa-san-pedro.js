// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-san-pedro","repository":"america","path":"chile/biobio/san-pedro-de-la-paz/villa-san-pedro","depth":4,"parent":"chile/biobio/san-pedro-de-la-paz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
