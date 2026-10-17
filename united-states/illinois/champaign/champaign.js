// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"champaign","repository":"america","path":"united-states/illinois/champaign","depth":3,"parent":"united-states/illinois","children":["downtown-champaign","midtown"]});
export const childModules = Object.freeze({"downtown-champaign":"./downtown-champaign/downtown-champaign.js","midtown":"./midtown/midtown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
