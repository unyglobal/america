// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nicetown-tioga","repository":"america","path":"united-states/pennsylvania/nicetown-tioga","depth":3,"parent":"united-states/pennsylvania","children":["tioga"]});
export const childModules = Object.freeze({"tioga":"./tioga/tioga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
