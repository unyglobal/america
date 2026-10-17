// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-sacramento","repository":"america","path":"united-states/california/west-sacramento","depth":3,"parent":"united-states/california","children":["casa-mobile-home-park","el-rancho-mobile-park","garden-acres-mobile-home-park","peethill","riverside-mobile-home-park","walnut-trailer-villa"]});
export const childModules = Object.freeze({"casa-mobile-home-park":"./casa-mobile-home-park/casa-mobile-home-park.js","el-rancho-mobile-park":"./el-rancho-mobile-park/el-rancho-mobile-park.js","garden-acres-mobile-home-park":"./garden-acres-mobile-home-park/garden-acres-mobile-home-park.js","peethill":"./peethill/peethill.js","riverside-mobile-home-park":"./riverside-mobile-home-park/riverside-mobile-home-park.js","walnut-trailer-villa":"./walnut-trailer-villa/walnut-trailer-villa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
