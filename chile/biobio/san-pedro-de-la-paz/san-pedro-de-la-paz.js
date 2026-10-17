// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pedro-de-la-paz","repository":"america","path":"chile/biobio/san-pedro-de-la-paz","depth":3,"parent":"chile/biobio","children":["huertos-familiares-de-san-pedro","villa-san-pedro"]});
export const childModules = Object.freeze({"huertos-familiares-de-san-pedro":"./huertos-familiares-de-san-pedro/huertos-familiares-de-san-pedro.js","villa-san-pedro":"./villa-san-pedro/villa-san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
