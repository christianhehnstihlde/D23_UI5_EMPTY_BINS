sap.ui.define([
	"d2-empty-bins/empty-bins/salt/project-controller"
], (Controller) => Controller.extend("d2-empty-bins.empty-bins.controller.root", {
	onInit() {
		this.navTo("empty-bins-hrl");
	},
	onAfterRendering() {

	}
}));