export const BASE_URL = 'https://api.harvardartmuseums.org';
export const API_KEY = '?apikey=c6d98670-89f8-11e9-bae4-390e251d4987';

export const CLASSIFICATION_URL =
  BASE_URL + '/classification' + API_KEY + '&size=100&sort=name&sortorder=asc';

export const OBJECT_DETAILS_URL =
  BASE_URL +
  '/object' +
  API_KEY +
  '&size=40&sort=name&sortorder=asc&hasimage=1&classification=';

export const VIDEO_URL =
  BASE_URL + '/video' + API_KEY + '&size=100&sort=name&sortorder=asc';

export const AUDIO_URL =
  BASE_URL + '/audio' + API_KEY + '&size=100&sort=name&sortorder=asc';
