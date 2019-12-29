import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class HiddenPage extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: stretch; flex-wrap: nowrap;">
 <vaadin-vertical-layout class="content" style="width: 100%; flex-grow: 1; flex-shrink: 1; flex-basis: auto; align-items: center; justify-content: center; flex-wrap: nowrap;">
  <vaadin-vertical-layout style="flex-direction: column; align-items: center; flex-wrap: nowrap; width: 30%; height: 55%;">
   <vaadin-form-layout style="flex-grow: 1; align-self: stretch;">
    <vaadin-form-item>
     <label slot="label">Rotor Setting</label>
     <h5>RBM</h5>
    </vaadin-form-item>
    <vaadin-form-item>
     <label slot="label">Cipher</label>
     <h5>QRGDDYTQH</h5>
    </vaadin-form-item>
    <vaadin-form-item>
     <label slot="label">Hidden Message</label>
     <vaadin-text-field error-message="Please enter a value" required invalid="" label="" id="message" autocomplete="true" autocapitalize="true" clear-button-visible autocorrect="true"></vaadin-text-field>
    </vaadin-form-item>
   </vaadin-form-layout>
   <vaadin-vertical-layout style="flex-grow: 1; flex-shrink: 1;"></vaadin-vertical-layout>
   <vaadin-button theme="primary success" id="submit">
    Submit
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout class="footer" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 1; background-color: var(--lumo-contrast-10pct); align-items: center; justify-content: center; flex-wrap: nowrap;">
  <h6 id="h6">Copyright (c) 2019 NeuroByte Tech. All rights reserved. NeuroByte Tech is the Developer Company of Rohan Mathew.</h6>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'hidden-page';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(HiddenPage.is, HiddenPage);
