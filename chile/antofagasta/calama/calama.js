// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"calama","repository":"america","path":"chile/antofagasta/calama","depth":3,"parent":"chile/antofagasta","children":["chorrillos"]});
export const childModules = Object.freeze({"chorrillos":"./chorrillos/chorrillos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
