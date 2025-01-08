export const validIpv4 =
  /^((25[0-5]|2[0-4]\d|1\d{1,2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{1,2}|[1-9]\d|\d)$/;

export const validHexadecimal = /^(0x|0X|)?[a-fA-F\d]+$/;

export const validUrl =
  /^https?:\/\/(\w[\w-]*\w\.)+\w+(:\d+)?(\/[\w-_]+)*(\?\w+=\w+(&\w+=\w+)*)?$/i;

export const validUSNumber = /^\(?\d{3}\)?([. -])\d{3}\1\d{4}$|^\d{10}$/;

export const information = `Alice's adventure began at 9:00 AM.
She met Bob at 10:15 AM and later saw Charlie at 2:45 PM.
Alice loves apples, but Bob prefers bananas and cherries.
Today, she visited www.example.com and emailed bob@example.com.`;

export const wordFollowedByAt = /\w+(?=\sat)/g;
export const time = /\d{1,2}:\d{1,2}(?=\s(AM|PM))/g; // i need AM or PM also
