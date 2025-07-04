// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://yinlong-bg.github.io/', // 替换为你的 GitHub Pages 地址
    base: '/astro-demo', // 替换为你的仓库名（如果不是用户/组织页面，需设置）
    output: 'static', // 确保输出为静态文件
});
