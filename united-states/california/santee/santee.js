// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santee","repository":"america","path":"united-states/california/santee","depth":3,"parent":"united-states/california","children":["camerons-mobile-home-park","hawaiian-village-mobile-home-park","mission-del-magnolia-mobile-home-park","new-frontier-mobile-home-park","town-and-country-mobile-home-park"]});
export const childModules = Object.freeze({"camerons-mobile-home-park":"./camerons-mobile-home-park/camerons-mobile-home-park.js","hawaiian-village-mobile-home-park":"./hawaiian-village-mobile-home-park/hawaiian-village-mobile-home-park.js","mission-del-magnolia-mobile-home-park":"./mission-del-magnolia-mobile-home-park/mission-del-magnolia-mobile-home-park.js","new-frontier-mobile-home-park":"./new-frontier-mobile-home-park/new-frontier-mobile-home-park.js","town-and-country-mobile-home-park":"./town-and-country-mobile-home-park/town-and-country-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
