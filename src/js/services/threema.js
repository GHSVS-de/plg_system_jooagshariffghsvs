'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: false,
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
    name: 'threema',
    faPrefix: 'svg-icon',
    faName: 'svgs_solid_lock',
		svg: '<svg viewBox="0 0 448 512" class="bi solid-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>',
    title: {
      'bg': 'Сподели в Threema',
      'cs': 'Sdílet na Threema',
      'da': 'Del på Threema',
      'de': 'Bei Threema teilen',
      'en': 'Share on Threema',
      'es': 'Compartir en Threema',
      'fi': 'Jaa Threemaissä',
      'fr': 'Partager sur Threema',
      'hr': 'Podijelite na Threema',
      'hu': 'Megosztás Threemaen',
      'it': 'Condividi su Threema',
      'ja': 'Threema上で共有',
      'ko': 'Threema에서 공유하기',
      'nl': 'Delen op Threema',
      'no': 'Del på Threema',
      'pl': 'Udostępnij przez Threema',
      'pt': 'Compartilhar no Threema',
      'ro': 'Partajează pe Threema',
      'ru': 'Поделиться на Threema',
      'sk': 'Zdieľať na Threema',
      'sl': 'Deli na Threema',
      'sr': 'Podeli na Threema-u',
      'sv': 'Dela på Threema',
      'tr': 'Threema\'ta paylaş',
      'zh': '在Threema上分享'
    },
    shareUrl: 'threema://compose?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
  }
}
