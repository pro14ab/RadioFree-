// ==UserScript==
// @name         Radio Free +
// @namespace    Radio Free +
// @version      0.1
// @description  Ulepszenie strony radio free
// @author       pro14ab
// @match        https://radiofreee.pl/
// @icon         https://www.google.com/s2/favicons?domain=radiofreee.pl
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    document.querySelector(".custom-html-widget").innerHTML+=`
                <audio controls autoplay>
                        <source src="https://streaming.radio.lublin.pl:8843/radiofreee" type="audio/mpeg">
                </audio>
    `;

    GM_addStyle(`
                audio::-webkit-media-controls-timeline,
                audio::-webkit-media-controls-time-remaining-display,
                audio::-webkit-media-controls-current-time-display{
                       visibility: hidden !important;
                }

                audio::-webkit-media-controls-panel{
                      background: white !important;
                }
      `);

})();
