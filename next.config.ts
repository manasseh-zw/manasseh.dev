import createMdxConfig from "@next/mdx";

const mdxConfig = createMdxConfig();

export default mdxConfig({
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
