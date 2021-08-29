'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'tencent-weibo',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_tencent-weibo',
		svg: '<svg viewBox="0 0 384 512" class="bi brands-tencent-weibo" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M72.3 495.8c1.4 19.9-27.6 22.2-29.7 2.9C31 368.8 73.7 259.2 144 185.5c-15.6-34 9.2-77.1 50.6-77.1 30.3 0 55.1 24.6 55.1 55.1 0 44-49.5 70.8-86.9 45.1-65.7 71.3-101.4 169.8-90.5 287.2zM192 .1C66.1.1-12.3 134.3 43.7 242.4 52.4 259.8 79 246.9 70 229 23.7 136.4 91 29.8 192 29.8c75.4 0 136.9 61.4 136.9 136.9 0 90.8-86.9 153.9-167.7 133.1-19.1-4.1-25.6 24.4-6.6 29.1 110.7 23.2 204-60 204-162.3C358.6 74.7 284 .1 192 .1z"/></svg>',
    title: {
      'bg': 'Сподели в tencent weibo',
      'cs': 'Sdílet na tencent weibo',
      'da': 'Del på tencent weibo',
      'de': 'Bei tencent weibo teilen',
      'en': 'Share on tencent weibo',
      'es': 'Compartir en tencent weibo',
      'fi': 'Jaa tencent weiboissä',
      'fr': 'Partager sur tencent weibo',
      'hr': 'Podijelite na tencent weibo',
      'hu': 'Megosztás tencent weiboen',
      'it': 'Condividi su tencent weibo',
      'ja': 'Tencent weibo上で共有',
      'ko': 'Tencent weibo에서 공유하기',
      'nl': 'Delen op tencent weibo',
      'no': 'Del på tencent weibo',
      'pl': 'Udostępnij przez tencent weibo',
      'pt': 'Compartilhar no tencent weibo',
      'ro': 'Partajează pe tencent weibo',
      'ru': 'Поделиться на tencent weibo',
      'sk': 'Zdieľať na tencent weibo',
      'sl': 'Deli na tencent weibo',
      'sr': 'Podeli na tencent weibo-u',
      'sv': 'Dela på tencent weibo',
      'tr': 'Tencent weibo\'ta paylaş',
      'zh': '分享至腾讯微博'
    },
    shareUrl: 'http://v.t.qq.com/share/share.php?url=' + url + '&title=' + title + shariff.getReferrerTrack()
  }
}
