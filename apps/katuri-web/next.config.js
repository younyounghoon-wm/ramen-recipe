const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

module.exports = withVanillaExtract({
  transpilePackages: ["@repo/ui"],
});
