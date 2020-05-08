export const BASE_URL = 'https://api.harvardartmuseums.org';
export const API_KEY = '?apikey=c6d98670-89f8-11e9-bae4-390e251d4987';

export const CLASSIFICATION_URL =
  BASE_URL + '/classification' + API_KEY + '&size=100&sort=name&sortorder=asc';

export const OBJECT_DETAILS_URL =
  BASE_URL +
  '/object' +
  API_KEY +
  '&size=20&sort=name&sortorder=asc&classification=';

export const VIDEO_URL =
  BASE_URL + '/video' + API_KEY + '&size=100&sort=name&sortorder=asc';

export const AUDIO_URL =
  BASE_URL + '/audio' + API_KEY + '&size=100&sort=name&sortorder=asc';

export const PDF_API_KEY =
  '416ac1470ce061c67083273127b52b22d9812c0c2427ab77829279582a83b591';
