// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // 替换为你的 GitHub Pages 地址
  site: 'https://yinlong-bg.github.io/',

  // 替换为你的仓库名（如果不是用户/组织页面，需设置）
  base: '/astro-demo',

  // 确保输出为静态文件
  output: 'static',

  integrations: [preact()]
});