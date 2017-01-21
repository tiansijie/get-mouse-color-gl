let fbo = null;
let framebuffer;
function getMouseColorGL(regl, x, y, contents) {
  const width = regl._gl.canvas.clientWidth;
  const height = regl._gl.canvas.clientHeight;
  if (!fbo) {
    fbo = regl.framebuffer({
      width,
      height,
      stencil: false
    });
    framebuffer = regl({ framebuffer: fbo })
  }

  if (x < width && y < height) {
    let result;
    framebuffer(() => {
      regl.clear({ color: [ 0, 0, 0, 0 ], depth: 1 });
      for (let i = 0; i < contents.length; ++i) {
        contents[i]();
      }
      result = regl.read({ x, y, width: 1, height: 1 });
    });
    return result;
  }
  return null;
}

export default getMouseColorGL;
