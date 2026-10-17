// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz-department","repository":"america","path":"bolivia/santa-cruz-department","depth":2,"parent":"bolivia","children":["ascencion-de-guarayos","camiri","cotoca","el-torno","montero","san-ignacio-de-velasco","santa-cruz-de-la-sierra","villa-yapacani","warnes"]});
export const childModules = Object.freeze({"ascencion-de-guarayos":"./ascencion-de-guarayos/ascencion-de-guarayos.js","camiri":"./camiri/camiri.js","cotoca":"./cotoca/cotoca.js","el-torno":"./el-torno/el-torno.js","montero":"./montero/montero.js","san-ignacio-de-velasco":"./san-ignacio-de-velasco/san-ignacio-de-velasco.js","santa-cruz-de-la-sierra":"./santa-cruz-de-la-sierra/santa-cruz-de-la-sierra.js","villa-yapacani":"./villa-yapacani/villa-yapacani.js","warnes":"./warnes/warnes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
