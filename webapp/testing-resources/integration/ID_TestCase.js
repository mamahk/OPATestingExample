sap.ui.require([
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQunit"
], function (Opa5,opaTest) {
	"use strict";
	QUnit.module("OPADemo");
	opaTest("ID-Opa5 Test", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyAppInAFrame("./../index.html");
		//Actions
		When.waitFor({
			viewName:"sap.training.opatestOPATesting.view.Main",
			id:"helloButton",
			success : function(oButton) {
				oButton.$().trigger("tap");
				Opa5.assert.ok(oButton.getId(),"Button with the given ID found");
			},
			error: function(){
			 return	"Did not find the hello-Button"; 
			}
		});
		
		Then.iTeardownMyAppFrame();
	});
	
});