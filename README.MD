# get-mouse-color-gl

A module that let you pass in your mouse position and get the color of your position on WebGL using  [regl](https://github.com/regl-project/regl).

### usage
`npm install get-mouse-color-gl`

#### readPixelAt(regl, mouseX, mouseY, objectArray) => Array

return an array for your mouse color in rgba value.

* [regl] {object} - the Regl instance
* [mouseX] {number} - x position of the mouse
* [mouseY] {number} - y position of the mouse
* [objectArray] {array} - the array of objects you want to render on your scene.
