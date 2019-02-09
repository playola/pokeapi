import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * Set the cookie on the browser document.
 * @param {string}  key      Key name for the cookie.
 * @param {any}     value    Cookie value assigned to the key. For example: [{ name: 'foo' }]
 * @param {number}  maxAge   Expiration time for the cookie in milliseconds.
 */
export const setCookie = (key, value, maxAge) => (
  cookies.set(key, value, { path: '/', maxAge })
);

/**
 * Gets a cookie value by key.
 * @param   {string} key  Key name for the cookie. Cookie example: "foo=[{ name: 'foo' }]".
 * @returns {any}         [{ name: 'foo' }]
 */
export const getCookie = key => (
  cookies.get(key)
);

/**
 * Removes a cookie value by key.
 * @param   {string} key  Key name for the cookie. Cookie example: "foo=[{ name: 'foo' }]".
 */
export const removeCookie = key => (
  cookies.remove(key, { path: '/' })
);
