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
    name: 'qzone',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_qq',
		svg: '<svg viewBox="0 0 448 512" class="bi brands-qq" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>',
    title: {
      'bg': 'Сподели в Qzone',
      'cs': 'Sdílet na Qzone',
      'da': 'Del på Qzone',
      'de': 'Bei Qzone teilen',
      'en': 'Share on Qzone',
      'es': 'Compartir en Qzone',
      'fi': 'Jaa Qzoneissä',
      'fr': 'Partager sur Qzone',
      'hr': 'Podijelite na Qzone',
      'hu': 'Megosztás Qzone',
      'it': 'Condividi su Qzone',
      'ja': 'Qzone上で共有',
      'ko': 'Qzone에서 공유하기',
      'nl': 'Delen op Qzone',
      'no': 'Del på Qzone',
      'pl': 'Udostępnij przez Qzone',
      'pt': 'Compartilhar no Qzone',
      'ro': 'Partajează pe Qzone',
      'ru': 'Поделиться на Qzone',
      'sk': 'Zdieľať na Qzone',
      'sl': 'Deli na Qzone',
      'sr': 'Podeli na Qzone-u',
      'sv': 'Dela på Qzone',
      'tr': 'Qzone\'ta paylaş',
      'zh': '分享至QQ空间'
    },
    shareUrl: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + shariff.getReferrerTrack()
  }
}
