import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * Set the cookie on the browser document.
 * @param {string}  key      Key name for the cookie. Cookie example: "foo=[{ name: 'foo' }]".
 * @param {any}     value    Cookie value assigned to the key. For example: [{ name: 'foo' }]
 * @param {object}  options  Options like 'maxAge' for the cookie in milliseconds.
 */
export const setCookie = (key, value, options) => (
  cookies.set(key, value, { path: '/', ...options })
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
 * @param {string}  key      Key name for the cookie. Cookie example: "foo=[{ name: 'foo' }]".
 * @param {any}     value    Cookie value assigned to the key. For example: [{ name: 'foo' }]
 * @param {object}  options  Options like 'maxAge' for the cookie in milliseconds.
 */
export const removeCookie = (key, value, options) => (
  cookies.remove(key, value, { path: '/', ...options })
);
