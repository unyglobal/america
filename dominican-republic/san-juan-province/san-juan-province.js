// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan-province","repository":"america","path":"dominican-republic/san-juan-province","depth":2,"parent":"dominican-republic","children":["las-matas-de-farfan","san-juan-de-la-maguana"]});
export const childModules = Object.freeze({"las-matas-de-farfan":"./las-matas-de-farfan/las-matas-de-farfan.js","san-juan-de-la-maguana":"./san-juan-de-la-maguana/san-juan-de-la-maguana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
