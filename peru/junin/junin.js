// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"junin","repository":"america","path":"peru/junin","depth":2,"parent":"peru","children":["chilca","huancayo","jauja","la-oroya","san-martin-de-pangoa","santa-rosa","satipo","tarma"]});
export const childModules = Object.freeze({"chilca":"./chilca/chilca.js","huancayo":"./huancayo/huancayo.js","jauja":"./jauja/jauja.js","la-oroya":"./la-oroya/la-oroya.js","san-martin-de-pangoa":"./san-martin-de-pangoa/san-martin-de-pangoa.js","santa-rosa":"./santa-rosa/santa-rosa.js","satipo":"./satipo/satipo.js","tarma":"./tarma/tarma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
