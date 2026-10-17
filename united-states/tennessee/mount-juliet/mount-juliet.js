// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mount-juliet","repository":"america","path":"united-states/tennessee/mount-juliet","depth":3,"parent":"united-states/tennessee","children":["moreland-farms","oakmont","settlers-knob"]});
export const childModules = Object.freeze({"moreland-farms":"./moreland-farms/moreland-farms.js","oakmont":"./oakmont/oakmont.js","settlers-knob":"./settlers-knob/settlers-knob.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
