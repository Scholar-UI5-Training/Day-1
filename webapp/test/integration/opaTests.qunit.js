/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/train/day1/Day_1_Training/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});