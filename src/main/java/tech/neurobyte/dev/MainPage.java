/*
 * Copyright © 2019 NeuroByte Tech. All rights reserved.
 *
 * NeuroByte Tech is the Developer Company of Rohan Mathew.
 *
 * Project: ChristmasPresentHunt
 * File Name: MainPage.java
 * Last Modified: 29/12/2019, 13:20
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
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.templatemodel.TemplateModel;

import java.time.LocalDate;

/**
 * A Designer generated component for the main-page template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@PWA(name = "Christmas Hunt", shortName = "CstHunt")
@Route("1979-1975/Gb3j8FK3md8")
@Tag("main-page")
@JsModule("./src/main-page.js")
public class MainPage extends PolymerTemplate<MainPage.MainPageModel> {

    @Id("vaadinTextField")
    private TextField vaadinTextField;
    @Id("vaadinButton")
    private Button vaadinButton;
    @Id("h6")
    private H6 h6;

    /**
     * Creates a new MainPage.
     */
    public MainPage() {
        System.out.println("Main page has been visited");
        this.vaadinButton.addClickListener(event -> {
            if (this.vaadinTextField.getValue().toUpperCase().equals("H1J2D3DLI48")) {
                System.out.println("Main page has been succeeded.");
                Notification.show("You guys are noobs", 10000, Notification.Position.TOP_START);
                Notification.show("A.K.A. Go to github.com and search my name.", 10000, Notification.Position.TOP_START);
                Notification.show("To find the things you need to know.", 10000, Notification.Position.TOP_START);
                Notification.show("To my Github you must go", 10000, Notification.Position.TOP_START);
            } else {
                System.out.println("Main page secret key is incorrect");
                Notification.show("Invalid secret key", 1000, Notification.Position.TOP_START);
            }
        });
        this.vaadinTextField.addKeyPressListener(Key.ENTER, event -> {
            this.vaadinButton.click();
        });
        this.h6.setText("Copyright (c) " + LocalDate.now().getYear() + " NeuroByte Tech. All rights reserved. NeuroByte Tech is the Developer Company of Rohan Mathew.");
    }

    /**
     * This model binds properties between MainPage and main-page
     */
    public interface MainPageModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
