// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-angeles","repository":"america","path":"united-states/california/los-angeles","depth":3,"parent":"united-states/california","children":["bunker-hill","little-tokyo","los-angeles-city-center"]});
export const childModules = Object.freeze({"bunker-hill":"./bunker-hill/bunker-hill.js","little-tokyo":"./little-tokyo/little-tokyo.js","los-angeles-city-center":"./los-angeles-city-center/los-angeles-city-center.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
