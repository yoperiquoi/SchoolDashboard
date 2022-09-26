import { Environment } from './models/environment';

export const environment: Environment = {
  apiJokeEndpoint: 'https://www.blagues-api.fr/api/random',
  apiJokeToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDI2NzU2MTI5MDEyNTgwMzc0IiwibGltaXQiOjEwMCwia2V5IjoidEVMSHFmVGlOajE3NDhqNXNyd0pxbld1V0FhWUs4RkhWbUl6cDFWNmc3UWY4Z0toM3QiLCJjcmVhdGVkX2F0IjoiMjAyMi0wMS0wNFQwODozMjoyMyswMDowMCIsImlhdCI6MTY0MTI4NTE0M30.DQIx5xm5t8ZIMS-IaXQqJE7rP0-2sswxlnBIMIqNdX8',
  apiCalendarEndpoint:
    'https://www.googleapis.com/calendar/v3/calendars/ni0t9cavrsdrvb3mj3k1cp744dgqa3b9@import.calendar.google.com/events',
  apiCalendarToken: '<APIKEY>',
};
