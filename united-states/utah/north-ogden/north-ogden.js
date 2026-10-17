// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-ogden","repository":"america","path":"united-states/utah/north-ogden","depth":3,"parent":"united-states/utah","children":["scottish-highlands","simmons","willowbrook"]});
export const childModules = Object.freeze({"scottish-highlands":"./scottish-highlands/scottish-highlands.js","simmons":"./simmons/simmons.js","willowbrook":"./willowbrook/willowbrook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
