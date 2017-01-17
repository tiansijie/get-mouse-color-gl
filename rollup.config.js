import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
  entry: "src/index.js",
  dest: "dist/index.js",
  moduleName: "getMouseColorGL",
  sourceMap: "true",
  format: "umd",
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || "development")
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
