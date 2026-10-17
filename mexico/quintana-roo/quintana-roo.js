// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quintana-roo","repository":"america","path":"mexico/quintana-roo","depth":2,"parent":"mexico","children":["cancun","chetumal","cozumel","felipe-carrillo-puerto","playa-del-carmen","tulum"]});
export const childModules = Object.freeze({"cancun":"./cancun/cancun.js","chetumal":"./chetumal/chetumal.js","cozumel":"./cozumel/cozumel.js","felipe-carrillo-puerto":"./felipe-carrillo-puerto/felipe-carrillo-puerto.js","playa-del-carmen":"./playa-del-carmen/playa-del-carmen.js","tulum":"./tulum/tulum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
