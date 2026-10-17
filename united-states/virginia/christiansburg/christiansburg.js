// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"christiansburg","repository":"america","path":"united-states/virginia/christiansburg","depth":3,"parent":"united-states/virginia","children":["beverly-hills","highview-terrace","johnson-heights","lee-hi-court","lester-place","lynwood-terrace","victory-heights"]});
export const childModules = Object.freeze({"beverly-hills":"./beverly-hills/beverly-hills.js","highview-terrace":"./highview-terrace/highview-terrace.js","johnson-heights":"./johnson-heights/johnson-heights.js","lee-hi-court":"./lee-hi-court/lee-hi-court.js","lester-place":"./lester-place/lester-place.js","lynwood-terrace":"./lynwood-terrace/lynwood-terrace.js","victory-heights":"./victory-heights/victory-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
