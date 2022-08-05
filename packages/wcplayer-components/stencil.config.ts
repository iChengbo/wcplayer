import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'wcplayer',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@wcplayer/components',
      proxiesFile: '../wcplayer-components-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@wcplayer/components',
      proxiesFile: '../wcplayer-components-vue/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
