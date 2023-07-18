sap.ui.define([
	"d2-empty-bins/empty-bins/salt/project-controller"
], (Controller) => Controller.extend("d2-empty-bins.empty-bins.controller.empty-bins-hrl", {
	onInit() {
		let model = this.getOwnerComponent().getModel();
		var that = this;
		var refreshTime;
		that.getView().byId("currentTime").setText(that.getCurrentTime());
		model.callFunction("/getRefreshTime", {
			methode: "POST",
			urlParameters: {
				LGNUM: "D20"
			},
			error: function (e) {
				var errorMessage = JSON.parse(e.responseText).error.message.value;
				sap.m.MessageToast.show(errorMessage, {
					duration: 999999
				});
			},
			success: function (oData) {
				refreshTime = oData.RefreshTime * 1000;
				that.intervalHandle = setInterval(function () {
					that.getView().byId("EmptyBinTable").getBinding("items").refresh();
		
					that.getView().byId("currentTime").setText(that.getCurrentTime());
				}, refreshTime);
			}
		});
	},
	getCurrentTime: function () {
		var sformattedDate = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "HH:mm:ss"}).format(new Date());
		return sformattedDate;
	},
	onAfterRendering() {

	},
	getTextForLptyp: function (lptyp) {
		switch (lptyp) {
			case "0001":
				return this.getView().getModel("i18n").getResourceBundle().getText("HR0001");
			case "0002":
				return this.getView().getModel("i18n").getResourceBundle().getText("HR0002");
			case "0003":
				return this.getView().getModel("i18n").getResourceBundle().getText("HR0003");
			default:
				return lptyp;
		}
	}
}));