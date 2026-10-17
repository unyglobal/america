// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-rios-region","repository":"america","path":"chile/los-rios-region","depth":2,"parent":"chile","children":["la-union","las-animas","paillaco","panguipulli","rio-bueno","valdivia"]});
export const childModules = Object.freeze({"la-union":"./la-union/la-union.js","las-animas":"./las-animas/las-animas.js","paillaco":"./paillaco/paillaco.js","panguipulli":"./panguipulli/panguipulli.js","rio-bueno":"./rio-bueno/rio-bueno.js","valdivia":"./valdivia/valdivia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
