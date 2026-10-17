// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arauca-department","repository":"america","path":"colombia/arauca-department","depth":2,"parent":"colombia","children":["arauca","tame"]});
export const childModules = Object.freeze({"arauca":"./arauca/arauca.js","tame":"./tame/tame.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
