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
    name: 'telegram',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_telegram',
		svg: '<svg viewBox="0 0 496 512" class="bi brands-telegram" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>',
    title: {
      'bg': 'Сподели в Telegram',
      'cs': 'Sdílet na Telegramu',
      'da': 'Del på Telegram',
      'de': 'Bei Telegram teilen',
      'en': 'Share on Telegram',
      'es': 'Compartir en Telegram',
      'fi': 'Jaa Telegramissä',
      'fr': 'Partager sur Telegram',
      'hr': 'Podijelite na Telegram',
      'hu': 'Megosztás Telegramen',
      'it': 'Condividi su Telegram',
      'ja': 'Telegram上で共有',
      'ko': 'Telegram에서 공유하기',
      'nl': 'Delen op Telegram',
      'no': 'Del på Telegram',
      'pl': 'Udostępnij przez Telegram',
      'pt': 'Compartilhar no Telegram',
      'ro': 'Partajează pe Telegram',
      'ru': 'Поделиться на Telegram',
      'sk': 'Zdieľať na Telegram',
      'sl': 'Deli na Telegram',
      'sr': 'Podeli na Telegram-u',
      'sv': 'Dela på Telegram',
      'tr': 'Telegram\'ta paylaş',
      'zh': '在Telegram上分享'
    },
    shareUrl: 'https://t.me/share/url?url=' + url + shariff.getReferrerTrack()
  }
}
