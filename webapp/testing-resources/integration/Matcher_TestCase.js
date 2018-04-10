sap.ui.require([
				"sap/ui/test/Opa5",
				"sap/ui/test/opaQunit",
				"sap/ui/test/matchers/PropertyStrictEquals",
				"sap/ui/test/matchers/Properties",
				"sap/ui/test/matchers/Ancestor"
			], function(Opa5, opaTest, PropertyStrictEquals, Properties, Ancestor) {
				QUnit.module("Matchers");
	
				opaTest("Should find a Button with a matching property", function(Given, When, Then) {
					Given.iStartMyAppInAFrame("./../index.html");

					When.waitFor({
						viewName: "sap.training.opatestOPATesting.view.Main",
						controlType: "sap.m.Button",
						matchers: new PropertyStrictEquals({
							name: "text",
							value: "Press me"
						}),
						success: function(aButtons) {
							Opa5.assert.ok(true, "Found the button: " + aButtons[0]);
						},
						errorMessage: "Did not find the button with the property Text equal to Changed text"
					});

					Then.waitFor({
						id: new RegExp("helloButton"),
						success: function(aButtons) {
							Opa5.assert.ok(true, "Found the button: " + aButtons[0]);
						},
						errorMessage: "Did not find the button with corresponding ID"
					});

					Then.iTeardownMyAppFrame();
				});
				
				opaTest("Should find a Button using inline-matchers, nested waitFors, Ancestor and Properties matchers", function(Given, When, Then) {
					Given.iStartMyAppInAFrame("./../index.html");
					When.waitFor({
						viewName: "sap.training.opatestOPATesting.view.Main",
						controlType: "sap.m.Bar",
						matchers: function(oControl) {
							return oControl.hasStyleClass("sapMPageHeader");
						},
						success: function(aBars) {
							var oInternalHeader = aBars[0];
							this.waitFor({
								viewName: "sap.training.opatestOPATesting.view.Main",
								controlType: "sap.m.Button",
								matchers: [
									new Properties({
										text: "Header button"
									}),
									new Ancestor(oInternalHeader)
								],
								success: function(aButtons) {
									Opa5.assert.ok(true, "Found the button: " + aButtons[0] + "in a bar" + oInternalHeader);
								},
								errorMessage: "Did not find the button with a text 'Changed text' in an ancestor 'internal header'"
							});
						},
						errorMessage: "Did not find the bar with styleClass 'sapMPageHeader'"
					});
					
					Then.iTeardownMyAppFrame();
					
				});
				
				
			});