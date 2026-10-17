// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rainville","repository":"america","path":"suriname/paramaribo-district/rainville","depth":3,"parent":"suriname/paramaribo-district","children":["combe","elisabethshof","flamingo-park"]});
export const childModules = Object.freeze({"combe":"./combe/combe.js","elisabethshof":"./elisabethshof/elisabethshof.js","flamingo-park":"./flamingo-park/flamingo-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
