import readPixelAt from "../dist/index.js";
import reglConstruct from "regl";
const canvas = document.getElementsByTagName("canvas")[(0)];
canvas.addEventListener("mousemove", onMouseMove);

const regl = reglConstruct({
  canvas: canvas
});

const rectangle = regl({
  frag: `
  precision mediump float;
  uniform vec4 color;
  void main () {
    gl_FragColor = color;
  }`,
  vert: `
  precision mediump float;
  attribute vec2 position;
	uniform vec2 scale;
  void main () {
    gl_Position = vec4(position * scale, 0, 1);
  }`,
  attributes: {
    position: [
      [ -0.5, -0.5 ],
      [ 0.5, -0.5 ],
      [ 0.5, 0.5 ],
      [ 0.5, 0.5 ],
      [ -0.5, 0.5 ],
      [ -0.5, -0.5 ]
    ]
  },
  uniforms: {
    color: regl.prop("color") || [ 1, 0, 0, 1 ],
    scale: regl.prop("scale") || [ 1, 1 ]
  },
  count: 6
});

var rectSetup = { scale: [ 1, 1 ], color: [ 1, 1, 0.5, 1 ] };

regl.frame(() => {
  regl.clear({ color: [ 0, 0, 0, 0 ], depth: 1 });
  rectangle(rectSetup);
});

function onMouseMove(e) {
  const result = readPixelAt(regl, e.clientX, e.clientY, [
    () => rectangle(rectSetup)
  ]);
	console.log("result", result);
}
