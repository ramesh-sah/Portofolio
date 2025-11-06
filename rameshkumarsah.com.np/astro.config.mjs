// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});


import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';



export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://rameshkumarsah.com.np',

});
