let hook;

module.exports = () => {
  if (typeof hook === `undefined`)
    hook = require('zlib').brotliDecompressSync(Buffer.from('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', 'base64')).toString();

  return hook;
};