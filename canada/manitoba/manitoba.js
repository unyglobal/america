// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manitoba","repository":"america","path":"canada/manitoba","depth":2,"parent":"canada","children":["brandon","fort-garry-south","st-james-assiniboia-east","steinbach","winnipeg"]});
export const childModules = Object.freeze({"brandon":"./brandon/brandon.js","fort-garry-south":"./fort-garry-south/fort-garry-south.js","st-james-assiniboia-east":"./st-james-assiniboia-east/st-james-assiniboia-east.js","steinbach":"./steinbach/steinbach.js","winnipeg":"./winnipeg/winnipeg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
