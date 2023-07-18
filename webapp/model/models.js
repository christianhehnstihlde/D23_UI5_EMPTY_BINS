sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], (JSONModel, Device) => ({
	createDeviceModel() {
		let oModel = new JSONModel(Device);
		oModel.setDefaultBindingMode("OneWay");
		return oModel;
	}
}));