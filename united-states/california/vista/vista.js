// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vista","repository":"america","path":"united-states/california/vista","depth":3,"parent":"united-states/california","children":["gold-star-mobile-home","vista-manor-trailer-park"]});
export const childModules = Object.freeze({"gold-star-mobile-home":"./gold-star-mobile-home/gold-star-mobile-home.js","vista-manor-trailer-park":"./vista-manor-trailer-park/vista-manor-trailer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
