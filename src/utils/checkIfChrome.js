const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
export default isChrome;