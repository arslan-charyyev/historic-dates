import { merge } from "webpack-merge";
import common from "./webpack.common.ts";

// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
});
