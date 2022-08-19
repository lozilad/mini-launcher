export class UrlHelper {
  static isAUrl(url) {
    if (!url || url.trim().length < 1) {
      return false;
    }
    const hasScheme = url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://");
		console.log({hasScheme});
    return hasScheme;
  }
}
