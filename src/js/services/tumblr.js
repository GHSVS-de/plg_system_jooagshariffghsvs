'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

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
    name: 'tumblr',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_tumblr',
		svg: '<svg viewBox="0 0 320 512" class="bi brands-tumblr" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"/></svg>',
    title: {
      'bg': 'Сподели в tumblr',
      'cs': 'Sdílet na tumblru',
      'da': 'Del på tumblr',
      'de': 'Bei tumblr teilen',
      'en': 'Share on tumblr',
      'es': 'Compartir en tumblr',
      'fi': 'Jaa tumblrissä',
      'fr': 'Partager sur tumblr',
      'hr': 'Podijelite na tumblr',
      'hu': 'Megosztás tumblren',
      'it': 'Condividi su tumblr',
      'ja': 'tumblr上で共有',
      'ko': 'tumblr에서 공유하기',
      'nl': 'Delen op tumblr',
      'no': 'Del på tumblr',
      'pl': 'Udostępnij przez tumblr',
      'pt': 'Compartilhar no tumblr',
      'ro': 'Partajează pe tumblr',
      'ru': 'Поделиться на tumblr',
      'sk': 'Zdieľať na tumblr',
      'sl': 'Deli na tumblr',
      'sr': 'Podeli na tumblr-u',
      'sv': 'Dela på tumblr',
      'tr': 'tumblr\'ta paylaş',
      'zh': '在tumblr上分享'
    },
    shareUrl: 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + url + shariff.getReferrerTrack()
  }
}
