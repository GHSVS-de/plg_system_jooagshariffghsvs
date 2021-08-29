'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
  var descr = encodeURIComponent(shariff.getMeta('description'))
  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'mitteilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': 'シェア',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'distribuiți',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'linkedin',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_linkedin-in',
		svg: '<svg viewBox="0 0 448 512" class="bi brands-linkedin-in" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>',
    title: {
      'bg': 'Сподели в LinkedIn',
      'cs': 'Sdílet na LinkedIn',
      'da': 'Del på LinkedIn',
      'de': 'Bei LinkedIn teilen',
      'en': 'Share on LinkedIn',
      'es': 'Compartir en LinkedIn',
      'fi': 'Jaa LinkedInissä',
      'fr': 'Partager sur LinkedIn',
      'hr': 'Podijelite na LinkedIn',
      'hu': 'Megosztás LinkedInen',
      'it': 'Condividi su LinkedIn',
      'ja': 'LinkedIn上で共有',
      'ko': 'LinkedIn에서 공유하기',
      'nl': 'Delen op LinkedIn',
      'no': 'Del på LinkedIn',
      'pl': 'Udostępnij przez LinkedIn',
      'pt': 'Compartilhar no LinkedIn',
      'ro': 'Partajează pe LinkedIn',
      'ru': 'Поделиться на LinkedIn',
      'sk': 'Zdieľať na LinkedIn',
      'sl': 'Deli na LinkedIn',
      'sr': 'Podeli na LinkedIn-u',
      'sv': 'Dela på LinkedIn',
      'tr': 'LinkedIn\'ta paylaş',
      'zh': '在LinkedIn上分享'
    },
		shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url
  }
}
