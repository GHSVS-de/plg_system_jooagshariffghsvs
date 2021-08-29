'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
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
    name: 'buffer',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_buffer',
		svg: '<svg viewBox="0 0 448 512" class="bi brands-buffer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z" class="a"/></svg>',
    title: {
      'bg': 'Сподели в buffer',
      'cs': 'Sdílet na buffer',
      'da': 'Del på buffer',
      'de': 'Bei buffer teilen',
      'en': 'Share on buffer',
      'es': 'Compartir en buffer',
      'fi': 'Jaa bufferissä',
      'fr': 'Partager sur buffer',
      'hr': 'Podijelite na buffer',
      'hu': 'Megosztás bufferen',
      'it': 'Condividi su buffer',
      'ja': 'buffer上で共有',
      'ko': 'buffer에서 공유하기',
      'nl': 'Delen op buffer',
      'no': 'Del på buffer',
      'pl': 'Udostępnij przez buffer',
      'pt': 'Compartilhar no buffer',
      'ro': 'Partajează pe buffer',
      'ru': 'Поделиться на buffer',
      'sk': 'Zdieľať na buffer',
      'sl': 'Deli na buffer',
      'sr': 'Podeli na buffer',
      'sv': 'Dela på buffer',
      'tr': 'buffer\'ta paylaş',
      'zh': '在buffer上分享'
    },
    shareUrl: 'https://buffer.com/add?text=' + title + '&url=' + url + shariff.getReferrerTrack()
  }
}
