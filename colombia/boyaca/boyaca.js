// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boyaca","repository":"america","path":"colombia/boyaca","depth":2,"parent":"colombia","children":["chiquinquira","duitama","moniquira","puerto-boyaca","sogamoso","tunja"]});
export const childModules = Object.freeze({"chiquinquira":"./chiquinquira/chiquinquira.js","duitama":"./duitama/duitama.js","moniquira":"./moniquira/moniquira.js","puerto-boyaca":"./puerto-boyaca/puerto-boyaca.js","sogamoso":"./sogamoso/sogamoso.js","tunja":"./tunja/tunja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
