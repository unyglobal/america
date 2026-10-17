// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-brunswick","repository":"america","path":"canada/new-brunswick","depth":2,"parent":"canada","children":["dieppe","edmundston","fredericton","fredericton-northside","lutes-mountain","miramichi","moncton","quispamsis","riverview","saint-john","saint-john-west"]});
export const childModules = Object.freeze({"dieppe":"./dieppe/dieppe.js","edmundston":"./edmundston/edmundston.js","fredericton":"./fredericton/fredericton.js","fredericton-northside":"./fredericton-northside/fredericton-northside.js","lutes-mountain":"./lutes-mountain/lutes-mountain.js","miramichi":"./miramichi/miramichi.js","moncton":"./moncton/moncton.js","quispamsis":"./quispamsis/quispamsis.js","riverview":"./riverview/riverview.js","saint-john":"./saint-john/saint-john.js","saint-john-west":"./saint-john-west/saint-john-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
