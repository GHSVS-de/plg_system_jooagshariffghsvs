'use strict'

var url = require('url')

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function(text, length) {
  var div = document.createElement('div')
  var node = document.createTextNode(text)
  div.appendChild(node)
  var abbreviated = div.textContent
  if (abbreviated.length <= length) {
    return text
  }

  var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ')
  abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026'

  return abbreviated
}

module.exports = function(shariff) {
  var shareUrl = url.parse('https://twitter.com/intent/tweet', true)

  var title = shariff.getTitle()

  // 120 is the max character count left after twitters automatic url shortening with t.co
  shareUrl.query.text = abbreviateText(title, 120)
  shareUrl.query.url = shariff.getURL()
  if (shariff.options.twitterVia !== null) {
    shareUrl.query.via = shariff.options.twitterVia
  }
  delete shareUrl.search

  return {
    popup: true,
    shareText: {
      'en': 'tweet',
      'ja': 'のつぶやき',
      'ko': '짹짹',
      'ru': 'твит',
      'sr': 'твеет',
      'zh': '鸣叫'
    },
    name: 'twitter',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_twitter',
		svg: '<svg viewBox="0 0 512 512" class="bi brands-twitter" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
    title: {
      'bg': 'Сподели в Twitter',
      'cs': 'Sdílet na Twiiteru',
      'da': 'Del på Twitter',
      'de': 'Bei Twitter teilen',
      'en': 'Share on Twitter',
      'es': 'Compartir en Twitter',
      'fi': 'Jaa Twitterissä',
      'fr': 'Partager sur Twitter',
      'hr': 'Podijelite na Twitteru',
      'hu': 'Megosztás Twitteren',
      'it': 'Condividi su Twitter',
      'ja': 'ツイッター上で共有',
      'ko': '트위터에서 공유하기',
      'nl': 'Delen op Twitter',
      'no': 'Del på Twitter',
      'pl': 'Udostępnij na Twitterze',
      'pt': 'Compartilhar no Twitter',
      'ro': 'Partajează pe Twitter',
      'ru': 'Поделиться на Twitter',
      'sk': 'Zdieľať na Twitteri',
      'sl': 'Deli na Twitterju',
      'sr': 'Podeli na Twitter-u',
      'sv': 'Dela på Twitter',
      'tr': 'Twitter\'da paylaş',
      'zh': '在Twitter上分享'
    },
    // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  }
}
