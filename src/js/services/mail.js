'use strict'

module.exports = function(shariff) {
  var url = shariff.getOption('mailUrl')

  // mailto: link? Add body and subject.
  if (url.indexOf('mailto:') === 0) {
    url += '?subject=' + encodeURIComponent(shariff.getOption('mailSubject') || shariff.getTitle())
    url += '&body=' + encodeURIComponent(shariff.getOption('mailBody').replace(/\{url\}/i, shariff.getURL()))
  }

  return {
    blank: url.indexOf('http') === 0,
    popup: false,
    shareText: {
      'en': 'mail',
      'zh': '分享'
    },
    name: 'mail',
    faPrefix: 'svg-icon',
    faName: 'svgs_solid_envelope',
		svg: '<svg viewBox="0 0 512 512" class="bi solid-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',
    title: {
      'bg': 'Изпрати по имейл',
      'cs': 'Poslat mailem',
      'da': 'Sende via e-mail',
      'de': 'Per E-Mail versenden',
      'en': 'Send by email',
      'es': 'Enviar por email',
      'fi': 'Lähetä sähköpostitse',
      'fr': 'Envoyer par courriel',
      'hr': 'Pošaljite emailom',
      'hu': 'Elküldés e-mailben',
      'it': 'Inviare via email',
      'ja': '電子メールで送信',
      'ko': '이메일로 보내기',
      'nl': 'Sturen via e-mail',
      'no': 'Send via epost',
      'pl': 'Wyślij e-mailem',
      'pt': 'Enviar por e-mail',
      'ro': 'Trimite prin e-mail',
      'ru': 'Отправить по эл. почте',
      'sk': 'Poslať e-mailom',
      'sl': 'Pošlji po elektronski pošti',
      'sr': 'Pošalji putem email-a',
      'sv': 'Skicka via e-post',
      'tr': 'E-posta ile gönder',
      'zh': '通过电子邮件传送'
    },
    shareUrl: url
  }
}
