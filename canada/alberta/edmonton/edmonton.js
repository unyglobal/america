// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"edmonton","repository":"america","path":"canada/alberta/edmonton","depth":3,"parent":"canada/alberta","children":["boyle-street","river-valley-kinnaird","river-valley-riverside","riverdale"]});
export const childModules = Object.freeze({"boyle-street":"./boyle-street/boyle-street.js","river-valley-kinnaird":"./river-valley-kinnaird/river-valley-kinnaird.js","river-valley-riverside":"./river-valley-riverside/river-valley-riverside.js","riverdale":"./riverdale/riverdale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
