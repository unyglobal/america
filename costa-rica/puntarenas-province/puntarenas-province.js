// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puntarenas-province","repository":"america","path":"costa-rica/puntarenas-province","depth":2,"parent":"costa-rica","children":["chacarita","esparza","puntarenas"]});
export const childModules = Object.freeze({"chacarita":"./chacarita/chacarita.js","esparza":"./esparza/esparza.js","puntarenas":"./puntarenas/puntarenas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
