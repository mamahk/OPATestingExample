sap.ui.require([
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQunit"
], function (Opa5,opaTest) {
	"use strict";
	QUnit.module("ComponentTest");
	opaTest("ComponentTest", function (Given, When, Then) {
		Given.iStartMyUIComponent({
			componentConfig:{name: "sap.training.opatestOPATesting.integration.button"}
		}).done(
			 function() {
				Opa5.assert.ok(jQuery(".sapUiOpaComponent").length,"The component was loaded");
			}). done( function() {
				Then.iTeardownMyUIComponent().done(function() {
					Opa5.assert.ok(!jQuery(".sapUiOpaComponent").length,"The component was removed");
				});
			});
		//Opa5.emptyQueue();
	});
	//QUnit.start();
});