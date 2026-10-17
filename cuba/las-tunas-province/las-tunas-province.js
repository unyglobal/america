// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-tunas-province","repository":"america","path":"cuba/las-tunas-province","depth":2,"parent":"cuba","children":["amancio","colombia","jesus-menendez","las-tunas","puerto-padre"]});
export const childModules = Object.freeze({"amancio":"./amancio/amancio.js","colombia":"./colombia/colombia.js","jesus-menendez":"./jesus-menendez/jesus-menendez.js","las-tunas":"./las-tunas/las-tunas.js","puerto-padre":"./puerto-padre/puerto-padre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
