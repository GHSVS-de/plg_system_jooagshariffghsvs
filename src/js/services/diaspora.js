'use strict'

var url = require('url')

module.exports = function(shariff) {
  var shareUrl = url.parse('https://share.diasporafoundation.org/', true)
  shareUrl.query.url = shariff.getURL()
  shareUrl.query.title = shariff.getTitle()
  shareUrl.protocol = 'https'
  delete shareUrl.search

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
    name: 'diaspora',
    faPrefix: 'svg-icon',
    faName: 'svgs_solid_asterisk',
		svg: '<svg viewBox="0 0 512 512" class="bi solid-asterisk" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"/></svg>',
    title: {
      'bg': 'Сподели в diaspora*',
      'cs': 'Sdílet na diaspora*',
      'da': 'Del på diaspora*',
      'de': 'Bei diaspora* teilen',
      'en': 'Share on diaspora*',
      'es': 'Compartir en diaspora*',
      'fi': 'Jaa Diasporaissä',
      'fr': 'Partager sur diaspora*',
      'hr': 'Podijelite na diaspora*',
      'hu': 'Megosztás diaspora*',
      'it': 'Condividi su diaspora*',
      'ja': 'diaspora*上で共有',
      'ko': 'diaspora*에서 공유하기',
      'nl': 'Delen op diaspora*',
      'no': 'Del på diaspora*',
      'pl': 'Udostępnij przez diaspora*',
      'pt': 'Compartilhar no diaspora*',
      'ro': 'Partajează pe diaspora*',
      'ru': 'Поделиться на diaspora*',
      'sk': 'Zdieľať na diaspora*',
      'sl': 'Deli na diaspora*',
      'sr': 'Podeli na diaspora*-u',
      'sv': 'Dela på diaspora*',
      'tr': 'diaspora*\'ta paylaş',
      'zh': '分享至diaspora*'
    },
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  }
}
