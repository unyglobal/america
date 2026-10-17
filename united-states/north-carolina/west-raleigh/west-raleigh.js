// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-raleigh","repository":"america","path":"united-states/north-carolina/west-raleigh","depth":3,"parent":"united-states/north-carolina","children":["cameron-park","fairmont"]});
export const childModules = Object.freeze({"cameron-park":"./cameron-park/cameron-park.js","fairmont":"./fairmont/fairmont.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
