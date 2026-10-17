// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"copan-department","repository":"america","path":"honduras/copan-department","depth":2,"parent":"honduras","children":["corquin","cucuyagua","san-pedro-de-copan","santa-rosa-de-copan"]});
export const childModules = Object.freeze({"corquin":"./corquin/corquin.js","cucuyagua":"./cucuyagua/cucuyagua.js","san-pedro-de-copan":"./san-pedro-de-copan/san-pedro-de-copan.js","santa-rosa-de-copan":"./santa-rosa-de-copan/santa-rosa-de-copan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
