// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tustin","repository":"america","path":"united-states/california/tustin","depth":3,"parent":"united-states/california","children":["montesilla-mobile-home-club","parque-santiago-mobile-home-park"]});
export const childModules = Object.freeze({"montesilla-mobile-home-club":"./montesilla-mobile-home-club/montesilla-mobile-home-club.js","parque-santiago-mobile-home-park":"./parque-santiago-mobile-home-park/parque-santiago-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
