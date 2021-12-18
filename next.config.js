// @ts-check
'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const pageIdsThatHaveThumnail = [];

fs.readdirSync('./public/images/thumbnails/pages/').forEach((filename) => {
  pageIdsThatHaveThumnail.push(filename.split('.')[0]);
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages/6ca2dd5e-2214-4873-8ffa-d634d8ebbb53',
      },
    ];
  },
  env: {},
  publicRuntimeConfig: {
    rootNotionPageId: '624d67d9aed24640b73fd62d247eb93e',
    rootNotionSpaceId: null,
    gaTraceId: 'G-HDWXJVK15N',
    pageIdsThatHaveThumnail,
  },
};

module.exports = nextConfig;

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

  module.exports = withBundleAnalyzer(nextConfig);
}
