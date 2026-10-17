// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"st-john-s","repository":"america","path":"canada/newfoundland-and-labrador/st-john-s","depth":3,"parent":"canada/newfoundland-and-labrador","children":["bannerman","downtown-st-john-s","fort-william","georgestown"]});
export const childModules = Object.freeze({"bannerman":"./bannerman/bannerman.js","downtown-st-john-s":"./downtown-st-john-s/downtown-st-john-s.js","fort-william":"./fort-william/fort-william.js","georgestown":"./georgestown/georgestown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
