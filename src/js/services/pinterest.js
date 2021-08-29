'use strict'

var url = require('url')

module.exports = function(shariff) {
  var title = shariff.getTitle()
  var creator = shariff.getMeta('DC.creator')
  if (creator.length > 0) {
    title += ' - ' + creator
  }
  var img = shariff.getOption('mediaUrl')
  if (!img || img.length <= 0) {
    img = shariff.getMeta('og:image')
  }

  var shareUrl = url.parse('https://www.pinterest.com/pin/create/link/', true)
  shareUrl.query.url = shariff.getURL()
  shareUrl.query.media = img
  shareUrl.query.description = title
  delete shareUrl.search

  return {
    popup: true,
    shareText: 'pin it',
    name: 'pinterest',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_pinterest-p',
		svg:'<svg viewBox="0 0 384 512" class="bi brands-pinterest-p" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>',
    title: {
      'bg': 'Сподели в Pinterest',
      'cs': 'Přidat na Pinterest',
      'da': 'Del på Pinterest',
      'de': 'Bei Pinterest pinnen',
      'en': 'Pin it on Pinterest',
      'es': 'Compartir en Pinterest',
      'fi': 'Jaa Pinterestissä',
      'fr': 'Partager sur Pinterest',
      'hr': 'Podijelite na Pinterest',
      'hu': 'Megosztás Pinteresten',
      'it': 'Condividi su Pinterest',
      'ja': 'Pinterest上で共有',
      'ko': 'Pinterest에서 공유하기',
      'nl': 'Delen op Pinterest',
      'no': 'Del på Pinterest',
      'pl': 'Udostępnij przez Pinterest',
      'pt': 'Compartilhar no Pinterest',
      'ro': 'Partajează pe Pinterest',
      'ru': 'Поделиться на Pinterest',
      'sk': 'Zdieľať na Pinterest',
      'sl': 'Deli na Pinterest',
      'sr': 'Podeli na Pinterest-u',
      'sv': 'Dela på Pinterest',
      'tr': 'Pinterest\'ta paylaş',
      'zh': '分享至Pinterest'
    },
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  }
}
