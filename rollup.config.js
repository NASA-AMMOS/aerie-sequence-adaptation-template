import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  treeshake: false,
  input: "build/src/adaptation.js",
  output: {
    dir: "dist",
  },
  plugins: [
    nodeResolve(),
    // @ts-ignore
    commonjs(),
  ],
};
