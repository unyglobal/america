// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-department","repository":"america","path":"paraguay/central-department","depth":2,"parent":"paraguay","children":["capiata","fernando-de-la-mora","ita","itaugua","lambare","limpio","mariano-roque-alonso","nemby","san-antonio","san-lorenzo","villa-elisa","villeta"]});
export const childModules = Object.freeze({"capiata":"./capiata/capiata.js","fernando-de-la-mora":"./fernando-de-la-mora/fernando-de-la-mora.js","ita":"./ita/ita.js","itaugua":"./itaugua/itaugua.js","lambare":"./lambare/lambare.js","limpio":"./limpio/limpio.js","mariano-roque-alonso":"./mariano-roque-alonso/mariano-roque-alonso.js","nemby":"./nemby/nemby.js","san-antonio":"./san-antonio/san-antonio.js","san-lorenzo":"./san-lorenzo/san-lorenzo.js","villa-elisa":"./villa-elisa/villa-elisa.js","villeta":"./villeta/villeta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
