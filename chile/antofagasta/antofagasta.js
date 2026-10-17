// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"antofagasta","repository":"america","path":"chile/antofagasta","depth":2,"parent":"chile","children":["calama","tocopilla"]});
export const childModules = Object.freeze({"calama":"./calama/calama.js","tocopilla":"./tocopilla/tocopilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
