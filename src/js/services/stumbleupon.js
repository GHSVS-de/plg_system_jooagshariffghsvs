'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())

  if (title !== '') {
    title = '&title=' + title
  }

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
    name: 'stumbleupon',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_stumbleupon',
		svg:'<svg viewBox="0 0 512 512" class="bi brands-stumbleupon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"/></svg>',
    title: {
      'bg': 'Сподели в Stumbleupon',
      'cs': 'Sdílet na Stumbleuponu',
      'da': 'Del på Stumbleupon',
      'de': 'Bei Stumbleupon teilen',
      'en': 'Share on Stumbleupon',
      'es': 'Compartir en Stumbleupon',
      'fi': 'Jaa Stumbleuponissä',
      'fr': 'Partager sur Stumbleupon',
      'hr': 'Podijelite na Stumbleupon',
      'hu': 'Megosztás Stumbleupon',
      'it': 'Condividi su Stumbleupon',
      'ja': 'Stumbleupon上で共有',
      'ko': 'Stumbleupon에서 공유하기',
      'nl': 'Delen op Stumbleupon',
      'no': 'Del på Stumbleupon',
      'pl': 'Udostępnij przez Stumbleupon',
      'pt': 'Compartilhar no Stumbleupon',
      'ro': 'Partajează pe Stumbleupon',
      'ru': 'Поделиться на Stumbleupon',
      'sk': 'Zdieľať na Stumbleupon',
      'sl': 'Deli na Stumbleupon',
      'sr': 'Podeli na Stumbleupon-u',
      'sv': 'Dela på Stumbleupon',
      'tr': 'Stumbleupon\'ta paylaş',
      'zh': '分享至Stumbleupon'
    },
    shareUrl: 'https://www.stumbleupon.com/submit?url=' + url + title + shariff.getReferrerTrack()
  }
}
