// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quindio-department","repository":"america","path":"colombia/quindio-department","depth":2,"parent":"colombia","children":["armenia","calarca","circasia","la-tebaida","montenegro","quimbaya"]});
export const childModules = Object.freeze({"armenia":"./armenia/armenia.js","calarca":"./calarca/calarca.js","circasia":"./circasia/circasia.js","la-tebaida":"./la-tebaida/la-tebaida.js","montenegro":"./montenegro/montenegro.js","quimbaya":"./quimbaya/quimbaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
