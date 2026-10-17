// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pensacola","repository":"america","path":"united-states/florida/pensacola","depth":3,"parent":"united-states/florida","children":["guillemard-square"]});
export const childModules = Object.freeze({"guillemard-square":"./guillemard-square/guillemard-square.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
