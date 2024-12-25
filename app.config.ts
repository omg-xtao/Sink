export default defineAppConfig({
  title: '深海小涛',
  email: 'xtao@xtaolink.cn',
  github: 'https://github.com/omg-xtao',
  twitter: 'https://x.com/xtaodada',
  telegram: 'https://t.me/omg_xtao',
  mastodon: 'https://m.moec.top/@xtao',
  blog: 'https://blog.xtao.de',
  description: '混吃等死卖萌打滚的小废物。',
  image: 'https://xtao.de/_index/images/avatar.jpg',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
    '_index',
  ],
})
