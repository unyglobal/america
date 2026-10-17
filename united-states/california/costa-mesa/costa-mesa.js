// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"costa-mesa","repository":"america","path":"united-states/california/costa-mesa","depth":3,"parent":"united-states/california","children":["hoosier-trailer-court","ponderosa-mobile-home-park"]});
export const childModules = Object.freeze({"hoosier-trailer-court":"./hoosier-trailer-court/hoosier-trailer-court.js","ponderosa-mobile-home-park":"./ponderosa-mobile-home-park/ponderosa-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
