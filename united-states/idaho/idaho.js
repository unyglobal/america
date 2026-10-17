// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"idaho","repository":"america","path":"united-states/idaho","depth":2,"parent":"united-states","children":["boise","caldwell","coeur-d-alene","conda","eagle","eagle-foothills","idaho-falls","kuna","lewiston-orchards","moscow","nampa","pocatello","post-falls","rexburg","twin-falls"]});
export const childModules = Object.freeze({"boise":"./boise/boise.js","caldwell":"./caldwell/caldwell.js","coeur-d-alene":"./coeur-d-alene/coeur-d-alene.js","conda":"./conda/conda.js","eagle":"./eagle/eagle.js","eagle-foothills":"./eagle-foothills/eagle-foothills.js","idaho-falls":"./idaho-falls/idaho-falls.js","kuna":"./kuna/kuna.js","lewiston-orchards":"./lewiston-orchards/lewiston-orchards.js","moscow":"./moscow/moscow.js","nampa":"./nampa/nampa.js","pocatello":"./pocatello/pocatello.js","post-falls":"./post-falls/post-falls.js","rexburg":"./rexburg/rexburg.js","twin-falls":"./twin-falls/twin-falls.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
