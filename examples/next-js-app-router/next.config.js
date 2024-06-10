const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
  }
);

module.exports = nextConfig;
