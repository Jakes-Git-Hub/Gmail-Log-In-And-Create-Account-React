// svgImporter.js
function importAll(r) {
  const svgs = {};
  r.keys().forEach(key => {
    const fileName = key.replace('./', '');
    svgs[fileName] = r(key).default;
  });
  return svgs;
}

const importedSVGs = importAll(require.context('./', false, /\.svg$/));

export default importedSVGs;
