import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
    base:
        process.env.NODE_ENV === 'production'
            ? '/react-course-final-task/'
            : '/',
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
            {
                find: '@api',
                replacement: fileURLToPath(
                    new URL('./src/api', import.meta.url)
                ),
            },
            {
                find: '@assets',
                replacement: fileURLToPath(
                    new URL('./src/assets', import.meta.url)
                ),
            },
            {
                find: '@components',
                replacement: fileURLToPath(
                    new URL('./src/components', import.meta.url)
                ),
            },
            {
                find: '@hooks',
                replacement: fileURLToPath(
                    new URL('./src/hooks', import.meta.url)
                ),
            },
            {
                find: '@layouts',
                replacement: fileURLToPath(
                    new URL('./src/layouts', import.meta.url)
                ),
            },
            {
                find: '@pages',
                replacement: fileURLToPath(
                    new URL('./src/pages', import.meta.url)
                ),
            },
            {
                find: '@routes',
                replacement: fileURLToPath(
                    new URL('./src/routes', import.meta.url)
                ),
            },
            {
                find: '@slice',
                replacement: fileURLToPath(
                    new URL('./src/slice', import.meta.url)
                ),
            },
        ],
    },
});
