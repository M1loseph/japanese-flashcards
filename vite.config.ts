import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const requireVersionForBuild: Plugin = {
    name: 'require-version-for-build',
    config: (_config, { command, mode }) => {
        if (command !== 'build') {
            return;
        }

        const { VITE_APP_VERSION: version } = loadEnv(mode, '.', 'VITE_');

        if (!version?.trim()) {
            throw new Error('VITE_APP_VERSION must be set for production builds.');
        }
    },
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        requireVersionForBuild,
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
        tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            workbox: {
                navigateFallback: '/',
                runtimeCaching: [
                    {
                        urlPattern: ({ request }) => request.destination === 'document',
                        handler: 'NetworkFirst',
                        options: {
                            networkTimeoutSeconds: 5,
                        },
                    },
                ],
            },
            manifest: {
                name: 'Japonskie Fiszki',
                short_name: 'Fiszki',
                start_url: '/',
                icons: [
                    {
                        src: '/web-app-manifest-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: '/web-app-manifest-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone',
            },
        }),
    ],
});
