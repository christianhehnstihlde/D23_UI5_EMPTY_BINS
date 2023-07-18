sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"d2-empty-bins/empty-bins/model/models"
], (UIComponent, Device, models) => UIComponent.extend("d2-empty-bins.empty-bins.Component", {

	metadata: {
		manifest: "json"
	},

	/**
	 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
	 * @public
	 * @override
	 */
	init() {
		// call the base component's init function
		UIComponent.prototype.init.apply(this, arguments);

		// enable routing
		this.getRouter().initialize();

		// set the device model
		this.setModel(models.createDeviceModel(), "device");
	}
}));