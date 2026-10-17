// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-domingo-este","repository":"america","path":"dominican-republic/santo-domingo-province/santo-domingo-este","depth":3,"parent":"dominican-republic/santo-domingo-province","children":["los-tres-ojos-de-agua"]});
export const childModules = Object.freeze({"los-tres-ojos-de-agua":"./los-tres-ojos-de-agua/los-tres-ojos-de-agua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
