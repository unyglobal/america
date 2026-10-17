// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-hampshire","repository":"america","path":"united-states/new-hampshire","depth":2,"parent":"united-states","children":["derry","derry-village","east-concord","keene","laconia","merrimack","nashua"]});
export const childModules = Object.freeze({"derry":"./derry/derry.js","derry-village":"./derry-village/derry-village.js","east-concord":"./east-concord/east-concord.js","keene":"./keene/keene.js","laconia":"./laconia/laconia.js","merrimack":"./merrimack/merrimack.js","nashua":"./nashua/nashua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
