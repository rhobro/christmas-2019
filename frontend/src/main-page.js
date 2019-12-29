/*
 * Copyright © 2019 NeuroByte Tech. All rights reserved.
 *
 * NeuroByte Tech is the Developer Company of Rohan Mathew.
 *
 * Project: ChristmasPresentHunt
 * File Name: main-page.js
 * Last Modified: 29/12/2019, 13:20
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class MainPage extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: stretch; flex-wrap: nowrap;">
 <vaadin-vertical-layout class="content" style="width: 100%; flex-grow: 1; flex-shrink: 1; flex-basis: auto; align-self: stretch; flex-direction: column; align-items: center; justify-content: center; flex-wrap: nowrap;">
  <vaadin-vertical-layout style="flex-shrink: 0; flex-grow: 0; flex-direction: column; width: 35%; height: 55%; align-self: center;">
   <h3 style="align-self: center;">Enter your secret key:</h3>
   <vaadin-text-field id="vaadinTextField" style="align-self: center; width: 70%;" clear-button-visible placeholder="Secret key"></vaadin-text-field>
   <vaadin-vertical-layout style="flex-grow: 1; align-self: center;"></vaadin-vertical-layout>
   <vaadin-button theme="primary" id="vaadinButton" style="align-self: center; width: 60%;">
     Submit Key 
   </vaadin-button>
   <h5 style="align-self: center; flex-grow: 0; width: 70%;">If your key is correct, you will receive a notification with the clue to find your gift.</h5>
  </vaadin-vertical-layout>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout class="footer" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 1; background-color: var(--lumo-contrast-10pct); align-self: stretch; flex-direction: column; align-items: center; justify-content: center; flex-wrap: nowrap;">
  <h6 id="h6">Copyright (c) 2019 NeuroByte Tech. All rights reserved. NeuroByte Tech is the Developer Company of Rohan Mathew.</h6>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'main-page';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(MainPage.is, MainPage);
