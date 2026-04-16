/** BrowserSync: Astro 開発サーバをプロキシし、public 配下の CSS 更新でライブリロード */
module.exports = {
  proxy: 'http://localhost:4321',
  files: ['public/asset/topics/campaign/mothers_day/css/**/*.css'],
  /** 外部IP検出をスキップ（sandbox / 特殊環境で dev-ip が落ちるのを防ぐ） */
  online: false,
  localOnly: true,
  open: false,
  notify: false,
  reloadDelay: 150,
};
