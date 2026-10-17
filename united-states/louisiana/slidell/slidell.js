// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slidell","repository":"america","path":"united-states/louisiana/slidell","depth":3,"parent":"united-states/louisiana","children":["brugier","chamale-cove","fountainbleau","lincoln-park","park-place"]});
export const childModules = Object.freeze({"brugier":"./brugier/brugier.js","chamale-cove":"./chamale-cove/chamale-cove.js","fountainbleau":"./fountainbleau/fountainbleau.js","lincoln-park":"./lincoln-park/lincoln-park.js","park-place":"./park-place/park-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
