// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pittsburgh","repository":"america","path":"united-states/pennsylvania/pittsburgh","depth":3,"parent":"united-states/pennsylvania","children":["downtown","uptown"]});
export const childModules = Object.freeze({"downtown":"./downtown/downtown.js","uptown":"./uptown/uptown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
