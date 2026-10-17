// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-lagos-region","repository":"america","path":"chile/los-lagos-region","depth":2,"parent":"chile","children":["ancud","calbuco","castro","frutillar","llanquihue","maullin","osorno","puerto-montt","puerto-varas","purranque","quellon"]});
export const childModules = Object.freeze({"ancud":"./ancud/ancud.js","calbuco":"./calbuco/calbuco.js","castro":"./castro/castro.js","frutillar":"./frutillar/frutillar.js","llanquihue":"./llanquihue/llanquihue.js","maullin":"./maullin/maullin.js","osorno":"./osorno/osorno.js","puerto-montt":"./puerto-montt/puerto-montt.js","puerto-varas":"./puerto-varas/puerto-varas.js","purranque":"./purranque/purranque.js","quellon":"./quellon/quellon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
