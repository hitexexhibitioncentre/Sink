export default defineAppConfig({
  title: 'HITEX',
  email: 'noreply@hitex.co.in',
  github: 'https://github.com/ccbikai/sink',
  twitter: 'https://sink.cool/kai',
  telegram: 'https://sink.cool/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://sink.cool/blog',
  description: 'A Simple / Speedy / Secure Link Shortener for HITEX.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
