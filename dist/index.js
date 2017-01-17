(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.getMouseColorGL = factory());
}(this, (function () { 'use strict';

let fbo = null;
function readPixelAt(regl, x, y, contents) {
  const width = regl._gl.canvas.clientWidth;
  const height = regl._gl.canvas.clientHeight;
  if (!fbo) {
    fbo = regl.framebuffer({
      width,
      height,
      stencil: false
    });
  }

  return new Promise(resolve => {
    if (x < width && y < height) {
      regl({ framebuffer: fbo })(() => {
        regl.clear({ color: [0, 0, 0, 0], depth: 1 });
        for (let i = 0; i < contents.length; ++i) {
          contents[i]();
        }
        resolve(regl.read({ x, y, width: 1, height: 1 }));
      });
    }
    resolve(null);
  });
}

return readPixelAt;

})));
//# sourceMappingURL=index.js.map
