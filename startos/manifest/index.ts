import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'blisspoint',
  title: 'Blisspoint',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/blisspoint-startos',
  upstreamRepo: 'https://github.com/heatpunk/blisspoint',
  marketingUrl: 'https://github.com/heatpunk/blisspoint',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    blisspoint: {
      source: {
        dockerTag:
          'ghcr.io/heatpunk/blisspoint:0.6.5-test.2@sha256:26feb42465a52f4723f953e6df152777e9ebc43cdd22e9763d3d22b4895b7698',
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
