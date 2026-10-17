// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panama-oeste-province","repository":"america","path":"panama/panama-oeste-province","depth":2,"parent":"panama","children":["arraijan","la-chorrera","veracruz"]});
export const childModules = Object.freeze({"arraijan":"./arraijan/arraijan.js","la-chorrera":"./la-chorrera/la-chorrera.js","veracruz":"./veracruz/veracruz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
