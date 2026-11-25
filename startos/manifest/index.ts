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
          'ghcr.io/heatpunk/blisspoint:0.6.5-test.4@sha256:daa24737fcc1a91d01021aa7edf1f95253c6ab485825efc2b0ee6842631d523b',
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
