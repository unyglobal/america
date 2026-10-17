// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-bernardino-tlaxcalancingo","repository":"america","path":"mexico/puebla/san-bernardino-tlaxcalancingo","depth":3,"parent":"mexico/puebla","children":["coyotepec","los-caballos","san-bernardino-la-trinidad","santa-maria","xinacatla"]});
export const childModules = Object.freeze({"coyotepec":"./coyotepec/coyotepec.js","los-caballos":"./los-caballos/los-caballos.js","san-bernardino-la-trinidad":"./san-bernardino-la-trinidad/san-bernardino-la-trinidad.js","santa-maria":"./santa-maria/santa-maria.js","xinacatla":"./xinacatla/xinacatla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
