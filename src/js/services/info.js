'use strict'

module.exports = function(shariff) {
  return {
    blank: shariff.getInfoDisplayBlank(),
    popup: shariff.getInfoDisplayPopup(),
    shareText: 'Info',
    name: 'info',
    faPrefix: 'svg-icon',
    faName: 'svgs_solid_info',
		svg: '<svg viewBox="0 0 192 512" class="bi solid-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/></svg>',
    title: {
      'bg': 'Повече информация',
      'cs': 'Více informací',
      'da': 'Flere oplysninger',
      'de': 'Weitere Informationen',
      'en': 'More information',
      'es': 'Más informaciones',
      'fi': 'Lisätietoja',
      'fr': 'Plus d\'informations',
      'hr': 'Više informacija',
      'hu': 'Több információ',
      'it': 'Maggiori informazioni',
      'ja': '詳しい情報',
      'ko': '추가 정보',
      'nl': 'Verdere informatie',
      'no': 'Mer informasjon',
      'pl': 'Więcej informacji',
      'pt': 'Mais informações',
      'ro': 'Mai multe informatii',
      'ru': 'Больше информации',
      'sk': 'Viac informácií',
      'sl': 'Več informacij',
      'sr': 'Više informacija',
      'sv': 'Mer information',
      'tr': 'Daha fazla bilgi',
      'zh': '更多信息'
    },
    shareUrl: shariff.getInfoUrl()
  }
}
