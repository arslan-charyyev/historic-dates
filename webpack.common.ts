import path from "node:path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        // Used for importing css from dependencies like @fontsource
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.[ts]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true, typescript: true } }],
      },
      {
        // The default font loader uses content-hash without file name
        test: /\.(woff(2)?)$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name].[contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "",
      favicon: "./src/assets/favicon.png",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

export default config;
