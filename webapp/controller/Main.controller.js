sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.opatestOPATesting.controller.Main", {
		handlePress: function(oEvent) {
			MessageBox.show("Button pressed....");
		}

	});
});