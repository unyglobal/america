// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seattle","repository":"america","path":"united-states/washington/seattle","depth":3,"parent":"united-states/washington","children":["central-business-district","downtown-seattle","first-hill","pike-market","pioneer-square"]});
export const childModules = Object.freeze({"central-business-district":"./central-business-district/central-business-district.js","downtown-seattle":"./downtown-seattle/downtown-seattle.js","first-hill":"./first-hill/first-hill.js","pike-market":"./pike-market/pike-market.js","pioneer-square":"./pioneer-square/pioneer-square.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
