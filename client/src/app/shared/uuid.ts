/**
* Generiert eine konforme {@link https://de.wikipedia.org/wiki/Universally_Unique_Identifier UUID} v4 als String.
* @name guid
*/
export function uuid(a?: any): string {
  /* for a discussion see https://gist.github.com/jed/982883 */

  /* using newer crypto getRandomValues function (IE 11+)
  https://gist.github.com/jed/982883#gistcomment-1615714
  http://caniuse.com/#feat=getrandomvalues
   */
  const crypto: RandomSource = window.crypto || (<any>window).msCrypto;

  /* tslint:disable */
  return a ? (a ^ crypto.getRandomValues(new Uint8Array(1))[0] % 16 >> a / 4).toString(16) : ((<any>[1e7]) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  /* tslint:enable */
}
