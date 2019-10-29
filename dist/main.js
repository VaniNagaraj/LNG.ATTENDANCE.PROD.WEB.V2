(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div [formGroup]=\"custAttendanceForm\" class=\"card-header\">\r\n          <div class=\"card-title\">\r\n            <div class=\"col-sm-6\">\r\n              <div style=\"width:41%;float:left;margin-top:10px;font-size: 105%;\">Customer Manual Attendance </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive-md\">\r\n                <tr *ngIf=\"SelectForm\">\r\n                  <td>Company Id:</td>\r\n                  <td style=\"width:30%;\">\r\n                    <select id=\"deptId\" formControlName=\"deptId\" name=\"deptId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.deptId.errors }\">\r\n                      <option selected value=\"null\">Select Department </option>\r\n                      <option *ngFor=\"let dept of Department\" [value]=\"dept.deptId\">{{dept.deptName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.deptId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.deptId.errors.required\">Select Department</div>\r\n                      <div *ngIf=\"f.deptId.errors.pattern\">Please Select Department</div>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"width:30%;\">\r\n                    <input type=\"date\" id=\"projectinput4\" class=\"form-control\" formControlName=\"dateOfAttendance\"\r\n                      name=\"dateOfAttendance\" autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.dateOfAttendance.errors }\">\r\n                  </td>\r\n                  <td>\r\n                    <button _ngcontent-hci-c8=\"\" placement=\"bottom\" ngbTooltip=\"Fetch Attendance List\"\r\n                      tooltipClass=\"my-custom-class\" class=\"btn btn-raised btn-primary\" type=\"button\"\r\n                      (click)=\"openForm()\" [disabled]=\"isDisabled\">Fetch\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n\r\n              <button style=\"margin-left:88%;\" type=\"reset\" class=\"btn btn-raised btn-primary\" (click)=\"cancel()\">Reset\r\n              </button>\r\n              <button style=\"float:right;\" type=\"submit\" class=\"btn btn-raised btn-primary\" (click)=\"save()\">Save\r\n              </button>\r\n\r\n              <table class=\"table table-responsive-md\">\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Shift Start</th>\r\n                  <th>Attendance Status</th>\r\n                  <th>Mark Attendance</th>\r\n                </tr>\r\n\r\n                <tr *ngFor=\"let data of pageOfItems ; let i = index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.empName}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.shiftStart}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.attnedanceStatus}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <input type=\"checkbox\" style=\"width:15px;\" id=\"projectinput13\" class=\"form-control\"\r\n                        formControlName=\"attnedanceStatus\" name=\"attnedanceStatus\" autocomplete=\"off\">\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n\r\n\r\n              <div class=\"text-right\">\r\n                <jw-pagination [items]='custAttendance' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-title\">\r\n            <h4 class=\"card-title\">Customer Leave Type</h4>\r\n            <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\r\n              <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n                placement=\"bottom\" ngbTooltip=\"New Customer Leave Type\" tooltipClass=\"my-custom-class\">\r\n                <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Leave Type Name</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newLeaveType\">\r\n                  <td></td>\r\n                  <td>\r\n                    <select id=\"projectinput1\" formControlName=\"custLeaveName\" name=\"custLeaveName\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custLeaveName.errors }\">\r\n                      <option disabled selected value=\"null\">Select Leave Type Name</option>\r\n                      <option *ngFor=\"let leave of leaveType\" [value]=\"leave.custLeaveName\">{{leave.custLeaveName}}\r\n                      </option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.custLeaveName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custLeaveName.errors.required\">Please Select Leave Type Name</div>\r\n                    </div>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <a class=\"success p-0\" (click)=\"save()\" title=\"\" placement=\"bottom\"\r\n                      ngbTooltip=\"New Customer Leave Type\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" (click)=\"cancel()\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                      tooltipClass=\"my-custom-class\" title=\"\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems ; let i = index;\" [formGroup]=\"updateCustLeaveType\">\r\n                  <td>\r\n                    {{i+1}}\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.custLeaveName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput2\" formControlName=\"custLeaveName\" name=\"custLeaveName\"\r\n                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f1.custLeaveName.errors }\">\r\n                        <option disabled selected value=\"null\">Select Leave Type Name</option>\r\n                        <option *ngFor=\"let leave of leaveType\" [value]=\"leave.custLeaveName\">{{leave.custLeaveName}}\r\n                        </option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f1.custLeaveName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.custLeaveName.errors.required\">Please Select Leave Type Name</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editCustLeaveType(data)\" title=\"\"\r\n                      placement=\"bottom\" ngbTooltip=\"Edit\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteCustLeaveType(data)\" title=\"\"\r\n                      placement=\"bottom\" ngbTooltip=\"Delete\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-trash-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" title=\"\"\r\n                      placement=\"bottom\" ngbTooltip=\"Update\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" title=\"\"\r\n                      placement=\"bottom\" ngbTooltip=\"Cancel\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='leaveType' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/beacon/beacon.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/beacon/beacon.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-title\">\r\n            Beacon Master\r\n            <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\r\n              <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n                placement=\"bottom\" ngbTooltip=\"New Beacon\" tooltipClass=\"my-custom-class\">\r\n                <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Beacon code</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newBeacon\">\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"beaconId\"\r\n                      name=\"beaconId\" autocomplete=\"off\" readonly />\r\n                    <div *ngIf=\"submitted && f.beaconId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.beaconId.errors.required\">Please Enter Serial number</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput6\" formControlName=\"beaconCode\" placeholder=\"beacon code\"\r\n                      name=\"beaconCode\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.beaconCode.errors }\" />\r\n                    <div *ngIf=\"submitted && f.beaconCode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.beaconCode.errors.required\">Please enter beacon code</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" data-original-title=\"\" (click)=\"save()\" title=\"\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancel()\" title=\"\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of beacons ; let i = index;\" [formGroup]=\"updateBeacon\">\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{i+1}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"beacons.beaconId\"\r\n                        formControlName=\"beaconId\" name=\"beaconId\" autocomplete=\"off\" readonly />\r\n                      <div *ngIf=\"submitted1 && f1.beaconId.errors\" class=\"invalid-feedback\" readonly>\r\n                        <div *ngIf=\"f1.beaconId.errors.required\">Please Enter Serial number</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.beaconCode}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput6\" formControlName=\"beaconCode\"\r\n                        [(ngModel)]=\"beacons.beaconCode\" placeholder=\"beacon code\" name=\"beaconCode\"\r\n                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.beaconCode.errors }\" />\r\n                      <div *ngIf=\"submitted1 && f1.beaconCode.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.beaconCode.errors.required\">Please enter beacon code</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"editCustomer(data)\" title=\"\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <!-- <a class=\"danger p-0\" data-original-title=\"\" (click)=\"openConfirmationDialog(data)\" title=\"\">\r\n                          <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                        </a> -->\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"saveUpdate(data)\" title=\"\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancelUpdate(data)\" title=\"\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Block Beacon Map</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Block Beacon Map\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Block Name</th>\r\n                  <th>Beacon Code</th>\r\n                  <th>Beacon Type</th>\r\n                  <th style='padding: 8px;' colspan=\"6\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newBlockBeaconMap\">\r\n                  <td></td>\r\n                  <td>\r\n                    <select id=\"projectinput1\" formControlName=\"refBlkId\" name=\"refBlkId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refBlkId.errors }\">\r\n                      <option value=\"none\" selected disabled value=\"null\">Please Select Block</option>\r\n                      <option *ngFor=\"let block of globalBlock\" [value]=\"block.blkId\">{{block.blkLogicalName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refBlkId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refBlkId.errors.required\">Please Select Block</div>\r\n                    </div>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <input type=\"text\" id=\"beaconCode\" formControlName=\"beaconCode\" name=\"beaconCode\"\r\n                      class=\"form-control\" placeholder=\"Please Enter Beacon Code\" maxlength=\"25\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.beaconCode.errors }\">\r\n                    <div *ngIf=\"submitted && f.beaconCode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.beaconCode.errors.required\">Please Provide Beacon Code</div>\r\n                      <div *ngIf=\"f.beaconCode.errors.pattern\">Beacon Code Should contain only Alphabets and Numbers\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <select id=\"projectinput1\" formControlName=\"beaconType\" name=\"beaconType\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.beaconType.errors }\">\r\n                      <option selected disabled value=\"null\">Please Select Beacon Type</option>\r\n                      <option [value]=\"1\">Entry and Photo</option>\r\n                      <option [value]=\"2\">Mark Attendence</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.beaconType.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.beaconType.errors.required\">Please Select Beacon Type</div>\r\n                    </div>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <a class=\"success p-0\" (click)=\"save()\" placement=\"bottom\" ngbTooltip=\"Save\"\r\n                      tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" (click)=\"cancel()\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                      tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n\r\n                <!-- Update Desgination -->\r\n                <tr *ngFor=\"let data of pageOfItems; let i = index;\" [formGroup]=\"updateBlockBeaconMap\">\r\n                  <td>\r\n                    {{ i + 1}}\r\n                    <input type=\"text\" formControlName=\"blkBeaconMapId\" id=\"blkBeaconMapId\" hidden>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.blkLogicalName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput4\" formControlName=\"refBlkId\" name=\"refBlkId\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.refBlkId.errors }\">\r\n                        <option value=\"none\" selected disabled value=\"null\">Please Select Block</option>\r\n                        <option *ngFor=\"let block of globalBlock\" [value]=\"block.blkId\">{{block.blkLogicalName}}\r\n                        </option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted1 && f1.refBlkId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.refBlkId.errors.required\">Please Select Block</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.beaconCode}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"beaconCode\" formControlName=\"beaconCode\" name=\"beaconCode\"\r\n                        class=\"form-control\" placeholder=\"Please Enter Beacon Code\" maxlength=\"25\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.beaconCode.errors }\">\r\n                      <div *ngIf=\"submitted1 && f1.beaconCode.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.beaconCode.errors.required\">Please Provide Beacon Code</div>\r\n                        <div *ngIf=\"f1.beaconCode.errors.pattern\">Beacon Code Should contain only Alphabets and Numbers\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.beaconType}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput1\" formControlName=\"beaconType\" name=\"beaconType\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.beaconType.errors }\">\r\n                        <option selected disabled value=\"null\">Please Select Beacon Type</option>\r\n                        <option value=\"1\">Entry and Photo</option>\r\n                        <option value=\"2\">Mark Attendence</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted1 && f1.beaconType.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.beaconType.errors.required\">Please Select Beacon Type</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editBlockBeaconMap(data)\" placement=\"bottom\" ngbTooltip=\"Edit\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <!-- <a class=\"danger p-0\" (click)=\"deleteBlockBeaconMap(data)\" placement=\"bottom\" ngbTooltip=\"Delete\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-trash-2 font-medium-3 mr-2\"></i>\r\n                      </a> -->\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Update\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='blockbeaconMap' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/block/block.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/block/block.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Block</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Block\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Branch</th>\r\n                  <th>Block Name</th>\r\n                  <th>Block GPS Radius</th>\r\n                  <th>Block Latitude and Longitude</th>\r\n                  <th style='padding: 8px;' colspan=\"6\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"blockForm\">\r\n                  <td>\r\n\r\n                  </td>\r\n                  <td>\r\n                    <select id=\"projectinput6\" formControlName=\"refBranchId\" name=\"refBranchId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refBranchId.errors }\">\r\n                      <option value=\"none\" selected disabled value=\"null\">Select Branch</option>\r\n                      <option *ngFor=\"let st of globalBranch\" [value]=\"st.brId\">{{st.brName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refBranchId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refBranchId.errors.required\">Please Select Branch</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"blkLogicalName\" formControlName=\"blkLogicalName\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.blkLogicalName.errors }\"\r\n                      placeholder=\"Please Enter Block Name\" maxlength=\"20\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 222)? false : true\">\r\n                    <div *ngIf=\"submitted && f.blkLogicalName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.blkLogicalName.errors.required\">Please Provide Block Name</div>\r\n                    </div>\r\n                  </td>\r\n                  \r\n                  <td>\r\n                    <input type=\"text\" id=\"blkGPSRadius\" formControlName=\"blkGPSRadius\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.blkGPSRadius.errors }\" maxlength=\"5\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\"\r\n                      placeholder=\"Please Enter GPS Radius in Meters\">\r\n                    <div *ngIf=\"submitted && f.blkGPSRadius.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.blkGPSRadius.errors.required\">Please Provide GPS Radius</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"blkLatLong\" formControlName=\"blkLatLong\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.blkLatLong.errors }\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 65 && event.keyCode <= 90)? false : true\"\r\n                      placeholder=\"Please Enter Latitude and Longitude\">\r\n                    <div *ngIf=\"submitted && f.blkLatLong.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.blkLatLong.errors.required\">Please Provide Latitude and Longitude</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" (click)=\"save()\" placement=\"bottom\" ngbTooltip=\"Save\"\r\n                      tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" (click)=\"cancel()\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                      tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems; let i = index\" [formGroup]=\"updateBlockForm\">\r\n                  <td>\r\n                    {{i+1}}\r\n                    <input type=\"text\" formControlName=\"blkId\" id=\"blkId\" hidden>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.brName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput6\" formControlName=\"refBranchId\" name=\"refBranchId\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.refBranchId.errors }\">\r\n                        <option value=\"none\" selected disabled value=\"null\">Select Branch</option>\r\n                        <option *ngFor=\"let st of globalBranch\" [value]=\"st.brId\">{{st.brName}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted1 && f1.refBranchId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.refBranchId.errors.required\">Please Select Branch</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.blkLogicalName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"blkLogicalName\" formControlName=\"blkLogicalName\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.blkLogicalName.errors }\"\r\n                        placeholder=\"Please Enter Block Name\" maxlength=\"20\"\r\n                        onkeydown=\"javascript: return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 222)? false : true\">\r\n                      <div *ngIf=\"submitted1 && f1.blkLogicalName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.blkLogicalName.errors.required\">Please Provide BLock Name</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  \r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.blkGPSRadius}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"blkGPSRadius\" formControlName=\"blkGPSRadius\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.blkGPSRadius.errors }\" maxlength=\"5\"\r\n                        onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\"\r\n                        placeholder=\"Please Enter GPS Radius in Meters\">\r\n                      <div *ngIf=\"submitted1 && f1.blkGPSRadius.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.blkGPSRadius.errors.required\">Please Provide GPS Radius</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.blkLatLong}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"blkLatLong\" formControlName=\"blkLatLong\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.blkLatLong.errors }\"\r\n                        onkeydown=\"javascript: return (event.keyCode >= 65 && event.keyCode <= 90)? false : true\"\r\n                        placeholder=\"Please Enter Latitude and Longitude\">\r\n                      <div *ngIf=\"submitted1 && f1.blkLatLong.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.blkLatLong.errors.required\">Please Provide Latitude and Longitude</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editCustomer(data)\" placement=\"bottom\" ngbTooltip=\"Edit\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteCustomer(data)\" placement=\"bottom\" ngbTooltip=\"Delete\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-trash-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Update\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                        tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='globalBlock' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/branch/branch.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/branch/branch.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List Section starts-->\r\n<section id=\"extended\" *ngIf=\"showList\">\r\n  <div class=\"rowtext-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Branch</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n            placement=\"bottom\" ngbTooltip=\"New Branch\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Branch Name</th>\r\n                  <th>Branch Code</th>\r\n                  <th>City</th>\r\n                  <th>Mobile Number</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let branch of pageOfItems; let i = index;\">\r\n                  <td>{{i + 1}}</td>\r\n                  <td>{{branch.brName}}</td>\r\n                  <td>{{branch.brCode}}</td>\r\n                  <td>{{branch.brCity}}</td>\r\n                  <td>{{branch.brMobile}}</td>\r\n                  <td width=\"160\">\r\n                    <a class=\"warning p-0\" data-original-title=\"\" (click)=\"viewBranch(branch.brId, content)\"\r\n                      placement=\"bottom\" ngbTooltip=\"View\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-eye font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"success p-0\" data-original-title=\"\" (click)=\"editBranch(branch.brId)\" placement=\"bottom\"\r\n                      ngbTooltip=\"Edit\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"deleteBranch(branch.brId)\" placement=\"bottom\"\r\n                      ngbTooltip=\"Delete\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-trash-2 font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='globalBranch' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- List section Ends -->\r\n\r\n<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\" *ngIf=\"showForm\">\r\n  <div class=\"rowtext-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header pb-2\">\r\n          <h4 class=\"card-title\" id=\"bordered-layout-basic-form\"></h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\"><i class=\"ft-user\"></i>{{formInfo}} Branch Information</h4>\r\n                <input type=\"text\" name=\"brId\" formControlName=\"brId\" hidden>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"brName\">Branch Name</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brName\" formControlName=\"brName\" class=\"form-control\"\r\n                      placeholder=\"Please Enter Branch Name\" name=\"brName\" maxlength=\"50\" required autocomplete=\"off\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 222)? false : true\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brName.errors }\" required>\r\n                    <div *ngIf=\"submitted && f.brName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brName.errors.required\">Please Provide Branch Name</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"brAddress\">Branch Address</label>\r\n                  <div class=\"col-md-4\">\r\n                    <textarea name=\"brAddress\" id=\"brAddress\" rows=\"1\" formControlName=\"brAddress\" class=\"form-control\"\r\n                      maxlength=\"100\" placeholder=\"Please Enter Address\" required\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brAddress.errors }\"></textarea>\r\n                    <div *ngIf=\"submitted && f.brAddress.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brAddress.errors.required\">Please Provide Branch Address</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control\" for=\"brCode\">Branch Code</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brCode\" maxlength=\"8\" formControlName=\"brCode\" class=\"form-control\"\r\n                      placeholder=\"Branch Code\" name=\"brCode\" autocomplete=\"off\" readonly>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"refCustomerId\">Customer</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"refCustomerId\" name=\"refCustomerId\" formControlName=\"refCustomerId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refCustomerId.errors }\" required>\r\n                      <option selected disabled value=\"null\">Please Select Customer</option>\r\n                      <option *ngFor=\"let ct of globalCustomer\" [value]=\"ct.custId\">{{ct.custName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refCustomerId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refCustomerId.errors.required\">Please Select Customer</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"refCountryId\">Country</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"refCountryId\" name=\"refCountryId\" formControlName=\"refCountryId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refCountryId.errors }\"\r\n                      (change)=\"changeCountry($event.target.value)\">\r\n                      <option selected disabled value=\"null\">Please Select Country</option>\r\n                      <option *ngFor=\"let ct of globalCountry\" [value]=\"ct.countryId\">{{ct.countryName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refCountryId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refCountryId.errors.required\">Please Select Country</div>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"col-md-2 label-control required\" for=\"refStateId\">State</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"refStateId\" name=\"refStateId\" formControlName=\"refStateId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refStateId.errors }\" required>\r\n                      <option selected disabled value=\"null\">Please Select State</option>\r\n                      <option *ngFor=\"let ct of globalState\" [value]=\"ct.stateId\">{{ct.stateName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refStateId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refStateId.errors.required\">Please Select State</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"brCity\">City</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brCity\" formControlName=\"brCity\" class=\"form-control\"\r\n                      placeholder=\"Please Enter Customer City\" name=\"brCity\" maxlength=\"50\" required autocomplete=\"off\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 222)? false : true\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brCity.errors }\" required>\r\n                    <div *ngIf=\"submitted && f.brCity.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brCity.errors.required\">Please provide City</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"brPincode\">Pincode</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brPincode\" maxlength=\"6\" formControlName=\"brPincode\" class=\"form-control\"\r\n                      placeholder=\"Please Enter Pincode\" name=\"brPincode\" autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brPincode.errors }\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\">\r\n                    <div *ngIf=\"submitted && f.brPincode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brPincode.errors.required\">Please Provide Pincode</div>\r\n                      <div *ngIf=\"f.brPincode.errors.pattern\">Pincode Must Contain 6 Characters</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"brMobile\">Branch Mobile</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"tel\" formControlName=\"brMobile\" maxlength=\"10\" id=\"brMobile\" class=\"form-control\"\r\n                      placeholder=\"Please Enter Mobile Number\" name=\"brMobile\" autocomplete=\"off\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brMobile.errors }\">\r\n                    <div *ngIf=\"submitted && f.brMobile.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brMobile.errors.required\">Please provide Branch Mobile Number</div>\r\n                      <div *ngIf=\"f.brMobile.errors.pattern\">Branch Mobile Number Must Contain 10 numbers</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control\" for=\"brLandline\">Landline</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" maxlength=\"10\" id=\"brLandline\" formControlName=\"brLandline\" class=\"form-control\"\r\n                      placeholder=\"Please Enter Landline Number\" name=\"brLandline\" autocomplete=\"off\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brLandline.errors }\">\r\n                    <div *ngIf=\"submitted && f.brLandline.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brLandline.errors.pattern\">Landline Number Should Contain 10 numbers</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"brEmail\">Branch Email</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brEmail\" class=\"form-control\" formControlName=\"brEmail\"\r\n                      placeholder=\"Please Enter Email\" name=\"brEmail\" maxlength=\"50\" autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brEmail.errors }\">\r\n                    <div *ngIf=\"submitted && f.brEmail.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brEmail.errors.required\">Please provide Email</div>\r\n                      <div *ngIf=\"f.brEmail.errors.email\">Email should be valid</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"brLatLong\">Branch Latitude and Longitude</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brLatLong\" class=\"form-control\" formControlName=\"brLatLong\"\r\n                      placeholder=\"Please Enter Latitude and Longitude\" name=\"brLatLong\" autocomplete=\"off\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"brValidityStart\">Validity Start</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brValidityStart\" class=\"form-control\" name=\"brValidityStart\"\r\n                      formControlName=\"brValidityStart\" #d1=\"ngbDatepicker\" (focus)=\"d1.toggle()\" ngbDatepicker\r\n                      placeholder=\"Please Select Validity Start Date\" [(ngModel)]=\"firstDate\"\r\n                      (ngModelChange)=\"disableDate(firstDate)\" data-title=\"Date Opened\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brValidityStart.errors }\">\r\n                    <div *ngIf=\"submitted && f.brValidityStart.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brValidityStart.errors.required\">Select Validity Start</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"brValidityEnd\">Validity End</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"brValidityEnd\" class=\"form-control\" name=\"dateopened\"\r\n                      formControlName=\"brValidityEnd\" #d2=\"ngbDatepicker\" (focus)=\"d2.toggle()\" ngbDatepicker\r\n                      placeholder=\"Please Select Validity End Date\" [minDate]=\"endDate\" data-title=\"Date Fixed\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brValidityEnd.errors }\">\r\n                    <div *ngIf=\"submitted && f.brValidityEnd.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.brValidityEnd.errors.required\">Select Validity End</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control\" for=\"brIsBillable\">Is Billable?</label>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"custom-control custom-checkbox d-inline-block\">\r\n                        <input type=\"checkbox\" id=\"brIsBillable\" formControlName=\"brIsBillable\"\r\n                          class=\"custom-control-input\">\r\n                        <label class=\"custom-control-label\" for=\"brIsBillable\">Billable</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control\" for=\"brIsActive\">Is Active?</label>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"custom-control custom-checkbox d-inline-block\">\r\n                        <input type=\"checkbox\" id=\"brIsActive\" checked formControlName=\"brIsActive\"\r\n                          class=\"custom-control-input\" (click)=\"false\">\r\n                        <label class=\"custom-control-label\" for=\"brIsActive\">Active</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-actions\">\r\n                <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-raised btn-warning mr-1\"><i class=\"ft-x\"></i>\r\n                  Close</button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-info mr-1\"><i\r\n                    class=\"ft-check\"></i>&nbsp;{{btnName}}</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n\r\n<!-- Modal Alert Starts-->\r\n<section id=\"modals\">\r\n  <div class=\"rowtext-left\" matchHeight=\"card\">\r\n    <!--Modal with Default options starts-->\r\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Branch Details</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-share font-small-3\"></i> Name:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i>\r\n                            State:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.stateName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-direction font-small-3\"></i> Branch\r\n                            Address:</a></span>\r\n                        <span class=\"d-block overflow-hidden\" style=\"word-wrap:break-word;\">{{branchView.brAddress}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-screen-desktop font-small-3\"></i> Branch\r\n                            Code:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brCode}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Country\r\n                            :</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.countryName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-call-end font-small-3\"></i> Mobile\r\n                            Number:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brMobile}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> City:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brCity}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-pointer font-small-3\"></i>\r\n                            Pincode:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brPincode}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-call-end font-small-3\"></i>\r\n                            Landline Number:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brLandline}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <!-- <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-envelope font-small-3\"></i>\r\n                            Email:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brEmail}}</span>\r\n                      </li> -->\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-envelope font-small-3\"></i> Branch\r\n                            Email:</a></span>\r\n                        <span class=\"d-block overflow-hidden\" style=\"word-wrap:break-word;\">{{branchView.brEmail}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-calendar font-small-3\"></i> Validity\r\n                            End:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brValidityEnd | date: 'dd-MM-yyyy'}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Customer\r\n                            Name:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.custName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-check font-small-3\"></i> Is Billable?\r\n                            :</a></span>\r\n                        <span *ngIf=\"branchView.brIsBillable == true\" class=\"d-block overflow-hidden\">Yes</span>\r\n                        <span *ngIf=\"branchView.brIsBillable == false\" class=\"d-block overflow-hidden\">No</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-calendar font-small-3\"></i> Validity\r\n                            Start:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{branchView.brValidityStart | date: 'dd-MM-yyyy'}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-check font-small-3\"></i>\r\n                            Is Active?:</a></span>\r\n                        <span *ngIf=\"branchView.brIsActive == true\" class=\"d-block overflow-hidden\">Yes</span>\r\n                        <span *ngIf=\"branchView.brIsActive == false\" class=\"d-block overflow-hidden\">No</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Modal with Default options ends-->\r\n  </div>\r\n</section>\r\n<!-- Model Alert Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/country/country.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/country/country.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Country</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Country\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Tel Code</th>\r\n                  <th>Country</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newCountry\">\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"countryId\"\r\n                      name=\"countryId\" autocomplete=\"off\" hidden />\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput6\" formControlName=\"countryTelCode\"\r\n                      placeholder=\"Please Enter Country Tel Code\" name=\"countryTelCode\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.countryTelCode.errors }\" maxlength=\"5\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57 )||(event.keyCode >= 96 && event.keyCode <= 105)||( event.keyCode==187 ) || event.keyCode == 107 ? true : false\">\r\n                    <div *ngIf=\"submitted && f.countryTelCode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.countryTelCode.errors.required\">Please enter country tel code</div>\r\n                      <div *ngIf=\"f.countryTelCode.errors.pattern\">Country tel code should start with +</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"countryName\"\r\n                      placeholder=\"Please Enter Country Name \" name=\"countryName\" required autocomplete=\"off\"\r\n                      maxlength=\"25\" [ngClass]=\"{ 'is-invalid': submitted && f.countryName.errors }\"\r\n                      onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n\r\n                    <div *ngIf=\"submitted && f.countryName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.countryName.errors.required\">Please Enter Country</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Save\"\r\n                      (click)=\"save()\" title=\"\"> <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Cancel\"\r\n                      (click)=\"cancel()\" title=\"\"><i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems ; let i = index;\" [formGroup]=\"updateCountry\">\r\n                  <td>\r\n                    {{i+1}}\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"countries.countryId\"\r\n                      formControlName=\"countryId\" name=\"countryId\" autocomplete=\"off\" hidden />\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.countryTelCode}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput6\" formControlName=\"countryTelCode\"\r\n                        [(ngModel)]=\"countries.countryTelCode\" placeholder=\"Please Enter Country Tel Code\"\r\n                        name=\"countryTelCode\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.countryTelCode.errors }\" maxlength=\"5\"\r\n                        onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57 )||(event.keyCode >= 96 && event.keyCode <= 105)||( event.keyCode==187 ) || event.keyCode == 107 ? true : false\">\r\n                      <div *ngIf=\"submitted1 && f1.countryTelCode.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.countryTelCode.errors.required\">Please Provide Country Tel Code</div>\r\n                        <div *ngIf=\"f1.countryTelCode.errors.pattern\">Country Tel Code should Start with +</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.countryName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"countries.countryName\"\r\n                        formControlName=\"countryName\" placeholder=\"Please Enter Country Name\" name=\"countryName\"\r\n                        required autocomplete=\"off\" maxlength=\"25\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.countryName.errors }\"\r\n                        onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n                      <div *ngIf=\"submitted1 && f1.countryName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.countryName.errors.required\">Please Enter Country</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Edit\"\r\n                        (click)=\"editCountry(data)\" title=\"\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Delete\"\r\n                        (click)=\"deleteCountry(data)\" title=\"\">\r\n                        <i class=\"ft-trash-2 font-medium-3\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Update\"\r\n                        (click)=\"saveUpdate(data)\" title=\"\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" placement=\"bottom\" tooltipClass=\"my-custom-class\" ngbTooltip=\"Cancel\"\r\n                        (click)=\"cancelUpdate(data)\" title=\"\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='countries' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\n<section id=\"action\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-title\">\n            Contractor Master\n            <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\n              <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\">\n                <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New \n              </button>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <table class=\"table table-responsive-md\">\n              <thead>\n                <tr>\n                  <th>Sl No</th>\n                  <th>Contarctor Name</th>\n                  <th colspan=\"2\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"showNew\" [formGroup]=\"newContractor\">\n                  <td>\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"contractorId\" placeholder=\"\" name=\"contractorId\" autocomplete=\"off\" maxlength=\"50\"\n                      readonly>\n                    <div *ngIf=\"submitted && f.contractorId.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.contractorId.errors.required\">Please Enter Id</div>\n                    </div>\n                  </td>\n                  <td>\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"contractorName\"\n                      placeholder=\"Contractor name\" name=\"contractorName\" (blur)=\"checkName()\" required autocomplete=\"off\" maxlength=\"50\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.contractorName.errors }\">\n                    <div *ngIf=\"submitted && f.contractorName.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.contractorName.errors.required\">Please enter contactor type</div>\n                      <div *ngIf=\"f.contractorName.errors.pattern\">Special characters not allowed</div>\n                    </div>\n                  </td>\n                  <td>\n                    <a class=\"success p-0\" data-original-title=\"\" (click)=\"save()\" title=\"\">\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\n                    </a>\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancel()\" title=\"\">\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let data of contractors; let i = index;\" [formGroup]=\"updateContractor\">\n                  <td>\n                    <span [hidden]=\"data.showUpdate\">\n                      {{i+1}}\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"contractors.contractorId\" formControlName=\"contractorId\"\n                         name=\"contractorId\" autocomplete=\"off\" readonly>\n                      <div *ngIf=\"submitted1 && f1.contractorId.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f1.contractorId.errors.required\">Please Enter Serial number</div>\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span [hidden]=\"data.showUpdate\">\n                      {{data.contractorName}}\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"contractors.contractorName\" formControlName=\"contractorName\"\n                         name=\"contractorName\" required autocomplete=\"off\" (blur)=\"checkName()\" maxlength=\"50\"\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.contractorName.errors }\">\n                      <div *ngIf=\"submitted1 && f1.contractorName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f1.contractorName.errors.required\">Please enter contractor type</div>\n                        <div *ngIf=\"f1.contractorName.errors.pattern\">Special characters not allowed</div>\n                      </div>\n                    </span>\n                  </td>\n                  <td width=\"160\">\n                    <span [hidden]=\"data.showUpdate\">\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"editCustomer(data)\" title=\"\">\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                      </a>\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"deleteCustomer(data)\" title=\"\">\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\n                      </a>\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"saveUpdate(data)\" title=\"\">\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\n                      </a>\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancelUpdate(data)\" title=\"\">\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\n                      </a>\n                    </span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/customer.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/customer.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Advanced filter Starts-->\r\n<section id=\"advanced\" *ngIf=\"showList\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Customer List</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Customer\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n              <input #search class=\"search mb-2\" type=\"text\" placeholder=\"Search...\" (keyup)=\"onSearch(search.value)\">\r\n              <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"editCustomer($event)\"\r\n                (delete)=\"openConfirmationDialog($event)\" (custom)=\"viewCustomer($event, content)\"></ng2-smart-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Advanced filter Ends-->\r\n\r\n<!-- List Section starts-->\r\n<!-- <section id=\"extended\" *ngIf=\"showList\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                  <h4 style=\"width: 41%;float: left;margin-top: 10px;\" class=\"card-title\"> Customer List </h4>\r\n                </div>\r\n          </div>\r\n          \r\n          <!-- Filter Datatable Options Starts -->\r\n<!-- <div class=\"col-sm-9\" style=\"float: left; margin-left: -15px;\">\r\n            <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...' [(ngModel)]=\"searchText\" />\r\n          </div> -->\r\n<!-- Filter Datatable Options Ends -->\r\n<!-- <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div> -->\r\n<!-- <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center data-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Customer</th>\r\n                  <th>Code</th>\r\n                  <th>City</th>\r\n                  <th>Country</th>\r\n                  <th>Email</th>\r\n                  <th>Industry</th>\r\n                  <th>Branches(#)</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let customer of pageOfItems | filter: searchText; let i = index;\">\r\n                  <td align=\"left\">{{i + 1}}</td>\r\n                  <td align=\"left\">{{customer.custName}}</td>\r\n                  <td align=\"left\">{{customer.custCode}}</td>\r\n                  <td align=\"left\">{{customer.custCity}}</td>\r\n                  <td align=\"left\">{{customer.countryName}}</td>\r\n                  <td align=\"left\">{{customer.custEmail}}</td>\r\n                  <td align=\"left\">{{customer.industryName}}</td>\r\n                  <td align=\"left\">{{customer.custNoOfBranch}}</td>\r\n                  <td width=\"160\" align=\"left\">\r\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"viewCustomer(customer.custId, content)\" title=\"\">\r\n                          <i class=\"ft-eye font-medium-3 mr-2\"></i>\r\n                        </a>\r\n                    <a class=\"warning p-0\" data-original-title=\"\" (click)=\"editCustomer(customer.custId)\" title=\"\">\r\n                      <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"openConfirmationDialog(customer.custId)\" title=\"\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='customers' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n<!-- </section> -->\r\n<!-- List section Ends -->\r\n\r\n<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\" *ngIf=\"showForm\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\"><i class=\"ft-user\"></i>{{formInfo}} Customer Information</h4>\r\n                <input type=\"hidden\" name=\"custId\" formControlName=\"custId\" [(ngModel)]=\"customers.custId\">\r\n                <div class=\"form-group row \">\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput1\">Name</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"customers.custName\" (blur)=\"checkName()\"\r\n                      formControlName=\"custName\" placeholder=\"Name\" name=\"name\" required autocomplete=\"off\"\r\n                      maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.custName.errors }\">\r\n                    <div *ngIf=\"submitted && f.custName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custName.errors.required\">Please provide Customer Name</div>\r\n                      <div *ngIf=\"f.custName.errors.pattern\">Special characters not allowed</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput2\">Customer Code</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput200\" formControlName=\"custCode\" [(ngModel)]=\"customers.custCode\"\r\n                      class=\"form-control\" placeholder=\"Customer Code\" [readOnly]=\"custCodeDisabled\" name=\"custCode\"\r\n                      maxlength=\"6\" required autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custCode.errors }\">\r\n                    <div *ngIf=\"submitted && f.custCode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custCode.errors.required\">Please provide Customer Code</div>\r\n                      <div *ngIf=\"f.custCode.errors.pattern\">Customer Code should in AAA123 Format</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row \">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput3\">Address</label>\r\n                  <div class=\"col-md-4\">\r\n                    <textarea type=\"text\" rows=\"1\" id=\"projectinput3\" required [(ngModel)]=\"customers.custAddress\"\r\n                      formControlName=\"custAddress\" class=\"form-control\" placeholder=\"Address\" name=\"custAddress\"\r\n                      autocomplete=\"off\" minlength=\"1\" maxlength=\"100\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custAddress.errors }\">\r\n                    </textarea>\r\n                    <div *ngIf=\"submitted && f.custAddress.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custAddress.errors.required\">Please provide customer address</div>\r\n                      <div *ngIf=\"f.custAddress.errors.pattern\">Address length should not greater then 100 characters\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput4\">City</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput4\" formControlName=\"custCity\" [(ngModel)]=\"customers.custCity\"\r\n                      class=\"form-control\" placeholder=\"Customer City\" name=\"custCity\" required autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custCity.errors }\">\r\n                    <div *ngIf=\"submitted && f.custCity.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custCity.errors.required\">Please provide City</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput7\">Country</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"refCountryId\" name=\"refCountryId\" [(ngModel)]=\"customers.refCountryId\"\r\n                      (change)=\"showState($event)\" formControlName=\"refCountryId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refCountryId.errors }\" [value]='0'>\r\n                      <option selected disabled [value]=\"0\">Select Country</option>\r\n                      <option *ngFor=\"let ct of countries\" [value]=\"ct.countryId\">{{ct.countryName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refCountryId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refCountryId.errors.required\">Please Select Country</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput6\">State</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"projectinput6\" formControlName=\"refStateId\" [(ngModel)]=\"customers.refStateId\"\r\n                      name=\"refStateId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refStateId.errors }\" [value]='0'>\r\n                      <option selected disabled [value]=\"0\">Select State</option>\r\n                      <!-- <option value=\"1\">Karanataka</option> -->\r\n                      <option *ngFor=\"let st of states\" [value]=\"st.stateId\">{{st.stateName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refStateId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refStateId.errors.required\">Please Select State</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row \">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput8\">Pincode</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput18\" maxlength=\"6\" [(ngModel)]=\"customers.custPincode\"\r\n                      formControlName=\"custPincode\" class=\"form-control\" placeholder=\"Pincode\" name=\"custPincode\"\r\n                      autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.custPincode.errors }\"\r\n                      onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)? true : false\">\r\n                    <div *ngIf=\"submitted && f.custPincode.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custPincode.errors.required\">Please Provide Pincode</div>\r\n                      <div *ngIf=\"f.custPincode.errors.pattern\">Pincode Maximum 6 Characters</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput9\">GSTIN</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput9\" minlength=\"15\" maxlength=\"20\" [(ngModel)]=\"customers.custGSTIN\"\r\n                      formControlName=\"custGSTIN\" class=\"form-control\" placeholder=\"GSTIN\" name=\"custGSTIN\"\r\n                      autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.custGSTIN.errors }\" required>\r\n                    <div *ngIf=\"submitted && f.custGSTIN.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custGSTIN.errors.required\">Please provide GSTIN</div>\r\n                      <div *ngIf=\"f.custGSTIN.errors.pattern\">GSTIN should contain min 15 or max 20 characters</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput10\">Mobile</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"tel\" formControlName=\"custMobile\" [(ngModel)]=\"customers.custMobile\" maxlength=\"10\"\r\n                      id=\"projectinput10\" class=\"form-control\" placeholder=\"Mobile Number\" name=\"number\"\r\n                      autocomplete=\"off\"\r\n                      onkeydown=\"javascript:return(event.keyCode>=8 && event.keyCode<=57) || (event.keyCode>=96 && event.keyCode<=105)\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custMobile.errors }\">\r\n                    <div *ngIf=\"submitted && f.custMobile.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custMobile.errors.required\">Please provide Mobile Number</div>\r\n                      <div *ngIf=\"f.custMobile.errors.pattern\">Mobile Number should be 10 numbres</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control\" for=\"projectinput11\">Landline</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" maxlength=\"10\" id=\"projectinput11\" [(ngModel)]=\"customers.custLandline\"\r\n                      formControlName=\"custLandline\" class=\"form-control\" placeholder=\"Landline Number\"\r\n                      name=\"custLandline\" autocomplete=\"off\"\r\n                      onkeydown=\"javascript:return(event.keyCode>=8 && event.keyCode<=57) || (event.keyCode>=96 && event.keyCode<=105)\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custLandline.errors }\">\r\n                    <div *ngIf=\"submitted && f.custLandline.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custLandline.errors.required\">Please provide Landline Number</div>\r\n                      <div *ngIf=\"f.custLandline.errors.pattern\">Landline Number should be 10 numbers</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row \">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput12\">Email</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput12\" class=\"form-control\" [(ngModel)]=\"customers.custEmail\"\r\n                      formControlName=\"custEmail\" placeholder=\"Email\" name=\"email\" maxlength=\"50\" autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custEmail.errors }\">\r\n                    <div *ngIf=\"submitted && f.custEmail.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custEmail.errors.required\">Please provide Email</div>\r\n                      <div *ngIf=\"f.custEmail.errors.email\">Email should be valid</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput13\">Industry Type</label>\r\n                  <div class=\"col-md-4\">\r\n                    <select id=\"projectinput13\" formControlName=\"refIndustryTypeId\"\r\n                      [(ngModel)]=\"customers.refIndustryTypeId\" name=\"refIndustryTypeId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refIndustryTypeId.errors }\" [value]='0'>\r\n                      <option value=\"0\" selected disabled>Select Industry Type</option>\r\n                      <!-- <option value=\"1\">IT-Service</option> -->\r\n                      <option *ngFor=\"let it of industries\" [value]=\"it.industryId\">{{it.industryName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refIndustryTypeId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refIndustryTypeId.errors.required\">Please Select Industry Type</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row \">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput14\">Validity Start</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"date\" id=\"projectinput14\" class=\"form-control\"\r\n                      [(ngModel)]=\"customers.custValidityStart\" name=\"dateopened\" formControlName=\"custValidityStart\"\r\n                      data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"top\" data-title=\"Date Opened\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custValidityStart.errors }\">\r\n                    <div *ngIf=\"submitted && f.custValidityStart.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custValidityStart.errors.required\">Select Validity Start</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput15\">Validity End</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"date\" id=\"projectinput15\" class=\"form-control\" [(ngModel)]=\"customers.custValidityEnd\"\r\n                      name=\"dateopened\" formControlName=\"custValidityEnd\" data-toggle=\"tooltip\" data-trigger=\"hover\"\r\n                      data-placement=\"top\" data-title=\"Date Fixed\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custValidityEnd.errors && f.custValidityEnd.incorrect }\">\r\n                    <span style=\"color: red; font-size: 12px;\">Note: Validity End should be greater then validity start\r\n                      date.</span>\r\n                    <div *ngIf=\"submitted && f.custValidityEnd.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custValidityEnd.errors.required\">Select Validity End</div>\r\n                      <div *ngIf=\"f.custValidityEnd.errors.incorrect\">Validity End should be greater then validity start\r\n                        date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row \">\r\n                  <label class=\"col-md-2 label-control required\" for=\"projectinput16\">No of Branches</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"projectinput16\" class=\"form-control\" formControlName=\"custNoOfBranch\"\r\n                      placeholder=\"Number of Branches\" name=\"custNoOfBranch\" [(ngModel)]=\"customers.custNoOfBranch\"\r\n                      maxlength=\"2\" autocomplete=\"off\"\r\n                      onkeydown=\"javascript:return(event.keyCode>=8 && event.keyCode<=57) || (event.keyCode>=96 && event.keyCode<=105)\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.custNoOfBranch.errors }\">\r\n                    <div *ngIf=\"submitted && f.custNoOfBranch.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.custNoOfBranch.errors.required\">Please provide No of Branches</div>\r\n                      <div *ngIf=\"f.custNoOfBranch.errors.pattern\">Please provide Branches in XX format</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label class=\"col-md-2 label-control\">Customer Logo</label>\r\n                  <div class=\"col-md-4\">\r\n                    <label id=\"projectinput8\" class=\"file mx-auto\">\r\n                      <input type=\"file\" id=\"file\" accept=\"image/x-png,image/jpeg\" formControlName=\"custLogoFile\"\r\n                        name=\"logo\" (change)=\"onSelectFile($event)\" />\r\n\r\n                      <span class=\"file-custom\"></span>\r\n                    </label><br>\r\n                    <span style=\"color: red; font-size: 12px;\">Note: Image Should be in PNG & JPEG format only.</span>\r\n                    <div *ngIf=\"customers.custLogoFile\">\r\n                      <label>uploaded Logo </label>&nbsp;\r\n                      <img [src]=\"'data:image/jpg;base64,' + customers.custLogoFile\"\r\n                        style=\"height: 30px;width: 30px;\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"form-actions\">\r\n                <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-raised btn-warning mr-1\"><i class=\"ft-x\"></i>\r\n                  &nbsp;Close</button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-info mr-1\" *ngIf=\"submitBtn\"\r\n                  (click)=\"submitType = 'save'\"><i class=\"ft-check\"></i>&nbsp;Save</button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-info mr-1\" *ngIf=\"!submitBtn\"\r\n                  (click)=\"submitType = 'update'\"><i class=\"ft-check\"></i>&nbsp;Update</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n\r\n\r\n<section id=\"modals\">\r\n  <div class=\"row text-left\" matchHeight=\"card\">\r\n    <!--Modal with Default options starts-->\r\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Customer Details</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-user font-small-3\"></i> Name:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> Phone\r\n                            Number:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">+91 {{custView.custMobile}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Address:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custAddress}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"fa fa-qrcode font-small-3\"></i>\r\n                            Code:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custCode}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-call-end font-small-3\"></i> Landline\r\n                            Number:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custLandline}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> City:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custCity}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> Email:</a></span>\r\n                        <a class=\"d-block overflow-hidden\">{{custView.custEmail}}</a>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> No of\r\n                            Branches:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custNoOfBranch}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i>\r\n                            Pincode:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custPincode}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> State:</a></span>\r\n                        <a class=\"d-block overflow-hidden\">{{custView.stateName}}</a>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> Validity\r\n                            Start:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custValidityStart.slice(0, 10)}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> LOGO:</a></span>\r\n                        <span class=\"d-block overflow-hidden\"><img src=\"data:image/jpg;base64,{{custView.custLogoFile}}\"\r\n                            style=\"height: 30px;width: 30px;\" /></span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i>\r\n                            Country:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.countryName}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Validity\r\n                            End:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custValidityEnd.slice(0, 10)}}</span>\r\n                      </li>\r\n                      <!-- <li class=\"mb-2\">\r\n                                                <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> Pincode:</a></span>\r\n                                                <span class=\"d-block overflow-hidden\">560001</span>\r\n                                            </li> -->\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <ul class=\"no-list-style\">\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> GSTIN:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custGSTIN}}</span>\r\n                      </li>\r\n                      <li class=\"mb-2\">\r\n                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Created\r\n                            Date:</a></span>\r\n                        <span class=\"d-block overflow-hidden\">{{custView.custCreatedDate.slice(0, 10)}}</span>\r\n                      </li>\r\n                      <!-- <li class=\"mb-2\">\r\n                                                <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> Pincode:</a></span>\r\n                                                <span class=\"d-block overflow-hidden\">560001</span>\r\n                                            </li> -->\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Modal with Default options ends-->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/department/department.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/department/department.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\n<section id=\"action\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-title\">\n            Department Master\n            <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\n              <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\">\n                <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New \n              </button>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <table class=\"table table-responsive-md\">\n              <thead>\n                <tr>\n                  <th>Sl No</th>\n                  <th>Department Name</th>\n                  <th colspan=\"2\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"showNew\" [formGroup]=\"newDepartment\">\n                  <td>\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"deptId\" placeholder=\"\" name=\"deptId\" autocomplete=\"off\" maxlength=\"50\"\n                      readonly>\n                    <div *ngIf=\"submitted && f.deptId.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.deptId.errors.required\">Please Enter Id</div>\n                    </div>\n                  </td>\n                  <td>\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"deptName\"\n                      placeholder=\"Department name\" name=\"deptName\" required autocomplete=\"off\" maxlength=\"20\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.deptName.errors }\">\n                    <div *ngIf=\"submitted && f.deptName.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.deptName.errors.required\">Please enter department name</div>\n                    </div>\n                  </td>\n                  <td>\n                    <a class=\"success p-0\" data-original-title=\"\" (click)=\"save()\" title=\"\">\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\n                    </a>\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancel()\" title=\"\">\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let data of departments; let i = index;\" [formGroup]=\"updateDepartment\">\n                  <td>\n                    <span [hidden]=\"data.showUpdate\">\n                      {{i+1}}\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"departments.deptId\" formControlName=\"deptId\"\n                         name=\"deptId\" autocomplete=\"off\" readonly>\n                      <div *ngIf=\"submitted1 && f1.deptId.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f1.deptId.errors.required\">Please Enter Serial number</div>\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span [hidden]=\"data.showUpdate\">\n                      {{data.deptName}}\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"departments.deptName\" formControlName=\"deptName\"\n                         name=\"deptName\" required autocomplete=\"off\" maxlength=\"20\"\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.deptName.errors }\">\n                      <div *ngIf=\"submitted1 && f1.deptName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f1.deptName.errors.required\">Please Enter Department</div>\n                      </div>\n                    </span>\n                  </td>\n                  <td width=\"160\">\n                    <span [hidden]=\"data.showUpdate\">\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"editCustomer(data)\" title=\"\">\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                      </a>\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"deleteCustomer(data)\" title=\"\">\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\n                      </a>\n                    </span>\n                    <span [hidden]=\"!data.showUpdate\">\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"saveUpdate(data)\" title=\"\">\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\n                      </a>\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancelUpdate(data)\" title=\"\">\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\n                      </a>\n                    </span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/designation/designation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/designation/designation.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\n<section id=\"action\">\n    <div class=\"row text-left\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-title\">\n              Designation Master\n              <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\n                <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\">\n                  <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New \n                </button>\n              </div>\n            </div>\n  \n          </div>\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <table class=\"table table-responsive-md\">\n                <thead>\n                  <tr>\n                    <th>Sl No</th>\n                    <th>Designation Name</th>\n                    <th colspan=\"2\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngIf=\"showNew\" [formGroup]=\"newDesignation\">\n                    <td>\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"designationId\" placeholder=\"\" name=\"designationId\" autocomplete=\"off\" maxlength=\"50\"\n                        readonly>\n                      <div *ngIf=\"submitted && f.designationId.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.designationId.errors.required\">Please Enter Id</div>\n                      </div>\n                    </td>\n                    <td>\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"designationName\"\n                        placeholder=\"Designation name\" name=\"designationName\" required autocomplete=\"off\" maxlength=\"20\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.designationName.errors }\">\n                      <div *ngIf=\"submitted && f.designationName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.designationName.errors.required\">Please enter Designation name</div>\n                      </div>\n                    </td>\n                    <td>\n                      <a class=\"success p-0\" data-original-title=\"\" (click)=\"save()\" title=\"\">\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\n                      </a>\n                      <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancel()\" title=\"\">\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                  <tr *ngFor=\"let data of designations; let i = index;\" [formGroup]=\"updateDesignation\">\n                    <td>\n                      <span [hidden]=\"data.showUpdate\">\n                        {{i+1}}\n                      </span>\n                      <span [hidden]=\"!data.showUpdate\">\n                        <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"designations.designationId\" formControlName=\"designationId\"\n                           name=\"designationId\" autocomplete=\"off\" readonly>\n                        <div *ngIf=\"submitted1 && f1.designationId.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f1.designationId.errors.required\">Please Enter Serial number</div>\n                        </div>\n                      </span>\n                    </td>\n                    <td>\n                      <span [hidden]=\"data.showUpdate\">\n                        {{data.designationName}}\n                      </span>\n                      <span [hidden]=\"!data.showUpdate\">\n                        <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"designations.designationName\" formControlName=\"designationName\"\n                           name=\"designationName\" required autocomplete=\"off\" maxlength=\"20\"\n                          [ngClass]=\"{ 'is-invalid': submitted1 && f1.designationName.errors }\">\n                        <div *ngIf=\"submitted1 && f1.designationName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f1.designationName.errors.required\">Please Enter Designation</div>\n                        </div>\n                      </span>\n                    </td>\n                    <td width=\"160\">\n                      <span [hidden]=\"data.showUpdate\">\n                        <a class=\"success p-0\" data-original-title=\"\" (click)=\"editCustomer(data)\" title=\"\">\n                          <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                        </a>\n                        <a class=\"danger p-0\" data-original-title=\"\" (click)=\"deleteCustomer(data)\" title=\"\">\n                          <i class=\"ft-x font-medium-3 mr-2\"></i>\n                        </a>\n                      </span>\n                      <span [hidden]=\"!data.showUpdate\">\n                        <a class=\"success p-0\" data-original-title=\"\" (click)=\"saveUpdate(data)\" title=\"\">\n                          <i class=\"ft-check font-medium-3 mr-2\"></i>\n                        </a>\n                        <a class=\"danger p-0\" data-original-title=\"\" (click)=\"cancelUpdate(data)\" title=\"\">\n                          <i class=\"ft-x font-medium-3 mr-2\"></i>\n                        </a>\n                      </span>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-title\">\r\n            <div class=\"col-sm-6\">\r\n              <h4 class=\"card-title\">Holiday Calendar</h4>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-responsive-md\">\r\n                <tr [formGroup]=\"HolidayCalenderForm\" *ngIf=\"SelectForm\">\r\n                  <td style=\"width:30%;\">\r\n                    <select id=\"selectCompanyBranch\" formControlName=\"selectCompanyBranch\" name=\"selectCompanyBranch\"\r\n                      class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.selectCompanyBranch.errors }\">\r\n                      <option selected value=\"null\">Select Company or Branch </option>\r\n                      <option [ngValue]=\"\">Company</option>\r\n                      <option [ngValue]=\"\">Branch</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.selectCompanyBranch.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.selectCompanyBranch.errors.required\">Select Company or Branch </div>\r\n                      <div *ngIf=\"f.selectCompanyBranch.errors.pattern\"> Select Company or Branch </div>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"width:30%;\">\r\n                    <select id=\"brId\" formControlName=\"brId\" name=\"brId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.brId.errors }\">\r\n                      <option selected value=\"null\">Select Branch</option>\r\n                      <option *ngFor=\"let br of Branch\" [ngValue]=\"br.brId\">\r\n                        {{br.brCode}}-{{br.brName}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;\">\r\n                    <button _ngcontent-hci-c8=\"\" placement=\"bottom\" ngbTooltip=\"New Holiday\"\r\n                      tooltipClass=\"my-custom-class\" class=\"btn btn-raised btn-primary\" type=\"button\"\r\n                      (click)=\"openForm()\">\r\n                      <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n                    </button>\r\n                  </div>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Holiday Calendar Year</th>\r\n                  <th>Holiday Date</th>\r\n                  <th>Holiday Name</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newHoliday\">\r\n                  <td></td>\r\n                  <td>\r\n                    <input type=\"date\" id=\"projectinput1\" class=\"form-control\" formControlName=\"holidayCalendarYear\"\r\n                      placeholder=\"Please Enter Holiday Calendar year\" name=\"holidayCalendarYear\" required\r\n                      autocomplete=\"off\" \r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.holidayCalendarYear.errors }\">\r\n                    <div *ngIf=\"submitted && f.holidayCalendarYear.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.holidayCalendarYear.errors.required\">Please Enter Holiday Calendar Year</div>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"width:30%;\">\r\n                    <input type=\"date\" id=\"projectinput1\" class=\"form-control\" formControlName=\"holidayDate\"\r\n                      placeholder=\"Please Enter State\" name=\"holidayDate\" required autocomplete=\"off\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.holidayDate.errors }\"\r\n                      onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n                    <div *ngIf=\"submitted && f.holidayDate.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.holidayDate.errors.required\">Please Enter Holiday Calendar Date</div>\r\n                    </div>\r\n                  </td>\r\n                  <td style=\"width:30%;\">\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"holidayName\"\r\n                      placeholder=\"Please Enter Holiday Name\" name=\"holidayName\" required autocomplete=\"off\"\r\n                      maxlength=\"25\" [ngClass]=\"{ 'is-invalid': submitted && f.holidayName.errors }\"\r\n                      onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n                    <div *ngIf=\"submitted && f.holidayName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.holidayName.errors.required\">Please Enter Holiday Name</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" placement=\"bottom\" ngbTooltip=\"Save\" tooltipClass=\"my-custom-class\"\r\n                      (click)=\"save()\" title=\"\"> <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" placement=\"bottom\" ngbTooltip=\"Cancel\" tooltipClass=\"my-custom-class\"\r\n                      (click)=\"cancel()\" title=\"\"><i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems ; let i = index;\" [formGroup]=\"updateHoliday\">\r\n                  <td>\r\n                    {{i+1}}\r\n                  </td>\r\n\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.holidayCalendarYear}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"number\" id=\"holidayCalendarYear\" formControlName=\"holidayCalendarYear\"\r\n                        name=\"holidayCalendarYear\" class=\"form-control\" maxlength=\"4\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f1.holidayCalendarYear.errors }\">\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.holidayDate}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"date\" id=\"holidayDate\" formControlName=\"holidayDate\" name=\"holidayDate\"\r\n                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f1.holidayDate.errors }\">\r\n                    </span>\r\n\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.holidayName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"holidayName\" formControlName=\"holidayName\" name=\"holidayName\"\r\n                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f1.holidayName.errors }\">\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editHoliday(data)\" placement=\"bottom\" ngbTooltip=\"Edit\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteHoliday(data)\" placement=\"bottom\" ngbTooltip=\"Delete\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-trash-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Update\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='Holiday' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/notification/notification.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/notification/notification.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Striped row layout section start -->\r\n<section id=\"striped-row-form-layouts\">\r\n\r\n    <div class=\"row text-left justify-content-md-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"card-title\" id=\"striped-row-layout-card-center\">Notification</h4>\r\n            <!-- <p class=\"mb-0\">Add <code>.striped-rows</code> to form tag to add striped rows. In this example centered card\r\n              is used to show the striped rows functionality.</p> -->\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"px-3\">\r\n              <form class=\"form form-horizontal form-bordered\" [formGroup]=\"NotificationForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 label-control\" for=\"eventRegInput1\">Branch Name</label>\r\n                    <div class=\"col-md-9\">\r\n                      <select  id=\"brId\" formControlName=\"brId\" name=\"brId\"\r\n                        class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.brId.errors }\">\r\n                        <option selected value=\"null\">Select Branch</option>\r\n                        <option *ngFor=\"let br of Branch\" [ngValue]=\"br.brId\">\r\n                          {{br.brCode}}-{{br.brName}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f.brId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.brId.errors.required\"> Select Branch</div>\r\n                        <div *ngIf=\"f.brId.errors.pattern\"> Select Branch</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"form-group row last\">\r\n                    <label class=\"col-md-3 label-control\">Notification Type</label>\r\n                    <div class=\"col-md-9\">\r\n                      <div class=\"input-group col-md-9\">\r\n                        <div class=\"custom-control custom-radio d-inline-block\">\r\n                          <input type=\"radio\" id=\"customRadioInline1\" value=\"PUSH\"\r\n                            class=\"custom-control-input\" formControlName=\"notificationType\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline1\">PUSH</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio d-inline-block\">\r\n                          <input type=\"radio\" id=\"customRadioInline2\" value=\"SMS\"\r\n                           class=\"custom-control-input\" formControlName=\"notificationType\">\r\n                          <label class=\"custom-control-label ml-2\" for=\"customRadioInline2\">SMS</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-3\">Branch Name</label>\r\n                    <div class=\"col-md-9\">\r\n                      <div class=\"custom-control  input-group\">\r\n                        <label class=\"container\">Banglaore <input type=\"checkbox\" id=\"branchName\" (change)=\"getValues($event.target.checked, $event.target.value)\" value=\"Banglaore\"  >\r\n                          <span class=\"checkmark\"></span> </label>\r\n                        <label class=\"container\">Delhi <input type=\"checkbox\"id=\"branchName\" (change)=\"getValues($event.target.checked, $event.target.value)\" value=\"Delhi\" >\r\n                          <span class=\"checkmark\"></span> </label>\r\n                        <label class=\"container\">Kerala <input type=\"checkbox\"id=\"branchName\" (change)=\"getValues($event.target.checked, $event.target.value)\" value=\"Kerala\" >\r\n                          <span class=\"checkmark\"></span> </label>\r\n                        <label class=\"container\">Tamil Nadu <input type=\"checkbox\" id=\"branchName\" (change)=\"getValues($event.target.checked, $event.target.value)\" value=\"Tamil Nadu\">\r\n                          <span class=\"checkmark\"></span></label>\r\n                      </div>\r\n  \r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 label-control\" for=\"eventRegInput4\">Notification Header</label>\r\n                    <div class=\"col-md-9\">\r\n                      <input type=\"text\" id=\"notificationHeader\" class=\"form-control\" placeholder=\"Notification Header\"\r\n                       formControlName=\"notificationHeader\" required name=\"notificationHeader\" maxlength=\"15\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.notificationHeader.errors }\">\r\n                        <div *ngIf=\"submitted && f.notificationHeader.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.notificationHeader.errors.required\"> Enter Notification Header</div>\r\n                          <div *ngIf=\"f.notificationHeader.errors.pattern\"> Enter Notification Header Properly</div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 label-control\" for=\"eventRegInput5\">Message</label>\r\n                    <div class=\"col-md-9\">\r\n                      <textarea class=\"form-control\" rows=\"3\" placeholder=\"Message\" id=\"notificationMessage\"\r\n                       formControlName=\"notificationMessage\" name=\"notificationMessage\" required maxlength=\"60\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && f.notificationMessage.errors }\"></textarea>\r\n                       <div *ngIf=\"submitted && f.notificationMessage.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.notificationMessage.errors.required\"> Enter Notification Message</div>\r\n                        <div *ngIf=\"f.notificationMessage.errors.pattern\"> Message length</div>\r\n                      </div>\r\n                    </div>\r\n  \r\n                  </div>\r\n  \r\n                </div>\r\n  \r\n                <div class=\"form-actions center\">\r\n                  <button type=\"reset\" (click)=\"reset()\"  class=\"btn btn-raised btn-warning mr-1\">\r\n                    <i class=\"ft-x\"></i> Cancel\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-raised btn-primary\">\r\n                    <i class=\"fa fa-check-square-o\"></i> Send\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- // Striped row layout section end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/shift/shift.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/shift/shift.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Shift</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Shift\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <!-- <th>Sl No</th> -->\r\n                  <th>Branch Name</th>\r\n                  <th>Shift Name</th>\r\n                  <th>Shift Start</th>\r\n                  <th>Shift End</th>\r\n                  <th style='padding: 8px;' colspan=\"6\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newShift\">\r\n                  <td>\r\n                    <select id=\"projectinput1\" formControlName=\"refBrId\" name=\"refBrId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refBrId.errors }\">\r\n                      <option disabled selected value=\"null\">Select Branch</option>\r\n                      <option *ngFor=\"let br of branches\" [value]=\"br.brId\">{{br.brName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refBrId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refBrId.errors.required\">Please Select Branch</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput2\" class=\"form-control\" formControlName=\"shiftName\"\r\n                      placeholder=\"Shift Name\" name=\"shiftName\" required autocomplete=\"off\" minlength=\"2\" maxlength=\"20\"\r\n                      required [ngClass]=\"{ 'is-invalid': submitted && f.shiftName.errors }\">\r\n                    <div *ngIf=\"submitted && f.shiftName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.shiftName.errors.required\">Please Enter Shift Name</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"time\" id=\"projectinput3\" data-format=\"HH:mm\" class=\"form-control\"\r\n                      formControlName=\"shiftStart\" placeholder=\"Shift Start\" name=\"shiftStart\" required\r\n                      autocomplete=\"off\" maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.shiftStart.errors }\">\r\n\r\n                    <div *ngIf=\"submitted && f.shiftStart.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.shiftStart.errors.required\">Please Enter Shift Start</div>\r\n                      <!-- <div *ngIf=\"f.shiftStart.errors.pattern\">Pattern Shift Start</div> -->\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"time\" id=\"projectinput4\" class=\"form-control\" formControlName=\"shiftEnd\"\r\n                      placeholder=\"Shift End\" name=\"shiftEnd\" required autocomplete=\"off\" maxlength=\"50\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.shiftEnd.errors }\">\r\n                    <div *ngIf=\"submitted && f.shiftEnd.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.shiftEnd.errors.required\">Please Enter Shift End</div>\r\n                      <!-- <div *ngIf=\"f.shiftEnd.errors.pattern\">Pattern Shift Start</div> -->\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" (click)=\"save()\" placement=\"bottom\" ngbTooltip=\"Save\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" (click)=\"cancel()\" placement=\"bottom\" ngbTooltip=\"Cancel\" tooltipClass=\"my-custom-class\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n\r\n\r\n                <!--- Update Shift -->\r\n\r\n                <tr *ngFor=\"let data of pageOfItems\" [formGroup]=\"updateShift\">\r\n                  <!-- <td></td> -->\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.brName}}\r\n                      <input type=\"text\" formControlName=\"shiftId\" id=\"shiftId\" hidden>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput6\" formControlName=\"refBrId\" name=\"refBrId\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f1.refBrId.errors }\">\r\n                        <option selected disabled value=\"null\">Select Branch Name</option>\r\n                        <option *ngFor=\"let branches of branches\" [value]=\"branches.brId\">{{branches.brName}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f1.refBrId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.refBrId.errors.required\">Please Select Branch Name</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.shiftName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput11\" class=\"form-control\" formControlName=\"shiftName\"\r\n                        placeholder=\"Shift Name\" name=\"shiftName\" required autocomplete=\"off\" minlength=\"2\"\r\n                        maxlength=\"20\" required [ngClass]=\"{ 'is-invalid': submitted && f1.shiftName.errors }\">\r\n                      <div *ngIf=\"submitted && f1.shiftName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.shiftName.errors.required\">Please Enter Shift Name</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.shiftStart}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"time\" id=\"projectinput11\" class=\"form-control\" formControlName=\"shiftStart\"\r\n                        placeholder=\"Shift Start\" name=\"shiftStart\" required autocomplete=\"off\" maxlength=\"50\"\r\n                        min=\"09:00\" max=\"18:00\" required\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f1.shiftStart.errors }\">\r\n                      <div *ngIf=\"submitted && f1.shiftStart.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.shiftStart.errors.required\">Please Enter Shift Start</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.shiftEnd}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"time\" id=\"projectinput11\" class=\"form-control\" formControlName=\"shiftEnd\"\r\n                        placeholder=\"Shift End\" name=\"shiftEnd\" required autocomplete=\"off\" maxlength=\"50\" min=\"09:00\"\r\n                        max=\"18:00\" required [ngClass]=\"{ 'is-invalid': submitted && f1.shiftEnd.errors }\">\r\n                      <div *ngIf=\"submitted && f1.shiftEnd.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.shiftEnd.errors.required\">Please Enter Shift End</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editShift(data)\" placement=\"bottom\" ngbTooltip=\"Edit\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteShift(data)\" placement=\"bottom\" ngbTooltip=\"Delete\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-trash-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Update\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Cancel\" tooltipClass=\"my-custom-class\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='shifts' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/view/view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/customer/view/view.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"modals\">\r\n        <div class=\"row text-left\" matchHeight=\"card\">\r\n            <!--Modal with Default options starts-->\r\n            <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body\">\r\n                            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">Modal title</h4>\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <p>One fine body mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--Modal with Default options ends-->\r\n        </div>\r\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"branchForm\" (ngSubmit)=\"submitBranch()\">\r\n  <!-- <h4 class=\"head text-center\">Please fill below details.</h4> -->\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"refBrId\">Branch</label>\r\n        <select id=\"refBrId\" name=\"refBrId\" formControlName=\"refBrId\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted1 && f1.refBrId.errors }\">\r\n          <option selected disabled value=\"null\">Select Branch</option>\r\n          <option *ngFor=\"let ct of globalBranch\" [value]=\"ct.id\">{{ct.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"submitted1 && f1.refBrId.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f1.refBrId.errors.required\">Please Select Branch</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"brFrom\">From Date</label>\r\n        <input type=\"text\" id=\"brFrom\" class=\"form-control\" formControlName=\"brFrom\" placeholder=\"YYYY-MM-DD\"\r\n          name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker #d2=\"ngbDatepicker\"\r\n          [ngClass]=\"{ 'is-invalid': submitted1 && f1.brFrom.errors }\" (click)=\"d2.toggle()\">\r\n        <div *ngIf=\"submitted1 && f1.brFrom.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f1.brFrom.errors.required\">Please Select From Date</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group text-center space-20\">\r\n    <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n      Close\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-x\"></i>\r\n      </span>\r\n    </button>\r\n    <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\">\r\n      Update\r\n      <span style=\"margin-left: 2px;\">\r\n        <i class=\"ft-check\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"deptForm\" (ngSubmit)=\"submitDept()\">\r\n  <!-- <h4 class=\"head text-center\">Please fill below details.</h4> -->\r\n  <br />\r\n  <div class=\"row\">\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"empDept\">Department</label>\r\n        <select id=\"empDept\" name=\"empDept\" formControlName=\"empDept\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted2 && f2.empDept.errors }\">\r\n          <option selected disabled value=\"null\">Select Department</option>\r\n          <option *ngFor=\"let ct of globalDepartment\" [value]=\"ct.id\">{{ct.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"submitted2 && f2.empDept.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f2.empDept.errors.required\">Please Select Department</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"empReport\">Reporting To</label>\r\n        <select id=\"empReport\" name=\"empReport\" formControlName=\"empReport\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted2 && f2.empReport.errors }\">\r\n          <option selected disabled value=\"null\">Select Reporting To</option>\r\n          <option *ngFor=\"let ct of globalReportTo\" [value]=\"ct.name\">{{ct.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"submitted2 && f2.empReport.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f2.empReport.errors.required\">Please Select Reporting To</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"deptFrom\">From Date</label>\r\n        <input type=\"text\" id=\"deptFrom\" class=\"form-control\" formControlName=\"deptFrom\" placeholder=\"YYYY-MM-DD\"\r\n          name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker #d3=\"ngbDatepicker\"\r\n          [ngClass]=\"{ 'is-invalid': submitted2 && f2.deptFrom.errors }\" (click)=\"d3.toggle()\">\r\n        <div *ngIf=\"submitted2 && f2.deptFrom.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f2.deptFrom.errors.required\">Please Select From Date</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group text-center space-20\">\r\n    <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n      Close\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-x\"></i>\r\n      </span>\r\n    </button>\r\n    <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\">\r\n      Update\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-check\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"desgForm\" (ngSubmit)=\"submitDesg()\">\r\n  <!-- <h4 class=\"head text-center\">Please fill below details.</h4> -->\r\n  <br />\r\n  <div class=\"row\">\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"empDesg\">Designation</label>\r\n        <select id=\"empDesg\" name=\"empDesg\" formControlName=\"empDesg\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted3 && f3.empDesg.errors }\">\r\n          <option selected disabled value=\"null\">Select Designation</option>\r\n          <option *ngFor=\"let ct of globalDesignation\" [value]=\"ct.id\">{{ct.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"submitted3 && f3.empDesg.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f3.empDesg.errors.required\">Please Select Designation</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"desgFrom\">From Date</label>\r\n        <input type=\"text\" id=\"desgFrom\" class=\"form-control\" formControlName=\"desgFrom\" placeholder=\"YYYY-MM-DD\"\r\n          name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker #d4=\"ngbDatepicker\"\r\n          [ngClass]=\"{ 'is-invalid': submitted3 && f3.desgFrom.errors }\" (click)=\"d4.toggle()\">\r\n        <div *ngIf=\"submitted3 && f3.desgFrom.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f3.desgFrom.errors.required\">Please Select From Date</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group text-center space-20\">\r\n    <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n      Close\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-x\"></i>\r\n      </span>\r\n    </button>\r\n    <button type=\"submit\" uiSref=\"work\" class=\"btn btn-info btn-raised\">\r\n      Update\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-check\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/employee.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/employee.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List Section starts-->\r\n<section id=\"extended\" *ngIf=\"isList\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div>\r\n            <h4 style=\"width: 41%;float: left;margin-top: 10px;\" class=\"card-title\"> Employee List </h4>\r\n\r\n          </div>\r\n          <div style=\"width: 40%;float: right;\">\r\n            <button (click)=\"openForm()\" class=\"btn btn-raised btn-info\">\r\n              Add <i class=\"ft-plus\"></i>\r\n            </button>\r\n            <input type='text' class=\"searchCust\" placeholder='Type to Search Customer'\r\n              (keyup)='updateFilter($event)' />\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Employee Name</th>\r\n                  <th>Designation</th>\r\n                  <th>Employee Type</th>\r\n                  <th>Date of Joining</th>\r\n                  <th>Branch</th>\r\n                  <th>Department</th>\r\n                  <!-- <th>Manager</th> -->\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let emp of globalEmployees; let i =index;\">\r\n                  <td>{{i + 1}}</td>\r\n                  <td>{{emp.empName}}</td>\r\n                  <td>{{emp.designationName}}</td>\r\n                  <td>{{emp.empType}}</td>\r\n                  <td>{{emp.empJoiningDate | date: 'dd-MM-yyyy'}}</td>\r\n                  <td>{{emp.brName}}</td>\r\n                  <td>{{emp.deptName}}</td>\r\n                  <!-- <td>{{emp.empMgr}}</td> -->\r\n                  <td width=\"160\">\r\n                    <a class=\"warning p-0\" data-original-title=\"\" (click)=\"viewEmployee(emp.empId)\" title=\"\">\r\n                      <i class=\"ft-eye font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"success p-0\" data-original-title=\"\" (click)=\"editEmployee(emp.empId)\" title=\"\">\r\n                      <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" data-original-title=\"\" (click)=\"deleteEmployee(emp.empId, emp.Name)\" title=\"\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- List section Ends -->\r\n\r\n<!-- Basic form layout section start -->\r\n<section id=\"ngx\" *ngIf=\"showForm\">\r\n  <div class=\"card\">\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body\">\r\n        <aw-wizard #wizard navBarLayout=\"large-empty-symbols\">\r\n          <aw-wizard-step [stepTitle]=\"'Employee Details'\"\r\n            [navigationSymbol]=\"{ symbol: '&#xf007;', fontFamily: 'FontAwesome' }\">\r\n            <form [formGroup]=\"empForm\" (ngSubmit)=\"onSubmit()\">\r\n              <h4 class=\"head text-center\">Please fill below details.</h4>\r\n              <br />\r\n              <div class='row'>\r\n                <input type=\"checkbox\" formControlName=\"mgrService\" id=\"mgrService\" hidden>\r\n                <div class='col-12'>\r\n                  <div class=\"row\">\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-control-label required\" for=\"empName\">Employee Name</label>\r\n                        <input type=\"text\" id=\"empName\" class=\"form-control\" formControlName=\"empName\"\r\n                          placeholder=\"Enter Employee Name\" name=\"empName\" required autocomplete=\"off\" maxlength=\"50\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.empName.errors }\">\r\n                        <div *ngIf=\"submitted && f.empName.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.empName.errors.required\">Please provide Employee Name</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-control-label required\" for=\"empMobile\">Mobile Number</label>\r\n                        <input type=\"tel\" formControlName=\"empMobile\" maxlength=\"10\" id=\"empMobile\" class=\"form-control\"\r\n                          placeholder=\"Enter Mobile Number\" name=\"number\" autocomplete=\"off\"\r\n                          onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 107 || event.keyCode == 187? true : false\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.empMobile.errors }\">\r\n                        <div *ngIf=\"submitted && f.empMobile.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.empMobile.errors.required\">Please provide Mobile Number</div>\r\n                          <div *ngIf=\"f.empMobile.errors.pattern\">Mobile Number should be 10 numbers</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-control-label required\" for=\"empType\">Employee Type</label>\r\n                        <select id=\"empType\" name=\"empType\" formControlName=\"empType\"\r\n                          (change)=\"selectedEmpType($event.target.value)\" class=\"form-control\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.empType.errors }\">\r\n                          <option selected disabled value=\"null\">Select Employee Type</option>\r\n                          <option *ngFor=\"let ct of globalEmpType\" [value]=\"ct.name\">{{ct.name}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.empType.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.empType.errors.required\">Please Select Employee Type</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4' *ngIf=\"showContractor\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-control-label\" for=\"empCont\">Contractor Name</label>\r\n                        <input type=\"tel\" formControlName=\"empCont\" maxlength=\"50\" id=\"empCont\" class=\"form-control\"\r\n                          placeholder=\"Enter Contractor Name\" name=\"empCont\" autocomplete=\"off\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-control-label required\" for=\"empDOJ\">Date of Joining</label>\r\n                        <input type=\"text\" id=\"empDOJ\" class=\"form-control\" formControlName=\"empDOJ\"\r\n                          placeholder=\"YYYY-MM-DD\" name=\"empDOJ\" required autocomplete=\"off\" ngbDatepicker\r\n                          #d1=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted && f.empDOJ.errors }\"\r\n                          (click)=\"d1.toggle()\">\r\n                        <div *ngIf=\"submitted && f.empDOJ.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.empDOJ.errors.required\">Please Select Date of Joining</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"d-block required\">Gender</label>\r\n                        <div class=\"input-group\">\r\n                          <div class=\"custom-control custom-radio d-inline-block float-left\">\r\n                            <input type=\"radio\" id=\"empGender1\" formControlName=\"empGender\" class=\"custom-control-input\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.empGender.errors }\" value=\"Male\">\r\n                            <label class=\"custom-control-label mr-4\" for=\"empGender1\">Male</label>\r\n                            <div *ngIf=\"submitted && f.empGender.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.empGender.errors.required\">Please Select Gender</div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"custom-control custom-radio d-inline-block ml-2\">\r\n                            <input type=\"radio\" id=\"empGender2\" formControlName=\"empGender\" class=\"custom-control-input\"\r\n                              value=\"Female\" [ngClass]=\"{ 'is-invalid': submitted && f.empGender.errors }\">\r\n                            <label class=\"custom-control-label\" for=\"empGender2\">Female</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class='col-sm-4'>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"d-block\">Is Manager/Supervisor?</label>\r\n                        <div class=\"input-group\">\r\n                          <div class=\"custom-control custom-checkbox d-inline-block\">\r\n                            <input type=\"checkbox\" id=\"empMgr\" formControlName=\"empMgr\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"empMgr\">Manager/Supervisor</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"form-group text-center\">\r\n                    <button type=\"reset\" (click)=\"closeWizard()\" class=\"btn btn-danger btn-raised mr-1\">\r\n                      Close\r\n                      <span style=\"margin-left:10px;\">\r\n                        <i class=\"ft-x\"></i>\r\n                      </span>\r\n                    </button>\r\n                    <button type=\"submit\" uiSref=\"work\" class=\"btn btn-info btn-raised\" awNextStep>\r\n                      Next\r\n                      <span style=\"margin-left:10px;\">\r\n                        <i class=\"ft-chevron-right\"></i>\r\n                      </span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step [stepTitle]=\"'Branch Details'\" [canEnter]=\"empForm.valid\"\r\n            [navigationSymbol]=\"{ symbol: '&#xf126;', fontFamily: 'FontAwesome' }\">\r\n            <form [formGroup]=\"branchForm\" (ngSubmit)=\"submitBranch()\">\r\n              <h4 class=\"head text-center\">Please fill below details.</h4>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"refBrId\">Branch</label>\r\n                    <select id=\"refBrId\" name=\"refBrId\" formControlName=\"refBrId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted1 && f1.refBrId.errors }\">\r\n                      <option selected disabled value=\"null\">Select Branch</option>\r\n                      <option *ngFor=\"let ct of globalBranch\" [value]=\"ct.id\">{{ct.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted1 && f1.refBrId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f1.refBrId.errors.required\">Please Select Branch</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"brFrom\">From Date</label>\r\n                    <input type=\"text\" id=\"brFrom\" class=\"form-control\" formControlName=\"brFrom\"\r\n                      placeholder=\"YYYY-MM-DD\" name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker\r\n                      #d2=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted1 && f1.brFrom.errors }\"\r\n                      (click)=\"d2.toggle()\">\r\n                    <div *ngIf=\"submitted1 && f1.brFrom.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f1.brFrom.errors.required\">Please Select From Date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                  <span style=\"margin-right:10px;\">\r\n                    <i class=\"ft-chevron-left\"></i>\r\n                  </span> Previous</button>\r\n                <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\" awNextStep>\r\n                  Next\r\n                  <span style=\"margin-left:10px;\">\r\n                    <i class=\"ft-chevron-right\"></i>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step [stepTitle]=\"'Department Details'\" [canEnter]=\"branchForm.valid\"\r\n            [navigationSymbol]=\"{ symbol: '&#xf1ad;', fontFamily: 'FontAwesome' }\">\r\n            <form [formGroup]=\"deptForm\" (ngSubmit)=\"submitDept()\">\r\n              <h4 class=\"head text-center\">Please fill below details.</h4>\r\n              <br />\r\n              <div class=\"row\">\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"empDept\">Department</label>\r\n                    <select id=\"empDept\" name=\"empDept\" formControlName=\"empDept\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted2 && f2.empDept.errors }\">\r\n                      <option selected disabled value=\"null\">Select Department</option>\r\n                      <option *ngFor=\"let ct of globalDepartment\" [value]=\"ct.id\">{{ct.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted2 && f2.empDept.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f2.empDept.errors.required\">Please Select Department</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"empReport\">Reporting To</label>\r\n                    <select id=\"empReport\" name=\"empReport\" formControlName=\"empReport\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted2 && f2.empReport.errors }\">\r\n                      <option selected disabled value=\"null\">Select Reporting To</option>\r\n                      <option *ngFor=\"let ct of globalReportTo\" [value]=\"ct.name\">{{ct.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted2 && f2.empReport.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f2.empReport.errors.required\">Please Select Reporting To</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"deptFrom\">From Date</label>\r\n                    <input type=\"text\" id=\"deptFrom\" class=\"form-control\" formControlName=\"deptFrom\"\r\n                      placeholder=\"YYYY-MM-DD\" name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker\r\n                      #d3=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted2 && f2.deptFrom.errors }\"\r\n                      (click)=\"d3.toggle()\">\r\n                    <div *ngIf=\"submitted2 && f2.deptFrom.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f2.deptFrom.errors.required\">Please Select From Date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                  <span style=\"margin-right:10px;\">\r\n                    <i class=\"ft-chevron-left\"></i>\r\n                  </span> Previous</button>\r\n                <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\" awNextStep>\r\n                  Next\r\n                  <span style=\"margin-left:10px;\">\r\n                    <i class=\"ft-chevron-right\"></i>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step [stepTitle]=\"'Designation Details'\" [canEnter]=\"deptForm.valid\"\r\n            [navigationSymbol]=\"{ symbol: '&#xe9d3;', fontFamily: 'Feather' }\">\r\n            <form [formGroup]=\"desgForm\" (ngSubmit)=\"submitDesg()\">\r\n              <h4 class=\"head text-center\">Please fill below details.</h4>\r\n              <br />\r\n              <div class=\"row\">\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"empDesg\">Designation</label>\r\n                    <select id=\"empDesg\" name=\"empDesg\" formControlName=\"empDesg\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted3 && f3.empDesg.errors }\">\r\n                      <option selected disabled value=\"null\">Select Designation</option>\r\n                      <option *ngFor=\"let ct of globalDesignation\" [value]=\"ct.id\">{{ct.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted3 && f3.empDesg.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f3.empDesg.errors.required\">Please Select Designation</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"desgFrom\">From Date</label>\r\n                    <input type=\"text\" id=\"desgFrom\" class=\"form-control\" formControlName=\"desgFrom\"\r\n                      placeholder=\"YYYY-MM-DD\" name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker\r\n                      #d4=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted3 && f3.desgFrom.errors }\"\r\n                      (click)=\"d4.toggle()\">\r\n                    <div *ngIf=\"submitted3 && f3.desgFrom.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f3.desgFrom.errors.required\">Please Select From Date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                  <span style=\"margin-right:10px;\">\r\n                    <i class=\"ft-chevron-left\"></i>\r\n                  </span> Previous</button>\r\n                <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\" awNextStep>\r\n                  Next\r\n                  <span style=\"margin-left:10px;\">\r\n                    <i class=\"ft-chevron-right\"></i>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step [stepTitle]=\"'Shift Details'\" [canEnter]=\"desgForm.valid\"\r\n            [navigationSymbol]=\"{ symbol: '&#xe9d3;', fontFamily: 'Feather' }\">\r\n            <form [formGroup]=\"shiftForm\" (ngSubmit)=\"submitShift()\">\r\n              <h4 class=\"head text-center\">Please fill below details.</h4>\r\n              <br />\r\n              <div class=\"row\">\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"empShift\">Shift</label>\r\n                    <select id=\"empShift\" name=\"empShift\" formControlName=\"empShift\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted4 && f4.empShift.errors }\">\r\n                      <option selected disabled value=\"null\">Select Shift</option>\r\n                      <option *ngFor=\"let ct of globalShift\" [value]=\"ct.name\">{{ct.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted4 && f4.empShift.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f4.empShift.errors.required\">Please Select Shift</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"shiftFrom\">From Date</label>\r\n                    <input type=\"text\" id=\"shiftFrom\" class=\"form-control\" formControlName=\"shiftFrom\"\r\n                      placeholder=\"YYYY-MM-DD\" name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker\r\n                      #d5=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted4 && f4.shiftFrom.errors }\"\r\n                      (click)=\"d5.toggle()\">\r\n                    <div *ngIf=\"submitted4 && f4.shiftFrom.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f4.shiftFrom.errors.required\">Please Select From Date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                  <span style=\"margin-right:10px;\">\r\n                    <i class=\"ft-chevron-left\"></i>\r\n                  </span> Previous</button>\r\n                <button uiSref=\"address\" type=\"submit\" class=\"btn btn-raised btn-info\" awNextStep>\r\n                  Next\r\n                  <span style=\"margin-left:10px;\">\r\n                    <i class=\"ft-chevron-right\"></i>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step [stepTitle]=\"'Weekly Off'\" [canEnter]=\"shiftForm.valid\"\r\n            [navigationSymbol]=\"{ symbol: '&#xf0ac;', fontFamily: 'FontAwesome' }\">\r\n            <form [formGroup]=\"weeklyoffForm\" (ngSubmit)=\"submitWeeklyOff()\">\r\n              <h4 class=\"head text-center\">Where do you live?</h4>\r\n              <br />\r\n              <div class=\"row\">\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"weekoff\">Weekly Off</label>\r\n                    <ng-multiselect-dropdown name=\"weekoff\" [placeholder]=\"'Select City'\" [data]=\"globalWeeks\"\r\n                      formControlName=\"weekoff\" [settings]=\"dropdownSettings\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted5 && f5.weekoff.errors }\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"submitted5 && f5.weekoff.errors\" class=\"invalid\">\r\n                      <div *ngIf=\"f5.weekoff.errors?.required\">Please Select Weeks</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class='col-sm-4'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label required\" for=\"offFrom\">From Date</label>\r\n                    <input type=\"text\" id=\"offFrom\" class=\"form-control\" formControlName=\"offFrom\"\r\n                      placeholder=\"YYYY-MM-DD\" name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker\r\n                      #d6=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid': submitted5 && f5.offFrom.errors }\"\r\n                      (click)=\"d6.toggle()\">\r\n                    <div *ngIf=\"submitted5 && f5.offFrom.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f5.offFrom.errors.required\">Please Select From Date</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group text-center\">\r\n                <button type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                  <span style=\"margin-right:10px;\">\r\n                    <i class=\"ft-chevron-left\"></i>\r\n                  </span> Previous</button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-success\">\r\n                  Finish\r\n                  <span style=\"margin-left:10px;\">\r\n                    <i class=\"ft-check\"></i>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n\r\n          </aw-wizard-step>\r\n        </aw-wizard>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n\r\n\r\n<!-- Update Form Layout Starts -->\r\n<section id=\"ngx\" *ngIf=\"isUpdate\">\r\n  <div class=\"card text-left\">\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body\">\r\n        <div class=\"board\">\r\n          <!-- Navigation Area (Circular Tabs) -->\r\n          <msw-navbar></msw-navbar>\r\n          <!-- End Navigation Area (Circular Tabs) -->\r\n\r\n          <!-- Content Area -->\r\n          <div class=\"tab-content\">\r\n            <!-- Nested view  -->\r\n            <router-outlet> </router-outlet>\r\n          </div>\r\n          <!-- End Content Area -->\r\n        </div>\r\n        <!-- For Debugging: show our valid formData -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Update Form Layout Ends -->\r\n\r\n\r\n<!-- Sweet Alert Starts-->\r\n<div class=\"swal2-container swal2-center swal2-fade swal2-shown\" style=\"overflow-y: auto;\" *ngIf=\"showView\">\r\n  <div aria-labelledby=\"swal2-title\" aria-describedby=\"swal2-content\" class=\"swal2-popup swal2-modal swal2-show\"\r\n    tabindex=\"-1\" role=\"dialog\" aria-live=\"assertive\" aria-modal=\"true\" style=\"display: flex;\">\r\n    <div class=\"swal2-header\">\r\n      <ul class=\"swal2-progress-steps\" style=\"display: none;\"></ul>\r\n      <div class=\"swal2-icon swal2-error\" style=\"display: none;\"><span class=\"swal2-x-mark\"><span\r\n            class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span></div>\r\n      <div class=\"swal2-icon swal2-question\" style=\"display: none;\"></div>\r\n      <div class=\"swal2-icon swal2-warning\" style=\"display: none;\"></div>\r\n      <div class=\"swal2-icon swal2-info\" style=\"display: none;\"></div>\r\n      <div class=\"swal2-icon swal2-success\" style=\"display: none;\">\r\n        <div class=\"swal2-success-circular-line-left\"></div><span class=\"swal2-success-line-tip\"></span> <span\r\n          class=\"swal2-success-line-long\"></span>\r\n        <div class=\"swal2-success-ring\"></div>\r\n        <div class=\"swal2-success-fix\"></div>\r\n        <div class=\"swal2-success-circular-line-right\"></div>\r\n      </div><img class=\"swal2-image\" style=\"display: none;\">\r\n      <h2 class=\"swal2-title\" id=\"swal2-title\" style=\"display: flex;\">Branch Details</h2><button type=\"button\"\r\n        class=\"swal2-close\" aria-label=\"Close this dialog\" style=\"display: none;\">×</button>\r\n    </div>\r\n    <pre></pre>\r\n    <pre></pre>\r\n    <div class=\"swal2-content\">\r\n      <table class=\"table table-responsive-md table-borderless\" style=\"table-layout: fixed;\">\r\n        <tbody>\r\n          <tr>\r\n            <th>Employee Name</th>\r\n            <td>XYZ</td>\r\n            <th>Mobile Number</th>\r\n            <td>9874561230</td>\r\n            <th>Employee Type</th>\r\n            <td>Manager</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody>\r\n          <tr>\r\n            <th>Gender</th>\r\n            <td>Male</td>\r\n            <th>Is Manager?</th>\r\n            <td>Yes</td>\r\n            <th>Date of Joining</th>\r\n            <td>20-10-2019</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody>\r\n          <tr>\r\n            <th>Branch</th>\r\n            <td>Lng Tech</td>\r\n            <th>Department</th>\r\n            <td>Dept 1</td>\r\n            <th>Reporting To</th>\r\n            <td>ABC</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody>\r\n          <tr>\r\n            <th>Designation</th>\r\n            <td>Desg 1</td>\r\n            <th>Shift</th>\r\n            <td>Day</td>\r\n            <th>Weekly Off</th>\r\n            <td>Sunday</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"swal2-actions\" style=\"display: flex;\"><button type=\"button\" class=\"swal2-confirm swal2-styled\"\r\n        aria-label=\"\" (click)=\"closeView()\"\r\n        style=\"display: inline-block; border-left-color: rgb(12, 194, 126); border-right-color: rgb(12, 194, 126);\">OK</button><button\r\n        type=\"button\" class=\"swal2-cancel swal2-styled\" aria-label=\"\" style=\"display: none;\">Cancel</button></div>\r\n    <div class=\"swal2-footer\" style=\"display: none;\"></div>\r\n  </div>\r\n</div>\r\n<!-- Sweet Alert Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"shiftForm\" (ngSubmit)=\"submitShift()\">\r\n  <!-- <h4 class=\"head text-center\">Please fill below details.</h4> -->\r\n  <br />\r\n  <div class=\"row\">\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"empShift\">Shift</label>\r\n        <select id=\"empShift\" name=\"empShift\" formControlName=\"empShift\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted4 && f4.empShift.errors }\">\r\n          <option selected disabled value=\"null\">Select Shift</option>\r\n          <option *ngFor=\"let ct of globalShift\" [value]=\"ct.name\">{{ct.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"submitted4 && f4.empShift.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f4.empShift.errors.required\">Please Select Shift</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"shiftFrom\">From Date</label>\r\n        <input type=\"text\" id=\"shiftFrom\" class=\"form-control\" formControlName=\"shiftFrom\" placeholder=\"YYYY-MM-DD\"\r\n          name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker #d5=\"ngbDatepicker\"\r\n          [ngClass]=\"{ 'is-invalid': submitted4 && f4.shiftFrom.errors }\" (click)=\"d5.toggle()\">\r\n        <div *ngIf=\"submitted4 && f4.shiftFrom.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f4.shiftFrom.errors.required\">Please Select From Date</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group text-center space-20\">\r\n    <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n      Close\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-x\"></i>\r\n      </span>\r\n    </button>\r\n    <button type=\"submit\" uiSref=\"work\" class=\"btn btn-info btn-raised\">\r\n      Update\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-check\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar for Wizard Starts -->\r\n<div class=\"board-inner\" id=\"status-buttons\">\r\n  <ul class=\"nav nav-tabs nav-fill\" id=\"myTab\">\r\n    <div class=\"liner\"></div>\r\n\r\n    <li class=\"active nav-item\">\r\n      <a [ngClass]=\"(page==='Personal')?'nav-link active':'nav-link'\" (click)=\"openTab('personal')\"\r\n        uiSrefActive=\"active\" uiSref=\"personal\" data-toggle=\"tab\" title=\"Employee\">\r\n        <span class=\"round-tabs one\">\r\n          <i class=\"ft-user\"></i> Employee\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Branch')?'nav-link active':'nav-link'\" (click)=\"openTab('branch')\" uiSrefActive=\"active\"\r\n        uiSref=\"branch\" data-toggle=\"tab\" title=\"Branch\">\r\n        <span class=\"round-tabs two\">\r\n          <i class=\"ft-share-2\"></i> Branch\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Department')?'nav-link active':'nav-link'\" (click)=\"openTab('department')\"\r\n        uiSrefActive=\"active\" uiSref=\"department\" data-toggle=\"tab\" title=\"Department\">\r\n        <span class=\"round-tabs three\">\r\n          <i class=\"ft-home\"></i> Department\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Designation')?'nav-link active':'nav-link'\" (click)=\"openTab('designation')\"\r\n        uiSrefActive=\"active\" uiSref=\"designation\" data-toggle=\"tab\" title=\"Designation\">\r\n        <span class=\"round-tabs three\">\r\n          <i class=\"ft-user-check\"></i> Designation\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Shift')?'nav-link active':'nav-link'\" (click)=\"openTab('shift')\" uiSrefActive=\"active\"\r\n        uiSref=\"shift\" data-toggle=\"tab\" title=\"Shift\">\r\n        <span class=\"round-tabs three\">\r\n          <i class=\"ft-sun\"></i> Shift\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Weeklyoff')?'nav-link active':'nav-link'\" (click)=\"openTab('weeklyoff')\"\r\n        uiSrefActive=\"active\" uiSref=\"weeklyoff\" data-toggle=\"tab\" title=\"Weekly off\">\r\n        <span class=\"round-tabs three\">\r\n          <i class=\"ft-user-x\"></i> Weekly off\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <!-- <li class=\"nav-item\">\r\n      <a [ngClass]=\"(page==='Result')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"result\"\r\n        data-toggle=\"tab\" title=\"completed\">\r\n        <span class=\"round-tabs four\">\r\n          <i class=\"ft-airplay\"></i>\r\n        </span>\r\n      </a>\r\n    </li> -->\r\n  </ul>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n<!-- Navbar for Wizard Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/personal/personal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/personal/personal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"empForm\" (ngSubmit)=\"onSubmit()\">\r\n  <!-- <h4 class=\"head text-center\">Please fill below details.</h4> -->\r\n  <br />\r\n  <div class='row'>\r\n    <input type=\"checkbox\" formControlName=\"mgrService\" id=\"mgrService\" hidden>\r\n    <div class='col-12'>\r\n      <div class=\"row\">\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label required\" for=\"empName\">Employee Name</label>\r\n            <input type=\"text\" id=\"empName\" class=\"form-control\" formControlName=\"empName\"\r\n              placeholder=\"Enter Employee Name\" name=\"empName\" required autocomplete=\"off\" maxlength=\"50\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.empName.errors }\">\r\n            <div *ngIf=\"submitted && f.empName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.empName.errors.required\">Please provide Employee Name</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label required\" for=\"empMobile\">Mobile Number</label>\r\n            <input type=\"tel\" formControlName=\"empMobile\" maxlength=\"10\" id=\"empMobile\" class=\"form-control\"\r\n              placeholder=\"Enter Mobile Number\" name=\"number\" autocomplete=\"off\"\r\n              onkeydown=\"javascript: return (event.keyCode >= 8 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 107 || event.keyCode == 187? true : false\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.empMobile.errors }\">\r\n            <div *ngIf=\"submitted && f.empMobile.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.empMobile.errors.required\">Please provide Mobile Number</div>\r\n              <div *ngIf=\"f.empMobile.errors.pattern\">Mobile Number should be 10 numbers</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label required\" for=\"empType\">Employee Type</label>\r\n            <select id=\"empType\" name=\"empType\" formControlName=\"empType\"\r\n              (change)=\"selectedEmpType($event.target.value)\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.empType.errors }\">\r\n              <option selected disabled value=\"null\">Select Employee Type</option>\r\n              <option *ngFor=\"let ct of globalEmpType\" [value]=\"ct.name\">{{ct.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.empType.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.empType.errors.required\">Please Select Employee Type</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4' *ngIf=\"showContractor\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\" for=\"empCont\">Contractor Name</label>\r\n            <input type=\"tel\" formControlName=\"empCont\" maxlength=\"50\" id=\"empCont\" class=\"form-control\"\r\n              placeholder=\"Enter Contractor Name\" name=\"empCont\" autocomplete=\"off\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label required\" for=\"empDOJ\">Date of Joining</label>\r\n            <input type=\"text\" id=\"empDOJ\" class=\"form-control\" formControlName=\"empDOJ\" placeholder=\"YYYY-MM-DD\"\r\n              name=\"empDOJ\" required autocomplete=\"off\" ngbDatepicker #d1=\"ngbDatepicker\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.empDOJ.errors }\" (click)=\"d1.toggle()\">\r\n            <div *ngIf=\"submitted && f.empDOJ.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.empDOJ.errors.required\">Please Select Date of Joining</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"d-block required\">Gender</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-control custom-radio d-inline-block float-left\">\r\n                <input type=\"radio\" id=\"empGender1\" formControlName=\"empGender\" class=\"custom-control-input\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.empGender.errors }\" value=\"Male\">\r\n                <label class=\"custom-control-label mr-4\" for=\"empGender1\">Male</label>\r\n                <div *ngIf=\"submitted && f.empGender.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.empGender.errors.required\">Please Select Gender</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"custom-control custom-radio d-inline-block ml-2\">\r\n                <input type=\"radio\" id=\"empGender2\" formControlName=\"empGender\" class=\"custom-control-input\"\r\n                  value=\"Female\" [ngClass]=\"{ 'is-invalid': submitted && f.empGender.errors }\">\r\n                <label class=\"custom-control-label\" for=\"empGender2\">Female</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class='col-sm-4'>\r\n          <div class=\"form-group\">\r\n            <label class=\"d-block\">Is Manager/Supervisor?</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-control custom-checkbox d-inline-block\">\r\n                <input type=\"checkbox\" id=\"empMgr\" formControlName=\"empMgr\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"empMgr\">Manager/Supervisor</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group text-center\">\r\n        <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n          Close\r\n          <span style=\"margin-left:2px;\">\r\n            <i class=\"ft-x\"></i>\r\n          </span>\r\n        </button>\r\n        <button type=\"submit\" uiSref=\"work\" class=\"btn btn-info btn-raised\">\r\n          Update\r\n          <span style=\"margin-left:2px;\">\r\n            <i class=\"ft-check\"></i>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"weeklyoffForm\" (ngSubmit)=\"submitWeeklyOff()\">\r\n  <!-- <h4 class=\"head text-center\">Where do you live?</h4> -->\r\n  <br />\r\n  <div class=\"row\">\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"weekoff\">Weekly Off</label>\r\n        <ng-multiselect-dropdown name=\"weekoff\" [placeholder]=\"'Select City'\" [data]=\"globalWeeks\"\r\n          formControlName=\"weekoff\" [settings]=\"dropdownSettings\"\r\n          [ngClass]=\"{ 'is-invalid': submitted5 && f5.weekoff.errors }\">\r\n        </ng-multiselect-dropdown>\r\n        <div *ngIf=\"submitted5 && f5.weekoff.errors\" class=\"invalid\">\r\n          <div *ngIf=\"f5.weekoff.errors?.required\">Please Select Weeks</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-sm-4'>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label required\" for=\"offFrom\">From Date</label>\r\n        <input type=\"text\" id=\"offFrom\" class=\"form-control\" formControlName=\"offFrom\" placeholder=\"YYYY-MM-DD\"\r\n          name=\"brFrom\" required autocomplete=\"off\" ngbDatepicker #d6=\"ngbDatepicker\"\r\n          [ngClass]=\"{ 'is-invalid': submitted5 && f5.offFrom.errors }\" (click)=\"d6.toggle()\">\r\n        <div *ngIf=\"submitted5 && f5.offFrom.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f5.offFrom.errors.required\">Please Select From Date</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group text-center\">\r\n    <button type=\"reset\" (click)=\"close()\" class=\"btn btn-danger btn-raised mr-1\">\r\n      Close\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-x\"></i>\r\n      </span>\r\n    </button>\r\n    <button type=\"submit\" uiSref=\"work\" class=\"btn btn-info btn-raised\">\r\n      Update\r\n      <span style=\"margin-left:2px;\">\r\n        <i class=\"ft-check\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/industry/industry.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/industry/industry.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Industry</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New Industry\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Industry</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newIndustry\">\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"industryId\"\r\n                      placeholder=\"\" name=\"industryId\" autocomplete=\"off\" maxlength=\"50\" hidden>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"industryName\"\r\n                      placeholder=\"Please Enter Industry name\" name=\"industryName\" required autocomplete=\"off\"\r\n                      maxlength=\"20\" [ngClass]=\"{ 'is-invalid': submitted && f.industryName.errors }\"\r\n                      onkeydown=\"javascript:return (event.keyCode >= 8 && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) || event.keyCode == 189 ? true : false\">\r\n                    <div *ngIf=\"submitted && f.industryName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.industryName.errors.required\">Please Enter Industry</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" (click)=\"save()\" placement=\"bottom\" tooltipClass=\"my-custom-class\"\r\n                      ngbTooltip=\"Save\">\r\n                      <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" (click)=\"cancel()\" placement=\"bottom\" tooltipClass=\"my-custom-class\"\r\n                      ngbTooltip=\"Cancel\">\r\n                      <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems; let i = index;\" [formGroup]=\"updateIndustry\">\r\n                  <td>\r\n                    {{i+1}}\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"industryId\"\r\n                      name=\"industryId\" autocomplete=\"off\" hidden>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.industryName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"industryName\"\r\n                        name=\"Please Enter Industry Name\" required autocomplete=\"off\" maxlength=\"20\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.industryName.errors }\"\r\n                        onkeydown=\"javascript:return (event.keyCode >= 8 && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) || event.keyCode == 189 ? true : false\">\r\n                      <div *ngIf=\"submitted1 && f1.industryName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.industryName.errors.required\">Please Provide Industry Name</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editIndustry(data)\" placement=\"bottom\"\r\n                        tooltipClass=\"my-custom-class\" ngbTooltip=\"Edit\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteIndustry(data)\" placement=\"bottom\"\r\n                        tooltipClass=\"my-custom-class\" ngbTooltip=\"Delete\">\r\n                        <i class=\"ft-trash-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\"\r\n                        tooltipClass=\"my-custom-class\" ngbTooltip=\"Update\"> <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\"\r\n                        tooltipClass=\"my-custom-class\" ngbTooltip=\"Cancel\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='industries' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/state/state.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/masters/state/state.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Confirm Action Starts-->\r\n<section id=\"action\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">State</h4>\r\n          <div _ngcontent-hci-c8=\"\" class=\"form-actions top\" style=\"float:right;margin-top: -30px;\">\r\n            <button _ngcontent-hci-c8=\"\" class=\"btn btn-raised btn-primary\" type=\"button\" (click)=\"openForm()\"\r\n              placement=\"bottom\" ngbTooltip=\"New State\" tooltipClass=\"my-custom-class\">\r\n              <i _ngcontent-hci-c8=\"\" class=\"fa fa-check-square-o\"></i> New\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl No</th>\r\n                  <th>Country</th>\r\n                  <th>State</th>\r\n                  <th colspan=\"2\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"showNew\" [formGroup]=\"newState\">\r\n                  <td></td>\r\n                  <td>\r\n                    <select id=\"projectinput6\" formControlName=\"refCountryId\" name=\"refCountryId\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.refCountryId.errors }\">\r\n                      <option selected disabled value=\"null\">Please Select Country</option>\r\n                      <option *ngFor=\"let ct of countries\" [value]=\"ct.countryId\">{{ct.countryName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.refCountryId.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.refCountryId.errors.required\">Please Select Country</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"stateName\"\r\n                      placeholder=\"Please Enter State\" name=\"state\" required autocomplete=\"off\" maxlength=\"25\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.stateName.errors }\"\r\n                      onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n                    <div *ngIf=\"submitted && f.stateName.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.stateName.errors.required\">Please Provide State</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"success p-0\" placement=\"bottom\" ngbTooltip=\"Save\" tooltipClass=\"my-custom-class\"\r\n                      (click)=\"save()\" title=\"\"> <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" placement=\"bottom\" ngbTooltip=\"Cancel\" tooltipClass=\"my-custom-class\"\r\n                      (click)=\"cancel()\" title=\"\"><i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of pageOfItems ; let i = index;\" [formGroup]=\"updateState\">\r\n                  <td>\r\n                    {{i+1}}\r\n                    <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"stateId\"\r\n                      placeholder=\"Serial Number\" name=\"slno\" required autocomplete=\"off\" hidden>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.countryName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <select id=\"projectinput6\" formControlName=\"refCountryId\" name=\"country\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.refCountryId.errors }\">\r\n                        <option value=\"none\" selected disabled value=\"null\">Please Select Country</option>\r\n                        <option *ngFor=\"let ct of countries\" [value]=\"ct.countryId\">{{ct.countryName}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted1 && f1.refCountryId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.refCountryId.errors.required\">Please Select Country</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      {{data.stateName}}\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"stateName\"\r\n                        placeholder=\"Please Enter State\" name=\"stateName\" required autocomplete=\"off\" maxlength=\"25\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted1 && f1.stateName.errors }\"\r\n                        onkeydown=\"javascript:return (event.keyCode >= 8   && event.keyCode<=46) || (event.keyCode >= 65 && event.keyCode<=90) ||  event.keyCode==32  ? true : false\">\r\n                      <div *ngIf=\"submitted1 && f1.stateName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f1.stateName.errors.required\">Please Enter State</div>\r\n                      </div>\r\n                    </span>\r\n                  </td>\r\n                  <td width=\"160\">\r\n                    <span [hidden]=\"data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"editState(data)\" placement=\"bottom\" ngbTooltip=\"Edit\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"deleteState(data)\" placement=\"bottom\" ngbTooltip=\"Delete\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-trash-2 font-medium-3\"></i>\r\n                      </a>\r\n                    </span>\r\n                    <span [hidden]=\"!data.showUpdate\">\r\n                      <a class=\"success p-0\" (click)=\"saveUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Update\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-check font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                      <a class=\"danger p-0\" (click)=\"cancelUpdate(data)\" placement=\"bottom\" ngbTooltip=\"Cancel\"\r\n                        tooltipClass=\"my-custom-class\" title=\"\">\r\n                        <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"card-footer pb-0 pt-3\">\r\n              <jw-pagination [items]='states' (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Confirm Action Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/sadmin.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/superadmin/sadmin.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--User Profile Starts-->\r\n<!--Basic User Details Starts-->\r\n<section id=\"user-profile\" *ngIf=\"custId !== 0\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card profile-with-cover\">\r\n                <div class=\"card-img-top img-fluid bg-cover height-300\" style=\"background: url('assets/img/photos/14.jpg') 50%;\"></div>\r\n                <div class=\"media profil-cover-details row\">\r\n                    <div class=\"col-5\">\r\n                        <div class=\"align-self-start halfway-fab pl-3 pt-2\">\r\n                            <div class=\"text-left\">\r\n                                <h3 class=\"card-title white\">Jose Diaz</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                        <div class=\"align-self-center halfway-fab text-center\">\r\n                            <a class=\"profile-image\">\r\n                                <img src=\"assets/img/portrait/avatars/avatar-08.png\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5\">                        \r\n                    </div>                    \r\n                </div>\r\n                \r\n                <div class=\"profile-section\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-5 col-md-5 \">\r\n                            <!-- <ul class=\"profile-menu no-list-style\">\r\n                                <li>\r\n                                    <a (click)=\"showPage('About')\" [ngClass]=\"currentPage === 'About' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">About</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a (click)=\"showPage('TimeLine')\" [ngClass]=\"currentPage === 'TimeLine' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">Timeline</a>\r\n                                </li>\r\n                            </ul> -->\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 text-center\">\r\n                            <span class=\"font-medium-2 text-uppercase\">Jose Diaz</span>\r\n                            <p class=\"grey font-small-2\">Company name</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-5\">\r\n                            <!-- <ul class=\"profile-menu no-list-style\">\r\n                                <li>\r\n                                    <a (click)=\"showPage('Friends')\" [ngClass]=\"currentPage === 'Friends' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">Friends</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a (click)=\"showPage('Photos')\" [ngClass]=\"currentPage === 'Photos' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">Photos</a>\r\n                                </li>\r\n                            </ul>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic User Details Ends-->\r\n\r\n<!--About section starts-->\r\n<section id=\"about\" *ngIf=\"custId != 0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Personal Information</h5>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-present font-small-3\"></i> Birthday:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">June 10th, 1988</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> Birthplace:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">New Jersey, USA</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Lives in:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">Denver, USA</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Gender:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">Male</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> Email:</a></span>\r\n                                        <a class=\"d-block overflow-hidden\">jose@yourmail.com</a>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> Website:</a></span>\r\n                                        <a class=\"d-block overflow-hidden\">pixinvent.com</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> Phone Number:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">(012) 345 - 678 - 9910</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> Occupation:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">Ninja Developer</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> Joined:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">April 1st, 2012</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</section>\r\n<!--About section ends-->\r\n<!--User Profile Starts-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper p-0\" [dir]=\"direction\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  #wrapper\r\n  class=\"wrapper\"\r\n  [ngClass]=\"{\r\n    'nav-collapsed': iscollapsed,\r\n    'menu-collapsed': iscollapsed,\r\n    'sidebar-sm': isSidebar_sm,\r\n    'sidebar-lg': isSidebar_lg\r\n  }\"\r\n  [dir]=\"options.direction\"\r\n>\r\n  <div\r\n    #appSidebar\r\n    appSidebar\r\n    class=\"app-sidebar\"\r\n    (toggleHideSidebar)=\"toggleHideSidebar($event)\"\r\n    [ngClass]=\"{ 'hide-sidebar': hideSidebar }\"\r\n    data-active-color=\"white\"\r\n    [attr.data-background-color]=\"bgColor\"\r\n    [attr.data-image]=\"bgImage\"\r\n  >\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"sidebar-background\" #sidebarBgImage></div>\r\n  </div>\r\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\r\n  <div class=\"main-panel\">\r\n    <div class=\"main-content\">\r\n      <div class=\"content-wrapper\">\r\n        <div class=\"container-fluid\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n  <app-notification-sidebar></app-notification-sidebar>\r\n  <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/changepassword/changepassword.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/changepassword/changepassword.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh m-0\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body login-img\">\r\n                            <div class=\"row m-0\">\r\n                                <div class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\">\r\n                                    <img src=\"./assets/img/gallery/change2.jpg\" alt=\"\" class=\"img-fluid mt-5\"\r\n                                        width=\"400\" height=\"230\" />\r\n                                </div>\r\n                                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                                    <h4 class=\"card-title mb-2\">Change Password</h4>\r\n\r\n                                    <form [formGroup]=\"regularForm\" (ngSubmit)=\"onSubmit()\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"userName\"></label>\r\n                                            <input type=\"text\" class=\"form-control mb-3\" formControlName=\"userName\"\r\n                                                required placeholder=\"Username\" maxlength=\"20\" autocomplete=\"off\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.userName.errors.required\">Username is required</div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"oldPassword\"></label>\r\n                                            <input type=\"password\" class=\"form-control mb-3\" id=\"oldPassword\"\r\n                                                formControlName=\"oldPassword\" required placeholder=\"Old Password\"\r\n                                                maxlength=\"20\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.oldPassword.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.oldPassword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.oldPassword.errors.required\">Old Password is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"newPassword\"></label>\r\n                                            <input type=\"password\" class=\"form-control mb-3\" id=\"newPassword\"\r\n                                                formControlName=\"newPassword\" required placeholder=\"New Password\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.newPassword.errors.required\">New Password is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"confirmPassword\"></label>\r\n                                            <input type=\"password\" class=\"form-control mb-3\" id=\"confirmPassword\"\r\n                                                formControlName=\"confirmPassword\" required\r\n                                                placeholder=\"Confirm Password\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is\r\n                                                    required</div>\r\n                                            </div>\r\n                                            <small class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"regularForm.value.newPassword != regularForm.value.confirmPassword\">\r\n                                                New Password and Confirm Password does not match\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"fg-actions d-flex justify-content-between\">\r\n                                             <div class=\"recover-pass\">\r\n                                                <button class=\"btn btn-danger\">\r\n                                                    <a [routerLink]=\"['/login']\"\r\n                                                        class=\"text-decoration-none text-white\">Back To Login</a>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"login-btn\">\r\n                                                <button class=\"btn btn-primary text-white\" type=\"submit\" style=\"color: white !important;\">Change</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr class=\"m-0\" />\r\n                                    </form>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forgotpassword/forgotpassword.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forgotpassword/forgotpassword.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\r\n<section id=\"forgot-password\">\r\n    <div class=\"container-fluid forgot-password-bg\">\r\n        <div class=\"row full-height-vh m-0  d-flex align-items-center justify-content-center\">\r\n            <div class=\"col-md-7 col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body fg-image\">\r\n                            <form [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\r\n                                    <div class=\"row m-0\">\r\n                                            <div class=\"col-lg-6 d-none d-lg-block text-center py-3\">\r\n                                                <img src=\"./assets/img/gallery/forgot2.png\" alt=\"\" class=\"img-fluid\"\r\n                                                    width=\"300\" height=\"230\" />\r\n                                            </div>\r\n                                                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                                                    <h4 class=\"card-title mb-2\">Recover Password</h4>\r\n                                                    <p class=\"card-text mb-3\">\r\n                                                        Please enter your User Id and Password will be sent to Your Registered\r\n                                                        Mobile\r\n                                                        Number.\r\n                                                    </p>\r\n                                                    <input type=\"text\" class=\"form-control mb-3\" placeholder=\"User name\" formControlName=\"userName\" \r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\r\n                                                    <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"f.userName.errors.required\">Username is required</div>\r\n                                                    </div>\r\n                                                    \r\n                                                    <div class=\"fg-actions d-flex justify-content-between\">\r\n                                                        <div class=\"login-btn\">\r\n                                                            <button class=\"btn btn-danger\">\r\n                                                                <a class=\"text-decoration-none text-white\" [routerLink]=\"['/login']\">Back To\r\n                                                                    Login</a>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                        <div class=\"recover-pass\">\r\n                                                            <button class=\"btn btn-primary\" type=\"submit\">\r\n                                                                    <a class=\"text-decoration-none text-white\">Recover</a>\r\n                                                                </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                        </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Forgot Password Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner [threshold]=\"1000\" [template]=\"template\" [loadingText]=\"'Please wait...'\" [zIndex]=\"999\" ></ng4-loading-spinner>\r\n\r\n<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh m-0\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <div class=\"card-title text-center\">\r\n                            <h4 class=\"card-title mb-2 text-primary\">Welcome to Attendance System</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body login-img\">\r\n                            <div class=\"row m-0\">\r\n                                <div class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\">\r\n                                    <img src=\"./assets/img/gallery/login.png\" alt=\"\" class=\"img-fluid mt-5\"\r\n                                        width=\"400\" height=\"230\" />\r\n                                </div>\r\n\r\n                                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                                    <h4 class=\"card-title mb-2\">Login</h4>\r\n                                    <p class=\"card-text mb-3\">\r\n                                        Welcome, please login to your account.\r\n                                    </p>\r\n\r\n                                    <form [formGroup]=\"myLogin\" (ngSubmit)=\"onSubmit()\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\"></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input type=\"text\" class=\"form-control mb-3\" formControlName=\"username\"\r\n                                                    placeholder=\"Username\" autocomplete=\"off\" maxlength=\"20\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                                                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                                                </div>\r\n\r\n                                                <div class=\"form-control-position\">\r\n                                                    <i class=\"ft-user\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password\"></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input type=\"password\" class=\"form-control mb-1\"\r\n                                                    formControlName=\"password\" placeholder=\"Password\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n\r\n                                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                                </div>\r\n                                                <div class=\"form-control-position\">\r\n                                                    <i class=\" ft-lock\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                                <div class=\"recover-pass mt-6 text-right\">\r\n                                                    <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">\r\n                                                        <a class=\"text-decoration-none text-white\">Login</a>\r\n                                                    </button>\r\n                                                    <!-- <div>\r\n                                                        <h2>Hello {{name}}</h2>\r\n                                                        <button type=\"button\" (click)=\"startLoadingSpinner()\">Start Loading</button>\r\n                                                    </div> -->\r\n                                                    <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                                                        <div>Invalid Credentials</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"fg-actions d-flex justify-content-between mt-6\" style=\"margin-top:-8% !important;\">\r\n                                                <div class=\"d-flex justify-content-between mt-6\">\r\n                                                    <div class=\"change-password-option mb-3\">\r\n                                                        <a [routerLink]=\"['/changepassword']\"\r\n                                                            class=\"text-decoration-none text-primary\">Change\r\n                                                            Password?\r\n                                                        </a>\r\n                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                    <div class=\"forgot-password-option mb-3\">\r\n                                                        <a [routerLink]=\"['/forgotpassword']\"\r\n                                                            class=\"text-decoration-none text-primary\">Forgot Password?</a>\r\n                                                    </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        \r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{ message }}\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" style=\"color: white !important;\">{{ btnCancelText }}</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\" style=\"color: white !important;\">{{ btnOkText }}</button>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/customizer/customizer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\r\n<div #customizer class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\" [ngClass]=\"{open: isOpen}\">\r\n  <a class=\"customizer-close\" (click)=\"closeCustomizer()\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\" (click)=\"toggleCustomizer()\">\r\n    <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\r\n  </a>\r\n  <div [perfectScrollbar] class=\"customizer-content p-3 ps-container ps-theme-dark text-left\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\r\n    <h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\r\n    <p>Customize &amp; Preview in Real Time</p>\r\n    <hr>\r\n\r\n    <!-- Layout Options-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Layout Options</h6>\r\n    <div class=\"layout-switch ml-4\">\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline light-layout\">\r\n        <input class=\"custom-control-input\" id=\"ll-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Light'\"  (click)=\"onLightLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"ll-switch\">Light</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline dark-layout\">\r\n        <input class=\"custom-control-input\" id=\"dl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Dark'\" (click)=\"onDarkLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"dl-switch\">Dark</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline transparent-layout\">\r\n        <input class=\"custom-control-input\" id=\"tl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Transparent'\" (click)=\"onTransparentLayout()\" />\r\n        <label class=\"custom-control-label\" for=\"tl-switch\">Transparent</label>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n\r\n    <!-- Sidebar Options Starts-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-options\">Sidebar Color Options</h6>\r\n    <div class=\"cz-bg-color sb-color-options\">\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"pomegranate\" [ngClass]=\"{'selected': selectedBgColor === 'pomegranate'}\" (click)=\"changeSidebarBgColor('pomegranate')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"king-yna\" [ngClass]=\"{'selected': selectedBgColor === 'king-yna'}\" (click)=\"changeSidebarBgColor('king-yna')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"ibiza-sunset\" [ngClass]=\"{'selected': selectedBgColor === 'ibiza-sunset'}\" (click)=\"changeSidebarBgColor('ibiza-sunset')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"flickr\" [ngClass]=\"{'selected': selectedBgColor === 'flickr'}\" (click)=\"changeSidebarBgColor('flickr')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"purple-bliss\" [ngClass]=\"{'selected': selectedBgColor === 'purple-bliss'}\" (click)=\"changeSidebarBgColor('purple-bliss')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"man-of-steel\" [ngClass]=\"{'selected': selectedBgColor === 'man-of-steel'}\" (click)=\"changeSidebarBgColor('man-of-steel')\"></span></div>\r\n        <div class=\"col\"><span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"purple-love\" [ngClass]=\"{'selected': selectedBgColor === 'purple-love'}\" (click)=\"changeSidebarBgColor('purple-love')\"></span></div>\r\n      </div>\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\" [ngClass]=\"{'selected': selectedBgColor === 'black'}\" (click)=\"changeSidebarBgColor('black')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\" [ngClass]=\"{'selected': selectedBgColor === 'white'}\" (click)=\"changeSidebarBgColor('white')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\" [ngClass]=\"{'selected': selectedBgColor === 'primary'}\" (click)=\"changeSidebarBgColor('primary')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\" [ngClass]=\"{'selected': selectedBgColor === 'success'}\" (click)=\"changeSidebarBgColor('success')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\" [ngClass]=\"{'selected': selectedBgColor === 'warning'}\" (click)=\"changeSidebarBgColor('warning')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\" [ngClass]=\"{'selected': selectedBgColor === 'info'}\" (click)=\"changeSidebarBgColor('info')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\" [ngClass]=\"{'selected': selectedBgColor === 'danger'}\" (click)=\"changeSidebarBgColor('danger')\"></span></div>\r\n      </div>\r\n    </div>\r\n    <!-- Sidebar Options Ends-->\r\n    <!-- Transparent Layout Bg color Options-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none\">Background Colors</h6>\r\n    <div class=\"cz-tl-bg-color d-none\">\r\n      <div class=\"row p-1\">\r\n        <div class=\"col\"><span class=\"bg-hibiscus d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-hibiscus\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-hibiscus'}\" (click)=\"changeSidebarTLBgColor('bg-hibiscus')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-purple-pizzazz d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-purple-pizzazz\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-purple-pizzazz'}\" (click)=\"changeSidebarTLBgColor('bg-purple-pizzazz')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-blue-lagoon d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-blue-lagoon\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-blue-lagoon'}\" (click)=\"changeSidebarTLBgColor('bg-blue-lagoon')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-electric-violet d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n            data-bg-color=\"bg-electric-violet\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-electric-violet'}\" (click)=\"changeSidebarTLBgColor('bg-electric-violet')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-portage d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-portage\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-portage'}\" (click)=\"changeSidebarTLBgColor('bg-portage')\"></span></div>\r\n        <div class=\"col\"><span class=\"bg-tundora d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-tundora\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-tundora'}\" (click)=\"changeSidebarTLBgColor('bg-tundora')\"></span></div>\r\n      </div>\r\n    </div>\r\n    <!-- Transparent Layout Bg color Ends-->\r\n    <hr />\r\n    <!--Sidebar BG Image Starts-->\r\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-bg-img\">Sidebar Bg Image</h6>\r\n    <div class=\"cz-bg-image row sb-bg-img\">\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/01.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/01.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/01.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/02.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/02.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/02.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/03.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/03.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/03.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/04.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/04.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/04.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/05.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/05.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/05.jpg')\" /></div>\r\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/06.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/06.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/06.jpg')\" /></div>\r\n    </div>\r\n    <!-- Transparent BG Image Ends-->\r\n    <div class=\"tl-bg-img d-none\">\r\n      <h6 class=\"text-center text-bold-500 text-uppercase\">Background Images</h6>\r\n      <div class=\"cz-tl-bg-image row\">\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-1\" src=\"assets/img/gallery/bg-glass-1.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-1.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-1.jpg', 'bg-glass-1')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-2\" src=\"assets/img/gallery/bg-glass-2.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-2.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-2.jpg', 'bg-glass-2')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-3\" src=\"assets/img/gallery/bg-glass-3.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-3.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-3.jpg', 'bg-glass-3')\" /></div>\r\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-4\" src=\"assets/img/gallery/bg-glass-4.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-4.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-4.jpg', 'bg-glass-4')\" /></div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr />\r\n    <!-- Transparent BG Image Ends-->\r\n    <!--Sidebar BG Image Ends-->\r\n\r\n    <!--Sidebar BG Image Toggle Starts-->\r\n    <div class=\"togglebutton toggle-sb-bg-img\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>Sidebar Bg Image</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked id=\"sidebar-bg-img\" (change)=\"bgImageDisplay($event)\">\r\n            <label class=\"custom-control-label d-block\" for=\"sidebar-bg-img\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    <!--Sidebar BG Image Toggle Ends-->\r\n\r\n    <!--Compact Menu Starts-->\r\n    <div class=\"togglebutton\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>Compact Menu</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" [checked]=\"config.layout.sidebar.collapsed\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\" (change)=\"toggleCompactMenu($event)\">\r\n            <label class=\"custom-control-label d-block\" for=\"cz-compact-menu\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Compact Menu Ends-->\r\n    <hr>\r\n\r\n    <!--RTL Starts-->\r\n    <div class=\"togglebutton\">\r\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\r\n        <span>RTL</span>\r\n        <div class=\"float-right\">\r\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" [checked]=\"options.direction == 'rtl' ? 'checked' : false\" class=\"custom-control-input cz-rtl\"\r\n              id=\"cz-rtl\" (change)=\"options.direction = (options.direction == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\">\r\n            <label class=\"custom-control-label d-block\" for=\"cz-rtl\"></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--RTL Ends-->\r\n    <hr>\r\n\r\n    <!--Sidebar Width Starts-->\r\n    <div>\r\n      <label for=\"cz-sidebar-width\">Sidebar Width</label>\r\n      <select id=\"cz-sidebar-width\" #width class=\"custom-select cz-sidebar-width float-right\" (change)=\"changeSidebarWidth(width.value)\">\r\n        <option value=\"sidebar-sm\" [selected] = \"size === 'sidebar-sm'\">Small</option>\r\n        <option value=\"sidebar-md\" [selected] = \"size === 'sidebar-md'\">Medium</option>\r\n        <option value=\"sidebar-lg\" [selected] = \"size === 'sidebar-lg'\">Large</option>\r\n      </select>\r\n    </div>\r\n    <!--Sidebar Width Ends-->\r\n  </div>\r\n</div>\r\n<!--Theme customizer Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n                Copyright  &copy;2019 <a id=\"pixinventLink\" href=\"http://www.lngtechnologies.in/\">LNG Technologies Ltd.</a>, All rights reserved.          \r\n        </p>\r\n        \r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>\r\n            <!-- <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\r\n                <div class=\"position-relative has-icon-right\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                    <div class=\"form-control-position\">\r\n                        <i class=\"ft-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </form> -->\r\n            <div class=\"position-relative has-icon-right\" *ngIf=\"superAdmin === 'true'\" >\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-12 label-control\">Switch to customer admin</label>\r\n                    <div class=\"col-md-12\">\r\n                        <select class=\"form-control\" (change)=\"changeCustAdminMode($event)\" [(ngModel)]=\"custId\">\r\n                            <option value=\"0\">Super admin</option>\r\n                            <option *ngFor=\"let item of customers\"  value=\"{{item.custId}}\">{{item.custName}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <!-- <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                <div class=\"form-control-position\">\r\n                    <i class=\"ft-search\"></i>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n                <ul class=\"navbar-nav\">\r\n                    <!-- <li class=\"nav-item mr-2  d-none d-lg-block\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\r\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Language</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang text-left\">                           \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\r\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\r\n                                <span>English</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\r\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\r\n                                <span>Spanish</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\r\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\r\n                                <span>Portuguese</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\r\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\r\n                                <span>German</span>\r\n                            </a>                            \r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\r\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\r\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\r\n                            <p class=\"d-none\">Notifications</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\r\n                            <div class=\"noti-list\" [perfectScrollbar]>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3\">\r\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\r\n                                    </span>\r\n                                </a>\r\n                            </div>\r\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\r\n                        </div>\r\n                    </li> -->\r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                             Welcome {{loginName}}, {{custAdminName}}\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \r\n                            <!-- <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a> -->\r\n                            <!-- <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\r\n                                <i class=\"ft-mail mr-2\"></i>\r\n                                <span>My Inbox</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\r\n                                <i class=\"ft-settings mr-2\"></i>\r\n                                <span>Settings</span>\r\n                            </a> -->\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" (click)=\"logout()\" >\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <!-- <li class=\"nav-item d-none d-lg-block\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\r\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li> -->\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\" style=\"display: none !important;\">\r\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\r\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                    <li class=\"timeline-line\"></li>\r\n                    <li class=\"timeline-item text-left text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new\r\n                          equipments for zonal office.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA\r\n                          will be on 15th August 2015.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\r\n                          voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\r\n                          at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\r\n                          voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\r\n                          at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\r\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\r\n                <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a>\r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\r\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"notifications1\">\r\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"recent-activity1\">\r\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch  d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"notifications2\">\r\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\"\r\n                              id=\"recent-activity2\">\r\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-emails\">\r\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch d-flex justify-content-between w-100\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"notification-cb\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-stats\">\r\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img [src]=\"logoUrl\" *ngIf=\"showDefaultLogo === true\" />\r\n                <img *ngIf=\"showDefaultLogo === false\" src=\"data:image/jpg;base64,{{custLogoFile}}\" style = \"height: 40px;width: 38px;\"/>\r\n            </div>\r\n            <span class=\"text align-middle\">Attendance System</span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\"  [perfectScrollbar]>\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\" appSidebarList>\r\n            <!-- First level menu -->\r\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\r\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\r\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\r\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/superadminlogin/login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/superadminlogin/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh m-0\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body login-img\">\r\n                            <div class=\"row m-0\">\r\n                                <div class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\">\r\n                                    <img src=\"./assets/img/gallery/login.png\" alt=\"\" class=\"img-fluid mt-5\" width=\"400\"\r\n                                        height=\"230\" />\r\n                                </div>\r\n\r\n                                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                                    <h4 class=\"card-title mb-2\">Spuer Admin Login</h4>\r\n                                    <p class=\"card-text mb-3\">\r\n                                        Welcome, please login to your account.\r\n                                    </p>\r\n\r\n                                    <form [formGroup]=\"myLogin\" (ngSubmit)=\"onSubmit()\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"username\"></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input type=\"text\" class=\"form-control mb-3\" formControlName=\"username\"\r\n                                                    placeholder=\"Username\" autocomplete=\"off\" maxlength=\"20\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                                                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                                                </div>\r\n\r\n                                                <div class=\"form-control-position\">\r\n                                                    <i class=\"ft-user\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <label for=\"adminType\">Super admin</label>&nbsp;\r\n                                                <input type=\"radio\" name=\"adminType\" formControlName=\"adminType\"\r\n                                                    value=\"admin\" checked [(ngModel)]=\"adminType\" (select)=\"showCustomer()\" />&nbsp;&nbsp;&nbsp;\r\n                                                <label for=\"adminType\">Customer admin</label>&nbsp;\r\n                                                <input type=\"radio\" name=\"adminType\" formControlName=\"adminType\"\r\n                                                    value=\"customeradmin\" [(ngModel)]=\"adminType\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\" [hidden]=\"adminType == 'admin'\" >\r\n                                            <label for=\"customer\"></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <select class=\"form-control mb-3\" formControlName=\"customer\"\r\n                                                    placeholder=\"customer\">\r\n                                                    <option value=\"null\">Select customer</option>\r\n                                                </select>\r\n                                                <!-- <input type=\"text\" class=\"form-control mb-3\" formControlName=\"customer\"\r\n                                                    placeholder=\"customer\" autocomplete=\"off\" maxlength=\"20\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" /> -->\r\n                                                <div *ngIf=\"submitted && f.customer.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.customer.errors.required\">Customer is required</div>\r\n                                                </div>\r\n\r\n                                                <div class=\"form-control-position\">\r\n                                                    <i class=\"ft-user\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"password\"></label>\r\n                                            <div class=\"position-relative has-icon-left\">\r\n                                                <input type=\"password\" class=\"form-control mb-1\"\r\n                                                    formControlName=\"password\" placeholder=\"Password\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n\r\n                                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                                </div>\r\n                                                <div class=\"form-control-position\">\r\n                                                    <i class=\" ft-lock\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"d-flex justify-content-between mt-2\">\r\n                                            <div class=\"change-password-option mb-3\">\r\n                                                <a [routerLink]=\"['/changepassword']\"\r\n                                                    class=\"text-decoration-none text-primary\">Change\r\n                                                    Password ?\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"forgot-password-option\">\r\n                                                <a [routerLink]=\"['/forgotpassword']\"\r\n                                                    class=\"text-decoration-none text-primary\">Forgot Password ?</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"fg-actions d-flex justify-content-between\">\r\n                                            <div class=\"recover-pass\">\r\n                                                <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">\r\n                                                    <a class=\"text-decoration-none text-white\">Login</a>\r\n                                                </button>\r\n                                                <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                                                    <div>Invalid Credentials</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _superadminlogin_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadminlogin/login.component */ "./src/app/superadminlogin/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/changepassword/changepassword.component */ "./src/app/login/changepassword/changepassword.component.ts");
/* harmony import */ var _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/forgotpassword/forgotpassword.component */ "./src/app/login/forgotpassword/forgotpassword.component.ts");







var appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'super/admin/login', component: _superadminlogin_login_component__WEBPACK_IMPORTED_MODULE_1__["SuperAdminLoginComponent"] },
    { path: 'changepassword', component: _login_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"] },
    { path: 'forgotpassword', component: _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .my-custom-class .tooltip-inner {\n  background-color: #2591d8 !important;\n  font-size: 75% !important; }\n\n::ng-deep .my-custom-class .arrow::before {\n  background-color: #2591d8 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0NBQThDO0VBQzlDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG9DQUE4QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdG9vbHRpcFxyXG46Om5nLWRlZXAgLm15LWN1c3RvbS1jbGFzcyAudG9vbHRpcC1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxNDUsIDIxNikgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDc1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm15LWN1c3RvbS1jbGFzcyAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxNDUsIDIxNikgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/config.service */ "./src/app/shared/services/config.service.ts");





var AppComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function AppComponent(translate, layoutService, configService) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        this.isLoggedIn = false;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === 'rtl') {
                _this.placement = 'bottom-left';
            }
            else if (dir === 'ltr') {
                _this.placement = 'bottom-right';
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.layout.dir) {
            setTimeout(function () {
                var dir = _this.config.layout.dir;
                if (dir === 'rtl') {
                    _this.placement = 'bottom-left';
                }
                else if (dir === 'ltr') {
                    _this.placement = 'bottom-right';
                }
            }, 0);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    AppComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else {
            this.toggleClass = 'ft-maximize';
        }
    };
    AppComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitNotiSidebarChange(true);
    };
    AppComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName('app-sidebar')[0];
        if (appSidebar.classList.contains('hide-sidebar')) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "toggleHideSidebar", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _superadminlogin_services_authentication_service___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadminlogin/services/authentication.service  */ "./src/app/superadminlogin/services/authentication.service .ts");
/* harmony import */ var _superadminlogin_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadminlogin/login.component */ "./src/app/superadminlogin/login.component.ts");
/* harmony import */ var app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/common.services */ "./src/app/shared/services/common.services.ts");
/* harmony import */ var app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_services_authentication_service___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/services/authentication.service  */ "./src/app/login/services/authentication.service .ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword/forgotpassword.component */ "./src/app/login/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _login_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/changepassword/changepassword.component */ "./src/app/login/changepassword/changepassword.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _superadminlogin_login_component__WEBPACK_IMPORTED_MODULE_2__["SuperAdminLoginComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _login_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"],
                _login_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_3__["CommonDataService"], _superadminlogin_services_authentication_service___WEBPACK_IMPORTED_MODULE_1__["SuperAdminAuthenticationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _superadmin_Leave_custLeaveType_custLeaveType_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadmin/Leave/custLeaveType/custLeaveType.component */ "./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.ts");
/* harmony import */ var _superadmin_masters_customer_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadmin/masters/customer/notification/notification.component */ "./src/app/dashboard/superadmin/masters/customer/notification/notification.component.ts");
/* harmony import */ var _superadmin_masters_customer_holidayCalendar_holidayCalendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superadmin/masters/customer/holidayCalendar/holidayCalendar.component */ "./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.ts");
/* harmony import */ var _superadmin_Attendance_custManualAttendance_custManualAttendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./superadmin/Attendance/custManualAttendance/custManualAttendance.component */ "./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.ts");
/* harmony import */ var _superadmin_masters_customer_shift_shift_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./superadmin/masters/customer/shift/shift.component */ "./src/app/dashboard/superadmin/masters/customer/shift/shift.component.ts");
/* harmony import */ var _superadmin_masters_customer_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./superadmin/masters/customer/contractor/contractor.component */ "./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.ts");
/* harmony import */ var _superadmin_masters_country_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./superadmin/masters/country/country.component */ "./src/app/dashboard/superadmin/masters/country/country.component.ts");
/* harmony import */ var _superadmin_masters_industry_industry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./superadmin/masters/industry/industry.component */ "./src/app/dashboard/superadmin/masters/industry/industry.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var app_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var app_shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _superadmin_sadmin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./superadmin/sadmin.component */ "./src/app/dashboard/superadmin/sadmin.component.ts");
/* harmony import */ var _superadmin_masters_state_state_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./superadmin/masters/state/state.component */ "./src/app/dashboard/superadmin/masters/state/state.component.ts");
/* harmony import */ var _superadmin_masters_customer_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./superadmin/masters/customer/customer.component */ "./src/app/dashboard/superadmin/masters/customer/customer.component.ts");
/* harmony import */ var _superadmin_masters_customer_department_department_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./superadmin/masters/customer/department/department.component */ "./src/app/dashboard/superadmin/masters/customer/department/department.component.ts");
/* harmony import */ var _superadmin_masters_customer_designation_designation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./superadmin/masters/customer/designation/designation.component */ "./src/app/dashboard/superadmin/masters/customer/designation/designation.component.ts");
/* harmony import */ var _superadmin_masters_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./superadmin/masters/beacon/beacon.component */ "./src/app/dashboard/superadmin/masters/beacon/beacon.component.ts");
/* harmony import */ var _superadmin_masters_branch_branch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./superadmin/masters/branch/branch.component */ "./src/app/dashboard/superadmin/masters/branch/branch.component.ts");
/* harmony import */ var _superadmin_masters_block_beacon_map_block_beacon_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./superadmin/masters/block-beacon-map/block-beacon-map.component */ "./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.ts");
/* harmony import */ var _superadmin_masters_block_block_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./superadmin/masters/block/block.component */ "./src/app/dashboard/superadmin/masters/block/block.component.ts");
/* harmony import */ var _superadmin_masters_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./superadmin/masters/employee/employee.component */ "./src/app/dashboard/superadmin/masters/employee/employee.component.ts");
/* harmony import */ var _superadmin_masters_employee_personal_personal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./superadmin/masters/employee/personal/personal.component */ "./src/app/dashboard/superadmin/masters/employee/personal/personal.component.ts");
/* harmony import */ var _superadmin_masters_employee_empbranch_empbranch_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./superadmin/masters/employee/empbranch/empbranch.component */ "./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.ts");
/* harmony import */ var _superadmin_masters_employee_empdepartment_empdepartment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./superadmin/masters/employee/empdepartment/empdepartment.component */ "./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.ts");
/* harmony import */ var _superadmin_masters_employee_empdesignation_empdesignation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./superadmin/masters/employee/empdesignation/empdesignation.component */ "./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.ts");
/* harmony import */ var _superadmin_masters_employee_empshift_empshift_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./superadmin/masters/employee/empshift/empshift.component */ "./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.ts");
/* harmony import */ var _superadmin_masters_employee_weeklyoff_weeklyoff_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./superadmin/masters/employee/weeklyoff/weeklyoff.component */ "./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.ts");

































var routes = [
    {
        path: '',
        redirectTo: 'dashboard/dashboard1',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        children: [
            { path: 'admin', component: _superadmin_sadmin_component__WEBPACK_IMPORTED_MODULE_17__["SAdminComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'customer', component: _superadmin_masters_customer_customer_component__WEBPACK_IMPORTED_MODULE_19__["CustomerComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'country', component: _superadmin_masters_country_country_component__WEBPACK_IMPORTED_MODULE_7__["CountryComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'beacon', component: _superadmin_masters_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_22__["BeaconComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'state', component: _superadmin_masters_state_state_component__WEBPACK_IMPORTED_MODULE_18__["StateComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'industry', component: _superadmin_masters_industry_industry_component__WEBPACK_IMPORTED_MODULE_8__["IndustryComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'contractor', component: _superadmin_masters_customer_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_6__["ContractorComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'department', component: _superadmin_masters_customer_department_department_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'designation', component: _superadmin_masters_customer_designation_designation_component__WEBPACK_IMPORTED_MODULE_21__["DesignationComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'shift', component: _superadmin_masters_customer_shift_shift_component__WEBPACK_IMPORTED_MODULE_5__["ShiftComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'branch', component: _superadmin_masters_branch_branch_component__WEBPACK_IMPORTED_MODULE_23__["BranchComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'beaconmap', component: _superadmin_masters_block_beacon_map_block_beacon_map_component__WEBPACK_IMPORTED_MODULE_24__["BlockBeaconMapComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'block', component: _superadmin_masters_block_block_component__WEBPACK_IMPORTED_MODULE_25__["BlockComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'employee', component: _superadmin_masters_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__["EmployeeComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                children: [
                    { path: 'personal', component: _superadmin_masters_employee_personal_personal_component__WEBPACK_IMPORTED_MODULE_27__["PersonalComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Personal' } },
                    { path: 'branch', component: _superadmin_masters_employee_empbranch_empbranch_component__WEBPACK_IMPORTED_MODULE_28__["EmpbranchComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Branch' } },
                    { path: 'department', component: _superadmin_masters_employee_empdepartment_empdepartment_component__WEBPACK_IMPORTED_MODULE_29__["EmpDepartmentComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Department' } },
                    { path: 'designation', component: _superadmin_masters_employee_empdesignation_empdesignation_component__WEBPACK_IMPORTED_MODULE_30__["EmpDesignationComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Designation' } },
                    { path: 'shift', component: _superadmin_masters_employee_empshift_empshift_component__WEBPACK_IMPORTED_MODULE_31__["EmpShiftComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Shift' } },
                    { path: 'weeklyoff', component: _superadmin_masters_employee_weeklyoff_weeklyoff_component__WEBPACK_IMPORTED_MODULE_32__["WeeklyoffComponent"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], data: { title: 'Weeklyoff' } },
                ]
            },
            { path: 'holiday/calendar', component: _superadmin_masters_customer_holidayCalendar_holidayCalendar_component__WEBPACK_IMPORTED_MODULE_3__["HolidayCalendarComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'notification', component: _superadmin_masters_customer_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'manual', component: _superadmin_Attendance_custManualAttendance_custManualAttendance_component__WEBPACK_IMPORTED_MODULE_4__["CustManualAttendanceComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'customer', component: _superadmin_Leave_custLeaveType_custLeaveType_component__WEBPACK_IMPORTED_MODULE_1__["CustLeaveTypeComponent"], children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
        ]
    },
    { path: '', component: app_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"], data: { title: 'full Views' }, children: app_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_14__["Full_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: '', component: app_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__["ContentLayoutComponent"], data: { title: 'content Views' }, children: app_shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_15__["CONTENT_ROUTES"], canActivate: [app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: createTranslateLoader, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _superadmin_Leave_custLeaveType_custLeaveType_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadmin/Leave/custLeaveType/custLeaveType.component */ "./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.ts");
/* harmony import */ var _superadmin_masters_customer_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadmin/masters/customer/notification/notification.component */ "./src/app/dashboard/superadmin/masters/customer/notification/notification.component.ts");
/* harmony import */ var _superadmin_masters_customer_holidayCalendar_holidayCalendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superadmin/masters/customer/holidayCalendar/holidayCalendar.component */ "./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.ts");
/* harmony import */ var _superadmin_Attendance_custManualAttendance_custManualAttendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./superadmin/Attendance/custManualAttendance/custManualAttendance.component */ "./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.ts");
/* harmony import */ var _superadmin_masters_customer_shift_shift_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./superadmin/masters/customer/shift/shift.component */ "./src/app/dashboard/superadmin/masters/customer/shift/shift.component.ts");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _superadmin_masters_customer_designation_designation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./superadmin/masters/customer/designation/designation.component */ "./src/app/dashboard/superadmin/masters/customer/designation/designation.component.ts");
/* harmony import */ var _superadmin_masters_customer_department_department_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./superadmin/masters/customer/department/department.component */ "./src/app/dashboard/superadmin/masters/customer/department/department.component.ts");
/* harmony import */ var _superadmin_masters_country_services_country_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./superadmin/masters/country/services/country.services */ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts");
/* harmony import */ var _superadmin_masters_country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./superadmin/masters/country/country.component */ "./src/app/dashboard/superadmin/masters/country/country.component.ts");
/* harmony import */ var _superadmin_masters_industry_industry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./superadmin/masters/industry/industry.component */ "./src/app/dashboard/superadmin/masters/industry/industry.component.ts");
/* harmony import */ var _superadmin_masters_industry_services_industry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./superadmin/masters/industry/services/industry.service */ "./src/app/dashboard/superadmin/masters/industry/services/industry.service.ts");
/* harmony import */ var _superadmin_masters_state_services_state_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./superadmin/masters/state/services/state.services */ "./src/app/dashboard/superadmin/masters/state/services/state.services.ts");
/* harmony import */ var _superadmin_masters_customer_view_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./superadmin/masters/customer/view/view.component */ "./src/app/dashboard/superadmin/masters/customer/view/view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/services/common.services */ "./src/app/shared/services/common.services.ts");
/* harmony import */ var app_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/login/services/authentication.service  */ "./src/app/login/services/authentication.service .ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! app/shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var app_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! app/layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var app_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! app/layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _superadmin_sadmin_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./superadmin/sadmin.component */ "./src/app/dashboard/superadmin/sadmin.component.ts");
/* harmony import */ var app_shared_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! app/shared/auth/jwt.interceptor */ "./src/app/shared/auth/jwt.interceptor.ts");
/* harmony import */ var _superadmin_masters_state_state_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./superadmin/masters/state/state.component */ "./src/app/dashboard/superadmin/masters/state/state.component.ts");
/* harmony import */ var _superadmin_masters_customer_customer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./superadmin/masters/customer/customer.component */ "./src/app/dashboard/superadmin/masters/customer/customer.component.ts");
/* harmony import */ var _superadmin_masters_customer_services_customer_services__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./superadmin/masters/customer/services/customer.services */ "./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts");
/* harmony import */ var _superadmin_masters_customer_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./superadmin/masters/customer/contractor/contractor.component */ "./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.ts");
/* harmony import */ var app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! app/shared/confirmation-dialog/confirmation-dialog.service */ "./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _superadmin_masters_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./superadmin/masters/beacon/beacon.component */ "./src/app/dashboard/superadmin/masters/beacon/beacon.component.ts");
/* harmony import */ var _superadmin_masters_branch_branch_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./superadmin/masters/branch/branch.component */ "./src/app/dashboard/superadmin/masters/branch/branch.component.ts");
/* harmony import */ var _superadmin_masters_block_beacon_map_block_beacon_map_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./superadmin/masters/block-beacon-map/block-beacon-map.component */ "./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.ts");
/* harmony import */ var _superadmin_masters_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./superadmin/masters/branch/service/branch.service */ "./src/app/dashboard/superadmin/masters/branch/service/branch.service.ts");
/* harmony import */ var _superadmin_masters_block_beacon_map_services_beaconmap_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./superadmin/masters/block-beacon-map/services/beaconmap.service */ "./src/app/dashboard/superadmin/masters/block-beacon-map/services/beaconmap.service.ts");
/* harmony import */ var _superadmin_masters_block_block_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./superadmin/masters/block/block.component */ "./src/app/dashboard/superadmin/masters/block/block.component.ts");
/* harmony import */ var _superadmin_masters_block_services_block_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./superadmin/masters/block/services/block.service */ "./src/app/dashboard/superadmin/masters/block/services/block.service.ts");
/* harmony import */ var _superadmin_masters_employee_employee_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./superadmin/masters/employee/employee.component */ "./src/app/dashboard/superadmin/masters/employee/employee.component.ts");
/* harmony import */ var _superadmin_masters_employee_personal_personal_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./superadmin/masters/employee/personal/personal.component */ "./src/app/dashboard/superadmin/masters/employee/personal/personal.component.ts");
/* harmony import */ var _superadmin_masters_employee_empbranch_empbranch_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./superadmin/masters/employee/empbranch/empbranch.component */ "./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.ts");
/* harmony import */ var _superadmin_masters_employee_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./superadmin/masters/employee/navigation-bar/navigation-bar.component */ "./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _superadmin_masters_employee_weeklyoff_weeklyoff_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./superadmin/masters/employee/weeklyoff/weeklyoff.component */ "./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.ts");
/* harmony import */ var _superadmin_masters_employee_empdesignation_empdesignation_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./superadmin/masters/employee/empdesignation/empdesignation.component */ "./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.ts");
/* harmony import */ var _superadmin_masters_employee_empshift_empshift_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./superadmin/masters/employee/empshift/empshift.component */ "./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.ts");
/* harmony import */ var _superadmin_masters_employee_data__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./superadmin/masters/employee/data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");
/* harmony import */ var _superadmin_masters_employee_empdepartment_empdepartment_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./superadmin/masters/employee/empdepartment/empdepartment.component */ "./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.ts");































































var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_34__["DashboardComponent"],
                app_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_38__["FullLayoutComponent"],
                app_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_39__["ContentLayoutComponent"],
                _superadmin_sadmin_component__WEBPACK_IMPORTED_MODULE_40__["SAdminComponent"],
                _superadmin_masters_state_state_component__WEBPACK_IMPORTED_MODULE_42__["StateComponent"],
                _superadmin_masters_customer_customer_component__WEBPACK_IMPORTED_MODULE_43__["CustomerComponent"],
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_29__["JwPaginationComponent"],
                _superadmin_masters_customer_view_view_component__WEBPACK_IMPORTED_MODULE_14__["CustomerViewComponent"],
                _superadmin_masters_industry_industry_component__WEBPACK_IMPORTED_MODULE_11__["IndustryComponent"],
                _superadmin_masters_country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"],
                _superadmin_masters_customer_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_45__["ContractorComponent"],
                _superadmin_masters_customer_department_department_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentComponent"],
                _superadmin_masters_customer_designation_designation_component__WEBPACK_IMPORTED_MODULE_7__["DesignationComponent"],
                _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"],
                _superadmin_masters_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_47__["BeaconComponent"],
                _superadmin_masters_customer_shift_shift_component__WEBPACK_IMPORTED_MODULE_5__["ShiftComponent"],
                _superadmin_masters_branch_branch_component__WEBPACK_IMPORTED_MODULE_48__["BranchComponent"],
                _superadmin_masters_block_beacon_map_block_beacon_map_component__WEBPACK_IMPORTED_MODULE_49__["BlockBeaconMapComponent"],
                _superadmin_masters_block_block_component__WEBPACK_IMPORTED_MODULE_52__["BlockComponent"],
                _superadmin_masters_employee_employee_component__WEBPACK_IMPORTED_MODULE_54__["EmployeeComponent"],
                _superadmin_masters_employee_personal_personal_component__WEBPACK_IMPORTED_MODULE_55__["PersonalComponent"],
                _superadmin_masters_employee_empbranch_empbranch_component__WEBPACK_IMPORTED_MODULE_56__["EmpbranchComponent"],
                _superadmin_masters_customer_department_department_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentComponent"],
                _superadmin_masters_employee_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_57__["NavigationBarComponent"],
                _superadmin_masters_employee_weeklyoff_weeklyoff_component__WEBPACK_IMPORTED_MODULE_58__["WeeklyoffComponent"],
                _superadmin_masters_employee_empdesignation_empdesignation_component__WEBPACK_IMPORTED_MODULE_59__["EmpDesignationComponent"],
                _superadmin_masters_employee_empshift_empshift_component__WEBPACK_IMPORTED_MODULE_60__["EmpShiftComponent"],
                _superadmin_masters_employee_empdepartment_empdepartment_component__WEBPACK_IMPORTED_MODULE_62__["EmpDepartmentComponent"],
                _superadmin_Attendance_custManualAttendance_custManualAttendance_component__WEBPACK_IMPORTED_MODULE_4__["CustManualAttendanceComponent"],
                _superadmin_masters_customer_holidayCalendar_holidayCalendar_component__WEBPACK_IMPORTED_MODULE_3__["HolidayCalendarComponent"],
                _superadmin_masters_customer_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"],
                _superadmin_Leave_custLeaveType_custLeaveType_component__WEBPACK_IMPORTED_MODULE_1__["CustLeaveTypeComponent"]
            ],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"].forRoot({}),
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_18__["DashboardRoutingModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_37__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_20__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_28__["Ng2SearchPipeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR KEY'
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__["PerfectScrollbarModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_30__["ArchwizardModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [
                app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_36__["AuthService"],
                app_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"],
                app_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"],
                app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_16__["CommonDataService"],
                _superadmin_masters_customer_services_customer_services__WEBPACK_IMPORTED_MODULE_44__["CustomerService"],
                _superadmin_masters_state_services_state_services__WEBPACK_IMPORTED_MODULE_13__["StateService"],
                _superadmin_masters_industry_services_industry_service__WEBPACK_IMPORTED_MODULE_12__["IndustryService"],
                _superadmin_masters_country_services_country_services__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_33__["DragulaService"],
                _superadmin_masters_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_50__["BranchService"],
                _superadmin_masters_block_beacon_map_services_beaconmap_service__WEBPACK_IMPORTED_MODULE_51__["BeaconmapService"],
                _superadmin_masters_block_services_block_service__WEBPACK_IMPORTED_MODULE_53__["BlockService"],
                _superadmin_masters_employee_data__WEBPACK_IMPORTED_MODULE_61__["showUpdate"],
                app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_46__["ConfirmationDialogService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], useClass: app_shared_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_41__["JwtInterceptor"], multi: true }
            ],
            entryComponents: [_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"]],
            bootstrap: [_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-class .tooltip-inner {\n  background-color: #1abbec;\n  font-size: 75%; }\n\n.my-custom-class.arrow::before {\n  border-top-color: #1abbec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vQXR0ZW5kYW5jZS9jdXN0TWFudWFsQXR0ZW5kYW5jZS9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXEF0dGVuZGFuY2VcXGN1c3RNYW51YWxBdHRlbmRhbmNlXFxjdXN0TWFudWFsQXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3VwZXJhZG1pbi9BdHRlbmRhbmNlL2N1c3RNYW51YWxBdHRlbmRhbmNlL2N1c3RNYW51YWxBdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzcyAudG9vbHRpcC1pbm5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwxODcsMjM2KTtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gIH1cclxuICAubXktY3VzdG9tLWNsYXNzLmFycm93OjpiZWZvcmUgIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYigyNiwxODcsMjM2KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CustManualAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustManualAttendanceComponent", function() { return CustManualAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CustManualAttendanceComponent = /** @class */ (function () {
    function CustManualAttendanceComponent(fb) {
        this.fb = fb;
        this.Department = [
            { deptId: '1', deptName: 'IT-service' },
            { deptId: '2', deptName: 'Development' },
            { deptId: '3', deptName: 'Finance' },
            { deptId: '4', deptName: 'Human Resource' },
        ];
        this.custAttendance = [
            { empName: 'Praveen', shiftStart: '9:00AM', attnedanceStatus: '0' },
            { empName: 'Karthik', shiftStart: '2:00PM', attnedanceStatus: '1' },
            { empName: 'Seema', shiftStart: '11:00PM', attnedanceStatus: '1' },
            { empName: 'Neetu', shiftStart: '9:00AM', attnedanceStatus: '0' },
        ];
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        // showUpdate = false;
        this.SelectForm = true;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    CustManualAttendanceComponent.prototype.ngOnInit = function () {
        this.custAttendanceForm = this.fb.group({
            deptId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfAttendance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shiftStart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attnedanceStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CustManualAttendanceComponent.prototype.openForm = function () {
        this.custAttendance = this.custAttendance.filter(function (empAttendance) {
            return empAttendance.attnedanceStatus == '0';
        });
        this.isDisabled = true;
    };
    CustManualAttendanceComponent.prototype.cancel = function () {
        this.submitted = false;
        this.custAttendanceForm.reset();
        this.isDisabled = false;
    };
    CustManualAttendanceComponent.prototype.save = function () {
    };
    CustManualAttendanceComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    CustManualAttendanceComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustManualAttendanceComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustManualAttendanceComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustManualAttendanceComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustManualAttendanceComponent.prototype, "maxPages", void 0);
    CustManualAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custManualAttendance',
            template: __webpack_require__(/*! raw-loader!./custManualAttendance.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./custManualAttendance.component.scss */ "./src/app/dashboard/superadmin/Attendance/custManualAttendance/custManualAttendance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustManualAttendanceComponent);
    return CustManualAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-class .tooltip-inner {\n  background-color: #1abbec;\n  font-size: 75%; }\n\n.my-custom-class.arrow::before {\n  border-top-color: #1abbec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vTGVhdmUvY3VzdExlYXZlVHlwZS9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXExlYXZlXFxjdXN0TGVhdmVUeXBlXFxjdXN0TGVhdmVUeXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWlDO0VBQ2pDLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL0xlYXZlL2N1c3RMZWF2ZVR5cGUvY3VzdExlYXZlVHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tY2xhc3MgLnRvb2x0aXAtaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsMTg3LDIzNik7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbiAgLm15LWN1c3RvbS1jbGFzcy5hcnJvdzo6YmVmb3JlICB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjYsMTg3LDIzNik7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustLeaveTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustLeaveTypeComponent", function() { return CustLeaveTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CustLeaveTypeComponent = /** @class */ (function () {
    function CustLeaveTypeComponent(fb) {
        this.fb = fb;
        this.leaveType = [
            { refCustId: '1', custLeaveName: 'Sick Leave', showUpdate: false },
            { refCustId: '2', custLeaveName: 'Casual Leave', showUpdate: false },
            { refCustId: '3', custLeaveName: 'Earned Leave', showUpdate: false },
            { refCustId: '4', custLeaveName: 'Maternity Leave', showUpdate: false },
            { refCustId: '5', custLeaveName: 'Paternity Leave', showUpdate: false }
        ];
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    CustLeaveTypeComponent.prototype.ngOnInit = function () {
        this.newLeaveType = this.fb.group({
            refCustId: [''],
            custLeaveName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.updateCustLeaveType = this.fb.group({
            refCustId: [''],
            custLeaveName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            showUpdate: ['']
        });
    };
    Object.defineProperty(CustLeaveTypeComponent.prototype, "f", {
        get: function () { return this.newLeaveType.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustLeaveTypeComponent.prototype, "f1", {
        get: function () { return this.updateCustLeaveType.controls; },
        enumerable: true,
        configurable: true
    });
    CustLeaveTypeComponent.prototype.openForm = function () {
        for (var _i = 0, _a = this.pageOfItems; _i < _a.length; _i++) {
            var dataItem = _a[_i];
            if (dataItem.showUpdate != undefined) {
                dataItem.showUpdate = false;
            }
        }
        this.showNew = true;
    };
    CustLeaveTypeComponent.prototype.save = function () {
        this.submitted = true;
        if (this.newLeaveType.invalid) {
            return;
        }
        this.showNew = false;
    };
    CustLeaveTypeComponent.prototype.editCustLeaveType = function (data) {
        this.showNew = false;
        for (var _i = 0, _a = this.leaveType; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.showUpdate != undefined) {
                c.showUpdate = false;
            }
        }
        data.showUpdate = true;
        console.log(data);
        this.updateCustLeaveType.setValue(data);
    };
    CustLeaveTypeComponent.prototype.saveUpdate = function (data) {
        console.log(data);
        this.submitted1 = true;
        if (this.updateCustLeaveType.invalid) {
            return;
        }
        console.log(data);
        console.log(this.updateCustLeaveType.value);
        console.log(this.leaveType);
        data.showUpdate = false;
        this.submitted1 = false;
    };
    CustLeaveTypeComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    // Delete Data
    CustLeaveTypeComponent.prototype.deleteCustLeaveType = function (data) {
    };
    CustLeaveTypeComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newLeaveType.reset();
    };
    CustLeaveTypeComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    CustLeaveTypeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustLeaveTypeComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustLeaveTypeComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustLeaveTypeComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustLeaveTypeComponent.prototype, "maxPages", void 0);
    CustLeaveTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custLeaveType',
            template: __webpack_require__(/*! raw-loader!./custLeaveType.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./custLeaveType.component.scss */ "./src/app/dashboard/superadmin/Leave/custLeaveType/custLeaveType.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustLeaveTypeComponent);
    return CustLeaveTypeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/beacon/beacon.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/beacon/beacon.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvYmVhY29uL2JlYWNvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/beacon/beacon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/beacon/beacon.component.ts ***!
  \*************************************************************************/
/*! exports provided: BeaconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconComponent", function() { return BeaconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_beacon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/beacon.service */ "./src/app/dashboard/superadmin/masters/beacon/services/beacon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/confirmation-dialog/confirmation-dialog.service */ "./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts");







var BeaconComponent = /** @class */ (function () {
    function BeaconComponent(fb, beaconService, confirmationDialogService) {
        this.fb = fb;
        this.beaconService = beaconService;
        this.confirmationDialogService = confirmationDialogService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
    }
    BeaconComponent.prototype.ngOnInit = function () {
        this.newBeacon = this.fb.group({
            beaconId: [''],
            beaconCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.updateBeacon = this.fb.group({
            beaconId: [''],
            beaconCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getAllBeacon();
    };
    Object.defineProperty(BeaconComponent.prototype, "f", {
        get: function () { return this.newBeacon.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeaconComponent.prototype, "f1", {
        get: function () { return this.updateBeacon.controls; },
        enumerable: true,
        configurable: true
    });
    BeaconComponent.prototype.getAllBeacon = function () {
        var _this = this;
        this.beaconService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('beacons...', res.data);
                _this.beacons = res.beaconDtoList;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    BeaconComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    BeaconComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
    };
    // Save new Form
    BeaconComponent.prototype.save = function () {
        var _this = this;
        console.log('save', this.newBeacon.value);
        this.submitted = true;
        if (this.newBeacon.invalid) {
            return;
        }
        this.showNew = false;
        this.beaconService.create(this.newBeacon.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                _this.getAllBeacon();
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Update Form open
    BeaconComponent.prototype.editCustomer = function (data) {
        data.showUpdate = true;
        this.updateBeacon.patchValue(data);
    };
    // Update Data
    BeaconComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.updateBeaconFormData = this.fb.group({
            beaconId: [this.beacons.beaconId],
            beaconCode: [this.beacons.beaconCode],
        });
        console.log('update...', this.updateBeaconFormData.value);
        this.submitted1 = true;
        if (this.updateBeaconFormData.invalid) {
            return;
        }
        data.showUpdate = false;
        this.beaconService.update(this.updateBeaconFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                _this.getAllBeacon();
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Cancel Data
    BeaconComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    BeaconComponent.prototype.openConfirmationDialog = function (dt) {
        var _this = this;
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ... ?')
            .then(function (confirmed) {
            if (confirmed) {
                _this.deleteCustomer(dt);
            }
        })
            .catch(function () { return console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'); });
    };
    // Delete Data
    BeaconComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        console.log('delete...', data);
        this.beaconService.delete(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('delete response', res);
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                // this.reset();
                _this.getAllBeacon();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BeaconComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_beacon_service__WEBPACK_IMPORTED_MODULE_1__["BeaconService"] },
        { type: app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"] }
    ]; };
    BeaconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-beacon',
            template: __webpack_require__(/*! raw-loader!./beacon.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/beacon/beacon.component.html"),
            styles: [__webpack_require__(/*! ./beacon.component.scss */ "./src/app/dashboard/superadmin/masters/beacon/beacon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_beacon_service__WEBPACK_IMPORTED_MODULE_1__["BeaconService"], app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"]])
    ], BeaconComponent);
    return BeaconComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/beacon/services/beacon.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/beacon/services/beacon.service.ts ***!
  \********************************************************************************/
/*! exports provided: BeaconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconService", function() { return BeaconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BeaconService = /** @class */ (function () {
    function BeaconService(http) {
        this.http = http;
    }
    BeaconService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/beacon/findAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/beacon/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/beacon/update', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/beacon/delete', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    BeaconService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BeaconService);
    return BeaconService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 250px !important; }\n\nselect {\n  width: 250px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9ibG9jay1iZWFjb24tbWFwL0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcYmxvY2stYmVhY29uLW1hcFxcYmxvY2stYmVhY29uLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9ibG9jay1iZWFjb24tbWFwL2Jsb2NrLWJlYWNvbi1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlockBeaconMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBeaconMapComponent", function() { return BlockBeaconMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_beaconmap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/beaconmap.service */ "./src/app/dashboard/superadmin/masters/block-beacon-map/services/beaconmap.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_services_block_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block/services/block.service */ "./src/app/dashboard/superadmin/masters/block/services/block.service.ts");







var BlockBeaconMapComponent = /** @class */ (function () {
    function BlockBeaconMapComponent(formBuilder, beaconMapService, blockService) {
        this.formBuilder = formBuilder;
        this.beaconMapService = beaconMapService;
        this.blockService = blockService;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
        this.blockbeaconMap = [];
        this.globalBlock = [
            { blockId: 1, blockName: 'Block 1' },
            { blockId: 2, blockName: 'Block 2' },
            { blockId: 3, blockName: 'Block 3' },
            { blockId: 4, blockName: 'Block 4' }
        ];
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
    }
    BlockBeaconMapComponent.prototype.ngOnInit = function () {
        this.pagginationConfig = {
            itemsPerPage: 2,
            currentPage: 1,
            totalItems: 0
        };
        this.newBlockBeaconMap = this.formBuilder.group({
            refBlkId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            beaconCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            beaconType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.updateBlockBeaconMap = this.formBuilder.group({
            blkBeaconMapId: [],
            refBlkId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            beaconCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            beaconType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getBeaconMapAll();
        this.getAllBlocks();
    };
    Object.defineProperty(BlockBeaconMapComponent.prototype, "f", {
        get: function () { return this.newBlockBeaconMap.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockBeaconMapComponent.prototype, "f1", {
        get: function () { return this.updateBlockBeaconMap.controls; },
        enumerable: true,
        configurable: true
    });
    BlockBeaconMapComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    BlockBeaconMapComponent.prototype.getBeaconMapAll = function () {
        var _this = this;
        this.beaconMapService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Beacon Maps...', res.beaconMapDtolist);
                _this.blockbeaconMap = res.beaconMapDtolist;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BlockBeaconMapComponent.prototype.getAllBlocks = function () {
        var _this = this;
        this.blockService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Blocks...', res.data1);
                _this.globalBlock = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BlockBeaconMapComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    //Cancel New Form
    BlockBeaconMapComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newBlockBeaconMap.reset();
    };
    // Save new Form
    BlockBeaconMapComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.newBlockBeaconMap.invalid) {
            return;
        }
        console.log(this.newBlockBeaconMap.value);
        this.beaconMapService.create(this.newBlockBeaconMap.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                _this.getBeaconMapAll();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.cancel();
    };
    //Update Form open
    BlockBeaconMapComponent.prototype.editBlockBeaconMap = function (data) {
        this.showNew = false;
        data.showUpdate = true;
        this.updateBlockBeaconMap.patchValue(data);
    };
    // Update Data
    BlockBeaconMapComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.submitted1 = true;
        if (this.updateBlockBeaconMap.invalid) {
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update!'
            }).then(function (result) {
                if (result.value) {
                    _this.beaconMapService.update(_this.updateBlockBeaconMap.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (res) {
                        if (res.error) {
                            _this.cancelUpdate(data);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: res.message,
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'success',
                                showConfirmButton: true,
                                title: res.message,
                            });
                            _this.getBeaconMapAll();
                            _this.cancelUpdate(data);
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                        _this.cancelUpdate(data);
                    });
                }
            });
        }
    };
    // Cancel Data
    BlockBeaconMapComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateBlockBeaconMap.reset();
    };
    // Delete Data
    BlockBeaconMapComponent.prototype.deleteBlockBeaconMap = function (data) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.beaconMapService.delete(data)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    console.log('delete response', res);
                    if (res.status.error) {
                        _this.submitted = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            showConfirmButton: true,
                            title: res.status.message,
                        });
                        // this.reset();
                        _this.getAllBlocks();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    BlockBeaconMapComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_beaconmap_service__WEBPACK_IMPORTED_MODULE_3__["BeaconmapService"] },
        { type: _block_services_block_service__WEBPACK_IMPORTED_MODULE_6__["BlockService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockBeaconMapComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockBeaconMapComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockBeaconMapComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockBeaconMapComponent.prototype, "maxPages", void 0);
    BlockBeaconMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-beacon-map',
            template: __webpack_require__(/*! raw-loader!./block-beacon-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.html"),
            styles: [__webpack_require__(/*! ./block-beacon-map.component.scss */ "./src/app/dashboard/superadmin/masters/block-beacon-map/block-beacon-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_beaconmap_service__WEBPACK_IMPORTED_MODULE_3__["BeaconmapService"],
            _block_services_block_service__WEBPACK_IMPORTED_MODULE_6__["BlockService"]])
    ], BlockBeaconMapComponent);
    return BlockBeaconMapComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block-beacon-map/services/beaconmap.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block-beacon-map/services/beaconmap.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: BeaconmapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconmapService", function() { return BeaconmapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BeaconmapService = /** @class */ (function () {
    function BeaconmapService(http) {
        this.http = http;
    }
    BeaconmapService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/beacon/map/findAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconmapService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/beacon/map/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconmapService.prototype.update = function (data) {
        console.log("update", data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/beacon/map/update', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconmapService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/beacon/map/delete', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BeaconmapService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    BeaconmapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BeaconmapService);
    return BeaconmapService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block/block.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block/block.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 190px !important; }\n\nselect {\n  width: 190px !important;\n  width: 190px !important; }\n\nselect {\n  width: 190px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9ibG9jay9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGJsb2NrXFxibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHVCQUF1QjtFQUNyQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvYmxvY2svYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgd2lkdGg6IDE5MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTkwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxOTBweCAhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTkwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block/block.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block/block.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/block.service */ "./src/app/dashboard/superadmin/masters/block/services/block.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../branch/service/branch.service */ "./src/app/dashboard/superadmin/masters/branch/service/branch.service.ts");







var BlockComponent = /** @class */ (function () {
    function BlockComponent(fb, blockService, branchService) {
        this.fb = fb;
        this.blockService = blockService;
        this.branchService = branchService;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.globalBlock = [];
        this.globalBranch = [];
    }
    BlockComponent.prototype.ngOnInit = function () {
        this.blockForm = this.fb.group({
            blkLogicalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            refBranchId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blkGPSRadius: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blkLatLong: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.updateBlockForm = this.fb.group({
            blkId: [],
            blkLogicalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            refBranchId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blkGPSRadius: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blkLatLong: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getAllBlock();
        this.getBranchAll();
    };
    Object.defineProperty(BlockComponent.prototype, "f", {
        get: function () { return this.blockForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockComponent.prototype, "f1", {
        get: function () { return this.updateBlockForm.controls; },
        enumerable: true,
        configurable: true
    });
    BlockComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    BlockComponent.prototype.getAllBlock = function () {
        var _this = this;
        this.blockService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Block...', res.data1);
                _this.globalBlock = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BlockComponent.prototype.getBranchAll = function () {
        var _this = this;
        this.branchService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Block...', res.data1);
                _this.globalBranch = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    BlockComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    //Cancel New Form
    BlockComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.blockForm.reset();
    };
    // Save new Form
    BlockComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.blockForm.invalid) {
            return;
        }
        console.log("Block....", this.blockForm.value);
        this.blockService.create(this.blockForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                _this.getAllBlock();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.cancel();
    };
    //Update Form open
    BlockComponent.prototype.editCustomer = function (data) {
        data.showUpdate = true;
        this.cancel();
        this.updateBlockForm.patchValue(data);
    };
    // Update Data
    BlockComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.submitted1 = true;
        if (this.updateBlockForm.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update!'
        }).then(function (result) {
            if (result.value) {
                _this.blockService.update(_this.updateBlockForm.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.message,
                        });
                        _this.cancelUpdate(data);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            showConfirmButton: true,
                            title: res.message,
                        });
                        _this.getAllBlock();
                        _this.cancelUpdate(data);
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                    _this.cancelUpdate(data);
                });
            }
        });
    };
    // Cancel Data
    BlockComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateBlockForm.reset();
    };
    // Delete Data
    BlockComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.blockService.delete(data.blkId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.status.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            title: res.status.message
                        });
                        _this.getAllBlock();
                    }
                }, function (error) {
                    console.log(error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    BlockComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"] },
        { type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockComponent.prototype, "maxPages", void 0);
    BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block',
            template: __webpack_require__(/*! raw-loader!./block.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.scss */ "./src/app/dashboard/superadmin/masters/block/block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"],
            _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/block/services/block.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/block/services/block.service.ts ***!
  \******************************************************************************/
/*! exports provided: BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BlockService = /** @class */ (function () {
    function BlockService(http) {
        this.http = http;
    }
    BlockService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BlockService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BlockService.prototype.update = function (data) {
        console.log("update", data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/updateByBlockId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BlockService.prototype.delete = function (data) {
        var param = { "blkId": data };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/block/deleteByBlockId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BlockService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    BlockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BlockService);
    return BlockService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/branch/branch.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/branch/branch.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0; }\n\n.label-control.required:after {\n  color: #d00;\n  content: \"*\"; }\n\n.cmodal {\n  width: 700px !important;\n  max-width: 1000px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9icmFuY2gvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdXBlcmFkbWluXFxtYXN0ZXJzXFxicmFuY2hcXGJyYW5jaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQU9kO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRyb2wucmVxdWlyZWQ6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjZDAwO1xyXG4gIGNvbnRlbnQ6IFwiKlwiO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyB0b3A6N3B4O1xyXG59XHJcblxyXG4vLyBNb2RlbFxyXG4uY21vZGFsIHtcclxuICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/branch/branch.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/branch/branch.component.ts ***!
  \*************************************************************************/
/*! exports provided: NgbdModalContent, BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/branch.service */ "./src/app/dashboard/superadmin/masters/branch/service/branch.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../country/services/country.services */ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts");
/* harmony import */ var _state_services_state_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/services/state.services */ "./src/app/dashboard/superadmin/masters/state/services/state.services.ts");
/* harmony import */ var _customer_services_customer_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer/services/customer.services */ "./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");










var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var BranchComponent = /** @class */ (function () {
    function BranchComponent(fb, branchService, countryService, stateService, customerService, modalService) {
        this.fb = fb;
        this.branchService = branchService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.customerService = customerService;
        this.modalService = modalService;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
        this.showForm = false;
        this.showList = true;
        this.submitted = false;
        this.showView = false;
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.branchForm = this.fb.group({
            brId: [],
            refCustomerId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            refCountryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            refStateId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{6}')]],
            brCode: [''],
            brMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            brLandline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            brEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            brLatLong: [],
            brValidityStart: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brValidityEnd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brIsBillable: [false],
            brIsActive: [true]
        });
        this.getAllBranch();
        this.getAllCountry();
        this.getCustomerAll();
    };
    BranchComponent.prototype.getAllBranch = function () {
        var _this = this;
        this.branchService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Branches...', res.data1);
                _this.globalBranch = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BranchComponent.prototype.getAllCountry = function () {
        var _this = this;
        this.countryService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Countries...', res.data1);
                _this.globalCountry = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BranchComponent.prototype.getCustomerAll = function () {
        var _this = this;
        this.customerService.getAllCustomers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.globalCustomer = res.dataList;
                console.log(_this.globalCustomer);
            }
        }, function (error) {
            console.log('RESPONSE ERROR::===> ');
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BranchComponent.prototype.changeCountry = function (id) {
        var _this = this;
        this.stateService.getStateByCountry(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.globalState = res.data1;
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    Object.defineProperty(BranchComponent.prototype, "f", {
        get: function () { return this.branchForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    BranchComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    BranchComponent.prototype.openForm = function () {
        this.showForm = true;
        this.showList = false;
        this.btnName = "Save";
    };
    BranchComponent.prototype.resetForm = function () {
        this.branchForm.reset();
        this.branchForm.patchValue({
            brIsActive: true,
            brIsBillable: true
        });
    };
    BranchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.branchForm.invalid) {
            return;
        }
        else {
            // Create form
            this.branchForm.value.brValidityStart = this.branchForm.get('brValidityStart').value.year + '-' +
                (this.branchForm.get('brValidityStart').value.month < 10 ? '0' + this.branchForm.get('brValidityStart').value.month : this.branchForm.get('brValidityStart').value.month) + '-' +
                (this.branchForm.get('brValidityStart').value.day < 10 ? '0' + this.branchForm.get('brValidityStart').value.day : this.branchForm.get('brValidityStart').value.day);
            this.branchForm.value.brValidityEnd = this.branchForm.get('brValidityEnd').value.year + '-' +
                (this.branchForm.get('brValidityEnd').value.month < 10 ? '0' + this.branchForm.get('brValidityEnd').value.month : this.branchForm.get('brValidityEnd').value.month) + '-' +
                (this.branchForm.get('brValidityEnd').value.day < 10 ? '0' + this.branchForm.get('brValidityEnd').value.day : this.branchForm.get('brValidityEnd').value.day);
            if (this.branchForm.value.brId == null || this.branchForm.value.brId == null) {
                this.branchService.create(this.branchForm.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    console.log('response ', res);
                    if (res.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            showConfirmButton: true,
                            title: res.status.message,
                        });
                        _this.getAllBranch();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
                console.log(this.branchForm.value);
            }
            // Update form
            else {
                this.branchService.update(this.branchForm.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    console.log('response ', res);
                    if (res.error) {
                        _this.submitted = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            showConfirmButton: true,
                            title: res.message,
                        });
                        _this.getAllBranch();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        }
        this.reset();
    };
    BranchComponent.prototype.reset = function () {
        this.submitted = false;
        this.showForm = false;
        this.showList = true;
        this.globalState = [];
        this.resetForm();
    };
    BranchComponent.prototype.viewBranch = function (id, content) {
        var _this = this;
        this.showView = true;
        this.branchView = this.globalBranch.filter(function (item) { return item.brId == id; })[0];
        this.branchService.getBranchById(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('View....', res.data);
                _this.branchView = res.data;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.open(content);
    };
    BranchComponent.prototype.closeView = function () {
        this.showView = false;
    };
    BranchComponent.prototype.editBranch = function (id) {
        var _this = this;
        this.showForm = true;
        this.showList = false;
        this.btnName = "Update";
        this.branchService.getBranchById(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Update....', res.data);
                _this.changeCountry(res.data.refCountryId);
                res.data.brValidityStart = { year: +res.data.brValidityStart.slice(0, 4), month: +res.data.brValidityStart.slice(5, 7), day: +res.data.brValidityStart.slice(8, 10) };
                res.data.brValidityEnd = { year: +res.data.brValidityEnd.slice(0, 4), month: +res.data.brValidityEnd.slice(5, 7), day: +res.data.brValidityEnd.slice(8, 10) };
                _this.branchForm.patchValue(res.data);
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    BranchComponent.prototype.deleteBranch = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.branchService.delete(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.status.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            title: res.status.message
                        });
                        _this.getAllBranch();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    BranchComponent.prototype.updateFilter = function (val) {
        console.log(val);
    };
    // Open default modal
    BranchComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    BranchComponent.prototype.getDismissReason = function (reason) {
        if (reason == _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason == _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    BranchComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'cmodal', size: 'lg' });
    };
    // Open content with dark section
    BranchComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    BranchComponent.prototype.disableDate = function (date) {
        console.log("before", date);
        this.branchForm.get('brValidityEnd').reset();
        if (date != undefined || date != null) {
            this.endDate = {
                year: this.checkYear(date.year, date.month, date.day),
                month: this.checkMonth(date.month, date.day),
                day: this.checkDay(date.month, date.day)
            };
        }
        console.log("after", this.endDate);
    };
    BranchComponent.prototype.checkYear = function (year, month, day) {
        if (month == 12 && day == 31) {
            return year + 1;
        }
        else {
            return year;
        }
    };
    BranchComponent.prototype.checkMonth = function (month, day) {
        if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && day == 31) {
            return month + 1;
        }
        else if ((month == 4 || month == 6 || month == 8 || month == 9 || month == 11) && day == 30) {
            return month + 1;
        }
        else if (month == 12 && day == 31) {
            return 1;
        }
        else if ((month == 2 && day == 28) || (month == 2 && day == 29)) {
            return month + 1;
        }
        else {
            return month;
        }
    };
    BranchComponent.prototype.checkDay = function (month, day) {
        if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day == 31) {
            return 1;
        }
        else if ((month == 4 || month == 6 || month == 8 || month == 9 || month == 11) && day == 30) {
            return 1;
        }
        else if ((month == 2 && day == 28) || (month == 2 && day == 29)) {
            return 1;
        }
        else {
            return day + 1;
        }
    };
    BranchComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"] },
        { type: _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"] },
        { type: _state_services_state_services__WEBPACK_IMPORTED_MODULE_7__["StateService"] },
        { type: _customer_services_customer_services__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BranchComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BranchComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BranchComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BranchComponent.prototype, "maxPages", void 0);
    BranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! raw-loader!./branch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/branch/branch.component.html"),
            styles: [__webpack_require__(/*! ./branch.component.scss */ "./src/app/dashboard/superadmin/masters/branch/branch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"],
            _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _state_services_state_services__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            _customer_services_customer_services__WEBPACK_IMPORTED_MODULE_8__["CustomerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/branch/service/branch.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/branch/service/branch.service.ts ***!
  \*******************************************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BranchService = /** @class */ (function () {
    function BranchService(http) {
        this.http = http;
    }
    BranchService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BranchService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BranchService.prototype.getBranchById = function (brId) {
        var param = { 'brId': brId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/getBranchDetailsByBranchId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BranchService.prototype.update = function (data) {
        console.log("update", data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/updateByBranchId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BranchService.prototype.delete = function (brId) {
        var param = { 'brId': brId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/deleteByBranchId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BranchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    BranchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/country/country.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/country/country.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-class .tooltip-inner {\n  background-color: #1abbec;\n  font-size: 75%; }\n\n.my-custom-class .arrow::before {\n  border-top-color: #1abbec; }\n\ninput {\n  width: 250px !important; }\n\nselect {\n  width: 250px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jb3VudHJ5L0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcY291bnRyeVxcY291bnRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQWlDLEVBQUE7O0FBR25DO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3VwZXJhZG1pbi9tYXN0ZXJzL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubXktY3VzdG9tLWNsYXNzIC50b29sdGlwLWlubmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwxODcsMjM2KTtcclxuICBmb250LXNpemU6IDc1JTtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIC5hcnJvdzo6YmVmb3JlICB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDI2LDE4NywyMzYpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/country/country.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/country/country.component.ts ***!
  \***************************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_country_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/country.services */ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var CountryComponent = /** @class */ (function () {
    function CountryComponent(fb, countryService) {
        this.fb = fb;
        this.countryService = countryService;
        this.globalCountry = [
            { counytryId: 1, counytryName: 'India' },
            { counytryId: 2, counytryName: 'USA' }
        ];
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    CountryComponent.prototype.ngOnInit = function () {
        this.newCountry = this.fb.group({
            countryId: [''],
            countryTelCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[+]{1}[0-9]{1,5}")]],
            countryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.updateCountry = this.fb.group({
            countryId: [''],
            countryTelCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[+]{1}[0-9]{1,5}")]],
            countryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.getAllCountry();
    };
    Object.defineProperty(CountryComponent.prototype, "f", {
        get: function () { return this.newCountry.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryComponent.prototype, "f1", {
        get: function () { return this.updateCountry.controls; },
        enumerable: true,
        configurable: true
    });
    CountryComponent.prototype.getAllCountry = function () {
        var _this = this;
        this.countryService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Countries...', res.data1);
                _this.countries = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    CountryComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    CountryComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newCountry.reset();
    };
    // Save new Form
    CountryComponent.prototype.save = function () {
        var _this = this;
        console.log('save', this.newCountry.value);
        this.submitted = true;
        if (this.newCountry.invalid) {
            return;
        }
        this.showNew = false;
        this.countryService.create(this.newCountry.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                _this.getAllCountry();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.cancel();
    };
    // Update Form open
    CountryComponent.prototype.editCountry = function (data) {
        data.showUpdate = true;
        this.updateCountry.patchValue(data);
    };
    // Update Data
    CountryComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.submitted1 = true;
        if (this.updateCountry.invalid) {
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update!'
            }).then(function (result) {
                if (result.value) {
                    _this.countryService.update(_this.updateCountry.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (res) {
                        if (res.error) {
                            _this.submitted = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: res.message,
                            });
                            _this.cancelUpdate(data);
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'success',
                                showConfirmButton: true,
                                title: res.message,
                            });
                            _this.getAllCountry();
                            _this.cancelUpdate(data);
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                        _this.cancelUpdate(data);
                    });
                }
            });
        }
    };
    // Cancel Data
    CountryComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateCountry.reset();
    };
    // Delete Data
    CountryComponent.prototype.deleteCountry = function (data) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.countryService.delete(data)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.status.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            title: res.status.message
                        });
                        _this.getAllCountry();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    CountryComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    CountryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_country_services__WEBPACK_IMPORTED_MODULE_1__["CountryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CountryComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CountryComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CountryComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CountryComponent.prototype, "maxPages", void 0);
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! raw-loader!./country.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.scss */ "./src/app/dashboard/superadmin/masters/country/country.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_country_services__WEBPACK_IMPORTED_MODULE_1__["CountryService"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/country/services/country.services.ts ***!
  \***********************************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/country/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CountryService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/country/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CountryService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/country/updateByCountryId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CountryService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/country/deleteByCountryId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CountryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 300px; }\n\nselect {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9jb250cmFjdG9yL0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcY3VzdG9tZXJcXGNvbnRyYWN0b3JcXGNvbnRyYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9jb250cmFjdG9yL2NvbnRyYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorComponent", function() { return ContractorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_contractor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/contractor.service */ "./src/app/dashboard/superadmin/masters/customer/contractor/services/contractor.service.ts");
/* harmony import */ var app_shared_common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/common/common */ "./src/app/shared/common/common.ts");







var ContractorComponent = /** @class */ (function () {
    function ContractorComponent(fb, contractorService) {
        this.fb = fb;
        this.contractorService = contractorService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
    }
    ContractorComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        console.log('cust id', this.custId);
        this.newContractor = this.fb.group({
            contractorId: [''],
            refCustId: [''],
            contractorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z\\. ]+[a-zA-Z ]$')]]
        });
        this.updateContractor = this.fb.group({
            contractorId: [''],
            refCustId: [''],
            contractorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z\\. ]+[a-zA-Z ]$')]]
        });
        if (this.custId == 0) {
            this.getAllContractor();
        }
        else {
            this.getAllCustContractor();
        }
    };
    ContractorComponent.prototype.checkName = function () {
        console.log(this.newContractor.value['contractorName']);
        if (Object(app_shared_common_common__WEBPACK_IMPORTED_MODULE_6__["validatePersonName"])(this.newContractor.value['contractorName'])) {
            this.submitted = true;
        }
        else {
            this.submitted = false;
        }
    };
    Object.defineProperty(ContractorComponent.prototype, "f", {
        get: function () { return this.newContractor.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContractorComponent.prototype, "f1", {
        get: function () { return this.updateContractor.controls; },
        enumerable: true,
        configurable: true
    });
    ContractorComponent.prototype.getAllContractor = function () {
        var _this = this;
        this.contractorService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('contractor...', res);
                _this.contractors = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ContractorComponent.prototype.getAllCustContractor = function () {
        var _this = this;
        this.contractorService.getByCustId(this.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('contractor...', res);
                _this.contractors = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    ContractorComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    ContractorComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
    };
    // Save new Form
    ContractorComponent.prototype.save = function () {
        var _this = this;
        this.newContractor.patchValue({ refCustId: this.custId });
        console.log('save', this.newContractor.value);
        this.submitted = true;
        if (this.newContractor.invalid) {
            return;
        }
        this.showNew = false;
        this.contractorService.create(this.newContractor.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                if (_this.custId == 0) {
                    _this.getAllContractor();
                }
                else {
                    _this.getAllCustContractor();
                }
                _this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Update Form open
    ContractorComponent.prototype.editCustomer = function (data) {
        data.showUpdate = true;
        this.updateContractor.patchValue(data);
    };
    // Update Data
    ContractorComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.updateContractorFormData = this.fb.group({
            contractorId: [this.contractors.contractorId],
            refCustId: [this.custId],
            contractorName: [this.contractors.contractorName]
        });
        this.submitted1 = true;
        if (this.updateContractorFormData.invalid) {
            return;
        }
        data.showUpdate = false;
        this.contractorService.update(this.updateContractorFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                if (_this.custId == 0) {
                    _this.getAllContractor();
                }
                else {
                    _this.getAllCustContractor();
                }
                _this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Cancel Data
    ContractorComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    ContractorComponent.prototype.reset = function () {
        this.submitted = false;
        this.newContractor.reset();
        this.updateContractor.reset();
        if (this.custId == 0) {
            this.getAllContractor();
        }
        else {
            this.getAllCustContractor();
        }
    };
    // Delete Data
    ContractorComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        console.log('delete...', data);
        this.contractorService.delete(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            console.log('delete response', res);
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                // this.reset();
                if (_this.custId == 0) {
                    _this.getAllContractor();
                }
                else {
                    _this.getAllCustContractor();
                }
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ContractorComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_contractor_service__WEBPACK_IMPORTED_MODULE_5__["ContractorService"] }
    ]; };
    ContractorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contractor',
            template: __webpack_require__(/*! raw-loader!./contractor.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.html"),
            styles: [__webpack_require__(/*! ./contractor.component.scss */ "./src/app/dashboard/superadmin/masters/customer/contractor/contractor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_contractor_service__WEBPACK_IMPORTED_MODULE_5__["ContractorService"]])
    ], ContractorComponent);
    return ContractorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/contractor/services/contractor.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/contractor/services/contractor.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: ContractorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorService", function() { return ContractorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var ContractorService = /** @class */ (function () {
    function ContractorService(http) {
        this.http = http;
    }
    ContractorService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/contractor/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ContractorService.prototype.getByCustId = function (custId) {
        var param = { 'refCustId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/contractor/getAllByCustId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ContractorService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/contractor/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ContractorService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/contractor/updateByContractorId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ContractorService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/contractor/deleteByContractorId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ContractorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ContractorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContractorService);
    return ContractorService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/customer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/customer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.table.table-responsive tr td:first-child {\n  display: none !important; }\n\n:host ::ng-deep .table tr td:first-child {\n  display: none !important; }\n\n:host ::ng-deep th.ng2-smart-th.custId.ng-star-inserted {\n  display: none !important; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0; }\n\n.label-control.required:after {\n  color: #d00;\n  content: \"*\"; }\n\n.searchCust {\n  padding: 4px;\n  width: 43%;\n  margin-right: 26%;\n  float: right;\n  border-radius: 21px;\n  border-bottom-color: gray;\n  border-right-color: gray;\n  border-width: 1px; }\n\nth {\n  text-align: left; }\n\n.cmodal {\n  width: 700px !important;\n  max-width: 1000px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGN1c3RvbWVyXFxjdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUEyQyx3QkFBd0IsRUFBQTs7QUFFbkU7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7O0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFNZDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3VwZXJhZG1pbi9tYXN0ZXJzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUudGFibGUudGFibGUtcmVzcG9uc2l2ZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O31cclxuXHJcbjpob3N0IDo6bmctZGVlcCB0aC5uZzItc21hcnQtdGguY3VzdElkLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRyb2wucmVxdWlyZWQ6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjZDAwO1xyXG4gIGNvbnRlbnQ6IFwiKlwiO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyB0b3A6N3B4O1xyXG59XHJcblxyXG4uc2VhcmNoQ3VzdCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHdpZHRoOiA0MyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNiU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JheTtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY21vZGFsIHtcclxuICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/customer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/customer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NgbdModalContent, CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _industry_services_industry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../industry/services/industry.service */ "./src/app/dashboard/superadmin/masters/industry/services/industry.service.ts");
/* harmony import */ var _state_services_state_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../state/services/state.services */ "./src/app/dashboard/superadmin/masters/state/services/state.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/customer.services */ "./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _country_services_country_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../country/services/country.services */ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/confirmation-dialog/confirmation-dialog.service */ "./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var app_shared_common_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/common/common */ "./src/app/shared/common/common.ts");














var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var CustomerComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function CustomerComponent(formBuilder, customerService, modalService, countryService, stateService, spinnerService, confirmationDialogService, industryService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.modalService = modalService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.spinnerService = spinnerService;
        this.confirmationDialogService = confirmationDialogService;
        this.industryService = industryService;
        this.incorrectCE = false;
        this.submitted = false;
        this.showList = true;
        this.showForm = false;
        this.submitBtn = true;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
        this.custCodeDisabled = false;
        this.template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';
        this.settings = {
            mode: 'external',
            hideSubHeader: true,
            actions: {
                custom: [{ name: 'view', title: "<i class=\"ft-eye font-medium-3 mr-2\"></i>" }],
                add: false,
                editable: false,
                position: 'right'
            },
            columns: {
                custId: {
                    title: 'SL No',
                    show: false,
                },
                custName: {
                    title: 'Customer',
                    filter: false,
                },
                custCode: {
                    title: 'Code',
                    filter: false,
                },
                custCity: {
                    title: 'City',
                    filter: false,
                },
                countryName: {
                    title: 'Country',
                    filter: false,
                },
                stateName: {
                    title: 'State',
                    filter: false,
                },
                custEmail: {
                    title: 'Email',
                    filter: false,
                },
                industryName: {
                    title: 'Industry',
                    filter: false,
                },
                custNoOfBranch: {
                    title: 'Branches(#)',
                    filter: false,
                }
            },
            attr: {
                class: 'table table-responsive'
            },
            edit: {
                editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
            },
            delete: {
                deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
            },
        };
        this.checkDateValidation = function (control) {
            try {
                var startingDatefield = control.get('custValidityStart').value;
                _this.startDate = new Date(startingDatefield); //new Date(startingDatefield).getDate()
                var endingDatefield = control.get('custValidityEnd').value;
                if (_this.today >= startingDatefield) { //compare to current date 
                    console.log("Please set a Start Date that is on or after Current Date and Time.");
                    return { 'effectiveStartDatetime': false };
                }
                else if (startingDatefield > endingDatefield && endingDatefield) {
                    _this.customerForm.controls['custValidityEnd'].setErrors({ 'incorrect': true });
                    console.log("Please set an End Date and Time that is after the Start Date and Time.");
                    _this.incorrectCE = true;
                    return { 'incorrectCE': true };
                }
                else {
                    return {};
                }
            }
            catch (err) {
            }
        };
        this.submitBtn = true;
    }
    // And the listener code which asks the DataSource to filter the data:
    CustomerComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'custName',
                search: query,
            },
            {
                field: 'custCode',
                search: query,
            },
            {
                field: 'custCity',
                search: query,
            },
            {
                field: 'countryName',
                search: query,
            },
            {
                field: 'stateName',
                search: query,
            },
            {
                field: 'custEmail',
                search: query,
            },
            {
                field: 'industryName',
                search: query,
            },
            {
                field: 'custNoOfBranch',
                search: query,
            },
        ], false);
        if (query === '') {
            this.getCustomerAll();
        }
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            custId: [null],
            custName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z\\. ]+[a-zA-Z ]$')]],
            // tslint:disable-next-line: max-line-length
            custCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^([A-Za-z]{3})+?([0-9]{3})?'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)]],
            // tslint:disable-next-line: max-line-length
            custAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            custCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            refCountryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            refStateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{6}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custGSTIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9A-Z]{15,20}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(15)]],
            custMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custLandline: [null],
            custEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            refIndustryTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custValidityStart: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custValidityEnd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custNoOfBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{1,2}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            custLogoFile: [null]
        }, { validators: this.checkDateValidation });
        this.getAllCountry();
        this.getCustomerAll();
        this.getAllIndustry();
    };
    CustomerComponent.prototype.checkName = function () {
        if (Object(app_shared_common_common__WEBPACK_IMPORTED_MODULE_13__["validateCompanyName"])(this.customers.custName)) {
            this.submitted = true;
        }
        else {
            this.submitted = false;
        }
    };
    CustomerComponent.prototype.getAllIndustry = function () {
        var _this = this;
        this.spinnerService.show();
        this.industryService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                _this.industries = res.industryTypeDtoList;
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.getAllCountry = function () {
        var _this = this;
        this.spinnerService.show();
        this.countryService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('states...', res.data);
                _this.spinnerService.hide();
                _this.countries = res.data1;
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.showState = function (event) {
        var _this = this;
        console.log('country on change', event.target.value);
        this.spinnerService.show();
        this.stateService.getStateByCountry(event.target.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                _this.states = res.data1;
                // this.reset();
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.showStateById = function (Id) {
        var _this = this;
        console.log('country on change', Id);
        this.spinnerService.show();
        this.stateService.getStateByCountry(Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                _this.states = res.data1;
                // this.reset();
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Open default modal
    CustomerComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    CustomerComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    CustomerComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'cmodal', size: 'lg' });
    };
    // Open content with dark section
    CustomerComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    CustomerComponent.prototype.getCustomerAll = function () {
        var _this = this;
        this.spinnerService.show();
        this.customerService.getAllCustomers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                _this.customers = res.dataList;
                _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__["LocalDataSource"](res.dataList);
            }
        }, function (error) {
            console.log('RESPONSE ERROR::====> ');
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    Object.defineProperty(CustomerComponent.prototype, "f", {
        get: function () { return this.customerForm.controls; },
        enumerable: true,
        configurable: true
    });
    CustomerComponent.prototype.onSelectFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.sellersPermitFile = file;
            this.handleInputChange(file); //turn into base64
        }
        else {
            alert("No file selected");
        }
    };
    CustomerComponent.prototype.handleInputChange = function (files) {
        var file = files;
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onloadend = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    CustomerComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        // this.imageSrc = base64result;
        this.sellersPermitFile = base64result;
        console.log(this.sellersPermitFile);
    };
    CustomerComponent.prototype.onSubmit = function () {
        if (this.submitType === 'save') {
            this.save();
        }
        else {
            this.updateCustomer();
        }
    };
    CustomerComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        this.files = this.f.custLogoFile.value;
        this.submitCustFormData = this.formBuilder.group({
            custId: [null],
            custName: [this.f.custName.value],
            custCode: [this.f.custCode.value],
            custAddress: [this.f.custAddress.value],
            custCity: [this.f.custCity.value],
            refCountryId: [Number(this.f.refCountryId.value)],
            refStateId: [Number(this.f.refStateId.value)],
            custPincode: [this.f.custPincode.value],
            custGSTIN: [this.f.custGSTIN.value],
            custMobile: [this.f.custMobile.value],
            custLandline: [this.f.custLandline.value],
            custEmail: [this.f.custEmail.value],
            refIndustryTypeId: [Number(this.f.refIndustryTypeId.value)],
            custValidityStart: [this.f.custValidityStart.value],
            custValidityEnd: [this.f.custValidityEnd.value],
            custNoOfBranch: [this.f.custNoOfBranch.value],
            custLogoFile: [this.sellersPermitFile]
        });
        // console.log('customer data', this.submitCustFormData.value);
        //   // console.log(this.f.custMobile.errors);
        //   // stop here if form is invalid
        if (this.customerForm.invalid) {
            return;
        }
        this.spinnerService.show();
        this.customerService.saveCustomer(this.submitCustFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                _this.reset();
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.viewCustomer = function (event, content) {
        var _this = this;
        console.log('view...', event.data.custId);
        this.spinnerService.show();
        this.customerService.getCustomerById(event.data.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((function (res) {
            _this.spinnerService.hide();
            _this.open(content);
            console.log('view modal...', res);
            // res.data.custValidityStart = res.data.custValidityStart.slice(0, 10);
            // res.data.custValidityEnd = res.data.custValidityEnd.slice(0, 10);
            _this.custView = res.data;
        }));
    };
    CustomerComponent.prototype.updateCustomer = function () {
        var _this = this;
        // console.log('Update customer...');
        this.submitted = true;
        this.files = this.f.custLogoFile.value;
        this.submitCustFormData = this.formBuilder.group({
            custId: [this.f.custId.value],
            custName: [this.f.custName.value],
            custCode: [this.f.custCode.value],
            custAddress: [this.f.custAddress.value],
            custCity: [this.f.custCity.value],
            refCountryId: [Number(this.f.refCountryId.value)],
            refStateId: [Number(this.f.refStateId.value)],
            custPincode: [this.f.custPincode.value],
            custGSTIN: [this.f.custGSTIN.value],
            custMobile: [this.f.custMobile.value],
            custLandline: [this.f.custLandline.value],
            custEmail: [this.f.custEmail.value],
            refIndustryTypeId: [Number(this.f.refIndustryTypeId.value)],
            custValidityStart: [this.f.custValidityStart.value],
            custValidityEnd: [this.f.custValidityEnd.value],
            custNoOfBranch: [this.f.custNoOfBranch.value],
            custLogoFile: [this.sellersPermitFile]
        });
        // console.log('update data', this.submitCustFormData.value);
        if (this.customerForm.invalid) {
            return;
        }
        this.spinnerService.show();
        this.customerService.updateCustomers(this.submitCustFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                _this.reset();
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.reset = function () {
        this.submitted = false;
        this.customerForm.reset();
        this.showList = true;
        this.showForm = false;
        this.getCustomerAll();
    };
    CustomerComponent.prototype.openForm = function () {
        this.showList = false;
        this.showForm = true;
        this.formInfo = 'Create';
        this.submitBtn = true;
        this.custCodeDisabled = false;
    };
    CustomerComponent.prototype.editCustomer = function (event) {
        var _this = this;
        console.log('edit...', event.data);
        console.log('id...', event.data.custId);
        this.showForm = true;
        this.showList = false;
        this.submitBtn = false;
        this.spinnerService.show();
        this.customerService.getCustomerById(event.data.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((function (res) {
            console.log('edit...', res);
            _this.customers = 0;
            _this.custCodeDisabled = true;
            _this.spinnerService.hide();
            _this.showStateById(res.data.refCountryId);
            res.data.custValidityStart = res.data.custValidityStart.slice(0, 10);
            res.data.custValidityEnd = res.data.custValidityEnd.slice(0, 10);
            _this.customers = res.data;
        }));
    };
    CustomerComponent.prototype.openConfirmationDialog = function (event) {
        var _this = this;
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ... ?')
            .then(function (confirmed) {
            if (confirmed) {
                _this.deleteCustomer(event.data.custId);
            }
        })
            .catch(function () { return console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'); });
    };
    CustomerComponent.prototype.deleteCustomer = function (custId) {
        var _this = this;
        this.spinnerService.show();
        this.customerService.deleteCustomer(custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                _this.reset();
            }
        }, function (error) {
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    CustomerComponent.prototype.checkDate = function () {
        console.log('Chnaged');
    };
    CustomerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_customer_services__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
        { type: _country_services_country_services__WEBPACK_IMPORTED_MODULE_9__["CountryService"] },
        { type: _state_services_state_services__WEBPACK_IMPORTED_MODULE_2__["StateService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerService"] },
        { type: app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogService"] },
        { type: _industry_services_industry_service__WEBPACK_IMPORTED_MODULE_1__["IndustryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "maxPages", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/dashboard/superadmin/masters/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_customer_services__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _country_services_country_services__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
            _state_services_state_services__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerService"],
            app_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogService"],
            _industry_services_industry_service__WEBPACK_IMPORTED_MODULE_1__["IndustryService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/department/department.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/department/department.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 300px; }\n\nselect {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9kZXBhcnRtZW50L0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcY3VzdG9tZXJcXGRlcGFydG1lbnRcXGRlcGFydG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9kZXBhcnRtZW50L2RlcGFydG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/department/department.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/department/department.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/department.service */ "./src/app/dashboard/superadmin/masters/customer/department/services/department.service.ts");






var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(fb, departmentService) {
        this.fb = fb;
        this.departmentService = departmentService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        console.log('cust id', this.custId);
        this.newDepartment = this.fb.group({
            deptId: [''],
            refCustId: [''],
            deptName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
        this.updateDepartment = this.fb.group({
            deptId: [''],
            refCustId: [''],
            deptName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
        // tslint:disable-next-line: triple-equals
        if (this.custId == 0) {
            this.getAllDepartment();
        }
        else {
            this.getAllDepartmentByCustId();
        }
    };
    Object.defineProperty(DepartmentComponent.prototype, "f", {
        get: function () { return this.newDepartment.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartmentComponent.prototype, "f1", {
        get: function () { return this.updateDepartment.controls; },
        enumerable: true,
        configurable: true
    });
    DepartmentComponent.prototype.getAllDepartment = function () {
        var _this = this;
        this.departmentService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Department...', res);
                _this.departments = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    DepartmentComponent.prototype.getAllDepartmentByCustId = function () {
        var _this = this;
        this.departmentService.getByCustId(this.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Department...', res);
                _this.departments = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    DepartmentComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    DepartmentComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
    };
    // Save new Form
    DepartmentComponent.prototype.save = function () {
        var _this = this;
        this.newDepartment.patchValue({ refCustId: this.custId });
        console.log('save', this.newDepartment.value);
        this.submitted = true;
        if (this.newDepartment.invalid) {
            return;
        }
        this.showNew = false;
        this.departmentService.create(this.newDepartment.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                if (_this.custId == 0) {
                    _this.getAllDepartment();
                }
                else {
                    _this.getAllDepartmentByCustId();
                }
                _this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    DepartmentComponent.prototype.reset = function () {
        this.submitted = false;
        this.newDepartment.reset();
        this.updateDepartment.reset();
        if (this.custId == 0) {
            this.getAllDepartment();
        }
        else {
            this.getAllDepartmentByCustId();
        }
    };
    // Update Form open
    DepartmentComponent.prototype.editCustomer = function (data) {
        data.showUpdate = true;
        this.updateDepartment.patchValue(data);
    };
    // Update Data
    DepartmentComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.updateDepartmentFormData = this.fb.group({
            deptId: [this.departments.deptId],
            refCustId: [this.custId],
            deptName: [this.departments.deptName]
        });
        console.log('update...', this.updateDepartmentFormData.value);
        this.submitted1 = true;
        if (this.updateDepartmentFormData.invalid) {
            return;
        }
        data.showUpdate = false;
        this.departmentService.update(this.updateDepartmentFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                if (_this.custId == 0) {
                    _this.getAllDepartment();
                }
                else {
                    _this.getAllDepartmentByCustId();
                }
                _this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Cancel Data
    DepartmentComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    // Delete Data
    DepartmentComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        console.log('delete...', data);
        this.departmentService.delete(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            console.log('delete response', res);
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                // this.reset();
                if (_this.custId == 0) {
                    _this.getAllDepartment();
                }
                else {
                    _this.getAllDepartmentByCustId();
                }
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    DepartmentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] }
    ]; };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.scss */ "./src/app/dashboard/superadmin/masters/customer/department/department.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/department/services/department.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/department/services/department.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/department/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DepartmentService.prototype.getByCustId = function (custId) {
        var param = { 'refCustId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/department/getAllbyCustId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DepartmentService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/department/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DepartmentService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/department/updateByDepartmentId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DepartmentService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/department/deleteByDepartmentId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/designation/designation.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/designation/designation.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 300px; }\n\nselect {\n  width: 300px; }\n\n.ng2-smart-pagination.pagination .page-link {\n  line-height: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9kZXNpZ25hdGlvbi9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGN1c3RvbWVyXFxkZXNpZ25hdGlvblxcZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUdZLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9kZXNpZ25hdGlvbi9kZXNpZ25hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5uZzItc21hcnQtcGFnaW5hdGlvbntcclxuICAgICYucGFnaW5hdGlvbntcclxuICAgICAgICAucGFnZS1saW5re1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/designation/designation.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/designation/designation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_designation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/designation.service */ "./src/app/dashboard/superadmin/masters/customer/designation/services/designation.service.ts");






var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(fb, designationService) {
        this.fb = fb;
        this.designationService = designationService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
    }
    DesignationComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        console.log('cust id', this.custId);
        this.newDesignation = this.fb.group({
            designationId: [''],
            refCustId: [''],
            designationName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
        this.updateDesignation = this.fb.group({
            designationId: [''],
            refCustId: [''],
            designationName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
        if (this.custId == 0) {
            this.getAllDesignation();
        }
        else {
            this.getAllDesignationByCustId();
        }
    };
    Object.defineProperty(DesignationComponent.prototype, "f", {
        get: function () { return this.newDesignation.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignationComponent.prototype, "f1", {
        get: function () { return this.updateDesignation.controls; },
        enumerable: true,
        configurable: true
    });
    DesignationComponent.prototype.getAllDesignation = function () {
        var _this = this;
        this.designationService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Designation...', res);
                _this.designations = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    DesignationComponent.prototype.getAllDesignationByCustId = function () {
        var _this = this;
        this.designationService.getByCustId(this.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Designation...', res);
                _this.designations = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    DesignationComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    DesignationComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
    };
    // Save new Form
    DesignationComponent.prototype.save = function () {
        var _this = this;
        this.newDesignation.patchValue({ refCustId: this.custId });
        console.log('save', this.newDesignation.value);
        this.submitted = true;
        if (this.newDesignation.invalid) {
            return;
        }
        this.showNew = false;
        this.designationService.create(this.newDesignation.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                if (_this.custId == 0) {
                    _this.getAllDesignation();
                }
                else {
                    _this.getAllDesignationByCustId();
                }
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Update Form open
    DesignationComponent.prototype.editCustomer = function (data) {
        data.showUpdate = true;
        this.updateDesignation.patchValue(data);
    };
    // Update Data
    DesignationComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.updateDesignationFormData = this.fb.group({
            designationId: [this.designations.designationId],
            refCustId: [this.custId],
            designationName: [this.designations.designationName]
        });
        console.log('update...', this.updateDesignationFormData.value);
        this.submitted1 = true;
        if (this.updateDesignationFormData.invalid) {
            return;
        }
        data.showUpdate = false;
        this.designationService.update(this.updateDesignationFormData.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                if (_this.custId == 0) {
                    _this.getAllDesignation();
                }
                else {
                    _this.getAllDesignationByCustId();
                }
                // this.reset();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Cancel Data
    DesignationComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    // Delete Data
    DesignationComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        console.log('delete...', data);
        this.designationService.delete(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            console.log('delete response', res);
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                // this.reset();
                if (_this.custId == 0) {
                    _this.getAllDesignation();
                }
                else {
                    _this.getAllDesignationByCustId();
                }
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    DesignationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_designation_service__WEBPACK_IMPORTED_MODULE_5__["DesignationService"] }
    ]; };
    DesignationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__(/*! raw-loader!./designation.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/designation/designation.component.html"),
            styles: [__webpack_require__(/*! ./designation.component.scss */ "./src/app/dashboard/superadmin/masters/customer/designation/designation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_designation_service__WEBPACK_IMPORTED_MODULE_5__["DesignationService"]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/designation/services/designation.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/designation/services/designation.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: DesignationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationService", function() { return DesignationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var DesignationService = /** @class */ (function () {
    function DesignationService(http) {
        this.http = http;
    }
    DesignationService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/designation/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DesignationService.prototype.getByCustId = function (custId) {
        var param = { 'refCustId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/designation/getAllByCustId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DesignationService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/designation/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DesignationService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/designation/updateBydesignationId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DesignationService.prototype.delete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/designation/deleteBydesignationId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    DesignationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DesignationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DesignationService);
    return DesignationService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-class .tooltip-inner {\n  background-color: #1abbec;\n  font-size: 75%; }\n\n.my-custom-class.arrow::before {\n  border-top-color: #1abbec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9ob2xpZGF5Q2FsZW5kYXIvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdXBlcmFkbWluXFxtYXN0ZXJzXFxjdXN0b21lclxcaG9saWRheUNhbGVuZGFyXFxob2xpZGF5Q2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBaUM7RUFDakMsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9ob2xpZGF5Q2FsZW5kYXIvaG9saWRheUNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzcyAudG9vbHRpcC1pbm5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwxODcsMjM2KTtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gIH1cclxuICAubXktY3VzdG9tLWNsYXNzLmFycm93OjpiZWZvcmUgIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYigyNiwxODcsMjM2KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HolidayCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayCalendarComponent", function() { return HolidayCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var HolidayCalendarComponent = /** @class */ (function () {
    function HolidayCalendarComponent(fb) {
        this.fb = fb;
        this.Branch = [
            { brId: '1', brCode: 'LNG001', brName: 'LNG Technologies' },
            { brId: '2', brCode: 'LNG002', brName: 'LNG Technologies' },
            { brId: '3', brCode: 'LNG003', brName: 'LNG Technologies' },
            { brId: '4', brCode: 'LNG004', brName: 'LNG Technologies' },
        ];
        this.Holiday = [
            { holidayCalendarYear: '2019', holidayDate: '15-08-2019', holidayName: 'Indepenedance Day', showUpdate: false },
            { holidayCalendarYear: '2019', holidayDate: '26-01-2019', holidayName: 'Republic Day', showUpdate: false },
            { holidayCalendarYear: '2019', holidayDate: '02-10-2019', holidayName: 'Gandhi Jayanti Day', showUpdate: false },
            { holidayCalendarYear: '2019', holidayDate: '01-11-2019', holidayName: 'Karnataka Rajyostava', showUpdate: false },
        ];
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.SelectForm = true;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    HolidayCalendarComponent.prototype.ngOnInit = function () {
        this.HolidayCalenderForm = this.fb.group({
            selectCompanyBranch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.newHoliday = this.fb.group({
            selectCompanyBranch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            holidayCalendarYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            holidayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            holidayName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z ]{0,25}")]]
        });
        this.updateHoliday = this.fb.group({
            holidayCalendarYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{4}")]],
            holidayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            holidayName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z ]{0,25}")]],
            showUpdate: [],
        });
    };
    Object.defineProperty(HolidayCalendarComponent.prototype, "f", {
        get: function () { return this.newHoliday.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HolidayCalendarComponent.prototype, "f1", {
        get: function () { return this.updateHoliday.controls; },
        enumerable: true,
        configurable: true
    });
    HolidayCalendarComponent.prototype.openForm = function () {
        for (var _i = 0, _a = this.pageOfItems; _i < _a.length; _i++) {
            var dataItem = _a[_i];
            if (dataItem.showUpdate != undefined) {
                dataItem.showUpdate = false;
            }
        }
        this.showNew = true;
    };
    HolidayCalendarComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newHoliday.reset();
    };
    HolidayCalendarComponent.prototype.save = function () {
        this.submitted = true;
        if (this.newHoliday.invalid) {
            return;
        }
        this.showNew = false;
    };
    //Edit Form open
    HolidayCalendarComponent.prototype.editHoliday = function (data) {
        this.showNew = false;
        for (var _i = 0, _a = this.Holiday; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.showUpdate != undefined) {
                c.showUpdate = false;
            }
        }
        data.showUpdate = true;
        console.log(data);
        this.updateHoliday.setValue(data);
    };
    // Update Data
    HolidayCalendarComponent.prototype.saveUpdate = function (data) {
        console.log(data);
        this.submitted1 = true;
        if (this.updateHoliday.invalid) {
            return;
        }
        console.log(data);
        console.log(this.updateHoliday.value);
        console.log(this.Holiday);
        data.showUpdate = false;
        this.submitted1 = false;
    };
    // Cancel Data
    HolidayCalendarComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
    };
    // Delete Data
    HolidayCalendarComponent.prototype.deleteHoliday = function (data) {
    };
    HolidayCalendarComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    HolidayCalendarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidayCalendarComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidayCalendarComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidayCalendarComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidayCalendarComponent.prototype, "maxPages", void 0);
    HolidayCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holidayCalendar',
            template: __webpack_require__(/*! raw-loader!./holidayCalendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./holidayCalendar.component.scss */ "./src/app/dashboard/superadmin/masters/customer/holidayCalendar/holidayCalendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HolidayCalendarComponent);
    return HolidayCalendarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/notification/notification.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/notification/notification.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 11px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #eee; }\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.container input:checked ~ .checkmark {\n  background-color: #2196F3; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.container input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.container .checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9ub3RpZmljYXRpb24vRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdXBlcmFkbWluXFxtYXN0ZXJzXFxjdXN0b21lclxcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHbkIsd0NBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdWLDZCQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFHeEIsK0NBQUE7O0FBQ0E7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEIsd0RBQUE7O0FBQ0E7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0IsNkRBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZixvQ0FBQTs7QUFDQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEIsa0NBQUE7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFFaEMsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3VwZXJhZG1pbi9tYXN0ZXJzL2N1c3RvbWVyL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbiAgLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4gIC5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4gIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/notification/notification.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/notification/notification.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(fb) {
        this.fb = fb;
        this.Branch = [
            { brId: '1', brCode: 'LNG001', brName: 'LNG Technologies', showUpdate: false },
            { brId: '2', brCode: 'LNG002', brName: 'LNG Technologies', showUpdate: false },
            { brId: '3', brCode: 'LNG003', brName: 'LNG Technologies', showUpdate: false },
            { brId: '4', brCode: 'LNG004', brName: 'LNG Technologies', showUpdate: false },
        ];
        this.checkList = [];
        this.submitted = false;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.NotificationForm = this.fb.group({
            brId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notificationType: ['PUSH'],
            branchName: [''],
            notificationHeader: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9]{1,15}")]],
            notificationMessage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9 ]{1,60}")]],
        });
    };
    Object.defineProperty(NotificationComponent.prototype, "f", {
        get: function () { return this.NotificationForm.controls; },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.reset = function () {
        this.submitted = false;
        this.NotificationForm.reset();
    };
    NotificationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.NotificationForm.invalid) {
            console.log(this.f.notificationHeader.errors);
            return;
        }
        this.checkList.forEach(function (element, i) {
            if (i == 0) {
                _this.NotificationForm.value.branchName = element;
            }
            else {
                _this.NotificationForm.value.branchName = _this.NotificationForm.value.branchName + ' ' + element;
            }
        });
        console.log(this.NotificationForm.value);
    };
    NotificationComponent.prototype.getValues = function (bool, val) {
        if (bool == true) {
            if (this.checkList.filter(function (item) { return item != val; })) {
                this.checkList.push(val);
            }
        }
        else {
            if (this.checkList.filter(function (item) { return item == val; })) {
                var index = this.checkList.indexOf(val);
                this.checkList.splice(index, 1);
            }
            else {
                this.checkList.push(val);
            }
        }
        console.log(this.checkList);
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/dashboard/superadmin/masters/customer/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getAllCustomers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/customer/onboarding/findAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CustomerService.prototype.saveCustomer = function (customer) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/customer/onboarding/create', customer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CustomerService.prototype.getCustomerById = function (custId) {
        var param = { 'custId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/customer/onboarding/findByCustomerId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CustomerService.prototype.updateCustomers = function (customer) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/customer/onboarding/updateCustomer', customer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CustomerService.prototype.deleteCustomer = function (custId) {
        var param = { 'custId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/customer/onboarding/deleteCustomer', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/shift/services/shift.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/shift/services/shift.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ShiftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftService", function() { return ShiftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json' })
};
var ShiftService = /** @class */ (function () {
    function ShiftService(http) {
        this.http = http;
    }
    ShiftService.prototype.getAllBranch = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.getAllBranchByCustId = function (custId) {
        var param = { 'refCustomerId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/branch/getAllByCustId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.getByCustId = function (custId) {
        var param = { 'refCustId': custId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/getAllByCustId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/updateByShiftId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.delete = function (data) {
        var param = { "shiftId": data };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/deleteByShiftId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.prototype.detailsByBranchId = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/customer/master/shift/getShiftDetailsByBranchId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    ShiftService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ShiftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ShiftService);
    return ShiftService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/shift/shift.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/shift/shift.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 190px !important; }\n\nselect {\n  width: 200px !important; }\n\n.my-custom-class .tooltip-inner {\n  background-color: #1abbec;\n  font-size: 75%; }\n\n.my-custom-class .arrow::before {\n  background-color: #1abbec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9zaGlmdC9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGN1c3RvbWVyXFxzaGlmdFxcc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSx5QkFBbUM7RUFDbkMsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHlCQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci9zaGlmdC9zaGlmdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICB3aWR0aDogMTkwcHggIWltcG9ydGFudDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyB0b29sdGlwXHJcbi5teS1jdXN0b20tY2xhc3MgLnRvb2x0aXAtaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMTg3LCAyMzYpO1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3MgLmFycm93OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMTg3LCAyMzYpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/shift/shift.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/shift/shift.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftComponent", function() { return ShiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shift_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shift.service */ "./src/app/dashboard/superadmin/masters/customer/shift/services/shift.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






// import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
// enableRipple(true);
var ShiftComponent = /** @class */ (function () {
    function ShiftComponent(fb, shiftService) {
        this.fb = fb;
        this.shiftService = shiftService;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.watermark = 'Select a time';
        // sets the format property to display the time value in 24 hours format.
        this.formatString = 'HH:mm';
        this.interval = 60;
    }
    ShiftComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        this.newShift = this.fb.group({
            refBrId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shiftName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            shiftStart: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            shiftEnd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.updateShift = this.fb.group({
            shiftId: [],
            refBrId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shiftName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            shiftStart: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            shiftEnd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        if (this.custId == 0) {
            this.getAllBranch();
            this.getAllShift();
        }
        else {
            this.getAllBranchByCustId();
            this.getAllShiftByCustId();
        }
    };
    Object.defineProperty(ShiftComponent.prototype, "f", {
        get: function () { return this.newShift.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShiftComponent.prototype, "f1", {
        get: function () { return this.updateShift.controls; },
        enumerable: true,
        configurable: true
    });
    ShiftComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ShiftComponent.prototype.getAllShift = function () {
        var _this = this;
        this.shiftService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('All Shift...', res);
                _this.shifts = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ShiftComponent.prototype.getAllShiftByCustId = function () {
        var _this = this;
        this.shiftService.getByCustId(this.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('All Shift...', res);
                _this.shifts = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ShiftComponent.prototype.getAllBranch = function () {
        var _this = this;
        this.shiftService.getAllBranch()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Branches...', res);
                _this.branches = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ShiftComponent.prototype.getAllBranchByCustId = function () {
        var _this = this;
        this.shiftService.getAllBranchByCustId(this.custId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('Branches...', res);
                _this.branches = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ShiftComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    ShiftComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newShift.reset();
    };
    // Save new Form
    ShiftComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        console.log('save shift data', this.newShift.value);
        if (this.newShift.invalid) {
            return;
        }
        console.log('Shift Details Inserted Successfully!');
        this.shiftService.create(this.newShift.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                if (_this.custId == 0) {
                    _this.getAllBranch();
                    _this.getAllShift();
                }
                else {
                    _this.getAllBranchByCustId();
                    _this.getAllShiftByCustId();
                }
                _this.cancel();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Update Form open
    ShiftComponent.prototype.editShift = function (data) {
        data.showUpdate = true;
        this.updateShift.patchValue(data);
    };
    // Update Data
    ShiftComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        console.log('update....', data);
        this.submitted1 = true;
        if (this.updateShift.invalid) {
            return;
        }
        this.shiftService.update(this.updateShift.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                if (_this.custId == 0) {
                    _this.getAllBranch();
                    _this.getAllShift();
                }
                else {
                    _this.getAllBranchByCustId();
                    _this.getAllShiftByCustId();
                }
                _this.cancelUpdate(data);
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Cancel Data
    ShiftComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateShift.reset();
    };
    // Delete Data
    ShiftComponent.prototype.deleteShift = function (data) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.shiftService.delete(data.shiftId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.status.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            title: res.status.message
                        });
                        if (_this.custId == 0) {
                            _this.getAllBranch();
                            _this.getAllShift();
                        }
                        else {
                            _this.getAllBranchByCustId();
                            _this.getAllShiftByCustId();
                        }
                    }
                }, function (error) {
                    console.log(error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    ShiftComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_shift_service__WEBPACK_IMPORTED_MODULE_1__["ShiftService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShiftComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShiftComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShiftComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShiftComponent.prototype, "maxPages", void 0);
    ShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shift',
            template: __webpack_require__(/*! raw-loader!./shift.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/shift/shift.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./shift.component.scss */ "./src/app/dashboard/superadmin/masters/customer/shift/shift.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_shift_service__WEBPACK_IMPORTED_MODULE_1__["ShiftService"]])
    ], ShiftComponent);
    return ShiftComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/view/view.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/view/view.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  width: 700px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9jdXN0b21lci92aWV3L0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcY3VzdG9tZXJcXHZpZXdcXHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvY3VzdG9tZXIvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/customer/view/view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/customer/view/view.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdModalContent, CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(modalService) {
        this.modalService = modalService;
    }
    CustomerViewComponent.prototype.ngOnInit = function () { };
    // Open default modal
    CustomerViewComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    CustomerViewComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    CustomerViewComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    CustomerViewComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    CustomerViewComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/customer/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/dashboard/superadmin/masters/customer/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/data.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/data.ts ***!
  \***************************************************************/
/*! exports provided: showUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUpdate", function() { return showUpdate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var showUpdate = /** @class */ (function () {
    function showUpdate() {
        this.personal = {
            empName: String,
            empMobile: Number,
            empGender: String,
            empType: String,
            empCont: String,
            empMgr: String,
            empDOJ: String,
            mgrService: Boolean
        };
    }
    showUpdate.prototype.setPersonal = function (data) {
        this.personal = data;
    };
    showUpdate.prototype.getPersonal = function () {
        return this.personal;
    };
    showUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], showUpdate);
    return showUpdate;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9lbXBicmFuY2gvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdXBlcmFkbWluXFxtYXN0ZXJzXFxlbXBsb3llZVxcZW1wYnJhbmNoXFxlbXBicmFuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvZW1wYnJhbmNoL2VtcGJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmpbranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpbranchComponent", function() { return EmpbranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var EmpbranchComponent = /** @class */ (function () {
    function EmpbranchComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted1 = false;
        this.globalBranch = [
            { id: 1, name: 'Branch 1' },
            { id: 2, name: 'Branch 2' },
            { id: 3, name: 'Branch 3' },
        ];
    }
    EmpbranchComponent.prototype.ngOnInit = function () {
        this.branchForm = this.fb.group({
            refBrId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EmpbranchComponent.prototype, "f1", {
        get: function () { return this.branchForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    EmpbranchComponent.prototype.submitBranch = function () {
        this.submitted1 = true;
        if (this.branchForm.invalid) {
            return;
        }
        this.branchForm.value.brFrom = this.branchForm.get('brFrom').value.year + '-' + this.branchForm.get('brFrom').value.month + '-' + this.branchForm.get('brFrom').value.day;
        console.log(this.branchForm.value);
        this.submitted1 = false;
    };
    EmpbranchComponent.prototype.close = function () {
        this.branchForm.reset();
        this.submitted1 = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    EmpbranchComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    EmpbranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empbranch',
            template: __webpack_require__(/*! raw-loader!./empbranch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.html"),
            styles: [__webpack_require__(/*! ./empbranch.component.scss */ "./src/app/dashboard/superadmin/masters/employee/empbranch/empbranch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], EmpbranchComponent);
    return EmpbranchComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9lbXBkZXBhcnRtZW50L0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXGRhc2hib2FyZFxcc3VwZXJhZG1pblxcbWFzdGVyc1xcZW1wbG95ZWVcXGVtcGRlcGFydG1lbnRcXGVtcGRlcGFydG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvZW1wZGVwYXJ0bWVudC9lbXBkZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EmpDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpDepartmentComponent", function() { return EmpDepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var EmpDepartmentComponent = /** @class */ (function () {
    function EmpDepartmentComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted2 = false;
        this.globalDepartment = [
            { id: 1, name: 'Dept 1' },
            { id: 2, name: 'Dept 2' },
        ];
        this.globalReportTo = [
            { id: 1, name: 'Manager 1' },
            { id: 2, name: 'Manager 2' },
            { id: 3, name: 'Manager 3' },
        ];
    }
    EmpDepartmentComponent.prototype.ngOnInit = function () {
        this.deptForm = this.fb.group({
            empDept: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empReport: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deptFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EmpDepartmentComponent.prototype, "f2", {
        get: function () { return this.deptForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    EmpDepartmentComponent.prototype.submitDept = function () {
        this.submitted2 = true;
        if (this.deptForm.invalid) {
            return;
        }
        this.deptForm.value.deptFrom = this.deptForm.get('deptFrom').value.year + '-' + this.deptForm.get('deptFrom').value.month + '-' + this.deptForm.get('deptFrom').value.day;
        console.log(this.deptForm.value);
        this.submitted2 = false;
    };
    EmpDepartmentComponent.prototype.close = function () {
        this.deptForm.reset();
        this.submitted2 = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    EmpDepartmentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    EmpDepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empdepartment',
            template: __webpack_require__(/*! raw-loader!./empdepartment.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.html"),
            styles: [__webpack_require__(/*! ./empdepartment.component.scss */ "./src/app/dashboard/superadmin/masters/employee/empdepartment/empdepartment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], EmpDepartmentComponent);
    return EmpDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9lbXBkZXNpZ25hdGlvbi9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGVtcGxveWVlXFxlbXBkZXNpZ25hdGlvblxcZW1wZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvZW1wZGVzaWduYXRpb24vZW1wZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EmpDesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpDesignationComponent", function() { return EmpDesignationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var EmpDesignationComponent = /** @class */ (function () {
    function EmpDesignationComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted3 = false;
        this.globalDesignation = [
            { id: 1, name: 'Desg 1' },
            { id: 2, name: 'Desg 2' },
        ];
    }
    EmpDesignationComponent.prototype.ngOnInit = function () {
        this.desgForm = this.fb.group({
            empDesg: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desgFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EmpDesignationComponent.prototype, "f3", {
        get: function () { return this.desgForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    EmpDesignationComponent.prototype.submitDesg = function () {
        this.submitted3 = true;
        if (this.desgForm.invalid) {
            return;
        }
        this.desgForm.value.desgFrom = this.desgForm.get('desgFrom').value.year + '-' + this.desgForm.get('desgFrom').value.month + '-' + this.desgForm.get('desgFrom').value.day;
        console.log(this.desgForm.value);
        this.submitted3 = false;
    };
    EmpDesignationComponent.prototype.close = function () {
        this.desgForm.reset();
        this.submitted3 = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    EmpDesignationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    EmpDesignationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empdesignation',
            template: __webpack_require__(/*! raw-loader!./empdesignation.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.html"),
            styles: [__webpack_require__(/*! ./empdesignation.component.scss */ "./src/app/dashboard/superadmin/masters/employee/empdesignation/empdesignation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], EmpDesignationComponent);
    return EmpDesignationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/employee.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/employee.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0; }\n\n.required:after {\n  color: #d00;\n  content: \"*\"; }\n\n.invalid {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff586b; }\n\n.multiselect-dropdown[_ngcontent-dcu-c3] .dropdown-btn[_ngcontent-dcu-c3] {\n  border: 1px solid #a6a9ae !important;\n  color: #75787d !important; }\n\n.searchCust {\n  padding: 4px;\n  width: 43%;\n  margin-right: 26%;\n  float: right;\n  border-radius: 21px;\n  border-bottom-color: gray;\n  border-right-color: gray;\n  border-width: 1px; }\n\n.tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n.text-center {\n  margin-top: 40px !important; }\n\n.swal2-modal {\n  width: 90%;\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 13px;\n  font-weight: 100;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #f5f7fa; }\n\n.tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGVtcGxveWVlXFxlbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQU1kO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQixFQUFBOztBQUk3QjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0EsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yZXF1aXJlZDphZnRlciB7XHJcbiAgY29sb3I6ICNkMDA7XHJcbiAgY29udGVudDogXCIqXCI7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIHRvcDo3cHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGNvbG9yOiAjZmY1ODZiO1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd25bX25nY29udGVudC1kY3UtYzNdIC5kcm9wZG93bi1idG5bX25nY29udGVudC1kY3UtYzNdIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWFlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM3NTc4N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaEN1c3Qge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB3aWR0aDogNDMlO1xyXG4gIG1hcmdpbi1yaWdodDogMjYlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4vLyBBcmNoIFdpemFyZFxyXG4udGFiLWNvbnRlbnQgLnRhYi1wYW5lIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gU3dlZXQgQWxlcnRcclxuLnN3YWwyLW1vZGFsIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xyXG59XHJcblxyXG4vLyB1cGRhdGUgZm9ybVxyXG4udGFiLWNvbnRlbnQgLnRhYi1wYW5le1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG5wYWRkaW5nOiA4cHg7XHJcbm1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLy8gLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbi8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxuLy8gfVxyXG4vLyAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuLy8gYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/employee.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/employee.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(fb, calendar, router, route, dis) {
        this.fb = fb;
        this.calendar = calendar;
        this.router = router;
        this.route = route;
        this.dis = dis;
        this.globalEmployees = [];
        this.showForm = false;
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.submitted5 = false;
        this.globalBranch = [
            { id: 1, name: 'Branch 1' },
            { id: 2, name: 'Branch 2' },
            { id: 3, name: 'Branch 3' },
        ];
        this.globalShift = [
            { id: 1, name: 'Day' },
            { id: 2, name: 'Night' },
        ];
        this.globalDepartment = [
            { id: 1, name: 'Dept 1' },
            { id: 2, name: 'Dept 2' },
        ];
        this.globalDesignation = [
            { id: 1, name: 'Desg 1' },
            { id: 2, name: 'Desg 2' },
        ];
        this.globalEmpType = [
            { id: 1, name: 'Employee' },
            { id: 2, name: 'Manager' },
            { id: 3, name: 'Contractor' },
        ];
        this.showContractor = false;
        this.globalReportTo = [
            { id: 1, name: 'Manager 1' },
            { id: 2, name: 'Manager 2' },
            { id: 3, name: 'Manager 3' },
        ];
        this.globalWeeks = [
            { id: 1, name: 'Sunday' },
            { id: 2, name: 'Monday' },
            { id: 3, name: 'Tuesday' },
            { id: 4, name: 'Wednesday' },
            { id: 5, name: 'Thursday' },
            { id: 6, name: 'Friday' },
            { id: 7, name: 'Saturday' },
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
        this.showView = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.dis.showList = true;
        this.globalEmployees = [
            {
                empName: 'ABC', empType: 'Employee', empDesg: 'SE', empDOJ: '2019-10-20', refBrId: 'XYZ', empDept: 'MNP', empMgr: 'ANS',
                empGender: 'Male', empMobile: '9874561230'
            }
        ];
        this.empForm = this.fb.group({
            empName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            empGender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empCont: [],
            empMgr: [false],
            empDOJ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mgrService: [true]
        });
        this.branchForm = this.fb.group({
            refBrId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.deptForm = this.fb.group({
            empDept: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empReport: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deptFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.desgForm = this.fb.group({
            empDesg: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desgFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.shiftForm = this.fb.group({
            empShift: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shiftFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.weeklyoffForm = this.fb.group({
            weekoff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            offFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.assignDate();
        this.getAllEmployee();
    };
    EmployeeComponent.prototype.assignDate = function () {
        this.empForm.patchValue({
            empDOJ: this.calendar.getToday()
        });
        this.branchForm.patchValue({
            brFrom: this.calendar.getToday()
        });
        this.deptForm.patchValue({
            deptFrom: this.calendar.getToday()
        });
        this.shiftForm.patchValue({
            shiftFrom: this.calendar.getToday()
        });
        this.weeklyoffForm.patchValue({
            offFrom: this.calendar.getToday()
        });
        this.desgForm.patchValue({
            desgFrom: this.calendar.getToday()
        });
    };
    EmployeeComponent.prototype.getAllEmployee = function () {
        // this.branchService.getAll()
        //   .pipe(first())
        //   .subscribe(res => {
        //     if (res.status.error) {
        //       Swal.fire({
        //         type: 'error',
        //         title: res.status.message,
        //       });
        //     } else {
        //       console.log('Branches...', res.data1)
        //       this.globalBranch = res.data1;
        //     }
        //   }, error => {
        //     Swal.fire({
        //       type: 'error',
        //       title: 'Oops...',
        //       text: 'Something went wrong!',
        //     });
        //   });
    };
    Object.defineProperty(EmployeeComponent.prototype, "f", {
        get: function () { return this.empForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "f1", {
        get: function () { return this.branchForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "f2", {
        get: function () { return this.deptForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "f3", {
        get: function () { return this.desgForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "f4", {
        get: function () { return this.shiftForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "f5", {
        get: function () { return this.weeklyoffForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmployeeComponent.prototype, "isUpdate", {
        get: function () {
            return this.dis.showEdit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "isList", {
        get: function () {
            return this.dis.showList;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent.prototype.openForm = function () {
        this.dis.showList = false;
        this.showForm = true;
    };
    EmployeeComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.empForm.invalid) {
            return;
        }
        this.empForm.value.empDOJ = this.empForm.get('empDOJ').value.year + '-' + this.empForm.get('empDOJ').value.month + '-' + this.empForm.get('empDOJ').value.day;
        console.log(this.empForm.value);
        this.submitted = false;
    };
    EmployeeComponent.prototype.submitBranch = function () {
        this.submitted1 = true;
        if (this.branchForm.invalid) {
            return;
        }
        this.branchForm.value.brFrom = this.branchForm.get('brFrom').value.year + '-' + this.branchForm.get('brFrom').value.month + '-' + this.branchForm.get('brFrom').value.day;
        console.log(this.branchForm.value);
        this.submitted1 = false;
    };
    EmployeeComponent.prototype.submitDept = function () {
        this.submitted2 = true;
        if (this.deptForm.invalid) {
            return;
        }
        this.deptForm.value.deptFrom = this.deptForm.get('deptFrom').value.year + '-' + this.deptForm.get('deptFrom').value.month + '-' + this.deptForm.get('deptFrom').value.day;
        console.log(this.deptForm.value);
        this.submitted2 = false;
    };
    EmployeeComponent.prototype.submitDesg = function () {
        this.submitted3 = true;
        if (this.desgForm.invalid) {
            return;
        }
        this.desgForm.value.desgFrom = this.desgForm.get('desgFrom').value.year + '-' + this.desgForm.get('desgFrom').value.month + '-' + this.desgForm.get('desgFrom').value.day;
        console.log(this.desgForm.value);
        this.submitted3 = false;
    };
    EmployeeComponent.prototype.submitShift = function () {
        this.submitted4 = true;
        if (this.shiftForm.invalid) {
            return;
        }
        this.shiftForm.value.shiftFrom = this.shiftForm.get('shiftFrom').value.year + '-' + this.shiftForm.get('shiftFrom').value.month + '-' + this.shiftForm.get('shiftFrom').value.day;
        console.log(this.shiftForm.value);
        this.submitted4 = false;
    };
    EmployeeComponent.prototype.submitWeeklyOff = function () {
        this.submitted5 = true;
        if (this.weeklyoffForm.invalid) {
            console.log(this.f5.weekoff.errors.required);
            return;
        }
        this.weeklyoffForm.value.offFrom = this.weeklyoffForm.get('offFrom').value.year + '-' + this.weeklyoffForm.get('offFrom').value.month + '-' + this.weeklyoffForm.get('offFrom').value.day;
        console.log(this.weeklyoffForm.value);
        this.submitted5 = false;
        this.showForm = false;
        this.dis.showList = true;
        this.showContractor = false;
        this.empForm.reset();
        this.branchForm.reset();
        this.deptForm.reset();
        this.desgForm.reset();
        this.shiftForm.reset();
        this.weeklyoffForm.reset();
        this.assignDate();
    };
    EmployeeComponent.prototype.closeWizard = function () {
        this.showForm = false;
        this.dis.showList = true;
        this.submitted = false;
        this.showContractor = false;
        this.empForm.reset();
        this.branchForm.reset();
        this.deptForm.reset();
        this.desgForm.reset();
        this.shiftForm.reset();
        this.weeklyoffForm.reset();
        this.assignDate();
    };
    EmployeeComponent.prototype.selectedEmpType = function (val) {
        if (val == 'Contractor') {
            this.showContractor = true;
            // this.empForm.get('empCont').reset();
        }
        else {
            this.showContractor = false;
            this.empForm.get('empCont').reset();
        }
    };
    // Update
    EmployeeComponent.prototype.editEmployee = function (id) {
        console.log('Edit');
        this.dis.showList = false;
        this.dis.showEdit = true;
        this.dis.setPersonal(this.globalEmployees[0]);
    };
    // View
    EmployeeComponent.prototype.viewEmployee = function (id) {
        console.log('View');
        this.showView = true;
    };
    EmployeeComponent.prototype.closeView = function () {
        this.showView = false;
    };
    // Delete
    EmployeeComponent.prototype.deleteEmployee = function (id, name) {
        console.log('Delete');
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_5__["showUpdate"] }
    ]; };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/dashboard/superadmin/masters/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _data__WEBPACK_IMPORTED_MODULE_5__["showUpdate"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9lbXBzaGlmdC9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGVtcGxveWVlXFxlbXBzaGlmdFxcZW1wc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvZW1wc2hpZnQvZW1wc2hpZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EmpShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpShiftComponent", function() { return EmpShiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var EmpShiftComponent = /** @class */ (function () {
    function EmpShiftComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted4 = false;
        this.globalShift = [
            { id: 1, name: 'Day' },
            { id: 2, name: 'Night' },
        ];
    }
    EmpShiftComponent.prototype.ngOnInit = function () {
        this.shiftForm = this.fb.group({
            empShift: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shiftFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EmpShiftComponent.prototype, "f4", {
        get: function () { return this.shiftForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    EmpShiftComponent.prototype.submitShift = function () {
        this.submitted4 = true;
        if (this.shiftForm.invalid) {
            return;
        }
        this.shiftForm.value.shiftFrom = this.shiftForm.get('shiftFrom').value.year + '-' + this.shiftForm.get('shiftFrom').value.month + '-' + this.shiftForm.get('shiftFrom').value.day;
        console.log(this.shiftForm.value);
        this.submitted4 = false;
    };
    EmpShiftComponent.prototype.close = function () {
        this.shiftForm.reset();
        this.submitted4 = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    EmpShiftComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    EmpShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empshift',
            template: __webpack_require__(/*! raw-loader!./empshift.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.html"),
            styles: [__webpack_require__(/*! ./empshift.component.scss */ "./src/app/dashboard/superadmin/masters/employee/empshift/empshift.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], EmpShiftComponent);
    return EmpShiftComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round-tabs {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9uYXZpZ2F0aW9uLWJhci9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGVtcGxveWVlXFxuYXZpZ2F0aW9uLWJhclxcbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmQtdGFicyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.page = "Personal";
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Navigate to first tab
        this.router.navigate(['/masters/employee/personal'], { skipLocationChange: true });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.page = currentRoute.snapshot.data["title"];
        });
    };
    NavigationBarComponent.prototype.openTab = function (val) {
        this.router.navigateByUrl('/masters/employee/' + val, { relativeTo: this.route.parent, skipLocationChange: true });
    };
    NavigationBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'msw-navbar',
            template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/dashboard/superadmin/masters/employee/navigation-bar/navigation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/personal/personal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/personal/personal.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS9wZXJzb25hbC9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGVtcGxveWVlXFxwZXJzb25hbFxccGVyc29uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/personal/personal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/personal/personal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted = false;
        this.globalEmpType = [
            { id: 1, name: 'Employee' },
            { id: 2, name: 'Manager' },
            { id: 3, name: 'Contractor' },
        ];
        this.showContractor = false;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.empForm = this.fb.group({
            empName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            empGender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empCont: [],
            empMgr: [false],
            empDOJ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mgrService: [true]
        });
        this.setValues();
    };
    PersonalComponent.prototype.setValues = function () {
        var val = this.dis.getPersonal();
        var date = val.empDOJ.toString();
        this.empForm.patchValue(val);
        this.empForm.patchValue({
            empDOJ: { year: +date.slice(0, 4), month: +date.slice(5, 7), day: +date.slice(8, 10) }
        });
    };
    Object.defineProperty(PersonalComponent.prototype, "f", {
        get: function () { return this.empForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    PersonalComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.empForm.invalid) {
            return;
        }
        console.log(this.empForm.value.empDOJ);
        this.empForm.value.empDOJ = this.empForm.get('empDOJ').value.year + '-' + this.empForm.get('empDOJ').value.month + '-' + this.empForm.get('empDOJ').value.day;
        // console.log(this.empForm.value)
        this.submitted = false;
    };
    PersonalComponent.prototype.close = function () {
        this.empForm.reset();
        this.submitted = false;
        this.showContractor = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    PersonalComponent.prototype.selectedEmpType = function (val) {
        if (val == 'Contractor') {
            this.showContractor = true;
            // this.empForm.get('empCont').reset();
        }
        else {
            this.showContractor = false;
            this.empForm.get('empCont').reset();
        }
    };
    PersonalComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.scss */ "./src/app/dashboard/superadmin/masters/employee/personal/personal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9lbXBsb3llZS93ZWVrbHlvZmYvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdXBlcmFkbWluXFxtYXN0ZXJzXFxlbXBsb3llZVxcd2Vla2x5b2ZmXFx3ZWVrbHlvZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvZW1wbG95ZWUvd2Vla2x5b2ZmL3dlZWtseW9mZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WeeklyoffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyoffComponent", function() { return WeeklyoffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/app/dashboard/superadmin/masters/employee/data.ts");




var WeeklyoffComponent = /** @class */ (function () {
    function WeeklyoffComponent(fb, dis) {
        this.fb = fb;
        this.dis = dis;
        this.submitted5 = false;
        this.globalWeeks = [
            { id: 1, name: 'Sunday' },
            { id: 2, name: 'Monday' },
            { id: 3, name: 'Tuesday' },
            { id: 4, name: 'Wednesday' },
            { id: 5, name: 'Thursday' },
            { id: 6, name: 'Friday' },
            { id: 7, name: 'Saturday' },
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
    }
    WeeklyoffComponent.prototype.ngOnInit = function () {
        this.weeklyoffForm = this.fb.group({
            weekoff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            offFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(WeeklyoffComponent.prototype, "f5", {
        get: function () { return this.weeklyoffForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    WeeklyoffComponent.prototype.submitWeeklyOff = function () {
        this.submitted5 = true;
        if (this.weeklyoffForm.invalid) {
            console.log(this.f5.weekoff.errors.required);
            return;
        }
        this.weeklyoffForm.value.offFrom = this.weeklyoffForm.get('offFrom').value.year + '-' + this.weeklyoffForm.get('offFrom').value.month + '-' + this.weeklyoffForm.get('offFrom').value.day;
        console.log(this.weeklyoffForm.value);
        this.submitted5 = false;
    };
    WeeklyoffComponent.prototype.close = function () {
        this.weeklyoffForm.reset();
        this.submitted5 = false;
        this.dis.showEdit = false;
        this.dis.showList = true;
    };
    WeeklyoffComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"] }
    ]; };
    WeeklyoffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weeklyoff',
            template: __webpack_require__(/*! raw-loader!./weeklyoff.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.html"),
            styles: [__webpack_require__(/*! ./weeklyoff.component.scss */ "./src/app/dashboard/superadmin/masters/employee/weeklyoff/weeklyoff.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data__WEBPACK_IMPORTED_MODULE_3__["showUpdate"]])
    ], WeeklyoffComponent);
    return WeeklyoffComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/industry/industry.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/industry/industry.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 300px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9pbmR1c3RyeS9EOlxcTE5HXFxQcm9qZXRjc1xcQXR0ZW5kYW5jZSBTeXN0ZW1cXExORy5BVFRFTkRBTkNFU1lTVEVNV0VCLlYxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHN1cGVyYWRtaW5cXG1hc3RlcnNcXGluZHVzdHJ5XFxpbmR1c3RyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1cGVyYWRtaW4vbWFzdGVycy9pbmR1c3RyeS9pbmR1c3RyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/industry/industry.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/industry/industry.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryComponent", function() { return IndustryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_industry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/industry.service */ "./src/app/dashboard/superadmin/masters/industry/services/industry.service.ts");






var IndustryComponent = /** @class */ (function () {
    function IndustryComponent(fb, industryService) {
        this.fb = fb;
        this.industryService = industryService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    IndustryComponent.prototype.ngOnInit = function () {
        this.newIndustry = this.fb.group({
            industryId: [],
            industryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.updateIndustry = this.fb.group({
            industryId: [],
            industryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getAllIndustry();
    };
    Object.defineProperty(IndustryComponent.prototype, "f", {
        get: function () { return this.newIndustry.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndustryComponent.prototype, "f1", {
        get: function () { return this.updateIndustry.controls; },
        enumerable: true,
        configurable: true
    });
    IndustryComponent.prototype.getAllIndustry = function () {
        var _this = this;
        this.industryService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('industry...', res);
                _this.industries = res.industryTypeDtoList;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    IndustryComponent.prototype.openForm = function () {
        for (var _i = 0, _a = this.pageOfItems; _i < _a.length; _i++) {
            var dataItem = _a[_i];
            if (dataItem.showUpdate != undefined) {
                dataItem.showUpdate = false;
            }
        }
        this.showNew = true;
    };
    // Cancel New Form
    IndustryComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newIndustry.reset();
    };
    // Save new Form
    IndustryComponent.prototype.save = function () {
        var _this = this;
        console.log('save', this.newIndustry.value);
        this.submitted = true;
        if (this.newIndustry.invalid) {
            return;
        }
        this.showNew = false;
        this.industryService.create(this.newIndustry.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.message,
                });
                _this.getAllIndustry();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.cancel();
    };
    // Update Form open
    IndustryComponent.prototype.editIndustry = function (data) {
        data.showUpdate = true;
        this.cancel();
        this.updateIndustry.patchValue(data);
    };
    // Update Data
    IndustryComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.submitted1 = true;
        if (this.updateIndustry.invalid) {
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update!'
            }).then(function (result) {
                if (result.value) {
                    _this.industryService.update(_this.updateIndustry.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                        .subscribe(function (res) {
                        if (res.error) {
                            _this.submitted = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                type: 'error',
                                title: res.message,
                            });
                            _this.cancelUpdate(data);
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                type: 'success',
                                showConfirmButton: true,
                                title: res.message,
                            });
                            _this.getAllIndustry();
                            _this.cancelUpdate(data);
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                        _this.cancelUpdate(data);
                    });
                }
            });
        }
    };
    // Cancel Data
    IndustryComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateIndustry.reset();
    };
    // Delete Data
    IndustryComponent.prototype.deleteIndustry = function (data) {
        var _this = this;
        console.log('delete...', data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.industryService.delete(data.industryId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (res) {
                    if (res.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            type: 'error',
                            title: res.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            type: 'success',
                            title: res.message
                        });
                        _this.getAllIndustry();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    IndustryComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    IndustryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_industry_service__WEBPACK_IMPORTED_MODULE_5__["IndustryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndustryComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndustryComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndustryComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndustryComponent.prototype, "maxPages", void 0);
    IndustryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-industry',
            template: __webpack_require__(/*! raw-loader!./industry.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/industry/industry.component.html"),
            styles: [__webpack_require__(/*! ./industry.component.scss */ "./src/app/dashboard/superadmin/masters/industry/industry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_industry_service__WEBPACK_IMPORTED_MODULE_5__["IndustryService"]])
    ], IndustryComponent);
    return IndustryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/industry/services/industry.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/industry/services/industry.service.ts ***!
  \************************************************************************************/
/*! exports provided: IndustryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryService", function() { return IndustryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var IndustryService = /** @class */ (function () {
    function IndustryService(http) {
        this.http = http;
    }
    IndustryService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/industry/type/findAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    IndustryService.prototype.create = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/industry/type/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    IndustryService.prototype.update = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/industry/type/update', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    IndustryService.prototype.delete = function (data) {
        var param = { "industryId": data };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/industry/type/delete', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    IndustryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    IndustryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], IndustryService);
    return IndustryService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/state/services/state.services.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/state/services/state.services.ts ***!
  \*******************************************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
    }
    StateService.prototype.getAllStates = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/getAll', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.prototype.createState = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/create', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.prototype.updateState = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/updateByStateId', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.prototype.getStateByCountry = function (countryId) {
        var param = { 'refCountryId': countryId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/getStateDetailsByCountryId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.prototype.getStateById = function (stateId) {
        var param = { 'stateId': stateId };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/getStateDetailsByStateId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.prototype.deleteState = function (data) {
        var param = { 'stateId': data };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/master/state/deleteByStateId', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    StateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/state/state.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/state/state.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL21hc3RlcnMvc3RhdGUvc3RhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/masters/state/state.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/superadmin/masters/state/state.component.ts ***!
  \***********************************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_state_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/state.services */ "./src/app/dashboard/superadmin/masters/state/services/state.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../country/services/country.services */ "./src/app/dashboard/superadmin/masters/country/services/country.services.ts");







var StateComponent = /** @class */ (function () {
    function StateComponent(fb, stateService, countryService) {
        this.fb = fb;
        this.stateService = stateService;
        this.countryService = countryService;
        this.showNew = false;
        this.submitted = false;
        this.submitted1 = false;
        this.showUpdate = false;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 10;
    }
    StateComponent.prototype.ngOnInit = function () {
        this.newState = this.fb.group({
            stateId: [],
            refCountryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            stateName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.updateState = this.fb.group({
            stateId: [],
            refCountryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            stateName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getAllState();
        this.getAllCountry();
    };
    Object.defineProperty(StateComponent.prototype, "f", {
        get: function () { return this.newState.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateComponent.prototype, "f1", {
        get: function () { return this.updateState.controls; },
        enumerable: true,
        configurable: true
    });
    StateComponent.prototype.getAllCountry = function () {
        var _this = this;
        this.countryService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('states...', res.data1);
                _this.countries = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    StateComponent.prototype.getAllState = function () {
        var _this = this;
        this.stateService.getAllStates()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                _this.submitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                console.log('states...', res.data1);
                _this.states = res.data1;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // New Form open
    StateComponent.prototype.openForm = function () {
        this.showNew = true;
    };
    // Cancel New Form
    StateComponent.prototype.cancel = function () {
        this.showNew = false;
        this.submitted = false;
        this.newState.reset();
    };
    // Save new Form
    StateComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        if (this.newState.invalid) {
            return;
        }
        this.showNew = false;
        this.stateService.createState(this.newState.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    showConfirmButton: true,
                    title: res.status.message,
                });
                _this.getAllState();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
        this.cancel();
    };
    // Update Form open
    StateComponent.prototype.editState = function (data) {
        var _this = this;
        data.showUpdate = true;
        this.stateService.getStateById(data.stateId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            console.log('response ', res);
            if (res.status.error) {
                _this.submitted = false;
                // this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.updateState.patchValue(res.data);
                console.log('State update:', res.data);
            }
        }, function (error) {
            // this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    // Update Data
    StateComponent.prototype.saveUpdate = function (data) {
        var _this = this;
        this.submitted1 = true;
        if (this.updateState.invalid) {
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update!'
            }).then(function (result) {
                if (result.value) {
                    _this.stateService.updateState(_this.updateState.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (res) {
                        if (res.error) {
                            _this.submitted = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: res.message,
                            });
                            _this.cancelUpdate(data);
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'success',
                                showConfirmButton: true,
                                title: res.message,
                            });
                            _this.getAllState();
                            _this.cancelUpdate(data);
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                        _this.cancelUpdate(data);
                    });
                }
            });
        }
        this.cancelUpdate(data);
    };
    // Cancel Data
    StateComponent.prototype.cancelUpdate = function (data) {
        this.submitted1 = false;
        data.showUpdate = false;
        this.updateState.reset();
    };
    // Delete Data
    StateComponent.prototype.deleteState = function (data) {
        var _this = this;
        console.log('delete...', data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.stateService.deleteState(data.stateId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (res) {
                    if (res.status.error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: res.status.message,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'success',
                            title: res.status.message
                        });
                        _this.getAllState();
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
            }
        });
    };
    StateComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    StateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_state_services__WEBPACK_IMPORTED_MODULE_1__["StateService"] },
        { type: _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateComponent.prototype, "changePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateComponent.prototype, "initialPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateComponent.prototype, "maxPages", void 0);
    StateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! raw-loader!./state.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/masters/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.scss */ "./src/app/dashboard/superadmin/masters/state/state.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_state_services__WEBPACK_IMPORTED_MODULE_1__["StateService"], _country_services_country_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/superadmin/sadmin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/superadmin/sadmin.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBlcmFkbWluL3NhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/superadmin/sadmin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/superadmin/sadmin.component.ts ***!
  \**********************************************************/
/*! exports provided: SAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAdminComponent", function() { return SAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SAdminComponent = /** @class */ (function () {
    function SAdminComponent() {
    }
    SAdminComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        console.log('cust id', this.custId);
    };
    SAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sadmin',
            template: __webpack_require__(/*! raw-loader!./sadmin.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/superadmin/sadmin.component.html"),
            styles: [__webpack_require__(/*! ./sadmin.component.scss */ "./src/app/dashboard/superadmin/sadmin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SAdminComponent);
    return SAdminComponent;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    };
    ContentLayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentLayoutComponent.prototype, "wrapper", void 0);
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");





var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, layoutService, configService, document, renderer) {
        var _this = this;
        this.elementRef = elementRef;
        this.layoutService = layoutService;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            bgImage: "assets/img/sidebar-bg/01.jpg"
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = "black";
        this.bgImage = "assets/img/sidebar-bg/01.jpg";
        this.config = {};
        //event emitter call from customizer
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.bgColor = options.bgColor;
                }
                if (options.bgImage) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'background-image: url("' + _this.bgImage + '")');
                }
                if (options.bgImageDisplay === true) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'display: block; background-image: url("' + _this.bgImage + '")');
                }
                else if (options.bgImageDisplay === false) {
                    _this.bgImage = "";
                    // this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
                }
                if (options.compactMenu === true) {
                    _this.renderer.addClass(_this.wrapper.nativeElement, "nav-collapsed");
                    _this.renderer.addClass(_this.wrapper.nativeElement, "menu-collapsed");
                }
                else if (options.compactMenu === false) {
                    if (_this.wrapper.nativeElement.classList.contains("nav-collapsed")) {
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "nav-collapsed");
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "menu-collapsed");
                    }
                }
                if (options.sidebarSize === "sidebar-lg") {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = true;
                }
                else if (options.sidebarSize === "sidebar-sm") {
                    _this.isSidebar_sm = true;
                    _this.isSidebar_lg = false;
                }
                else {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = false;
                }
                if (options.layout === "Light") {
                    _this.renderer.removeClass(_this.document.body, "layout-dark");
                    _this.renderer.removeClass(_this.document.body, "layout-transparent");
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                }
                else if (options.layout === "Dark") {
                    if (_this.document.body.classList.contains("layout-transparent")) {
                        _this.renderer.removeClass(_this.document.body, "layout-transparent");
                        _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                        _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                        _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                        _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                        _this.renderer.removeClass(_this.document.body, "bg-portage");
                        _this.renderer.removeClass(_this.document.body, "bg-tundora");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                    else {
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                }
                else if (options.layout === "Transparent") {
                    _this.renderer.addClass(_this.document.body, "layout-transparent");
                    _this.renderer.addClass(_this.document.body, "layout-dark");
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                if (options.transparentColor) {
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                    _this.renderer.addClass(_this.document.body, options.transparentColor);
                }
            }
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "bg-glass-1";
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "black";
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === "sidebar-lg") {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === "sidebar-sm") {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
        //emit event to customizer
        this.options.bgColor = this.bgColor;
        this.options.bgImage = this.bgImage;
        this.layoutService.emitCustomizerChange(this.options);
        //customizer events
        this.elementRef.nativeElement
            .querySelector("#cz-compact-menu")
            .addEventListener("click", this.onClick.bind(this));
        this.elementRef.nativeElement
            .querySelector("#cz-sidebar-width")
            .addEventListener("click", this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
                _this.renderer.addClass(_this.document.body, "layout-transparent");
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                _this.bgColor = "black";
                _this.options.bgColor = "black";
                _this.bgImage = "";
                _this.options.bgImage = "";
                _this.bgImage = "";
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
            }
        }, 0);
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () {
            fireRefreshEventOnWindow();
        }, 300);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebarBgImage", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appSidebar", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrapper", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-full-layout",
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/changepassword/changepassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/login/changepassword/changepassword.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/changepassword/changepassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/changepassword/changepassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service  */ "./src/app/login/services/authentication.service .ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var ChangePasswordComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ChangePasswordComponent(router, route, formBuilder, authenticationService, spinnerService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.spinnerService = spinnerService;
        this.submitted = false;
        this.loading = false;
        this.template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.regularForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () { return this.regularForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('change submit...');
        this.submitted = true;
        if (this.regularForm.invalid) {
            return;
        }
        this.loading = true;
        this.spinnerService.show();
        this.authenticationService.ChangePassword(this.f.userName.value, this.f.oldPassword.value, this.f.newPassword.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data.error) {
                _this.loading = true;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: data.message,
                });
            }
            else {
                _this.loading = true;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'success',
                    title: data.message,
                });
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            _this.loading = true;
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/login/changepassword/changepassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authentication_service___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword/forgotpassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/login/forgotpassword/forgotpassword.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/forgotpassword/forgotpassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/forgotpassword/forgotpassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_authentication_service___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service  */ "./src/app/login/services/authentication.service .ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var ForgotPasswordComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ForgotPasswordComponent(router, formBuilder, route, authenticationService, spinnerService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.submitted = false;
        this.template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.forgotForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.forgotForm.invalid) {
            return;
        }
        this.loading = true;
        this.spinnerService.show();
        this.authenticationService.forgotPassword(this.f.userName.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            if (res.error) {
                _this.loading = true;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: res.message,
                });
            }
            else {
                _this.loading = true;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: res.message,
                });
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            _this.loading = true;
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_authentication_service___WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.scss */ "./src/app/login/forgotpassword/forgotpassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_authentication_service___WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/Authentication.service  */ "./src/app/login/services/Authentication.service .ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);








var LoginComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function LoginComponent(router, formBuilder, route, authenticationService, spinnerService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.invalidLogin = false;
        this.submitted = false;
        this.template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';
        // redirect to home if already logged in
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/dashboard/admin']);
        }
        localStorage.setItem('superLogin', 'false');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myLogin = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.myLogin.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myLogin.invalid) {
            return;
        }
        this.loading = true;
        // this.show();
        this.spinnerService.show();
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data.status.error) {
                _this.submitted = false;
                _this.loading = false;
                _this.spinnerService.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: data.status.message,
                });
            }
            else {
                console.log('navigating to dashbaord...');
                _this.spinnerService.hide();
                _this.router.navigate(['/dashboard/admin']);
                // window.location.href = './dashboard';
            }
        }, function (error) {
            _this.loading = true;
            _this.spinnerService.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/services/Authentication.service .ts":
/*!***********************************************************!*\
  !*** ./src/app/login/services/Authentication.service .ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var param = { 'loginName': username, 'loginPassword': password };
        // tslint:disable-next-line: max-line-length
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/login', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (!user.status.error) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                if (user.data.refCustId === 0) {
                    localStorage.setItem('superAdmin', 'true');
                }
                else {
                    localStorage.setItem('superAdmin', 'false');
                }
            }
            return user;
        }));
    };
    AuthenticationService.prototype.ChangePassword = function (userName, oldPassword, newPassword) {
        var param = { 'userName': userName, 'oldPassword': oldPassword, 'newPassword': newPassword };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/change/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService.prototype.forgotPassword = function (userName) {
        var param = { 'userName': userName };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/forgot/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/login/services/authentication.service .ts":
/*!***********************************************************!*\
  !*** ./src/app/login/services/authentication.service .ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var param = { 'loginName': username, 'loginPassword': password };
        // tslint:disable-next-line: max-line-length
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/login', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (!user.status.error) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                if (user.data.refCustId === 0) {
                    localStorage.setItem('superAdmin', 'true');
                }
                else {
                    localStorage.setItem('superAdmin', 'false');
                }
            }
            return user;
        }));
    };
    AuthenticationService.prototype.ChangePassword = function (userName, oldPassword, newPassword) {
        var param = { 'userName': userName, 'oldPassword': oldPassword, 'newPassword': newPassword };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/change/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService.prototype.forgotPassword = function (userName) {
        var param = { 'userName': userName };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/forgot/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // const currentUser = this.authenticationService.currentUserValue;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('Current user ==> ');
        // console.log(currentUser);
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.loginId) === -1) {
                //   // role not authorised so redirect to home page
                if (localStorage.getItem('superLogin') === 'true') {
                    this.router.navigate(['/super/admin/login']);
                }
                else {
                    this.router.navigate(['/login']);
                }
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.router.navigate(['/login']);
        // window.location.reload();
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/auth/jwt.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/shared/auth/jwt.interceptor.ts ***!
  \************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_services_Authentication_service___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../login/services/Authentication.service  */ "./src/app/login/services/Authentication.service .ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        // tslint:disable-next-line: prefer-const
        // let currentUser = this.authenticationService.currentUserValue;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        else {
            if (localStorage.getItem('superLogin') === 'true') {
                this.router.navigate(['/super/admin/login']);
            }
            else {
                this.router.navigate(['/login']);
            }
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _login_services_Authentication_service___WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_Authentication_service___WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/common/common.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/common/common.ts ***!
  \*****************************************/
/*! exports provided: validateCompanyName, validatePersonName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCompanyName", function() { return validateCompanyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePersonName", function() { return validatePersonName; });
function validateCompanyName(name) {
    var pattern = /[a-zA-Z0-9\\. ]+[a-zA-Z0-9 ]$/; // can change regex with your requirement
    // if validation fails, return error name & value of true
    if (pattern.test(name)) {
        return false;
    }
    return true;
}
function validatePersonName(name) {
    var pattern = /[a-zA-Z\\. ]+[a-zA-Z ]$/; // can change regex with your requirement
    // if validation fails, return error name & value of true
    if (pattern.test(name)) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    ConfirmationDialogComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts");




var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationDialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    ConfirmationDialogService.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    ConfirmationDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ConfirmationDialogService);
    return ConfirmationDialogService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer #rtl-icon {\n    position: absolute;\n    right: -1px;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    margin-top: 50px; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected,\n  .customizer .cz-tl-bg-color .selected {\n    box-shadow: 0 0 10px 3px #009da0;\n    border: 3px solid #fff; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 50px; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .tl-color-options {\n    display: none; }\n  .customizer .cz-tl-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 70px; }\n  .customizer .cz-tl-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .cz-tl-bg-image img.rounded:hover {\n      cursor: pointer; }\n  .customizer .bg-hibiscus {\n    background-image: linear-gradient(to right bottom, #f05f57, #c83d5c, #99245a, #671351, #360940);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-purple-pizzazz {\n    background-image: linear-gradient(to right bottom, #662d86, #8b2a8a, #ae2389, #cf1d83, #ed1e79);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-blue-lagoon {\n    background-image: linear-gradient(to right bottom, #144e68, #006d83, #008d92, #00ad91, #57ca85);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-electric-violet {\n    background-image: linear-gradient(to left top, #4a00e0, #600de0, #7119e1, #8023e1, #8e2de2);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-portage {\n    background-image: linear-gradient(to left top, #97abff, #798ce5, #5b6ecb, #3b51b1, #123597);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-tundora {\n    background-image: linear-gradient(to left top, #474747, #4a4a4a, #4c4d4d, #4f5050, #525352);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .cz-bg-color .col span.rounded-circle:hover,\n  .customizer .cz-tl-bg-color .col span.rounded-circle:hover {\n    cursor: pointer; }\n  [dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px; }\n  [dir=rtl] :host ::ng-deep .customizer.open {\n    left: 0;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-close {\n    left: 10px;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvRDpcXExOR1xcUHJvamV0Y3NcXEF0dGVuZGFuY2UgU3lzdGVtXFxMTkcuQVRURU5EQU5DRVNZU1RFTVdFQi5WMS9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21pemVyXFxjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMERBQTBEO0VBQzFELG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLHNDQUFzQyxFQUFBO0VBYnhDO0lBZ0JJLFFBQVEsRUFBQTtFQWhCWjtJQW9CSSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0VBckJoQjtJQXlCSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCwyQ0FBMkMsRUFBQTtFQTVCL0M7SUFnQ0ksV0FBVyxFQUFBO0VBaENmO0lBb0NJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVyxFQUFBO0VBekNmO0lBNkNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFyRHBCO0lBeURJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFoRW5CO0lBcUVNLGdCQUFnQixFQUFBO0VBckV0QjtJQTBFSSxjQUFjLEVBQUE7RUExRWxCO01BOEVRLGVBQWUsRUFBQTtFQTlFdkI7TUFrRlEsc0JBQXNCLEVBQUE7RUFsRjlCOztJQTBGTSxnQ0FBZ0M7SUFDaEMsc0JBQXNCLEVBQUE7RUEzRjVCO0lBaUdNLGVBQWUsRUFBQTtFQWpHckI7SUFxR00sOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVyxFQUFBO0VBeEdqQjtNQTJHUSx5QkFBeUIsRUFBQTtFQTNHakM7SUFpSEksYUFBYSxFQUFBO0VBakhqQjtJQXNITSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXLEVBQUE7RUF6SGpCO01BNEhRLHlCQUF5QixFQUFBO0VBNUhqQztNQWdJUSxlQUFlLEVBQUE7RUFoSXZCO0lBc0lJLCtGQTdJd0Y7SUE4SXhGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUE1STlCO0lBZ0pJLCtGQXRKOEY7SUF1SjlGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUF0SjlCO0lBMEpJLCtGQS9KMEY7SUFnSzFGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUFoSzlCO0lBb0tJLDJGQXhLeUY7SUF5S3pGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUExSzlCO0lBOEtJLDJGQWpMaUY7SUFrTGpGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUFwTDlCO0lBeUxJLDJGQTNMaUY7SUE0TGpGLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCLEVBQUE7RUEvTDlCOztJQXVNVSxlQUFlLEVBQUE7RUN2RXpCO0VEa0ZJLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLGdCQUFnQixFQUFBO0VDaEZsQjtJRG1GSSxPQUFPO0lBQ1AsV0FBVyxFQUFBO0VDakZmO0lEcUZJLFVBQVU7SUFDVixXQUFXLEVBQUE7RUNuRmY7SUR3RkksWUFBWTtJQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXMgRm9yIFRyYW5zcGFyZW50IExheW91dFxyXG4kYmctaGliaXNjdXMgOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZjA1ZjU3LCAjYzgzZDVjLCAjOTkyNDVhLCAjNjcxMzUxLCAjMzYwOTQwKTtcclxuJGJnLXB1cnBsZS1waXp6YXp6IDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzY2MmQ4NiwgIzhiMmE4YSwgI2FlMjM4OSwgI2NmMWQ4MywgI2VkMWU3OSk7XHJcbiRiZy1ibHVlLWxhZ29vbjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzE0NGU2OCwgIzAwNmQ4MywgIzAwOGQ5MiwgIzAwYWQ5MSwgIzU3Y2E4NSk7XHJcbiRiZy1lbGVjdHJpYy12aW9sZXQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjNGEwMGUwLCAjNjAwZGUwLCAjNzExOWUxLCAjODAyM2UxLCAjOGUyZGUyKTtcclxuJGJnLXBvcnRhZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjOTdhYmZmLCAjNzk4Y2U1LCAjNWI2ZWNiLCAjM2I1MWIxLCAjMTIzNTk3KTtcclxuJGJnLXR1bmRvcmE6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjNDc0NzQ3LCAjNGE0YTRhLCAjNGM0ZDRkLCAjNGY1MDUwLCAjNTI1MzUyKTtcclxuXHJcbi5jdXN0b21pemVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcmlnaHQ6IC00MDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgei1pbmRleDogMTA1MTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbWl6ZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBhLmN1c3RvbWl6ZXItdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIGEuY3VzdG9taXplci1jbG9zZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b21pemVyLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcblxyXG4gICNydGwtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTFweDtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9taXplci10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICB3aWR0aDogNTRweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IC01NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sb3Itb3B0aW9ucyB7XHJcbiAgICBhIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jei1iZy1jb2xvciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLndoaXRlIHtcclxuICAgICAgICBjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3otYmctY29sb3IsXHJcbiAgLmN6LXRsLWJnLWNvbG9yIHtcclxuICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCAjMDA5ZGEwO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN6LWJnLWltYWdlIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLnJvdW5kZWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRsLWNvbG9yLW9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jei10bC1iZy1pbWFnZSB7XHJcbiAgICBpbWcucm91bmRlZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcblxyXG4gICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iZy1oaWJpc2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctaGliaXNjdXM7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIH1cclxuXHJcbiAgLmJnLXB1cnBsZS1waXp6YXp6IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1wdXJwbGUtcGl6emF6ejtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbiAgfVxyXG5cclxuICAuYmctYmx1ZS1sYWdvb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLWJsdWUtbGFnb29uO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcclxuICB9XHJcblxyXG4gIC5iZy1lbGVjdHJpYy12aW9sZXQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLWVsZWN0cmljLXZpb2xldDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbiAgfVxyXG5cclxuICAuYmctcG9ydGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctcG9ydGFnZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJnLXR1bmRvcmEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLXR1bmRvcmE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIH1cclxuXHJcbiAgLmN6LWJnLWNvbG9yLFxyXG4gIC5jei10bC1iZy1jb2xvciB7XHJcbiAgICAuY29sIHtcclxuICAgICAgc3Bhbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbltkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5jdXN0b21pemVyIHtcclxuICAgIGxlZnQ6IC00MDBweDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWl6ZXItY2xvc2Uge1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICByaWdodDogYXV0bztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcclxuICAgICAgcmlnaHQ6IC01NHB4O1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLmN1c3RvbWl6ZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9taXplci5vcGVuIHtcbiAgICByaWdodDogMDsgfVxuICAuY3VzdG9taXplciAuY3VzdG9taXplci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci1jbG9zZSB7XG4gICAgY29sb3I6ICMwMDA7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gIC5jdXN0b21pemVyICNydGwtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmN1c3RvbWl6ZXIgLmNvbG9yLW9wdGlvbnMgYSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3Ige1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW46aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ud2hpdGUge1xuICAgICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3IgLnNlbGVjdGVkLFxuICAuY3VzdG9taXplciAuY3otdGwtYmctY29sb3IgLnNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggIzAwOWRhMDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZSBpbWcucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNTBweDsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZSBpbWcucm91bmRlZC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCOyB9XG4gIC5jdXN0b21pemVyIC50bC1jb2xvci1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNzBweDsgfVxuICAgIC5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LXRsLWJnLWltYWdlIGltZy5yb3VuZGVkOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY3VzdG9taXplciAuYmctaGliaXNjdXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMDVmNTcsICNjODNkNWMsICM5OTI0NWEsICM2NzEzNTEsICMzNjA5NDApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctcHVycGxlLXBpenphenoge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM2NjJkODYsICM4YjJhOGEsICNhZTIzODksICNjZjFkODMsICNlZDFlNzkpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctYmx1ZS1sYWdvb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxNDRlNjgsICMwMDZkODMsICMwMDhkOTIsICMwMGFkOTEsICM1N2NhODUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctZWxlY3RyaWMtdmlvbGV0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0YTAwZTAsICM2MDBkZTAsICM3MTE5ZTEsICM4MDIzZTEsICM4ZTJkZTIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctcG9ydGFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjOTdhYmZmLCAjNzk4Y2U1LCAjNWI2ZWNiLCAjM2I1MWIxLCAjMTIzNTk3KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLXR1bmRvcmEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzQ3NDc0NywgIzRhNGE0YSwgIzRjNGQ0ZCwgIzRmNTA1MCwgIzUyNTM1Mik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciAuY29sIHNwYW4ucm91bmRlZC1jaXJjbGU6aG92ZXIsXG4gIC5jdXN0b21pemVyIC5jei10bC1iZy1jb2xvciAuY29sIHNwYW4ucm91bmRlZC1jaXJjbGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDBweDsgfVxuICBbZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyLm9wZW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgcmlnaHQ6IC01NHB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");




var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(elRef, renderer, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.configService = configService;
        this.options = {
            direction: 'ltr',
            bgColor: 'black',
            transparentColor: '',
            bgImage: 'assets/img/sidebar-bg/01.jpg',
            bgImageDisplay: true,
            compactMenu: false,
            sidebarSize: 'sidebar-lg',
            layout: 'Light'
        };
        this.size = 'sidebar-lg';
        this.isOpen = false;
        this.config = {};
        this.isBgImageDisplay = true;
        this.selectedBgColor = 'black';
        this.selectedBgImage = 'assets/img/sidebar-bg/01.jpg';
        this.selectedTLBgColor = '';
        this.selectedTLBgImage = '';
        // tslint:disable-next-line: member-ordering
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.selectedBgColor = options.bgColor;
                    _this.selectedBgImage = options.bgImage;
                }
            }
        });
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.isOpen = this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.options.sidebarSize = this.config.layout.sidebar.size;
            this.size = this.config.layout.sidebar.size;
        }
    };
    CustomizerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant) {
                _this.options.layout = _this.config.layout.variant;
            }
            if (_this.config.layout.sidebar.collapsed !== undefined) {
                _this.options.compactMenu = _this.config.layout.sidebar.collapsed;
            }
            if (_this.config.layout.sidebar.backgroundColor &&
                _this.config.layout.sidebar.backgroundColor !== '') {
                _this.options.bgColor = _this.config.layout.sidebar.backgroundColor;
                _this.selectedBgColor = _this.config.layout.sidebar.backgroundColor;
            }
            else {
                _this.options.bgColor = 'black';
                _this.selectedBgColor = 'black';
            }
            if (_this.config.layout.sidebar.backgroundImage !== undefined) {
                _this.options.bgImageDisplay = _this.config.layout.sidebar.backgroundImage;
                _this.isBgImageDisplay = _this.config.layout.sidebar.backgroundImage;
            }
            if (_this.config.layout.sidebar.backgroundImageURL) {
                _this.options.bgImage = _this.config.layout.sidebar.backgroundImageURL;
                _this.selectedBgImage = _this.config.layout.sidebar.backgroundImageURL;
            }
            if (_this.options.layout === 'Transparent') {
                _this.options.bgColor = 'black';
                _this.selectedBgColor = 'black';
                _this.options.bgImageDisplay = false;
                _this.selectedTLBgColor = '';
                _this.selectedBgImage = '';
                _this.options.bgImage = '';
                _this.isBgImageDisplay = false;
                if (_this.config.layout.sidebar.backgroundColor) {
                    if (_this.config.layout.sidebar.backgroundColor === 'bg-glass-1') {
                        _this.selectedTLBgImage = 'assets/img/gallery/bg-glass-1.jpg';
                        _this.options.transparentColor = 'bg-glass-1';
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === 'bg-glass-2') {
                        _this.selectedTLBgImage = 'assets/img/gallery/bg-glass-2.jpg';
                        _this.options.transparentColor = 'bg-glass-2';
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === 'bg-glass-3') {
                        _this.selectedTLBgImage = 'assets/img/gallery/bg-glass-3.jpg';
                        _this.options.transparentColor = 'bg-glass-3';
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === 'bg-glass-4') {
                        _this.selectedTLBgImage = 'assets/img/gallery/bg-glass-4.jpg';
                        _this.options.transparentColor = 'bg-glass-4';
                    }
                    else {
                        _this.options.transparentColor = _this.config.layout.sidebar.backgroundColor;
                        _this.selectedTLBgColor = _this.config.layout.sidebar.backgroundColor;
                    }
                }
                else {
                    _this.options.bgColor = 'black';
                    _this.selectedBgColor = 'black';
                    _this.options.bgImageDisplay = false;
                    _this.selectedBgColor = '';
                    _this.selectedTLBgColor = '';
                    _this.selectedTLBgImage = 'assets/img/gallery/bg-glass-1.jpg';
                    _this.options.transparentColor = 'bg-glass-1';
                }
            }
        }, 0);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
        this.layoutService.emitChange(this.options);
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.options.bgImageDisplay = true;
            this.isBgImageDisplay = true;
        }
        else {
            this.options.bgImageDisplay = false;
            this.isBgImageDisplay = false;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCompactMenu = function (e) {
        if (e.target.checked) {
            this.options.compactMenu = true;
        }
        else {
            this.options.compactMenu = false;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.options.sidebarSize = value;
        this.size = value;
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onLightLayout = function () {
        this.options.layout = 'Light';
        this.options.bgColor = 'man-of-steel';
        this.selectedBgColor = 'man-of-steel';
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onDarkLayout = function () {
        this.options.layout = 'Dark';
        this.options.bgColor = 'black';
        this.selectedBgColor = 'black';
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onTransparentLayout = function () {
        this.options.layout = 'Transparent';
        this.options.bgColor = 'black';
        this.selectedBgColor = 'black';
        this.options.bgImageDisplay = false;
        this.selectedBgColor = '';
        this.selectedTLBgColor = '';
        this.selectedTLBgImage = 'assets/img/gallery/bg-glass-1.jpg';
        this.options.transparentColor = 'bg-glass-1';
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, 'open');
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, 'open');
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, 'open');
        this.isOpen = false;
    };
    CustomizerComponent.prototype.changeSidebarBgColor = function (color) {
        this.selectedBgColor = color;
        this.selectedTLBgColor = '';
        this.options.bgColor = color;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarBgImage = function (url) {
        this.selectedBgImage = url;
        this.selectedTLBgImage = '';
        // emit event to FUll Layout
        this.options.bgImage = url;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgColor = function (color) {
        this.selectedBgColor = '';
        this.selectedTLBgColor = color;
        this.selectedTLBgImage = '';
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgImage = function (url, color) {
        this.selectedTLBgColor = '';
        this.selectedTLBgImage = url;
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        // emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customizer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomizerComponent.prototype, "customizer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ctorParameters = function () { return [
        { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    SidebarLinkDirective.ctorParameters = function () { return [
        { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
        { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var app_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/login/services/authentication.service  */ "./src/app/login/services/authentication.service .ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/shared/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_dashboard_superadmin_masters_customer_services_customer_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/dashboard/superadmin/masters/customer/services/customer.services */ "./src/app/dashboard/superadmin/masters/customer/services/customer.services.ts");










var NavbarComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function NavbarComponent(translate, layoutService, configService, authService, confirmationDialogService, customerService) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.authService = authService;
        this.confirmationDialogService = confirmationDialogService;
        this.customerService = customerService;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enable = true;
        this.customers = [];
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === 'rtl') {
                _this.placement = 'bottom-left';
            }
            else if (dir === 'ltr') {
                _this.placement = 'bottom-right';
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loginName = currUser.loginName;
        this.superAdmin = localStorage.getItem('superAdmin');
        this.custId = currUser.refCustId;
        this.config = this.configService.templateConf;
        this.getCustomerAll();
        if (localStorage.getItem('custAdminName')) {
            this.custAdminName = 'You have switched as ' + localStorage.getItem('custAdminName') + ' admin';
        }
    };
    NavbarComponent.prototype.getCustomerAll = function () {
        var _this = this;
        this.customerService.getAllCustomers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (res) {
            if (res.status.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: res.status.message,
                });
            }
            else {
                _this.customers = res.dataList;
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    NavbarComponent.prototype.changeCustAdminMode = function (event) {
        var _this = this;
        // console.log('change cust admin to', event.target.options[event.target.options.selectedIndex].text);
        if (event.target.value !== '0') {
            this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to switch to customer admin ... ?')
                .then(function (confirmed) {
                if (confirmed) {
                    var currUser = JSON.parse(localStorage.getItem('currentUser'));
                    currUser.refCustId = event.target.value;
                    _this.custId = event.target.value;
                    localStorage.setItem('currentUser', JSON.stringify(currUser));
                    localStorage.setItem('custAdminName', event.target.options[event.target.options.selectedIndex].text);
                    window.location.reload();
                }
                else {
                    var currUser = JSON.parse(localStorage.getItem('currentUser'));
                    _this.custId = currUser.refCustId;
                }
            })
                .catch(function () { return console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'); });
        }
        else {
            this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to switch back to super admin ... ?')
                .then(function (confirmed) {
                if (confirmed) {
                    var currUser = JSON.parse(localStorage.getItem('currentUser'));
                    currUser.refCustId = event.target.value;
                    _this.custId = event.target.value;
                    localStorage.setItem('currentUser', JSON.stringify(currUser));
                    localStorage.removeItem('custAdminName');
                    window.location.reload();
                }
            })
                .catch(function () { return console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'); });
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.layout.dir) {
            setTimeout(function () {
                var dir = _this.config.layout.dir;
                if (dir === 'rtl') {
                    _this.placement = 'bottom-left';
                }
                else if (dir === 'ltr') {
                    _this.placement = 'bottom-right';
                }
            }, 0);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else {
            this.toggleClass = 'ft-maximize';
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitNotiSidebarChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName('app-sidebar')[0];
        if (appSidebar.classList.contains('hide-sidebar')) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.prototype.logout = function () {
        console.log('logout...');
        localStorage.clear();
        this.authService.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: app_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogService"] },
        { type: app_dashboard_superadmin_masters_customer_services_customer_services__WEBPACK_IMPORTED_MODULE_9__["CustomerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            app_login_services_authentication_service___WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogService"],
            app_dashboard_superadmin_masters_customer_services_customer_services__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #settings .switch {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0Q6XFxMTkdcXFByb2pldGNzXFxBdHRlbmRhbmNlIFN5c3RlbVxcTE5HLkFUVEVOREFOQ0VTWVNURU1XRUIuVjEvc3JjXFxhcHBcXHNoYXJlZFxcbm90aWZpY2F0aW9uLXNpZGViYXJcXG5vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1QsYUFBYTtFQUNoQixVQUFVO0VBQ1Asc0JBQXNCO0VBQ3pCLGFBQWE7RUFDVixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMERBQTBEO0VBQzFELG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLHNDQUFzQyxFQUFBO0VBYjFDO0lBZ0JFLFFBQVEsRUFBQTtFQWhCVjtJQXNCRSxrQkFBa0I7SUFDZixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBeEJsQjtNQThCTSxZQUFXLEVBQUE7RUE5QmpCO01BaUNNLFlBQVcsRUFBQTtFQWpDakI7TUF5Q0ksWUFBWSxFQUFBO0VBekNoQjtJQWdERSxnQkFBZ0I7SUFDaEIsNkJBQTRCO0lBQzVCLGNBQWM7SUFDWCwyQ0FBMkMsRUFBQTtFQW5EaEQ7SUFzREssV0FBVyxFQUFBO0VBdERoQjtJQXlERSxrQkFBa0I7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVyxFQUFBO0VBOURoQjtJQWlFRSxrQkFBa0I7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUN0QnBCO0VEZ0NFLFlBQVk7RUFDWixXQUFXLEVBQUE7RUM5Qlg7SURnQ0MsT0FBTztJQUNQLFdBQVcsRUFBQTtFQzlCWjtJRGlDQyxVQUFVO0lBQ1YsV0FBVyxFQUFBO0VDL0JaO0lEa0NDLFlBQVk7SUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aWZpY2F0aW9uLXNpZGViYXJ7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG4gICAgcmlnaHQ6IC00MDBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHR6LWluZGV4OiAxMDUxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcblx0Ji5vcGVue1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdGhlaWdodDogMTAwJTtcclxuICAgIFx0cGFkZGluZzogMTBweDtcclxuXHJcbiAgICBcdCN0aW1lbGluZXtcclxuICAgIFx0XHQmLnRpbWVsaW5lLWxlZnR7XHJcbiAgICBcdFx0XHQudGltZWxpbmUtaXRlbXtcclxuICAgIFx0XHRcdFx0JjpiZWZvcmV7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG4gICAgXHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG4gICAgXHRcdFx0XHR9XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQjc2V0dGluZ3N7XHJcblx0XHRcdC5zd2l0Y2h7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcclxuICAgIFx0Y29sb3I6ICMwMDA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZXtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDEwcHg7XHJcblx0ICAgIHRvcDogMTBweDtcclxuXHQgICAgcGFkZGluZzogN3B4O1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHQgICAgei1pbmRleDogMTA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHRcclxuXHJcblx0XHJcblxyXG59XHJcblxyXG5bZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcHtcclxuXHQjbm90aWZpY2F0aW9uLXNpZGViYXJ7XHRcclxuXHRcdGxlZnQ6IC00MDBweDtcdFxyXG5cdFx0cmlnaHQ6IGF1dG87XHQgICBcclxuXHRcdCYub3BlbntcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XHJcblx0XHRcdGxlZnQ6IDEwcHg7XHJcblx0XHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcdFxyXG5cdFx0XHRyaWdodDogLTU0cHg7XHJcblx0XHRcdGxlZnQ6IGF1dG87XHJcblx0XHR9XHRcclxuXHR9XHJcbn0iLCIjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgcmlnaHQ6IDA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTphZnRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3NldHRpbmdzIC5zd2l0Y2gge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICByaWdodDogLTU0cHg7XG4gICAgbGVmdDogYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(elRef, renderer, layoutService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.notiSidebarChangeEmitted$.subscribe(function (value) {
            if (_this.isOpen) {
                _this.renderer.removeClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = false;
            }
            else {
                _this.renderer.addClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = true;
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    };
    NotificationSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationSidebarComponent.prototype, "sidebar", void 0);
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
// Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'masters',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'masters/customer',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'masters/employee',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'attendance',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'leave',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
];


/***/ }),

/***/ "./src/app/shared/services/common.services.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/common.services.ts ***!
  \****************************************************/
/*! exports provided: CommonDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDataService", function() { return CommonDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CommonDataService = /** @class */ (function () {
    function CommonDataService() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentUser = this.user.asObservable();
    }
    CommonDataService.prototype.changeUser = function (oType) { this.user.next(oType); };
    CommonDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommonDataService);
    return CommonDataService;
}());



/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                dir: "ltr",
                customizer: {
                    hidden: false //options: true, false
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-lg",
                    backgroundColor: "man-of-steel",
                    /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
                      bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
                    */
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        // Customizer
        this.emitCustomizerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
        // customizer - compact menu
        this.emitCustomizerCMSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();
        // customizer - compact menu
        this.emitNotiSidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService.prototype.emitCustomizerChange = function (change) {
        this.emitCustomizerSource.next(change);
    };
    LayoutService.prototype.emitCustomizerCMChange = function (change) {
        this.emitCustomizerCMSource.next(change);
    };
    LayoutService.prototype.emitNotiSidebarChange = function (change) {
        this.emitNotiSidebarSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/services/module.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/module.service.ts ***!
  \***************************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/common.services */ "./src/app/shared/services/common.services.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ModuleService = /** @class */ (function () {
    function ModuleService(http, router, commonService) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
    }
    ModuleService.prototype.GetUserModule = function (loginId) {
        console.log('module service called...');
        var param = { 'loginId': loginId };
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + '/api/company/module/user/getUserModuleMapping', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    ModuleService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    ModuleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"] }
    ]; };
    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_shared_services_common_services__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







// COMPONENTS





// DIRECTIVES







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarToggleDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/module.service */ "./src/app/shared/services/module.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService, layoutService, moduleService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.layoutService = layoutService;
        this.moduleService = moduleService;
        this.showDefaultLogo = true;
        this.ROUTES = [];
        this.SUBMENU = [];
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    if (options.bgColor === 'white') {
                        _this.logoUrl = 'assets/img/logo-dark.png';
                    }
                    else {
                        _this.logoUrl = 'assets/img/logos/lng_logo.png';
                    }
                }
                if (options.compactMenu === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (options.compactMenu === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.moduleService.GetUserModule(user.loginId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (res) {
            if (res.mainMenu.length > 0) {
                for (var i = 0; i < res.mainMenu.length; i++) {
                    if (res.mainMenu[i].moduleName === 'Dashboard') {
                        // tslint:disable-next-line: max-line-length
                        _this.ROUTES.push({ id: res.mainMenu[i].moduleId, path: res.mainMenu[i].moduleURL, title: res.mainMenu[i].moduleName, icon: res.mainMenu[i].icon, class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
                    }
                    else {
                        // tslint:disable-next-line: max-line-length
                        _this.ROUTES.push({ id: res.mainMenu[i].moduleId, path: res.mainMenu[i].moduleURL, title: res.mainMenu[i].moduleName, icon: res.mainMenu[i].icon, class: res.mainMenu[i].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
                    }
                    var _loop_1 = function (j) {
                        if (res.mainMenu[i].moduleId === res.subMenu[j].parentId) {
                            // console.log(j + '-----' + res.subMenu[j].parentId + '---' + res.mainMenu[i].moduleId);
                            // tslint:disable-next-line: max-line-length
                            _this.ROUTES.filter(function (m) { return m.id === res.subMenu[j].parentId; }).map(function (m) { return m.submenu.push({ id: res.subMenu[j].moduleId, path: res.subMenu[j].moduleURL, title: res.subMenu[j].moduleName, icon: res.subMenu[j].icon, class: res.subMenu[j].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], }); });
                            // tslint:disable-next-line: max-line-length
                            _this.SUBMENU.push({ id: res.subMenu[j].moduleId, path: res.subMenu[j].moduleURL, title: res.subMenu[j].moduleName, icon: res.subMenu[j].icon, class: res.subMenu[j].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
                        }
                    };
                    for (var j = 0; j < res.subMenu.length; j++) {
                        _loop_1(j);
                    }
                }
                // const aa = this.ROUTES.filter(m => m.path === null);
                // console.log('A ', this.ROUTES);
                // aa.map(m => m.class = 'has-sub');
                // console.log('B ', aa);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Module not assigned',
                });
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }).then(function () {
                _this.moduleService.logout();
            });
            // this.router.navigate(['/login']);
        });
        // this.ROUTES = [
        //   {
        //     tslint:disable-next-line: max-line-length
        //     path: '/dashboard', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
        // }
        // ];
        this.menuItems = this.ROUTES;
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            if (localStorage.getItem('currentUser')) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser.refCustId === 0) {
                    this.showDefaultLogo = true;
                    this.logoUrl = 'assets/img/logos/lng_logo.png';
                }
                else {
                    this.showDefaultLogo = false;
                    this.custLogoFile = currentUser.custLogo;
                }
            }
            else {
                this.showDefaultLogo = true;
                this.logoUrl = 'assets/img/logos/lng_logo.png';
            }
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] },
        { type: _services_module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('toggleIcon', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], SidebarComponent.prototype, "toggleIcon", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
            _services_module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/superadminlogin/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/superadminlogin/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW5sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/superadminlogin/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/superadminlogin/login.component.ts ***!
  \****************************************************/
/*! exports provided: SuperAdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminLoginComponent", function() { return SuperAdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/Authentication.service  */ "./src/app/superadminlogin/services/Authentication.service .ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var SuperAdminLoginComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function SuperAdminLoginComponent(router, formBuilder, route, authenticationService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.invalidLogin = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/dashboard/admin']);
        }
        this.adminType = 'admin';
        localStorage.setItem('superLogin', 'true');
    }
    SuperAdminLoginComponent.prototype.ngOnInit = function () {
        this.myLogin = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer: [],
            adminType: [],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(SuperAdminLoginComponent.prototype, "f", {
        get: function () { return this.myLogin.controls; },
        enumerable: true,
        configurable: true
    });
    SuperAdminLoginComponent.prototype.showCustomer = function () {
        console.log('Radion...', this.adminType);
    };
    SuperAdminLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myLogin.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data.status.error) {
                _this.submitted = false;
                _this.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: data.status.message,
                });
            }
            else {
                console.log('navigating to dashbaord...');
                _this.router.navigate(['/dashboard/admin']);
                // window.location.href = './dashboard';
            }
        }, function (error) {
            _this.loading = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };
    SuperAdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__["SuperAdminAuthenticationService"] }
    ]; };
    SuperAdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/superadminlogin/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/superadminlogin/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_Authentication_service___WEBPACK_IMPORTED_MODULE_4__["SuperAdminAuthenticationService"]])
    ], SuperAdminLoginComponent);
    return SuperAdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/superadminlogin/services/Authentication.service .ts":
/*!*********************************************************************!*\
  !*** ./src/app/superadminlogin/services/Authentication.service .ts ***!
  \*********************************************************************/
/*! exports provided: SuperAdminAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminAuthenticationService", function() { return SuperAdminAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SuperAdminAuthenticationService = /** @class */ (function () {
    function SuperAdminAuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(SuperAdminAuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    SuperAdminAuthenticationService.prototype.login = function (username, password) {
        var param = { 'loginName': username, 'loginPassword': password };
        // tslint:disable-next-line: max-line-length
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/login', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            // console.log('user', user);
            if (!user.status.error) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                // this.commonService.changeUser(JSON.stringify(user.data));
                // this.currentUserSubject.next(user.data);
                // window.location.reload();
                // console.log('auth local', localStorage.getItem('currentUser'));
            }
            return user;
        }));
    };
    SuperAdminAuthenticationService.prototype.ChangePassword = function (userName, oldPassword, newPassword) {
        var param = { 'userName': userName, 'oldPassword': oldPassword, 'newPassword': newPassword };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/change/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    SuperAdminAuthenticationService.prototype.forgotPassword = function (userName) {
        var param = { 'userName': userName };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/forgot/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    SuperAdminAuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    SuperAdminAuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SuperAdminAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SuperAdminAuthenticationService);
    return SuperAdminAuthenticationService;
}());



/***/ }),

/***/ "./src/app/superadminlogin/services/authentication.service .ts":
/*!*********************************************************************!*\
  !*** ./src/app/superadminlogin/services/authentication.service .ts ***!
  \*********************************************************************/
/*! exports provided: SuperAdminAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminAuthenticationService", function() { return SuperAdminAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SuperAdminAuthenticationService = /** @class */ (function () {
    function SuperAdminAuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(SuperAdminAuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    SuperAdminAuthenticationService.prototype.login = function (username, password) {
        var param = { 'loginName': username, 'loginPassword': password };
        // tslint:disable-next-line: max-line-length
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/login', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            // console.log('user', user);
            if (!user.status.error) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                // this.commonService.changeUser(JSON.stringify(user.data));
                // this.currentUserSubject.next(user.data);
                // window.location.reload();
                // console.log('auth local', localStorage.getItem('currentUser'));
            }
            return user;
        }));
    };
    SuperAdminAuthenticationService.prototype.ChangePassword = function (userName, oldPassword, newPassword) {
        var param = { 'userName': userName, 'oldPassword': oldPassword, 'newPassword': newPassword };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/change/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    SuperAdminAuthenticationService.prototype.forgotPassword = function (userName) {
        var param = { 'userName': userName };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/company/users/forgot/password', param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
        }));
    };
    SuperAdminAuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    SuperAdminAuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SuperAdminAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SuperAdminAuthenticationService);
    return SuperAdminAuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://52.183.143.13:8080/attnd-api-gateway-service'
    // baseUrl: 'http://52.183.143.13:8080/uat-attnd-api-gateway-service'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\LNG\Projetcs\Attendance System\LNG.ATTENDANCESYSTEMWEB.V1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map