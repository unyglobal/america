// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"apure","repository":"america","path":"venezuela/apure","depth":2,"parent":"venezuela","children":["achaguas","biruaca","elorza","guasdualito","san-fernando-de-apure"]});
export const childModules = Object.freeze({"achaguas":"./achaguas/achaguas.js","biruaca":"./biruaca/biruaca.js","elorza":"./elorza/elorza.js","guasdualito":"./guasdualito/guasdualito.js","san-fernando-de-apure":"./san-fernando-de-apure/san-fernando-de-apure.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
