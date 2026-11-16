// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

const site = 'https://vorta.borgbase.com';
const ogImage = `${site}/assets/images/vorta/vorta-mainwindow.png`;

export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Vorta for Borg Backup',
			description: 'A Desktop Backup Client for Borg Backup',
			logo: { src: './src/assets/logo.svg', alt: 'Vorta' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			editLink: { baseUrl: 'https://github.com/borgbase/vorta.borgbase.com/edit/main/' },
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
				Hero: './src/components/Hero.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '32x32' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Vorta main window' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } },
				{ tag: 'meta', attrs: { name: 'twitter:image:alt', content: 'Vorta main window' } },
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://stats.snapdragon.cc/script.js',
						'data-website-id': 'f95ad727-c90a-494b-9c39-dbdc8316cba8',
					},
				},
			],
			plugins: [starlightLinksValidator()],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Install',
					items: [{ slug: 'install', label: 'Overview' }, 'install/macos', 'install/linux', 'install/windows'],
				},
				{
					label: 'Usage',
					items: [
						{ slug: 'usage', label: 'Introduction' },
						'usage/remote',
						'usage/local',
						'usage/restore',
						'usage/prune',
						'usage/settings',
					],
				},
				{
					label: 'Contributing',
					items: [
						{ slug: 'contributing', label: 'Overview' },
						'contributing/translations',
						'contributing/packaging',
					],
				},
				'faq',
			],
		}),
	],
});
