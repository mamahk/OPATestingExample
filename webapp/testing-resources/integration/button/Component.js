jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.m.Button");
jQuery.sap.declare("sap.training.opatestOPATesting.integration.button.Component");

sap.ui.core.UIComponent.extend("sap.training.opatestOPATesting.integration.button.Component", {
	metadata : {
		properties : {
			text : "string"
		},
		events : {
			press : {}
		}
	}
});

sap.training.opatestOPATesting.integration.button.Component.prototype.createContent = function() {
	this.oButton = new sap.m.Button("btn");

	return this.oButton;
};

// Overrides setText method of the component to set this text in the button
sap.training.opatestOPATesting.integration.button.Component.prototype.setText = function(sText) {
	this.oButton.setText(sText);
	this.setProperty("text", sText);
	return this;
};

sap.training.opatestOPATesting.integration.button.Component.prototype.attachPress = function(handler) {
	this.oButton.attachPress(handler);
};