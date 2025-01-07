## 1. Write a regex to match a valid IPv4 address.

**Conditions**:
An IPv4 address consists of four groups of numbers separated by dots (.).
Each group is a number from 0 to 255.
Leading zeros (like 01, 001) are not allowed unless the number is exactly 0.
**Examples**:
✅ Matches: 192.168.0.1, 127.0.0.1, 255.255.255.255
❌ Does not match: 256.256.256.256, 192.168.01.1, 123.456.78.90

## 2. Write a regex to validate a hexadecimal number.

**Conditions**:
A valid hexadecimal number can start with or without a 0x or 0X prefix.
It contains digits (0-9) and/or letters (A-F, a-f).
It must have at least one valid character after the optional prefix.
**Examples**:
✅ Matches: 0x1F4, 0Xabc, DEADBEEF, 1234
❌ Does not match: 0x, GHIJK, 123z

## 3. Write a regex to validate a URL.

**Conditions**:
The URL must start with http:// or https:// (case-insensitive).
It should have a valid domain name, which:
Can contain alphanumeric characters, dots (.), and hyphens (-), but not start or end with a hyphen.
Ends with a valid top-level domain (e.g., .com, .org, .net, .io, etc.).
The URL can optionally include:
A port (e.g., :8080).
A path (e.g., /path/to/resource).
Query parameters (e.g., ?key=value).
**Examples**:
✅ Matches:
https://example.com
http://my-site.org
https://domain.io/path/to/resource?key=value
❌ Does not match:
ftp://example.com
http://-invalid.com
http://site,com

## 4. Create a regex pattern that validates a US phone number in the following formats:

(123) 456-7890
123-456-7890
123.456.7890
1234567890
**Requirements**
The area code should be enclosed in parentheses (123), or as plain numbers 123.
The separator between number groups can be a space, period, or hyphen.
It should handle 10 digits in total.
It should not allow anything other than digits, spaces, periods, or hyphens.
