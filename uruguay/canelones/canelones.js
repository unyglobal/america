// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canelones","repository":"america","path":"uruguay/canelones","depth":2,"parent":"uruguay","children":["barros-blancos","la-paz","las-piedras","pando","paso-de-carrasco","progreso","santa-lucia"]});
export const childModules = Object.freeze({"barros-blancos":"./barros-blancos/barros-blancos.js","la-paz":"./la-paz/la-paz.js","las-piedras":"./las-piedras/las-piedras.js","pando":"./pando/pando.js","paso-de-carrasco":"./paso-de-carrasco/paso-de-carrasco.js","progreso":"./progreso/progreso.js","santa-lucia":"./santa-lucia/santa-lucia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
