/*
 * Copyright © 2020 NeuroByte Tech. All rights reserved.
 *
 * NeuroByte Tech is the Developer Company of Rohan Mathew.
 *
 * Project: ChristmasPresentHunt
 * File Name: HiddenPage.java
 * Last Modified: 23/10/2020, 19:57
 */

package tech.neurobyte.dev;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H6;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

import java.time.LocalDate;

/**
 * A Designer generated component for the hidden-page template.
 * <p>
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route("Z5nuEZ0wSlzU05wqBN8HqJeEGMGRrDmJK8G4Wcmi")
@Tag("hidden-page")
@JsModule("./src/hidden-page.js")
public class HiddenPage extends PolymerTemplate<HiddenPage.HiddenPageModel> {

    @Id("h6")
    private H6 h6;
    @Id("message")
    private TextField message;
    @Id("submit")
    private Button submit;

    /**
     * Creates a new HiddenPage.
     */
    public HiddenPage() {
        System.out.println("Hidden page has been visited");
        // You can initialise any data required for the connected UI components here.
        this.submit.addClickListener(event -> {
            if (this.message.getValue().toUpperCase().equals("CHRISTMAS")) {
                System.out.println("Hidden page has been succeeded");
                Notification.show("Under my blankets of disguise.", 10000, Notification.Position.TOP_START);
                Notification.show("Behind the sofa do I lie", 10000, Notification.Position.TOP_START);
            } else {
                System.out.println("Hidden page answer is incorrect");
                Notification.show("Wrong answer", 1000, Notification.Position.TOP_START);
            }
        });
        this.message.addKeyPressListener(Key.ENTER, event -> {
            this.submit.click();
        });
        this.h6.setText("Copyright (c) " + LocalDate.now().getYear() + " NeuroByte Tech. All rights reserved. NeuroByte Tech is the Developer Company of Rohan Mathew.");
    }

    /**
     * This model binds properties between HiddenPage and hidden-page
     */
    public interface HiddenPageModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
