// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-altagracia-province","repository":"america","path":"dominican-republic/la-altagracia-province","depth":2,"parent":"dominican-republic","children":["punta-cana","salvaleon-de-higuey"]});
export const childModules = Object.freeze({"punta-cana":"./punta-cana/punta-cana.js","salvaleon-de-higuey":"./salvaleon-de-higuey/salvaleon-de-higuey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
