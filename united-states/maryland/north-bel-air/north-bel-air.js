// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-bel-air","repository":"america","path":"united-states/maryland/north-bel-air","depth":3,"parent":"united-states/maryland","children":["morgan-park","roland-place"]});
export const childModules = Object.freeze({"morgan-park":"./morgan-park/morgan-park.js","roland-place":"./roland-place/roland-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
