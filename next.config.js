import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Breaks currently used 'next start' due to:
   *   Error: "next start" does not work with "output: export" configuration.
   *   Use "npx serve@latest out" instead. */
  //output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    // loader: 'imgix',
    domains: ['ordinal-operators.s3.amazonaws.com'],
  },
}

export default withMDX(nextConfig)
