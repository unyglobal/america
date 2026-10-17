// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-gatos","repository":"america","path":"united-states/california/los-gatos","depth":3,"parent":"united-states/california","children":["los-gatos-trailer-park"]});
export const childModules = Object.freeze({"los-gatos-trailer-park":"./los-gatos-trailer-park/los-gatos-trailer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
