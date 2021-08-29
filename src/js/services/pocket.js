'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
  return {
    popup: true,
    shareText: 'Pocket',
    name: 'pocket',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_get-pocket',
		svg: '<svg viewBox="0 0 448 512" class="bi brands-get-pocket" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"/></svg>',
    title: {
      'bg': 'Запазване в Pocket',
      'cs': 'Uložit do Pocket',
      'da': 'Gem i Pocket',
      'de': 'In Pocket speichern',
      'en': 'Save to Pocket',
      'es': 'Guardar en Pocket',
      'fi': 'Tallenna kohtaan Pocket',
      'fr': 'Enregistrer dans Pocket',
      'hr': 'Spremi u Pocket',
      'hu': 'Mentés "Pocket"-be',
      'it': 'Salva in Pocket',
      'ja': '「ポケット」に保存',
      'ko': 'Pocket에 저장',
      'nl': 'Opslaan in Pocket',
      'no': 'Lagre i Pocket',
      'pl': 'Zapisz w Pocket',
      'pt': 'Salvar em Pocket',
      'ro': 'Salvați în Pocket',
      'ru': 'Сохранить в Pocket',
      'sk': 'Uložiť do priečinka Pocket',
      'sl': 'Shrani v Pocket',
      'sr': 'Sačuvaj u Pocket',
      'sv': 'Spara till Pocket',
      'tr': 'Pocket e kaydet',
      'zh': '保存到Pocket'
    },
    shareUrl: 'https://getpocket.com/save?title=' + title + '&url=' + url + shariff.getReferrerTrack()
  }
}
