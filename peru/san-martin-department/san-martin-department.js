// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-martin-department","repository":"america","path":"peru/san-martin-department","depth":2,"parent":"peru","children":["bellavista","juanjui","la-banda","moyobamba","rioja","tocache","uchiza"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","juanjui":"./juanjui/juanjui.js","la-banda":"./la-banda/la-banda.js","moyobamba":"./moyobamba/moyobamba.js","rioja":"./rioja/rioja.js","tocache":"./tocache/tocache.js","uchiza":"./uchiza/uchiza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
