import { assert, assertFalse } from "jsr:@std/assert";
import {
  validHexadecimal,
  validIpv4,
  validUrl,
  validUSNumber,
} from "./someREGEX.js";

Deno.test("valid IPV4", () => assert(validIpv4.test("1.1.1.1")));
Deno.test("IPV4 highest range", () =>
  assert(validIpv4.test("255.255.255.255"))
);
Deno.test("In valid IPV4", () => assertFalse(validIpv4.test("01.1.1.1")));
Deno.test("IPV4 with less numbers", () => assertFalse(validIpv4.test("1.1.1")));
Deno.test("IPV4 invalid 2", () => assertFalse(validIpv4.test("1.1.1.1.")));
Deno.test("IPV4 invalid 3", () => assertFalse(validIpv4.test("1.1.1.300")));

Deno.test("valid hexadecimal", () => assert(validHexadecimal.test("1")));
Deno.test("valid hexadecimal with 0x", () =>
  assert(validHexadecimal.test("0x1"))
);
Deno.test("valid hexadecimal with 0X", () =>
  assert(validHexadecimal.test("0X1"))
);
Deno.test("valid hexadecimal highest range", () =>
  assert(validHexadecimal.test("0xf"))
);
Deno.test("valid hexadecimal out of range", () =>
  assertFalse(validHexadecimal.test("0xg"))
);
Deno.test("valid hexadecimal out of range ", () =>
  assertFalse(validHexadecimal.test("0xG"))
);

Deno.test("valid url", () => assert(validUrl.test("http://example.com")));
Deno.test("url contains www", () =>
  assert(validUrl.test("https://www.example.com"))
);
Deno.test("url contains domanis and subdomains", () =>
  assert(validUrl.test("http://sub.domain.com"))
);
Deno.test("url having path", () =>
  assert(validUrl.test("https://example.com/path/to/resource"))
);
Deno.test("url with port number", () =>
  assert(validUrl.test("http://example.com:8080"))
);
Deno.test("url with key and value", () =>
  assert(validUrl.test("https://example.com?key=value"))
);
Deno.test("domain having '-'", () =>
  assert(validUrl.test("http://example-site.io:3000/path?name=test"))
);
Deno.test("invald protocol", () =>
  assertFalse(validUrl.test("ftp://example.com"))
);
Deno.test("domain starts with '-'", () =>
  assertFalse(validUrl.test("http://-example.com"))
);
Deno.test("domain having two dots", () =>
  assertFalse(validUrl.test("http://example..com"))
);
Deno.test("invalid url by ','", () =>
  assertFalse(validUrl.test("https://example,com"))
);
Deno.test("url without key", () =>
  assertFalse(validUrl.test("http://example.com/path?=value"))
);
Deno.test("url with out value", () =>
  assertFalse(validUrl.test("https://example.com?key="))
);
Deno.test("url without domain", () =>
  assertFalse(validUrl.test("http://.com"))
);

Deno.test("mobilenumber", () => assert(validUSNumber.test("1234567890")));
Deno.test("mobilenumber saperated by spaces", () =>
  assert(validUSNumber.test("123 456 7890"))
);
Deno.test("mobilenumber code in paranthesis saperated by spaces", () =>
  assert(validUSNumber.test("(123) 456 7890"))
);
Deno.test("mobilenumber saperated by hypen", () =>
  assert(validUSNumber.test("123-456-7890"))
);
Deno.test("mobilenumber saperated by dot", () =>
  assert(validUSNumber.test("123.456.7890"))
);
Deno.test("mobilenumber saperated by @", () =>
  assertFalse(validUSNumber.test("123@456@7890"))
);
Deno.test("mobilenumber having less digits", () =>
  assertFalse(validUSNumber.test("1237890"))
);
Deno.test("mobilenumber having more digits", () =>
  assertFalse(validUSNumber.test("12345678901"))
);
