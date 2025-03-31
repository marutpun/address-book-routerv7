import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./layouts/sidebar.tsx', [
    index('home/index.tsx'),
    route('contacts/:slug', 'contact/page.tsx'),
    route('contacts/:slug/edit', 'contact/edit/page.tsx'),
    route('contacts/:slug/destroy', 'contact/destroy/page.tsx'),
  ]),
  route('about', 'about/page.tsx'),
] satisfies RouteConfig;
