/* ============================================================================
 *  站点配置 —— 「公开实名版」/「匿名版」一键切换
 * ----------------------------------------------------------------------------
 *  把下面的 anonymous 改成：
 *    false  →  公开实名版：显示真实标题、作者、机构、GitHub / arXiv 等链接
 *    true   →  匿名版（双盲评审期用）：隐藏作者与机构，链接指向匿名资源
 *
 *  原理：本脚本在页面渲染前给 <html> 加上 class="anon"（或移除），
 *  再由 static/css/index.css 里的规则控制 .public-only / .anon-only 的显隐。
 *  所以你只需要改这一个值，整站会同步切换，无需改 HTML。
 * ========================================================================== */
window.SITE_CONFIG = {
  anonymous: true
};

/* —— 以下无需改动 —— 立即给 <html> 打标记类，避免首屏闪烁 —— */
(function () {
  var el = document.documentElement;
  if (window.SITE_CONFIG && window.SITE_CONFIG.anonymous) {
    el.classList.add('anon');
  } else {
    el.classList.remove('anon');
  }
})();
