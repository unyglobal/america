// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siloam-springs","repository":"america","path":"united-states/arkansas/siloam-springs","depth":3,"parent":"united-states/arkansas","children":["twin-springs"]});
export const childModules = Object.freeze({"twin-springs":"./twin-springs/twin-springs.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
