const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withPWA = require("next-pwa")({
  dest: "public",
});
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

module.exports = withPWA(
  withVanillaExtract({
    transpilePackages: ["@repo/ui"],
  })
);
