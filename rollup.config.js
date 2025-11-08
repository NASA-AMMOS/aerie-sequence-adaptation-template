import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  treeshake: false,
  input: "build/src/adaptation.js",
  output: {
    dir: "dist",
    format: "cjs",             // <- force require() output
    exports: "auto",           // helps if it uses default + named
  },
  external: [/^@codemirror/],
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    // @ts-ignore
    commonjs(),
  ],
};
