// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sancti-spiritus-province","repository":"america","path":"cuba/sancti-spiritus-province","depth":2,"parent":"cuba","children":["cabaiguan","condado","fomento","jatibonico","la-sierpe","sancti-spiritus","trinidad","yaguajay"]});
export const childModules = Object.freeze({"cabaiguan":"./cabaiguan/cabaiguan.js","condado":"./condado/condado.js","fomento":"./fomento/fomento.js","jatibonico":"./jatibonico/jatibonico.js","la-sierpe":"./la-sierpe/la-sierpe.js","sancti-spiritus":"./sancti-spiritus/sancti-spiritus.js","trinidad":"./trinidad/trinidad.js","yaguajay":"./yaguajay/yaguajay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
