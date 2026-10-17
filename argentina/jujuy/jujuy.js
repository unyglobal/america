// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jujuy","repository":"america","path":"argentina/jujuy","depth":2,"parent":"argentina","children":["libertador-general-san-martin","palpala","san-pedro-de-jujuy","san-salvador-de-jujuy"]});
export const childModules = Object.freeze({"libertador-general-san-martin":"./libertador-general-san-martin/libertador-general-san-martin.js","palpala":"./palpala/palpala.js","san-pedro-de-jujuy":"./san-pedro-de-jujuy/san-pedro-de-jujuy.js","san-salvador-de-jujuy":"./san-salvador-de-jujuy/san-salvador-de-jujuy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
