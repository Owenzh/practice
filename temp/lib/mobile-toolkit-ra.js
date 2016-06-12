/*
 mobile-toolkit-ra v3.6.0
 Copyright © Rockwell Automation Technologies, Inc. All Rights Reserved
*/
/* global angular */
/**
 * @ngdoc overview
 * @name mobile-toolkit-ra
 * @module mobile-toolkit-ra
 * @description
 * Here we can put some general description and overview information regarding
 * this module.
 */
angular.module("mobile-toolkit-ra", [ // Dependencies
"ngAnimate", "ui.bootstrap", "mobile-toolkit-ra-i18n" ]);

angular.module("mobile-toolkit-ra").run([ "$templateCache", function($templateCache) {
    $templateCache.put("raActionBar/raActionBar.tpl.html", '<div class="ra-flex-row ra-scroll-x navbar-default ra-navbar-footer-default" role="navigation" ng-if="((actionItems | toActionGroup: { group: \'left\', includeUndefined: true}).length + (actionItems | toActionGroup: { group: \'center\'}).length + (actionItems | toActionGroup: { group: \'right\'}).length) > 0"><ul class="ra-flex-item-static ra-flex-row nav navbar-nav"><li ng-repeat="actionItem in actionItems | toActionGroup: { group: \'left\', includeUndefined: true} | orderBy: \'displayIndex\'"><a id="raAction{{actionItem.actionName}}" class="ra-action-item-cursor" title="{{actionItem.tooltipText | translate}}" ng-click="invokeDoAction(actionItem)"><span class="{{actionItem.iconClass}}" ng-class="{\'ra-action-item-disabled\': (!enableActions || actionItem.isDisabled)}"><span id="raBadge{{actionItem.actionName}}" class="badge ra-action-badge" ng-class="actionItem.badgeStyle ? actionItem.badgeStyle : \'ra-badge-default\'">{{actionItem.badgeText | translate}}</span></span></a></li></ul><ul class="ra-flex-item-static ra-flex-row nav navbar-nav"><li ng-repeat="actionItem in actionItems | toActionGroup: { group: \'center\'} | orderBy: \'displayIndex\'"><a id="raAction{{actionItem.actionName}}" class="ra-action-item-cursor" title="{{actionItem.tooltipText | translate}}" ng-click="invokeDoAction(actionItem)"><span class="{{actionItem.iconClass}}" ng-class="{\'ra-action-item-disabled\': (!enableActions || actionItem.isDisabled)}"><span id="raBadge{{actionItem.actionName}}" class="badge ra-action-badge" ng-class="actionItem.badgeStyle ? actionItem.badgeStyle : \'ra-badge-default\'">{{actionItem.badgeText | translate}}</span></span></a></li></ul><ul class="ra-flex-item-static ra-flex-row nav navbar-nav"><li ng-repeat="actionItem in actionItems | toActionGroup: { group: \'right\'} | orderBy: \'displayIndex\'"><a id="raAction{{actionItem.actionName}}" class="ra-action-item-cursor" title="{{actionItem.tooltipText | translate}}" ng-click="invokeDoAction(actionItem)"><span class="{{actionItem.iconClass}}" ng-class="{\'ra-action-item-disabled\': (!enableActions || actionItem.isDisabled)}"><span id="raBadge{{actionItem.actionName}}" class="badge ra-action-badge" ng-class="actionItem.badgeStyle ? actionItem.badgeStyle : \'ra-badge-default\'">{{actionItem.badgeText | translate}}</span></span></a></li></ul></div>');
    $templateCache.put("raActionSheet/raActionSheet.tpl.html", '<div class="ra-flex-column"><div class="ra-flex-item-static ra-action" ng-repeat="action in actions" ng-click="doAction(action.value)" ra-on-tap-down-add-class="ra-action-sheet-highlight-on-tap" id="{{ \'action_\' + $index }}">{{action.label | translate}}</div><div class="ra-flex-item-static ra-action ra-action-cancel" ra-on-tap-down-add-class="ra-action-sheet-highlight-on-tap" ng-click="cancel()">{{\'RA_ACTION_SHEET.CANCEL\' | translate }}</div></div>');
    $templateCache.put("raBreadcrumb/raBreadcrumb.tpl.html", '<div class="ra-breadcrumb-absolute-helper"><div class="ra-breadcrumb ra-scroll-y" ng-click="hideBreadcrumb();"><div id="listId" class="ra-flex-item-dynamic ra-flex-column list-group ra-list-group" ng-class="{\'ra-flex-column-reverse\': params.hasBreadcrumbReverseOrder}"><a ng-click="onItemClick(curItem, $event)" class="list-group-item ra-list-group-item ra-flex-item-static" ng-repeat="curItem in params.breadcrumbItems track by $index" ng-bind="curItem.name | translate"></a></div></div></div>');
    $templateCache.put("raDateTimePicker/raDateTimePicker.tpl.html", '<div class="ra-datetime-picker-box"><div class="input-group date"><input type="text" class="form-control"> <span class="input-group-addon"><span class="ra-icon ra-icon-calendar"></span></span></div></div>');
    $templateCache.put("raDropContent/raDropContent.tpl.html", '<div class="ra-drop-content-relative"><div class="ra-drop-content-absolute" ng-style="{ left: containerAbsPosition.left + \'px\', top: containerAbsPosition.top + \'px\' }"><div class="ra-flex-item-dynamic ra-scroll-y ra-drop-content" ng-click="collapseContent()" ng-style="{ \'max-width\': containerSize.maxWidth + \'px\', \'max-height\': containerSize.maxHeight + \'px\', \'height\': containerSize.height + \'px\' }"><div class="ra-flex-item-dynamic ra-flex-column" ng-transclude></div></div></div></div><div class="ra-drop-content-full-screen-backdrop" ng-class="backdropClass" ng-click="collapseContent()"></div>');
    $templateCache.put("raErrorCollectorSvc/raCommunicationErrorOverlay.tpl.html", '<div ra-message message-type="{{messageType}}" content="content" click-action="clickAction"><div ra-message-button label="Retry" action="retryAction()"></div><div ra-message-button label="Home" action="homeAction()"></div></div>');
    $templateCache.put("raErrorCollectorSvc/raGeneralErrorOverlay.tpl.html", '<div ra-message message-type="{{messageType}}" content="content" click-action="clickAction"></div>');
    $templateCache.put("raExpandOnScroll/raExpandOnScroll.tpl.html", '<div ng-style="style" ng-class="{\'ra-resize-box\': doAnimate}" id="raExpandOnScrollContainer" class="ra-flex-item-dynamic ra-flex-column ra-scroll-y"><div class="ra-flex-item-static ra-flex-column" ng-transclude></div></div><div ng-if="!showNav" class="ra-flex-item-static" ng-style="{\'width\': tempWidth, \'height\': tempHeight}"></div>');
    $templateCache.put("raFixedHeight/raFixedHeight.tpl.html", '<div class="ra-scroll-helper" ng-transclude></div>');
    $templateCache.put("raGridPaging/raGridPagingUi.tpl.html", '<div ng-show="isPagerVisible" id="pagingControls"><div id="pagingControlsTotal">Total: {{ recordsPosition.visibleRecords }}</div><div id="pagingControlsButtons"><span class="ra-icon ra-icon-back ra-grid-paging-btn" ng-click="raGridPagingApi.previousPage()" ng-disabled="maxPages <= 1"></span><select ng-model="pageIndex" ng-options="p as p for p in pages" ng-disabled="maxPages <= 1" class="ra-grid-paging-select"></select>&nbsp;of&nbsp;{{ maxPages }} <span class="ra-icon ra-icon-forward ra-grid-paging-btn" ng-click="raGridPagingApi.nextPage()" ng-disabled="maxPages <= 1"></span></div></div>');
    $templateCache.put("raGridResponsiveBehavior/expandableCell.tpl.html", '<div class="ra-flex-row ra-grid-expandable-cell-top ra-flex-align-main-start"><div class="ra-flex-item-static ra-grid-expandable-cell-button" ng-if="row.grid.anyColumnHidden && row.grid.options.enableExpandableRow" ng-click="row.grid.api.responsive.toggleRowExpansion(row.entity)" style="cursor: pointer"><i ng-class="{ \'ra-icon-caret-collapsed\' : !row.isExpanded, \'ra-icon-caret-expanded\' : row.isExpanded }"></i></div>CELL_CONTENTS</div>');
    $templateCache.put("raGridResponsiveBehavior/expandableRow.tpl.html", '<div measure-height class="ra-grid-expandable-row-container pull-left" ng-click="row.grid.options.collapseRowOnContentClick && row.grid.api.responsive.toggleRowExpansion(row.entity)"><ul class="ra-grid-expandable-row"><li ng-repeat="column in row.entity.columns"><div ra-grid-responsive-expandable-template></div></li></ul></div>');
    $templateCache.put("raGridResponsiveBehavior/expandableScrollFiller.tpl.html", "<div ng-if=\"expandableRow.shouldRenderFiller()\" class=\"ra-grid-expandable-scroll-filler\" ng-style=\"{ width: (grid.getViewportWidth()) + 'px', height: grid.options.expandableRowHeight + 'px', 'margin-left': grid.options.rowHeader.rowHeaderWidth + 'px' }\"></div>");
    $templateCache.put("raHorizontalBreadcrumb/raHorizontalBreadcrumb.tpl.html", '<div class="ra-flex-item-static ra-flex-row ra-flex-align-main-start ra-flex-align-cross-center ra-h-breadcrumb" ng-if="horizontalBreadcrumbList.length > 0" ng-class="{\'ra-h-breadcrumb-measure\': measureAll === true}"><span class="ra-flex-item-static ra-h-breadcrumb-chevron" ng-class="{\'ra-icon-double-back\': bHiddenItems.length > 0 && !dropLastItemsApi.isExpanded, \'ra-icon-drop-up\': bHiddenItems.length > 0 && dropLastItemsApi.isExpanded}" ng-if="bHiddenItems.length > 0" ng-click="dropLastItemsApi.toggle()"></span> <span class="ra-flex-item-shrink ra-flex-row ra-flex-align-main-start ra-scroll-x ra-h-breadcrumb-items"><span ng-class="{\'ra-flex-item-shrink\': $first, \'ra-flex-item-static\': !$first}" class="ra-flex-row ra-flex-align-cross-center ra-h-breadcrumb-item-container" ng-repeat="curItem in bShownItems track by $index"><a ng-click="onItemClick(curItem, $event)" class="ra-overflow ra-h-breadcrumb-item" ng-class="{\'ra-first-item\': $first, \'ra-flex-item-shrink\': $first, \'ra-overflow\': $first, \'ra-flex-item-static\': !$first, \'ra-h-breadcrumb-item-active\': curItem.url || curItem.onItemClick !== undefined, \'ra-h-breadcrumb-item-clicked\': curItem.isChildDisplayed}" ng-bind="curItem.name | translate" ng-attr-title="{{curItem.name | translate}}"></a> <span class="ra-flex-item-static" ng-hide="$last" ng-click="onItemChevronClick(curItem, $event)" ng-class="{\'ra-h-breadcrumb-item-child\': curItem.childItems.length > 0, \'ra-icon-forward\': curItem.isChildDisplayed !== true, \'ra-icon-drop-up\': curItem.isChildDisplayed}"></span></span> <span ng-class="titleIcon" class="viewmode ra-flex-row ra-flex-align-cross-center" ng-show="titleIcon" title="{{titleIconMsg}}"></span></span> <span class="ra-flex-item-dynamic ra-h-breadcrumb-free-space">&nbsp;</span></div><ra-drop-content ng-if="bHiddenItems.length > 0" config="dropContentConfig" set-api="dropContentLastItemsApi(api)" class="ra-h-breadcrumb-dropdown"><div class="ra-flex-item-dynamic ra-flex-column ra-h-breadcrumb-dropdown-container"><a class="ra-flex-item-static ra-h-breadcrumb-item" ng-repeat="curItem in bHiddenItems track by $index" ng-class="{\'ra-h-breadcrumb-item-active\': curItem.url || curItem.onItemClick}" ng-click="onItemClick(curItem, $event)" ng-bind="curItem.name | translate"></a></div></ra-drop-content><ra-drop-content ng-if="bChildCurItem || bChildItems.length > 0" set-api="dropContentChildItemsApi(api)" config="dropContentConfig" class="ra-h-breadcrumb-dropdown"><div class="ra-flex-item-dynamic ra-flex-column ra-h-breadcrumb-dropdown-container"><a class="ra-flex-item-static ra-h-breadcrumb-item ra-overflow" ng-repeat="curItem in bChildItems track by $index" ng-class="{\'ra-h-breadcrumb-item-active\': curItem.isSelected !== true && (curItem.url || curItem.onItemClick), \'ra-h-breadcrumb-item-selected\': curItem.isSelected}" ng-click="curItem.isSelected !== true && onItemClick(curItem, $event)" ng-bind="curItem.name | translate"></a></div></ra-drop-content>');
    $templateCache.put("raItemFilter/raItemFilter.detail.tpl.html", '<a><div><span ng-bind-html="match.label | raItemFilterTypeaheadHighlight:query"></span></div></a>');
    $templateCache.put("raItemFilter/raItemFilter.tpl.html", '<ng-form name="bmSearchForm"><div class="{{vm.config.containerClass}}"><div class="form-group ra-itemFilter-inputGroup"><div class="input-group"><span class="input-group-addon ra-icon-filter" ng-class="{\'filtered-state\': vm.config.queryString}"></span> <input id="inputFilterText" type="text" class="form-control" placeholder="{{vm.searchTextPlaceholderValue | translate}}" ng-model="vm.config.queryString" tooltip-html="vm.currentParserError" tooltip-placement="bottom" tooltip-trigger="none" tooltip-is-open="vm.shouldShowErrorTooltip" typeahead-wait-ms="200" typeahead-focus-first="false" typeahead-template-url="raItemFilter/raItemFilter.detail.tpl.html" typeahead="itemResult for itemResult in vm.getTypeaheadList($viewValue) | limitTo:vm.typeaheadListSize"> <span class="input-group-addon ra-itemFilter-count" ng-if="vm.config.queryString"><span id="valueFilterCount" ng-bind="\'(\' + vm.filteredCount + \')\'"></span> <span id="buttonClearFilter" class="ra-icon-clear" ng-click="vm.clearSearch()" title="{{vm.clearSearchTextValue|translate}}"></span></span></div></div></div></ng-form>');
    $templateCache.put("raList/raList.tpl.html", '<div class="list-group ra-list-group"><a ng-repeat="curItem in items track by $index" class="list-group-item ra-list-group-item" ng-click="onItemClick(curItem)" ng-class="{\'selected\': itemIsSelected(curItem), \'selection\': colDefs.hasSelectionCol(), \'description\' : curItem.description !== undefined}" kendo-draggable k-options="draggableOptions" ra-infinite-scroll-item><div class="row"><div class="ra-list-label-group ra-flex-row" ng-class="colDefs.getLabelGroupColClass()"><div class="ra-list-selection text-center ra-flex-item-static" ng-show="colDefs.hasSelectionCol()" ng-click="$event.stopPropagation()"><label class="ra-list-option"><div ng-if="config.selectionMode === \'single\'"><input class="ra-list-radio" type="radio" name="{{\'raListRadioGroup\' + uniqueId}}" ng-model="singleSelectionIndex" ng-value="$index" ng-click="onRadioClick($index, curItem)"> <span ng-class="itemIsSelected(curItem) ? \'ra-icon-selected\' : \'ra-icon-unselected\'"></span></div><div ng-if="config.selectionMode === \'multiple\'"><input class="ra-list-checkbox" type="checkbox" ng-model="curItem.isSelected" ng-change="onCheckboxChange()"> <span ng-class="curItem.isSelected ? \'ra-icon-checked\' : \'ra-icon-unchecked\'"></span></div></label></div><div class="ra-list-icon ra-flex-item-static" ng-if="colDefs.hasIconCol()"><span ng-if="curItem.iconClasses" ng-class="curItem.iconClasses"></span> <img ng-if="curItem.iconUrl" ng-src="{{curItem.iconUrl}}"></div><div class="ra-list-label ra-flex-item-dynamic"><div class="ra-list-label-name" ra-truncate break-all ng-bind="curItem.label" ng-class="{\'font-normal\': !colDefs.hasDescriptionCol() && colDefs.getValueColClass() === \'\'}"></div><p class="ra-list-label-description" ng-if="curItem.description" ra-truncate break-all ng-bind="curItem.description"></p></div></div><div class="ra-list-value text-right" ng-class="curItem.valueClasses + \' \' + colDefs.getValueColClass()" ng-if="colDefs.getValueColClass() !== \'\'" ra-truncate break-all ng-bind="curItem.value"></div><div class="ra-list-chevron" ng-class="colDefs.getChevronColClass()" ng-if="colDefs.getChevronColClass() !== \'\'"><div class="text-right" ng-if="curItem.hasChevron"><span><span class="ra-icon ra-icon-forward"></span></span></div></div></div></a></div><div ng-hide="items.length" class="alert alert-info">{{ \'RA_LIST.NO_ITEMS_FOUND\' | translate }}</div>');
    $templateCache.put("raMessage/raMessage.tpl.html", '<div class="ra-message"><div><div class="ra-message-sidebar"><div class="{{icon}}"></div></div><div class="ra-message-content"><div class="ra-modal-header ra-modal-title">{{content.title}}</div><div class="ra-modal-body"><p>{{content.details}}</p><p>{{content.confirmationDesc}}</p></div></div></div><div class="ra-modal-footer"><div class="flex-message-button-container"><div ra-message-button do-action="btn.doAction" label="{{btn.tooltipText}}" ng-repeat="btn in actionDefinitions"></div></div><div class="flex-message-button-container"><div ra-message-button action="clickAction(btn.action)" label="{{btn.label}}" ng-repeat="btn in content.buttons"></div></div><div ng-transclude class="flex-message-button-container"></div></div></div>');
    $templateCache.put("raMessage/raMessageButton.tpl.html", '<div class="flex-message-button" ng-click="action({label: label})">{{label}}</div>');
    $templateCache.put("raMessage/raMessageOverlay.tpl.html", '<div ra-message message-type="{{messageType}}" content="content" click-action="clickAction" action-definitions="actionDefinitions"></div>');
    $templateCache.put("raNavbar/raNavbar.tpl.html", '<div class="ra-flex-item-dynamic ra-flex-row ra-navbar-default ra-flex-align-cross-center"><div class="ra-flex-item-static ra-flex-column ra-navbar-button-container" ng-show="params.isNavbarHamButtonVisible || params.isNavbarBackButtonVisible"><a id="backButton" ng-show="params.isNavbarBackButtonVisible" ng-click="navigateBack()" href class="navbar-link ra-back-button"><span class="ra-icon-back" title="{{ \'RA_NAVBAR.BACK\' | translate }}"></span></a></div><a class="ra-flex-item-dynamic ra-flex-column ra-brand-container ra-navbar-brand ra-center" href ng-click="toggleChevron();"><div id="viewTitle" class="ra-flex-item-static ra-flex-row ra-flex-align-cross-center ra-flex-align-main-center"><span class="ra-overflow">{{ params.title | translate }}</span> <span ng-class="params.titleIcon" class="ra-title-icon ra-flex-item-static" ng-show="params.titleIcon" title="{{params.titleIconMsg}}"></span></div><div ng-show="params.isNavbarChevronVisible" class="ra-flex-item-static ra-chevron-window-shade"><i ng-class="getChevronCss()" title="{{ \'RA_NAVBAR.VIEW_HIERARCHY\' | translate }}"></i></div></a><div class="ra-flex-item-static ra-flex-column ra-flex-align-cross-end ra-navbar-button-container" ng-show="params.isNavbarHamButtonVisible || params.isNavbarBackButtonVisible"><button class="ra-toggle btn" ng-show="params.isNavbarHamButtonVisible" id="toggleSidebarBtn" type="button" ng-click="showSidebar();"><span class="ra-icon ra-icon-hamburger" title="{{ \'RA_NAVBAR.MENU\' | translate }}"></span> <span class="ra-badge img-circle" ng-show="params.navbarHamBadgeText">{{params.navbarHamBadgeText}}</span></button></div></div>');
    $templateCache.put("raNavbarLarge/raNavbarLarge.tpl.html", '<div class="ra-navbar-large-full-content ra-flex-column"><ra-drop-content ng-if="params.username" set-api="dropContentApi(api)" ng-class="{\'ra-navbar-large-menu-pos-fixed\': hasHomeIcon()}"><div class="ra-flex-item-dynamic ra-flex-column ra-navbar-large-menu"><a ng-click="params.onUsernameClick()" class="ra-flex-column ra-flex-item-static" href ng-class="{\'ra-navbar-large-link-disabled\': params.onUsernameClick === undefined}"><span class="ra-navbar-large-menu-username ra-overflow ra-flex-item-static">{{params.username | translate}}</span> <span ng-if="params.onUsernameClick" class="ra-navbar-large-menu-profile ra-flex-item-static">{{\'RA_NAVBAR.PROFILE\' | translate}}</span></a><div ng-if="params.onLogoutClick" class="ra-navbar-large-menu-separator"></div><a ng-if="params.onLogoutClick" ng-click="params.onLogoutClick()" href class="ra-navbar-large-logout">{{\'RA_NAVBAR.LOGOUT\' | translate}}</a></div></ra-drop-content><div class="ra-flex-item-static ra-flex-row ra-navbar-default ra-flex-align-main-start ra-flex-align-cross-center"><a id="backButton" href ng-if="params.isNavbarBackButtonVisible" ng-click="navigateBack()" class="ra-flex-item-static ra-back-button"><span class="ra-icon-back" ng-attr-title="{{ \'RA_NAVBAR.BACK\' | translate }}"></span></a><div class="ra-flex-item-dynamic ra-flex-row ra-flex-align-main-start ra-flex-align-cross-center ra-navbar-large-nav-group"><div ng-if="config.isNavigationItemsVisible" class="ra-flex-item-static ra-flex-row" ng-repeat="items in params.navigationItems track by $index"><div class="ra-flex-item-static ra-navbar-large-group-separator"></div><a class="ra-flex-item-static ra-navbar-large-group-item ra-flex-row" ng-repeat="curItem in items track by $index" ng-class="(curItem.isSelected ? \'selected \': \'\') + curItem.cssClasses" ng-click="onItemClick(curItem, $event)"><span ng-if="curItem.iconClasses" class="ra-navbar-large-icon ra-flex-item-static" ng-class="curItem.iconClasses" ng-attr-title="{{curItem.name | translate}}"></span> <span class="ra-overflow ra-flex-item-dynamic" ng-attr-id="{{curItem.id !== undefined ? \'raNavItem_\' + curItem.id : undefined}}">{{curItem.name | translate}}</span> <span ng-if="curItem.badgeText !== undefined" ng-attr-id="{{curItem.id !== undefined ? \'raBadge_\' + curItem.id : undefined}}" class="ra-flex-item-static badge ra-nav-badge" ng-class="curItem.badgeStyle ? curItem.badgeStyle : \'ra-badge-default\'">{{curItem.badgeText | translate}}</span></a></div></div><a class="ra-flex-item-static ra-flex-row ra-navbar-large-branding-logo ra-flex-align-cross-center" ng-if="hasBrandingLogo()" ng-click="onBrandingLogoClick()"><span class="ra-flex-item-static" ng-if="params.brandingLogoClasses" ng-class="params.brandingLogoClasses"></span> <img class="ra-flex-item-static" ng-if="params.brandingLogoUrl" ng-src="{{params.brandingLogoUrl}}"></a><div class="ra-flex-item-static ra-flex-row ra-flex-align-cross-center ra-flex-align-main-end ra-navbar-large-general-group"><a class="ra-navbar-large-group-item" ng-repeat="curItem in params.generalItems track by $index" ng-class="curItem.cssClasses" ng-click="onItemClick(curItem, $event)"><span ng-if="curItem.iconClasses" ng-class="curItem.iconClasses" class="ra-navbar-large-icon" ng-attr-title="{{curItem.name | translate}}"></span></a> <a ng-if="params.username" ng-click="dropApi.toggle()" class="ra-overflow ra-navbar-large-username" ng-class="{\'ra-navbar-large-menu-expanded\': dropApi.isExpanded}"><span class="ra-navbar-large-icon ra-icon-user" ng-attr-title="{{params.username | translate}}"></span></a></div><a ng-if="hasHomeIcon()" ng-click="onItemClick(params.homeIcon, $event)" ng-class="params.homeIcon.iconClasses" class="ra-flex-item-static ra-navbar-large-home"></a></div></div>');
    $templateCache.put("raNavbarResponsive/raNavbarResponsive.tpl.html", '<ra-navbar-large class="ra-flex-item-static" ng-class="navbarLargeClass" config="navigationConfig"></ra-navbar-large><ra-navbar class="ra-flex-item-static" ng-class="navbarClass" config="navigationConfig"></ra-navbar>');
    $templateCache.put("raOverlaySvc/raOverlay.tpl.html", '<div class="ra-navbar-default navbar-fixed-top ra-center"><div class="ra-navbar-brand"><div class="ra-overflow">{{ title }}</div></div></div><div class="modal-body ra-flex-column"><div ng-include="templateUrl" class="ra-flex-item-dynamic" ng-class="flex ? flex : \'\'"></div></div><ra-action-bar class="navbar-fixed-bottom" config="{\'actionDefinitions\': actionDefinitions}"></ra-action-bar>');
    $templateCache.put("raRadialGauge/raRadialGauge.tpl.html", '<div class="ra-radial-gauge-container" ng-class="[{\'ra-radial-gauge-small\': size < layoutSmallSize, \'ra-radial-gauge-animation\': isAnimating}, stateClass]"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" ng-attr-viewbox="{{\'0 0 \' + size + \' \' + size}}" ng-style="{height: size + bottomExtraSpace, width: size}"><circle class="ra-radial-gauge-circle" ng-attr-cx="{{center}}" ng-attr-cy="{{center}}" ng-attr-r="{{radius}}"></circle><path class="ra-radial-gauge-path" ng-attr-d="{{arc}}"></path><text text-anchor="middle" class="ra-radial-gauge-value" ng-attr-dy="{{valueDY}}" ng-attr-transform="scale({{valueScale}}) translate({{valueX}}, {{valueY}})"><tspan>{{value ? value : 0}}</tspan><tspan class="ra-radial-gauge-suffix">{{suffix}}</tspan></text><text text-anchor="middle" class="ra-radial-gauge-label" ng-if="label.text || label.icon" ng-attr-transform="scale({{labelScale}}) translate({{labelX}}, {{labelY}})" ng-attr-dy="{{labelDY}}"><tspan class="ra-radial-gauge-icon">{{icon}}</tspan><tspan class="ra-radial-gauge-icon-space" dy="-0.2ex" dx="-0.1ex" ng-if="icon && label.text">&nbsp;</tspan><tspan class="ra-radial-gauge-label-text">{{label.text | translate}}</tspan></text></svg></div>');
    $templateCache.put("raSidebarDefaultContent/raSidebarDefaultContent.tpl.html", '<ra-sidebar config="config" class="ra-sidebar-default-content"><div class="ra-flex-item-dynamic ra-flex-column ra-side-bar-content ra-nav-content"><div class="ra-flex-item-dynamic ra-flex-column ra-scroll-y"><div class="list-group ra-list-group ra-flex-item-static ra-flex-column"><div ng-if="config.isNavigationItemsVisible" ng-repeat="items in params.navigationItems track by $index" class="ra-flex-item-static ra-flex-column"><div ng-repeat="curItem in items track by $index" class="ra-flex-item-static ra-flex-row"><a ng-click="onItemClick(curItem, $event)" class="list-group-item ra-list-group-item ra-flex-item-shrink ra-flex-row ra-flex-align-main-start ra-sidebar-hide-overflow" ng-class="curItem.cssClasses"><div class="ra-sidebar-item-icon ra-flex-item-static"><span ng-if="curItem.iconClasses" ng-class="curItem.iconClasses"></span></div><span class="ra-flex-item-shrink ra-overflow">{{curItem.name | translate}}</span> <span ng-if="curItem.badgeText !== undefined" ng-attr-id="{{curItem.id !== undefined ? \'raBadgeSidebar_\' + curItem.id : undefined}}" class="ra-flex-item-static badge ra-nav-badge" ng-class="curItem.badgeStyle ? curItem.badgeStyle : \'ra-badge-default\'">{{curItem.badgeText | translate}}</span></a></div></div></div><div ng-if="config.isNavigationItemsVisible && params.navigationItems.length > 0 && params.generalItems.length > 0" class="ra-nav-horizontal-line ra-flex-item-static"></div><div class="list-group ra-list-group ra-flex-item-static ra-flex-column"><div ng-repeat="curItem in params.generalItems track by $index" class="ra-flex-item-static ra-flex-row"><a ng-click="onItemClick(curItem, $event)" class="list-group-item ra-list-group-item ra-flex-item-shrink ra-flex-row ra-flex-align-main-start ra-sidebar-hide-overflow" ng-class="curItem.cssClasses"><div class="ra-sidebar-item-icon ra-flex-item-static"><span ng-if="curItem.iconClasses" ng-class="curItem.iconClasses"></span></div><span class="ra-flex-item-shrink ra-overflow">{{curItem.name | translate}}</span></a></div></div></div><div ng-if="params.brandingLogoClasses || params.brandingLogoUrl" class="ra-nav-horizontal-line"></div><div ng-show="params.brandingLogoClasses || params.brandingLogoUrl" class="ra-flex-item-static ra-nav-branding-logo"><a ng-click="onBrandingLogoClick()"><span ng-if="params.brandingLogoClasses" ng-class="params.brandingLogoClasses"></span> <img ng-if="params.brandingLogoUrl" ng-src="{{params.brandingLogoUrl}}"></a></div></div></ra-sidebar>');
    $templateCache.put("raSidebar/raSidebar.tpl.html", '<div class="ra-sidebar-absolute-helper"><div class="ra-sidebar-full-content ra-rightside ra-flex-column" ng-click="hideSidebar()"><nav class="navbar-default ra-navbar-default ra-flex-item-static ra-flex-row"><div class="ra-flex-item-static ra-nav-container-left"><button type="button" class="ra-toggle btn"><span class="sr-only">{{ \'RA_SIDEBAR.TOGGLE_NAVIGATION\' | translate }}</span> <span class="ra-icon-hamburger"></span></button></div><div class="ra-flex-item-dynamic ra-flex-row ra-nav-container-central ra-brand-container"><div ng-if="params.username && params.showSidebarUserIcon" class="ra-flex-item-static"><span class="ra-icon-user"></span></div><div ng-if="params.username" class="ra-flex-item-dynamic text-left ra-brand-container"><a ng-click="params.onUsernameClick()" class="ra-navbar-brand ra-sidebar-link ra-overflow" href>{{params.username | translate}}</a></div></div><div ng-if="params.username && params.onLogoutClick" class="ra-flex-item-static ra-nav-container-right"><a ng-click="params.onLogoutClick()" class="ra-sidebar-link" href>{{ \'RA_SIDEBAR.LOGOUT\' | translate }}</a></div></nav><div class="ra-flex-item-dynamic ra-scroll-y ra-flex-column" ng-transclude></div></div></div>');
    $templateCache.put("raSplitter/raSplitter.tpl.html", '<div class="ra-flex-static ra-flex-align-main-center ra-flex-align-cross-center ra-split-handler" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}"><div class="ra-split-wider-handler ra-flex-align-main-center ra-flex-align-cross-center" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical, \'ra-splitter-resize-cursor\': resizable && !collapsed1 && !collapsed2}"><div ng-if="resizable && !collapsed1 && !collapsed2" class="ra-split-hover"></div><div class="ra-flex-item-static ra-splitter-toggle" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}" ng-show="arrowBackUpVisible" ng-click="collapsed2 ? onHidePaneClick($event, false) : onHidePaneClick($event, true)"><div class="ra-flex-item-static ra-splitter-icon-wrapper ra-flex-align-main-center ra-flex-align-cross-center" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}"><div class="ra-flex-item-static" ng-class="vertical?\'ra-icon-drop-up\':\'ra-icon-back\'"></div></div></div><div class="ra-flex-item-static ra-splitter-toggle" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}" ng-show="arrowForwardDownVisible" ng-click="collapsed1 ? onHidePaneClick($event, true) : onHidePaneClick($event, false)"><div class="ra-flex-item-static ra-splitter-icon-wrapper ra-flex-align-main-center ra-flex-align-cross-center" ng-class="{\'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}"><div class="ra-flex-item-static" ng-class="vertical?\'ra-icon-drop-down\':\'ra-icon-forward\'"></div></div></div></div></div><div class="ra-flex-static ra-split-hidden-drag" ng-class="{\'ra-split-handler-drag\': dragging, \'ra-flex-column\': !vertical, \'ra-flex-row\': vertical}"></div>');
    $templateCache.put("raTabletNavbar/raTabletNavbar.tpl.html", '<div class="ra-flex-item-dynamic ra-tabletnavbar-default"><div class="ra-flex-item-static ra-flex-row"><div class="ra-flex-item-static navbar-header" ng-hide="!logopath"><a ng-href="{{logolinkadd}}" class="logo"><img class="logoheight" ng-src="{{logopath}}"></a></div><div class="ra-flex-item-dynamic ra-flex-row ra-nav-menu"><div class="nav ra-flex-item-static triangle-topright" ng-hide="!logopath"></div><div class="nav navbar-custom ra-flex-item-dynamic"><span ng-if="subtitle" class="subtitle"><span class="ra-icon-visualization"></span> {{subtitle}}</span></div>xx<ul class="menu-container nav navbar-custom ra-flex-item-static" ontouchstart><li class="menu-item" ng-repeat="item in itemsList"><a href="{{item.linkAdd}}" target="{{item.linkPopup ? \'_blank\':\'_top\'}}" ng-click="invokeDoAction($event,item)" ng-if="!item.isDropDown"><span class="{{item.nameText}}"></span></a> <span class="dropdown" ng-if="item.isDropDown"><a href class="dropdown-toggle" data-toggle="dropdown"><span class="{{item.nameText}}"></span></a><ul class="dropdown-menu pull-right"><li ng-repeat="subitem in item.subItems"><span ng-if="subitem.isLabel">{{subitem.subItemText}}</span> <a ng-href="{{subitem.linkURL}}" class="logoutmenuitem" ng-click="invokeDoAction($event,subitem)" ng-if="!subitem.isLabel"><span class="{{subitem.iconUrl}}" ng-if="subitem.iconUrl"></span> {{subitem.subItemText}}</a></li></ul></span></li></ul></div></div><div class="ra-flex-item-static ra-flex-row subnavbar" ng-show="dispath.length"><div class="dispath ra-flex-item-dynamic"><span class="dispath-item" ng-repeat="item in dispath track by $index"><a ng-href="{{item.link}}" ng-click="clickDisplayPathItem($event,$index, $last)">{{item.label}}</a> <span class="ra-icon ra-icon-forward-small" ng-if="!$last"></span></span> <span ng-class="acciconpath" class="viewmode" ng-show="acciconpath" title="{{acciconMsg}}"></span></div></div></div>');
    $templateCache.put("raToggleSwitch/raToggleSwitch.tpl.html", '<span class="ra-toggle-switch" ng-class="[{\'ra-toggle-switch-on\': !!checked, \'ra-toggle-switch-disabled\': !!config.disabled}, config.className]"><span class="ra-toggle-switch-area"><span class="ra-toggle-switch-handle"></span> <input type="checkbox" ng-checked="checked" ng-attr-name="{{config.name}}" ng-attr-id="{{config.id}}"> <span class="ra-toggle-switch-text"><span ng-if="!!checked" class="ra-toggle-switch-text-on">{{ (config.textOn !== undefined ? config.textOn : \'RA_TOGGLE_SWITCH.YES\') | translate }}</span> <span ng-if="!checked" class="ra-toggle-switch-text-off">{{ (config.textOff !== undefined ? config.textOff : \'RA_TOGGLE_SWITCH.NO\') | translate }}</span></span></span></span>');
    $templateCache.put("raToast/raToast.tpl.html", "<div ng-class=\"{'toast-bottom-position-fixed': params.moveAboveActionBar, 'ra-toast-above-actionbar': params.moveAboveActionBar, 'ra-toast-under-navbar': params.moveUnderNavbar}\"><toaster-container toaster-options=\"{{options}}\"></toaster-container></div>");
    $templateCache.put("raTree/raTree.tpl.html", '<div class="ra-tree" ra-tree-internal="model"></div>');
    $templateCache.put("raTree/raTreeInternal.tpl.html", '<div data-ng-repeat="node in model track by $index"><div class="ra-tree-node" data-ng-class="getNodeHeadStyle($index)" data-ng-click="selectNode(node, $index)"><i class="indent" data-ng-repeat="i in getIndentation()"></i> <i data-ng-class="getNodeStyle(node, $index)" data-ng-click="selectNodeHead($index, $event)"></i> <span class="iconContainer" data-ng-if="nodeIconEnabled()"><i data-ng-class="ext.iconClass" data-ng-show="ext.condition(node)" data-ng-repeat="ext in getExtension()"></i></span> <span class="ra-tree-node-label">{{node.label | translate}}</span></div><div data-ng-if="isExpanded($index)" data-ra-tree-internal="node.children" data-ra-tree-node-indent="indent" data-ra-tree-node-id="getId($index)"></div></div>');
} ]);

/* global angular */
/* global document */
/**
 * @ngdoc overview
 * @name mobile-toolkit-ra-i18n
 * @module mobile-toolkit-ra-i18n
 * @description
 * The module responsible for initialization of the i18n
 */
angular.module("mobile-toolkit-ra-i18n", [ "pascalprecht.translate" ]).constant("TOOLKIT_RELEASE", {
    TOOLKIT: "mobile-toolkit-ra.js",
    TOOLKIT_MIN: "mobile-toolkit-ra.min.js"
}).config([ "$translateProvider", "TOOLKIT_RELEASE", function($translateProvider, TOOLKIT_RELEASE) {
    "use strict";
    // Configure the translation provider to use specific translations
    var baseUrl, scripts = angular.element(document).find("script");
    // determine the base url
    angular.forEach(scripts, function(element) {
        var toolkitLibPos;
        if (!baseUrl && element.src) {
            toolkitLibPos = element.src.search(TOOLKIT_RELEASE.TOOLKIT);
            if (toolkitLibPos < 0) {
                toolkitLibPos = element.src.search(TOOLKIT_RELEASE.TOOLKIT_MIN);
            }
            baseUrl = toolkitLibPos > 0 ? element.src.substr(0, toolkitLibPos) : baseUrl;
        }
    });
    $translateProvider.useStaticFilesLoader({
        files: [ {
            prefix: baseUrl + "locale/locale-",
            suffix: ".json"
        } ]
    }).fallbackLanguage("en").registerAvailableLanguageKeys([ "en" ], {
        "en-*": "en"
    }).preferredLanguage("en").useSanitizeValueStrategy("escaped");
} ]);

// jsHint Global variables
/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raActionBar
 * @scope
 * @module mobile-toolkit-ra
 * @restrict AE
 * @param {object} [config] Configuration object for action bar with one property:
 *
 * - **[actionDefinitions]** - `{array}` The array of action items objects with following mandatory properties:
 *      - **`actionName`**: used to construct the ID of the &lt;a&gt; element
 *      - **`iconClass`**: css class name that defines the icon to display.
 *      - **`doAction()`**: function which implements the action behavior.
 *
 *      Optional properties:
 *
 *      - **`tooltipText`** : the text visible on mouse hover
 *      - **`displayIndex`**: numeric display index for action icon within action group.
 *      - **`actionParams`**: an object containing parameters for the `doAction()` function.
 *      - **`actionGroup`**: defines which action bar area will host this action.
 *          Valid values are: `"left"`, `"right"`, `"center"`. If this property is undefined
 *          or null, the action icon will be placed in the **left action group** (see template).
 *      - **`badgeText`**: if defined, shows a bootstrap badge with the supplied `badgeText` next to the action.
 *      - **`badgeStyle`**: the css style to be applied to the badge.
 *          Adopter can use predefined `"ra-badge-default"` (red) or any user-defined css style. If this
 *          property is undefined or null, the badge style will be "ra-badge-default".
 *      - **`isDisabled`**: if set to **`true`**, the action will be disabled. A disabled action uses the
 *          `ra-action-item-disabled` CSS class.
 *
 *      <div class="alert alert-info" role="alert">
 *         **Note:** Internally the tooltipText as well as the badgeText use _translate_ filter,
 *         which allows to automatically translate the content within the view layer.
 *         In order to translate the content, use the translation id as a text parameter.
 *         More detailed information about angular-translate can be found in the
 *         [Internationalization and Localization](##/nonapi/i18n.md) document.
 *      </div>
 *
 *
 * @description
 * The directive is responsible for rendering the action bar.
 * Style of the component is based on Bootstrap's navbar.
 * The action bar component expects to receive a collection of action definitions
 * through "config.actionDefinitions" attribute.
 * The action icons can be grouped into three areas: aligned left, right and centered.
 *
 * If no action definitions are provided, the directive simply does not render the
 * bottom bar (see template).
 *
 * The action bar widget internally uses Flexbox to organize groups of icons,
 * however it is layout independent, and may be placed anywhere on the page using additional external styles.
 *
  ###Sample action bar configuration (e.g. in controller):###
  <pre>
  var actionBarConfig = {
           actionDefinitions: [
           {
               tooltipText : "Tooltip 1",
               iconClass: "ra-icon-favorite",
               actionName: "ActionOne",
               actionParams:
                   {
                       param1: "value 1",
                       param2: "value 2",
                       param3: "value 3"
                   },
               doAction: function () {
                   // implement your logic here
               }
           },
           {
               tooltipText: "Tooltip 2",
               iconClass: "ra-icon-edit",
               actionName: "ActionTwo",
               doAction: function () {
                   // implement your logic here
               }
           }]
       }
  ];
  </pre>

  @example
  <example module="example1">
   <file name="style.css">
       .action-bar-container {
           height: 200px;
       }
   </file>
   <file name="index.html">
       <div class="ra-flex-column action-bar-container" ng-controller="raActionBarCtrl">
           <div class="ra-flex-item-static">
               <p>Action Bar Result:</p>
               <div class="alert alert-info" role="alert">{{lastClick}}</div>
           </div>
           <div class="ra-flex-item-dynamic">
               <!-- Empty space to push the action bar to the bottom -->
           </div>
           <ra-action-bar class="ra-flex-item-static" config="actionBarConfig"></ra-action-bar>
       </div>
   </file>
   <file name="script.js">
      angular.module('example1', ['mobile-toolkit-ra']);
      angular.module('example1')
      .controller('raActionBarCtrl', ['$scope',
          function ($scope) {
              $scope.lastClick = undefined;
              $scope.actionBarConfig = {
                   actionDefinitions : [
                       {
                           tooltipText : "OK",
                           iconClass: "ra-icon-commit",
                           actionName: "OK",
                           doAction: function () {
                               $scope.lastClick = 'OK';
                           }
                       },
                       {
                           tooltipText : "Cancel",
                           iconClass: "ra-icon-cancel",
                           actionName: "Cancel",
                           doAction: function () {
                               $scope.lastClick = 'Cancel';
                           }
                       },
                       {
                           tooltipText : "Delete",
                           iconClass: "ra-icon-delete",
                           actionName: "Delete",
                           actionGroup: "right",
                           badgeText: 5,
                           doAction: function () {
                               $scope.lastClick = 'Delete';
                           }
                       }
                   ]
              };
      }]);
   </file>
  </example>
 */
angular.module("mobile-toolkit-ra").directive("raActionBar", [ "$templateCache", "raErrorHandlerSvc", "LAYOUT_EVENTS", "$translate", "raTranslateHandlerSvc", function($templateCache, raErrorHandlerSvc, LAYOUT_EVENTS, $translate, raTranslateHandlerSvc) {
    "use strict";
    function link(scope) {
        /**
            * Iterates through scope.actionItems collection and checks
            * for required properties: "actionName", "iconClass" and the
            * "doAction" function, as well as checks for duplicated action
            * names. Should any duplicated action names occur, only the first
            * item found is added to the raActionBar.
            */
        function checkActionItems() {
            var i, errorMsg, updateTranslation = function() {
                errorMsg = $translate.instant("RA_ACTIONBAR.ERROR_TITLE");
            };
            updateTranslation();
            raTranslateHandlerSvc.onTranslate(function() {
                updateTranslation();
            });
            /**
                * Checks if "actionName", "iconClass", "doAction" are defined
                * in given action item.
                * @param {object} actionItem the action item object to check
                * @returns {boolean} false if any of the required properties
                * are missing and propagates RAError through raErrorHandlerSvc;
                * otherwise true
                */
            function checkRequiredProperties(actionItem) {
                var result = true;
                if (!actionItem.hasOwnProperty("actionName")) {
                    raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError(errorMsg, $translate.instant("RA_ACTIONBAR.PROPERTY_NOT_DEFINED", {
                        property: "actionName",
                        index: i
                    })), undefined, "$log");
                    result = false;
                }
                if (!actionItem.hasOwnProperty("iconClass")) {
                    raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError(errorMsg, $translate.instant("RA_ACTIONBAR.PROPERTY_NOT_DEFINED", {
                        property: "iconClass",
                        index: i
                    })), undefined, "$log");
                    result = false;
                }
                if (!actionItem.hasOwnProperty("doAction")) {
                    raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError(errorMsg, $translate.instant("RA_ACTIONBAR.PROPERTY_NOT_DEFINED", {
                        property: "doAction",
                        index: i
                    })), undefined, "$log");
                    result = false;
                }
                return result;
            }
            /**
                * Iterates through scope.actionItems to check if there are any
                * duplicated action names. If any elements with duplicated
                * action names are found they will be set to null.
                * @param {object} referenceActionItem the reference item to check for
                * duplicated action names
                */
            function checkForDuplicatedActionNames(referenceActionItem) {
                var j;
                var currentActionItem;
                for (j = 0; j < scope.actionItems.length; j++) {
                    currentActionItem = scope.actionItems[j];
                    // don't compare elements with the same array index,
                    // as well as skip elements that may have been
                    // previously nulled out
                    if (!currentActionItem || currentActionItem === referenceActionItem) {
                        continue;
                    }
                    if (referenceActionItem.actionName === currentActionItem.actionName) {
                        // null out the problematic item, so it won't be
                        // added to the action bar
                        scope.actionItems[j] = null;
                        raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError(errorMsg, $translate.instant("RA_ACTIONBAR.ACTION_NAME_DUPLICATED", {
                            actionName: referenceActionItem.actionName,
                            index: j
                        }), undefined, "$log"));
                    }
                }
            }
            if (scope.actionItems) {
                for (i = 0; i < scope.actionItems.length; i++) {
                    if (!scope.actionItems[i]) {
                        continue;
                    }
                    if (checkRequiredProperties(scope.actionItems[i])) {
                        checkForDuplicatedActionNames(scope.actionItems[i]);
                    } else {
                        // null out the problematic item, so it won't be
                        // added to the action bar
                        scope.actionItems[i] = null;
                    }
                }
            }
        }
        scope.$watchCollection("config", function(newConfig) {
            scope.actionItems = newConfig && newConfig.actionDefinitions ? newConfig.actionDefinitions : [];
            checkActionItems();
        });
        scope.actionItems = [];
        scope.enableActions = true;
        scope.invokeDoAction = function(actionItem) {
            if (scope.enableActions && !actionItem.isDisabled) {
                actionItem.doAction();
            }
        };
        scope.$on(LAYOUT_EVENTS.ACTIONBAR_ENABLE_ACTIONS, function(event, enableActions) {
            scope.enableActions = enableActions;
        });
    }
    return {
        restrict: "AE",
        scope: {
            config: "="
        },
        template: $templateCache.get("raActionBar/raActionBar.tpl.html"),
        link: link
    };
} ]);

// jsHint Global variables
/* global angular */
/**
 * @ngdoc filter
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.filter:toActionGroup
 *
 * @param {array} items The input collection of action item objects to filter.
 * @param {object} params The object that contains filter parameters, for example:
 * <pre>
 *     {{ items_array_to_filter | toActionGroup: { includeUndefined: false, actionGroup: 'center' } }}
 * </pre>
 * The result of this expression will contain only the objects whose
 * **`actionGroup`** property is equal to **`"center"`**.
 * @returns {array} A new array of filtered items.
 *
 * @description
 * This filter is used by the
 * {@link mobile-toolkit-ra.directive:raActionBar raActionBar} directive to
 * filter the input elements based on their **`actionGroup`** property. The filter
 * can be configured by passing a **`params`** object with the following members:
 *
 * - **`group`**: (string) the name of the action group against which
 * **`actionItem.actionGroup`** will be tested. If names match (case sensitive),
 * the item will be included in result.
 * Supported group names are `"left"`, `"right"`, `"center"`.
 *
 * - **`includeUndefined`**: (boolean) if set to **`true`**, action items that
 * don't define **`actionGroup`** member will be included in result.
 *
 * @example
 <example module="mobile-toolkit-ra">
    <file name="script.js">
        angular.module('mobile-toolkit-ra')
        .controller('ctrl1', ['$scope', function ($scope) {
            $scope.actionItems = [
                {
                    actionName: 'action1',
                    actionGroup: 'center'
                },
                {
                    actionName: 'action2'
                },
                {
                    actionName: 'action3',
                    actionGroup: 'right'
                }
            ];
        }]);
    </file>
    <file name="index.html">
        <div ng-controller="ctrl1">
            <div>
                Items in left group (includes items with undefined <code>actionGroup</code> property):
                <ul>
                    <li ng-repeat="item in actionItems | toActionGroup: { group: 'left', includeUndefined: true}">
                        <strong>{{ item.actionName }}</strong>
                    </li>
                </ul>
            </div>
            <div>
                Items in right group:
                <ul>
                    <li ng-repeat="item in actionItems | toActionGroup: { group: 'right' }">
                        <strong>{{ item.actionName }}</strong>
                    </li>
                </ul>
            </div>
            <div>
                Items in center group:
                <ul>
                    <li ng-repeat="item in actionItems | toActionGroup: { group: 'center' }">
                        <strong>{{ item.actionName }}</strong>
                    </li>
                </ul>
            </div>
        </div>
    </file>

 </example>
 */
angular.module("mobile-toolkit-ra").filter("toActionGroup", function() {
    "use strict";
    return function(items, params) {
        var filteredItems = [];
        var i;
        var item;
        if (items) {
            for (i = 0; i < items.length; i++) {
                item = items[i];
                // skip items that were explicitly nulled-out
                if (item === null) {
                    continue;
                }
                if (!item.actionGroup) {
                    if (params.includeUndefined === true) {
                        filteredItems.push(item);
                    }
                } else if (item.actionGroup === params.group) {
                    filteredItems.push(item);
                }
            }
        }
        return filteredItems;
    };
});

// jsHint Global variables
/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raActionSheetSvc
 * @description The raActionSheetSvc is a specific modal dialog component containing a sheet with a set of buttons
 * placed one on another. Each button is assigned to one action. Additionally, there is the `Cancel` button,
 * which is always attached to the bottom of the sheet. The action sheet slides up from the bottom of the page.
 * It contains a semitransparent full screen backdrop isolating other components.
 * The action sheet disappears when you click any button, click the backdrop, or press the `Esc` key.
 * It uses the {@link mobile-toolkit-ra.service:raOverlaySvc _raOverlaySvc_} service,
 * so when opened, it can be controlled in the same way as a standard `raOverlaySvc` based modal dialog.
 * However, it has limited initial configuration capabilities.
 *
 * **Responsiveness based on screen width**:
 * - Smaller devices (up to 767 pixels) - The action sheet buttons spread to the whole screen's width.
 * - Bigger devices (above 767 pixels) - The action sheet buttons are centered in the middle of the screen and
 * have the left and the right margins.
 *
 @example

 - An action sheet example usage with 3 actions defined.
 <example module="exampleApp">
 <file name="index.html">
 <div class="ra-flex-column" style="height:300px">
     <h3>raActionSheet Test Page</h3>
     <div ng-controller="actionSheetTestPageCtrl" class="ra-flex-item-dynamic ra-flex-column" >

         <div class="ra-flex-item-static panel panel-default">
             <div class="panel-body">
                <a id="theOpenButton" class="btn-primary btn-lg" role="button" ng-click="openActionSheet()">
                    Open ActionSheet
                </a>
             </div>
         </div>

         <div class="ra-flex-item-dynamic panel panel-default">
             <div id="raCurrentMessagePanel" class="panel-body">
                {{actionMessage}}
             </div>
         </div>
     </div>
 </div>
 </file>

 <file name="script.js">
 var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']).
 controller('actionSheetTestPageCtrl',['$scope', 'raActionSheetSvc',
    function ($scope, raActionSheetSvc) {
        'use strict';
        $scope.actionMessage = '';

        var actions = [
            {
                label: "Incident",
                value: "INCIDENT"
            },
            {
                label: "Photo Library",
                value: "PHOTO_LIBRARY"
            },
            {
                label: "Take Photo",
                value: "CAMERA"
            }
        ];

        $scope.openActionSheet = function () {
            raActionSheetSvc.open({actions: actions})
                    .result.then(function success(actionValue) {
                        $scope.actionMessage = 'resolved with: ' + actionValue;
                    }, function failure(reason) {
                        $scope.actionMessage = 'rejected with: ' + reason;
                    });
        };
    }
 ]);
 </file>
 </example>
 */
angular.module("mobile-toolkit-ra").factory("raActionSheetSvc", [ "raOverlaySvc", function(raOverlaySvc) {
    "use strict";
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raActionSheetSvc#open
         * @methodOf mobile-toolkit-ra.service:raActionSheetSvc
         * @param {object} actionsConfig An object with the `actions` parameter containing an array of actions.
         * Each action should contains the following parameters:
         * - **label** - `{string}` - The text visible on the button of the action sheet.
         * - **action** - `{string}` - The action ID which will be returned by the _result_ promise
         * through the success channel. See the **Returns** description as well as the provided example for more
         * information.
         * @returns {object} - An object working in the same way as the object returned by the `raOverlaySvc's`
         * {@link mobile-toolkit-ra.service:raOverlaySvc#methods_open_returns _open_} method, with the addition
         * of the _result_ promise resolved with the **action** ID when choosing one of provided actions,
         * and rejected with the "CANCEL" string when choosing the Cancel button.
         * See the provided example for details.
         * @description The method makes the the action sheet modal dialog slide up with a set of actions provided by
         * the `actionsConfig.actions` parameter.
         */
    var open = function(actionsConfig) {
        var overlayConfig = {
            keyboard: true,
            animation: true,
            backdrop: true,
            controller: "raActionSheetCtrl",
            templateUrl: "raActionSheet/raActionSheet.tpl.html",
            windowClass: "ra-action-sheet"
        };
        return raOverlaySvc.openWithOptions(overlayConfig, actionsConfig);
    };
    return {
        open: open
    };
} ]).controller("raActionSheetCtrl", [ "$scope", "config", function($scope, config) {
    "use strict";
    $scope.actions = config.actions;
    $scope.doAction = function(selectedValue) {
        $scope.$close(selectedValue);
    };
    $scope.cancel = function() {
        $scope.$dismiss("CANCEL");
    };
} ]);

// jsHint Global variables
/* global angular */
//disable jshint line length for these api comments, some are required to be long for formatting
//reenabled after these comments.
/* jshint -W101 */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raBreadcrumb
 * @module mobile-toolkit-ra
 * @restrict A
 * @scope
 *
 * @param {Object=} config
 * An object providing initial configuration for this component. It can contain a subset of properties described on the
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc} page. Note that some of the properties can be
 * shared with other navigation components if present in the same group.
 *
 * The following properties affect this directive:
 * - **`[groupId]`**
 * - **`[breadcrumbItems]`**
 * - **`[isBreadcrumbVisible]`**
 * - **`[hasBreadcrumbReverseOrder]`**
 *
 * The `config` object provides only initial values that control the directive's behavior and appearance.
 * If there is a need to alter them in some way at runtime, it should be done using
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc's methods}.
 *
 * @description
 * The directive is responsible for showing and hiding the horizontal container which is expanded
 * from the top to the bottom. The `raBreadcrumb` is used for navigation purposes
 * so it should contain a trail for the user to be able to go back to previous locations.
 *
 * The component internally uses logic provided by the {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc}
 * and can be used for further control of the directive at runtime.
 *
 * The **raBreadcrumb's** visibility can be controlled either manually using the
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc.setConfig()} method, or can be handled by associated
 * widgets sharing the same group ID (the breadcrumb is opened by the
 * {@link mobile-toolkit-ra.directive:raNavbar raNavbar}'s chevron or closed automatically when the
 * {@link mobile-toolkit-ra.directive:raSidebar raSidebar} is displayed).
 *
 * # Grouping navigation components together
 *
 * The **raBreadcrumb**,
 * {@link mobile-toolkit-ra.directive:raHorizontalBreadcrumb raHorizontalBreadcrumb},
 * {@link mobile-toolkit-ra.directive:raSidebar raSidebar} /
 * {@link mobile-toolkit-ra.directive:raSidebarDefaultContent raSidebarDefaultContent},
 * {@link mobile-toolkit-ra.directive:raNavbar raNavbar} and
 * {@link mobile-toolkit-ra.directive:raNavbarLarge raNavbarLarge} can be easily coupled together
 * using a shared group ID.
 * Assigning these widgets to one common group ensures that they interact properly.
 * For example the *raBreadcrumb* and the *raHorizontalBreadcrumb* can share the same list of items, and one of them
 * can be displayed depending on the screen size (using CSS).
 * Grouping also relieves the user from writing additional code that would handle standard interactions between
 * the components, such as "hide the breadcrumb when the sidebar is open", etc. These interactions are provided
 * out-of-the-box if the components use a shared group ID.
 * By default, these widgets are assigned to `RA_NAV_GROUP.DEFAULT_GROUP_ID` if
 * the `config` object is not provided, or the `config.groupId` property is not set.
 *
 * <div class="alert alert-info" role="alert">
 * **Remember**: when created, the `raBreadcrumb`,
 * {@link mobile-toolkit-ra.directive:raHorizontalBreadcrumb raHorizontalBreadcrumb},
 * {@link mobile-toolkit-ra.directive:raSidebar raSidebar} /
 * {@link mobile-toolkit-ra.directive:raSidebarDefaultContent raSidebarDefaultContent},
 * {@link mobile-toolkit-ra.directive:raNavbar raNavbar} and
 * {@link mobile-toolkit-ra.directive:raNavbarLarge raNavbarLarge}
 * are assigned to the default **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group if no custom group ID is set.
 * </div>
 *
 * # Setting the raBreadcrumb's content
 *
 * The widget is capable of displaying a list of items that are stacked vertically. In order to populate a breadcrumb
 * widget with items, the {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc.setConfig()}
 * method must be called.
 *
 * @example
 * The following is a sample usage of  breadcrumb using flexbox. The first breadcrumb item has its `onItemClick`
 * property defined. The following four use the `url` property. The flag `hasBreadcrumbReverseOrder` is set to true
 * to display the items in reverse order.
 *
 * The breadcrumb's visibility is toggled by clicking the
 * **Show/hide breadcrumb** button.
     <example module="exampleApp">
         <file name="style.css">
             #ra-main-content {
                 height: 350px;
                 width:  100%;
             }

             #ra-main-content > div {
                 height: 100%;
                 width:  100%;
             }
         </file>
         <file name="index.html">
             <div ng-controller="MyCtrl">
                 <button ng-click="toggleBreadcrumbVisibility()">Show/hide breadcrumb</button>
                 <div id="ra-main-content">
                     <div class="ra-flex-column">
                         <div class="ra-flex-item-dynamic ra-flex-column
                                     ra-breadcrumb-relative-helper">
                             <div ra-breadcrumb config="breadcrumbConfig"></div>
                         </div>
                     </div>
                 </div>
             </div>
         </file>
         <file name="script.js">
             var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);

             myModule.controller('MyCtrl', ['$scope', 'raNavigationSvc',
                 function ($scope, raNavigationSvc) {
                     "use strict";
                     var stateObj,
                         isBreadcrumbVisible = true;

                     $scope.breadcrumbConfig = {
                         groupId: 'theBreadcrumbID',
                         isBreadcrumbVisible: isBreadcrumbVisible,
                         hasBreadcrumbReverseOrder: true,
                         breadcrumbItems: [
                             { name: "item 1", onItemClick: function() { alert("Item 1 clicked!"); } },
                             { name: "item 2", url: "#/raBreadcrumb/2/" },
                             { name: "item 3", url: "#/raBreadcrumb/3/" },
                             { name: "item 4", url: "#/raBreadcrumb/4/" },
                             { name: "item 5", url: "#/raBreadcrumb/5/" }
                         ]
                     };

                     $scope.toggleBreadcrumbVisibility = function () {
                         isBreadcrumbVisible = !isBreadcrumbVisible;
                         raNavigationSvc.setConfig({
                                isBreadcrumbVisible: isBreadcrumbVisible
                            }, $scope.breadcrumbConfig.groupId);
                     };

                     // keeps isBreadcrumbVisible local variable in sync with breadcrumb's state
                     stateObj = raNavigationSvc.register($scope.breadcrumbConfig);
                     stateObj.promise.then(null, null, function onNotify(newParams) {
                         isBreadcrumbVisible = newParams.isBreadcrumbVisible;
                     });

                     $scope.$on('$destroy',function () {
                        stateObj.unregister();
                     });
                 }]);
        </file>
     </example>
 */
/* jshint +W101 */
angular.module("mobile-toolkit-ra").directive("raBreadcrumb", [ "$q", "$animate", "$templateCache", "raNavigationSvc", function($q, $animate, $templateCache, raNavigationSvc) {
    "use strict";
    return {
        restrict: "A",
        scope: {
            config: "=?"
        },
        template: $templateCache.get("raBreadcrumb/raBreadcrumb.tpl.html"),
        link: function(scope, element) {
            var animatedElement = element.findElement(".ra-breadcrumb"), absHelperElem = element.findElement(".ra-breadcrumb-absolute-helper"), config = scope.config || {}, currentAnimatePromise, groupId = config.groupId, isVisible = false;
            /**
                     * Helper function that shows or hides breadcrumb.
                     * @param {boolean} doShow If set to true then shows breadcrumb otherwise will hide.
                     */
            function showHideBreadcrumb(doShow) {
                if (currentAnimatePromise !== undefined) {
                    $animate.cancel(currentAnimatePromise);
                    currentAnimatePromise = undefined;
                }
                absHelperElem.addClass("show-breadcrumb");
                if (doShow) {
                    currentAnimatePromise = $animate.addClass(animatedElement, "ra-breadcrumb-anim");
                    currentAnimatePromise.then(function done() {
                        currentAnimatePromise = undefined;
                    });
                } else {
                    currentAnimatePromise = $animate.removeClass(animatedElement, "ra-breadcrumb-anim");
                    currentAnimatePromise.then(function done() {
                        currentAnimatePromise = undefined;
                        if (!isVisible) {
                            absHelperElem.removeClass("show-breadcrumb");
                        }
                    });
                }
            }
            scope.hideBreadcrumb = function() {
                raNavigationSvc.setConfig({
                    isBreadcrumbVisible: false
                }, groupId);
            };
            scope.onItemClick = raNavigationSvc.onItemClick;
            scope.$on("$destroy", function() {
                scope.stateObj.unregister();
            });
            // If not provided the value of isBreadcrumbVisible
            // sidebar should be not visible by default
            config.isBreadcrumbVisible = !!config.isBreadcrumbVisible;
            // Provides the configuration of the breadcrumb to the raNavigationSvc service
            scope.stateObj = raNavigationSvc.register(config);
            scope.params = scope.stateObj.stateParams;
            scope.stateObj.promise.then(null, null, function(currentParams) {
                var stateBreadcrumbVisibility = currentParams.isBreadcrumbVisible;
                if (isVisible !== stateBreadcrumbVisibility) {
                    isVisible = stateBreadcrumbVisibility;
                    showHideBreadcrumb(isVisible);
                }
            });
        }
    };
} ]);

/* Rockwell Automation 2014 */
/* global Highcharts */
/* global angular */
angular.module("mobile-toolkit-ra").constant("RA_CHART_CONST", {
    /**
     * @ngdoc property
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra:RA_CHART_CONST#supportedTypes
     * @propertyOf mobile-toolkit-ra:RA_CHART_CONST
     * @description The allowed series type
     *
     * | Property | Value     | Details                                             |
     * |----------|-----------|-----------------------------------------------------|
     * | STRING   | 'string'  | String data type                                    |
     * | NUMBER   | 'number'  | Number data type                                    |
     * | BOOLEAN  | 'boolean' | Boolean data type                                   |
     * | NODATA   | 'nodata'  | Series has no data and the data type is not defined |
     */
    supportedTypes: {
        STRING: "string",
        NUMBER: "number",
        BOOLEAN: "boolean",
        NODATA: "nodata"
    },
    /**
     * @ngdoc property
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra:RA_CHART_CONST#extremeLevels
     * @propertyOf mobile-toolkit-ra:RA_CHART_CONST
     * @description The allowed extremes levels
     *
     * | Property             | Value | Details                                                        |
     * |----------------------|-------|----------------------------------------------------------------|
     * | NONE                 |    -1 | Extremes are not displayed                                     |
     * | LINES_ONLY           |     0 | Shows only the lines                                           |
     * | LINES_AND_VALUES     |     1 | Shows extremes lines and also min and max values               |
     * | COMPLETE_DESCRIPTION |     2 | Shows extremes lines, min max values, name of series and units |
     */
    extremeLevels: {
        NONE: -1,
        LINES_ONLY: 0,
        LINES_AND_VALUES: 1,
        COMPLETE_DESCRIPTION: 2
    }
}).directive("raChart", [ "$filter", "$interpolate", "$q", "$window", "raOpcQualitySvc", "raErrorHandlerSvc", "RA_CHART_CONST", "$translate", "raTranslateHandlerSvc", function($filter, $interpolate, $q, $window, raOpcQualitySvc, raErrorHandlerSvc, RA_CHART_CONST, $translate, raTranslateHandlerSvc) {
    "use strict";
    var dateFilter = $filter("date"), messages, date = new Date(), TOOLTIP_DATE_FORMAT = "yyyy/M/d HH:mm:ss", EXTREMES_PLOT_LINES = {
        add: 0,
        remove: 1
    }, DEFAULT_BOOLEAN_MESSAGES = {
        trueMessage: "True",
        falseMessage: "False"
    }, DEFAULT_CHART = {
        raChart: {
            extremes: {
                level: RA_CHART_CONST.extremeLevels.NONE
            }
        },
        chart: {
            type: "line",
            animation: false,
            spacingLeft: 0,
            spacingRight: 15,
            zoomType: "x"
        },
        legend: {
            enabled: false
        },
        title: {
            text: ""
        },
        yAxis: {
            tickInterval: 20,
            min: 0,
            max: 100,
            title: " "
        },
        xAxis: {
            title: {
                text: function() {
                    return "Time (GMT" + dateFilter(new Date(), "Z") + ")";
                }(),
                offset: 30
            },
            type: "datetime",
            tickInterval: null,
            tickPixelInterval: 100,
            gridLineWidth: 1,
            gridLineColor: "#E0E0E0",
            events: {}
        },
        series: [ {
            data: [ [ date.valueOf() - 6e4, null ], [ date.valueOf(), null ] ],
            raOverride: {
                quality: {}
            }
        } ],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    }, wasHighChartsInitialized = false;
    /**
         * @description Update translation strings
         */
    function updateTranslation() {
        messages = {
            loadingMessage: $translate.instant("RA_CHART.LOADING"),
            operationCancelled: $translate.instant("RA_CHART.OPERATION_CANCELLED")
        };
    }
    updateTranslation();
    raTranslateHandlerSvc.onTranslate(function() {
        updateTranslation();
    });
    /**
         * @description Create the Highchart.Chart instance out of appropriate
         * configuration
         * @param {Object} scope raChart scope object
         */
    function createChart(scope) {
        var objectType;
        if (!$window.Highcharts) {
            throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.HIGHCHART_OR_HIGHSTOCK_LIBRARY_NOT_PRESENT"));
        }
        if (!wasHighChartsInitialized) {
            wasHighChartsInitialized = true;
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
        }
        initYAxisFormatter(scope);
        //By default raChart.extremes.enableExtensions is set to TRUE
        if (getConfigOption(scope.configuration, "raChart.extremes.enableExtensions", true)) {
            initExtremesFeature(scope, getForExtremesLegendItemClickFn(scope));
        }
        //By default raChart.tooltip.enableExtensions is set to TRUE
        if (getConfigOption(scope.configuration, "raChart.tooltip.enableExtensions", true)) {
            initTooltipFeature(scope, getTooltipFormatterFn());
        }
        //By default raChart.legend.enableExtensions is set to TRUE
        if (getConfigOption(scope.configuration, "raChart.legend.enableExtensions", true)) {
            initLegendFeature(scope, getForYAxisLegendItemClickFn(scope));
        }
        // By default raChart.zoom.enableExtensions is set to true
        if (getConfigOption(scope.configuration, "raChart.zoom.enableExtensions", true)) {
            initZoomFeature(scope, getZoomFn(scope));
        } else if (/^[xy]+$/.test(getConfigOption(scope.configuration, "chart.zoomType", ""))) {
            // Even when the raChart.zoom.enableExtensions is disabled
            // is required also updating extremes so we need to execute function initZoomFeature
            // without getZoomFn callback in order to handle updateExtremes method during
            // zooming or resetting zoom
            initZoomFeature(scope, null);
        }
        scope.configuration.chart.renderTo = scope.container;
        objectType = getConfigOption(scope.configuration, "raChart.coreObjectType", "highchart").toLowerCase();
        if (objectType === "highstock") {
            if (Highcharts.StockChart) {
                scope.component = new Highcharts.StockChart(scope.configuration);
                scope.component.userOptions.isHighStock = true;
            } else {
                throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.HIGHSTOCK_LIBRARY_NOT_PRESENT"));
            }
        } else {
            scope.component = new Highcharts.Chart(scope.configuration);
        }
        updateExtremes(scope.component);
    }
    /**
         * @description Returns the value of given config option or default value.
         * @param {Object} config Object that contains options.
         * @param {String} optionPath String with the full path to the given option, for example:
         * "raChart.tooltip.enableExtensions"
         * @param {*} defaultValue Defines default value that will be returned if a given option
         * does not exist or the option is undefined or null.
         * @returns {*} Returns value of given or default in case if searched option does not exist
         * or is undefined or null.
         */
    function getConfigOption(config, optionPath, defaultValue) {
        var currentOptionPath = optionPath, retValue = defaultValue, cutPos, propName;
        if (!config || optionPath === undefined || optionPath === null) {
            return defaultValue;
        }
        cutPos = currentOptionPath.indexOf(".");
        if (cutPos < 0) {
            propName = currentOptionPath;
            retValue = config.hasOwnProperty(propName) ? config[propName] : retValue;
        } else {
            propName = currentOptionPath.substr(0, cutPos);
            if (config.hasOwnProperty(propName)) {
                currentOptionPath = currentOptionPath.substr(cutPos + 1);
                retValue = getConfigOption(config[propName], currentOptionPath, defaultValue);
            }
        }
        return retValue;
    }
    /**
         * @description Decorates `legendItemClick` callback function in
         * `config.plotOptions.series.events`. This callback is used by Highcharts when
         * the legend item is clicked.
         * @param {Object} scope Scope that contains main configuration object
         * @param {Function} callbackFn Callback function to support legendItemClick event
         */
    function decorateLegendItemClick(scope, callbackFn) {
        var decoratedFn = callbackFn, currentLegendItemClick;
        if (!scope || !scope.configuration) {
            return;
        }
        if (!scope.configuration.plotOptions) {
            scope.configuration.plotOptions = {};
        }
        if (!scope.configuration.plotOptions.series) {
            scope.configuration.plotOptions.series = {};
        }
        if (!scope.configuration.plotOptions.series.events) {
            scope.configuration.plotOptions.series.events = {};
        }
        // Decorating existing callback function or assigning the given
        // new callback. The main assumption is that the config object is always
        // copied, and thanks to this it is separated from the previous instance of
        // configuration.
        if (angular.isFunction(callbackFn)) {
            currentLegendItemClick = scope.configuration.plotOptions.series.events.legendItemClick;
            if (angular.isFunction(currentLegendItemClick)) {
                decoratedFn = function() {
                    var retValue = currentLegendItemClick.apply(this, arguments);
                    if (retValue !== false) {
                        callbackFn.apply(this, arguments);
                    }
                    return retValue;
                };
            }
            scope.configuration.plotOptions.series.events.legendItemClick = decoratedFn;
        }
    }
    /**
         * @description Initialize extremes feature that allows to display
         * extremes depending on the _level_ option.
         * @param {Object} scope Scope that contains main configuration object
         * @param {Function} callbackFn A callback function that is responsible
         * for showing and hiding the extremes plot lines and labels. This callback
         * will be assigned to the legendItemClick event of Highcharts.
         */
    function initExtremesFeature(scope, callbackFn) {
        if (!scope || !scope.configuration) {
            return;
        }
        if (!scope.configuration.raChart) {
            scope.configuration.raChart = {};
        }
        if (!scope.configuration.raChart.extremes) {
            scope.configuration.raChart.extremes = {};
        }
        if (!scope.configuration.raChart.extremes.enableExtensions) {
            scope.configuration.raChart.extremes.enableExtensions = true;
        }
        if (angular.isFunction(callbackFn)) {
            // Decorating existing callback function or assigning the given
            // new callback. The main assumption is that the config object is always
            // copied, and thanks to this it is separated from the previous instance of
            // configuration.
            decorateLegendItemClick(scope, callbackFn);
        }
    }
    /**
         * @description Initialize extended behavior of legend item click
         * @param {Object} scope Scope that contains main configuration object
         * @param {Function} callbackFn A callback function that is responsible
         * for showing and hiding Y axis that is connected the legend item (series). This callback
         * will be assigned to the legendItemClick event of Highcharts.
         */
    function initLegendFeature(scope, callbackFn) {
        if (!scope || !scope.configuration) {
            return;
        }
        if (angular.isFunction(callbackFn)) {
            // Decorating existing callback function or assigning the given
            // new callback. The main assumption is that the config object is always
            // copied, and thanks to this it is separated from the previous instance of
            // configuration.
            decorateLegendItemClick(scope, callbackFn);
        }
    }
    /**
         * @description Initialize extended tooltip.
         * @param {Object} scope Scope that contains main configuration object
         * @param {Function} callbackFn Callback function to support extensions of tooltip
         */
    function initTooltipFeature(scope, callbackFn) {
        if (!scope || !scope.configuration) {
            return;
        }
        if (!scope.configuration.tooltip) {
            scope.configuration.tooltip = {};
        }
        // Overriding the tooltip formatter
        if (angular.isFunction(callbackFn)) {
            scope.configuration.tooltip.useHTML = true;
            scope.configuration.tooltip.formatter = callbackFn;
        }
    }
    /**
         * @description Initialize extended zoom functionality
         * @param scope {Object} scope Scope that contains main configuration object
         * @param callbackFn {Function} Callback function to support
         *        afterSetExtremes event
         */
    function initZoomFeature(scope, callbackFn) {
        var afterSetExtremes, decoratedFn, setExtremesFn, currentSetExtremes, currentAfterSetExtremes;
        if (!scope || !scope.configuration) {
            return;
        }
        if (!scope.configuration.xAxis) {
            scope.configuration.xAxis = {
                events: {}
            };
        }
        if (!scope.configuration.xAxis.events) {
            scope.configuration.xAxis.events = {};
        }
        if (!scope.configuration.chart.zoomType) {
            scope.configuration.chart.zoomType = "x";
        }
        // Decorating existing callback function or assigning callback.
        // The callback is responsible for restoring the the data that
        // was remembered before zooming process started.
        setExtremesFn = function(event) {
            // Reset data to unzoomed stage.
            if (scope.zoom && event && (!event.max || !event.min)) {
                scope.zoom.shouldBeReset = true;
            }
        };
        decoratedFn = setExtremesFn;
        currentSetExtremes = scope.configuration.xAxis.events.setExtremes;
        if (angular.isFunction(currentSetExtremes)) {
            decoratedFn = function() {
                setExtremesFn.apply(this, arguments);
                return currentSetExtremes.apply(this, arguments);
            };
        }
        scope.configuration.xAxis.events.setExtremes = decoratedFn;
        // Decorating existing callback function or assigning the given
        // new callback. See other init function for description.
        afterSetExtremes = function() {
            if (angular.isFunction(callbackFn)) {
                callbackFn.apply(this, arguments);
            }
            updateExtremes(scope.component);
        };
        decoratedFn = afterSetExtremes;
        currentAfterSetExtremes = scope.configuration.xAxis.events.afterSetExtremes;
        if (angular.isFunction(currentAfterSetExtremes)) {
            decoratedFn = function() {
                var retValue = currentAfterSetExtremes.apply(this, arguments);
                if (retValue !== false) {
                    afterSetExtremes.apply(this, arguments);
                }
                return retValue;
            };
        }
        scope.configuration.xAxis.events.afterSetExtremes = decoratedFn;
    }
    /**
         * @description Initialize Y axis formatter. Actually the formatter is aplied
         * to display appropriate messages for boolean values.
         * @param scope {Object} scope Scope that contains main configuration object
         */
    function initYAxisFormatter(scope) {
        var axisHashTable = {}, yAxisConfigItem;
        if (!scope || !scope.configuration || !scope.configuration.series) {
            return;
        }
        // Searching the series of boolean type and constructing hash table
        // to recognize if the formatter may be set.
        angular.forEach(scope.configuration.series, function(series) {
            // If series does not contain yAxis member it will be attached by default to
            // the Y axis that is located at first position on the axis list.
            var seriesYAxis = series.yAxis ? series.yAxis : 0;
            // When seriesYAxis is type of string it means that we should replace it
            // to the index that is type of number. It is important because sometimes
            // user can define <yAxis> for series as the index in the axis array or
            // as the id. Since we use hash table indexed by <seriesYAxis> we should
            // use <seriesYAxis> one common type.
            if (angular.isString(seriesYAxis)) {
                seriesYAxis = getYAxisIndex(scope.configuration, seriesYAxis);
                // In case if the returned index is less than zero it means
                // the Y axis has not been found. Since <seriesYAxis> had the value
                // assigned previously from <series.yAxis> we can re-use this property to
                // restore original string value. It is important from perspective
                // of throwing the errors.
                seriesYAxis = seriesYAxis < 0 ? series.yAxis : seriesYAxis;
            }
            if (getSeriesDataType(series) === RA_CHART_CONST.supportedTypes.BOOLEAN) {
                yAxisConfigItem = getYAxisConfigItem(scope.configuration, seriesYAxis);
                if (!axisHashTable.hasOwnProperty(seriesYAxis)) {
                    // We can only use Y axis that has not yet assigned formatter
                    if (!yAxisConfigItem || !yAxisConfigItem.labels || !yAxisConfigItem.labels.formatter) {
                        axisHashTable[seriesYAxis] = [];
                    } else {
                        // Assigning null we prevent from adding the information to hash table
                        // for Y axis that has already the formatter
                        axisHashTable[seriesYAxis] = null;
                    }
                }
                // In case if the hash table contained Y axis index/id that is shared
                // with other series of different type than boolean the entry
                // for such Y axis is equal null. It means that we shouldn't add
                // any item into hash table.
                if (axisHashTable[seriesYAxis]) {
                    axisHashTable[seriesYAxis].push({
                        yAxis: yAxisConfigItem,
                        raExtend: {
                            trueMessage: getBooleanMessage(series, "trueMessage", DEFAULT_BOOLEAN_MESSAGES.trueMessage),
                            falseMessage: getBooleanMessage(series, "falseMessage", DEFAULT_BOOLEAN_MESSAGES.falseMessage)
                        }
                    });
                }
            } else {
                // Since the Y axis is shared with others series of different type than
                // boolean the hash table must be cleaned up for this axis index
                axisHashTable[seriesYAxis] = null;
            }
        });
        // Assigning the formatter to selected Y axis item
        angular.forEach(axisHashTable, function(infoItems, axisIndexOrId) {
            var trueMessage = DEFAULT_BOOLEAN_MESSAGES.trueMessage, falseMessage = DEFAULT_BOOLEAN_MESSAGES.falseMessage;
            if (infoItems && infoItems.length > 0) {
                // Checking if configuration for Y axis contains its own parameters
                // for trueMessage and falseMessage. Since all items of infoItems array
                // contain always the same Y axis configuration object we can get it from
                // the first entry.
                yAxisConfigItem = infoItems[0].yAxis;
                trueMessage = hasBooleanMessage(yAxisConfigItem, "trueMessage") ? getBooleanMessage(yAxisConfigItem, "trueMessage", trueMessage) : getFirstBooleanMessage(infoItems, "trueMessage", trueMessage);
                falseMessage = hasBooleanMessage(yAxisConfigItem, "falseMessage") ? getBooleanMessage(yAxisConfigItem, "falseMessage", falseMessage) : getFirstBooleanMessage(infoItems, "falseMessage", falseMessage);
                // Assigning formatter to the appropriate Y axis
                if (yAxisConfigItem) {
                    if (!yAxisConfigItem.labels) {
                        yAxisConfigItem.labels = {};
                    }
                    yAxisConfigItem.labels.formatter = getYAxisFormatterFn(trueMessage, falseMessage);
                } else if (axisIndexOrId === "0") {
                    // If configuration doesn't contain Y axis config but series
                    // uses first axis from the list (index is equal 0)
                    // we should add basic configuration
                    scope.configuration.yAxis = [ {
                        labels: {
                            formatter: getYAxisFormatterFn(trueMessage, falseMessage)
                        }
                    } ];
                }
            }
        });
    }
    /**
         * @description Returns index of the selected Y axis configuration passed in
         * the `config` parameter.
         * @param {Object} config Configuration object that contains `yAxis` member
         * with definition of several Y axis.
         * @param {String} axisId Id of Y axis for which the index is returned.
         * @returns {number} Index of the Y axis. The axis is identified by `axisId`
         * parameter
         */
    function getYAxisIndex(config, axisId) {
        var i, axisConfig, retIndex = -1;
        if (config && config.yAxis && angular.isString(axisId)) {
            axisConfig = config.yAxis;
            if (angular.isArray(axisConfig)) {
                // If axisId is type of string it means that it contains id of Y axis
                // otherwise it contains index of Y axis definition in the table of Y axis
                if (angular.isString(axisId)) {
                    // axisIndexOrId contains Id
                    for (i = 0; i < axisConfig.length; i++) {
                        if (axisConfig[i].hasOwnProperty("id") && axisConfig[i].id === axisId) {
                            retIndex = i;
                            break;
                        }
                    }
                }
            } else if (axisConfig.hasOwnProperty("id") && axisConfig.id === axisId) {
                retIndex = 0;
            }
        }
        return retIndex;
    }
    /**
         * @description Gives the configuration object of Y axis. This object is returned
         * from configuration before the Chart is instantiated.
         * @param {Object} config Entire configuration object.
         * @param {Number|String} [axisIndexOrId] The Y axis index or identifier.
         * @returns {Object|undefined} The configuration object of the Y axis selected by `axisIndexOrId`.
         */
    function getYAxisConfigItem(config, axisIndexOrId) {
        var axisConfig, yAxisConfigItem, i;
        if (config && config.yAxis) {
            axisIndexOrId = axisIndexOrId ? axisIndexOrId : 0;
            axisConfig = config.yAxis;
            // If axisIndexOrId is type of string it means that it contains id of Y axis
            // otherwise it contains index of Y axis definition in the table of Y axis
            if (angular.isString(axisIndexOrId)) {
                // axisIndexOrId contains Id
                i = getYAxisIndex(config, axisIndexOrId);
                if (i < 0) {
                    throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.CANNOT_FIND_Y_AXIS", {
                        index: axisIndexOrId
                    }), axisIndexOrId);
                } else {
                    axisIndexOrId = i;
                }
            }
            // Y axis configuration may be an array or an object
            if (angular.isArray(axisConfig)) {
                // If axisIndexOrId is type of string it means that it contains id of Y axis
                // otherwise it contains index of Y axis definition in the table of Y axis
                if (axisIndexOrId >= axisConfig.length || axisIndexOrId < 0) {
                    throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.Y_AXIS_INDEX_OUT_OF_RANGE"), axisIndexOrId);
                }
                yAxisConfigItem = axisConfig[axisIndexOrId];
            } else if (axisIndexOrId === 0) {
                // For Y axis configuration defined as the object instead of array
                // the index should equal zero.
                yAxisConfigItem = axisConfig;
            } else {
                throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.Y_AXIS_DEFINITION_IS_NOT_ARRAY", {
                    index: axisIndexOrId
                }), axisIndexOrId);
            }
        }
        return yAxisConfigItem;
    }
    /**
         * @description Gives the callback function for the label formatter of the Y axis.
         * @param {String=} trueMessage The message that is shown in case if the value
         * for boolean series is equal `1` (true)
         * @param {String=} falseMessage The message that is shown in case if the value
         * for boolean series is equal `0` (false)
         * @returns {Function} Callback function to handle formatting of Y axis labels.
         * If the `trueMessage` or `falseMessage` is undefined or null the label for
         * this message will be empty.
         */
    function getYAxisFormatterFn(trueMessage, falseMessage) {
        return function() {
            switch (this.value) {
              case 1:
                return trueMessage;

              case 0:
                return falseMessage;

              default:
                return null;
            }
        };
    }
    /**
         * @description Informs whether the given `item` parameter contains message
         * for `messageName`.
         * @param {Object} item Object from which the message is returned. This object
         * should contain `raExtend` member with property called like
         * the value of `messageName`.
         * @param {String} messageName Name of message property.
         * @returns {Boolean} `True` if `item` contains the message in property
         * `messageName` otherwise `False`.
         */
    function hasBooleanMessage(item, messageName) {
        return item && item.raExtend && item.raExtend.hasOwnProperty(messageName);
    }
    /**
         * @description Gives the message for the boolean value
         * @param {Object} item The item from which the message is extracted
         * @param {String} messageName Name of message field for boolean value.
         * @param {*} defaultMessage The value that is be returned in case if the item
         * does not contain appropriate boolean message.
         * @returns {*} The message for the given `item` and `messageName` or the default value
         * passed via `defaultMessage` parameter in case if the message cannot be found.
         */
    function getBooleanMessage(item, messageName, defaultMessage) {
        return hasBooleanMessage(item, messageName) ? item.raExtend[messageName] : defaultMessage;
    }
    /**
         * @description Gives the first occurrence of the boolean message in the list of items.
         * @param {Array} items Array that contains list of items with messages
         * for boolean values.
         * @param {String} messageName Name of message field for boolean value
         * @param {*} defaultMessage The value that is be returned in case if the item
         * does not contain appropriate boolean message.
         * @returns {*} The message for the given list of items or the default value
         * passed via `defaultMessage` parameter in case if the message cannot be found.
         */
    function getFirstBooleanMessage(items, messageName, defaultMessage) {
        var DOES_NOT_CONTAIN_MESSAGE = {}, i, retMessage = defaultMessage;
        for (i = 0; i < items.length; i++) {
            // By passing NOT_CONTAINS_MESSAGE we can recognize if series
            // contains message or not even if it is undefined or equal null.
            retMessage = getBooleanMessage(items[i], messageName, DOES_NOT_CONTAIN_MESSAGE);
            if (retMessage !== DOES_NOT_CONTAIN_MESSAGE) {
                // Since we found the message we can interrupt seeking process
                break;
            }
        }
        retMessage = retMessage === DOES_NOT_CONTAIN_MESSAGE ? defaultMessage : retMessage;
        return retMessage;
    }
    /**
         * @description Returns from series configuration the data type of given series.
         * @param series {Object} Highcharts series object
         * @returns {String|undefined} One of the supported series data type (defined in
         * RA_CHART_CONST.supportedTypes) or undefined value.
         */
    function getSeriesDataType(series) {
        var seriesDataType;
        if (series) {
            if (series.userOptions && series.userOptions.raExtend) {
                seriesDataType = series.userOptions.raExtend.seriesType;
            } else if (series.raExtend) {
                seriesDataType = series.raExtend.seriesType;
            }
        }
        return seriesDataType;
    }
    /**
         * @description Returns from series configuration the unit of series
         * @param series {Object} Highcharts series object
         * @returns {String|undefined} Unit of series or undefined value.
         */
    function getSeriesUnit(series) {
        var seriesUnit;
        if (series && series.userOptions && series.userOptions.raExtend) {
            seriesUnit = series.userOptions.raExtend.seriesUnit;
        }
        return seriesUnit;
    }
    /**
         * @description Returns the quality assigned to the given Highcharts point.
         * The quality is a member of series data. In configuration the data of series
         * should looks like below:
         * <pre>
         *     series: [
         *         ...
         *         data: [
         *             {x: <valueX1>, y: <valueY1>, quality: <valueQuality1>},
         *             {x: <valueX2>, y: <valueY2>, quality: <valueQuality2>},
         *             ...
         *             {x: <valueXn>, y: <valueYn>, quality: <valueQualityn>},
         *         ]
         *         ...
         *     ]
         * </pre>
         *
         * Notice, when you use quality you have to use this member also for updated series data,
         * even if the new data hasn't the quality. In this case you should assign undefined value as
         * `quality: undefined`.
         * @param point {Object} Highcharts point object
         * @returns {number|undefined} Quality code or undefined value
         */
    function getPointQuality(point) {
        return point && point.hasOwnProperty("quality") ? point.quality : undefined;
    }
    /**
         * @description Returns the string data assigned to the given Highcharts point.
         * The string data is a member of series data. In configuration the data should
         * looks like below:
         * <pre>
         *     series: [
         *         ...
         *         data: [
         *             {x: <valueX1>, y: <valueY1>, stringData: <valueString1>},
         *             {x: <valueX2>, y: <valueY2>, stringData: <valueString2>},
         *             ...
         *             {x: <valueXn>, y: <valueYn>, stringData: <valueStringn>},
         *         ]
         *         ...
         *     ]
         * </pre>
         *
         * Notice, when you use string data you have to use this member also for updated series data,
         * event if the new data hasn't the string data. In this case you should assign undefined value as:
         * `stringData: undefined`.
         * @param point {Object} Highcharts point object for which _stringData_ will be returned
         * @returns {string|undefined} String data or undefined value
         */
    function getPointStringData(point) {
        return point && point.hasOwnProperty("stringData") ? point.stringData : undefined;
    }
    /**
         * @description Returns extreme level directly from the component configuration
         * @param {Object} component Highcharts component
         * @returns {*} Value of extreme level. If the extreme level is not defined then
         * RA_CHART_CONST.extremeLevels.NONE (-1 value) is returned as default.
         * @description Reads and returns level option for extremes from user options of component
         */
    function getExtremeLevel(component) {
        var level = RA_CHART_CONST.extremeLevels.NONE;
        if (component && component.userOptions && component.userOptions.raChart && component.userOptions.raChart.extremes && angular.isNumber(component.userOptions.raChart.extremes.level) && component.userOptions.raChart.extremes.enableExtensions) {
            level = component.userOptions.raChart.extremes.level;
            if (level < RA_CHART_CONST.extremeLevels.NONE) {
                level = RA_CHART_CONST.extremeLevels.NONE;
            } else if (level > RA_CHART_CONST.extremeLevels.COMPLETE_DESCRIPTION) {
                level = RA_CHART_CONST.extremeLevels.COMPLETE_DESCRIPTION;
            }
        }
        return level;
    }
    /**
         * Checks if series is additional HighStiock series for timeline
         * @param series to check
         * @returns {boolean} true if it's timeline series.
         */
    function isNavigatorSeries(series) {
        // Check if we have navigator from HighStock.
        // Right now we check if options.isInternal of the last series is true.
        // It might be not perfect check and would have to be changed in the future.
        return Boolean(series && series.options && series.options.isInternal);
    }
    /**
         * @description Update Highchart object with new extremes data
         * @param {Object} component Chart component
         */
    function updateExtremes(component) {
        if (!component || getExtremeLevel(component) === RA_CHART_CONST.extremeLevels.NONE) {
            return;
        }
        angular.forEach(component.series, function(set) {
            if (isNavigatorSeries(set)) {
                return;
            }
            if (set.yAxis) {
                if (set.visible) {
                    updateExtremesPlotLines(EXTREMES_PLOT_LINES.add, component, set);
                }
            }
        });
    }
    /**
         * @description Return label for the extremes plot
         * @param {Number} value Min or max value
         * @param {Number} level Numbers from -1 to 2, where -1 and 0 will
         *        return no string at all, 1 will return only value and 2 will
         *        return series name, and value.
         * @param {String} name Series name with Min or Max indicator
         * @param {String} unit Unit for the current series
         * @returns {String} with the label for the extremes plot
         */
    function getExtremesPlotLabel(value, level, name, unit) {
        var plotLabel = "";
        if (angular.isNumber(value)) {
            if (level > RA_CHART_CONST.extremeLevels.LINES_ONLY) {
                plotLabel = "" + parseFloat(value.toFixed(9)) + (unit ? unit : "");
            }
            if (level === RA_CHART_CONST.extremeLevels.COMPLETE_DESCRIPTION) {
                plotLabel = name + " " + plotLabel;
            }
        }
        return plotLabel;
    }
    /**
         * @description Add plot line which indicates minimum and maximum values for
         * currently displayed data
         * @param {Number} action Describes whether plot lines will be added or removed.
         * You can use EXTREMES_PLOT_LINES.add (1) or EXTREMES_PLOT_LINES.remove (0).
         * @param {Object} component An instance of Highcharts component
         * @param {Object} series Series object
         */
    function updateExtremesPlotLines(action, component, series) {
        var extremes, level, plot, extr, labels, align, position, seriesDataType = getSeriesDataType(series);
        if (seriesDataType !== RA_CHART_CONST.supportedTypes.NUMBER) {
            return;
        }
        level = getExtremeLevel(component);
        labels = {
            dataMin: " Min:",
            dataMax: " Max:"
        };
        // Removing extremes plot lines before proceeding
        // Id of plot line is based on name of members of <labels> structure
        if (series.yAxis.userOptions.plotLines && series.yAxis.userOptions.plotLines.length > 0) {
            angular.forEach(labels, function(label, extremeId) {
                series.yAxis.removePlotLine(extremeId);
            });
        }
        if (action === EXTREMES_PLOT_LINES.remove || level === RA_CHART_CONST.extremeLevels.NONE) {
            return;
        }
        extremes = series.yAxis.getExtremes();
        align = {
            dataMin: "bottom",
            dataMax: "top"
        };
        position = {
            dataMin: 12,
            dataMax: -12
        };
        if (action === EXTREMES_PLOT_LINES.add) {
            for (extr in labels) {
                if (labels.hasOwnProperty(extr)) {
                    plot = {
                        zIndex: 1001,
                        color: series.yAxis.options.lineColor,
                        id: extr,
                        width: 1,
                        label: {
                            style: {
                                color: series.yAxis.options.lineColor
                            },
                            y: position[extr],
                            verticalAlign: align[extr],
                            text: getExtremesPlotLabel(extremes[extr], level, series.name + labels[extr], getSeriesUnit(series))
                        },
                        dashStyle: "ShortDot",
                        value: extremes[extr]
                    };
                    series.yAxis.addPlotLine(plot);
                }
            }
        }
    }
    /**
         * @description Highcharts callback for legend item click to support
         * showing and hiding Y axis connected to the legend item (series)
         * @param {Object} scope Scope that contains information about
         * instance of chart component.
         * @returns {Function} Callback function for legend item
         */
    function getForYAxisLegendItemClickFn(scope) {
        /**
             * @description Returns the count of visible series that are connected to
             * the given yAxis
             * @param {Object} yAxis YAxis object used by chart component
             * @returns {number} Count of visible series.
             */
        function getVisibleSeriesCount(yAxis) {
            var count = 0;
            angular.forEach(yAxis.series, function(series) {
                if (series.visible) {
                    count++;
                }
            });
            return count;
        }
        /**
             * Return callback for the legend item click action in Highcharts
             * chart configuration. Note that "this" keyword is used to access
             * Series object in context of the chart. This is why jshint "possible
             * strict violation" warning (W040) is suppressed.
             */
        function legendItemClick() {
            /* jshint -W040 */
            var axis = this.yAxis;
            if (!this.visible) {
                if (getVisibleSeriesCount(axis) === 0) {
                    axis.update({
                        labels: {
                            enabled: axis.userOptions.oldLabelsEnabled
                        },
                        lineWidth: axis.userOptions.oldLineWidth,
                        title: !axis.userOptions.oldTitle ? axis.userOptions.oldTitle : {
                            enabled: angular.isUndefined(axis.userOptions.oldTitleEnabled) ? true : axis.userOptions.oldTitleEnabled
                        }
                    });
                }
            } else {
                if (getVisibleSeriesCount(axis) === 1) {
                    // Hides the yAxis line
                    // Remembering original line width
                    axis.userOptions.oldLineWidth = axis.options.lineWidth;
                    // Remembering if labels were original enabled or not
                    // Main assumption is that axis.options.labels will never be undefined
                    // or null
                    axis.userOptions.oldLabelsEnabled = axis.options.labels.enabled;
                    // Since the title configuration option may be undefined or null
                    // we have to remember also whole title object
                    axis.userOptions.oldTitle = axis.options.title;
                    axis.userOptions.oldTitleEnabled = axis.options.title ? axis.options.title.enabled : undefined;
                    scope.legendHide = true;
                    axis.update({
                        labels: {
                            enabled: false
                        },
                        lineWidth: 0,
                        title: {
                            enabled: false
                        }
                    });
                    scope.legendHide = false;
                }
            }
        }
        return legendItemClick;
    }
    /**
         * @description Highcharts callback for legend item click to support
         * showing and hiding extremes plot lines connected to the legend item (series)
         * @param {Object} scope Scope that contains information about
         * instance of chart component.
         * @returns {Function} Callback function for legend item
         */
    function getForExtremesLegendItemClickFn(scope) {
        /**
             * Return callback for the legend item click action in Highcharts
             * chart configuration. Note that "this" keyword is used to access
             * Series object in context of the chart. This is why jshint "possible
             * strict violation" warning (W040) is suppressed.
             */
        function legendItemClick() {
            /* jshint -W040 */
            if (!this.visible) {
                // Another hack for possible Highcharts bug: adding
                // plotline for invisible series doesn't work.
                // OTOH hiding after adding a plot is necessary, since
                // Highcharts will toggle the visible state anyway.
                this.show();
                updateExtremesPlotLines(EXTREMES_PLOT_LINES.add, scope.component, this);
                this.hide();
            } else {
                // This is a workaround for (possible) bug in Highcharts,
                // which doesn't hide plots for the first serie on the
                // chart.
                updateExtremesPlotLines(EXTREMES_PLOT_LINES.remove, scope.component, this);
            }
        }
        return legendItemClick;
    }
    /**
         * @description Returns custom tooltip formatter from _raChart.tooltip_ section of configuration
         * @param {Object} component Chart component
         * @returns {?function} Formatter callback function
         */
    function getCustomTooltipFormatter(component) {
        var callback;
        if (component && component.userOptions && component.userOptions.raChart && component.userOptions.raChart.tooltip && angular.isFunction(component.userOptions.raChart.tooltip.formatter)) {
            callback = component.userOptions.raChart.tooltip.formatter;
        }
        return callback;
    }
    /**
         * @description Returns proper tooltip function for the plot
         * @return {function} for tooltip formatter
         */
    function getTooltipFormatterFn() {
        return function() {
            var i, currentPoint, currentPointQuality, currentSeries, customFormatterResult, date, hasMoreThanOneSeries, hasTooltipCustomFormatter, points, series = [], seriesData, template, templateSeries, tooltipData = {}, tooltipCustomFormatter;
            points = this.points ? this.points : [ this ];
            date = dateFilter(new Date(this.x), TOOLTIP_DATE_FORMAT);
            template = '<div style="font-size: 90%">' + date + "</div>";
            hasMoreThanOneSeries = points.length > 1;
            // Get custom tooltip formatter from the first series
            if (points && points.length > 0) {
                tooltipCustomFormatter = getCustomTooltipFormatter(points[0].series.chart);
                hasTooltipCustomFormatter = tooltipCustomFormatter && angular.isFunction(tooltipCustomFormatter);
            }
            for (i = 0; i < points.length; i++) {
                currentPoint = points[i].point;
                currentSeries = points[i].series;
                currentPointQuality = getPointQuality(currentPoint);
                seriesData = {
                    x: currentPoint.x,
                    y: currentPoint.y,
                    unit: getSeriesUnit(currentSeries),
                    name: currentSeries.name,
                    color: currentSeries.color,
                    seriesDataType: getSeriesDataType(currentSeries)
                };
                switch (seriesData.seriesDataType) {
                  case RA_CHART_CONST.supportedTypes.BOOLEAN:
                    seriesData.value = currentPoint.y ? getBooleanMessage(currentSeries.userOptions, "trueMessage", DEFAULT_BOOLEAN_MESSAGES.trueMessage) : getBooleanMessage(currentSeries.userOptions, "falseMessage", DEFAULT_BOOLEAN_MESSAGES.falseMessage);
                    break;

                  case RA_CHART_CONST.supportedTypes.STRING:
                    seriesData.value = getPointStringData(currentPoint);
                    break;

                  default:
                    seriesData.value = currentPoint.y;
                }
                if (currentPointQuality !== undefined && currentPointQuality !== null) {
                    seriesData.qualityCode = currentPointQuality;
                    seriesData.quality = raOpcQualitySvc.asString(seriesData.qualityCode);
                }
                templateSeries = "<div>" + (hasMoreThanOneSeries ? '<span style="display:inline-block;width:7px;color:{{color}};">&bull;</span>' : "") + '<span style="color:{{color}}">{{name}}: </span>' + "<strong>{{value}}&nbsp{{unit}}</strong></div>" + (seriesData.quality ? "<div" + (hasMoreThanOneSeries ? ' style="padding-left:6px">' : ">") + 'Quality: <strong style="color: {{color}}">' + "{{quality}}</strong></div>" : "");
                template = template + $interpolate(templateSeries)(seriesData);
                if (hasTooltipCustomFormatter) {
                    series.push(seriesData);
                }
            }
            if (hasTooltipCustomFormatter) {
                tooltipData.date = date;
                tooltipData.template = template;
                tooltipData.series = series;
                customFormatterResult = tooltipCustomFormatter.apply(this, [ tooltipData ]);
                // If the callback function will return new HTML for tooltip it means
                // that we should use exactly this HTML. Otherwise, if the result is
                // undefined or null, we will continue processing template prepared above to show tooltip.
                if (customFormatterResult === false || angular.isString(customFormatterResult)) {
                    return customFormatterResult;
                }
            }
            return template;
        };
    }
    /**
         * @description Get the callback function for the zooming event for use in
         * xAxis.events.afterSetExtremes parameter for Highcharts.Chart object.
         * @param {Object} scope Scope that contains information about
         * instance of chart component.
         * @returns {Function} callback Callback function for `config.xAxis.events.afterSetExtremes`
         */
    function getZoomFn(scope) {
        /**
             * @description Returns callback functions for decorator of `promiseGetZoomedSeries`.
             * @returns {{onSuccess: onSuccess, onFailure: onFailure, onFinal: onFinal, onCancel: onCancel}}
             * Object that contains implemented callback functions for promise that is responsible
             * for showing the data of zoomed series. Additionally the object contains also the
             * implementation of cancel callback that is used to cancel
             */
        function getZoomPromiseCallbacks() {
            var cancel = false;
            return {
                onSuccess: function(result) {
                    if (!cancel) {
                        protectNavigatorForUpdate(scope.component, function() {
                            updateSeries(scope.component, result);
                        });
                    }
                },
                onFailure: function(reason) {
                    var retError = reason;
                    if (!cancel) {
                        if (!raErrorHandlerSvc.isError(retError)) {
                            retError = raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.CANNOT_GET_DATA_FOR_ZOOMED_SERIES"), reason);
                        }
                        raErrorHandlerSvc.propagate(retError);
                    }
                },
                onFinal: function() {
                    if (!cancel && scope && scope.component && scope.zoom) {
                        scope.zoom.promiseGetZoomedSeries = null;
                        scope.zoom.cancellationToken = null;
                        scope.component.hideLoading();
                    }
                },
                onCancel: function() {
                    cancel = true;
                    if (scope && scope.zoom) {
                        if (scope.zoom.promiseGetZoomedSeries) {
                            scope.zoom.promiseGetZoomedSeries = null;
                        }
                        if (scope.zoom.cancellationToken) {
                            scope.zoom.cancellationToken.resolve(messages.operationCancelled);
                        }
                    }
                }
            };
        }
        /**
             * @description Decorates given promise by using callback implementation returned
             * by `getZoomPromiseCallbacks()` function. As the result it returns promise that additionally
             * contains `cancel()` method to cancel operation of retrieving and showing the series data.
             * @param {Object} promise Promise to be decorated
             * @returns {Object} Decorated promise that contains implemented callbacks for `then`, `catch` and
             * finally methods. Additionaly the promise contains `cancel()` method.
             */
        function decorateZoomPromise(promise) {
            var promiseCallbacks = getZoomPromiseCallbacks();
            promise.cancel = promiseCallbacks.onCancel;
            promise.then(promiseCallbacks.onSuccess);
            promise.catch(promiseCallbacks.onFailure);
            promise["finally"](promiseCallbacks.onFinal);
            return promise;
        }
        scope.zoom = {
            currentFullSeries: null,
            // Remembers the series displayed before first zooming
            promiseGetZoomedSeries: null,
            // Remembers the promise returned by getZoomedSeries callback
            cancellationToken: null,
            // Token used to help cancel retrieving data by $http service
            shouldBeReset: false
        };
        return function(event) {
            var getZoomedSeries = null, raChartConfig = scope.component.userOptions.raChart;
            if (event.trigger === "updatedData") {
                return;
            }
            // In HighStock reset zoom does not set min and max member of the event object to null.
            // Because of this to recognize the reset state we have to compare min & max with
            // values remembered at the first zoom usage.
            if (scope.zoom.min === event.min && scope.zoom.max === event.max) {
                scope.zoom.shouldBeReset = true;
            } else if (event.trigger === "rangeSelectorButton" && event.rangeSelectorButton && event.rangeSelectorButton.type === "all") {
                scope.zoom.shouldBeReset = true;
                // In order to set valid scroller range we have to set min & max members of event
                event.min = scope.zoom.min;
                event.max = scope.zoom.max;
                event.currentTarget.setExtremes(scope.zoom.min, scope.zoom.max, true, false);
                return;
            }
            if (raChartConfig && raChartConfig.zoom && raChartConfig.zoom.getZoomSeries) {
                getZoomedSeries = raChartConfig.zoom.getZoomSeries;
            }
            if (!scope.zoom.currentFullSeries) {
                // Since the chart hasn't yet been zoomed till now we must remember
                // the series to be able to reset.
                backupSeriesForZoomReset(scope, angular.copy(scope.component.userOptions.series));
                scope.zoom.min = event.dataMin;
                scope.zoom.max = event.dataMax;
            } else if (scope.zoom.shouldBeReset) {
                // If the promise for loading the data of zoomed series is
                // still run we need to cancel it.
                cancelLoadingDataForZoom(scope);
                // Since the zoom mode is reset we should only restore the series
                restoreSeriesForZoomReset(scope);
                scope.zoom.shouldBeReset = false;
                scope.zoom.min = null;
                scope.zoom.max = null;
                scope.component.hideLoading();
                return;
            }
            scope.component.showLoading(messages.loadingMessage);
            if (getZoomedSeries) {
                // If the promise for loading the data of zoomed series is
                // still run we need to cancel it.
                cancelLoadingDataForZoom(scope);
                scope.zoom.cancellationToken = $q.defer();
                // Decorating the promise returned by getZoomedSeries callback and
                // assigning the callbacks for `then`, `catch` and `finally`. As the result
                // we get the promise that handle retrieving the data and additionally contains
                // method to cancel the operation. Notice that we pass `cancellationToken` as
                // a promise that will be resolved when the operation of retrieving data will be
                // cancelled. The `cancellationToken` may be passed into the $http service inside
                // the `getZoomedSeries` callback function assigned in config.
                scope.zoom.promiseGetZoomedSeries = decorateZoomPromise($q.when(getZoomedSeries({
                    start: event.min,
                    end: event.max,
                    originalSeries: scope.zoom.currentFullSeries,
                    cancellationToken: scope.zoom.cancellationToken.promise
                })));
            } else {
                scope.component.hideLoading();
            }
        };
    }
    /**
         * @description Protects against updating the navigator during updating the data
         * of the series
         * @param {Object} component Chart component
         * @param {Function} callbackFn Callback function responsible for updating
         * the data of the series. In most cases it will be function that calls
         * _updateSeries()_.
         */
    function protectNavigatorForUpdate(component, callbackFn) {
        var updatedDataCallback, baseSeriesIndexOrId, baseSeries, hasNavigator = Boolean(component && component.options && component.options.navigator && component.options.navigator.enabled);
        if (hasNavigator) {
            baseSeriesIndexOrId = component.options.navigator.baseSeries || 0;
            baseSeries = component.series[baseSeriesIndexOrId] || angular.isString(baseSeriesIndexOrId) && component.get(baseSeriesIndexOrId) || component.series[0];
            if (baseSeries.userOptions.events && baseSeries.userOptions.events.hasOwnProperty("updatedData")) {
                updatedDataCallback = baseSeries.userOptions.events.updatedData;
                baseSeries.userOptions.events.updatedData = undefined;
                angular.element(baseSeries).unbind("updatedData", updatedDataCallback);
            }
        }
        if (callbackFn) {
            callbackFn();
        }
        if (hasNavigator && updatedDataCallback) {
            angular.element(baseSeries).bind("updatedData", updatedDataCallback);
            baseSeries.userOptions.events.updatedData = updatedDataCallback;
        }
    }
    /**
         * @describe Makes a backup od series that will be used when the
         * zoom mode will be reset
         * @param {Object} scope Scope that contains `zoom` object
         * @param {Array} series Series that will be remembered
         */
    function backupSeriesForZoomReset(scope, series) {
        scope.zoom.currentFullSeries = series;
    }
    /**
         * @description Restores and shows on the chart the series that was remembered
         * when the zooming mode was started.
         * @param {Object} scope Scope that contains `zoom` object with remembered
         * series
         */
    function restoreSeriesForZoomReset(scope) {
        updateSeries(scope.component, scope.zoom.currentFullSeries);
        scope.zoom.currentFullSeries = null;
    }
    /**
         * @description Cancels retrieving the data for the zoomed range.
         * The function resolves _Cancel_ promise passed to _getZoomedSeries_ callback.
         * @param {Object} scope Scope in which the zoom object is kept.
         */
    function cancelLoadingDataForZoom(scope) {
        if (scope && scope.zoom) {
            if (scope.zoom.promiseGetZoomedSeries) {
                scope.zoom.promiseGetZoomedSeries.cancel();
            }
        }
    }
    /**
         * @description Informs whether the chart is in zoom mode
         * @param {Object} scope Scope in which the zoom object is kept.
         * @returns {Boolean} `True` if chart is in zoom mode otherwise `False`
         */
    function isInZoomMode(scope) {
        return scope && scope.zoom && scope.zoom.currentFullSeries;
    }
    /**
         * @description Update the chart component with new series of data
         * @param {Object} component Chart component
         * @param {Array} series Series with new data
         * @param {Object|Boolean} [animation] Optional parameter that determines
         * whether redrawing updated series should use animation. You can pass
         * _Boolean_ value or animation configuration object of Highcharts.
         * If the parameter will be undefined or null the animation will be disabled.
         */
    function updateSeries(component, series, animation) {
        var isNavPresent, updatePoints;
        if (!component || !component.userOptions) {
            throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.NO_VALID_CHART_OBJECT_PROVIDED"), component);
        }
        if (!series || !Array.isArray(series) || !series.length) {
            throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.INSUFFICIENT_OR_EMPTY_SERIES"), series);
        }
        // Check if we have navigator from HighStock.
        isNavPresent = isNavigatorSeries(component.series[component.series.length - 1]);
        if (series.length !== component.series.length && (isNavPresent === false || series.length + 1 !== component.series.length)) {
            throw raErrorHandlerSvc.getRAError($translate.instant("RA_CHART.NEW_SERIES_LENGTH_DOES_NOT_MATCH"), {
                providedSeries: series,
                componentSeries: component.series
            });
        }
        angular.forEach(series, function(set, i) {
            // Updating the hidden series in HighStock (in and after zoom mode) causes internal error.
            // In order to workaround the issue we recreate invisible series.
            updatePoints = component.userOptions.isHighStock ? component.series[i].visible : true;
            // Te following parameters are passed to the setData():
            // data = set.data
            // redraw = false
            // animation = false
            // updatePoints = updatePoints (default value is true but for HighStock it depends on
            //                visibility of the series)
            component.series[i].setData(set.data, false, false, updatePoints);
            if (set.raExtend) {
                angular.extend(component.series[i].userOptions.raExtend, set.raExtend);
            }
            component.series[i].userOptions.raOverride = undefined;
            if (set.raOverride) {
                component.series[i].userOptions.raOverride = set.raOverride;
            }
        });
        component.redraw(animation);
        updateExtremes(component);
    }
    /**
         * @description Adapt chart config for the Highcharts.Chart or Highcharts.StockChart suitable configuration.
         * In case when the _config_ parameter is null or undefined the default chart
         * configuration will be returned.
         * @param {Object} config initial configuration
         * @returns {Object} Altered configuration.
         */
    function prepareConfig(config) {
        var conf = angular.copy(!config ? DEFAULT_CHART : config);
        if (!conf.chart) {
            conf.chart = {};
        }
        if (conf.series && angular.isArray(conf.series)) {
            angular.forEach(conf.series, function(series) {
                switch (getSeriesDataType(series)) {
                  case RA_CHART_CONST.supportedTypes.BOOLEAN:
                    if (!series.hasOwnProperty("step")) {
                        series.step = "left";
                    }
                    break;

                  case RA_CHART_CONST.supportedTypes.STRING:
                    if (!series.hasOwnProperty("type")) {
                        series.type = "scatter";
                    }
                    break;
                }
            });
        }
        return conf;
    }
    /**
         * @description Re-create chart object
         * @param {Object} scope Scope of raChart directive
         * @param {Object} conf initial configuration
         */
    function recreate(scope, conf) {
        if (scope.component && scope.component.userOptions) {
            scope.component.destroy();
        }
        cancelLoadingDataForZoom(scope);
        scope.zoom = null;
        scope.configuration = prepareConfig(conf);
        createChart(scope);
    }
    /**
         * @description Provides interface to getting the chart component, updating the series and
         * recreating the chart.
         * @param {Object} scope Scope of raChart directive
         * @constructor
         */
    function ChartApi(scope) {
        var dScope = scope;
        this.updateSeries = function(data, animation) {
            if (isInZoomMode(dScope)) {
                // If chart is in zoom mode it means that the updated series
                // shouldn't be showed and it must be remembered to restore when
                // zoom will be reset.
                backupSeriesForZoomReset(dScope, data);
            } else {
                updateSeries(dScope.component, data, animation);
                // Lines below implements workaround of an issue with updating userOptions
                // in Highcharts/Highstock. This issue may occur if chart component
                // gets different number of points than it was.
                if (dScope && dScope.component && dScope.component.userOptions) {
                    dScope.component.userOptions.series = angular.copy(data);
                }
            }
        };
        this.recreate = function(conf) {
            recreate(dScope, conf);
        };
        this.getChart = function() {
            return dScope.component;
        };
    }
    return {
        restrict: "AE",
        replace: false,
        template: '<div class="ra-chart-container"></div>',
        scope: {
            setApi: "&",
            config: "=?"
        },
        link: function(scope, element, attr) {
            var chartContainer = element.find(".ra-chart-container"), chartApi;
            scope.configuration = prepareConfig(attr.config ? scope.config : DEFAULT_CHART);
            scope.container = chartContainer[0];
            createChart(scope);
            if (attr.setApi) {
                chartApi = new ChartApi(scope);
                scope.setApi({
                    api: chartApi
                });
            }
            element.on("$destroy", function() {
                if (chartApi) {
                    chartApi = null;
                }
                // The Highcharts provides the destroy() function to destroy the chart component.
                // However, there is no any explicit information that allows to detect whether
                // the chart has already been destroyed or not (e.g. by directly invoking the destroy() method
                // of chart outside the raChart mechanism). In order to be able to recognize the described
                // state we check scope.component.userOptions that will be not accessible in case if
                // the chart is destroying its assets.
                if (scope.component && scope.component.userOptions) {
                    scope.component.destroy();
                    scope.component = null;
                }
            });
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").constant("LAYOUT_EVENTS", {
    LAY_RES_STEP1_HIDE: "LAY_RES_STEP1_HIDE",
    LAY_RES_STEP2_SET_FLEX: "LAY_RES_STEP2_SET_FLEX",
    LAY_RES_STEP3_SHOW: "LAY_RES_STEP3_SHOW",
    SIDEBAR_VISIBLE: "SIDEBAR_VISIBLE",
    BREADCRUMB_VISIBLE: "BREADCRUMB_VISIBLE",
    ACTIONBAR_ENABLE_ACTIONS: "ACTIONBAR_ENABLE_ACTIONS",
    ELEMENT_RESIZE: "ELEMENT_RESIZE"
}).constant("RA_NAV_GROUP", {
    DEFAULT_GROUP_ID: "theDefaultGroupId"
}).constant("RA_MESSAGE_TYPE", {
    ERROR: "error",
    WARNING: "warning",
    INFORMATION: "information"
}).constant("RA_TOAST", {
    MESSAGE_NUMBER_LIMIT: {
        UNLIMITED: "unlimited"
    }
}).constant("RA_FLEX_CLASS", {
    NONE: "",
    ROW: "ra-flex-row",
    COLUMN: "ra-flex-column"
});

/* global angular */
angular.module("mobile-toolkit-ra").run([ "raDateSvc", function(raDateSvc) {
    "use strict";
    raDateSvc.helper.decorateDate();
} ]).provider("raDateSvc", function() {
    "use strict";
    var raDateSvcProvider = this, // provider of raDateSvc
    decoratorStorage = {
        // Allows to remember a list of added members to Date constructor and prototype
        inConstructor: [],
        inPrototype: []
    }, messages;
    /**
     * @ngdoc property
     * @name mobile-toolkit-ra.raDateSvcProvider#canDecorateDatePrototype
     * @propertyOf mobile-toolkit-ra.raDateSvcProvider
     * @type {boolean}
     * @description The property that determines whether _raDateSvc_ can automatically
     * decorate the _Date_ prototype during initialization of the _mobile-toolkit-ra_ module.
     * By default this property is set to **true**.
     */
    raDateSvcProvider.canDecorateDatePrototype = true;
    /**
     * @description Checks if the given year is a leap year.
     * @param {Date|number} dateOrYear The date or the year that is checked.
     * @returns {boolean} Returns true if the year is a leap year.
     */
    function isLeapYear(dateOrYear) {
        var year = dateOrYear;
        if (angular.isDate(dateOrYear)) {
            year = dateOrYear.getFullYear();
        } else if (!angular.isNumber(dateOrYear)) {
            throw new Error(messages.errorArgumentDateOrYearMustBeDateOrNumber);
        }
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * @description Returns the number of days in a month of a given year.
     * @param {Date|number} dateOrYear The date or the year that is used to check
     * the number of days in the given month.
     * @param {number=} [month] Optional parameter that is used in case the `dateOrYear`
     * parameter is of type number and it represents the year.
     * @returns {number} Number of days in a month for the given year.
     */
    function getDaysInMonth(dateOrYear, month) {
        var year = dateOrYear;
        if (angular.isDate(dateOrYear)) {
            year = dateOrYear.getFullYear();
            month = dateOrYear.getMonth();
        } else if (!angular.isNumber(dateOrYear)) {
            throw new Error(messages.errorArgumentDateOrYearMustBeDateOrNumber);
        } else if (!angular.isNumber(month)) {
            throw new Error(messages.errorArgumentMonthMustBeNumber);
        } else if (month < 0 || month > 11) {
            throw new Error(messages.errorArgumentMonthShouldHaveValueBetween0And11);
        }
        return [ 31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month];
    }
    /**
     * @description Calculates a new date by adding a given number of seconds.
     * @param {Date} date The date to which the seconds will be added.
     * @param {number} seconds The number of seconds to add.
     * @returns {Date} A calculated date after adding a number of seconds.
     */
    function addSeconds(date, seconds) {
        if (!angular.isDate(date)) {
            throw new Error(messages.errorArgumentDateMustBeDate);
        } else if (!angular.isNumber(seconds)) {
            throw new Error(messages.errorArgumentSecondsMustBeNumber);
        }
        date.setSeconds(date.getSeconds() + seconds);
        return date;
    }
    /**
     * @description Calculates a new date by adding a given number of minutes.
     * @param {Date} date The date to which the minutes will be added.
     * @param {number} minutes The number of minutes to add.
     * @returns {Date} A calculated date after adding a number of minutes.
     */
    function addMinutes(date, minutes) {
        if (!angular.isDate(date)) {
            throw new Error(messages.errorArgumentDateMustBeDate);
        } else if (!angular.isNumber(minutes)) {
            throw new Error(messages.errorArgumentMinutesMustBeNumber);
        }
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    }
    /**
     * @description Calculates a new date by adding a given number of hours.
     * @param {Date} date The date to which the hours will be added.
     * @param {number} hours The number of hours to add.
     * @returns {Date} A calculated date after adding a number of hours.
     */
    function addHours(date, hours) {
        if (!angular.isDate(date)) {
            throw new Error(messages.errorArgumentDateMustBeDate);
        } else if (!angular.isNumber(hours)) {
            throw new Error(messages.errorArgumentHoursMustBeNumber);
        }
        date.setHours(date.getHours() + hours);
        return date;
    }
    /**
     * @description Calculates new date by adding a given number of days.
     * @param {Date} date The date to which the days will be added.
     * @param {number} days The number of days to add.
     * @returns {Date} A calculated date after adding a number of days.
     */
    function addDays(date, days) {
        if (!angular.isDate(date)) {
            throw new Error(messages.errorArgumentDateMustBeDate);
        } else if (!angular.isNumber(days)) {
            throw new Error(messages.errorArgumentDaysMustBeNumber);
        }
        date.setDate(date.getDate() + days);
        return date;
    }
    /**
     * @description Calculates new date by adding a given number of months.
     * @param {Date} date The date to which the months will be added.
     * @param {number} months The number of months to add.
     * @returns {Date} A calculated date after adding a number of months.
     */
    function addMonths(date, months) {
        var dayOfMonth;
        if (!angular.isDate(date)) {
            throw new Error(messages.errorArgumentDateMustBeDate);
        } else if (!angular.isNumber(months)) {
            throw new Error(messages.errorArgumentMonthsMustBeNumber);
        }
        dayOfMonth = date.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() + months);
        date.setDate(Math.min(dayOfMonth, getDaysInMonth(date)));
        return date;
    }
    /**
    * @ngdoc object
    * @module mobile-toolkit-ra
    * @name raDateSvc:helper
    * @description Helper object for decorating _Date_ type.
    */
    raDateSvcProvider.helper = {};
    /**
     * @ngdoc method
     * @name raDateSvc:helper#decorateDate
     * @methodOf raDateSvc:helper
     * @description Decorates the _Date_ constructor and prototype.
     */
    raDateSvcProvider.helper.decorateDate = function() {
        if (!raDateSvcProvider.canDecorateDatePrototype) {
            return;
        }
        if (!raDateSvcProvider.helper.isDateDecorated()) {
            if (!Date.isLeapYear) {
                Date.isLeapYear = isLeapYear;
                decoratorStorage.inConstructor.push("isLeapYear");
            }
            if (!Date.getDaysInMonth) {
                Date.getDaysInMonth = getDaysInMonth;
                decoratorStorage.inConstructor.push("getDaysInMonth");
            }
            if (!Date.prototype.isLeapYear) {
                Date.prototype.isLeapYear = function() {
                    return isLeapYear(this);
                };
                decoratorStorage.inPrototype.push("isLeapYear");
            }
            if (!Date.prototype.getDaysInMonth) {
                Date.prototype.getDaysInMonth = function() {
                    return getDaysInMonth(this);
                };
                decoratorStorage.inPrototype.push("getDaysInMonth");
            }
            if (!Date.prototype.addSeconds) {
                Date.prototype.addSeconds = function(seconds) {
                    return addSeconds(this, seconds);
                };
                decoratorStorage.inPrototype.push("addSeconds");
            }
            if (!Date.prototype.addMinutes) {
                Date.prototype.addMinutes = function(minutes) {
                    return addMinutes(this, minutes);
                };
                decoratorStorage.inPrototype.push("addMinutes");
            }
            if (!Date.prototype.addHours) {
                Date.prototype.addHours = function(hours) {
                    return addHours(this, hours);
                };
                decoratorStorage.inPrototype.push("addHours");
            }
            if (!Date.prototype.addDays) {
                Date.prototype.addDays = function(days) {
                    return addDays(this, days);
                };
                decoratorStorage.inPrototype.push("addDays");
            }
            if (!Date.prototype.addMonths) {
                Date.prototype.addMonths = function(months) {
                    return addMonths(this, months);
                };
                decoratorStorage.inPrototype.push("addMonths");
            }
        }
    };
    /**
     * @ngdoc method
     * @name raDateSvc:helper#isDateDecorated
     * @methodOf raDateSvc:helper
     * @description Returns information on whether the _Date_ type has been decorated by _raDateSvc_.
     * @returns {Boolean} If the function returns `false`, _Date_ type has not been
     * decorated.
     */
    raDateSvcProvider.helper.isDateDecorated = function() {
        return Boolean(decoratorStorage.inConstructor.length || decoratorStorage.inPrototype.length);
    };
    /**
     * @ngdoc method
     * @name raDateSvc:helper#removeDateDecoration
     * @methodOf raDateSvc:helper
     * @description Removes the decoration of the _Date_ type.
     */
    raDateSvcProvider.helper.removeDateDecoration = function() {
        if (raDateSvcProvider.helper.isDateDecorated()) {
            angular.forEach(decoratorStorage.inConstructor, function(memberToRemove) {
                if (Date.hasOwnProperty(memberToRemove)) {
                    delete Date[memberToRemove];
                }
            });
            decoratorStorage.inConstructor = [];
            angular.forEach(decoratorStorage.inPrototype, function(memberToRemove) {
                if (Date.prototype.hasOwnProperty(memberToRemove)) {
                    delete Date.prototype[memberToRemove];
                }
            });
            decoratorStorage.inPrototype = [];
        }
    };
    /**
     * @ngdoc method
     * @name mobile-toolkit-ra.raDateSvcProvider#$get
     * @methodOf mobile-toolkit-ra.raDateSvcProvider
     * @returns {Object} An instance of the _raDateSvc_ service.
     * @description Creates and returns an instance of _raDateSvc_.
     */
    raDateSvcProvider.$get = [ "$translate", "raTranslateHandlerSvc", function($translate, raTranslateHandlerSvc) {
        /**
         * @ngdoc service
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra.service:raDateSvc
         * @description The _raDateSvc_ service that allows to do additional operations on
         * the dates.
         *
         * By default the service decorates also the _Date_ type. Thanks to this
         * you can use methods described below directly from the date object skipping the first
         * parameter. So in order to use `addMonths(...)`, you can just use:
         *
         * <pre>
         *     var currentDate = new Date();
         *     ...
         *     // As the result the currentDate will be shifted three months forward
         *     currentDate.addMonths(3);
         *     ...
         *     // As the result the currentDate will be shifted one month backward
         *     currentDate.addMonths(-1);
         *     ...
         * </pre>
         *
         * As it was mentioned the extension of the _Date_ type is enabled by default, however, you
         * can disable it by using the `canDecorateDatePrototype` property of
         * {@link mobile-toolkit-ra.raDateSvcProvider raDateSvcProvider}. In this case
         * you will be able to invoke methods listed below only from the _raDateSvc_ service,
         * and the code of the example above  may look as follows:
         *
         * <pre>
         *     var currentDate = new Date();
         *     ...
         *     // As the result the currentDate will be shifted three months forward
         *     raDateSvc.addMonths(currentDate, 3);
         *     ...
         *     // As the result the currentDate will be shifted one month backward
         *     raDateSvc.addMonths(currentDate, -1);
         *     ...
         * </pre>
         *
         * @example
         *
         * <example module="dateUtilExampleOne">
         *   <file name="script.js">
         *      angular.module('dateUtilExampleOne', ['mobile-toolkit-ra'])
         *      .controller('dateUtilExampleOneCtrl', ['$scope', '$filter', 'raDateSvc',
         *                  function ($scope, $filter, raDateSvc) {
         *          "use strict";
         *
         *          var dateFormat = 'MM/dd/yyyy hh:mm:ss a',
         *              dateFormatter = $filter('date'),
         *              defaultDate = new Date(2012, 1, 29, 17, 40, 13);
         *
         *              function getErrorMessage(exception) {
         *                 return 'ERROR: ' + exception.message;
         *              }
         *
         *              // Using methods from the extended prototype of Date
         *              $scope.datePrototype = {
         *                  isLeapYear: {
         *                      dateText: dateFormatter(defaultDate, dateFormat),
         *                      result: null,
         *                      calculate: function () {
         *                          var isLeapYearContent = $scope.datePrototype.isLeapYear,
         *                              dateToCalculate;
         *
         *                          try {
         *                              dateToCalculate = new Date(isLeapYearContent.dateText);
         *                              isLeapYearContent.dateText = dateFormatter(dateToCalculate, dateFormat);
         *                              //isLeapYear() is used as a method of Date object
         *                              isLeapYearContent.result = dateToCalculate.isLeapYear();
         *                          } catch (excp) {
         *                              isLeapYearContent.result = getErrorMessage(excp);
         *                          }
         *                      }
         *                  },
         *                  addMonths: {
         *                      dateText: dateFormatter(defaultDate, dateFormat),
         *                      months: -13,
         *                      result: null,
         *                      calculate: function () {
         *                          var addMonthsContent = $scope.datePrototype.addMonths,
         *                              dateToCalculate,
         *                              monthsToAdd;
         *
         *                          try {
         *                              dateToCalculate = new Date(addMonthsContent.dateText);
         *                              monthsToAdd = parseInt(addMonthsContent.months);
         *
         *                              addMonthsContent.dateText = dateFormatter(dateToCalculate, dateFormat);
         *                              //addMonths() is used as a method of Date object
         *                              addMonthsContent.result = dateFormatter(
         *                                      dateToCalculate.addMonths(monthsToAdd),
         *                                      dateFormat
         *                              );
         *                          } catch (excp) {
         *                              addMonthsContent.result = getErrorMessage(excp);
         *                          }
         *                      }
         *                  }
         *              };
         *              // Using methods from raDateSvc
         *              $scope.dateService = {
         *                  isLeapYear: {
         *                      dateText: dateFormatter(defaultDate, dateFormat),
         *                      result: null,
         *                      calculate: function () {
         *                          var isLeapYearContent = $scope.dateService.isLeapYear,
         *                              dateToCalculate;
         *
         *                          try {
         *                              dateToCalculate = new Date(isLeapYearContent.dateText);
         *                              isLeapYearContent.dateText = dateFormatter(dateToCalculate, dateFormat);
         *                              //isLeapYear() is used as a method of raDateSvc service
         *                              isLeapYearContent.result = raDateSvc.isLeapYear(dateToCalculate);
         *                          } catch (excp) {
         *                              isLeapYearContent.result = getErrorMessage(excp);
         *                          }
         *                      }
         *                  },
         *                  addMonths: {
         *                      dateText: dateFormatter(defaultDate, dateFormat),
         *                      months: -13,
         *                      result: null,
         *                      calculate: function () {
         *                          var addMonthsContent = $scope.dateService.addMonths,
         *                              dateToCalculate,
         *                              monthsToAdd;
         *
         *                          try {
         *                              dateToCalculate = new Date(addMonthsContent.dateText);
         *                              monthsToAdd = parseInt(addMonthsContent.months);
         *
         *                              addMonthsContent.dateText = dateFormatter(dateToCalculate, dateFormat);
         *                              //addMonths() is used as a method of raDateSvc service
         *                              addMonthsContent.result = dateFormatter(
         *                                      raDateSvc.addMonths(dateToCalculate, monthsToAdd),
         *                                      dateFormat
         *                              );
         *                          } catch (excp) {
         *                              addMonthsContent.result = getErrorMessage(excp);
         *                          }
         *                      }
         *                  }
         *              };
         *      }]);
         *   </file>
            <file name="index.html">
                <div ng-controller="dateUtilExampleOneCtrl">
                    <div class="container-fluid">
                        <div class="row">
                           <h3>Date prototype:</h3>
                        </div>
                        <!-- isLeapYear and year passed as a date -->
                        <div class="row">
                           <div class="col-xs-8">
                               <input type="text" ng-model="datePrototype.isLeapYear.dateText"/>
                               <button style="vertical-align: top"
                                       ng-click="datePrototype.isLeapYear.calculate()">
                                   Date.isLeapYear()
                               </button>
                           </div>
                           <div class="col-xs-4">
                               <span>{{datePrototype.isLeapYear.result}}</span>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-xs-8">
                               <input type="text" ng-model="datePrototype.addMonths.dateText"/>
                               <input type="number"
                                      style="width: 10%"
                                      ng-model="datePrototype.addMonths.months"/>
                               <button style="vertical-align: top"
                                       ng-click="datePrototype.addMonths.calculate()">
                                   Date.addMonths(...)
                               </button>
                           </div>
                           <div class="col-xs-4">
                               <span>{{datePrototype.addMonths.result}}</span>
                           </div>
                        </div>

                        <div class="row">
                           <h3>Service raDateSvc:</h3>
                        </div>
                        <!-- isLeapYear and year passed as a date -->
                        <div class="row">
                           <div class="col-xs-8">
                               <input type="text" ng-model="dateService.isLeapYear.dateText"/>
                               <button style="vertical-align: top"
                                       ng-click="dateService.isLeapYear.calculate()">
                                   raDateSvc.isLeapYear(...)
                               </button>
                           </div>
                           <div class="col-xs-4">
                               <span>{{dateService.isLeapYear.result}}</span>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-xs-8">
                               <input type="text" ng-model="dateService.addMonths.dateText"/>
                               <input type="number"
                                      style="width: 10%"
                                      ng-model="dateService.addMonths.months"/>
                               <button style="vertical-align: top"
                                       ng-click="dateService.addMonths.calculate()">
                                   raDateSvc.addMonths(...)
                               </button>
                           </div>
                           <div class="col-xs-4">
                               <span>{{dateService.addMonths.result}}</span>
                           </div>
                        </div>
                    </div>
                </div>
            </file>
         * </example>
         */
        var raDateSvc = {};
        var updateTranslation = function() {
            messages = {
                errorArgumentDateOrYearMustBeDateOrNumber: $translate.instant("RA_DATE.ARGUMENT_DATEORYEAR_MUST_BE_DATE_OR_NUMBER"),
                errorArgumentDateMustBeDate: $translate.instant("RA_DATE.ARGUMENT_DATE_MUST_BE_DATE"),
                errorArgumentMonthMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_MONTH_MUST_BE_NUMBER"),
                errorArgumentMonthsMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_MONTHS_MUST_BE_NUMBER"),
                errorArgumentDaysMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_DAYS_MUST_BE_NUMBER"),
                errorArgumentHoursMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_HOURS_MUST_BE_NUMBER"),
                errorArgumentMinutesMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_MINUTES_MUST_BE_NUMBER"),
                errorArgumentSecondsMustBeNumber: $translate.instant("RA_DATE.ARGUMENT_SECONDS_MUST_BE_NUMBER"),
                errorArgumentMonthShouldHaveValueBetween0And11: $translate.instant("RA_DATE.ARGUMENT_MONTH_SHOULD_HAVE_VALUE_BETWEEN_0_AND_11")
            };
        };
        updateTranslation();
        raTranslateHandlerSvc.onTranslate(function() {
            updateTranslation();
        });
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#isLeapYear
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Checks if the given year is a leap year.
         * @param {Date|number} dateOrYear The date or the year that is checked.
         * @returns {boolean} Returns true if the year is a leap year.
         */
        raDateSvc.isLeapYear = isLeapYear;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#getDaysInMonth
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Returns the number of days in a month of a given year.
         * @param {Date|number} dateOrYear The Date or the year that is used to check
         * the number of days in given month.
         * @param {number=} [month] Optional parameter that is used in case the `dateOrYear`
         * parameter is type of number and it represents the year.
         *
         * <div class="alert alert-danger" role="alert">
         *     **Warning:** Please pay attention that the values of the _month_ parameter are in range 0..11,
         *     where 0 means _January_ and 11 _December_
         * </div>
         *
         * @returns {number} Number of days in a month for the given year.
         *
         */
        raDateSvc.getDaysInMonth = getDaysInMonth;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#addSeconds
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Calculates a new date by adding a given number of seconds.
         * @param {Date} date The date to which the seconds will be added.
         * @param {number} seconds The number of seconds to add. The negative value
         * means the number of seconds to subtract.
         * @returns {Date} A calculated date after adding a number of seconds.
         * It is the same instance of the date object that is passed as the parameter
         * of the function.
         */
        raDateSvc.addSeconds = addSeconds;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#addMinutes
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Calculates a new date by adding a given number of minutes.
         * @param {Date} date The date to which the minutes will be added.
         * @param {number} seconds The number of minutes to add. The negative value
         * means the number of minutes to subtract.
         * @returns {Date} A calculated date after adding a number of minutes.
         * It is the same instance of the date object that is passed as the parameter
         * of the function.
         */
        raDateSvc.addMinutes = addMinutes;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#addHours
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Calculates a new date by adding a given number of hours.
         * @param {Date} date The date to which the hours will be added.
         * @param {number} seconds The number of hours to add. The negative value
         * means the number of hours to subtract.
         * @returns {Date} A calculated date after adding a number of hours.
         * It is the same instance of the date object that is passed as the parameter
         * of the function.
         */
        raDateSvc.addHours = addHours;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#addDays
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Calculates a new date by adding a given number of days.
         * @param {Date} date The date to which the days will be added.
         * @param {number} days The number of days to add. The negative value
         * means the number of days to subtract.
         * @returns {Date} A calculated date after adding a number of days.
         * It is the same instance of the date object that is passed as the parameter
         * of the function.
         */
        raDateSvc.addDays = addDays;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raDateSvc#addMonths
         * @methodOf mobile-toolkit-ra.service:raDateSvc
         * @description Calculates a new date by adding a given number of months.
         * @param {Date} date The date to which the months will be added.
         * @param {number} months The number of months to add. The negative value
         * means the number of months to subtract.
         * @returns {Date} A calculated date after adding a number of months.
         * It is the same instance of the date object that is passed as the parameter
         * of function.
         */
        raDateSvc.addMonths = addMonths;
        /**
         * @ngdoc property
         * @name mobile-toolkit-ra.service:raDateSvc:helper
         * @propertyOf mobile-toolkit-ra.service:raDateSvc
         * @description A helper object for decorating the _Date_ type. For more
         * information see: {@link raDateSvc:helper
         * raDateSvc.helper}
         */
        raDateSvc.helper = raDateSvcProvider.helper;
        return raDateSvc;
    } ];
});

// jsHint Global variables
/* global angular */
/* global moment */
/**
 * @ngdoc directive
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.directive:raDateTimePicker
 * @restrict AE
 * @param {expression} value Date and time value. This parameter is bidirectional so
 * you can set and get the value from _raDateTimePicker_.
 *
 * In case when the user
 * enters empty value into input field the returning value will be equal to __null__.
 * In case when the user enters invalid string value or the string has incorrect date
 * and time format the raDateTimePicker will return date object as __Invalid Date__.
 *
 * @param {expression=} config Optional initial configuration object that is fully
 * compatible with eonasdan-bootstrap-datetimepicker.
 *
 * For more information about available options please see
 * {@link http://eonasdan.github.io/bootstrap-datetimepicker/#options eonasdan-bootstrap-datetimepicker
 * documentation}
 *
 * @param {expression=} dateFormat Optional date and time format compatible
 * with {@link http://momentjs.com/docs/#/parsing/ MomentJs} library. By default this
 * format is equal to `'MM/DD/YYY h:mm a'`
 * @param {expression=} minDate Optional minimum date and time value. This parameter
 * is bidirectional.
 * @param {expression=} maxDate Optional maximum date and time value. This parameter
 * is bidirectional.
 * @param {expression=} isDisabled Optional disable component. By default the component is enabled.
 *
 * @description Directive that wraps third-party DateTimePicker widget provided by
 * {@link http://eonasdan.github.io/bootstrap-datetimepicker/ eonasdan-bootstrap-datetimepicker}
 * library. Since the mentioned library requires also the {@link http://momentjs.com/ MomentJs}
 * for date parsing and manipulating you should remember to add both of these libraries
 * into your app index.html file.
 *
 * For more information about eonasdan-bootstrap-datetimepicker and MomentJs please see:
 *
 *   {@link http://eonasdan.github.io/bootstrap-datetimepicker/}
 *
 *   {@link https://github.com/Eonasdan/bootstrap-datetimepicker}
 *
 *   {@link http://momentjs.com/}
 *
 * In order to properly use _raDateTimePicker directive you must include
 * [the bootstrap-datetimepicker ](#/nonapi/addingThirdPartyDependencies.md#using-radatetimepicker)
 * library first.
 * @example
 * # Simple usage
 *
 * Passing appropriate $scope member as an expression of _value_ attribute you can set and get
 * a date and time like below:
 *
 * <example module="exampleApp">
 * <file name="index.html">
 * <div ng-controller="MyCtrl" class="date-picker-example">
 *     <button class="btn btn-primary" ng-click="changeDate()">
 *          Current date
 *     </button>
 *     <button class="btn btn-primary" ng-click="clearDate()">
 *          Clear
 *     </button>
 *     <ra-date-time-picker value="dateValue">
 *     </ra-date-time-picker>
 *     <textarea class="form-control" rows="12" ng-bind="dateChanges"></textarea>
 * </div>
 * </file>
 * <file name="script.js">
 * var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 *
 * myModule.controller('MyCtrl', ['$scope', function ($scope) {
 *      "use strict";
 *
 *      // Initial value of date and time
 *      $scope.dateValue = new Date('2014-04-06T00:00:00-07:00');
 *
 *      // Changes to current value
 *      $scope.changeDate = function () {
 *         $scope.dateValue = new Date();
 *      };
 *
 *      // Setting null you can clear raDateTimePicker input field
 *      $scope.clearDate = function () {
 *          $scope.dateValue = null;
 *      };
 *
 *      // Since 'value' attribute of directive is bidirectional you
 *      // can trace the value changes
 *      $scope.dateChanges = '';
 *      $scope.$watch('dateValue', function () {
 *          $scope.dateChanges += 'DateAndTime = ' + $scope.dateValue + '\n';
 *      });
 *
 * }]);
 * </file>
 * </example>
 *
 * # Setting date time format
 *
 * By default the date time format is set to: `'MM/DD/YYY h:mm a'` but using `date-format`
 * attribute you can set the new one.
 *
 * <pre>
 * ...
 * <ra-date-time-picker
 *      value="dateValue"
 *      date-format="DD-MM-YYYY HH:mm">
 * </ra-date-time-picker>
 * ...
 * </pre>
 *
 *
 * # Passing configuration object
 *
 * Since _raDateTimePicker_ is created on top of _bootstrap-datetimepicker_ that
 * uses configuration object you can pass this object using `config` attribute.
 * Thanks to this you can enable seconds picker that is disabled by default.
 *
 * #### HTML Page
 *
 * <pre>
 * ...
 * <ra-date-time-picker
 *      value="dateValue"
 *      config="{{dateTimePickerConfig}}">
 * </ra-date-time-picker>
 * ...
 * </pre>
 *
 * #### Controller
 *
 * <pre>
 * myModule.controller('MyCtrl', ['$scope', function ($scope) {
 *      ...
 *      // Enables seconds picker
 *      $scope.dateTimePickerConfig = {
 *          useSeconds: true
 *      };
 *      ...
 * }]);
 * </pre>
 *
 * For more information about available options please see
 * {@link http://eonasdan.github.io/bootstrap-datetimepicker/#options bootstrap-datetimepicker
 * documentation}
 *
 * # Setting date time range
 *
 * Sometimes you will need to set the min or/and max date to limit
 * allowed range of dates that a user can select. In order to do that you may use
 * `minDate` or/and `maxDate` attributes like below:
 *
 * #### HTML Page
 *
 * <pre>
 * ...
 * <ra-date-time-picker
 *      value="dateValue"
 *      minDate="dateMinValue"
 *      maxDate="dateMaxValue">
 * </ra-date-time-picker>
 * ...
 * </pre>
 *
 * #### Controller
 *
 * <pre>
 * myModule.controller('MyCtrl', ['$scope', function ($scope) {
 *      ...
 *      // Initial value of date and time
 *      $scope.dateValue = new Date('2014-04-06T00:00:00-07:00');
 *
 *      // Sets the start date of the range as the first day of April
 *      $scope.dateMinValue = new Date('2014-04-01T00:00:00-07:00');
 *
 *      // Sets the end date of the range as the last day of April
 *      $scope.dateMaxValue = new Date('2014-04-30T00:00:00-07:00');
 *      ...
 * }]);
 * </pre>
 *
 *  # Disabling the component
 *
 * In order to do that you may use `isDisabled` attribute like below:
 *
 * <example module="exampleApp">
 * <file name="index.html">
 * <div ng-controller="MyCtrl" class="date-picker-example">
 *     <button class="btn btn-primary" ng-click="changeState()">
 *          Disable/Enable
 *     </button>
 *     <ra-date-time-picker
 *          value="dateValue"
 *          minDate="dateMinValue"
 *          maxDate="dateMaxValue"
 *          is-disabled="disabled">
 *     </ra-date-time-picker>
 * </div>
 * </file>
 * <file name="script.js">
 * var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 *
 * myModule.controller('MyCtrl', ['$scope', function ($scope) {
 *      // Initial value of date and time
 *      $scope.dateValue = new Date('2014-04-06T00:00:00-07:00');
 *
 *      // Sets the start date of the range as the first day of April
 *      $scope.dateMinValue = new Date('2014-04-01T00:00:00-07:00');
 *
 *      // Sets the end date of the range as the last day of April
 *      $scope.dateMaxValue = new Date('2014-04-30T00:00:00-07:00');
 *
 *      // Function to enable or disable the component
 *      $scope.changeState = function () {
 *          $scope.disabled = Boolean($scope.disabled);
 *          $scope.disabled = !$scope.disabled;
 *      };
 * }]);
 * </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raDateTimePicker", [ "$templateCache", "raErrorHandlerSvc", "$translate", "raTranslateHandlerSvc", function($templateCache, raErrorHandlerSvc, $translate, raTranslateHandlerSvc) {
    "use strict";
    var openedPicker, messages;
    function preventCircularCalls(options, callbackFn) {
        if (options && options.canDo && angular.isFunction(callbackFn)) {
            options.canDo = !options.canDo;
            callbackFn();
            options.canDo = !options.canDo;
        }
    }
    function elementExists(element) {
        return angular.isElement(element) && element.length;
    }
    function updateTranslation() {
        messages = {
            errorCannotInitializeDatetimePicker: $translate.instant("RA_DATETIMEPICKER.CANNOT_INITIALIZE_DATETIMEPICKER")
        };
    }
    return {
        restrict: "AE",
        template: $templateCache.get("raDateTimePicker/raDateTimePicker.tpl.html"),
        scope: {
            config: "@",
            dateFormat: "@",
            value: "=",
            minDate: "=",
            maxDate: "=",
            isDisabled: "=?"
        },
        link: function($scope, element) {
            var config = {}, picker, pickerElement = element.find(".date"), inputElement = element.find("input"), isInitialized = false, circularCallsOptions = {
                canDo: true
            };
            updateTranslation();
            raTranslateHandlerSvc.onTranslate(function() {
                updateTranslation();
            });
            function isDateInRange(date) {
                var minDate = picker.options.minDate, maxDate = picker.options.maxDate;
                return !(minDate.isValid() && moment(date) < minDate || maxDate.isValid() && moment(date) > maxDate);
            }
            if ($scope.config) {
                angular.extend(config, angular.fromJson($scope.config));
            }
            if ($scope.dateFormat) {
                config.format = $scope.dateFormat;
            }
            if (elementExists(pickerElement)) {
                pickerElement.datetimepicker(config);
                picker = pickerElement.data("DateTimePicker");
                isInitialized = Boolean(picker);
            }
            if (isInitialized) {
                $scope.unregisterDisabledWatcher = $scope.$watch("isDisabled", function(newValue) {
                    if (newValue) {
                        picker.disable();
                    } else {
                        picker.enable();
                    }
                });
                $scope.unregisterValueWatcher = $scope.$watch("value", function(newValue) {
                    preventCircularCalls(circularCallsOptions, function() {
                        picker.setDate(newValue);
                    });
                });
                $scope.unregisterMinDateWatcher = $scope.$watch("minDate", function(newValue) {
                    picker.setMinDate(newValue);
                });
                $scope.unregisterMaxDateWatcher = $scope.$watch("maxDate", function(newValue) {
                    picker.setMaxDate(newValue);
                });
                // dp.change handler is responsible for propagating changes
                // to $scope.value. In this handler only the valid dates are set.
                element.on("dp.change", function() {
                    var newDate = picker.getDate();
                    if (newDate && newDate.isValid()) {
                        preventCircularCalls(circularCallsOptions, function() {
                            $scope.$apply(function() {
                                $scope.value = new Date(newDate);
                            });
                        });
                    }
                });
                // dp.error handler is responsible for propagating information
                // about date value in case when the user manually entered the
                // date.
                element.on("dp.error", function() {
                    var inputValue, newDate;
                    if (elementExists(inputElement)) {
                        inputValue = inputElement.val().trim();
                        newDate = moment(inputValue, picker.format, true);
                        preventCircularCalls(circularCallsOptions, function() {
                            if (!newDate.isValid() || !isDateInRange(newDate)) {
                                // Since the entered date text is invalid $scope.value
                                // will be set to 'Invalid Date' or to null in case
                                // when the text is empty.
                                $scope.$apply(function() {
                                    $scope.value = !inputValue ? null : new Date("Invalid Date");
                                });
                            }
                        });
                    }
                });
                // dp.show handler is responsible for propagating the information
                // about date value changes in case when the user manually enters
                // the date and then he opens the picker (while the input field
                // is still in focus mode).
                element.on("dp.show", function() {
                    var inputValue, newDate, currentDate;
                    if (openedPicker !== picker) {
                        if (openedPicker && "hide" in openedPicker && angular.isFunction(openedPicker.hide)) {
                            openedPicker.hide();
                        }
                        openedPicker = picker;
                        inputElement.focus();
                    }
                    if (elementExists(inputElement)) {
                        inputValue = inputElement.val().trim();
                        newDate = moment(inputValue, picker.format, true);
                        currentDate = picker.getDate();
                        // Makes changes if the dates are different
                        if (newDate.isValid() && (!currentDate || newDate.diff(currentDate)) && isDateInRange(newDate)) {
                            picker.setDate(newDate);
                        }
                    }
                });
                element.on("dp.hide", function() {
                    if (openedPicker === picker) {
                        openedPicker = null;
                    }
                });
                element.on("$destroy", function() {
                    $scope.unregisterDisabledWatcher();
                    $scope.unregisterValueWatcher();
                    $scope.unregisterMinDateWatcher();
                    $scope.unregisterMaxDateWatcher();
                    element.off("dp.change");
                    element.off("dp.error");
                    element.off("dp.show");
                    element.off("dp.hide");
                    if (openedPicker === picker) {
                        openedPicker = null;
                    }
                    if (picker) {
                        picker.destroy();
                    }
                });
            } else {
                raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError(messages.errorCannotInitializeDatetimePicker));
            }
        }
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raDropContent", [ "$templateCache", "$window", "$animate", "$timeout", function($templateCache, $window, $animate, $timeout) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            setApi: "&",
            config: "=?"
        },
        transclude: true,
        template: $templateCache.get("raDropContent/raDropContent.tpl.html"),
        link: function(scope, element, attrs) {
            var currentAnimatePromise, api, isExpanded = false, animatedElement = element.findElement(".ra-drop-content"), absHelperElem = element.findElement(".ra-drop-content-absolute"), absFullHelperElem = element.findElement(".ra-drop-content-full-screen-backdrop"), showContentClass = "ra-drop-content-show", animationClass = "ra-drop-content-anim";
            scope.config = angular.isObject(scope.config) ? scope.config : {};
            scope.backdropClass = angular.isString(scope.config.backdropClass) ? scope.config.backdropClass : "";
            if (scope.config.showBackdrop !== false) {
                scope.showBackdrop = true;
            }
            function showHideContent() {
                if (currentAnimatePromise !== undefined) {
                    $animate.cancel(currentAnimatePromise);
                    currentAnimatePromise = undefined;
                }
                if (scope.showBackdrop) {
                    absFullHelperElem.addClass(showContentClass);
                }
                absHelperElem.addClass(showContentClass);
                if (isExpanded) {
                    currentAnimatePromise = $animate.addClass(animatedElement, animationClass);
                    currentAnimatePromise.then(function done() {
                        currentAnimatePromise = undefined;
                    });
                } else {
                    currentAnimatePromise = $animate.removeClass(animatedElement, animationClass);
                    currentAnimatePromise.then(function done() {
                        currentAnimatePromise = undefined;
                        if (!isExpanded) {
                            if (scope.showBackdrop) {
                                absFullHelperElem.removeClass(showContentClass);
                            }
                            absHelperElem.removeClass(showContentClass);
                            // Reverts the size of container
                            scope.containerSize = {};
                        }
                    });
                }
            }
            scope.collapseContent = function() {
                if (isExpanded) {
                    // Provides to the function the last position of drop content
                    toggleContent(scope.containerAbsPosition);
                    if (scope.config.onCollapse) {
                        scope.config.onCollapse();
                    }
                }
            };
            var expandContent = function(position) {
                if (!isExpanded) {
                    toggleContent(position);
                    if (scope.config.onExpand) {
                        scope.config.onExpand();
                    }
                }
            };
            var toggleContent = function(position) {
                isExpanded = !isExpanded;
                setPosition(position);
                showHideContent();
            };
            var setPosition = function(position) {
                var dropContentElement, targetSize, leftPos = position && position.left || 0, topPos = position && position.top || 0, heightEl;
                scope.containerAbsPosition = position || {};
                scope.containerSize = scope.containerSize || {};
                if (!!scope.config.enableAutoResize && isExpanded) {
                    leftPos += element.prop("offsetLeft");
                    topPos += element.prop("offsetTop");
                    targetSize = {
                        maxWidth: Math.round($window.innerWidth - leftPos),
                        maxHeight: Math.round($window.innerHeight - topPos)
                    };
                    scope.containerSize.maxWidth = targetSize.maxWidth;
                    scope.containerSize.maxHeight = targetSize.maxHeight;
                    // In case when in the .ra-drop-content container appears the scrollbar
                    // need to set the height of this container.
                    // Without these on the IE browser the container is not displayed.
                    $timeout(function() {
                        dropContentElement = angular.element(element.findElement(".ra-drop-content > div"));
                        heightEl = dropContentElement.prop("offsetHeight");
                        scope.containerSize.height = heightEl >= targetSize.maxHeight && targetSize.maxHeight || undefined;
                    });
                }
            };
            setPosition();
            if (attrs.setApi) {
                api = {
                    collapse: scope.collapseContent,
                    expand: expandContent,
                    toggle: toggleContent,
                    setPosition: setPosition
                };
                Object.defineProperty(api, "isExpanded", {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return isExpanded;
                    },
                    set: undefined
                });
                scope.setApi({
                    api: api
                });
            }
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").provider("raErrorCollectorSvc", [ function() {
    "use strict";
    var communicationECtrlName, generalECtrlName, errorDescMaxLength = 300, generalErrorShown = false, collectorConstants = {
        COMMUNICATION_ERROR_TITLE: "RA_ERROR_COLLECTOR.COMMUNICATION_ERROR_TITLE",
        COMMUNICATION_ERROR_MESSAGE: "RA_ERROR_COLLECTOR.COMMUNICATION_ERROR_MESSAGE",
        GENERAL_ERROR_TITLE: "RA_ERROR_COLLECTOR.GENERAL_ERROR_TITLE",
        GENERAL_ERROR_MESSAGE: "RA_ERROR_COLLECTOR.GENERAL_ERROR_MESSAGE"
    };
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raErrorCollectorSvcProvider#setCommunicationErrorCtrlName
         * @methodOf mobile-toolkit-ra.raErrorCollectorSvcProvider
         * @param {string} communicationErrorCtrlName The name of the controller
         * @description Registers communication error controller name. This controller
         * is responsible for controlling the data passed to the raCommunicationErrorOverlay.tpl.html
         *
         * The controller takes $scope and config objects as dependencies. The second one is responsible
         * for setting the title and confirmation message
         * The following are the properties of the config object:
         *
         * ## Configuration properties
         *
         * | Name             | Type            | Details                                            |
         * |------------------|-----------------|----------------------------------------------------|
         * | title            | {@type string}  | The title                                          |
         * | confirmationDesc | {@type string}  | The confirmation description                       |
         */
    this.setCommunicationErrorCtrlName = function(communicationErrorCtrlName) {
        communicationECtrlName = communicationErrorCtrlName;
    };
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raErrorCollectorSvcProvider#setGeneralErrorCtrlName
         * @methodOf mobile-toolkit-ra.raErrorCollectorSvcProvider
         * @param {string} generalErrorCtrlName The name of the controller
         * @description Registers general error controller name. This controller
         * is responsible for controlling the data passed to the raGeneralErrorOverlay.tpl.html
         *
         * The controller takes $scope and config objects as dependencies. The second one is responsible
         * for setting the title, confirmation message and the details
         * The following are the properties of the config object:
         *
         * ## Configuration properties
         *
         * | Name             | Type            | Details                                            |
         * |------------------|-----------------|----------------------------------------------------|
         * | title            | {@type string}  | The title                                          |
         * | confirmationDesc | {@type string}  | The confirmation description                       |
         * | details          | {@type string}  | The detailed information                           |
         */
    this.setGeneralErrorCtrlName = function(generalErrorCtrlName) {
        generalECtrlName = generalErrorCtrlName;
    };
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raErrorCollectorSvcProvider#setErrorDescMaxLength
         * @methodOf mobile-toolkit-ra.raErrorCollectorSvcProvider
         * @param {number} errorDescLen The maximum length of the error description
         * @description Sets the maximum length  of general error description. If the length
         * of the actual error description exceeds provided value, default error message is displayed.
         */
    this.setErrorDescMaxLength = function(errorDescLen) {
        errorDescMaxLength = errorDescLen;
    };
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raErrorCollectorSvcProvider#$get
         * @methodOf mobile-toolkit-ra.raErrorCollectorSvcProvider
         * @returns {Object} Instance of _raErrorCollectorSvc_ service
         * @description Creates and returns instance of _raErrorCollectorSvc_
         */
    this.$get = [ "raOverlaySvc", "$q", "$templateCache", "raErrorHandlerSvc", "$translate", "raTranslateHandlerSvc", function(raOverlaySvc, $q, $templateCache, raErrorHandlerSvc, $translate, raTranslateHandlerSvc) {
        var updateTranslation = function() {
            // Update the messages using $translate service
            angular.forEach(collectorConstants, function(key, value) {
                $translate(key).then(function(message) {
                    collectorConstants[value] = message;
                });
            });
        };
        updateTranslation();
        raTranslateHandlerSvc.onTranslate(function() {
            updateTranslation();
        });
        var httpDefer = null;
        var resolveHttpPromise = function(doRetry) {
            if (httpDefer !== null) {
                httpDefer.resolve(doRetry);
                httpDefer = null;
            }
        };
        /**
                 * @ngdoc service
                 * @module mobile-toolkit-ra
                 * @name mobile-toolkit-ra.service:raErrorCollectorSvc
                 * @description
                 * The _raErrorCollectorSvc_ service is used to collect errors and show the users
                 * appropriate information using the UI overlay.<br>
                 * There are two types of supported errors:
                 * <ol type="1">
                 * <li>http/communication
                 *     <ul>
                 *       <li>The service collects errors using the addHttpError function</li>
                 *       <li>The errors are fired by the raHttpErrorInterceptorSvc</li>
                 *       <li>
                 *           The interceptor should be added at the app.config level using the following command:
                 *           <code>
                 *             $httpProvider.interceptors.push('raHttpErrorInterceptorSvc');
                 *           </code>
                 *       </li>
                 *       <li>The overlay users can do either of the following:
                 *       <ul>
                 *         <li>_Retry_ the last problematic $http operation or more operations</li>
                 *         <li>Go to the _Home_ page</li>
                 *       </ul>
                 *     </li>
                 *     </ul>
                 * </li>
                 * <li>general
                 *     <ul>
                 *       <li>The service collects errors using addError function</li>
                 *       <li>The errors are fired by any exception in the app, or propagated
                 *       to the raErrorHandlerSvc service using the propagate method</li>
                 *       <li>The errors should be added to this services using the raErrorListenersSvc's listeners,
                 *       which should be configured at the app.run level</li>
                 *       <li>The overlay users can go to the _Home_ page or _Close_ the overlay</li>
                 * </ol>
                 *
                 * For each of the supported errors there is a custom template defined
                 * which is responsible for the UI representation.
                 * Both templates are stored in the template cache using _$templateCache_.
                 * If you decide to modify the template layout you must store it under the keys listed below
                 *  <ul>
                 *       <li>raErrorCollectorSvc/raCommunicationErrorOverlay.tpl.html</li>
                 *       <li>raErrorCollectorSvc/raGeneralErrorOverlay.tpl.html</li>
                 *  </ul>
                 *
                 *
                 * <div class="alert alert-danger" role="alert">
                 *     **Note:** Mentioned controllers must be configured at app.config
                 *     stage with functions
                 *     {@link mobile-toolkit-ra.raErrorCollectorSvcProvider#methods_setcommunicationerrorctrlname
                 *     _setCommunicationErrorCtrlName_}
                 *     and {@link mobile-toolkit-ra.raErrorCollectorSvcProvider#methods_setgeneralerrorctrlname
                 *     _setGeneralErrorCtrlName_}.
                 * </div>
                 *
                 * @example
                 *
                 * <example module="listenerExampleOne">
                 *      <file name="script.js">
                 *           angular.module('listenerExampleOne', ['mobile-toolkit-ra'])
                 *               .config(
                 *               [
                 *                   '$httpProvider', 'raErrorCollectorSvcProvider',
                 *                   function ($httpProvider, raErrorCollectorSvcProvider) {
                 *                       "use strict";
                 *                       // Errors UI controller names are application specific
                 *                       // and should be configured here
                 *                       raErrorCollectorSvcProvider
                 *                          .setCommunicationErrorCtrlName('raCommunicationErrorCtrl');
                 *                       raErrorCollectorSvcProvider
                 *                          .setGeneralErrorCtrlName('raGeneralErrorCtrl');
                 *                       // Set the maximum length of the error description
                 *                       raErrorCollectorSvcProvider.setErrorDescMaxLength(100);
                 *                       // Registering raHttpErrorInterceptorSvc
                 *                       $httpProvider.interceptors.push('raHttpErrorInterceptorSvc');
                 *                   }
                 *               ]
                 *           )
                 *               .run(['raErrorHandlerSvc', 'raErrorListenersSvc',
                 *                   function (raErrorHandlerSvc, raErrorListenersSvc) {
                 *                       "use strict";
                 *                       // Registering custom error listener
                 *                       raErrorListenersSvc.add(
                 *                           raErrorHandlerSvc.events.ERROR_APPEARED,
                 *                           function ($event, exception, cause, target) {
                 *                               // Handling RAError only that has not yet been handled
                 *                               if (!exception.isHandled && raErrorHandlerSvc.isRAError(exception)) {
                 *                                   alert('Main Listener\n' +
                 *                                       'Error message: ' + exception.message + '\n' +
                 *                                       'Cause: ' + angular.toJson(cause) +
                 *                                       (target ? '\nTarget: ' + target : ''));
                 *                                   // If you mark exception as handled it won't be propagated to
                 *                                   // $exceptionHandler to show in console log.
                 *                                   exception.markAsHandled();
                 *                               }
                 *                           }
                 *                       );
                 *                   }]);
                 *
                 *           angular.module('listenerExampleOne')
                 *               .controller('raErrorCollectorExampleCtrl', ['$scope', 'raErrorCollectorSvc',
                 *                   'raErrorHandlerSvc', 'raErrorListenersSvc',
                 *                   function ($scope, raErrorCollectorSvc, raErrorHandlerSvc, raErrorListenersSvc) {
                 *                       
                 *                       "use strict";
                 *                       // Local implementation of error listener
                 *                       $scope.myListener = function ($event, exception, cause, target) {
                 *                           // Handling RAError only that has not yet been handled
                 *                           if (!exception.isHandled && raErrorHandlerSvc.isRAError(exception)) {
                 *                               alert('Controller Listener\n' +
                 *                                   'Error message: ' + exception.message + '\n' +
                 *                                   'Cause: ' + angular.toJson(cause) +
                 *                                   (target ? '\nTarget: ' + target : ''));
                 *                               // In order for other error listeners to be able trace an errors
                 *                               // we don't mark this error as handled
                 *                               // adding error to raErrorCollectorSvc
                 *                               raErrorCollectorSvc.addError(exception,
                 *                                   raErrorHandlerSvc.ui.isErrorButtonsList(target) ?
                 *                                   target.errorButtonList : "");
                 *                           }
                 *                       };
                 *
                 *                       // Registering the error listener defined above. This listener is
                 *                       // registered at the beginning of the listener list to be able to catch
                 *                       // all errors before they will be handled. As the result of addFirst()
                 *                       // method we get the special function to un-register this listener.
                 *                       $scope.unregisterMyListener = raErrorListenersSvc.addFirst(
                 *                           raErrorHandlerSvc.events.ERROR_APPEARED,
                 *                           $scope.myListener
                 *                       );
                 *
                 *                       // You must always unregister the error listener that is defined
                 *                       // within the $scope.
                 *                       $scope.$on('$destroy', function () {
                 *                           if (angular.isFunction($scope.unregisterMyListener)) {
                 *                               // To unregister we can use appropriate function returned by
                 *                               // raErrorListenersSvc.addFirst() or raErrorListenersSvc.add() method
                 *                               $scope.unregisterMyListener();
                 *                           }
                 *                       });
                 *
                 *                       // Propagates RAError using propagate method
                 *                       $scope.propagateRAError = function () {
                 *                           raErrorHandlerSvc.propagate(
                 *                               raErrorHandlerSvc.getRAError('Simple RA Error 2',
                 *                                  {status: 'Bad data'})
                 *                           );
                 *                       };
                 *
                 *                   }])
                 *
                 *               .controller('raGeneralErrorCtrl', ['$scope', 'config', 'RA_MESSAGE_TYPE',
                 *                   function ($scope, config, RA_MESSAGE_TYPE) {
                 *                       "use strict";
                 *                       var buttons = (function () {
                 *                           if (config.buttons && config.buttons.length) {
                 *                               return config.buttons;
                 *                           }
                 *
                 *                           // if buttons are not defined, use default settings (close, cancel)
                 *                           return [
                 *                               {
                 *                                   "label": "Close",
                 *                                   "action": "close"
                 *                               },
                 *                               {
                 *                                   "label": "Cancel",
                 *                                   "action": "close"
                 *                               }
                 *
                 *                           ];
                 *                       }());
                 *
                 *                       $scope.clickAction = function () {
                 *                           $scope.$close();
                 *                       };
                 *
                 *                       $scope.messageType = RA_MESSAGE_TYPE.ERROR;
                 *
                 *                       $scope.content = {
                 *                           "title": config.title,
                 *                           "confirmationDesc": config.confirmationDesc,
                 *                           "details": config.details,
                 *                           "buttons": buttons
                 *                       };
                 *                   }]);
                 *
                 *      </file>
                 *
                 *      <file name="index.html">
                 *
                 *       <div ng-controller="raErrorCollectorExampleCtrl" class="ra-overlay-example">
                 *         <div class="container-fluid">
                 *           <div class="row">
                 *               <span>
                 *                   If you click the button below the alert window will be shown twice.
                 *                   The first alert window will be open by the error listener registered
                 *                   in the controller.
                 *                   The second one comes from the main error listener registered in the module.
                 *                   At the end the overlay called by the raErrorCollectorSvc will be shown.
                 *               </span>
                 *           </div>
                 *           <div class="row">
                 *               <button ng-click="propagateRAError()">
                 *                   Throw RAError
                 *               </button>
                 *           </div>
                 *         </div>
                 *       </div>
                 *
                 *      </file>
                 * </example>
                 */
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raErrorCollectorSvc#addHttpError
                 * @methodOf mobile-toolkit-ra.service:raErrorCollectorSvc
                 * @param {Object} error The object that contains information about HTTP error.
                 * @returns {Object} returns Promise, which always will be resolved with onSuccess function,
                 *          but as an argument will return
                 *          <ul>
                 *           <li>true - if http operation should be retried</li>
                 *           <li>false - if http operation should report error</li>
                 *          </ul>
                 *          This function can return the same promise for more than one concurrent
                 *          http operation, which will be retried or cancelled by raHttpErrorInterceptorSvc
                 *          with one decision on overlay
                 * @description
                 * Adds communication error an shows the overlay with Retry and Home buttons
                 */
        var addHttpError = function(error) {
            var desc = collectorConstants.COMMUNICATION_ERROR_MESSAGE;
            if (error && error.data && angular.isString(error.data) && error.data.length < errorDescMaxLength) {
                desc = error.data;
            }
            if (desc.substr(-1) !== ".") {
                desc += ".";
            }
            if (httpDefer === null) {
                httpDefer = $q.defer();
                if (angular.isDefined(communicationECtrlName)) {
                    raOverlaySvc.open(communicationECtrlName, {
                        title: collectorConstants.COMMUNICATION_ERROR_TITLE,
                        confirmationDesc: desc
                    }, // Since used template is loaded to the template cache by mobile-toolkit-ra
                    // mechanism we can get it directly from there passing it as a last parameter of
                    // raOverlaySvc.open. Thanks to this we don't need to pass templateUrl
                    // therefore the parameter below is set as undefined.
                    undefined, "ra-message-overlay", // We get pure template directly from cache passing it as a last parameter of
                    // raOverlaySvc.open() method.
                    $templateCache.get("raErrorCollectorSvc/raCommunicationErrorOverlay.tpl.html")).result.then(function yesNo(doRetry) {
                        resolveHttpPromise(doRetry);
                    }, function dismiss() {
                        resolveHttpPromise(false);
                    });
                } else {
                    raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError("raErrorCollectorSvc", "communicationErrorCtrlName is not configured!"));
                }
            }
            return httpDefer.promise;
        };
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raErrorCollectorSvc#addError
                 * @methodOf mobile-toolkit-ra.service:raErrorCollectorSvc
                 * @param {Object} error The object that contains information about the error.
                 * @param {Array} buttons A list of objects defining buttons. Please see an example below
                 * @description
                 * Adds the general error an shows the overlay with Home and Close buttons
                 * @example
                 *
                 * <pre>
                 * ...
                 * // The code below contains definition of the list of buttons.
                 * // The content strongly depends on the controller defined in the provider
                 * //
                 * "ERROR_CONFIRMATION_BUTTONS",
                 * {
                 *    "HOME" : {"label" : "Home", "action" : "home"},
                 *    "CLOSE" : {"label" : "Close", "action" : "close"},
                 *    "BACK" : {"label" : "Back", "action" : "back"}
                 * })
                 * ...
                 * </pre>
                 */
        var addError = function(error, buttons) {
            var errorMessage = "";
            if (raErrorHandlerSvc.isError(error)) {
                errorMessage = error.message;
            }
            if (angular.isDefined(generalECtrlName)) {
                // block displaying new errors if the error message is displayed
                if (!generalErrorShown) {
                    generalErrorShown = true;
                    raOverlaySvc.open(generalECtrlName, {
                        title: collectorConstants.GENERAL_ERROR_TITLE,
                        confirmationDesc: collectorConstants.GENERAL_ERROR_MESSAGE,
                        details: errorMessage,
                        buttons: buttons
                    }, // Since used template is loaded to the template cache by mobile-toolkit-ra
                    // mechanism we can get it directly from there passing it as a last parameter of
                    // raOverlaySvc.open. Thanks to this we don't need to pass templateUrl
                    // therefore the parameter below is set as undefined.
                    undefined, "ra-message-overlay", // We get pure template directly from cache passing it as a last parameter of
                    // raOverlaySvc.open() method.
                    $templateCache.get("raErrorCollectorSvc/raGeneralErrorOverlay.tpl.html")).result["finally"](function() {
                        generalErrorShown = false;
                    });
                }
            } else {
                raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError("raErrorCollectorSvc", "generalECtrlName is not configured!"));
            }
        };
        return {
            addHttpError: addHttpError,
            addError: addError
        };
    } ];
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").config([ "$provide", function($provide) {
    "use strict";
    $provide.decorator("$exceptionHandler", [ "$delegate", "$injector", function($delegate, $injector) {
        function getErrorHandler() {
            return $injector.has("raErrorHandlerSvc") ? $injector.get("raErrorHandlerSvc") : undefined;
        }
        return function(exception, cause, target) {
            var raErrorHandlerSvc = getErrorHandler(), exceptionCause = cause, isErrorHandled = false, canExceptionHandlerOnly = false, result;
            if (raErrorHandlerSvc && raErrorHandlerSvc.getCanExceptionHandlerBroadcast()) {
                canExceptionHandlerOnly = raErrorHandlerSvc.canExceptionHandlerOnly(exception);
                if (!canExceptionHandlerOnly) {
                    if (!exceptionCause && exception.cause) {
                        exceptionCause = exception.cause;
                    }
                    result = raErrorHandlerSvc.helper.errorAppeared(exception, exceptionCause, target);
                    isErrorHandled = raErrorHandlerSvc.isHandled(exception);
                }
            }
            if (!isErrorHandled) {
                $delegate(exception, exceptionCause);
            }
            return result;
        };
    } ]);
} ]).provider("raErrorHandlerSvc", function() {
    "use strict";
    var raErrorHandlerSvcProvider = this, RAError, RAHTTPError, errorName, duringBroadcast = {};
    /**
     * @ngdoc property
     * @name mobile-toolkit-ra.raErrorHandlerSvcProvider#canExceptionHandlerBroadcast
     * @propertyOf mobile-toolkit-ra.raErrorHandlerSvcProvider
     * @type {boolean}
     * @description If set `true` it enables error broadcasting by
     * _$exceptionHandler_ service otherwise broadcasting is invoked
     * from _raErrorHandlerSvc_ service only.
     */
    raErrorHandlerSvcProvider.canExceptionHandlerBroadcast = true;
    /**
     * @ngdoc property
     * @name mobile-toolkit-ra.raErrorHandlerSvcProvider#canInvokeExceptionHandlerAfter
     * @propertyOf mobile-toolkit-ra.raErrorHandlerSvcProvider
     * @type {boolean}
     * @description If set `true` it enables passing an errors handling to
     * the _$exceptionHandler_ after broadcasting information about error in
     * `raErrorHandlerSvc.propagate()` method. If set `false` the error
     * handling ends after broadcasting.
     */
    raErrorHandlerSvcProvider.canInvokeExceptionHandlerAfter = true;
    function getCanExceptionHandlerBroadcast() {
        return raErrorHandlerSvcProvider.canExceptionHandlerBroadcast;
    }
    function getCanInvokeExceptionHandlerAfter() {
        return raErrorHandlerSvcProvider.canInvokeExceptionHandlerAfter;
    }
    /**
     * @ngdoc object
     * @module mobile-toolkit-ra
     * @name raErrorHandlerSvc:errorName
     * @description Provides constants of error name.
     */
    errorName = {
        /**
         * @ngdoc property
         * @name raErrorHandlerSvc:errorName#RA_ERROR
         * @propertyOf raErrorHandlerSvc:errorName
         * @description The name of _RAError_
         */
        RA_ERROR: "RAError",
        /**
         * @ngdoc property
         * @name raErrorHandlerSvc:errorName#RA_HTTP_ERROR
         * @propertyOf raErrorHandlerSvc:errorName
         * @description The name of _RAHTTPError_
         */
        RA_HTTP_ERROR: "RAHTTPError"
    };
    RAError = inheritFromError(function(message, cause, target) {
        var error = new Error(message);
        this.name = errorName.RA_ERROR;
        this.message = message || "";
        this.cause = cause;
        this.target = target;
        if (error.stack) {
            this.stack = error.stack;
        }
    });
    RAHTTPError = inheritFromError(function(message, cause, target) {
        var error = new Error(message);
        this.name = errorName.RA_HTTP_ERROR;
        this.message = prepareHTTPErrorMessage(message || cause);
        this.cause = !cause && angular.isObject(message) ? message : cause;
        this.target = target;
        if (error.stack) {
            this.stack = error.stack;
        }
    });
    function inheritFromError(classConstructor) {
        if (angular.isFunction(classConstructor)) {
            classConstructor.prototype = Error.prototype;
        }
        return classConstructor;
    }
    function prepareHTTPErrorMessage(message) {
        var retMessage = message || "", cause = message;
        if (angular.isObject(retMessage) && (cause.data || cause.status)) {
            retMessage = "[HTTP" + (cause.status ? " Status " + cause.status : "") + "]: " + (cause.data ? cause.data : "");
        }
        return retMessage;
    }
    function prepareErrorButtonsList(buttonList) {
        return {
            errorButtonList: buttonList
        };
    }
    function isErrorButtonsList(examined) {
        return Boolean(examined && examined.hasOwnProperty("errorButtonList"));
    }
    function isError(examined) {
        return !!(examined && examined instanceof Error);
    }
    function isRAError(examined) {
        return !!(isError(examined) && examined.name && examined.name === errorName.RA_ERROR);
    }
    function isRAHTTPError(examined) {
        return !!(isError(examined) && examined.name && examined.name === errorName.RA_HTTP_ERROR);
    }
    function isRAType(examined) {
        return !!(isError(examined) && examined.hasOwnProperty("cause") && examined.hasOwnProperty("target"));
    }
    function markAsHandled(exception) {
        if (exception) {
            exception.isHandled = true;
        }
        return exception;
    }
    Error.prototype.markAsHandled = function() {
        return markAsHandled(this);
    };
    function isHandled(exception) {
        return !!(exception && exception.isHandled);
    }
    Error.prototype.isHandled = false;
    function markExceptionHandlerOnly(exception) {
        if (exception) {
            exception.canExceptionHandlerOnly = true;
        }
        return exception;
    }
    Error.prototype.markExceptionHandlerOnly = function() {
        return markExceptionHandlerOnly(this);
    };
    function canExceptionHandlerOnly(exception) {
        return !!(exception && exception.canExceptionHandlerOnly);
    }
    Error.prototype.canExceptionHandlerOnly = false;
    function setEventResult(event, result) {
        if (event) {
            event.result = result;
        }
        return event;
    }
    function getEventResult(event) {
        return event && event.result ? event.result : undefined;
    }
    function canBroadcast(name) {
        var retValue = true;
        if (duringBroadcast.hasOwnProperty(name)) {
            retValue = !!duringBroadcast[name];
        }
        return retValue;
    }
    function startBroadcast(name) {
        duringBroadcast[name] = false;
    }
    function stopBroadcast(name) {
        duringBroadcast[name] = true;
    }
    function beforeHTTPErrorBroadcast(eventName, cause, $rootScope) {
        var event;
        if (canBroadcast(eventName)) {
            startBroadcast(eventName);
            event = $rootScope.$broadcast(eventName, cause);
            stopBroadcast(eventName);
        }
        return getEventResult(event) || cause;
    }
    /**
     * @ngdoc method
     * @name mobile-toolkit-ra.raErrorHandlerSvcProvider#$get
     * @methodOf mobile-toolkit-ra.raErrorHandlerSvcProvider
     * @returns {Object} Instance of _raErrorHandlerSvc_ service
     * @description Creates and returns instance of _raErrorHandlerSvc_
     */
    this.$get = [ "$exceptionHandler", "$rootScope", "$q", function($exceptionHandler, $rootScope, $q) {
        /**
         * @ngdoc service
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc
         * @description The _raErrorHandlerSvc_ service extends the default
         * behavior of the _$exceptionHandler_. Thanks to this, if an exception
         * occurs and it is not caught by the application logic, it will be
         * passed to the _$exceptionHandler_ from where it will be
         * automatically broadcast using the _raErrorHandlerSvc_ triggering
         * the _errorAppeared_ event. Thanks to this you can
         * implement your own listener which can handle the broadcast error.
         *
         * Also, if the application catches an error, then it may broadcast
         * the information of an error using `raErrorHandlerSvc.propagate()`
         * method. Below you can see simple usage of this method:
         *
         * <pre>
         * try {
         *   ...
         *   // The code that throws the error.
         *   ...
         * } catch (exception) {
         *   // The cause and target is not defined
         *   raErrorHandlerSvc.propagate(exception);
         *   // If there is some code below, it will be run after error propagation.
         *   ...
         * }
         *
         * </pre>
         *
         * In order to pass more detailed information you can use additional
         * parameters:
         *
         * <pre>
         *  ...
         *  simplePromise.then(function(result) {
         *          // Success
         *          ...
         *       }, function (reason) {
         *          // Error
         *          // reason contains more detailed information
         *          // you can pass reason param to the RAHTTPError, as below
         *          raErrorHandlerSvc.propagate(
         *              raErrorHandlerSvc.getRAHTTPError(
         *                  'Navigation service connection error',
         *                  reason
         *              )
         *          );
         *      }
         *   );
         *  ...
         * </pre>
         *
         * ## Error prototype extensions and new constructors
         *
         * The _raErrorHandlerSvc_ service provides also constructors that
         * allow to create error objects containing more detailed data:
         *
         * - _RAError_ - used to create all non-HTTP errors inside _RA_
         * components, services, directives, etc.
         * - _RAHTTPError_ - used to create all HTTP errors that may be
         * generated based on reason of failure returned by _$http_ service.
         *
         *
         * Using this service to propagate an errors you can still use
         * standard _Error_ type. Additionally to better integration
         * with service the prototype of _Error_ type has been extended by
         * adding following members:
         *
         * - A method that marks the error object as handled:
         *
         * ```
         * Error.prototype.markAsHandled()
         * ```
         *
         * - A field that stores the information about whether the error was handled:
         *
         * ```
         * Error.prototype.isHandled
         * ```
         *
         * - A method that marks the error as to be passed to the _$exceptionHandler_
         * only:
         *
         * ```
         * Error.prototype.markExceptionHandlerOnly()
         * ```
         *
         * - A field that keeps the information about whether the error will be passed
         * to the _$exceptionHandler_ only.
         *
         * ```
         * Error.prototype.canExceptionHandlerOnly
         * ```
         *
         * @example
         *
         * Below you can see how you can implement custom error listener and how _raErrorHandlerSvc_ works if you
         * use `throw` command or `propagate()` method to throw _RAError_. As result of working of error listener
         * you will see alert window that contains information of an error.
         * <example module="exampleOne">
         *   <file name="script.js">
         *       angular.module('exampleOne', ['mobile-toolkit-ra'])
         *           .run(['raErrorHandlerSvc', 'raErrorListenersSvc',
         *                function (raErrorHandlerSvc, raErrorListenersSvc) {
         *
         *               "use strict";
         *               // Registering custom error listener
         *               // This operation is similar to binding to the $rootScope event:
         *               //
         *               // $rootScope.$on(
         *               //     raErrorHandlerSvc.events.ERROR_APPEARED,
         *               //     function ($event, exception, cause, target) {
         *               //         ...
         *               //     }
         *               // );
         *               raErrorListenersSvc.add(
         *                   raErrorHandlerSvc.events.ERROR_APPEARED,
         *                   function ($event, exception, cause, target) {
         *                       // Handling RAError only that has not yet been handled
         *                       if (!exception.isHandled && raErrorHandlerSvc.isRAError(exception)) {
         *                           alert('Error message: ' + exception.message + '\n' +
         *                                 'Cause: ' + angular.toJson(cause) +
         *                                 (target ? '\nTarget: ' + target : ''));
         *                           // If you mark exception as handled it won't be propagated to
         *                           // $exceptionHandler to show in console log.
         *                           exception.markAsHandled();
         *                       }
         *                   }
         *               );
         *       }]);
         *
         *       angular.module('exampleOne')
         *           .controller('exampleOneCtrl', ['$scope', 'raErrorHandlerSvc',
         *                       function ($scope, raErrorHandlerSvc) {
         *               "use strict";
         *               // Throws RAError passing additional information via cause parameter
         *               $scope.throwRAError = function () {
         *                   throw raErrorHandlerSvc.getRAError('Simple RA Error 1', 'Some cause of an error');
         *               };
         *
         *               // Propagates RAError using propagate method
         *               $scope.propagateRAError = function () {
         *                   raErrorHandlerSvc.propagate(
         *                       raErrorHandlerSvc.getRAError('Simple RA Error 2', {status: 'Bad data'})
         *                   );
         *               };
         *
         *               // Propagates RAError using propagate method to pass additional information
         *               $scope.propagateRAErrorAndPassCause = function () {
         *                   raErrorHandlerSvc.propagate(
         *                       raErrorHandlerSvc.getRAError('Simple RA Error 3'),
         *                       'Cause 3',
         *                       'Target 3'
         *                   );
         *               };
         *       }]);
         *   </file>
         *   <file name="index.html">
         *       <div ng-controller="exampleOneCtrl">
         *         <div class="container-fluid">
         *           <div class="row">
         *               <span>
         *                   If you click the buttons below you see alert window with additional information
         *               </span>
         *           </div>
         *           <div class="row">
         *               <button ng-click="throwRAError()">
         *                   Throw RAError
         *               </button>
         *           </div>
         *           <div class="row">
         *               <button ng-click="propagateRAError()">
         *                   Propagate RAError
         *               </button>
         *           </div>
         *           <div class="row">
         *               <button ng-click="propagateRAErrorAndPassCause()">
         *                   Propagate RAError passing cause and target
         *               </button>
         *           </div>
         *         </div>
         *       </div>
         *   </file>
         * </example>
         *
         * Notice that using _raErrorHandlerSvc_ you can still use plain Error type and thanks to
         * `propagate()` method you are able to pass additional information to the error listeners, as in example
         * below:
         *
         * <example module="exampleTwo">
         *   <file name="script.js">
         *       angular.module('exampleTwo', ['mobile-toolkit-ra'])
         *           .run(['raErrorHandlerSvc', 'raErrorListenersSvc',
         *                function (raErrorHandlerSvc, raErrorListenersSvc) {
         *
         *               "use strict";
         *               // Registering custom error listener
         *               raErrorListenersSvc.add(
         *                   raErrorHandlerSvc.events.ERROR_APPEARED,
         *                   function ($event, exception, cause, target) {
         *                       // Handling any errors that they have not yet been handled
         *                       if (!exception.isHandled) {
         *                           alert('Error message: ' + exception.message + '\n' +
         *                                 'Cause: ' + angular.toJson(cause) +
         *                                 (target ? '\nTarget: ' + target : ''));
         *                           // If you mark exception as handled it won't be propagated to
         *                           // $exceptionHandler to show in console log.
         *                           raErrorHandlerSvc.markAsHandled(exception);
         *                       }
         *                   }
         *               );
         *       }]);
         *
         *       angular.module('exampleTwo')
         *           .controller('exampleTwoCtrl', ['$scope', 'raErrorHandlerSvc',
         *                       function ($scope, raErrorHandlerSvc) {
         *               "use strict";
         *               // Throws plain Error using undefined object and broadcasts
         *               // the information about it to error listeners
         *               $scope.throwPlainError = function () {
         *                   fakeObject.doSomething();
         *               };
         *
         *               // Throws plain Error using propagate method to pass cause information
         *               $scope.propagatePlainErrorWithCause = function () {
         *                   raErrorHandlerSvc.propagate(
         *                       new Error('Plain Error 2'),
         *                       'Cause of plain Error 2'
         *                   );
         *               };
         *               // Throws plain Error using propagate method to pass target information only
         *               $scope.propagatePlainErrorWithTarget = function () {
         *                   raErrorHandlerSvc.propagate(
         *                       new Error('Plain Error 3'),
         *                       undefined,
         *                       'Target 3'
         *                   );
         *               };
         *       }]);
         *   </file>
         *   <file name="index.html">
         *       <div ng-controller="exampleTwoCtrl">
         *         <div class="container-fluid">
         *           <div class="row">
         *               <span>
         *                   If you click the buttons below you see alert window with additional information
         *               </span>
         *           </div>
         *           <div class="row">
         *               <button ng-click="throwPlainError()">
         *                   Throw plain Error
         *               </button>
         *           </div>
         *           <div class="row">
         *               <button ng-click="propagatePlainErrorWithCause()">
         *                   Propagate plain Error passing cause
         *               </button>
         *           </div>
         *           <div class="row">
         *               <button ng-click="propagatePlainErrorWithTarget()">
         *                   Propagate plain Error passing target only
         *               </button>
         *           </div>
         *         </div>
         *       </div>
         *   </file>
         * </example>
        */
        var raErrorHandlerSvc = {};
        /**
         * @ngdoc property
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc:errorName
         * @propertyOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @description Provides {@link raErrorHandlerSvc:errorName constants} of error name.
         */
        raErrorHandlerSvc.errorName = errorName;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#RAError
         * @constructor
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {string} message Error message
         * @param {*=} [cause] Optional information about the context
         * in which the error was thrown
         * @param {*=} [target] Address the recipient of the error
         * @description **Constructor Function**
         *
         * Allows to create
         * new instance of _RAError_ object and pass information
         * about the cause of an error. Additionally it allows also
         * to address an error what it may be used by services which listen
         * broadcasting of an error and they can identify which one is the
         * appropriate recipient.
         * @example
         *
         * <pre>
         * ...
         * // Code that throws an exception
         * throw new raErrorHandlerSvc.RAError('Some exception', reason);
         *
         * // The part of code that will not be run
         * ...
         * </pre>
         */
        raErrorHandlerSvc.RAError = RAError;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#RAHTTPError
         * @constructor
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {string|Object} message Error message or the object that
         * contains information about HTTP error such as `status` or `data`
         * @param {*=} [cause] Optional information about the context
         * in which the error was thrown.
         * @param {*=} [target] Address the recipient of the error
         * @description **Constructor Function**
         *
         * Allows to create new instance of _RAHTTPError_ object and pass
         * information about the cause of an error. Additionally it allows also
         * to address an error what it may be used by services which listen
         * broadcasting of an error and they can identify which one is the
         * appropriate recipient. If `message` is an object instead of string
         * it should contain `status` or `data` property that describes
         * HTTP error.
         *
         * @example
         *
         * <pre>
         * $http({
         *     method: 'GET',
         *     url: 'http://localhost:3000/api/controller'
         * }).then(function (result) {
         *     // Success
         * }, function (reason) {
         *     // Error
         *     raErrorHandlerSvc.propagate(
         *         new raErrorHandlerSvc.RAHTTPError(
         *             'Cannot get the controller',
         *             reason,
         *             'MainErrorListener'
         *         )
         *     );
         * });
         *
         * </pre>
         */
        raErrorHandlerSvc.RAHTTPError = RAHTTPError;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#getRAError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {string} message Error message
         * @param {*=} [cause] Optional information about the context
         * in which the error was thrown
         * @param {*=} [target] Address the recipient of the error
         * @returns {RAError} New instance of _RAError_
         * @description Creates new instance of _RAError_ object and pass
         * information about the cause of an error. Additionally it allows also
         * to address an error what it may be used by services which listen
         * broadcasting of an error and they can identify which one is the
         * appropriate recipient.
         *
         * @example
         *
         * <pre>
         * module.factory('nonPromiseOutsideSvc', ['$log', 'raErrorHandlerSvc', function ($log, raErrorHandlerSvc) {
         *     "use strict";
         *     return function (value) {
         *         if (!angular.isNumber(value)) {
         *             throw raErrorHandlerSvc.getRAError(
         *                 'Value must be defined',
         *                 'This is not a number'
         *             );
         *         }
         *        ...
         *        return value + 10;
         *     };
         * }])
         *
         * </pre>
         */
        raErrorHandlerSvc.getRAError = function(message, cause, target) {
            return new RAError(message, cause, target);
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#getRAHTTPError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {string|object} message Error message
         * @param {*=} [cause] Optional information about the context
         * in which the error was thrown
         * @param {*=} [target] Address the recipient of the error
         * @returns {RAHTTPError} New instance of _RAHTTPError_
         * @description Creates new instance of _RAHTTPError_ object and pass
         * information about the cause of an error. Additionally it allows also
         * to address an error what it may be used by services which listen
         * broadcasting of an error and they can identify which one is the
         * appropriate recipient.
         *
         * @example
         *
         * <pre>
         * $http({
         *     method: 'GET',
         *     url: 'http://localhost:3000/api/controller'
         * }).then(function (result) {
         *     // Success
         * }, function (reason) {
         *     // Error
         *     raErrorHandlerSvc.propagate(
         *         raErrorHandlerSvc.getRAHTTPError(
         *             'Cannot get the controller'),
         *             reason,
         *             'MainErrorListener'
         *         )
         *     );
         * });
         *
         * </pre>
         */
        raErrorHandlerSvc.getRAHTTPError = function(message, cause, target) {
            return new RAHTTPError(message, cause, target);
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#isError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} examined The object that is examined
         * @returns {boolean} Value that is `true` if examined parameter
         * is type of: _Error_, _RAError_ or _RAHTTPError_ otherwise it
         * returns `false`.
         * @description Checks and returns the information whether the passed
         * parameter is or not a type of: _Error_, _RAError_ or _RAHTTPError_.
         *
         * @example
         *
         * <pre>
         * lastPromise.then(function(result) {
         *     // Sucess
         *     ...
         * }, function (reason) {
         *     // Error
         *     var err = reason;
         *
         *     if (!raErrorHandlerSvc.isError(err)) {
         *         // reason is not the error and must
         *         // be wrapped by RAError
         *
         *         err = raErrorHandlerSvc.getRAError('Cannot do it', reason);
         *     }
         *
         *     // Broadcasting the error to the error listeners
         *     raErrorHandlerSvc.propagate(err);
         * });
         * </pre>
         */
        raErrorHandlerSvc.isError = isError;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#isRAError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} examined The object that is examined
         * @returns {boolean} Value that is `true` if examined parameter
         * is the _RAError_ otherwise it returns `false`.
         * @description Checks and returns the information whether the passed
         * parameter is or not a type of _RAError_.
         *
         * @example
         *
         * <pre>
         * raErrorListenersSvc.add(
         *     raErrorHandlerSvc.events.ERROR_APPEARED,
         *     function ($event, exception, cause, target) {
		 *         if (raErrorHandlerSvc.isRAError(exception)) {
         *             // Handle only an errors type of RAError
         *             ...
         *         }
         * });
         * </pre>
         */
        raErrorHandlerSvc.isRAError = isRAError;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#isRAHTTPError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} examined The object that is examined
         * @returns {boolean} Value that is `true` if examined parameter
         * is the _RAHTTPError_ otherwise it returns `false`.
         * @description Checks and returns the information whether the passed
         * parameter is or not a type of _RAHTTPError_.
         *
         * @example
         *
         * <pre>
         * somePromise.then(function(result) {
         *     // Sucess
         *     ...
         * }, function (reason) {
         *     // Error
         *     if (raErrorHandlerSvc.isRAHTTPError(reason)) {
         *         // This RAHTTPError that may contain
         *         // the additional information like cause and target
         *        if (reason.cause &&
         *            reason.cause.hasOwnProperty('status')) {
         *            // You can use additional information
         *            // that describes the status of HTTP operation
         *            ...
         *        }
         *     }
         *     ...
         * });
         * </pre>
         */
        raErrorHandlerSvc.isRAHTTPError = isRAHTTPError;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#isRAType
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} examined The object that is examined
         * @returns {boolean} Value that is `true` if examined parameter
         * is _RA_ type like _RAError_ or _RAHTTPError_
         * otherwise it returns `false`.
         * @description Checks and returns the information whether the passed
         * parameter is or not a type of _RAError_ or _RAHTTPError_.
         *
         * @example
         *
         * <pre>
         * somePromise.then(function(result) {
         *     // Sucess
         *     ...
         * }, function (reason) {
         *     // Error
         *     if (raErrorHandlerSvc.isRAType(reason)) {
         *         // This is RAError or RAHTTPError that may contain
         *         // the additional information like cause and target
         *         if (reason.cause) {
         *             // Yoy can use additional information
         *             // that describes the cause of rejection
         *             ...
         *         }
         *     }
         *     ...
         * });
         * </pre>
         */
        raErrorHandlerSvc.isRAType = isRAType;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#getCanExceptionHandlerBroadcast
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @returns {boolean} Value of
         * {@link mobile-toolkit-ra.raErrorHandlerSvcProvider#canExceptionHandlerBroadcast
         * raErrorHandlerSvcProvider.canExceptionHandlerBroadcast} property
         * @description If returns `true` the error broadcasting is enabled in
         * $exceptionHandler service otherwise broadcasting is invoked
         * from raErrorHandlerSvc service only.
         */
        raErrorHandlerSvc.getCanExceptionHandlerBroadcast = getCanExceptionHandlerBroadcast;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#getCanInvokeExceptionHandlerAfter
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @returns {boolean} Value of
         * {@link mobile-toolkit-ra.raErrorHandlerSvcProvider#canInvokeExceptionHandlerAfter
         * raErrorHandlerSvcProvider.canInvokeExceptionHandlerAfter}
         * @description If returns `true` the error handling is passed to
         * the $exceptionHandler after broadcasting information about error in
         * raErrorHandlerSvc.propagate method . If set `false` the error
         * handling ends after broadcasting.
         */
        raErrorHandlerSvc.getCanInvokeExceptionHandlerAfter = getCanInvokeExceptionHandlerAfter;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#getCanInvokeExceptionHandlerAfter
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @returns {boolean} Value of
         * raErrorHandlerSvcProvider.getCanInvokeExceptionHandlerAfter
         * @description If returns `true` the error handling is passed to
         * the $exceptionHandler after broadcasting information about error in
         * raErrorHandlerSvc.propagate method . If set `false` the error
         * handling ends after broadcasting.
         */
        raErrorHandlerSvc.isHandled = isHandled;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#markAsHandled
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} exception Error object that will
         * be marked as handled
         * @returns {Object} Marked error object
         * @description Marks an error as handled and it prevents
         * passing this error to the $exceptionHandler service after
         * broadcasting. It not prevent passing an error between listeners
         * during broadcasting. Below you can see example of usage inside
         * error listener service.
         *
         * @example
         *
         * <pre>
         * // Simple error listener service
         * module.factory('errorToLogSvc', ['$log', function ($log) {
         *     "use strict";
         *     return function ($event, exception, cause, target) {
         *         // Checking if an error has already been handled and if the error
         *         // points to this the listener that should handle it. In this case
         *         // the target parameter should be set to '$log'
         *         if (!exception.isHandled && target === '$log') {
         *             $log.error(exception.message);
         *
         *             // Marking an error as handled
         *             raErrorHandlerSvc.markAsHandled(exception);
         *         }
         *     };
         * }]);
         * </pre>
         */
        raErrorHandlerSvc.markAsHandled = markAsHandled;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#canExceptionHandlerOnly
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} exception Error object that will be checked
         * @returns {boolean} Boolean value about possible error passing
         * between error handling services.
         * @description Checks whether passed exception is marked only to use
         * by _$exceptionHandler_, then the method returns `true`.
         * It means that the default behavior of broadcasting
         * an error will be disabled. If `false` the error will be broadcasted
         * and then passed to the $exceptionHandler service, under
         * the condition that it is not marked as handled.
         */
        raErrorHandlerSvc.canExceptionHandlerOnly = canExceptionHandlerOnly;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#markExceptionHandlerOnly
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {*} exception Error object that will be marked
         * @returns {boolean} Marked error object
         * @description Allows to prevent an error broadcasting.
         * Instead of this the error is passed directly to
         * the $exceptionHandler service.
         */
        raErrorHandlerSvc.markExceptionHandlerOnly = markExceptionHandlerOnly;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#propagate
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {Error|RAError|RAHTTPError} exception Error object
         * @param {*} [cause] Optional information about the context
         * in which the error was thrown
         * @param {*} [target] Address the recipient of the error
         * @returns {*} Feedback information from listener that handled
         * an error
         * @description Supports an error broadcasting and handling.
         * As a result of acting this method the error is broadcast in
         * the **`errorAppeared`** event. Thanks to this the event listeners
         * can handle the error and return feedback information if it
         * is needed. In order to set feedback information use
         * `raErrorHandlerSvc.events.setResult(event, result)` method. After
         * broadcasting the error is passed to the $exceptionHandler service
         * which is the default Angular exception handler.
         * If some listener marks the error as handled the $exceptionHandler
         * will be not invoked after broadcasting. Working of this method
         * depends on raErrorHandlerSvcProvider settings such as
         * `raErrorHandlerSvcProvider.canInvokeExceptionHandlerAfter`.
         * @see mobile-toolkit-ra.raErrorHandlerSvcProvider#canInvokeExceptionHandlerAfter
         * @see mobile-toolkit-ra.raErrorHandlerSvcProvider#markExceptionHandlerOnly
         * @see mobile-toolkit-ra.raErrorHandlerSvcProvider#canExceptionHandlerOnly
         *
         * @example
         * Below you can see how you can use this method to propagate an error
         * of simple _Error_ type passing additional parameters.
         *
         * <pre>
         * $http({
         *     method: 'GET',
         *     url: 'http://localhost:3000/api/controller'
         * }).then(function (result) {
         *     // Success
         * }, function (reason) {
         *     // Error
         *     raErrorHandlerSvc.propagate(
         *         new Error('Cannot get the controller'),
         *         reason
         *     );
         * });
         * </pre>
         *
         * If an error object is type of _RAError_ or _RAHTTPError_ and it
         * already contains the information such as _cause_ or _target_ you
         * can use `propagate` method without passing additional parameters.
         * In this case _raErrorHandlerSvc_ takes all needed information
         * while broadcasting directly from the error object.
         *
         * <pre>
         * ...
         * simplePromise.then(function(result) {
         *         // Success
         *         ...
         * }, function (reason) {
         *     // Error
         *     // reason contains more detailed information
         *     var err = raErrorHandlerSvc.getRAHTTPError(
         *                   'Navigation service connection error',
         *                   reason
         *               );
         *
         *     // Propagate method uses additional information that is
         *     // contained by err object
         *     raErrorHandlerSvc.propagate(err);
         * });
         * </pre>
         *
         * In case when an error object contains for example _cause_ parameter
         * and you would like to propagate this error passing another _cause_
         * information you can do it using _cause_ parameter of `propagate`
         * method like below:
         *
         * <pre>
         * ...
         * simplePromise.then(function(result) {
         *         // Success
         *         ...
         * }, function (reason) {
         *     // Error
         *     // reason contains more detailed information
         *     var err = raErrorHandlerSvc.getRAHTTPError(
         *                   'Navigation service connection error',
         *                   reason
         *               );
         *
         *     // Propagate method uses additional information that is
         *     // passed directly to the propagate mthod
         *     raErrorHandlerSvc.propagate(err, 'This is new cause');
         * });
         * </pre>
         *
         * `propagate` method allows also to return some feedback information.
         * However the kind of this information depends on particular
         * implementation of error listener.
         *
         * <pre>
         * $http({
         *     method: 'GET',
         *     url: 'http://localhost:3000/api/controller'
         * }).then(function (result) {
         *     // Success
         * }, function (reason) {
         *     // Error
         *     var feedback = raErrorHandlerSvc.propagate(
         *                        new Error('Cannot get the controller'),
         *                        reason
         *                    );
         *     // The code that uses the feedback information.
         *     ...
         * });
         * </pre>
         *
         */
        raErrorHandlerSvc.propagate = function(exception, cause, target) {
            var result, resultEH, useExceptionHandlerOnly = canExceptionHandlerOnly(exception);
            if (!useExceptionHandlerOnly) {
                result = raErrorHandlerSvc.helper.errorAppeared(exception, cause, target);
            }
            if (getCanInvokeExceptionHandlerAfter() && !isHandled(exception)) {
                markExceptionHandlerOnly(exception);
                resultEH = $exceptionHandler(exception, cause || exception.cause, target);
                result = useExceptionHandlerOnly ? resultEH : result;
            }
            return result;
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#rejectWithError
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @param {Error|RAError|RAHTTPError} exception Error object that
         * will be passed as rejected promise
         * @returns {object} The promise which passes an error as
         * the reason of the rejection
         * @description Creates promise with rejection due to the error which
         * is passed in parameter `exception`
         */
        raErrorHandlerSvc.rejectWithError = function(exception) {
            return $q.reject(exception);
        };
        /**
         * @ngdoc property
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc:events
         * @propertyOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @description Contains constants which defines names of events
         * supported by raErrorHandlerSvc service. It allows also to set or
         * get feedback information of event. For more information see:
         * {@link raErrorHandlerSvc:events raErrorHandlerSvc.events}
         */
        /**
         * @ngdoc object
         * @module mobile-toolkit-ra
         * @name raErrorHandlerSvc:events
         * @description Contains constants which defines names of events
         * supported by _raErrorHandlerSvc_ service. It allows also to set or
         * get feedback information of event.
         */
        raErrorHandlerSvc.events = {
            /**
             * @ngdoc property
             * @name raErrorHandlerSvc:events#ERROR_APPEARED
             * @propertyOf raErrorHandlerSvc:events
             * @returns {string} Name of _errorAppeared_ event
             * @description Constant value of the name of
             * {@link mobile-toolkit-ra.service:raErrorHandlerSvc#errorAppeared _errorAppeared_} event
             */
            ERROR_APPEARED: "errorAppeared",
            /**
             * @ngdoc property
             * @name raErrorHandlerSvc:events#BEFORE_HTTP_REQUEST_ERROR
             * @propertyOf raErrorHandlerSvc:events
             * @returns {string} Name of _beforeHTTPRequestError_ event
             * @description Constant value of the name of
             * _beforeHTTPRequestError_ event
             */
            BEFORE_HTTP_REQUEST_ERROR: "beforeHTTPRequestError",
            /**
             * @ngdoc property
             * @name raErrorHandlerSvc:events#BEFORE_HTTP_RESPONSE_ERROR
             * @propertyOf raErrorHandlerSvc:events
             * @returns {string} Name of _beforeHTTPResponseError_ event
             * @description Constant value of the name of _beforeHTTPResponseError_
             * event
             */
            BEFORE_HTTP_RESPONSE_ERROR: "beforeHTTPResponseError"
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra:raErrorHandlerSvc.events#setResult
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc:events
         * @param {Object} event Event object
         * @param {Object} result Data that will be set as result of event
         * @returns {Object} Event with result set
         * @description Sets the feedback information of error handling in
         * event object.
         *
         * @example
         *
         * <pre>
         * $scope.myErrorListener = function ($event, exception, cause, target) {
         *      var dialogPromise;
         *
         *      if (target === 'DIALOG') {
         *          // Calls dialog and sets dialogPromise variable
         *          dialogPromise = dialogService.open(exception, cause);
         *
         *          // returns dialogPromise as feedback information
         *          raErrorHandlerSvc.events.setResult($event, dialogPromise);
         *      }
         * };
         * </pre>
         */
        raErrorHandlerSvc.events.setResult = setEventResult;
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra:raErrorHandlerSvc.events#getEventResult
         * @methodOf mobile-toolkit-ra.service:raErrorHandlerSvc:events
         * @param {Object} event Event object
         * @returns {Object} Result of error handling saved in the event
         * @description Gets the feedback information of error handling in
         * event object.
         */
        raErrorHandlerSvc.events.getResult = getEventResult;
        /**
         * @ngdoc object
         * @module mobile-toolkit-ra
         * @name raErrorHandlerSvc:helper
         * @description Helper object for broadcasting handling.
         */
        /**
         * @ngdoc property
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc:helper
         * @propertyOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @description Helper object for broadcasting handling. For more
         * information see: {@link raErrorHandlerSvc:helper
         * raErrorHandlerSvc.helper}
         */
        raErrorHandlerSvc.helper = {};
        /**
         * @ngdoc event
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#errorAppeared
         * @eventOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @eventType broadcast on $rootScope
         * @param {Error|RAError|RAHTTPError} exception Error object
         * @param {Object=} cause Optional information about the context
         *     in which the error was thrown.
         * @param {Object=} target Address the recipient of the error
         * @description  Event that is triggered by calling
         * `raErrorHandlerSvc.propagate()` method or internally by
         * _raErrorHandlerSvc_ (that in this case uses _$exceptionHandler_)
         * if an exception appears.
         */
        /**
         * @ngdoc method
         * @name raErrorHandlerSvc:helper#errorAppeared
         * @methodOf raErrorHandlerSvc:helper
         * @param {Error|RAError|RAHTTPError} exception Error object
         * @param {Object=} cause Optional information about the context
         *     in which the error was thrown.
         * @param {Object=} target Address the recipient of the error
         * @returns {Object} Result of error handling saved in the event
         * @description Invokes `errorAppeared` event to broadcast an error.
         * As the result it returns the feedback information of error handling.
         * This method is used by _$exceptionHandler_
         */
        raErrorHandlerSvc.helper.errorAppeared = function(exception, cause, target) {
            var event;
            if (canBroadcast(raErrorHandlerSvc.events.ERROR_APPEARED)) {
                startBroadcast(raErrorHandlerSvc.events.ERROR_APPEARED);
                event = $rootScope.$broadcast(raErrorHandlerSvc.events.ERROR_APPEARED, exception, cause || exception.cause, target || exception.target);
                stopBroadcast(raErrorHandlerSvc.events.ERROR_APPEARED);
            }
            return getEventResult(event);
        };
        /**
         * @ngdoc event
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#beforeHTTPRequestError
         * @eventOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @eventType broadcast on $rootScope
         * @param {Object} cause Information about the context
         *     in which the HTTP error was thrown.
         * @returns {Object} Result of error handling saved in the event
         * @description Event that is broadcast by _raHttpErrorInterceptorSvc_
         * when HTTP request error occurred. This event is broadcast before
         * information about an error is passed to the _$http_ service.
         */
        /**
         * @ngdoc method
         * @name raErrorHandlerSvc:helper#beforeHTTPRequestError
         * @methodOf raErrorHandlerSvc:helper
         * @param {Object} cause Information about the context
         *     in which the HTTP error was thrown.
         * @returns {Object} Result of error handling saved in the event
         * @description Invokes `beforeHTTPRequestError` event to broadcast
         * an error. As the result it returns the feedback information of
         * error handling. This method is used by HTTP interceptor.
         */
        raErrorHandlerSvc.helper.beforeHTTPRequestError = function(cause) {
            return beforeHTTPErrorBroadcast(raErrorHandlerSvc.events.BEFORE_HTTP_REQUEST_ERROR, cause, $rootScope);
        };
        /**
         * @ngdoc event
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc#beforeHTTPResponseError
         * @eventOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @eventType broadcast on $rootScope
         * @param {Object} cause Information about the context
         *     in which the HTTP error was thrown.
         * @returns {Object} Result of error handling saved in the event
         * @description Event that is broadcast by _raHttpErrorInterceptorSvc_
         * when HTTP response error occurred. This event is broadcast before
         * information about an error is passed to the _$http_ service.
         */
        /**
         * @ngdoc method
         * @name raErrorHandlerSvc:helper#beforeHTTPResponseError
         * @methodOf raErrorHandlerSvc:helper
         * @param {Object} cause Information about the context
         *     in which the HTTP error was thrown.
         * @returns {Object} Result of error handling saved in the event
         * @description Invokes `beforeHTTPResponseError` event to broadcast
         * an error. As the result it returns the feedback information
         * of error handling. This method is used by HTTP interceptor.
         */
        raErrorHandlerSvc.helper.beforeHTTPResponseError = function(cause) {
            return beforeHTTPErrorBroadcast(raErrorHandlerSvc.events.BEFORE_HTTP_RESPONSE_ERROR, cause, $rootScope);
        };
        /**
         * @ngdoc property
         * @name mobile-toolkit-ra.service:raErrorHandlerSvc:ui
         * @propertyOf mobile-toolkit-ra.service:raErrorHandlerSvc
         * @description Helper object that contains UI specific methods.
         * For more information see:
         * {@link mobile-toolkit-ra:raErrorHandlerSvc:ui raErrorHandlerSvc.ui}
         */
        /**
         * @ngdoc object
         * @module mobile-toolkit-ra
         * @name raErrorHandlerSvc:ui
         * @description Helper object that contains UI specific methods.
         */
        raErrorHandlerSvc.ui = {};
        /**
         * @ngdoc method
         * @name raErrorHandlerSvc:ui#prepareErrorButtonsList
         * @methodOf raErrorHandlerSvc:ui
         * @param {*} buttonList A list of buttons
         * @returns {object} List of buttons
         * @description Prepares a ErrorButtonsList.
         */
        raErrorHandlerSvc.ui.prepareErrorButtonsList = prepareErrorButtonsList;
        /**
         * @ngdoc method
         * @name raErrorHandlerSvc:ui#isErrorButtonsList
         * @methodOf raErrorHandlerSvc:ui
         * @param {*} examined The object that is examined if it
         * is the ErrorButtonsList
         * @returns {boolean} Value that is `true` if examined parameter
         * is the ErrorButtonsList otherwise it returns `false`.
         * @description Checks and returns the information
         * if the passed parameter is the isErrorButtonsList or not.
         */
        raErrorHandlerSvc.ui.isErrorButtonsList = isErrorButtonsList;
        return raErrorHandlerSvc;
    } ];
});

/* global angular */
angular.module("mobile-toolkit-ra").provider("raErrorListenersSvc", [ function() {
    "use strict";
    function hasListeners(scope, eventName) {
        return !!(scope && scope.$$listeners && scope.$$listeners.hasOwnProperty(eventName));
    }
    function incrementListenersCount(scope, eventName) {
        if (!scope.$$listenerCount.hasOwnProperty(eventName)) {
            scope.$$listenerCount[eventName] = 0;
        }
        ++scope.$$listenerCount[eventName];
    }
    function decrementListenersCount(scope, eventName) {
        var listenerCounts = scope.$$listenerCount;
        if (listenerCounts.hasOwnProperty(eventName)) {
            --listenerCounts[eventName];
            if (listenerCounts[eventName] <= 0) {
                delete listenerCounts[eventName];
            }
        }
    }
    /**
     * @ngdoc method
     * @name mobile-toolkit-ra.raErrorListenersSvcProvider#$get
     * @methodOf mobile-toolkit-ra.raErrorListenersSvcProvider
     * @returns {Object} Instance of _raErrorListenersSvc_ service
     * @description Creates and returns an instance of _raErrorListenersSvc_
     */
    this.$get = [ "$rootScope", "raErrorHandlerSvc", function($rootScope, raErrorHandlerSvc) {
        /**
         * @ngdoc service
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra.service:raErrorListenersSvc
         * @description The service that allows to register and
         * unregister the error listeners.
         *
         * @example
         *
         * <pre>
         * var unregisterMyListenerB,
         *     myListenerA  = function ($event, exception, cause, target) {
         *         // Implementation of the error listener
         *     },
         *     myListenerB  = function ($event, exception, cause, target) {
         *         // Implementation of the error listener
         *     };
         *
         * // To add the listener at the end of list use
         * raErrorListenersSvc.add(raErrorHandlerSvc.events.ERROR_APPEARED,
         *                         myListenerA
         * );
         *
         * // To remove the listener you can use
         * raErrorListenersSvc.remove(raErrorHandlerSvc.events.ERROR_APPEARED,
         *                            myListenerA
         * );
         *
         * // To add the listener at the beginning of the list use
         * unregisterMyListenerB = raErrorListenersSvc.addFirst(
         *     raErrorHandlerSvc.events.ERROR_APPEARED,
         *     myListenerB
         * );
         *
         * // To remove the listener you can use another way
         * unregisterMyListenerB();
         * </pre>
         *
         * Remember, if you use error listener that is implemented as a function of local scope you must
         * always unregister it. Below you can see how register and unregister the listeners and how an object of an
         * error is passed between listeners.
         *
         * <example module="listenerExampleOne">
         *      <file name="script.js">
         *           angular.module('listenerExampleOne', ['mobile-toolkit-ra'])
         *             .run(['raErrorHandlerSvc', 'raErrorListenersSvc',
         *                   function (raErrorHandlerSvc, raErrorListenersSvc) {
         *                 "use strict";
         *                  // Registering custom error listener
         *                 raErrorListenersSvc.add(
         *                     raErrorHandlerSvc.events.ERROR_APPEARED,
         *                     function ($event, exception, cause, target) {
         *                         // Handling RAError only that has not yet been handled
         *                         if (!exception.isHandled && raErrorHandlerSvc.isRAError(exception)) {
         *                             alert('Main Listener\n' +
         *                                   'Error message: ' + exception.message + '\n' +
         *                                   'Cause: ' + angular.toJson(cause) +
         *                                   (target ? '\nTarget: ' + target : ''));
         *                             // If you mark exception as handled it won't be propagated to
         *                             // $exceptionHandler to show in console log.
         *                             exception.markAsHandled();
         *                         }
         *                     }
         *                 );
         *           }]);
         *
         *           angular.module('listenerExampleOne')
         *               .controller('listenerExampleOneCtrl', ['$scope', 'raErrorHandlerSvc', 'raErrorListenersSvc',
         *                   function ($scope, raErrorHandlerSvc, raErrorListenersSvc) {
         *                   "use strict";
         *                   // Local implementation of error listener
         *                   $scope.myListener = function ($event, exception, cause, target) {
         *                       // Handling RAError only that has not yet been handled
         *                       if (!exception.isHandled && raErrorHandlerSvc.isRAError(exception)) {
         *                           alert('Controller Listener\n' +
         *                                 'Error message: ' + exception.message + '\n' +
         *                                 'Cause: ' + angular.toJson(cause) +
         *                                 (target ? '\nTarget: ' + target : ''));
         *                           // In order for other error listeners to be able trace an errors we don't mark
         *                           // this error as handled
         *                       }
         *                   };
         *
         *                   // Registering the error listener defined above. This listener is
         *                   // registered at the beginning of the listener list to be able to catch
         *                   // all errors before they will be handled. As the result of addFirst()
         *                   // method we get the special function to unregister this listener.
         *                   $scope.unregisterMyListener = raErrorListenersSvc.addFirst(
         *                       raErrorHandlerSvc.events.ERROR_APPEARED,
         *                       $scope.myListener
         *                   );
         *
         *                   // You must always unregister the error listener that is defined
         *                   // within the $scope.
         *                   $scope.$on('$destroy', function () {
         *                       if (angular.isFunction($scope.unregisterMyListener)) {
         *                           // To unregistering we can use appropriate function returned by
         *                           // raErrorListenersSvc.addFirst() or raErrorListenersSvc.add() method
         *                           $scope.unregisterMyListener();
         *                       }
         *                   });
         *
         *                   // Propagates RAError using propagate method
         *                   $scope.propagateRAError = function () {
         *                       raErrorHandlerSvc.propagate(
         *                           raErrorHandlerSvc.getRAError('Simple RA Error 2', {status: 'Bad data'})
         *                       );
         *                   };
         *           }]);
         *      </file>
         *
         *      <file name="index.html">
         *          <div ng-controller="listenerExampleOneCtrl">
         *            <div class="container-fluid">
         *              <div class="row">
         *                  <span>
         *                      If you click the button below the alert window will be shown twice.
         *                      The first alert window will be open by error listener registered in controller.
         *                      The second one comes from main error listener registered in module.
         *                  </span>
         *              </div>
         *              <div class="row">
         *                  <button ng-click="propagateRAError()">
         *                      Throw RAError
         *                  </button>
         *              </div>
         *            </div>
         *          </div>
         *      </file>
         * </example>
         *
         */
        var raErrorListenersSvc = {};
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorListenersSvc#list
         * @methodOf mobile-toolkit-ra.service:raErrorListenersSvc
         * @param {string} eventName The Error event name.
         * @returns {Array} Array with the list of a functions of a listeners
         * @description Returns the array with the list of a functions
         * of a listeners which are registered in the given scope.
         */
        raErrorListenersSvc.list = function(eventName) {
            var listeners = [], isSupportedEvent = false;
            if ($rootScope && $rootScope.$$listeners) {
                angular.forEach(raErrorHandlerSvc.events, function(item) {
                    if (angular.isString(item) && item === eventName) {
                        isSupportedEvent = true;
                    }
                });
                if (isSupportedEvent && hasListeners($rootScope, eventName)) {
                    listeners = $rootScope.$$listeners[eventName];
                }
            }
            return listeners;
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorListenersSvc#add
         * @methodOf mobile-toolkit-ra.service:raErrorListenersSvc
         * @param {string} eventName The Error event name.
         * @param {Function} listenerFn Listener function.
         * @returns {Function} Function to unregister the listener
         * @description Add new listener to the error listener list.
         *
         * @example
         *
         * <pre>
         * // Adding simple listener that displays information about unhandled
         * // errors on the log console
         * raErrorListenersSvc.add(
         *     raErrorHandlerSvc.events.ERROR_APPEARED,
         *     function ($event, exception, cause, target) {
         *        if (!exception.isHandled && target === '$log') {
         *            $log.info(exception.name);
         *            $log.info(exception.message);
         *            $log.info(cause);
         *            $log.info(target);
         *        }
         *     }
         * );
         * </pre>
         *
         * As the result this method returns the function to unregister
         * the listener
         *
         * <pre>
         * // Adding simple listener and remembering function to be able
         * // unregister it
         * var unregisterMyListener = raErrorListenersSvc.add(
         *     raErrorHandlerSvc.events.ERROR_APPEARED,
         *     function ($event, exception, cause, target) {
         *        // Listener implementation
         *        ...
         *     }
         * );
         *
         * ...
         *
         * // Unregistering of error listener
         * unregisterMyListener();
         * </pre>
         */
        raErrorListenersSvc.add = function(eventName, listenerFn) {
            $rootScope.$on(eventName, listenerFn);
            return function() {
                raErrorListenersSvc.remove(eventName, listenerFn);
            };
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorListenersSvc#addFirst
         * @methodOf mobile-toolkit-ra.service:raErrorListenersSvc
         * @param {string} eventName The Error event name.
         * @param {Function} listenerFn Listener function.
         * @returns {Function} Function to unregister the listener
         * @description Add new listener as a first item of listener list.
         * If some reason the listener should be placed at the beginning of the
         * listener list you should use this function. It may be required if
         * you would like to trace all errors before they will be handled.
         */
        raErrorListenersSvc.addFirst = function(eventName, listenerFn) {
            var unregisterFn, listeners;
            if (hasListeners($rootScope, eventName)) {
                listeners = raErrorListenersSvc.list(eventName);
                listeners.unshift(listenerFn);
                incrementListenersCount($rootScope, eventName);
                unregisterFn = function() {
                    raErrorListenersSvc.remove(eventName, listenerFn);
                };
            } else {
                unregisterFn = raErrorListenersSvc.add(eventName, listenerFn);
            }
            return unregisterFn;
        };
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raErrorListenersSvc#remove
         * @methodOf mobile-toolkit-ra.service:raErrorListenersSvc
         * @param {string} eventName The Error event name.
         * @param {Function} listenerFn Listener function to remove.
         * @description Removes listener from the error listener list.
         */
        raErrorListenersSvc.remove = function(eventName, listenerFn) {
            var i, eventArr;
            if (hasListeners($rootScope, eventName)) {
                eventArr = $rootScope.$$listeners[eventName];
                if (eventArr) {
                    for (i = 0; i < eventArr.length; i++) {
                        if (eventArr[i] === listenerFn) {
                            eventArr.splice(i, 1);
                            decrementListenersCount($rootScope, eventName);
                        }
                    }
                }
            }
        };
        return raErrorListenersSvc;
    } ];
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.directive:raExpandOnScroll
 * @restrict A
 *
 * @description
 * The directive is responsible for switching to Full-Screen by expanding the content of the element.
 * It is achieved by detaching from the normal flow and setting the positioning to fixed.
 * The height of the content is set to the 100% of the window height.
 * A threshold value of the scroll size assigned to the directive enables the feature
 * and equals the page size + the height of the navbar + the height of the action bar.
 *
 * ### Configuration
 *
 * The _raExpandOnScroll_ directive may be configured through the following attributes:
 *
 * - _ra-expand-on-scroll-buffer_ - the attribute takes a number value.
 *      It defines the minimum value of the scroll in pixels which, when reached,
 *      causes the action.
 *      The defult value is _120_ (the height of the navbar + the action bar + buffer).
 * - _ra-expand-on-scroll-show-at-bottom_ - the attribute takes the value of _true_ or _false_.
 *      It indicates to switch over from full mode to normal mode once the page is scrolled to the bottom of the page.
 *      The default value is _"true"_.
 *
 * - _ra-expand-on-scroll-z-index_ - the attribute takes a number value.
 *      It defines the z index.
 *      The default value is 10000.
 *
 * - _ra-expand-on-scroll-back-color_ - the attribute takes the string value.
 *      It defines the background color used during the animation.
 *      The default value is _"white"_.
 *
 * The example below shows the default configuration of the directive.
 * The minimum scroll is set to the 120px and content is in normal mode if the page
 * is scrolled to the bottom of the page.
 *
 * <example module="exampleAppOne">
 *     <file name="index.html">
 *        <div ng-controller="exampleCtrl" class="expand-on-scroll-container">
 *          <div class="ra-flex-item-dynamic ra-flex-column expand-on-scroll-content">
 *              <ra-expand-on-scroll
 *                  ra-expand-on-scroll-back-color="white"
 *                  ra-expand-on-scroll-z-index="20000"
 *                  ra-expand-on-scroll-buffer="150"
 *                  class="ra-flex-item-dynamic ra-flex-column">
 *                  <div id="container" class="ra-flex-item-dynamic ra-flex-column">
 *                      <div ng-repeat="element in elements"
 *                           class="ra-flex-item-static ra-flex-column">
 *                          <div class="ra-flex-item-static">{{element}}</div>
 *                      </div>
 *                  </div>
 *              </ra-expand-on-scroll>
 *          </div>
 *        </div>
 *    </file>
 *    <file name="style.css">
 *        .expand-on-scroll-container {
 *            height: 300px;
 *        }
 *
 *        .expand-on-scroll-content {
 *            height: 200px;
 *        }
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppOne', ['mobile-toolkit-ra']);
 *        mod.controller('exampleCtrl',
 *        ['$scope',
 *            function ($scope) {
 *                'use strict';
 *                $scope.elements = [];
 *                $scope.counter = 0;
 *                $scope.incElement = function () {
 *                    $scope.counter++;
 *                    $scope.elements.push("element_" + $scope.counter);
 *                };
 *                for (var i = 0; i < 80; i++) {
 *                  $scope.incElement();
 *                }
 *            }
 *        ])
 *
 *    </file>
 * </example>
 *
 */
angular.module("mobile-toolkit-ra").directive("raExpandOnScroll", [ "$templateCache", "$rootScope", "$timeout", "$animate", function($templateCache, $rootScope, $timeout, $animate) {
    "use strict";
    return {
        restrict: "E",
        transclude: true,
        template: $templateCache.get("raExpandOnScroll/raExpandOnScroll.tpl.html"),
        scope: {
            raExpandOnScrollBackColor: "@",
            raExpandOnScrollZIndex: "@",
            raExpandOnScrollBuffer: "@",
            raExpandOnScrollShowAtBottom: "@"
        },
        link: function(scope, element) {
            var toggleBuffer = 10, scrollTopOld = 0, scrollHeight = 0, scrollStart = 0, endReached = false, changeMode = false, minScrollHeight, currentDirection, elemContainer, directions = {
                up: "up",
                down: "down"
            }, showNav = true, zIndex = scope.raExpandOnScrollZIndex !== undefined ? parseInt(scope.raExpandOnScrollZIndex) : 1e4, navBuffer = scope.raExpandOnScrollBuffer !== undefined ? parseInt(scope.raExpandOnScrollBuffer) : 100, backColor = scope.raExpandOnScrollBackColor !== undefined ? scope.raExpandOnScrollBackColor : "white", showAtBottom = scope.raExpandOnScrollShowAtBottom !== undefined ? scope.raExpandOnScrollShowAtBottom === "true" : true;
            // Initialize variables with default values
            var setInitialScopeValues = function() {
                scope.style = {
                    top: undefined,
                    left: undefined,
                    width: undefined,
                    height: undefined,
                    position: undefined,
                    "z-index": undefined,
                    "background-color": undefined
                };
                scope.showNav = true;
                scope.doAnimate = false;
                scope.mvTop = undefined;
                scope.mvLeft = undefined;
                scope.tempHeight = undefined;
                scope.tempWidth = undefined;
            };
            // toggle the expansion
            var toggleExpand = function(value) {
                var elementStyle = {};
                if (scrollHeight < minScrollHeight && showNav || value === showNav) {
                    return;
                }
                showNav = value;
                if (!showNav) {
                    elementStyle.offsetTop = elemContainer[0].offsetTop;
                    elementStyle.offsetLeft = elemContainer[0].offsetLeft;
                    elementStyle.offsetWidth = elemContainer[0].offsetWidth;
                    elementStyle.offsetHeight = elemContainer[0].offsetHeight;
                    return $timeout(function() {
                        scope.tempHeight = elementStyle.offsetHeight + "px";
                        scope.tempWidth = elementStyle.offsetWidth + "px";
                        scope.mvTop = elementStyle.offsetTop;
                        scope.mvHeight = elementStyle.offsetHeight;
                        scope.showNav = false;
                        scope.doAnimate = true;
                        // update the element style
                        scope.style.top = elementStyle.offsetTop;
                        scope.style.left = elementStyle.offsetLeft;
                        scope.style.width = elementStyle.offsetWidth;
                        scope.style.height = elementStyle.offsetHeight;
                        scope.style.position = "fixed";
                        scope.style["z-index"] = zIndex;
                        scope.style["background-color"] = backColor;
                    }, 0).then(function() {
                        return $timeout(function() {
                            return $animate.addClass(elemContainer, "full-screen", {
                                from: {
                                    top: scope.mvTop + "px",
                                    height: scope.mvHeight + "px"
                                },
                                to: {
                                    top: 0 + "px",
                                    height: "100%"
                                }
                            });
                        }, 0);
                    });
                } else {
                    return $timeout(function() {
                        return $animate.removeClass(elemContainer, "full-screen", {
                            to: {
                                top: scope.mvTop + "px",
                                height: scope.mvHeight + "px"
                            }
                        }).then(function() {
                            return $timeout(function() {
                                setInitialScopeValues();
                            }, 0);
                        });
                    }, 0);
                }
            };
            // get the the scroll move
            var move = function(direction, changeAt) {
                if (endReached) {
                    endReached = false;
                    return;
                }
                if (currentDirection !== direction) {
                    scrollStart = changeAt;
                    changeMode = true;
                }
                currentDirection = direction;
                endReached = false;
            };
            // function handling the scroll event
            var handle = function() {
                // do nothing when out of the scrollHeight (rubber band effect)
                if (this.scrollTop + this.offsetHeight > this.scrollHeight || this.scrollTop < 0) {
                    return;
                }
                // minimum height of the scroll after witch the action will be performed
                minScrollHeight = this.clientHeight + navBuffer;
                scrollHeight = this.scrollHeight;
                if (scrollTopOld > this.scrollTop) {
                    move(directions.up, this.scrollTop);
                } else if (scrollTopOld < this.scrollTop) {
                    move(directions.down, this.scrollTop);
                }
                if (changeMode && Math.abs(scrollStart - this.scrollTop) > navBuffer) {
                    toggleExpand(scrollStart > this.scrollTop);
                    changeMode = false;
                }
                scrollTopOld = this.scrollTop;
                if (this.scrollTop === 0 || showAtBottom && this.scrollTop + this.offsetHeight + toggleBuffer >= this.scrollHeight) {
                    toggleExpand(true);
                    endReached = true;
                    changeMode = false;
                }
            };
            elemContainer = element.findElement("#raExpandOnScrollContainer");
            elemContainer.bind("scroll", handle);
            scope.$on("$destroy", function() {
                elemContainer.unbind("scroll", handle);
            });
            setInitialScopeValues();
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raFixedHeight
 * @scope
 * @deprecated The directive is deprecated and will be removed in the future. Please see
 * the flexbox based layout replacement (CSS only).
 * @module mobile-toolkit-ra
 * @restrict E
 * @param {number=} [riFillSpacePct] Percentage of available space for this component.
 * The riFillSpacePct is optional (default value of 100).
 *
 * @description
 * __*Replacement*__: Please see for [flexbox layout](#/nonapi/flexboxLayout.md).
 *
 * The directive is responsible for adapting to available free space of container.
 *
 * Requires the {@link mobile-toolkit-ra.directive:raLayout raLayout} directive.
 *
 */
angular.module("mobile-toolkit-ra").directive("raFixedHeight", [ "$log", "$templateCache", "LAYOUT_EVENTS", function($log, $templateCache, LAYOUT_EVENTS) {
    "use strict";
    /**
             * Helper function to calculate height of component
             * by current height and available maximum height.
             * The available space in component can be restricted by 'pctOfSpace'.

             * @param {number} flexCurH Current height
             * @param {number} flexMaxH Maximum height
             * @param {number} pctOfSpace Percentage of available space of component
             *
             * @returns {number} Target height of component
             */
    var calcHeight = function(flexCurH, flexMaxH, pctOfSpace) {
        var divH = 0;
        if (flexMaxH > flexCurH) {
            divH = Math.floor((flexMaxH - flexCurH) * pctOfSpace / 100);
        } else {
            //no space for scroller NOP
            angular.noop();
        }
        return divH;
    };
    return {
        restrict: "E",
        scope: {
            //percentage of available space to fill by scroller (default 100)
            riFillSpacePct: "@?"
        },
        //raLayout is optionally required
        // - without layout won't work as expected - warning will be logged
        require: "?^raLayout",
        template: $templateCache.get("raFixedHeight/raFixedHeight.tpl.html"),
        transclude: true,
        replace: true,
        link: function(scope, element, attrs, raLayCtrl) {
            var myDiv = element[0], pctOfSpace;
            if (scope.riFillSpacePct) {
                pctOfSpace = parseInt(scope.riFillSpacePct, 10);
            }
            if (!pctOfSpace) {
                pctOfSpace = 100;
            }
            scope.$on(LAYOUT_EVENTS.LAY_RES_STEP1_HIDE, function() {
                myDiv.style.height = 0 + "px";
            });
            scope.$on(LAYOUT_EVENTS.LAY_RES_STEP3_SHOW, function(event, evMsg) {
                var curHeight;
                if (evMsg.flexCurH !== undefined) {
                    curHeight = calcHeight(evMsg.flexCurH, evMsg.flexMaxH, pctOfSpace);
                    myDiv.style.height = curHeight + "px";
                } else {
                    //flexCurH not set by flex
                    $log.error("variable flexCurH " + "isn't set in LAY_RES_STEP3_CALC broadcast message");
                }
            });
            if (!raLayCtrl) {
                //in design mode (with enabled debug)
                // it is good to have info that something isn't well configured
                $log.debug("raFixedHeight directive " + "didn't find parent raLayout", "scope.$id: " + scope.$id);
            }
            //emits message which fires resize event in layout
            scope.$emit("$includeContentLoaded");
            $log.warn("raFixedHeight directive is deprecated");
        }
    };
} ]);

/* (c) Rockwell Automation 2015 */
/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name mobile-toolkit-ra.raGrid.colSizeAdjuster
     * @module mobile-toolkit-ra.raGrid.colSizeAdjuster
     * @description
     * # mobile-toolkit-ra.raGrid.colSizeAdjuster
     * This module is a **UI Grid** plugin that allows to calculate the optimal column widths (size to content).
     */
    angular.module("mobile-toolkit-ra.raGrid.colSizeAdjuster", [ "ui.grid" ]).constant("AUTO_ADJUST_MODE", {
        /**
         * @ngdoc property
         * @propertyOf mobile-toolkit-ra.raGrid.colSizeAdjuster.api:AUTO_ADJUST_MODE
         * @name CALC_ONLY
         * @description
         * In this mode the optimal width for each column is calculated and stored in
         * {@link mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef#properties_minwidth
         * **`colDef.minWidth`**} property. **Original column widths are not altered in any way**.
         *
         * Unless this plugin is used in conjunction
         * with {@link mobile-toolkit-ra.raGrid.responsiveBehavior.directive:raGridResponsiveBehavior
         * raGridResponsiveBehavior} (which makes use of
         * {@link mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef#properties_minwidth
         * **`colDef.minWidth`**} property), there will be no effect on how the grid and columns are
         * rendered in this mode.
         */
        CALC_ONLY: 0,
        /**
         * @ngdoc property
         * @propertyOf mobile-toolkit-ra.raGrid.colSizeAdjuster.api:AUTO_ADJUST_MODE
         * @name FIXED_WIDTH
         * @description
         * In this mode the optimal width for each column is calculated and stored in
         * {@link mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef#properties_minwidth
         * **`colDef.minWidth`**} property (as it is done in **`CALC_ONLY`** mode), as well as **column's
         * width is set to this calculated value.**
         */
        FIXED_WIDTH: 1
    }).service("raGridColSizeAdjusterSvc", [ "$timeout", "$window", "gridUtil", "uiGridConstants", "AUTO_ADJUST_MODE", function($timeout, $window, gridUtil, uiGridConstants, AUTO_ADJUST_MODE) {
        var processColumnsCanceller = {}, svc = {
            defaultGridOptions: function(gridOptions) {
                /**
                     * @ngdoc object
                     * @name mobile-toolkit-ra.raGrid.colSizeAdjuster.api:GridOptions
                     * @description
                     * GridOptions for the
                     * {@link mobile-toolkit-ra.raGrid.colSizeAdjuster.directive:raGridColSizeAdjuster
                     * raGridColSizeAdjuster}, these are available to be set using the
                     * UI Grid's [gridOptions](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions).
                     * The following properties are supported by this plugin:
                     */
                /**
                     * @ngdoc property
                     * @propertyOf mobile-toolkit-ra.raGrid.colSizeAdjuster.api:GridOptions
                     * @name enableAutoAdjustColumns
                     * @description
                     * Enables the column auto-adjustment feature for this grid. Setting this option to **`false`**
                     * turns off the plugin completely. Defaults to **`true`**.
                     */
                gridOptions.enableAutoAdjustColumns = gridOptions.enableAutoAdjustColumns !== false;
                /**
                     * @ngdoc property
                     * @propertyOf mobile-toolkit-ra.raGrid.colSizeAdjuster.api:GridOptions
                     * @name autoAdjustMode
                     * @description
                     * Sets the auto-adjustment mode. Defaults to **`CALC_ONLY`**.
                     */
                gridOptions.autoAdjustMode = svc.constrainAutoAdjustMode(gridOptions.autoAdjustMode);
                /**
                     * @ngdoc property
                     * @propertyOf mobile-toolkit-ra.raGrid.colSizeAdjuster.api:GridOptions
                     * @name autoAdjustExtraPadding
                     * @description
                     * The extra amount of pixels to be added when calculating the optimal width for a column.
                     * Defaults to **`0`**.
                     */
                gridOptions.autoAdjustExtraPadding = angular.isNumber(gridOptions.autoAdjustExtraPadding) && gridOptions.autoAdjustExtraPadding > 0 ? Math.floor(gridOptions.autoAdjustExtraPadding) : 0;
                // for unit testing purposes only
                return gridOptions;
            },
            constrainAutoAdjustMode: function(mode) {
                var propertyName, found = false;
                for (propertyName in AUTO_ADJUST_MODE) {
                    if (AUTO_ADJUST_MODE.hasOwnProperty(propertyName) && typeof (AUTO_ADJUST_MODE[propertyName] !== "function") && angular.isNumber(mode) && mode === AUTO_ADJUST_MODE[propertyName]) {
                        found = true;
                        break;
                    }
                }
                return found ? mode : AUTO_ADJUST_MODE.CALC_ONLY;
            },
            findMenuButton: function(cell) {
                var element = angular.element(cell)[0].querySelectorAll(".ui-grid-column-menu-button");
                // Prevent from returning an empty array when menu button has not been found
                if (element.length > 0) {
                    return element;
                }
            },
            /**
                 * Iterates through NodeList of cell elements to find the width of the widest cell.
                 * @param {NodeList} cells the cell elements that belong to one column
                 * @returns {number} the width of the widest cell
                 */
            processCells: function(cells) {
                var menuButton, headerMenuButtonWidth = 0, headerWidth = 0, columnWidth, maxWidth, fakeElements = [], fakeColumn, fakeColumnContainer;
                // the grid cells are grouped in rows, so to measure a column we need to create a fake one
                fakeColumn = angular.element('<div class="ra-grid-fake-col" ' + 'style="display: inline-block; padding: 0; border: 0; margin: 0;"></div>');
                // clone cells and append them to the fake column
                angular.forEach(cells, function(cell) {
                    var newElement = angular.element(cell).clone();
                    // add css properties to arrange the cells into column
                    newElement.css("display", "block");
                    newElement.css("float", "none");
                    fakeElements.push(newElement);
                    fakeColumn.append(newElement[0]);
                });
                // add an empty element after the cells, to avoid matching the last-child css rule for borders
                fakeColumn.append(angular.element("<div></div>"));
                // append the fake column container to the DOM
                // an additional container will prevent the column to fill the viewport
                fakeColumnContainer = angular.element("<div></div>");
                fakeColumnContainer.append(fakeColumn);
                angular.element($window.document.body).append(fakeColumnContainer);
                // account for the menu button if it exists
                if (fakeElements[0] && fakeElements[0].hasClass("ui-grid-header-cell")) {
                    // revert the 'display' style
                    fakeElements[0].css("display", "table-cell");
                    // find menu button
                    menuButton = svc.findMenuButton(fakeElements[0]);
                    // check the width of the menu button and compute the full header width
                    if (menuButton) {
                        headerMenuButtonWidth = gridUtil.elementWidth(menuButton);
                        headerWidth = gridUtil.elementWidth(fakeElements[0]) + headerMenuButtonWidth;
                    }
                }
                // measure the width of the whole column at once
                columnWidth = gridUtil.elementWidth(fakeColumn);
                // remove the cloned elements
                fakeColumnContainer.remove();
                fakeElements = undefined;
                // check if the header together with the button is wider than the whole column
                maxWidth = Math.max(columnWidth, headerWidth);
                return maxWidth;
            },
            initializeGrid: function(grid, element) {
                if (grid.options.columnDefs.length === 0) {
                    gridUtil.logWarn('raGridColSizeAdjuster: you have not provided "grid.options.columnDefs", ' + "disabling plugin. Column definitions are mandatory for this plugin to work.");
                    return;
                }
                svc.defaultGridOptions(grid.options);
                // wait for Angular to finish rendering the content
                // so that the cells appear inside the render container
                if (grid.options.enableAutoAdjustColumns) {
                    svc.processColumnsWithTimeout("initialization", grid, element);
                }
            },
            adjustColumn: function(col, grid, element) {
                var cells, maxWidth, optimalWidth, selector, renderContainerElm = element[0].querySelector("div.ui-grid-render-container"), chevronWithPaddingLength = 19;
                // get the cell contents so we measure correctly. For the header cell we have to account for
                // the sort icon and the menu buttons, if present
                selector = "." + uiGridConstants.COL_CLASS_PREFIX + col.uid;
                cells = renderContainerElm.querySelectorAll(selector);
                // quick fix when we are here and column is not shown for some reason
                if (cells.length === 0 && col.colDef.minWidth > grid.options.autoAdjustExtraPadding) {
                    // we have already calculation and items are not on the screen
                    return;
                }
                maxWidth = svc.processCells(cells);
                if (col.colDef.isExpandable) {
                    maxWidth += chevronWithPaddingLength;
                }
                // ensure that the optimal width doesn't exceed maxWidth
                optimalWidth = Math.ceil(svc.constrainWidth(col, maxWidth + grid.options.autoAdjustExtraPadding));
                // for both modes (FIXED_WIDTH / CALC_ONLY) set column's minWidth, which can be
                // utilized by raGridResponsiveBehavior plugin, if present
                col.colDef.minWidth = optimalWidth;
                col.minWidth = optimalWidth;
                // set the actual column width if we're in FIXED_WIDTH mode
                if (grid.options.autoAdjustMode === AUTO_ADJUST_MODE.FIXED_WIDTH) {
                    col.colDef.width = optimalWidth;
                    col.width = optimalWidth;
                }
            },
            processColumns: function(grid, element) {
                var i, col;
                for (i = 0; i < grid.columns.length; i++) {
                    col = grid.columns[i];
                    //quick fix when we are here and column is not shown for some reason
                    if (col.visible === true) {
                        svc.adjustColumn(col, grid, element);
                    }
                }
                grid.isAdjustingColumns = false;
                if (angular.isDefined(grid.api.responsive)) {
                    grid.api.responsive.manageColumnsVisibility();
                }
                grid.queueGridRefresh();
            },
            constrainWidth: function(col, width) {
                var newWidth = width;
                // don't allow new width to go beyond colDef.maxWidth
                if (col.colDef.maxWidth && newWidth > col.colDef.maxWidth) {
                    newWidth = col.colDef.maxWidth;
                }
                return newWidth;
            },
            processColumnsWithTimeout: function(source, grid, element) {
                if (processColumnsCanceller[grid.id]) {
                    $timeout.cancel(processColumnsCanceller[grid.id]);
                }
                processColumnsCanceller[grid.id] = $timeout(function() {
                    svc.showAllColumns(grid);
                    grid.refresh().then(function() {
                        // need to call it in timeout because the real grid refresh (refreshCanvas)
                        // happens after timeout
                        $timeout(function() {
                            svc.processColumns(grid, element);
                        });
                    });
                });
                processColumnsCanceller[grid.id].then(function() {
                    delete processColumnsCanceller[grid.id];
                });
            },
            /**
                 * Shows all columns in data grid.
                 *
                 * Showing all columns is required to properly calculate minWidths for columns. This is because when a
                 * column is hidden, its elements (cells) are not present in the DOM, thus minWidth for hidden column
                 * would be calculated as 0, which is not acceptable.
                 * @param {Grid} the grid object
                 */
            showAllColumns: function(grid) {
                var i, colCnt = grid.columns.length;
                // use the implementation from raGridResponsiveBehaviorSvc if available
                if (angular.isDefined(grid.api.responsive)) {
                    grid.api.responsive.showAllColumns();
                } else {
                    for (i = 0; i < colCnt; i++) {
                        grid.columns[i].showColumn();
                    }
                }
            }
        };
        return svc;
    } ]).directive("raGridColSizeAdjuster", [ "raGridColSizeAdjusterSvc", "uiGridConstants", function(raGridColSizeAdjusterSvc, uiGridConstants) {
        return {
            // in order to work nicely with raGridResponsiveBehavior plugin (priority 1), this one needs to be executed
            // first to populate each colDef's minDisplayableWidth property
            priority: 2,
            scope: false,
            require: "^uiGrid",
            link: {
                pre: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid;
                    raGridColSizeAdjusterSvc.initializeGrid(grid, element);
                },
                post: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid, unregWidthWatch, unregDataChange, runProcessColumns = function(source) {
                        // set the state variable to indicate other plugins that column adjusting is being performed
                        grid.isAdjustingColumns = true;
                        raGridColSizeAdjusterSvc.processColumnsWithTimeout(source, grid, element);
                    };
                    if (grid.options.enableAutoAdjustColumns === false) {
                        return;
                    }
                    if (!scope.grids) {
                        scope.grids = {};
                    }
                    scope.grids[grid.id] = grid;
                    element.on("$destroy", function() {
                        unregWidthWatch();
                        if (unregDataChange) {
                            unregDataChange();
                        }
                        delete scope.grids[grid.id];
                    });
                    if (grid.api.pager) {
                        // occurs when page index changes
                        grid.api.pager.on.raGridPagerPageChanged(scope, function() {
                            runProcessColumns("pageChanged");
                        });
                        // occurs when grid.options.data and/or grid.options.rowsPerPage change
                        grid.api.pager.on.raGridPagerUpdated(scope, function() {
                            runProcessColumns("pagerUpdated");
                        });
                        // occurs when sort order is changed.
                        grid.api.core.on.sortChanged(scope, function() {
                            // to have better performance we should do this when more pages are present.
                            if (grid.api.pager.getMaxPages() > 1) {
                                runProcessColumns("sortChanged");
                            }
                        });
                    } else {
                        // in case there's no pager plugin available, we need to register for dataset changes
                        unregDataChange = grid.registerDataChangeCallback(function() {
                            runProcessColumns("data");
                        }, [ uiGridConstants.dataChange.ROW ]);
                    }
                    unregWidthWatch = scope.$watch("grids[" + grid.id + "].gridWidth", function(newWidth, oldWidth) {
                        if (newWidth !== oldWidth && angular.isDefined(grid.options.expandableColIndex)) {
                            raGridColSizeAdjusterSvc.adjustColumn(grid.columns[grid.options.expandableColIndex], grid, element);
                        }
                    });
                }
            }
        };
    } ]);
})();

/* (c) Rockwell Automation 2014 */
/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name mobile-toolkit-ra.raGrid.paging
     * @module mobile-toolkit-ra.raGrid.paging
     * @description
     * # mobile-toolkit-ra.raGrid.paging
     * This module provides paging support for ui-grid.
     */
    angular.module("mobile-toolkit-ra.raGrid.paging", [ "ui.grid" ]).service("raGridPagingSvc", [ function() {
        var isInteger = function(input) {
            return angular.isNumber(input) && input % 1 === 0;
        };
        var svc = {
            /**
             * @ngdoc method
             * @name initializeGrid
             * @methodOf mobile-toolkit-ra.raGrid.paging.service:raGridPagingSvc
             * @description
             * Performs necessary plugin initialization by setting its options, registering a rows
             * processor function and registering pager's public API.
             * @param {Grid} grid The grid object we want to work with
             */
            initializeGrid: function(grid) {
                var currentRowsPerPage;
                var getRecordsPosition = function() {
                    var pageSize = grid.options.rowsPerPage, visibleRecords = grid.pager.visibleRows, start, end;
                    if (grid.options.enablePaging) {
                        start = (grid.pager.page - 1) * pageSize + 1;
                        end = start + pageSize - 1;
                        if (end > visibleRecords) {
                            end = visibleRecords;
                        }
                    } else {
                        start = 1;
                        end = visibleRecords;
                    }
                    return {
                        start: start,
                        end: end,
                        totalRecords: grid.options.data.length,
                        visibleRecords: visibleRecords
                    };
                };
                var getMaxPages = function(totalRecords) {
                    if (grid.options.enablePaging) {
                        if (isInteger(totalRecords)) {
                            grid.pager.maxPages = Math.ceil(totalRecords / grid.options.rowsPerPage);
                        } else if (angular.isArray(grid.options.data)) {
                            grid.pager.maxPages = Math.ceil(grid.pager.visibleRows / grid.options.rowsPerPage);
                        } else {
                            grid.pager.maxPages = 0;
                        }
                    } else {
                        grid.pager.maxPages = 1;
                    }
                    return grid.pager.maxPages;
                };
                var gotoPage = function(pageNumber) {
                    if (isInteger(pageNumber) && pageNumber >= 1 && pageNumber <= grid.pager.maxPages) {
                        grid.pager.page = pageNumber;
                        grid.queueGridRefresh();
                    }
                    return getRecordsPosition();
                };
                var setData = function(data) {
                    if (angular.isArray(data)) {
                        grid.options.data = data;
                    }
                };
                var setRowsPerPage = function(rowsPerPage) {
                    var currentPageMiddleItem;
                    if (isInteger(rowsPerPage) && rowsPerPage >= 1 && rowsPerPage !== currentRowsPerPage) {
                        // get index of middle item on current page
                        currentPageMiddleItem = (grid.pager.page - 1) * currentRowsPerPage;
                        if (grid.pager.page === grid.pager.maxPages) {
                            currentPageMiddleItem += Math.ceil((grid.pager.visibleRows - currentPageMiddleItem) / 2);
                        } else {
                            currentPageMiddleItem += Math.ceil(currentRowsPerPage / 2);
                        }
                        grid.options.rowsPerPage = rowsPerPage;
                        currentRowsPerPage = rowsPerPage;
                        grid.pager.maxPages = Math.ceil(grid.pager.visibleRows / rowsPerPage);
                        grid.pager.page = currentPageMiddleItem === 0 ? 1 : Math.ceil(currentPageMiddleItem / rowsPerPage);
                        grid.queueGridRefresh();
                    }
                };
                /**
                 * @ngdoc object
                 * @name mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                 * @description
                 * Public API for the pager feature.
                 */
                var publicApi = {
                    events: {
                        pager: {
                            /**
                             * @ngdoc event
                             * @name raGridPagerPageChanged
                             * @eventOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @description
                             * The event is raised whenever there is a change of the currently displayed page.
                             *
                             * You can setup a listener for this event:
                             * <pre>
                             * grid.api.pager.on.raGridPagerPageChanged(scope, function () {
                             *    // do something with pager object, call its API, etc...
                             * });
                             * </pre>
                             * <div class="alert alert-info" role="alert">
                             * **Note**: When the event is raised, another event with the same name is **`$emit`**ted
                             * up the scope hierarchy. However, listening on such event is deprecated
                             * and in future releases the event will not be emitted.
                             * Instead, you should use the pager feature event as mentioned above.
                             * </div>
                             */
                            raGridPagerPageChanged: function() {},
                            /**
                             * @ngdoc event
                             * @name raGridPagerUpdated
                             * @eventOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @description
                             * The event is raised whenever there is a change to the
                             * {@link mobile-toolkit-ra.raGrid.paging.api:GridOptions grid.options.rowsPerPage}, the
                             * [grid.options.data](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions) array
                             * or the number of visible rows.
                             *
                             * You can setup a listener for this event:
                             * <pre>
                             * grid.api.pager.on.raGridPagerUpdated(scope, function () {
                             *    // do something with pager object, call its API, etc...
                             * });
                             * </pre>
                             * <div class="alert alert-info" role="alert">
                             * **Note**: When the event is raised, another event with the same name is **`$emit`**ted
                             * up the scope hierarchy passing two parameters - the instance of the `grid.api.pager`
                             * object and the id of the `grid` object. However, listening on such event is deprecated
                             * and in future releases the event will not be emitted.
                             * Instead, you should use the pager feature event as mentioned above.
                             * </div>
                             */
                            raGridPagerUpdated: function() {}
                        }
                    },
                    methods: {
                        pager: {
                            /**
                             * @ngdoc method
                             * @name getPage
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @description
                             * Returns the number of the current page.
                             * @returns {number} The number (index) of the current page. The page index is 1-based.
                             */
                            getPage: function() {
                                return grid.pager.page;
                            },
                            /**
                             * @ngdoc method
                             * @name getMaxPages
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @description
                             * Returns the number of pages (last page index) in current data set.
                             * @returns {number} The number of pages in current dataset.
                             */
                            getMaxPages: function(totalRecords) {
                                return getMaxPages(totalRecords);
                            },
                            /**
                             * @ngdoc method
                             * @name gotoPage
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @param {number} pageNumber 1-based page index to navigate to
                             * @description
                             * Navigates to the specified page index.
                             * @returns {object} An object containing the following properties:
                             *
                             * - **`start`** - **`{number}`** - the index of the first row in a new data page
                             * - **`end`** - **`{number}`** - the index of the last row in a new data page
                             * - **`totalRecords`** - **`{number}`** - the total number of records
                             *   in the current data set
                             * - **`visibleRecords`** - **`{number}`** - the total number of visible records
                             *   in the current data set
                             *
                             * All indexes are 1-based.
                             */
                            gotoPage: function(pageNumber) {
                                return gotoPage(pageNumber);
                            },
                            /**
                             * @ngdoc method
                             * @name getRecordsPosition
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @description
                             * Returns an object containing information on first and last record positions
                             * of the current data page, as well as the total number of records of the current
                             * data set.
                             * @returns {object} An object containing the following properties:
                             *
                             * - **`start`** - **`{number}`** - the index of the first row in a new data page
                             * - **`end`** - **`{number}`** - the index of the last row in a new data page
                             * - **`totalRecords`** - **`{number}`** - the total number of records
                             *   in the current data set
                             * - **`visibleRecords`** - **`{number}`** - the total number of visible records
                             *   in the current data set
                             *
                             * All indexes are 1-based.
                             */
                            getRecordsPosition: function() {
                                return getRecordsPosition();
                            },
                            /**
                             * @ngdoc method
                             * @name setData
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @deprecated
                             * @param {array} data the new data set for the grid
                             * @description
                             * Sets the new data set for the grid. Does nothing if the new data is not an array.
                             * <div class="alert alert-info" role="alert">
                             * **Note**: The method is deprecated. Instead, you should set the
                             * [grid.options.data](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions)
                             * array directly.
                             * </div>
                             */
                            setData: function(data) {
                                setData(data);
                            },
                            /**
                             * @ngdoc method
                             * @name setRowsPerPage
                             * @methodOf mobile-toolkit-ra.raGrid.paging.api:PublicAPI
                             * @param {number} rowsPerPage the new page size, must be greater than 0
                             * @description
                             * Sets the new page size and navigates to the page containing the middle
                             * element of the current page.
                             */
                            setRowsPerPage: function(rowsPerPage) {
                                setRowsPerPage(rowsPerPage);
                            }
                        }
                    }
                };
                svc.defaultGridOptions(grid.options);
                grid.pager = {
                    page: 1,
                    visibleRows: angular.isArray(grid.options.data) ? grid.options.data.length : 0,
                    maxPages: 0
                };
                grid.pager.maxPages = publicApi.methods.pager.getMaxPages();
                currentRowsPerPage = grid.options.rowsPerPage;
                grid.api.registerMethodsFromObject(publicApi.methods);
                grid.api.registerEventsFromObject(publicApi.events);
                grid.registerRowsProcessor(svc.pagerRowsProcessor, 900);
            },
            defaultGridOptions: function(gridOptions) {
                /**
                 *  @ngdoc object
                 *  @name mobile-toolkit-ra.raGrid.paging.api:GridOptions
                 *  @description
                 *  GridOptions for the pager feature, these are available to be set using the ui-grid
                 *  [gridOptions](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions).
                 */
                /**
                 *  @ngdoc object
                 *  @name enablePaging
                 *  @propertyOf mobile-toolkit-ra.raGrid.paging.api:GridOptions
                 *  @description
                 *  Indicates whether to enable or disable the pager for this grid. Defaults to **`true`**.
                 */
                gridOptions.enablePaging = gridOptions.enablePaging !== false;
                /**
                 *  @ngdoc object
                 *  @name rowsPerPage
                 *  @propertyOf mobile-toolkit-ra.raGrid.paging.api:GridOptions
                 *  @description
                 *  The number of rows that should be displayed per page. Defaults to **10**.
                 */
                gridOptions.rowsPerPage = isInteger(gridOptions.rowsPerPage) ? gridOptions.rowsPerPage : 10;
            },
            pagerRowsProcessor: function(renderableRows) {
                var firstRow, visibleRows;
                // when this function is called by the grid, "this" points to
                // the grid object
                if (!this.options.enablePaging) {
                    return renderableRows;
                }
                visibleRows = renderableRows.filter(function(row) {
                    return row.visible;
                });
                this.pager.visibleRows = visibleRows.length;
                this.pager.maxPages = Math.ceil(visibleRows.length / this.options.rowsPerPage);
                if (this.pager.page > this.pager.maxPages) {
                    firstRow = 0;
                    this.pager.page = 1;
                } else {
                    firstRow = (this.pager.page - 1) * this.options.rowsPerPage;
                }
                return visibleRows.slice(firstRow, firstRow + this.options.rowsPerPage);
            },
            isInteger: function(input) {
                return isInteger(input);
            }
        };
        return svc;
    } ]).directive("raGridPaging", [ "raGridPagingSvc", "uiGridConstants", function(raGridPagingSvc, uiGridConstants) {
        return {
            priority: -400,
            scope: false,
            require: "^uiGrid",
            link: {
                pre: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid;
                    raGridPagingSvc.initializeGrid(grid);
                },
                post: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid, unregRowsWatch, unregPageWatch, unregDataChange, unregVisibleRows;
                    if (!scope.grids) {
                        scope.grids = {};
                    }
                    scope.grids[grid.id] = grid;
                    element.on("$destroy", function() {
                        unregRowsWatch();
                        unregPageWatch();
                        unregDataChange();
                        unregVisibleRows();
                        delete scope.grids[grid.id];
                    });
                    unregDataChange = grid.registerDataChangeCallback(function() {
                        scope.$emit("raGridPagerUpdated", grid.api.pager, grid.id);
                        grid.api.pager.raise.raGridPagerUpdated();
                    }, [ uiGridConstants.dataChange.ROW ]);
                    unregRowsWatch = scope.$watch("grids[" + grid.id + "].options.rowsPerPage", function(newValue, oldValue) {
                        if (grid.options.enablePaging && newValue !== oldValue) {
                            grid.api.pager.setRowsPerPage(newValue);
                            scope.$emit("raGridPagerUpdated", grid.api.pager, grid.id);
                            grid.api.pager.raise.raGridPagerUpdated();
                        }
                    });
                    unregPageWatch = scope.$watch("grids[" + grid.id + "].api.pager.getPage()", function(newPage, previousPage) {
                        if (newPage !== previousPage) {
                            scope.$emit("raGridPagerPageChanged");
                            grid.api.pager.raise.raGridPagerPageChanged();
                        }
                    });
                    unregVisibleRows = scope.$watch("grids[" + grid.id + "].pager.visibleRows", function(newValue, oldValue) {
                        if (newValue !== oldValue) {
                            scope.$emit("raGridPagerUpdated", grid.api.pager, grid.id);
                            grid.api.pager.raise.raGridPagerUpdated();
                        }
                    });
                }
            }
        };
    } ]);
})();

/* (c) Rockwell Automation 2015 */
/* global angular */
angular.module("mobile-toolkit-ra").directive("raGridPagingUi", [ "$templateCache", "raGridPagingSvc", function($templateCache, raGridPagingSvc) {
    "use strict";
    var defaultOptions = function(options) {
        options.enablePaging = options.enablePaging !== false;
        options.rowsPerPage = raGridPagingSvc.isInteger(options.rowsPerPage) ? options.rowsPerPage : 10;
        options.hideSinglePagePager = options.hideSinglePagePager === true;
    };
    var isPagerVisible = function(options, numberOfPages) {
        return options.enablePaging && (options.hideSinglePagePager ? numberOfPages > 1 : true);
    };
    return {
        restrict: "AE",
        scope: {
            options: "=?"
        },
        replace: true,
        template: $templateCache.get("raGridPaging/raGridPagingUi.tpl.html"),
        link: {
            pre: function(scope) {
                var originalOnRegisterApi;
                var onRegisterApi = function(gridApi) {
                    var i;
                    scope.pager = gridApi.pager;
                    scope.maxPages = gridApi.pager.getMaxPages();
                    scope.isPagerVisible = isPagerVisible(scope.options, scope.maxPages);
                    scope.recordsPosition = gridApi.pager.getRecordsPosition();
                    scope.pages = [];
                    for (i = 0; i < scope.maxPages; i++) {
                        scope.pages.push(i + 1);
                    }
                    gridApi.pager.on.raGridPagerUpdated(scope, function() {
                        scope.onPagerUpdated();
                    });
                    gridApi.pager.on.raGridPagerPageChanged(scope, function() {
                        scope.unwatchPageIndex();
                        scope.pageIndex = scope.pager.getPage();
                        scope.unwatchPageIndex = scope.$watch("pageIndex", scope.onPageIndexChanged);
                        scope.recordsPosition = scope.pager.getRecordsPosition();
                    });
                };
                scope.onPageIndexChanged = function(newIndex, oldIndex) {
                    if (newIndex !== oldIndex) {
                        scope.recordsPosition = scope.pager.gotoPage(newIndex);
                    }
                };
                scope.onPagerUpdated = function() {
                    var currentPageIndex, i;
                    scope.maxPages = scope.pager.getMaxPages();
                    scope.isPagerVisible = isPagerVisible(scope.options, scope.maxPages);
                    scope.recordsPosition = scope.pager.getRecordsPosition();
                    currentPageIndex = scope.pager.getPage();
                    scope.pages = [];
                    for (i = 0; i < scope.maxPages; i++) {
                        scope.pages.push(i + 1);
                    }
                    if (scope.pageIndex !== currentPageIndex) {
                        // unbind watch, set new page index and then re-bind watch to avoid
                        // unnecessary call to grid.refresh(), which has already been called
                        // inside the pager
                        scope.unwatchPageIndex();
                        scope.pageIndex = currentPageIndex;
                        scope.unwatchPageIndex = scope.$watch("pageIndex", scope.onPageIndexChanged);
                    }
                };
                defaultOptions(scope.options);
                if (angular.isFunction(scope.options.onRegisterApi)) {
                    originalOnRegisterApi = scope.options.onRegisterApi;
                    // override the onRegisterApi
                    scope.options.onRegisterApi = function(gridApi) {
                        // call original function
                        originalOnRegisterApi(gridApi);
                        // call directive's implementation
                        onRegisterApi(gridApi);
                    };
                } else {
                    scope.options.onRegisterApi = onRegisterApi;
                }
            },
            post: function(scope) {
                scope.pages = [];
                scope.pages.push(1);
                scope.pageIndex = 1;
                scope.unwatchPageIndex = scope.$watch("pageIndex", scope.onPageIndexChanged);
                scope.raGridPagingApi = {
                    previousPage: function() {
                        var newPage = scope.pageIndex - 1;
                        scope.pageIndex = Math.max(newPage, 1);
                    },
                    nextPage: function() {
                        var newPage = scope.pageIndex + 1;
                        scope.pageIndex = Math.min(newPage, scope.maxPages);
                    },
                    getRecordsPosition: function() {
                        return scope.pager ? scope.pager.getRecordsPosition() : {
                            start: 0,
                            end: 0,
                            totalRecords: 0,
                            visibleRecords: 0
                        };
                    },
                    getMaxPages: function() {
                        return scope.pager ? scope.pager.getMaxPages() : 0;
                    }
                };
            }
        }
    };
} ]);

/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name mobile-toolkit-ra.raGrid.resizeListener
     * @module mobile-toolkit-ra.raGrid.resizeListener
     * @description
     * # mobile-toolkit-ra.raGrid.resizeListener
     * This module is a **UI Grid** plugin that listens to grid's size changes in both dimensions
     * (horizontally and vertically).
     */
    angular.module("mobile-toolkit-ra.raGrid.resizeListener", [ "ui.grid" ]).service("raGridResizeListenerSvc", function() {
        var svc = {
            initializeGrid: function(grid) {
                /**
                 * @ngdoc object
                 * @name mobile-toolkit-ra.raGrid.resizeListener.api:GridOptions
                 * @description
                 * GridOptions for the **`raGridResizeListener`** plugin, these are available to be set using the
                 * UI Grid's [gridOptions](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions). The following
                 * properties are supported by this plugin:
                 */
                /**
                 * @ngdoc property
                 * @propertyOf mobile-toolkit-ra.raGrid.resizeListener.api:GridOptions
                 * @name enableAutoResize
                 * @description
                 * Enables listening to grid's size changes in both dimensions (**x** and **y**).
                 * Defaults to **`true`**.
                 */
                grid.options.enableAutoResize = grid.options.enableAutoResize !== false;
            }
        };
        return svc;
    }).directive("raGridResizeListener", [ "gridUtil", "raGridResizeListenerSvc", "$interval", function(gridUtil, raGridResizeListenerSvc, $interval) {
        return {
            require: "uiGrid",
            scope: false,
            link: {
                pre: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid;
                    raGridResizeListenerSvc.initializeGrid(grid);
                },
                post: function(scope, element, attrs, uiGridCtrl) {
                    var prevWidth, prevHeight, grid = uiGridCtrl.grid;
                    function getDimensions() {
                        prevWidth = gridUtil.elementWidth(element);
                        prevHeight = gridUtil.elementHeight(element);
                    }
                    if (!grid.options.enableAutoResize) {
                        return;
                    }
                    getDimensions();
                    scope.stop = $interval(function() {
                        var newWidth = gridUtil.elementWidth(element);
                        var newHeight = gridUtil.elementHeight(element);
                        if (newWidth !== prevWidth || newHeight !== prevHeight) {
                            grid.gridWidth = newWidth;
                            grid.gridHeight = newHeight;
                            grid.refresh().then(function() {
                                getDimensions();
                            });
                        }
                    }, 250);
                    scope.$on("$destroy", function() {
                        $interval.cancel(scope.stop);
                    });
                }
            }
        };
    } ]);
})();

/* (c) Rockwell Automation 2014 */
/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name mobile-toolkit-ra.raGrid.responsiveBehavior
     * @module mobile-toolkit-ra.raGrid.responsiveBehavior
     * @description
     * # mobile-toolkit-ra.raGrid.responsiveBehavior
     * This module is a **UI Grid** plugin that delivers and implements the responsive behavior for the grid component.
     */
    angular.module("mobile-toolkit-ra.raGrid.responsiveBehavior", [ "ui.grid" ]).constant("TEMPLATE_NAMES", function() {
        var templatePrefix = "raGridResponsiveBehavior/";
        var templateNames = {
            EXPANDABLE_CELL: templatePrefix + "expandableCell.tpl.html",
            EXPANDABLE_ROW: templatePrefix + "expandableRow.tpl.html",
            EXPANDABLE_SCROLL_FILLER: templatePrefix + "expandableScrollFiller.tpl.html"
        };
        return templateNames;
    }()).directive("measureHeight", [ "raGridResponsiveBehaviorSvc", function(raGridResponsiveBehaviorSvc) {
        return {
            scope: false,
            link: function(scope, element) {
                var unreg;
                raGridResponsiveBehaviorSvc.measureHeight(element, scope.row);
                scope.adjustRowHeight = function() {
                    raGridResponsiveBehaviorSvc.measureHeight(element, scope.row);
                };
                unreg = scope.row.grid.api.responsive.on.raGridUpdateRowHeight(scope, scope.adjustRowHeight);
                scope.$on("$destroy", function() {
                    unreg();
                });
            }
        };
    } ]).directive("raGridResponsiveExpandableTemplate", [ "$compile", function($compile) {
        return {
            scope: false,
            replace: true,
            link: function(scope, element) {
                var el, html;
                scope.customFilter = scope.column.cellFilter ? " | " + scope.column.cellFilter : "";
                // Create the content of the row
                if (scope.column.templateUrl !== undefined) {
                    html = '<span ng-include="column.templateUrl" onload="adjustRowHeight()"></span>';
                } else if (scope.column.template !== undefined) {
                    html = scope.column.template;
                } else {
                    html = "{{column.value " + scope.customFilter + "}}";
                }
                // Add the column name to the content
                if (scope.column.showColumnName !== false) {
                    html = "<strong>{{column.name}}</strong>: " + html;
                }
                // Wrap with HTML tags to ensure that the whole content will be correctly compiled
                html = "<div>" + html + "</div>";
                el = angular.element(html);
                $compile(el)(scope);
                element.append(el);
                scope.$on("$destroy", function() {
                    el.remove();
                });
            }
        };
    } ]).service("raGridResponsiveBehaviorErrorMessagesSvc", function() {
        var svc = {
            getNoColumnDefsMsg: function() {
                var msg = [ 'raGridResponsiveBehavior: you have not provided "grid.options.columnDefs", disabling plugin. ', "Column definitions are mandatory for this plugin to work." ];
                return msg.join("");
            }
        };
        return svc;
    }).service("raGridResponsiveBehaviorSvc", [ "$templateCache", "TEMPLATE_NAMES", "gridUtil", "raGridResponsiveBehaviorErrorMessagesSvc", "$timeout", "uiGridConstants", function($templateCache, TEMPLATE_NAMES, gridUtil, raGridResponsiveBehaviorErrorMessagesSvc, $timeout, uiGridConstants) {
        var errMsgsSvc = raGridResponsiveBehaviorErrorMessagesSvc;
        var defaultGridOptions = function(gridOptions) {
            /**
             * @ngdoc object
             * @name mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * ColumnDef for the **`raGridResponsiveBehavior`** plugin, these are available to be set using the
             * UI Grid's [gridOptions.columnDefs](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions.columnDef).
             */
            /**
             * @ngdoc property
             * @name minWidth
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Minimum width in pixels for a column to be displayed. This value, if provided, is used
             * in the first place when the manage columns' visibility cycle occurs (this happens whenever the grid
             * component changes is width).
             *
             * <div class="alert alert-info" role="alert">
             *    **Note:** If **{@link mobile-toolkit-ra.raGrid.responsiveBehavior.directive:raGridResponsiveBehavior
             *    raGridResponsiveBehavior}** is used with
             *    **{@link mobile-toolkit-ra.raGrid.colSizeAdjuster.directive:raGridColSizeAdjuster
             *    raGridColSizeAdjuster}** plugin, you shouldn't set or override this property manually.
             *    **`raGridColSizeAdjuster`** calculates and sets this property internally for each column based on the
             *    data currently displayed inside the grid.
             * </div>
             */
            /**
             * @ngdoc property
             * @name expRowTemplate
             * @type string
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Custom template string to be used to render the content of a hidden column under
             * the expandable row.
             *
             * Example template string:
             * <pre>
             *     <i class="ra-icon-favorited" style="color: {{ row.entity.color }}"></i>
             *     <strong>{{ column.name }}</strong>: {{ row.entity.paint }}
             * </pre>
             */
            /**
             * @ngdoc property
             * @name expRowTemplateUrl
             * @type string
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Custom template URL to be used to render the content of a hidden column under
             * the expandable row. It takes precedence over the `expRowTemplate` when both are provided.
             */
            /**
             * @ngdoc property
             * @name expRowShowColumnName
             * @type string
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Allows to define if the name of a hidden column should precede its content
             * in the expandable row.
             *
             * Defaults to **`false`**.
             */
            /**
             * @ngdoc property
             * @name isExpandable
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Set this property to `true` to mark a column as expandable.
             * Should any column become hidden by the responsive behavior mechanism, the expandable column will display
             * a clickable icon. Once clicked, the row will expand and reveal the values of hidden columns.
             *
             * If two or more columns are marked as expandable, only the first one will be taken into account
             * (starting from the leftmost column).
             *
             * Defaults to **`false`**.
             */
            /**
             * @ngdoc property
             * @name raHidingOrder
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:ColumnDef
             * @description
             * (**Optional**) Set this property to a number greater than 0 to define the order in which columns
             * will become hidden when using the responsive behavior mechanism.
             *
             * A column with the lowest value of the property will be hidden first.
             * If there are more columns sharing the same value of the property,
             * they will become hidden from right to left.
             *
             * Defaults to **`999`**.
             */
            /**
             * @ngdoc object
             * @name mobile-toolkit-ra.raGrid.responsiveBehavior.api:GridOptions
             * @description
             * GridOptions for the **`raGridResponsiveBehavior`** plugin, these are available to be set using the
             * UI Grid's [gridOptions](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions). The following
             * properties are supported by this plugin:
             */
            /**
             * @ngdoc property
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:GridOptions
             * @name enableResponsiveBehavior
             * @description
             * Enables responsive behavior for this grid. Setting this option to **`false`** turns off the plugin
             * completely. Defaults to **`true`**.
             */
            gridOptions.enableResponsiveBehavior = gridOptions.enableResponsiveBehavior !== false;
            /**
             * @ngdoc property
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:GridOptions
             * @name enableExpandableRow
             * @description
             * Indicates whether the row should be expandable if any column becomes hidden.
             * Defaults to **`true`**.
             */
            gridOptions.enableExpandableRow = gridOptions.enableExpandableRow !== false;
            /**
             * @ngdoc property
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:GridOptions
             * @name allowOneExpandedRow
             * @description
             * Allows only one row being expanded at a time. When set to **`true`**, expanding a row would
             * collapse other rows. Defaults to **`false`**.
             */
            gridOptions.allowOneExpandedRow = gridOptions.allowOneExpandedRow === true;
            /**
             * @ngdoc property
             * @propertyOf mobile-toolkit-ra.raGrid.responsiveBehavior.api:GridOptions
             * @name collapseRowOnContentClick
             * @description
             * Determines if the expanded row should be collapsed, when its content is clicked.
             * Defaults to **`true`**.
             */
            gridOptions.collapseRowOnContentClick = gridOptions.collapseRowOnContentClick !== false;
        };
        var svc = {
            /**
             * For each column definition the function rewrites the value of the source property to the destination
             * property, if the destination property is undefined
             * @param {object} columnDefs column definitions object
             * @param {string} from source property
             * @param {string} to destination property
             */
            moveProperties: function(columnDefs, from, to) {
                angular.forEach(columnDefs, function(colDef) {
                    if (colDef[to] === undefined) {
                        colDef[to] = colDef[from];
                        colDef[from] = undefined;
                    }
                });
            },
            /**
             * The function determines which template should be used.
             * If the customCellTemplate parameter is set, it fetches the template. Otherwise, it applies the default
             * template. Then it decorates the template with the expandable chevron.
             * @param {object} colDef column definitions object
             */
            setExpandableCellTemplate: function(colDef) {
                var expandableCellTpl, defaultCellTpl;
                if (!colDef.cellTemplate) {
                    expandableCellTpl = $templateCache.get(TEMPLATE_NAMES.EXPANDABLE_CELL);
                    if (!colDef.customCellTemplate) {
                        defaultCellTpl = $templateCache.get("ui-grid/uiGridCell");
                        colDef.cellTemplate = expandableCellTpl.replace("CELL_CONTENTS", defaultCellTpl);
                    } else {
                        // get the custom cell template
                        colDef.cellTemplate = gridUtil.getTemplate(colDef.customCellTemplate).then(function(templateString) {
                            // replace the placeholder for the fetched template content and resolve the promise
                            return expandableCellTpl.replace("CELL_CONTENTS", templateString);
                        });
                        // the temporary template is not needed anymore
                        colDef.customCellTemplate = undefined;
                    }
                }
            },
            /**
             * Adds "isExpandable" property to each column based on values from colDef object.
             * If a column marked as "isExpandable" is detected, its index is
             * persisted as grid.options.expandableColIndex that is later on
             * referenced when columns are processed.
             * @param {object} colDef currently processed column definition
             * @param {object} col currently processed column
             * @param {GridOptions} gridOptions reference to grid.options object
             */
            columnBuilder: function(colDef, col, gridOptions) {
                var i, colCnt = col.grid.columns.length;
                if (col.isRowHeader) {
                    return;
                }
                if (colDef.isExpandable === true) {
                    col.isExpandable = true;
                    svc.setExpandableCellTemplate(colDef);
                    // figure out this column's index...
                    for (i = 0; i < colCnt; i++) {
                        if (colDef === col.grid.columns[i].colDef) {
                            gridOptions.expandableColIndex = i;
                            break;
                        }
                    }
                } else {
                    col.isExpandable = false;
                }
            },
            initializeGrid: function(grid) {
                var publicApi = {
                    methods: {
                        responsive: {
                            buildExpandableRowModel: function(row) {
                                svc.buildExpandableRowModel(row);
                            },
                            manageColumnsVisibility: function() {
                                svc.manageColumnsVisibility(grid);
                            },
                            showAllColumns: function() {
                                svc.showAllColumns(grid);
                            },
                            toggleRowExpansion: function(rowEntity) {
                                var row = grid.getRow(rowEntity);
                                if (row !== null) {
                                    svc.toggleRowExpansion(grid, row);
                                }
                            }
                        }
                    }
                };
                grid.hiddenCols = [];
                defaultGridOptions(grid.options);
                // first we need to check if grid.options.columnDefs are provided
                if (grid.options.columnDefs.length === 0) {
                    grid.options.enableResponsiveBehavior = false;
                    gridUtil.logWarn(errMsgsSvc.getNoColumnDefsMsg());
                }
                if (grid.options.enableResponsiveBehavior) {
                    grid.api.registerMethodsFromObject(publicApi.methods);
                    grid.anyColumnHidden = false;
                    grid.options.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
                    grid.scrollbarHeight = 0;
                    // move the cell template definitions to the temporary variable, to avoid loading templates
                    // before decorating them
                    svc.moveProperties(grid.options.columnDefs, "cellTemplate", "customCellTemplate");
                    // disable ui.grid.expandable's default row header, so that we'll use our custom row header template
                    // if grid.options.enableExpandableRow is set to true
                    grid.options.enableExpandableRowHeader = false;
                    if (grid.options.enableExpandableRow) {
                        // set template for expandable row
                        grid.options.expandableRowTemplate = TEMPLATE_NAMES.EXPANDABLE_ROW;
                        // replace one of ui.grid.expandable's original templates with our own tweaked version
                        $templateCache.put("ui-grid/expandableScrollFiller", $templateCache.get(TEMPLATE_NAMES.EXPANDABLE_SCROLL_FILLER));
                    }
                    // register custom column builder
                    grid.registerColumnBuilder(svc.columnBuilder);
                    // run column builders
                    grid.buildColumns().then(function() {
                        var i, col, colCnt = grid.columns.length;
                        if (angular.isUndefined(grid.options.expandableColIndex)) {
                            // if "isExpandable" column was not explicitly defined in column defs,
                            // we have two options:
                            if (grid.rowHeaderColumns && grid.rowHeaderColumns.length > 0) {
                                // 1. if there are any row headers present in grid.columns collection, we need to find
                                // the first column that is *not* a row header and make it expandable
                                for (i = 0; i < colCnt; i++) {
                                    col = grid.columns[i];
                                    if (!col.isRowHeader) {
                                        grid.options.expandableColIndex = i;
                                        col.colDef.isExpandable = true;
                                        col.isExpandable = true;
                                        svc.setExpandableCellTemplate(col.colDef);
                                        break;
                                    }
                                }
                            } else {
                                // 2. in case there are no row header columns, we will make the first (leftmost) column
                                // expandable
                                grid.options.expandableColIndex = 0;
                                col = grid.columns[0];
                                col.colDef.isExpandable = true;
                                col.isExpandable = true;
                                svc.setExpandableCellTemplate(col.colDef);
                            }
                        }
                        // after building the columns and detecting an expandable column it is safe to run
                        // manageColumnsVisibility() initially
                        svc.manageColumnsVisibility(grid);
                        // apply the cell templates for the columns which are not expandable
                        svc.moveProperties(grid.options.columnDefs, "customCellTemplate", "cellTemplate");
                    }).then(function() {
                        // ensure that we compile cell templates during grid initialization
                        grid.buildColumns().then(function() {
                            grid.preCompileCellTemplates();
                        });
                    });
                }
            },
            buildExpandableRowModel: function(row) {
                var i, col;
                if (!row.isExpanded) {
                    return;
                }
                row.entity.columns = [];
                for (i = 0; i < row.grid.columns.length; i++) {
                    col = row.grid.columns[i];
                    if (col.visible !== true) {
                        row.entity.columns.push({
                            name: col.displayName,
                            value: row.entity[col.field],
                            cellFilter: col.colDef.cellFilter,
                            template: col.colDef.expRowTemplate,
                            templateUrl: col.colDef.expRowTemplateUrl,
                            showColumnName: col.colDef.expRowShowColumnName
                        });
                    }
                }
            },
            /**
             * Returns grid's canvas width, accounting for vertical scrollbar and header columns (if present).
             * @param grid the grid object
             * @returns {number} physical amount of horizontal space (minus scrollbar width minus any column header
             * widths, if present) available for columns
             */
            getCanvasWidth: function(grid) {
                var i, hdrCol, hdrColsTotalWidth = 0, result;
                var scrollbarWidth = grid.scrollbarWidth || 0, canvasWidth = grid.getViewportWidth() - scrollbarWidth;
                // if there are any row header columns, subtract their widths from available space
                if (grid.rowHeaderColumns && grid.rowHeaderColumns.length > 0) {
                    for (i = 0; i < grid.rowHeaderColumns.length; i++) {
                        hdrCol = grid.rowHeaderColumns[i];
                        hdrColsTotalWidth += hdrCol.width;
                    }
                }
                result = canvasWidth - hdrColsTotalWidth;
                return result;
            },
            /**
             * Calculates order of hiding columns basing on raHidingOrder setting in grid.options.columnDefs.
             * Columns with lower raHidingOrder number are hidden first. If raHidingOrder is not defined
             * for given column, default 999 is taken. When there are more columns with the same raHidingOrder value
             * the right most column hides first.
             * @param grid the grid object
             * @returns {Array} Array with indexes of columns in order which defines order of hiding
             */
            calculateHidingOrder: function(grid) {
                var DEFAULT_HIDING_ORDER = 999, i, colHidingOrder, hidingOrder = [], hidingOrderMap = {}, hidingOrderLevels = [ DEFAULT_HIDING_ORDER ];
                hidingOrderMap[DEFAULT_HIDING_ORDER] = [];
                for (i = 0; i < grid.columns.length; i++) {
                    colHidingOrder = grid.columns[i].colDef.raHidingOrder;
                    if (colHidingOrder) {
                        // column hiding order is defined,
                        // put column index at the beginning of appropriate array
                        // to keep right to left order for the same order value
                        if (hidingOrderMap[colHidingOrder]) {
                            hidingOrderMap[colHidingOrder].unshift(i);
                        } else {
                            hidingOrderMap[colHidingOrder] = [ i ];
                            hidingOrderLevels.push(colHidingOrder);
                        }
                    } else {
                        // column hiding order not defined - use default
                        hidingOrderMap[DEFAULT_HIDING_ORDER].unshift(i);
                    }
                }
                hidingOrderLevels.sort(function(a, b) {
                    return a - b;
                });
                hidingOrderLevels.forEach(function(key) {
                    hidingOrder = hidingOrder.concat(hidingOrderMap[key]);
                });
                return hidingOrder;
            },
            manageColumnsVisibility: function(grid) {
                var i, j, col, freeSpace, hiddenCol, requiredWidth, hidingOrder, totalMinWidthForVisibleColumns = 0, colCnt = grid.columns.length, canvasWidth = svc.getCanvasWidth(grid), visibilityChanged = false;
                // Do not change anything when the raColSizeAdjuster plug-in performs column measuring
                if (grid.isAdjustingColumns) {
                    return;
                }
                hidingOrder = svc.calculateHidingOrder(grid);
                for (i = 0; i < colCnt; i++) {
                    col = grid.columns[i];
                    if (col.visible && col.colDef.visible !== false) {
                        totalMinWidthForVisibleColumns += col.minWidth;
                    }
                }
                freeSpace = canvasWidth - totalMinWidthForVisibleColumns;
                if (canvasWidth < totalMinWidthForVisibleColumns) {
                    // not enough free space to show all currently visible columns
                    // start hiding columns according to defined order
                    for (j = 0; j < hidingOrder.length; j++) {
                        col = grid.columns[hidingOrder[j]];
                        if (col.visible && !col.isExpandable) {
                            col.hideColumn();
                            col.visible = false;
                            visibilityChanged = true;
                            grid.hiddenCols.push(col);
                            totalMinWidthForVisibleColumns -= col.minWidth;
                            if (totalMinWidthForVisibleColumns <= canvasWidth) {
                                break;
                            }
                        }
                    }
                } else {
                    // enough space to show currently visible columns
                    freeSpace = canvasWidth - totalMinWidthForVisibleColumns;
                    // start showing columns in reverse order they were hidden, as long as there's enough space
                    requiredWidth = 0;
                    for (j = grid.hiddenCols.length - 1; j >= 0; j--) {
                        hiddenCol = grid.hiddenCols[j];
                        requiredWidth = hiddenCol.minWidth;
                        if (freeSpace >= requiredWidth) {
                            freeSpace -= requiredWidth;
                            hiddenCol.showColumn();
                            hiddenCol.visible = true;
                            visibilityChanged = true;
                            grid.hiddenCols.splice(j, 1);
                        } else {
                            break;
                        }
                    }
                }
                grid.anyColumnHidden = grid.hiddenCols.length > 0;
                if (visibilityChanged) {
                    svc.updateExpandedRows(grid);
                    grid.refresh().then(function() {
                        grid.api.responsive.raise.raGridUpdateRowHeight();
                    });
                } else {
                    // no change in columns visibility - just ensure that row height is adjusted
                    grid.api.responsive.raise.raGridUpdateRowHeight();
                }
            },
            /**
             * Iterates through visible rows and updates those that are expanded.
             * @param grid the grid object
             */
            updateExpandedRows: function(grid) {
                var i, visibleRows, row;
                if (grid.api.expandable) {
                    if (grid.anyColumnHidden) {
                        visibleRows = grid.getVisibleRows();
                        for (i = 0; i < visibleRows.length; i++) {
                            row = visibleRows[i];
                            grid.api.expandable.raise.rowExpandedStateChanged(row);
                        }
                    } else {
                        grid.api.expandable.collapseAllRows();
                    }
                }
            },
            measureHeight: function(element, row) {
                $timeout(function() {
                    svc.setExpandableRowHeight(element, row);
                });
            },
            setExpandableRowHeight: function(element, row) {
                var height = element.prop("offsetHeight");
                if (angular.isUndefined(row.expandedRowHeight)) {
                    // ui-grid 3.0.6
                    // Keep the height of the highest row, when there's more than one row expanded (prevents clipping)
                    if (svc.countExpandedRows(row.grid) < 2 || height > row.grid.options.expandableRowHeight) {
                        row.grid.options.expandableRowHeight = height;
                        element.parent().css("height", height + "px");
                    }
                } else {
                    // ui-grid 3.0.7
                    // every row has its own height
                    row.expandedRowHeight = height;
                    row.height = row.grid.options.rowHeight + height;
                }
            },
            showAllColumns: function(grid) {
                var i;
                for (i = 0; i < grid.columns.length; i++) {
                    grid.columns[i].showColumn();
                }
                grid.hiddenCols = [];
                grid.anyColumnHidden = false;
            },
            toggleRowExpansion: function(grid, row) {
                if (grid.options.allowOneExpandedRow && !row.isExpanded) {
                    grid.api.expandable.collapseAllRows();
                }
                grid.api.expandable.toggleRowExpansion(row.entity);
            },
            countExpandedRows: function(grid) {
                var expandedRowsCount = 0;
                angular.forEach(grid.rows, function(row) {
                    if (row.isExpanded) {
                        expandedRowsCount++;
                    }
                });
                return expandedRowsCount;
            }
        };
        return svc;
    } ]).directive("raGridResponsiveBehavior", [ "$rootScope", "gridUtil", "raGridResponsiveBehaviorSvc", function($rootScope, gridUtil, raGridResponsiveBehaviorSvc) {
        return {
            // ui-grid-expandable plugin executes at priority 0, so we need higher priority to set some of
            // ui-grid-expandable's required options first
            priority: 1,
            scope: false,
            require: "^uiGrid",
            link: {
                pre: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid;
                    raGridResponsiveBehaviorSvc.initializeGrid(grid);
                },
                post: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid, unregWidthWatch;
                    // An event, which should be raised when the height of the expandable rows needs to be
                    // recalculated.
                    grid.api.registerEvent("responsive", "raGridUpdateRowHeight");
                    if (!grid.options.enableResponsiveBehavior) {
                        return;
                    }
                    if (grid.api.expandable) {
                        grid.api.expandable.on.rowExpandedStateChanged(scope, function(row) {
                            grid.api.responsive.buildExpandableRowModel(row);
                        });
                    }
                    if (!scope.grids) {
                        scope.grids = {};
                    }
                    scope.grids[grid.id] = grid;
                    element.on("$destroy", function() {
                        unregWidthWatch();
                        delete scope.grids[grid.id];
                    });
                    unregWidthWatch = scope.$watch("grids[" + grid.id + "].gridWidth", function(newWidth, prevWidth) {
                        if (newWidth !== prevWidth) {
                            grid.api.responsive.manageColumnsVisibility();
                        }
                    });
                }
            }
        };
    } ]);
})();

/* (c) Rockwell Automation 2014 */
/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name mobile-toolkit-ra.raGrid.responsivePageSize
     * @module mobile-toolkit-ra.raGrid.responsivePageSize
     * @description
     * # mobile-toolkit-ra.raGrid.responsivePageSize
     * This module provides support for responsive page size (dynamically calculated based on grid element's height)
     * for [ui-grid](http://ui-grid.info/) using
     * {@link mobile-toolkit-ra.raGrid.paging.directive:raGridPaging raGrid paging} plugin.
     *
     * ## Prerequisites
     * This plug-in requires **raGrid paging plug-in** to be included and enabled in UI Grid.
     */
    angular.module("mobile-toolkit-ra.raGrid.responsivePageSize", [ "ui.grid" ]).service("raGridResponsivePageSizeSvc", [ function() {
        var defaultGridOptions = function(gridOptions) {
            /**
                     * @ngdoc object
                     * @name mobile-toolkit-ra.raGrid.responsivePageSize.api:GridOptions
                     * @description
                     * GridOptions for the responsive page size feature, these are available to be set using the
                     * UI Grid [gridOptions](http://ui-grid.info/docs/#/api/ui.grid.class:GridOptions).
                     */
            /**
                     * @ngdoc object
                     * @name enableResponsivePageSize
                     * @propertyOf mobile-toolkit-ra.raGrid.responsivePageSize.api:GridOptions
                     * @description
                     * Indicates whether to enable or disable the responsive page size for this grid.
                     * Defaults to **`true`**.
                     */
            gridOptions.enableResponsivePageSize = gridOptions.enableResponsivePageSize !== false;
            /**
                     * @ngdoc object
                     * @name minRowsPerPage
                     * @propertyOf mobile-toolkit-ra.raGrid.responsivePageSize.api:GridOptions
                     * @description
                     * The minimum number of rows per page that should be displayed if grid's height becomes too small.
                     * Defaults to **5**.
                     */
            gridOptions.minRowsPerPage = typeof gridOptions.minRowsPerPage !== "undefined" ? gridOptions.minRowsPerPage : 5;
        };
        var svc = {
            /**
                     * @ngdoc method
                     * @name initializeGrid
                     * @methodOf mobile-toolkit-ra.raGrid.responsivePageSize.service:raGridResponsivePageSizeSvc
                     * @param {Grid} grid The grid object we want to work with
                     * @description
                     * Performs necessary plugin initialization by setting its default options.
                     */
            initializeGrid: function(grid) {
                defaultGridOptions(grid.options);
            },
            /**
                     * @ngdoc method
                     * @name adjustPageSize
                     * @methodOf mobile-toolkit-ra.raGrid.responsivePageSize.service:raGridResponsivePageSizeSvc
                     * @param {Grid} grid the grid object
                     * @param {number} gridHeight new grid height
                     * @param {number} minRowsPerPage minimum number of rows to display per page,
                     *                 regardless of grid's height
                     * @returns {number} The new page size.
                     * @description
                     * Calculates the new page size based on grid's new height. Sets the new page size by calling
                     * {@link mobile-toolkit-ra.raGrid.paging.api:PublicAPI grid.pager.api.setRowsPerPage()}
                     * if the result is greater than **`minRowsPerPage`**.
                     *
                     */
            adjustPageSize: function(grid, gridHeight, minRowsPerPage) {
                var headerHeight = grid.options.showHeader ? grid.options.headerRowHeight : 0, footerHeight = grid.options.showFooter ? grid.options.footerRowHeight : 0, scrollbarHeight = grid.scrollbarHeight || 0, newPageSize = Math.floor((gridHeight - headerHeight - footerHeight - scrollbarHeight) / grid.options.rowHeight);
                if (angular.isNumber(newPageSize) && newPageSize < minRowsPerPage) {
                    newPageSize = minRowsPerPage;
                }
                if (grid.api.pager) {
                    grid.api.pager.setRowsPerPage(newPageSize);
                }
                return newPageSize;
            }
        };
        return svc;
    } ]).directive("raGridResponsivePageSize", [ "gridUtil", "raGridResponsivePageSizeSvc", function(gridUtil, raGridResponsivePageSizeSvc) {
        return {
            priority: -400,
            scope: false,
            require: "^uiGrid",
            link: {
                pre: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid;
                    raGridResponsivePageSizeSvc.initializeGrid(grid);
                },
                post: function(scope, element, attrs, uiGridCtrl) {
                    var grid = uiGridCtrl.grid, unregHeightWatch, unregMinRowsWatch;
                    if (!grid.options.enableResponsivePageSize) {
                        return;
                    }
                    if (!scope.grids) {
                        scope.grids = {};
                    }
                    scope.grids[grid.id] = grid;
                    element.on("$destroy", function() {
                        unregHeightWatch();
                        unregMinRowsWatch();
                        delete scope.grids[grid.id];
                    });
                    // adjust page size initially
                    raGridResponsivePageSizeSvc.adjustPageSize(grid, gridUtil.elementHeight(element), grid.options.minRowsPerPage);
                    unregHeightWatch = scope.$watch("grids[" + grid.id + "].gridHeight", function(newHeight, prevHeight) {
                        if (newHeight !== prevHeight) {
                            raGridResponsivePageSizeSvc.adjustPageSize(grid, newHeight, grid.options.minRowsPerPage);
                        }
                    });
                    unregMinRowsWatch = scope.$watch("grids[" + grid.id + "].options.minRowsPerPage", function(newValue, oldValue) {
                        if (newValue !== oldValue) {
                            raGridResponsivePageSizeSvc.adjustPageSize(grid, gridUtil.elementHeight(element), newValue);
                        }
                    });
                }
            }
        };
    } ]);
})();

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raHorizontalBreadcrumb", [ "$templateCache", "raNavigationSvc", "$window", "$timeout", "$q", function($templateCache, raNavigationSvc, $window, $timeout, $q) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            config: "=?"
        },
        controller: [ "$scope", function($scope) {
            $scope.dropContentLastItemsApi = function(api) {
                $scope.dropLastItemsApi = api;
            };
            $scope.dropContentChildItemsApi = function(api) {
                $scope.dropChildItemsApi = api;
            };
        } ],
        template: $templateCache.get("raHorizontalBreadcrumb/raHorizontalBreadcrumb.tpl.html"),
        link: function(scope, element) {
            var resizeHandler, itemsWidths = [], queueUpdate = $q.when(true), itemsToRemoveCount = 0, config = scope.config || {}, clickedItem, timeoutSetPosition;
            scope.measureAll = true;
            scope.totalItemsWidth = 0;
            function prepareHBList(breadcrumbItems) {
                if (breadcrumbItems === undefined) {
                    breadcrumbItems = scope.params.breadcrumbItems;
                }
                if (angular.isArray(breadcrumbItems)) {
                    if (scope.params.horizontalBreadcrumbHideFirst === true) {
                        itemsToRemoveCount = 1;
                    } else {
                        itemsToRemoveCount = 0;
                    }
                    scope.horizontalBreadcrumbList = breadcrumbItems.slice(itemsToRemoveCount);
                } else {
                    scope.horizontalBreadcrumbList = [];
                }
                if (scope.params.title && scope.params.horizontalBreadcrumbShowTitle) {
                    scope.horizontalBreadcrumbList.push({
                        name: scope.params.title
                    });
                }
            }
            function measureItems() {
                var elements = element.findElements(".ra-h-breadcrumb-item-container"), i;
                itemsWidths = [];
                scope.totalItemsWidth = 0;
                for (i = 0; i < elements.length; i++) {
                    itemsWidths[i] = elements[i].getBoundingClientRect().width;
                    scope.totalItemsWidth += itemsWidths[i];
                }
            }
            function updateItems(breadcrumbItems) {
                prepareHBList(breadcrumbItems);
                queueUpdate = queueUpdate.then(function() {
                    return doUpdateItems();
                });
            }
            function doUpdateItems() {
                scope.bShownItems = scope.horizontalBreadcrumbList.slice(0);
                scope.bHiddenItems = [];
                return $timeout(function() {
                    scope.measureAll = true;
                }, 0).then(function() {
                    // Measure items, then adjust the visibility
                    measureItems();
                    adjustVisibleItems();
                    scope.measureAll = false;
                });
            }
            function adjustVisibleItems() {
                var availableSpace = getAvailableSpace(), minFirstItemWidth = 58, visibleItems = [], hiddenItems = [], addingToVisible = true, i;
                if (scope.horizontalBreadcrumbList.length === itemsWidths.length) {
                    for (i = scope.horizontalBreadcrumbList.length - 1; i >= 0; i--) {
                        if (addingToVisible) {
                            if (availableSpace > itemsWidths[i] || availableSpace > minFirstItemWidth) {
                                visibleItems.splice(0, 0, scope.horizontalBreadcrumbList[i]);
                                availableSpace -= itemsWidths[i];
                            } else {
                                addingToVisible = false;
                                hiddenItems.push(scope.horizontalBreadcrumbList[i]);
                            }
                        } else {
                            hiddenItems.push(scope.horizontalBreadcrumbList[i]);
                        }
                    }
                    scope.bShownItems = visibleItems;
                    scope.bHiddenItems = hiddenItems;
                    // the function should be called
                    // after adjusting the items in the breadcrumb
                    setPositionDropContent();
                }
            }
            function getAvailableSpace() {
                var freeSpaceElem = element.findElement(".ra-h-breadcrumb-free-space"), usedSpace = element.findElement(".ra-h-breadcrumb-items"), space = -10;
                // with some extra space for an eventual temporary scrollbar
                if (freeSpaceElem && freeSpaceElem[0]) {
                    space += freeSpaceElem[0].getBoundingClientRect().width;
                }
                if (usedSpace && usedSpace[0]) {
                    space += usedSpace[0].getBoundingClientRect().width;
                }
                return space;
            }
            // Calculates the position of drop content which
            // should be the same as the left point of chevron.
            function getChildDropContentPosition(chevronElement) {
                var chevronPos = chevronElement && chevronElement.getBoundingClientRect(), elementPosLeft = element.prop("offsetLeft") || 0;
                return {
                    left: chevronPos && chevronPos.left - elementPosLeft
                };
            }
            // Sets the proper position of drop content which includes the child items
            // or collapses if its item goes to the hidden items
            function setPositionDropContent(timeoutDelay) {
                var curIndexItem, itemSelector = ".ra-h-breadcrumb-item-container", chevronUpSelector = ".ra-icon-drop-up", itemEl, chevronEl, targetPos;
                $timeout.cancel(timeoutSetPosition);
                timeoutSetPosition = $timeout(function() {
                    if (scope.dropChildItemsApi && scope.dropChildItemsApi.isExpanded) {
                        curIndexItem = scope.bShownItems.indexOf(clickedItem);
                        if (curIndexItem !== -1) {
                            itemEl = angular.element(element.findElements(itemSelector)[curIndexItem]);
                            chevronEl = itemEl && angular.element(itemEl.findElement(chevronUpSelector));
                            if (chevronEl && chevronEl.length > 0) {
                                targetPos = getChildDropContentPosition(chevronEl[0]);
                                scope.dropChildItemsApi.setPosition(targetPos);
                            } else {
                                // Needs run the function again
                                // until the chevron will be rendered on the page
                                setPositionDropContent(100);
                            }
                        } else {
                            scope.dropChildItemsApi.collapse();
                        }
                    }
                }, timeoutDelay);
            }
            resizeHandler = angular.element($window).on("resize", function() {
                scope.$applyAsync(function() {
                    if (scope.totalItemsWidth > 0) {
                        adjustVisibleItems();
                    } else {
                        updateItems(scope.params.breadcrumbItems);
                    }
                });
            });
            scope.onItemClick = raNavigationSvc.onItemClick;
            scope.$on("$destroy", function() {
                $timeout.cancel(timeoutSetPosition);
                angular.element($window).off("resize", resizeHandler);
                scope.stateObj.unregister();
            });
            // Provides the configuration of the horizontal breadcrumb to the raNavigationSvc service
            scope.stateObj = raNavigationSvc.register(config);
            scope.params = scope.stateObj.stateParams;
            scope.stateObj.promise.then(null, null, function(currentParams) {
                if (currentParams.hasBreadcrumbChanged) {
                    updateItems(scope.params.breadcrumbItems);
                    scope.titleIcon = scope.params.titleIcon;
                    scope.titleIconMsg = scope.params.titleIconMsg;
                }
            });
            scope.onItemChevronClick = function(curItem, event) {
                var targetPos;
                scope.bChildItems = curItem && curItem.childItems && angular.copy(curItem.childItems) || [];
                if (scope.bChildItems.length > 0) {
                    // Stores the current clicked the item
                    clickedItem = curItem;
                    // Calculates the left position of drop content which
                    // should be the same as the left point of chevron.
                    targetPos = getChildDropContentPosition(event && event.target);
                    // Runs the expand function in timeout
                    // because of necessity execute the dropContentChildItemsApi function in controller
                    // which creates the instance of dropChildItemsApi.
                    $timeout(function() {
                        scope.dropChildItemsApi.expand(targetPos);
                    });
                }
            };
            scope.dropContentConfig = {
                enableAutoResize: true,
                onCollapse: function() {
                    if (clickedItem) {
                        // Marks that the drop content is collapsed
                        // to show the proper item's chevron
                        clickedItem.isChildDisplayed = false;
                        // Cleans up after collapsing
                        clickedItem = undefined;
                    }
                },
                onExpand: function() {
                    if (clickedItem) {
                        // Marks that the drop content is expanded
                        // to show the proper item's chevron
                        clickedItem.isChildDisplayed = true;
                    }
                }
            };
            updateItems(scope.params.breadcrumbItems);
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").factory("raHttpErrorInterceptorSvc", [ "$q", "raErrorHandlerSvc", "$injector", "$rootScope", function($q, raErrorHandlerSvc, $injector, $rootScope) {
    "use strict";
    var responseError = function(rejection) {
        var deferred, thePromise, raErrorCollectorSvc, retReason;
        // If "raPassError" flag is set, the exception is not being intercepted
        if (rejection.config && rejection.config.raPassError) {
            return $q.reject(rejection);
        }
        //we care about errors in communication with VP infoplatform services ,
        //I guess that others shouldn't be reported.
        if (rejection.config && angular.isString(rejection.config.url) && rejection.config.url.indexOf($rootScope.gBaseUrl + $rootScope.gServicesUrlPfx) > -1) {
            deferred = $q.defer();
            thePromise = deferred.promise;
            //raErrorCollectorSvc needs to be retrieved by $injector,
            // cause from some reason this service isn't ready at interceptor declaration stage
            raErrorCollectorSvc = $injector.get("raErrorCollectorSvc");
            raErrorCollectorSvc.addHttpError(rejection).then(function(doRetry) {
                if (doRetry) {
                    var $http = $injector.get("$http");
                    //retry previous $http request and resolves with it's promise
                    deferred.resolve($http(rejection.config));
                } else {
                    //propagates BEFORE_HTTP_RESPONSE_ERROR message down from $rootScope
                    retReason = raErrorHandlerSvc.helper.beforeHTTPResponseError(rejection);
                    //and finally rejects as in normal $http error flow
                    deferred.reject(retReason || rejection);
                }
            });
            return thePromise;
        } else {
            //propagates BEFORE_HTTP_RESPONSE_ERROR message down from $rootScope
            retReason = raErrorHandlerSvc.helper.beforeHTTPResponseError(rejection);
            return $q.reject(retReason || rejection);
        }
    };
    return {
        //only responseError is intercepted,
        //I haven't found any real use case of requestError
        responseError: responseError
    };
} ]);

/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raIdGenSvc
 * @description
 * The raIdGenSvc is a singleton service to generate unique string ids.
 * The format of id includes '#' character joined
 * with consecutive number beginning from number 1 (#1, #2 etc).
 *
 * @example
 <example module="exampleOne">
    <file name="script.js">
        angular.module('exampleOne', ['mobile-toolkit-ra'])
            .controller('exampleOneCtrl', ['$scope', 'raIdGenSvc',
                function ($scope, raIdGenSvc) {
                    "use strict";
                    var generatedId;

                    $scope.getStringId = function () {
                        generatedId = raIdGenSvc.getStrId();
                        $scope.generatedIdLabel =  'Last generated id is ' +
                            generatedId;
                   };
                }]);
    </file>
    <file name="index.html">
        <div class="container-fluid" ng-controller="exampleOneCtrl">
            <div class="row-fluid">
                <div class="span2">
                    <div class="row">
                        <button ng-click="getStringId()">
                            Generate 1
                        </button>
                    </div>
                    <div class="row">
                        <button ng-click="getStringId()">
                            Generate 2
                        </button>
                    </div>
                </div>
                <div class="span10">
                    <span>
                        {{generatedIdLabel}}
                    </span>
                </div>
            </div>
        </div>
    </file>
 </example>
 */
angular.module("mobile-toolkit-ra").factory("raIdGenSvc", [ function() {
    "use strict";
    var id = 0;
    return {
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raIdGenSvc#$getStrId
                 * @methodOf mobile-toolkit-ra.service:raIdGenSvc
                 * @returns {string} Unique string id
                 * @description
                 * Returns the new unique string id.
                 */
        getStrId: function() {
            return "#" + ++id;
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").directive("raInfiniteScroll", [ "$timeout", "$animate", "$q", "raResizeSensorSvc", "raInfiniteScrollSvc", "LAYOUT_EVENTS", function($timeout, $animate, $q, raResizeSensorSvc, raInfiniteScrollSvc, LAYOUT_EVENTS) {
    "use strict";
    return {
        restrict: "A",
        scope: {
            raInfiniteScroll: "=*?",
            setApi: "&"
        },
        controller: "raInfiniteScrollCtrl",
        link: function(scope, elem, attrs) {
            var hasLoadMore = scope.raInfiniteScroll && angular.isFunction(scope.raInfiniteScroll.loadMore);
            var loadDistanceFactor = scope.raInfiniteScroll && angular.isNumber(scope.raInfiniteScroll.loadDistanceFactor) ? scope.raInfiniteScroll.loadDistanceFactor : 2;
            var hideDistanceFactor = scope.raInfiniteScroll && angular.isNumber(scope.raInfiniteScroll.hideDistanceFactor) ? scope.raInfiniteScroll.hideDistanceFactor : 1;
            var maxLoadRetryNum = 3, lastCheckingAtTop = 0, lastScrollPosition = 0, loadingMore = false, hidePromise, resizeSensorCleanUp;
            scope.chunkLength = scope.raInfiniteScroll && angular.isNumber(scope.raInfiniteScroll.chunkLength) && scope.raInfiniteScroll.chunkLength > 0 ? scope.raInfiniteScroll.chunkLength : -1;
            scope.destroyInProgress = false;
            scope.allItemsQueue = [];
            scope.items = [];
            scope.itemsToHide = [];
            scope.gapTop = new raInfiniteScrollSvc.createGap(true);
            scope.gapBottom = new raInfiniteScrollSvc.createGap(false);
            function onResize() {
                if (scope.isScrollEnabled()) {
                    scope.scrollHandler(true);
                    hideIfPossible();
                    return;
                }
                scope.startLoadingMore();
            }
            /**
                     * @description Provides api of directive
                     * @constructor
                     */
            function RaInfiniteScrollApi() {
                var recalculateTimeout;
                return {
                    recalculate: function() {
                        if (recalculateTimeout !== undefined) {
                            $timeout.cancel(recalculateTimeout);
                        }
                        recalculateTimeout = $timeout(onResize);
                    }
                };
            }
            // If the user has provided an setApi function to obtain the public API,
            // create and call it now.
            if (attrs.setApi) {
                scope.setApi({
                    api: new RaInfiniteScrollApi()
                });
            }
            scope.isScrollEnabled = function() {
                var rect = elem[0].getBoundingClientRect();
                return elem[0].scrollHeight > rect.height;
            };
            scope.scrollHandler = function(forceOptimizeCall) {
                var elHeight = elem[0].clientHeight;
                var scrollTop = elem[0].scrollTop;
                var scrollHeight = elem[0].scrollHeight;
                var loadDistance = elHeight * loadDistanceFactor;
                var hideDistance = elHeight * hideDistanceFactor;
                var distanceThreshold = hideDistance === 0 ? 2 : hideDistance / 4;
                var downDirection = lastScrollPosition <= scrollTop;
                var remaining, shouldAddItems, currentBottomPos;
                lastScrollPosition = scrollTop;
                currentBottomPos = elHeight + scrollTop;
                remaining = scrollHeight - currentBottomPos;
                shouldAddItems = remaining <= loadDistance;
                if (forceOptimizeCall === true || Math.abs(scrollTop - lastCheckingAtTop) > distanceThreshold) {
                    lastCheckingAtTop = scrollTop;
                    optimizeItems(scrollTop, scrollHeight, hideDistance, elHeight, downDirection);
                }
                if (shouldAddItems) {
                    scope.startLoadingMore();
                }
            };
            function getTopOfNextVisibleItem(startFrom) {
                var itm, i;
                for (i = startFrom; i < scope.items.length; i++) {
                    itm = scope.items[i];
                    if (itm.appended) {
                        return itm.getTop();
                    }
                }
                return scope.gapBottom.getTop();
            }
            function optimizeItems(scrollTop, scrollHeight, hideDistance, containerHeight, downDirection) {
                var i, itm, inExtendedViewPort, itemBottom, isBelow, topGapH = 0, bottomGapH = 0, itemsToShow = [], itemTop = 0, prevItemHeight = 0, curVisHeight = 0, curToShowHeight = 0, appendedAboveItemsHeightDiff = 0, curItemTop, tmpItemIdx;
                var viewTop = scrollTop - hideDistance;
                var viewBottom = scrollTop + containerHeight + hideDistance;
                for (i = 0; i < scope.items.length; i++) {
                    itm = scope.items[i];
                    if (itm.appended) {
                        curItemTop = itm.getTop();
                        itm.height = getTopOfNextVisibleItem(i + 1) - curItemTop;
                    }
                    itemTop += prevItemHeight;
                    prevItemHeight = itm.height;
                    itemBottom = itemTop + itm.height;
                    inExtendedViewPort = itemBottom >= viewTop && itemBottom <= viewBottom || itemTop >= viewTop && itemTop <= viewBottom || itemTop <= viewTop && itemBottom >= viewBottom;
                    if (!inExtendedViewPort) {
                        //outside viewport -> hide if visible
                        isBelow = itemTop > viewBottom;
                        if (itm.appended) {
                            itm.hiddenInTopGap = !isBelow;
                            itm.markedToHide = true;
                            if (scope.itemsToHide.indexOf(itm) === -1) {
                                scope.itemsToHide.push(itm);
                            }
                            curVisHeight += itm.height;
                        } else {
                            if (isBelow) {
                                bottomGapH += itm.height;
                            } else {
                                topGapH += itm.height;
                            }
                        }
                    } else {
                        //in view port
                        itm.markedToHide = false;
                        tmpItemIdx = scope.itemsToHide.indexOf(itm);
                        if (tmpItemIdx > -1) {
                            scope.itemsToHide.splice(tmpItemIdx, 1);
                        }
                        if (!itm.appended) {
                            itemsToShow.push(itm);
                            curToShowHeight += itm.height;
                        } else {
                            curVisHeight += itm.height;
                        }
                    }
                }
                if (itemsToShow.length > 0 || scope.gapBottom.getHeight() !== bottomGapH || scope.gapTop.getHeight() !== topGapH) {
                    scope.gapBottom.setHeight(bottomGapH);
                    scope.gapTop.setHeight(topGapH);
                    if (downDirection) {
                        for (i = 0; i < itemsToShow.length; i++) {
                            itm = itemsToShow[i];
                            itm.append();
                        }
                    } else {
                        //above items appearing from the lowest
                        for (i = itemsToShow.length - 1; i >= 0; i--) {
                            itm = itemsToShow[i];
                            appendedAboveItemsHeightDiff += appendItemGetHeightDiff(itm);
                        }
                    }
                    if (appendedAboveItemsHeightDiff !== 0 && scrollTop + appendedAboveItemsHeightDiff >= 0 && scrollTop + appendedAboveItemsHeightDiff <= scrollHeight) {
                        //The v. rare situation when re-added item above the view port has different size
                        // when it had previously
                        //In this case we can adjust scrollTop position to eliminate content jumping effect.
                        //Below fix works everywhere except iOS touchable devices with momentum scroll.
                        //Nevertheless with or without this fix there is jump effect on iOS, so leaving it now.
                        elem[0].scrollTop = scrollTop + appendedAboveItemsHeightDiff;
                    }
                }
            }
            function appendItemGetHeightDiff(itm) {
                var previousH = itm.height;
                var theIdx = scope.items.indexOf(itm);
                itm.append();
                itm.height = getTopOfNextVisibleItem(theIdx + 1) - itm.getTop();
                return itm.height - previousH;
            }
            function hideIfPossible() {
                if (hidePromise !== undefined) {
                    $timeout.cancel(hidePromise);
                }
                hidePromise = $timeout(doHide, 200);
            }
            // extend the top/bottom gap height with the height of the items to be hidden
            // depending on the item position
            function doHide() {
                var itemToHide, i, bottomHeight = 0, topHeight = 0;
                if (scope.itemsToHide.length > 0) {
                    for (i = 0; i < scope.itemsToHide.length; i++) {
                        itemToHide = scope.itemsToHide[i];
                        if (itemToHide.hiddenInTopGap) {
                            topHeight += itemToHide.height;
                        } else {
                            bottomHeight += itemToHide.height;
                        }
                        itemToHide.setPlaceHolder();
                    }
                    scope.itemsToHide = [];
                    scope.gapBottom.increase(bottomHeight);
                    scope.gapTop.increase(topHeight);
                }
                hidePromise = undefined;
            }
            scope.startLoadingMore = function() {
                if (!loadingMore) {
                    loadingMore = true;
                    loadMoreItems(scope.items.length).finally(function() {
                        loadingMore = false;
                        // pokes the raTruncate again in case
                        // if the height of item has been changed
                        scope.$parent.$broadcast(LAYOUT_EVENTS.ELEMENT_RESIZE);
                        initResizeSensor();
                    });
                }
            };
            function loadMoreHelper(prevItemsCnt, retryNum) {
                return $timeout(function() {
                    if (scope.items.length > prevItemsCnt && scope.isScrollEnabled()) {
                        return;
                    }
                    if (retryNum < maxLoadRetryNum) {
                        return loadMoreItems(prevItemsCnt + 1, retryNum + 1);
                    }
                });
            }
            function loadMoreItems(prevItemsCnt, retryNum) {
                var loadedNewItems = 0;
                if (retryNum === undefined) {
                    retryNum = 1;
                }
                if (scope.allItemsQueue.length > 0) {
                    while (loadedNewItems < scope.chunkLength && scope.allItemsQueue.length > 0) {
                        scope.allItemsQueue.shift().append();
                        loadedNewItems++;
                    }
                    return loadMoreHelper(prevItemsCnt, retryNum);
                } else if (hasLoadMore) {
                    return scope.raInfiniteScroll.loadMore().then(function() {
                        return loadMoreHelper(prevItemsCnt, retryNum);
                    });
                }
                return $q.resolve();
            }
            function onScroll() {
                scope.scrollHandler();
                hideIfPossible();
            }
            function initResizeSensor() {
                if (!resizeSensorCleanUp) {
                    resizeSensorCleanUp = raResizeSensorSvc.registerOnHeightSensor(elem, onResize);
                }
            }
            //disables any animations on infinite scroll element and its children
            $animate.enabled(elem, false);
            elem[0].addEventListener("scroll", onScroll, true);
            scope.$on("$destroy", function() {
                if (resizeSensorCleanUp) {
                    resizeSensorCleanUp();
                }
                elem[0].removeEventListener("scroll", onScroll);
                scope.items = [];
                scope.allItemsQueue = [];
                scope.itemsToHide = [];
                scope.destroyInProgress = true;
            });
            $timeout(function() {
                if (!scope.isScrollEnabled()) {
                    scope.startLoadingMore();
                } else {
                    initResizeSensor();
                }
            }, 0);
        }
    };
} ]).controller("raInfiniteScrollCtrl", [ "$scope", function($scope) {
    "use strict";
    var gapsAppended = false;
    var appendGaps = function(itm) {
        var parentElement;
        if (gapsAppended) {
            return;
        }
        gapsAppended = true;
        parentElement = itm.getParent();
        $scope.gapTop.insert(parentElement);
        $scope.gapBottom.insert(parentElement);
    };
    this.appendOnInit = function() {
        $scope.$applyAsync(function() {
            if (!$scope.isScrollEnabled()) {
                $scope.startLoadingMore();
            }
        });
        return $scope.chunkLength === -1;
    };
    this.addItemToQueue = function(item) {
        appendGaps(item);
        $scope.allItemsQueue.push(item);
    };
    this.addItem = function(item) {
        appendGaps(item);
        $scope.items.push(item);
    };
    this.removeItem = function(itm) {
        var theIdx;
        if ($scope.destroyInProgress) {
            return;
        }
        theIdx = $scope.items.indexOf(itm);
        if (theIdx > -1) {
            $scope.items.splice(theIdx, 1);
            if (!itm.appended) {
                //item is hidden
                if (itm.hiddenInTopGap) {
                    $scope.gapTop.decrease(itm.height);
                } else {
                    $scope.gapBottom.decrease(itm.height);
                }
            }
            $scope.itemsToHide = [];
        }
        theIdx = $scope.allItemsQueue.indexOf(itm);
        if (theIdx > -1) {
            $scope.allItemsQueue.splice(theIdx, 1);
        }
        $scope.scrollHandler(true);
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").directive("raInfiniteScrollItem", [ "$timeout", "$compile", "$rootScope", function($timeout, $compile, $rootScope) {
    "use strict";
    return {
        transclude: "element",
        restrict: "A",
        priority: 700,
        // required to get inline ng-click working,
        $$tlb: true,
        // kendo requires this
        require: "?^raInfiniteScroll",
        link: function(scope, $element, $attr, raInfiniteCtrl, $transclude) {
            var linkedClone, transcludedScope;
            var added = false;
            var item = {
                append: append,
                setPlaceHolder: setPlaceHolder,
                getTop: getTop,
                appended: false,
                height: undefined,
                markedToHide: false,
                hiddenInTopGap: undefined,
                getParent: function() {
                    return $element.parent();
                }
            };
            function getTop() {
                return linkedClone[0].offsetTop;
            }
            function init() {
                if (raInfiniteCtrl.appendOnInit()) {
                    append();
                    return;
                }
                raInfiniteCtrl.addItemToQueue(item);
            }
            function append() {
                linkedClone = $transclude(function(clone, aScope) {
                    transcludedScope = aScope;
                });
                if (!$rootScope.$$phase) {
                    //only during first component initialization item is in $digest phase.
                    transcludedScope.$digest();
                }
                $element.after(linkedClone);
                item.appended = true;
                if (!added) {
                    added = true;
                    raInfiniteCtrl.addItem(item);
                }
            }
            function setPlaceHolder() {
                if (item.appended) {
                    if (linkedClone) {
                        linkedClone.remove();
                        linkedClone = undefined;
                    }
                    if (transcludedScope) {
                        transcludedScope.$destroy();
                        transcludedScope = undefined;
                    }
                    item.appended = false;
                    item.markedToHide = false;
                }
            }
            if (!raInfiniteCtrl) {
                //transclude only
                $transclude(function(clone) {
                    $element.after(clone);
                });
                return;
            }
            scope.$on("$destroy", function() {
                raInfiniteCtrl.removeItem(item);
            });
            init();
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raInfiniteScrollSvc
 * @description The raInfiniteScrollSvc is a component used by
 * the {@link mobile-toolkit-ra.directive:raInfiniteScroll _raInfiniteScroll_} directive.
 */
angular.module("mobile-toolkit-ra").factory("raInfiniteScrollSvc", [ function() {
    "use strict";
    /**
         * @description Constructs a new Gap.
         * The object used by the {@link mobile-toolkit-ra.directive:raInfiniteScroll _raInfiniteScroll_} directive
         * to control the scroll height. There are two such objects created for the list,
         * above and below the scrolled items.
         * @param {boolean} isOnTop The property used to configure if the gap will be created
         * above or below the scrolled items
         * @constructor
         */
    var Gap = function(isOnTop) {
        var gapElement = angular.element('<div class="ra-flex-item-static ra-infinite-scroll-gap"></div>');
        this.isOnTop = isOnTop;
        this.gapElement = gapElement[0];
        this.curHeight = 0;
    };
    Gap.prototype = function() {
        return {
            /**
                 * Inserts the gap object at the end or at the beginning of the provided element
                 * depending on the type.
                 * @param {Object} parentElement The element which will be appended with the gap.
                 */
            insert: function(parentElement) {
                if (this.isOnTop) {
                    parentElement.prepend(this.gapElement);
                } else {
                    parentElement.append(this.gapElement);
                }
            },
            /**
                 * Increases the height of the object.
                 * @param {number} dH The value by which the height should be increased
                 */
            increase: function(dH) {
                this.curHeight += dH;
                if (this.curHeight < 0) {
                    this.curHeight = 0;
                }
                this.gapElement.style.height = this.curHeight + "px";
            },
            /**
                 * Increases the height of the object.
                 * @param {number} dH The value by which the height should be decreased
                 */
            decrease: function(dH) {
                this.curHeight -= dH;
                if (this.curHeight < 0) {
                    this.curHeight = 0;
                }
                this.gapElement.style.height = this.curHeight + "px";
            },
            /**
                 * Gets the distance of the current element relative to the top of the offsetParent node.
                 * @returns {number} Returns the number of pixels from the top of the parent element.
                 */
            getTop: function() {
                return this.gapElement.offsetTop;
            },
            /**
                 * Sets the height of the object.
                 * @param {number} newHeight The height of the object in pixels.
                 */
            setHeight: function(newHeight) {
                if (newHeight !== this.curHeight) {
                    this.curHeight = newHeight;
                    this.gapElement.style.height = this.curHeight + "px";
                }
            },
            /**
                 * Gets the height of the object.
                 * @returns {number} Returns the height of the object in pixels.
                 */
            getHeight: function() {
                return this.curHeight;
            }
        };
    }();
    return {
        /**
             * @ngdoc method
             * @name mobile-toolkit-ra.service:raInfiniteScrollSvc#createGap
             * @methodOf mobile-toolkit-ra.service:raInfiniteScrollSvc
             * @param {boolean} isOnTop The parameter used to configure if the gap will be created
             * below or above the element.
             * @returns {Object} Returns the gap object.
             * @description Creates a new gap, the object which is used to control
             * the scroll position.
             */
        createGap: function(isOnTop) {
            return new Gap(isOnTop);
        }
    };
} ]);

/* global angular */
(function() {
    "use strict";
    angular.module("mobile-toolkit-ra").constant("RA_ITEM_FILTER_CONSTANTS", {
        filterPredicateIdentifier: ":",
        /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS#defaultTypeAheadListMaxSize
         * @propertyOf mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS
         * @description The default max number of typeahead items to display in a drop-down list below the search
          * text box.
         */
        defaultTypeAheadListMaxSize: 8,
        /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS#defaultSearchText
         * @propertyOf mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS
         * @description The default placeholder text to display in a lighter shade when no text is specified
         * in the search input box.
         */
        defaultSearchText: "Filter",
        /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS#defaultClearSearchText
         * @propertyOf mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS
         * @description The pop-up text to display on the "clear search" button when the button is visible.
         */
        defaultClearSearchText: "Clear Filter",
        /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS#SEARCH_PARSER_ERROR_CHANGED
         * @propertyOf mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS
         * @description The name of an Angular event raised when the search parser has encountered an error.
         */
        SEARCH_PARSER_ERROR_CHANGED: "SEARCH_PARSER_ERROR_CHANGED",
        /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS#searchGrammar
         * @propertyOf mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS
         * @description The PEG js grammar used to create a PEG.js parser. The parser is used to
         * create a parse tree from a search statement. The parse tree is traversed to determine
         * if a search data object matches the search statement.
         */
        searchGrammar: "    {    \n" + "       var predicates = options.predicates; \n" + "       function stringFromChars(stringOrStringArray) {  \n" + "           return stringOrStringArray.join('');    \n" + "       }    \n" + "       function isDefinedPredicate(predicate){  \n" + "           var predicateString = stringFromChars(predicate).toLowerCase(); \n" + "           return predicates.indexOf(predicateString) > -1; \n" + "       }    \n" + "    }     \n" + "start = ored \n" + "ored \n" + "  = left:anded op:OPOR right:ored { return {left:left, op:op, right:right}; } \n" + "  / anded \n" + "anded \n" + "  = left:primary op:OPAND right:anded { return {left:left, op:op, right:right};} \n" + "  / primary \n" + "primary \n" + "  = OPENPAREN ored:ored CLOSEPAREN { return ored;} \n" + "  / predicateSearch \n" + "  / nonPredicateSearch \n" + "  / OPENEXACTMATCH wordsWithSpace:LETTERWITHSPACE+ CLOSEEXACTMATCH " + "       { return {isExactMatch:true, value:stringFromChars(wordsWithSpace)};} \n" + "predicateSearch \n" + "  = isRegisteredPredicate predicate:LETTERPREDICATE+ ':' SPACE " + "   {throw error('ra:Blank spaces between Filter and Filter value');} \n" + "  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':' (OPENPAREN / CLOSEPAREN) " + "   {throw error('ra:Predicates cannot be nested');} \n" + "  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':' word:LETTER+ " + "   {return {predicate:stringFromChars(predicate), value: stringFromChars(word)};} \n" + "  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':' " + "    OPENEXACTMATCH wordsWithSpace:LETTERWITHSPACE+ CLOSEEXACTMATCH " + "   {return {predicate:stringFromChars(predicate), isExactMatch:true, " + "   value:stringFromChars(wordsWithSpace)};} \n" + "nonPredicateSearch = word:LETTER+ {return {value:stringFromChars(word)};} \n" + "isRegisteredPredicate = & (predicate:LETTERPREDICATE+ ':' & {return isDefinedPredicate(predicate);}) \n" + "LETTERPREDICATE =    lett:([a-zA-Z0-9] / [-\\\\~`!@#$%&*_+=}{|;'?><,/.^[\\]]) { return lett; } \n" + "LETTER =             lett:(LETTERPREDICATE / [:]) { return lett; } \n" + "LETTERWITHSPACE =    lett:(LETTER / [ ]) { return lett; } \n" + "OPENPAREN = SPACEOPT '(' SPACEOPT \n" + "CLOSEPAREN = SPACEOPT ')' SPACEOPT \n" + "OPENEXACTMATCH  = SPACEOPT '\"' SPACEOPT \n" + "CLOSEEXACTMATCH = SPACEOPT '\"' & (SPACE / ')' / EOF ) //Don't eat chars after closing char \n" + "\n" + "OPAND \n" + "  = SPACEOPT c:'AND' SPACE {return c;} // Explicit AND \n" + " / SPACE ! ('OR' SPACE) {return 'AND'} // Implicit AND " + "       //(Note the ! prevents us from erronously overidding an OR) \n" + "\n" + "OPOR \n" + "  = SPACEOPT c:'OR' SPACE {return c;} \n" + "  / SPACEOPT ! ('OR' SPACE) {return 'AND'} " + "       //This allows us to do stuff like '(a b) c' and not get errors because of 'c' \n" + "\n" + "SPACEOPT  = [ ]* \n" + "SPACE = [ ]+ \n" + "EOF = !."
    });
    angular.module("mobile-toolkit-ra").constant("LOCALIZATION_EVENTS", {
        LANGUAGE_CHANGED: "LANGUAGE_CHANGED",
        LOCAL_NAMES: "LOCAL_NAMES",
        INVALID_LANGUAGE: "INVALID_LANGUAGE"
    });
    angular.module("mobile-toolkit-ra").constant("API_EXCEPTIONS", {
        INVALID_ARG: {
            err: -1,
            msg: "invalid argument"
        },
        INVALID_STATE: {
            err: -2,
            msg: "invalid internal state"
        }
    });
})();

/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc directive
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra.directive:raItemFilter
     * @restrict AE
     *
     * @param {Array} datasourceList
     * An array holding objects against which the search is executed.
     * @param {object} config
     * An object providing configuration for the directive. The following properties are specified:
     *
     * - **[queryString]** - `{string}` - (optional)
     *   The initial search statement to use when the directive is displayed for the first time. If this property
     *   is specified, its value will be displayed in the input box, and the search will be executed and computed based
     *   on the value. If the property is not specified, **[searchTextPlaceholder]** will be displayed in the input box.
     *   The value is bound to the input box text and any change to the input box will trigger executing the search.
     * - **[containerClass]** - `{string}` - (optional)
     *   Space-separated CSS classes that will be applied to the search input area.
     * - **[searchTextPlaceholder]** - `{string}` - (optional)
     *   When no text is specified in the input box, a placeholder is displayed. The placeholder text is taken from
     *   {@link mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS RA_ITEM_FILTER_CONSTANTS}, if not specified otherwise.
     * - **[clearSearchText]** - `{string}` - (optional)
     *   The pop-up text to display on the "clear search" button when the button is visible. The text is taken from
     *   {@link mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS RA_ITEM_FILTER_CONSTANTS}, if not specified otherwise.
     * - **[typeaheadListMaxSize]** - `{number}` - (optional)
     *   The maximum number of typeahead items to compute and display. The number is taken from
     *   {@link mobile-toolkit-ra:RA_ITEM_FILTER_CONSTANTS RA_ITEM_FILTER_CONSTANTS}, if not specified otherwise.
     * - **[predicates]** - `{object}` -
     *   An object representing the predicates that the parser will use.
     *   Each predicate is specified as an object and must have a unique field name. Each predicate
     *   must have the following parameters:
     *     - **id** - `{string}` - The ID of the predicate.
     *     - **callback** - `{function}` - A callback function that the parser will execute to retrieve
     *       a string value for the predicate. The function must have the following parameter:
     *          - **value** - `{object}` - The search item object.
     *     - **keys** - `{array}` - An array of strings, where each string represents a predicate key.
     *       <div class="alert alert-info" role="alert">
     *          If the keys are ['m', 'ma', 'make'], then 'm', 'ma', or 'make' reference the same predicate and
     *          each of the following search statements references the same predicate:
     *          <pre>
     *              m:someString
     *              ma:someString
     *              make:someString
     *          </pre>
     *       </div>
     * - **[hideErrorTooltip]** - `{boolean}` - (optional)
     *   Controls the visibility of the pop-up search grammar tooltip. The default value is `false` (the tooltip
     *   is visible). Once the tooltip is hidden, the user will not see any search grammar errors that are displayed
     *   in the tooltip, so the error handling should be maintained separately.
     *
     * - **[hideTypeaheadList]** - `{boolean}` - (optional)
     *   Controls the visibility of the pop-up typehead list. The default value is `false` (the list is visible).
     *
     * @description
     * This directive allows for searching a list of objects using a specific search grammar. It also provides a GUI for
     * entering/editing search statements, viewing search result totals, search parser errors, and typeahead drop-down
     * items.
     *
     * It displays an input box where the user can type search statements using a Google-like search syntax
     * and receive typeahead search hints in a drop-down combo box in a Google-like manner. The search is processed
     * whenever the search text is changed.
     * A grammar parser interprets the current search statement and applies search logic to the list of search objects.
     * Search results associated with individual search objects are stored on the search objects themselves and the
     * user is responsible for the angular code to actually display filtered results.
     *
     * The directive uses the
     * {@link mobile-toolkit-ra.raItemFilterSvc raItemFilterSvc} service to process search results and generate
     * typeahead items. The search result text may be emphasized using the
     * {@link mobile-toolkit-ra.filter:raItemFilterTypeaheadHighlight raItemFilterTypeaheadHighlight} filter.
     *
     * # Module dependencies
     *
     * The module depends on the **ngSanitize** module and the **pegjs** library. For detailed information on how to
     * add these dependencies, see the
     * [additional dependencies](#/nonapi/addingThirdPartyDependencies.md#using-raitemfilter) document.
     *
     * # The GUI
     *
     * The GUI consists of the following components:
     * - A filter icon to the left of the input box.
     *
     *   When the search is executed it also displays how many search objects
     *   where processed and how many of the objects matched the current search statement.
     *
     * - An input box.
     *
     *   It is used by the user to type search statements.
     *
     * - A "clear search" button on the right.
     *
     *   It is visible when there is some search text in the input box.
     *
     * - A "pop-up search grammar tooltip" at the bottom of the input box.
     *
     *   It becomes visible when the search
     *   text generates a parser grammar error. Search parser grammar errors are simplified and displayed to the user.
     *   The list of known parser errors can be localized to specific languages.
     *   To disable displaying the search grammar tooltip set the `hideErrorTooltip` property of the config object
     *   to `true`.
     *
     * - A "pop-up typeahead list" at the bottom of the input box.
     *
     *   It becomes visible when the user
     *   types some text. The list provides search shortcuts and hints for the user about possible search results.
     *   The number of items displayed is configurable and the user can click a typeahead item to execute the
     *   search statement specified. Typeahead search items are created by analyzing the **dataSource** list
     *   and the defined predicates.
     *   If the user types a search statement where the last part of the statement does not specify
     *   a specific predicate, all defined predicates are searched on all search objects when creating typeahead items.
     *   If the user types a search statement where the last part of the statement does specify
     *   a specific predicate, only that predicate is searched on all search objects when creating typeahead items.
     *   To disable displaying the pop-up typeahead list set the `hideTypeaheadList` property of the config object
     *   to `true`.
     *
     * The component internally uses the logic provided by the
     * {@link mobile-toolkit-ra.raItemFilterSvc raItemFilterSvc} service.
     *
     *
     * # Search parser grammar
     *
     * The grammar is defined to be Google-like. It features relational operators, the nesting of the
     * order of operations, implicit and explicit operators, implicit and explicit predicates,
     * and searching by exact match.
     * ## Relational operators
     * Use AND and OR as relational operators by surrounding them by at least one space on each side.
     * If two strings are separated by one or more spaces, AND is implied:
     * <pre>
     * jack AND jill
     * jack jill (same as jack AND jill)
     * jack OR jill
     * </pre>
     * ## Nesting of the order of operations
     * Use open and close parentheses to control the order of operations.
     * There is no limit to how deep they can be nested:
     * <pre>
     * jack AND (jill OR happy)
     * jack AND (jill OR (happy AND (sad OR grey) AND sleepy))
     * </pre>
     * ## Exact match
     * Surround a string with double quotes to identify the string as exact match rather than just a substring:
     * <pre>
     * jack AND "jill"
     * </pre>
     * ## Explicit use of predicates
     * Specify registered predicates explicitly by appending the ':' character to them.
     * For example, if there are registered predicates for 'name' and 'state', use the following expression:
     * <pre>
     * name:jack AND state:"happy"
     * </pre>
     * It's usually recommended to specify one or more alias keys for the same predicate to make it easier for the users
     * to use the feature.
     * In our example, you can define the ['n', 'name'] alias list for the 'name' predicate and the ['s', 'state']
     * alias list for the 'state' predicate. Then, you can use them in the following way:
     * <pre>
     * n:jack AND s:"happy"
     * </pre>
     * If a predicate is not registered and the user uses the explicit predicate syntax, the whole string is
     * used in the search. In our example, if there is no registered predicate for 'n', the
     * search is performed on the whole string 'n:jack' instead of searching for the string 'jack'
     * in the registered predicate identified with the 'n' alias.
     *
     * @example
     * An example showing a simple usage of the raItemFilter:
     *
     * <example module="exampleApp">
     * <file name="index.html">
     *     <div ng-controller="ctrl1">
     *         <ra-Item-Filter config="itemFilterConfig"
     *              datasource-list="cars"></ra-Item-Filter>
     *         <div class="list-group">
     *            <div ng-repeat="car in cars | filter:isSearchResultMatch | orderBy: '-year'"
     *               class="row list-group-item bm-list-group-item"
     *               style="padding: 7px; margin: 0;">
     *               <div>
     *                  <em class="badge"
     *                      ng-bind-html="car.year | raItemFilterTypeaheadHighlight
     *                      :itemFilterConfig.predicates.year.id
     *                      :car"></em>
     *                  <span class="list-group-item-text"
     *                      ng-bind-html="car.make | raItemFilterTypeaheadHighlight
     *                      :itemFilterConfig.predicates.make.id
     *                      :car"></span>
     *                  -
     *                  <span class="list-group-item-text"
     *                      ng-bind-html="car.model | raItemFilterTypeaheadHighlight
     *                      :itemFilterConfig.predicates.model.id
     *                      :car"></span>
     *                  <span
     *                      style="float: right;color: {{car.paint.split(' ')[1]}};"
     *                      ng-bind-html="car.paint | raItemFilterTypeaheadHighlight
     *                      :itemFilterConfig.predicates.paint.id
     *                      :car"></span>
     *                  </div>
     *              </div>
     *          </div>
     *      </div>
     * </file>
     * <file name="script.js">
     *     angular.module('exampleApp', ['ngSanitize', 'mobile-toolkit-ra'])
     *     .controller(
     *         'ctrl1',
     *         [
     *             '$scope', 'raItemFilterSvc',
     *             function ($scope, raItemFilterSvc) {
     *                 $scope.itemFilterConfig = {
     *                      hideErrorTooltip: false,
     *                      hideTypeaheadList: false,
     *                      queryString: '',
     *                      predicates: {
     *                           make: {
     *                               id: 'make', keys: ['m', 'mk', 'make'],
     *                               callback: function(value) {return value.make;}},
     *                           model: {
     *                               id: 'model', keys: ['mo', 'md', 'mod', 'model'],
     *                               callback: function(value) {return value.model;}},
     *                           year: {
     *                               id: 'year', keys: ['y', 'year'],
     *                               callback: function(value) {return value.year;}},
     *                           paint: {
     *                               id: 'paint', keys: ['p', 'pnt', 'paint'],
     *                               callback: function(value) {return value.paint;}}
     *                       }
     *                   };
     *                 $scope.cars = [
     *                       {"make": "Honda","model": "Civic","year": "2011","paint": "galaxy grey"},
     *                       {"make": "Honda","model": "Civic","year": "1993","paint": "navy blue"},
     *                       {"make": "Peugeot","model": "206","year": "2000","paint": "metallic black"},
     *                       {"make": "Peugeot","model": "405","year": "1992","paint": "navy blue"},
     *                       {"make": "Fiat","model": "Seicento","year": "2002","paint": "brush grey"},
     *                       {"make": "Fiat","model": "Uno","year": "2004","paint": "metallic pink"},
     *                       {"make": "Renault","model": "Megane","year": "2000","paint": "navy blue"},
     *                       {"make": "Chrysler","model": "Pacifica","year": "2005:a","paint": "metallic brown"},
     *                       {"make": "Honda","model": "Civic","year": "2005","paint": "milano red"},
     *                       {"make": "Renault","model": "Clio","year": "2003","paint": "olive green"},
     *                       {"make": "Porsche","model": "911 Turbo","year": "1998","paint": "metallic black"},
     *                       {"make": "Audi","model": "A8","year": "2013","paint": "Metallic orange"},
     *                       {"make": "Porsche","model": "911 Carrera 4","year": "2006","paint": "metallic black"},
     *                       {"make": "Nissan","model": "GTR 3.8i","year": "2012","paint": "metallic gray"},
     *                       {"make": "Volvo","model": "V 70","year": "2010","paint": "metallic brown"}
     *                       ];
     *                 $scope.isSearchResultMatch = isSearchResultMatch;
     *                 function isSearchResultMatch(value) {
     *                      return raItemFilterSvc.isMatch($scope.itemFilterConfig.queryString, value);
     *                 }
     *             }
     *         ]
     *     );
     * </file>
     * </example>
     */
    angular.module("mobile-toolkit-ra").directive("raItemFilter", raItemFilter);
    raItemFilter.$inject = [ "raItemFilterSvc", "raItemFilterTypeAheadListSvc", "$sce", "$templateCache" ];
    function raItemFilter(raItemFilterSvc, raItemFilterTypeAheadListSvc, $sce, $templateCache) {
        var directive;
        var controller;
        controller = [ "$rootScope", "$scope", "RA_ITEM_FILTER_CONSTANTS", function($rootScope, $scope, RA_ITEM_FILTER_CONSTANTS) {
            var vm = $scope.vm;
            vm.currentTypeaheadList = [];
            vm.currentParserError = $sce.trustAsHtml("");
            vm.shouldShowErrorTooltip = false;
            vm.filteredCount = "";
            vm.getTypeaheadList = getTypeaheadList;
            vm.clearSearch = clearSearch;
            //Set default values if directive parameters not defined
            vm.typeaheadListSize = vm.config.typeaheadListMaxSize || RA_ITEM_FILTER_CONSTANTS.defaultTypeAheadListMaxSize;
            vm.searchTextPlaceholderValue = vm.config.searchTextPlaceholder || RA_ITEM_FILTER_CONSTANTS.defaultSearchText;
            vm.clearSearchTextValue = vm.config.clearSearchText || RA_ITEM_FILTER_CONSTANTS.defaultClearSearchText;
            initializeDirective();
            /////////////////////////////
            /////////////////////////////
            function initializeDirective() {
                var rootListeners;
                var unbindMethod;
                raItemFilterSvc.setConfig(vm.config);
                $scope.$watch("vm.config.queryString", onQueryStringChanged);
                $scope.$watch("vm.config.searchTextPlaceholder", function(newValue) {
                    vm.searchTextPlaceholderValue = newValue || RA_ITEM_FILTER_CONSTANTS.defaultSearchText;
                });
                $scope.$watch("vm.config.clearSearchText", function(newValue) {
                    vm.clearSearchTextValue = newValue || RA_ITEM_FILTER_CONSTANTS.defaultClearSearchText;
                });
                $scope.$watch("vm.config.typeaheadListMaxSize", function(newValue) {
                    vm.typeaheadListSize = newValue || RA_ITEM_FILTER_CONSTANTS.defaultTypeAheadListMaxSize;
                });
                rootListeners = {
                    OnParserErrorChanged: $rootScope.$on(RA_ITEM_FILTER_CONSTANTS.SEARCH_PARSER_ERROR_CHANGED, onParserErrorChanged)
                };
                for (unbindMethod in rootListeners) {
                    if (rootListeners.hasOwnProperty(unbindMethod)) {
                        $scope.$on("$destroy", rootListeners[unbindMethod]);
                    }
                }
            }
            function onParserErrorChanged() {
                if (vm.config && vm.config.hideErrorTooltip === true) {
                    return;
                }
                if (raItemFilterSvc.getCurrentError()) {
                    vm.currentParserError = $sce.trustAsHtml("<i class='ra-itemFilter-error-position'>" + raItemFilterSvc.getCurrentError().raPositionNameLocalized + ": " + raItemFilterSvc.getCurrentError().raPositionStart + ".</i> " + raItemFilterSvc.getCurrentError().raMessage);
                    vm.shouldShowErrorTooltip = true;
                } else {
                    vm.currentParserError = $sce.trustAsHtml("");
                    vm.shouldShowErrorTooltip = false;
                }
            }
            function clearSearch() {
                vm.config.queryString = "";
            }
            function getTypeaheadList() {
                if (vm.config && vm.config.hideTypeaheadList === true) {
                    return;
                }
                return vm.currentTypeaheadList;
            }
            function onQueryStringChanged() {
                determineFilteredCount();
                determineTypeaheadItems();
            }
            ///////////////////
            //////////////////
            function determineFilteredCount() {
                var count;
                var i;
                var keys;
                var itemFilterResults;
                // If there is no query string or there is a parser error, don't display a count of filtered items
                if (!vm.config.queryString) {
                    vm.filteredCount = "";
                    return vm.filteredCount;
                }
                count = 0;
                keys = Object.keys(vm.datasourceList);
                for (i = 0; i < keys.length; i++) {
                    itemFilterResults = vm.datasourceList[keys[i]].raItemFilterResults;
                    if (!itemFilterResults) {
                        continue;
                    }
                    if (itemFilterResults.isMatch === undefined || itemFilterResults.isMatch) {
                        count++;
                    }
                }
                vm.filteredCount = count + "/" + keys.length;
                return vm.filteredCount;
            }
            function determineTypeaheadItems() {
                vm.currentTypeaheadList = raItemFilterTypeAheadListSvc.createListFor(vm.datasourceList, vm.typeaheadListSize);
                return vm.currentTypeaheadList;
            }
        } ];
        directive = {
            restrict: "EA",
            scope: {
                datasourceList: "=",
                config: "="
            },
            controller: controller,
            controllerAs: "vm",
            bindToController: true,
            template: $templateCache.get("raItemFilter/raItemFilter.tpl.html")
        };
        return directive;
    }
})();

/* global angular, PEG */
(function() {
    "use strict";
    /**
     * @ngdoc service
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra.raItemFilterSvc
     * @description
     * This service provides the logic used by the {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter}
     * directive.
     */
    angular.module("mobile-toolkit-ra").factory("raItemFilterSvc", RAItemFilterSvc);
    RAItemFilterSvc.$inject = [ "$rootScope", "$log", "RA_ITEM_FILTER_CONSTANTS", "LOCALIZATION_EVENTS", "API_EXCEPTIONS", "$translate" ];
    function RAItemFilterSvc($rootScope, $log, RA_ITEM_FILTER_CONSTANTS, LOCALIZATION_EVENTS, API_EXCEPTIONS, $translate) {
        var predicates = {};
        var predicateAliasList = null;
        //A performance enhancement to hold all predicate alias's
        var LOGGER = "raItemFilterSvc: ";
        var parser = null;
        var currentParseTree = null;
        var currentSearchString = null;
        var currentError = null;
        var errorTranslations = {};
        initializeService();
        return {
            clear: clear,
            add: addPredicate,
            setConfig: setConfig,
            isMatch: isMatch,
            getCurrentError: getCurrentError,
            getCurrentQuery: getCurrentQuery,
            onLanguageChanged: onLanguageChanged,
            getPredicates: getPredicates,
            registeredPredicateFor: registeredPredicateFor
        };
        ////////////////////////
        ////////////////////////
        function initializeService() {
            parser = PEG.buildParser(RA_ITEM_FILTER_CONSTANTS.searchGrammar);
            errorTranslations.errors_2001 = "Filter values must not contain parenthesis";
            // jshint ignore: line
            errorTranslations.errors_2002 = "Open parenthesis missing";
            // jshint ignore: line
            errorTranslations.errors_2003 = "Close parenthesis missing";
            // jshint ignore: line
            errorTranslations.errors_2004 = "Filter value missing for ";
            // jshint ignore: line
            errorTranslations.errors_2005 = "Remove blank spaces between Filter and Filter value";
            // jshint ignore: line
            errorTranslations.errors_2007 = "Quotation mark missing";
            // jshint ignore: line
            errorTranslations.errors_2008 = "Quotation marks must contain characters";
            // jshint ignore: line
            errorTranslations.errors_2016 = "Batch Failure";
            // jshint ignore: line
            errorTranslations.errors_2017 = "Position";
            // jshint ignore: line
            // Register to receive the events
            $rootScope.$on(LOCALIZATION_EVENTS.LANGUAGE_CHANGED, onLanguageChanged);
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#onLanguageChanged
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @description Specifies parser error descriptions for a new locale.
         */
        function onLanguageChanged() {
            /* istanbul ignore next */
            $translate([ "errors_2001", "errors_2002", "errors_2003", "errors_2004", "errors_2005", "errors_2007", "errors_2008", "errors_2016", "errors_2017" ]).then(function(translations) {
                errorTranslations.errors_2001 = translations.errors_2001;
                // jshint ignore: line
                errorTranslations.errors_2002 = translations.errors_2002;
                // jshint ignore: line
                errorTranslations.errors_2003 = translations.errors_2003;
                // jshint ignore: line
                errorTranslations.errors_2004 = translations.errors_2004;
                // jshint ignore: line
                errorTranslations.errors_2005 = translations.errors_2005;
                // jshint ignore: line
                errorTranslations.errors_2007 = translations.errors_2007;
                // jshint ignore: line
                errorTranslations.errors_2008 = translations.errors_2008;
                // jshint ignore: line
                errorTranslations.errors_2016 = translations.errors_2016;
                // jshint ignore: line
                errorTranslations.errors_2017 = translations.errors_2017;
            });
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#getCurrentError
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @returns {object} An object representing the current parser error.
         * It will contain information about which character position in the search statement caused the error,
         * as well as a short description of the error.
         * @description
         * Returns the current parser error if one exists, otherwise returns null.
         */
        function getCurrentError() {
            return currentError;
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#getCurrentQuery
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @returns {string} The current search statement string.
         * @description
         * Returns the current search statement string.
         */
        function getCurrentQuery() {
            return currentSearchString;
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#getPredicates
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @returns {array} The current list of predicates. Each predicate contains a predicate ID, an alias list,
         * and a callback function.
         * @description
         * Returns the current list of predicates.
         */
        function getPredicates() {
            return predicates;
        }
        function getPredicateAliasList() {
            var predicate;
            //Lazy init
            if (predicateAliasList) {
                return predicateAliasList;
            }
            predicateAliasList = [];
            for (predicate in predicates) {
                if (predicates.hasOwnProperty(predicate)) {
                    predicateAliasList = predicateAliasList.concat(predicates[predicate].aliasList);
                }
            }
            return predicateAliasList;
        }
        function setCurrentError(ex) {
            if (currentError === ex) {
                return;
            }
            currentError = ex;
            formatCurrentParserError();
            $rootScope.$broadcast(RA_ITEM_FILTER_CONSTANTS.SEARCH_PARSER_ERROR_CHANGED);
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#clear
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @description
         * Clears the current search statement, the parser error, the predicate list, and any intermediate parser
         * state or objects created.
         */
        function clear() {
            predicates = {};
            predicateAliasList = null;
            currentParseTree = null;
            currentSearchString = null;
            currentError = null;
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#addPredicate
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @param {string} [predicateName] A unique name that identifies a new predicate.
         * @param {array} [arrayOfPredicateKeys] An array of string values that represents different ways to reference
         * the predicate that is being created.
         * @param {function} [callback] A callback to execute the retrieval of the predicate value. The method
         * is called by the search parser and contains a parameter that is the search object.
         * @description
         * Adds predicates dynamically while the {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter} directive
         * is loaded and active.
         */
        function addPredicate(predicateName, arrayOfPredicateKeys, callback) {
            var i;
            if (!predicateName || !arrayOfPredicateKeys || !callback) {
                throw API_EXCEPTIONS.INVALID_ARG;
            }
            if (typeof callback === "string") {
                return;
            }
            if (typeof arrayOfPredicateKeys === "string") {
                arrayOfPredicateKeys = [ angular.lowercase(arrayOfPredicateKeys) ];
            }
            // Save all the predicate strings as lowercase since
            // predicates themselves should be case insensitive
            for (i = 0; i < arrayOfPredicateKeys.length; i++) {
                arrayOfPredicateKeys[i] = angular.lowercase(arrayOfPredicateKeys[i]);
            }
            predicates[predicateName] = {
                id: predicateName,
                aliasList: arrayOfPredicateKeys,
                callback: callback
            };
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#setConfig
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @param {object} [filterConfig] The current configuration object to use. See the description of the
         * {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter} directive for details on how the configuration
         * object should be structured.
         * @description
         * Changes the configuration dynamically while the directive is loaded and active.
         */
        function setConfig(filterConfig) {
            clear();
            if (!filterConfig) {
                throw API_EXCEPTIONS.INVALID_ARG;
            }
            angular.forEach(filterConfig.predicates, function(value, key) {
                // jshint ignore: line
                addPredicate(value.id, value.keys, value.callback);
            });
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#isMatch
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @param {string} [searchString] The search string to match against.
         * @param {object} [dataViewItem] The search object to match against.
         * @returns {boolean} Whether the **dataViewItem** matched or didn't match against the **searchString**.
         * @description
         * Executes the parser on the provided data item to determine if the provided data
         * item is a match against the provided **searchString**. If the match is successful, the **dataViewItem**
         * will contain the **raItemFilterResults** property specifying which predicates matched successfully.
         */
        function isMatch(searchString, dataViewItem) {
            var searchStringTrimmed;
            var isMatchResult;
            if (!(searchString && dataViewItem) || typeof searchString !== "string") {
                setCurrentError(null);
                if (currentSearchString) {
                    currentSearchString = "";
                }
                if (dataViewItem) {
                    dataViewItem.raItemFilterResults = {};
                }
                return true;
            }
            searchStringTrimmed = searchString.trim();
            if (currentSearchString !== searchStringTrimmed) {
                // if we have not yet parsed this search string, do it now
                currentSearchString = searchStringTrimmed;
                buildCurrentParseTreeFrom(currentSearchString);
            }
            //If parse tree is not generated we have a parse error
            if (!currentParseTree) {
                //Once we encounter a parser error, we want to display the results of the last
                // successful filter search. So, if there are previous search results on this
                // data item, use those results as the current match result
                if (dataViewItem.raItemFilterResults && dataViewItem.raItemFilterResults.isMatch !== undefined) {
                    return dataViewItem.raItemFilterResults.isMatch;
                }
                // If there are no previous search results on this data item then this item
                // is not a match
                if (!dataViewItem.raItemFilterResults) {
                    return false;
                }
                return true;
            }
            try {
                dataViewItem.raItemFilterResults = {};
                isMatchResult = isMatchForNonTerminalNode(currentParseTree, dataViewItem);
                dataViewItem.raItemFilterResults.isMatch = isMatchResult;
                setCurrentError(null);
            } catch (ex) {
                setCurrentError(ex);
                $log.error(LOGGER + "Exception filtering list: " + ex);
                isMatchResult = true;
            }
            return isMatchResult;
        }
        function buildCurrentParseTreeFrom(searchStringTrimmed) {
            try {
                currentParseTree = parser.parse(searchStringTrimmed, {
                    predicates: getPredicateAliasList()
                });
            } catch (ex) {
                setCurrentError(ex);
                currentParseTree = null;
                $log.info(LOGGER + "Parser error for:'" + searchStringTrimmed + "',Pos:" + ex.location.start.column + ",ErrorType:" + ex.name + ",Message:'" + ex.message + "'");
            }
        }
        function isMatchForNonTerminalNode(parseTree, dataViewItem) {
            // process terminal Node
            if (parseTree.hasOwnProperty("value")) {
                return isMatchForTerminalNode(parseTree, dataViewItem);
            }
            // process non-terminal node
            if (parseTree.op === "OR") {
                return isMatchForNonTerminalNode(parseTree.left, dataViewItem) || isMatchForNonTerminalNode(parseTree.right, dataViewItem);
            } else if (parseTree.op === "AND") {
                return isMatchForNonTerminalNode(parseTree.left, dataViewItem) && isMatchForNonTerminalNode(parseTree.right, dataViewItem);
            } else {
                $log.error(LOGGER + "Invalid filter operator: " + parseTree.Op);
                return true;
            }
        }
        function isMatchForTerminalNode(parseObject, dataViewItem) {
            var predicateObj;
            var isExactMatch = false;
            var currentPredicate;
            if (parseObject.hasOwnProperty("predicate")) {
                // Predicate specified. Match only against specified predicate
                predicateObj = registeredPredicateFor(angular.lowercase(parseObject.predicate));
                if (!predicateObj) {
                    return false;
                }
                // Parser should only be returning us registered predicates
                if (parseObject.hasOwnProperty("isExactMatch") && parseObject.isExactMatch) {
                    isExactMatch = true;
                }
                if (isMatchForPredicate(parseObject.value, isExactMatch, dataViewItem, predicateObj)) {
                    return true;
                }
            } else {
                // No Predicate specified
                if (parseObject.hasOwnProperty("isExactMatch") && parseObject.isExactMatch) {
                    isExactMatch = true;
                }
                for (currentPredicate in predicates) {
                    // Attempt to match against all registered predicates
                    if (isMatchForPredicate(parseObject.value, isExactMatch, dataViewItem, predicates[currentPredicate])) {
                        return true;
                    }
                }
            }
            return false;
        }
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raItemFilterSvc#registeredPredicateFor
         * @methodOf mobile-toolkit-ra.raItemFilterSvc
         * @param {string} [key] The string key representing a predicate.
         * @returns {object} The current predicate that includes a **key** in its alias list, otherwise null.
         * @description
         * Returns a registered predicate for a certain alias key.
         */
        function registeredPredicateFor(key) {
            var currentPredicate;
            for (currentPredicate in predicates) {
                if (predicates[currentPredicate].aliasList.indexOf(key) >= 0) {
                    return predicates[currentPredicate];
                }
            }
            return null;
        }
        function isMatchForPredicate(searchString, isExactMatch, dataViewItem, predicateObject) {
            var callbackValue;
            var predicateCallbackValue;
            var result;
            try {
                callbackValue = predicateObject.callback(dataViewItem) || "";
                predicateCallbackValue = angular.lowercase(callbackValue.toString());
                if (isExactMatch) {
                    result = predicateCallbackValue === angular.lowercase(searchString);
                } else {
                    result = predicateCallbackValue.indexOf(angular.lowercase(searchString)) >= 0;
                }
                if (result) {
                    saveFilterResultsOnDataItem(dataViewItem, predicateObject, searchString);
                }
                return result;
            } catch (ex) {
                setCurrentError(ex);
                $log.error(LOGGER + "Exception in predicate callback for " + searchString + ",item:" + dataViewItem + ",exception:" + ex);
                return true;
            }
        }
        function saveFilterResultsOnDataItem(dataViewItem, predicateObject, searchString) {
            if (!dataViewItem.raItemFilterResults) {
                dataViewItem.raItemFilterResults = {};
            }
            if (!dataViewItem.raItemFilterResults[predicateObject.id]) {
                dataViewItem.raItemFilterResults[predicateObject.id] = [];
            }
            dataViewItem.raItemFilterResults[predicateObject.id].push(searchString);
        }
        //////////////////////////////////////
        //////////////////////////////////////
        // Format Error Related Code
        // Parser has encountered error. Convert the current error string into something as user
        // friendly as possible
        function formatCurrentParserError() {
            if (!currentError) {
                return;
            }
            currentError.raPositionNameLocalized = errorTranslations.errors_2017;
            // jshint ignore: line
            if (currentError.hasOwnProperty("location")) {
                currentError.raPositionStart = currentError.location.start.column;
            }
            if (isParserErrorNestedPredicateValuesNotAllowed()) {
                //'Filter values must not contain parenthesis'
                currentError.raMessage = errorTranslations.errors_2001;
                // jshint ignore: line
                return;
            }
            if (isParserErrorOpenParenthesisMissing()) {
                //'Open parenthesis missing';
                currentError.raMessage = errorTranslations.errors_2002;
                // jshint ignore: line
                return;
            }
            if (isParserErrorCloseParenthesisMissing()) {
                //'Close parenthesis missing';
                currentError.raMessage = errorTranslations.errors_2003;
                // jshint ignore: line
                return;
            }
            if (isParserErrorPredicateValueMissingSpacesBeforeValue()) {
                //'Filter value missing for '';
                currentError.raMessage = errorTranslations.errors_2004 + " '" + // jshint ignore: line
                firstPredicateStringBeforePosition(currentSearchString, currentError.raPositionStart) + "'. " + errorTranslations.errors_2005;
                // jshint ignore: line
                return;
            }
            if (isParserErrorQuotationMarkMissing()) {
                //Quotation mark missing
                currentError.raMessage = errorTranslations.errors_2007;
                // jshint ignore: line
                return;
            }
            if (isParserErrorQuotationMarkMustContainValidChars()) {
                // Quotation marks must contain characters
                currentError.raMessage = errorTranslations.errors_2008;
                // jshint ignore: line
                return;
            }
            // Our rules did not determine how to reformat the current parser error.
            // Now display the error from the parser itself
            currentError.raMessage = currentError.message;
        }
        function isParserErrorQuotationMarkMissing() {
            var quotMarks;
            if (currentError.raPositionStart < 0) {
                return false;
            }
            quotMarks = currentSearchString.match(/["]/g);
            if (quotMarks) {
                quotMarks = quotMarks.length;
            } else {
                quotMarks = 0;
            }
            if (quotMarks % 2 === 1) {
                return true;
            }
            return false;
        }
        function isParserErrorQuotationMarkMustContainValidChars() {
            if (currentError.raPositionStart < 0) {
                return false;
            }
            if (currentSearchString.indexOf('""') >= 0) {
                return true;
            }
            return false;
        }
        function isParserErrorPredicateValueMissingSpacesBeforeValue() {
            // Search for missing filer value where value is specified but not directly following ':' character
            // ex. "d: somevalue"
            if (currentError.raPositionStart < 0) {
                return false;
            }
            if (currentError.message === "ra:Blank spaces between Filter and Filter value") {
                return true;
            }
            if (!currentError.found) {
                return false;
            }
            if (currentError.found !== currentSearchString[currentError.raPositionStart - 1]) {
                return false;
            }
            if (!currentError.message.indexOf('but "' + currentError.found + '" found.')) {
                return false;
            }
            // Loop through previous character before currentError.raPositionStart
            // to find first non empty character
            if (firstNonEmptyCharacterInStringBeforePosition(currentSearchString, currentError.raPositionStart) === ":") {
                return true;
            }
            return false;
        }
        function isParserErrorCloseParenthesisMissing() {
            var openParens;
            var closeParens;
            if (currentError.raPositionStart < 0) {
                return false;
            }
            //if (currentError.message.indexOf('Expected ")",') < 0) {return false;}
            if (currentError.message.indexOf("but end of input found.") < 0 && currentError.message.indexOf('or end of input but "(" found.') < 0) {
                return false;
            }
            openParens = currentSearchString.match(/[(]/g);
            if (openParens) {
                openParens = openParens.length;
            } else {
                openParens = 0;
            }
            closeParens = currentSearchString.match(/[)]/g);
            if (closeParens) {
                closeParens = closeParens.length;
            } else {
                closeParens = 0;
            }
            if (openParens === closeParens) {
                return false;
            }
            if (openParens < closeParens) {
                return false;
            }
            return true;
        }
        function isParserErrorOpenParenthesisMissing() {
            if (currentError.found !== ")") {
                return false;
            }
            if (currentError.raPositionStart < 0) {
                return false;
            }
            if (currentError.message.indexOf('or end of input but ")" found.') >= 0) {
                return true;
            }
            if (currentError.message.indexOf('Expected "(",') >= 0 && currentError.message.indexOf('but ")" found.') >= 0) {
                return true;
            }
            return false;
        }
        function isParserErrorNestedPredicateValuesNotAllowed() {
            //if (currentError.found !== '(') { return false;}
            if (currentError.raPositionStart < 0) {
                return false;
            }
            if (currentError.message === "ra:Predicates cannot be nested") {
                return true;
            }
            if (currentSearchString[currentError.raPositionStart - 2] === ":") {
                return true;
            }
            return false;
        }
        function firstNonEmptyCharacterInStringBeforePosition(currentSearchString, indexPosition) {
            var i;
            if (currentSearchString.length === 0) {
                return false;
            }
            for (i = indexPosition - 2; i >= 0; i--) {
                if (currentSearchString[i] !== " ") {
                    return currentSearchString[i];
                }
            }
            return null;
        }
        function firstPredicateStringBeforePosition(currentSearchString, indexPosition) {
            var endOfPreciateLocation = -1;
            var i;
            if (currentSearchString.length === 0) {
                return null;
            }
            for (i = indexPosition; i < currentSearchString.length; i++) {
                if (currentSearchString[i] === ":") {
                    endOfPreciateLocation = i;
                    break;
                }
            }
            if (endOfPreciateLocation === -1) {
                return null;
            }
            for (i = endOfPreciateLocation; i >= 0; i--) {
                if (i === 0) {
                    return currentSearchString.substring(0, endOfPreciateLocation + 1).trim();
                }
                if (currentSearchString[i] === " ") {
                    return currentSearchString.substring(i, endOfPreciateLocation + 1).trim();
                }
            }
            return null;
        }
    }
})();

/* global angular */
(function() {
    "use strict";
    /**
     * @ngdoc filter
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra.filter:raItemFilterTypeaheadHighlight
     *
     * @param {string} textToEmphasis The string to emphasize.
     * @param {string} predicateID The ID of the predicate associated with the text to emphasize. The ID
     * is specified in the config option of the {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter} directive.
     * @param {object} searchObject The object representing the search item. Usually, it is also
     * the object that references the **textToEmphasis** variable. This field is required since the information on
     * the search results is stored on the search object item.
     * @returns {string} The emphasized text as HTML.
     *
     * @description
     * This filter is used to emphasize text in search results generated using the
     * {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter} directive. 
     * The emphasized text matches the search criteria provided by the users.  
     * If the search criteria are:
     * ```
     * str AND om
     * ```
     * ...and there is a field in the search result object that has a value of:
     * ```
     * somestring
     * ```
     * ...then, using the filter, we can display the search result text as:
     *
     * s**om**e**str**ing.
     *
     * The filter can be applied to any HTML element that displays text.
     * See the description of the {@link mobile-toolkit-ra.directive:raItemFilter raItemFilter} directive for a usage
     * example.
     */
    angular.module("mobile-toolkit-ra").filter("raItemFilterTypeaheadHighlight", [ "raItemFilterSvc", function(raItemFilterSvc) {
        function escapeRegexp(queryToEscape) {
            // Add a backslash before all these special characters:
            //          . ? * + ^ $ [ ] \ ( ) { } | -
            return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        }
        function regExpForPredicates(matchedPredicates) {
            var escapedString = "";
            var i;
            // If  matchedPredicates = [aString] we want to escape special characters in aString
            // and return 'aString'.
            // If matchedPredicates = [string1, string2] we want escape special characters in
            // string1 and string2 and return '(string1 | string2)'
            // The reason for above logic is so that the sender of this method can replace all the
            // occurrences of matchedPredicates in a target string with one targetString.replace() call
            // instead of multiple calls that cause erroneous matches.
            // So
            //      If the target string is 'abst' and matched predicates are ['s', 't']
            //      our target typeahead string is 'ab<strong>s</strong><strong>t</strong>'
            //      NOT 'ab<s<strong>rong>s</s<strong>rong><strong>t</strong>'
            if (matchedPredicates.length === 1) {
                escapedString = escapeRegexp(matchedPredicates[0]);
                return escapedString;
            }
            for (i = 0; i < matchedPredicates.length; i++) {
                if (i === 0) {
                    escapedString = "(" + escapeRegexp(matchedPredicates[i]);
                } else {
                    escapedString = escapedString + "|" + escapeRegexp(matchedPredicates[i]);
                }
            }
            escapedString = escapedString + ")";
            return escapedString;
        }
        return function(textToEmphasis, predicateID, searchObject) {
            var regex, matchedPredicates;
            if (!predicateID) {
                return textToEmphasis;
            }
            // Don't typeahead highlight if there is an error in the parser
            if (raItemFilterSvc.getCurrentError()) {
                return textToEmphasis;
            }
            if (!searchObject) {
                // If objectToSearch is not specified we are most likely calling this
                // filter from the type ahead items themselves.
                regex = new RegExp(escapeRegexp(predicateID), "gi");
            } else {
                // If this data item has been processed by the parser it should
                // have an object called raItemFilterResults
                if (!searchObject.raItemFilterResults) {
                    return textToEmphasis;
                }
                // And this raItemFilterResults will include the results of the last
                // parser execution for this data item
                if (!searchObject.raItemFilterResults.isMatch) {
                    return textToEmphasis;
                }
                // raItemFilterResults will also include an array of predicates that was used
                // to match against. Note that there could be more than once match for the same predicate
                matchedPredicates = searchObject.raItemFilterResults[predicateID];
                if (!matchedPredicates) {
                    return textToEmphasis;
                }
                regex = new RegExp(regExpForPredicates(matchedPredicates), "gi");
            }
            textToEmphasis = ("" + textToEmphasis).replace(regex, "<strong>$&</strong>");
            return textToEmphasis;
        };
    } ]);
})();

/* global angular */
(function() {
    "use strict";
    angular.module("mobile-toolkit-ra").factory("raItemFilterTypeAheadListSvc", RAItemFilterTypeAheadListSvc);
    RAItemFilterTypeAheadListSvc.$inject = [ "raItemFilterSvc", "RA_ITEM_FILTER_CONSTANTS" ];
    function RAItemFilterTypeAheadListSvc(raItemFilterSvc, RA_ITEM_FILTER_CONSTANTS) {
        var filterDetails = {
            // details about the current filter statement
            queryString: "",
            // the full filter string
            preString: "",
            // everything before the last specified predicate
            postString: "",
            // the last specified predicate
            currentPredicate: null,
            //the last specified predicate as registered with raItemFilterSvc
            isCompoundStatement: false,
            //if the current statement represents multiple predicates
            typeAheadListSize: RA_ITEM_FILTER_CONSTANTS.defaultTypeAheadListMaxSize
        };
        var lastSearchString;
        var typeaheadList;
        return {
            createListFor: createListFor
        };
        ////////////////////////
        ////////////////////////
        function createListFor(datasourceList, listSizeNum) {
            var newTypeaheadList = [];
            // if there is a parser error, don't create any items
            if (raItemFilterSvc.getCurrentError()) {
                return newTypeaheadList;
            }
            filterDetails.queryString = raItemFilterSvc.getCurrentQuery();
            if (typeof filterDetails.queryString !== "string") {
                return newTypeaheadList;
            }
            // if the current query has not changed, use the current type ahead list
            if (lastSearchString === filterDetails.queryString) {
                return typeaheadList;
            }
            // Add the currently typed filter string as the first item in type-ahead list
            if (filterDetails.queryString.length > 0) {
                newTypeaheadList[0] = filterDetails.queryString;
            }
            lastSearchString = filterDetails.queryString;
            typeaheadList = newTypeaheadList;
            if (!initializeFilterObject()) {
                return typeaheadList;
            }
            if (listSizeNum && angular.isNumber(listSizeNum)) {
                filterDetails.typeAheadListSize = listSizeNum;
            }
            angular.forEach(datasourceList, function(dataObject) {
                createItemsForDataObject(dataObject);
            });
            return typeaheadList;
        }
        ////////////////////////
        ///////////////////////
        function clearFilterDetails() {
            filterDetails.preString = "";
            filterDetails.postString = "";
            filterDetails.currentPredicate = "";
            filterDetails.isCompoundStatement = "";
        }
        function initializeFilterObject() {
            var substrings, i;
            var lastPredicateSubStrings;
            var lastChar;
            // initialize the filter object to help with typeAhead item creation
            // In general the approach is to create type ahead items for the last specified predicate in the
            // current filter statement
            //ex. for 'A and B OR C' then {preString: 'A and B OR', postString: 'C'}
            //ex. for 'n:somename' then {preString: 'n:', postString: 'somename'}
            //ex. for 'n:somename AND p:other' then {preString: 'n:somename AND p:', postString: 'other'}
            clearFilterDetails();
            if (!filterDetails.queryString) {
                return false;
            }
            if (isLastPredicateSpecified(filterDetails.queryString)) {
                substrings = filterDetails.queryString.split(RA_ITEM_FILTER_CONSTANTS.filterPredicateIdentifier);
                if (substrings.length === 1) {
                    filterDetails.preString = substrings[0];
                    filterDetails.currentPredicate = raItemFilterSvc.registeredPredicateFor(angular.lowercase(filterDetails.preString));
                } else {
                    lastPredicateSubStrings = substrings[substrings.length - 2].split(" ");
                    filterDetails.currentPredicate = raItemFilterSvc.registeredPredicateFor(angular.lowercase(lastPredicateSubStrings[lastPredicateSubStrings.length - 1]));
                }
                for (i = 0; i < substrings.length - 1; i++) {
                    filterDetails.preString = filterDetails.preString + substrings[i] + ":";
                }
                filterDetails.postString = substrings[substrings.length - 1];
                lastChar = filterDetails.preString[filterDetails.preString.length - 1];
                if (lastChar === RA_ITEM_FILTER_CONSTANTS.filterPredicateIdentifier && !filterDetails.currentPredicate) {
                    //this is an unregistered predicate....don't display any type ahead items
                    return false;
                }
            } else {
                substrings = filterDetails.queryString.split(" ");
                if (substrings.length === 1) {
                    filterDetails.preString = substrings[0];
                }
                for (i = 0; i < substrings.length - 1; i++) {
                    filterDetails.preString = filterDetails.preString + substrings[i] + " ";
                }
                filterDetails.postString = substrings[substrings.length - 1];
            }
            filterDetails.isCompoundStatement = substrings.length > 1;
            return true;
        }
        function isLastPredicateSpecified(aFilterString) {
            var substrings, lastPredicate;
            substrings = aFilterString.split(" ");
            lastPredicate = substrings[substrings.length - 1];
            return lastPredicate.indexOf(RA_ITEM_FILTER_CONSTANTS.filterPredicateIdentifier) > -1;
        }
        function createItemsForDataObject(dataObject) {
            var currentPredicate;
            // If the user just typed a predicate, then display items only for that predicate only
            if (filterDetails.currentPredicate) {
                createItemsForDataObjectAndPredicate(dataObject, filterDetails.currentPredicate);
                return;
            }
            // Display typeahead items for all registered predicates
            for (currentPredicate in raItemFilterSvc.getPredicates()) {
                // jshint ignore: line
                createItemsForDataObjectAndPredicate(dataObject, raItemFilterSvc.getPredicates()[currentPredicate]);
            }
        }
        function createItemsForDataObjectAndPredicate(dataObject, predicate) {
            var currentValue;
            // Dont add more items on the list than we need
            if (typeaheadList.length >= filterDetails.typeAheadListSize) {
                return;
            }
            currentValue = predicate.callback(dataObject) || "";
            currentValue = currentValue.toString().trim();
            // Dont add an empty predicate value
            if (currentValue.length < 1) {
                return;
            }
            // If the predicate value does not exists in the search string, don't create a type ahead item
            if (angular.lowercase(currentValue).indexOf(angular.lowercase(filterDetails.postString)) < 0) {
                return;
            }
            // If this is a compound statement, prepend the previous types filter characters to the new type ahead item
            // ex. If the user typed 'A AND B OR C' and we have a predicate value of 'tcg' then
            // we want the new type ahead item to be 'A AND B OR tcg'
            if (filterDetails.isCompoundStatement) {
                currentValue = filterDetails.preString + currentValue;
            }
            // Dont add a duplicate row to the type ahead list
            if (typeaheadList.indexOf(currentValue) >= 0) {
                return;
            }
            typeaheadList[typeaheadList.length] = currentValue;
        }
    }
})();

/* globals angular */
angular.module("mobile-toolkit-ra").run(function() {
    "use strict";
    /**
         * @ngdoc function
         * @name angular.element
         * @module ng
         * @description
         * The angular.element is the function in the module [ng](https://docs.angularjs.org/api/ng).
         *
         * The methods listed below extend the angular's jqLite to finding descendant elements.
         * Notice that the purpose of adding these extensions was to remove jQuery dependencies
         * from most of `mobile-toolkit-ra` components.
         *
         * The document about `mobile-toolkit-ra` dependency on jQuery
         * is available [here](#/nonapi/jQueryDepedencies.md).
         */
    /**
         * @ngdoc method
         * @name angular.element#findElement
         * @methodOf angular.element
         * @param {string} selector contains a selector expression for elements comparison
         * @description
         * Returns a descendant object based on provided selector
         * @returns {object} Wrapped DOM element
         */
    angular.element.prototype.findElement = function(selector) {
        if (this.length > 0) {
            return angular.element(this[0].querySelector(selector));
        }
        throw new Error("Wrong element. " + this);
    };
    /**
         * @ngdoc method
         * @name angular.element#findElements
         * @methodOf angular.element
         * @param {string} selector contains a selector expression for elements comparison
         * @description
         * Returns an array of descendant objects based on the provided selector
         * @returns {array} Array of wrapped DOM elements
         */
    angular.element.prototype.findElements = function(selector) {
        if (this.length > 0) {
            return angular.element(this[0].querySelectorAll(selector));
        }
        throw new Error("Wrong element. " + this);
    };
});

/* global angular */
//see raLayout.md for description
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raLayout
 * @scope
 * @deprecated The directive is deprecated and will be removed in the future. Please see
 * the flexbox based layout replacement (CSS only).
 * @module mobile-toolkit-ra
 * @restrict A
 *
 * @description
 * __*Replacement*__: Please see for [flexbox layout](#/nonapi/flexboxLayout.md).
 *
 * The directive is responsible for calculating of available free space of main content and
 * emitting height to component.
 *
 *
 *
 */
angular.module("mobile-toolkit-ra").directive("raLayout", [ "$window", "$timeout", "$rootScope", "$log", "LAYOUT_EVENTS", function($window, $timeout, $rootScope, $log, LAYOUT_EVENTS) {
    "use strict";
    return {
        restrict: "A",
        controller: [ "$scope", function($scope) {
            /**
             * Calculates total height of all headers or footers
             * @param {boolean} forHeader
             *  whether to count headers (true) or footers (false)
             * @returns {number}
             */
            var getFixedHeight = function(forHeader) {
                var heightSum = 0, gapId;
                for (gapId in $scope.fixedGaps) {
                    if ($scope.fixedGaps.hasOwnProperty(gapId)) {
                        if (forHeader && $scope.fixedGaps[gapId].aboveFlex) {
                            heightSum += $scope.fixedGaps[gapId].h;
                        } else if (!forHeader && !$scope.fixedGaps[gapId].aboveFlex) {
                            heightSum += $scope.fixedGaps[gapId].h;
                        }
                    }
                }
                return heightSum;
            }, resizeProm, resize = function() {
                //do delayed resize operation
                //delay is needed while resizing browsers window
                //  to not kill app with too many events
                $timeout.cancel(resizeProm);
                resizeProm = $timeout(function() {
                    //Previously used below $(window).height()
                    //worked good everywhere without iPad 7 in landscape orientation.
                    //Switched to innerHeight property which solves that issue
                    // and is available even in IE>=9
                    var winH = $window.innerHeight, evMsg = {};
                    evMsg.footerH = getFixedHeight(false);
                    evMsg.headerH = getFixedHeight(true);
                    evMsg.flexMaxH = winH - evMsg.footerH - evMsg.headerH;
                    //3 broadcast events :
                    //1. ..STEP1_HIDE message is targeted to all visual "fittable" components
                    // with fixed height like scroller panel,
                    // and should cause to minimize its height to allow flex DIV (raLayoutFlexGap)
                    // to measure its height with minimized fitting components
                    $scope.$broadcast(LAYOUT_EVENTS.LAY_RES_STEP1_HIDE);
                    //2. in ...SET_FLEX is targeted to raLayoutFlexGap directive
                    // which based on evMsg values should set its top and max-height css values:
                    //      top=evMsg.headerH + "px"
                    //      max-height=evMsg.flexMaxH + "px"
                    // in this step raLayoutFlexGap calculates also its current height
                    // with minimized "fittable" components and extends evMsg with flexCurH param:
                    //      evMsg.flexCurH = $(element).height();
                    $scope.$broadcast(LAYOUT_EVENTS.LAY_RES_STEP2_SET_FLEX, evMsg);
                    //3. in ...STEP3_SHOW message is targeted to all visual "fittable" components
                    // to allow them to calculate and set their height to fit inside the flexible
                    // DIV
                    $scope.$broadcast(LAYOUT_EVENTS.LAY_RES_STEP3_SHOW, evMsg);
                }, // delay==200 is needed from 2 reasons:
                // 1. to avoid multiple messages during resizing
                //    or ui-state changing of each subView
                // 2. $viewContentLoaded event should be emitted after view
                //   DOM rendered and angular linking process, but in fact
                //   it is emitted before linking process and on slower devices
                //   like Samsung Galaxy Tab2 might not link all subViews on time
                //   (before this broadcasts) - it's probably ui-router bug
                // 3.
                100);
            };
            $scope.fixedGaps = {};
            this.addFixedGap = function(gapId, isAboveFlex, height) {
                $scope.fixedGaps[gapId] = {
                    aboveFlex: isAboveFlex,
                    h: height
                };
                resize();
            };
            this.removeFixedGap = function(gapId) {
                delete $scope.fixedGaps[gapId];
                resize();
            };
            this.changeFixedGapHeight = function(gapId, height) {
                $scope.fixedGaps[gapId].h = height;
                resize();
            };
            //window.resize event fired also when rotating
            angular.element($window).bind("resize", function() {
                resize();
            });
            //ui-router event emitted on $stateChangeSuccess
            $scope.$on("$stateChangeSuccess", function() {
                resize();
            });
            //ui-router event emitted by subViews on the end on DOM render
            //should be after $stateChangeSuccess
            $scope.$on("$viewContentLoaded", function() {
                resize();
            });
            //$includeContentLoaded fired by ng-include
            $scope.$on("$includeContentLoaded", function() {
                resize();
            });
            $log.warn("raLayout directive is deprecated");
        } ],
        replace: true
    };
} ]).directive("raLayoutFixedGap", [ "$log", "raIdGenSvc", function($log, raIdGenSvc) {
    "use strict";
    return {
        restrict: "A",
        //for testing purposes of other widgets containing this one
        // parent raLayout is optional
        require: "?^raLayout",
        link: function(scope, element, attrs, raLayCtrl) {
            var gapH = function() {
                //measures height without margins right now
                return element.prop("offsetHeight");
            }, isAboveFlex = attrs.raLayoutFixedGap === "header", myId = raIdGenSvc.getStrId();
            if (raLayCtrl) {
                raLayCtrl.addFixedGap(myId, isAboveFlex, gapH());
                scope.$watch(gapH, function(nevVal) {
                    raLayCtrl.changeFixedGapHeight(myId, nevVal);
                });
                scope.$on("$destroy", function() {
                    raLayCtrl.removeFixedGap(myId);
                });
            } else {
                //in design mode (with enabled debug)
                // it is good to have info that something isn't well configured
                $log.debug("raLayoutFixedGap directive " + "didn't find parent raLayout", "scope.$id: " + scope.$id);
            }
            $log.warn("raLayoutFixedGap directive is deprecated");
        }
    };
} ]).directive("raLayoutFlexGap", [ "$log", "LAYOUT_EVENTS", function($log, LAYOUT_EVENTS) {
    "use strict";
    return {
        restrict: "A",
        //for testing purposes of other widgets containing this one
        // parent raLayout is optional
        require: "?^raLayout",
        link: function(scope, element, attrs, raLayCtrl) {
            if (raLayCtrl) {
                scope.$on(LAYOUT_EVENTS.LAY_RES_STEP2_SET_FLEX, function(ev, evMsg) {
                    element.css("top", evMsg.headerH + "px");
                    element.css("height", "");
                    evMsg.flexCurH = element.prop("offsetHeight");
                    element.css("height", evMsg.flexMaxH + "px");
                });
            } else {
                //in design mode (with enabled debug)
                // it is good to have info that something isn't well configured
                $log.debug("raLayoutFlexGap directive " + "didn't find parent raLayout", "scope.$id: " + scope.$id);
            }
            $log.warn("raLayoutFlexGap directive is deprecated");
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.directive:raList
 * @scope
 * @restrict E
 * @param {array} items
 * The items that will appear in the list.
 *
 * The objects in this array can have the following properties:
 *
 * - **label** - `{string}` -
 *   The item's text.  No text will be displayed if not present.
 * - **description** - `{string}` -
 *   The item's description text.  No description will be displayed if not present.
 * - **isSelected** - `{boolean}` -
 *   Whether or not the item is selected.  If not specified, the item will not be
 *   selected.  If `config.selectionMode` is "none" setting this property to a
 *   truthy value will have no effect.  If `config.selectionMode` is "single"
 *   only the first item in the list with a truthy `isSelected` property will be
 *   selected.
 * - **iconClasses** - `{string}` -
 *   A space separated list of classes to be applied to a span element.  This is
 *   how icons from icon fonts are typically applied.  For example: `"ra-icon ra-icon-home"`
 * - **iconUrl** - `{string}` -
 *   The item's icon.  If not specified, no icon is used.
 * - **value** - `{any}` -
 *   The item's value.  If not specified, no value is displayed.
 * - **valueClasses** - `{string}` -
 *   Space separated CSS classes that will be applied to the item's value
 * - **hasChevron** - `{boolean}` -
 *   Whether to show a chevron for the item.  If not specified, a chevron is not shown.
 *
 * Any other application-specific properties may be added to each item.  This
 * additional information may be useful when implementing the drop handler for
 * drag and drop operations.  For more information, see the section on
 * [drag and drop functionality](#/api/mobile-toolkit-ra.directive:raList#description_drag-and-drop).
 *
 * @param {object=} config
 * Configuration for this list.  This list can have the following properties:
 *
 * - **[selectionMode]** - `{string}` -
 *   Indicates which type of selection the list supports.  Possible values are:
 *     - `"none"` - default - No selection is possible.
 *     - `"single"` - Only a single item can be selected.  A radio button is
 *       displayed next to each item.
 *     - `"multiple"` - Multiple items can be selected.  A checkbox is displayed
 *       next to each item.
 * - **[itemsAreDraggable]** - `{boolean}` -
 *   Indicates whether the items in the list are draggable.  When set to a truthy
 *   value, Kendo UI is required (see the "Dependencies" section).  If not
 *   specified, items will not be draggable.
 * - **[onAction]** - `{function}` -
 *   Defines a callback function that will be invoked whenever the user clicks on
 *   an item in the list.  This callback can be used to navigate into a list item
 *   when the user clicks or taps on it.  This callback will not be invoked when
 *   the user clicks on a radio button (single selection mode) or a checkbox
 *   (multiple selection mode) to change the item's selected state.  This function
 *   must have the following parameters:
 *     - **item** - `{object}` - The item that the user clicked on.
 * - **[onSelectionChange]** - `{function}` -
 *   Defines a callback function that will be invoked whenever the user changes
 *   the selected state of an item.
 * - **[onDragHold]** - `{function}` -
 *   Defines a callback function that will be invoked whenever the user has
 *   activated an item for dragging by tapping and holding on an item.  This
 *   function must have the following parameters:
 *     - **item** - `{object}` - The item that the user clicked on.
 * - **[onDragBegin]** - `{function}` -
 *   Defines a callback function that will be invoked whenever the user has
 *   started dragging an item.  This function must have the following parameters:
 *     - **item** - `{object}` - The item that the user clicked on.
 * - **[onDragFinish]** - `{function}` -
 *   Defines a callback function that will be invoked whenever the user has
 *   finished dragging an item.  No Parameters.
 *
 * @param {function=} setApi
 * A callback function that returns the API object. It should take a single parameter named `api`,
 * that will contain the API object when called.
 *
 * The object passed into the callback has the following functions and properties:
 *
 * - **clearDragActivation()** - `{function}` -
 *   A function that will clear any active drag activation.  This function is
 *   useful when there are multiple drag sources present on a page.  When a drag
 *   operation starts on one, the developer may want to remove any drag
 *   activation on the other(s).
 * - **getSelectedItems()** - `{function}` -
 *   A function that returns an array of the currently selected items.  This
 *   function takes `config.selectionMode` into account when determining whether
 *   an item is selected (as documented in the `item.isSelected` section above).
 * - **clearSelection()** - `{function}` -
 *   A function that deselects currently selected items.
 *
 * @description
 * A reusable UI widget that displays a list of items.  Optionally, each item
 * can include an icon, a description, a value and a chevron (to indicate that
 * the item can be navigated to).  Multiple selection modes can be enabled, and
 * the items can be made draggable.
 *
 * ## Drag and Drop
 *
 * This directive uses Kendo UI to make list items draggable.  To use this
 * functionality, you must
 * [include the Kendo UI library](#/nonapi/addingThirdPartyDependencies.md#adding-a-dependency-on-kendo-ui).
 *
 * Items contained in a `raList` can be used as drag and drop sources.  This is
 * done by:
 *
 * 1.  Setting `config.itemsAreDraggable` to a truthy value.
 * 2.  Add any application-specific properties to each item in the `items`
 *     collection  that will be needed when the item is dropped onto a drop
 *     target.
 *     <pre>
 *         <ra-list items="listItems" config="listConfig"></ra-list>
 *     </pre>
 *     <pre>
 *         $scope.listConfig = {itemsAreDraggable: true};
 *         $scope.listItems = [
 *             {label: 'item 2', appSpecificInfo: 'item 2 info'},
 *             {label: 'item 3', appSpecificInfo: 'item 3 info'}
 *             {label: 'item 1', appSpecificInfo: 'item 1 info'},
 *         ];
 *     </pre>
 *
 * To create a location on your page where an item can be dropped, a drop target
 * must be created.  To create a drop target:
 *
 * 1.  Add the `kendo-drop-target` attribute to the DOM element that will serve
 *     as the drop target.
 * 2.  Configure drop functionality by adding the `k-options` attribute and
 *     binding its value to a configuration object on scope.
 *     <pre>
 *         <div kendo-drop-target k-options="dropOptions"></div>
 *     </pre>
 * 3.  Implement the drop event handler.
 *     <pre>
 *         $scope.dropOptions = {
 *             drop: function (e) {
 *                 var item = e.draggable.element.scope().curItem;
 *                 // Note: You can use item.appSpecificInfo.
 *                 var message = 'Dropped item: ' + angular.toJson(item);
 *                 console.log(message);
 *             }
 *         };
 *     </pre>
 *
 * For more information on implementing a drop target, see
 * [the Kendo UI DropTarget documentation](http://docs.telerik.com/kendo-ui/framework/draganddrop/overview#droptarget).
 *
 * ## Truncation of labels, descriptions and values
 *
 * Labels, descriptions, and values that appear in `ra-list` use
 * {@link mobile-toolkit-ra.directive:raTruncate ra-truncate} to allow
 * truncation of text within the visible height of an element.  If you want to
 * truncate a label, description or value, select the element using a
 * `.ra-list-label-name`, `.ra-list-label-description` or
 * `.ra-list-value` selector and set the `max-height` CSS property.  See the
 * documentation for {@link mobile-toolkit-ra.directive:raTruncate ra-truncate}
 * for more details.
 *
 * @example
 * An example showing a simple usage of the raList.
 *
 * <example module="exampleApp">
 * <file name="index.html">
 *     <div ng-controller="ctrl1">
 *         <ra-list config="listConfig" items="listItems" set-api="setListApi(api)"></ra-list>
 *     </div>
 * </file>
 * <file name="script.js">
 *     angular.module('exampleApp', ['mobile-toolkit-ra'])
 *     .controller(
 *         'ctrl1',
 *         [
 *             '$scope',
 *             function ($scope) {
 *                 var listApi;
 *                 $scope.setListApi = function (api) {
 *                     listApi = api;
 *                 };
 *                 $scope.listConfig = {selectionMode: 'single'};
 *                 $scope.listItems = [
 *                     {label: 'item 1', description: 'item 1 description'},
 *                     {label: 'item 2'},
 *                     {label: 'item 3'}
 *                 ];
 *             }
 *         ]
 *     );
 * </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raList", [ "$templateCache", "raIdGenSvc", "LAYOUT_EVENTS", function($templateCache, raIdGenSvc, LAYOUT_EVENTS) {
    "use strict";
    //
    // Constants
    //
    var selectionMode = {
        NONE: "none",
        SINGLE: "single",
        MULTIPLE: "multiple"
    };
    /**
             * Constructs a new RaListItemColumnDefinitions and updates it.
             * This object describes how columns are allocated when
             * rendering a list item.
             * @param {object} config The configuration properties used to configure the raList
             * @param {object[]} items The array of objects displayed in the raList
             * @constructor
             */
    var RaListItemColumnDefinitions = function(config, items) {
        this.hasSelection = false;
        this.hasIcons = false;
        this.labelGroupCols = 0;
        this.valueCols = 0;
        this.chevronCols = 0;
        this.update(config, items);
    };
    RaListItemColumnDefinitions.prototype = function() {
        /**
                 * Helper function that converts an integer number of columns
                 * into the corresponding Bootstrap column class string.
                 * @param {number} colCount The number of columns
                 * @returns {string} The corresponding Bootstrap class
                 */
        function colCountToColClass(colCount) {
            return colCount < 1 || colCount > 12 ? "" : "col-xs-" + colCount;
        }
        /**
                 * Updates the state of this object.
                 * @param {object} config The configuration properties for this raList
                 * @param {object[]} items The items to be displayed
                 */
        var update = function(config, items) {
            var hasValues = false, hasChevrons = false, itemIndex, curItem;
            // Reset column allocations.
            this.hasDescriptions = false;
            // optional
            this.hasIcons = false;
            // optional
            this.labelGroupCols = 12;
            // required
            this.valueCols = 0;
            // optional
            this.chevronCols = 0;
            // optional
            // Iterate through the items to see if icons, values and
            // chevrons are used.
            if (items) {
                for (itemIndex = 0; itemIndex < items.length; ++itemIndex) {
                    curItem = items[itemIndex];
                    if (curItem.iconUrl || curItem.iconClasses) {
                        this.hasIcons = true;
                    }
                    if (curItem.value) {
                        hasValues = true;
                    }
                    if (curItem.hasChevron) {
                        hasChevrons = true;
                    }
                    if (curItem.description) {
                        this.hasDescriptions = true;
                    }
                }
            }
            this.hasSelection = config && config.selectionMode !== selectionMode.NONE;
            // If values are present, give the value UI 4 columns and
            // take the space away from the label-group column.
            if (hasValues) {
                this.valueCols = 6;
                this.labelGroupCols -= this.valueCols;
            }
            // If chevrons are present, give the chevron UI 1 column.
            // If values are present, take the space away from the value
            // UI.  Otherwise, take the space away from the label-group column.
            if (hasChevrons) {
                this.chevronCols = 1;
                if (hasValues) {
                    this.valueCols -= this.chevronCols;
                } else {
                    this.labelGroupCols -= this.chevronCols;
                }
            }
        };
        /**
                 * Gets the Bootstrap column class for the selection column.
                 * @returns {boolean} Returns true if the selection 'single' or 'multiple'
                 * has been turned on
                 *
                 */
        var hasSelectionCol = function() {
            return this.hasSelection;
        };
        /**
                 * Gets the Bootstrap column class for the icon column.
                 * @returns {boolean} Returns true if at least one item has the icon
                 */
        var hasIconCol = function() {
            return this.hasIcons;
        };
        /**
                 * Gets the Bootstrap column class for the description column.
                 * @returns {boolean} Returns true if at least one item has the description
                 */
        var hasDescriptionCol = function() {
            return this.hasDescriptions;
        };
        /**
                 * Gets the Bootstrap column class for the label-group column.
                 * @returns {string} The Bootstrap column class
                 */
        var getLabelGroupColClass = function() {
            return colCountToColClass(this.labelGroupCols);
        };
        /**
                 * Gets the Bootstrap column class for the value column.
                 * @returns {string} The Bootstrap column class
                 */
        var getValueColClass = function() {
            return colCountToColClass(this.valueCols);
        };
        /**
                 * Gets the Bootstrap column class for the chevron column.
                 * @returns {string} The Bootstrap column class
                 */
        var getChevronColClass = function() {
            return colCountToColClass(this.chevronCols);
        };
        return {
            update: update,
            hasSelectionCol: hasSelectionCol,
            hasIconCol: hasIconCol,
            hasDescriptionCol: hasDescriptionCol,
            getLabelGroupColClass: getLabelGroupColClass,
            getValueColClass: getValueColClass,
            getChevronColClass: getChevronColClass
        };
    }();
    return {
        restrict: "E",
        scope: {
            items: "=",
            config: "=?",
            setApi: "&"
        },
        template: $templateCache.get("raList/raList.tpl.html"),
        link: function(scope, directiveElem, attrs) {
            var lastElemDragActivated = null, listApi = {};
            /**
                     * @description Provides api of directive
                     * @constructor
                     */
            function RaListApi() {
                return {
                    clearDragActivation: function() {
                        removeDragActivationVisual();
                        if (lastElemDragActivated) {
                            lastElemDragActivated.data("kendoDraggable").cancelHold();
                        }
                    },
                    getSelectedItems: function() {
                        var selectedItems = [];
                        scope.items.forEach(function(curItem) {
                            if (scope.itemIsSelected(curItem)) {
                                selectedItems.push(curItem);
                            }
                        });
                        return selectedItems;
                    },
                    clearSelection: function() {
                        // clear currently selected items
                        clearSelection();
                        // if in single selection mode then need to update scope.singleSelectionIndex
                        // because it's required to deselect items in html
                        if (scope.config.selectionMode === selectionMode.SINGLE) {
                            scope.singleSelectionIndex = getFirstSelectedItemIndex();
                        }
                    }
                };
            }
            /**
                     * Helper function that normalizes the configuration object.
                     */
            function normalizeConfig() {
                scope.config = scope.config || {};
                scope.config.selectionMode = scope.config.selectionMode || selectionMode.NONE;
                scope.config.itemsAreDraggable = scope.config.itemsAreDraggable || false;
            }
            /**
                     * Helper function that deselects all items in the list.
                     */
            function clearSelection() {
                var curIndex;
                for (curIndex = 0; curIndex < scope.items.length; ++curIndex) {
                    scope.items[curIndex].isSelected = false;
                }
            }
            /**
                     * Helper function that iterates over scope.items and
                     * returns the index of the first item with a truthy
                     * isSelected property.
                     * @returns {number | null} The index of the first selected
                     *      item or null if there was none.
                     */
            function getFirstSelectedItemIndex() {
                var itemIndex;
                for (itemIndex = 0; itemIndex < scope.items.length; ++itemIndex) {
                    if (scope.items[itemIndex].isSelected) {
                        break;
                    }
                }
                if (itemIndex === scope.items.length) {
                    itemIndex = null;
                }
                return itemIndex;
            }
            /**
                     * Helper function that iterates over scope.items and
                     * returns the first item with a truthy isSelected property.
                     * @returns {object | null} The first selected item or null
                     *      if there was none.
                     */
            function getFirstSelectedItem() {
                var selectedIndex = getFirstSelectedItemIndex();
                return selectedIndex === null ? null : scope.items[selectedIndex];
            }
            /**
                     * Helper function that removes the .ra-list-drag-source
                     * class from all elements within this directive's DOM.
                     */
            function removeDragActivationVisual() {
                var dragSources = directiveElem.find(".ra-list-drag-source");
                dragSources.removeClass("ra-list-drag-source");
            }
            normalizeConfig();
            scope.uniqueId = raIdGenSvc.getStrId();
            // If the user has provided an setApi function to obtain the public API,
            // create and call it now.
            if (attrs.setApi) {
                listApi = new RaListApi();
                scope.setApi({
                    api: listApi
                });
            }
            // Setup watchers.
            scope.$watchCollection("config", function(newValue) {
                normalizeConfig();
                // When the config object is changed, the column layout must
                // be recalculated.
                scope.colDefs = new RaListItemColumnDefinitions(scope.config, scope.items);
                // If in single selection mode, re-synchronize the model
                // that the radio buttons bind to with the new items
                // collection.
                if (newValue.selectionMode === selectionMode.SINGLE) {
                    scope.singleSelectionIndex = getFirstSelectedItemIndex();
                }
                // Broadcast event 'ELEMENT_RESIZE' because of
                // has been changed count of bootstrap columns
                scope.$broadcast(LAYOUT_EVENTS.ELEMENT_RESIZE);
            });
            scope.$watchCollection("items", function() {
                // When the items collection is changed, the column layout
                // must be recalculated.
                scope.colDefs = new RaListItemColumnDefinitions(scope.config, scope.items);
                // If in single selection mode, re-synchronize the model
                // that the radio buttons bind to with the new items
                // collection.
                if (scope.config.selectionMode === selectionMode.SINGLE) {
                    scope.singleSelectionIndex = getFirstSelectedItemIndex();
                }
            });
            if (scope.config.selectionMode === selectionMode.SINGLE) {
                // Initialize the single selection backing model.
                scope.singleSelectionIndex = getFirstSelectedItemIndex();
            }
            scope.colDefs = new RaListItemColumnDefinitions(scope.config, scope.items);
            scope.draggableOptions = {
                ignore: scope.config.itemsAreDraggable ? ".ra-list-selection *" : "*",
                holdToDrag: scope.config.itemsAreDraggable,
                cursorOffset: {
                    top: -20,
                    left: -50
                },
                hold: function(e) {
                    var newActivatedElem, itemIndex, item;
                    if (scope.config.itemsAreDraggable) {
                        // Remove .ra-list-drag-source from all items.
                        removeDragActivationVisual();
                        // Add .ra-list-drag-source to the newly activated
                        // item.
                        newActivatedElem = angular.element(e.currentTarget);
                        newActivatedElem.addClass("ra-list-drag-source");
                        lastElemDragActivated = newActivatedElem;
                        // Notify the client that a drag hold has happened.
                        itemIndex = newActivatedElem.scope().$index;
                        item = scope.items[itemIndex];
                        if (scope.config.onDragHold) {
                            scope.config.onDragHold(item);
                        }
                    }
                },
                dragstart: function(e) {
                    var elem = angular.element(e.currentTarget), itemIndex = elem.scope().$index, item = scope.items[itemIndex];
                    lastElemDragActivated = null;
                    if (scope.config.onDragBegin) {
                        scope.config.onDragBegin(item);
                    }
                },
                dragcancel: function() {
                    lastElemDragActivated = null;
                    removeDragActivationVisual();
                },
                dragend: function() {
                    lastElemDragActivated = null;
                    removeDragActivationVisual();
                    if (scope.config.onDragFinish) {
                        scope.config.onDragFinish();
                    }
                },
                hint: function(element) {
                    var itemIndex = element.scope().$index, item = scope.items[itemIndex], labelElem = element.find(".ra-list-label-name").eq(0), labelWidth = labelElem.width(), hintElem;
                    hintElem = angular.element("<div></div>");
                    hintElem.addClass("list-group-item");
                    hintElem.addClass("ra-list-group-item");
                    hintElem.addClass("ra-list-drag-hint");
                    hintElem.text(item.label);
                    hintElem.width(labelWidth * 1.2);
                    // same as source plus some padding
                    return hintElem;
                }
            };
            /**
                     * Determines whether the specified item should be displayed
                     * as a selected item.
                     * @param {object} item - The item to be analyzed
                     * @returns {boolean} Whether the item should be displayed
                     *      as a selected item
                     */
            scope.itemIsSelected = function(item) {
                // If no selection is possible, the item cannot be selected.
                if (scope.config.selectionMode === selectionMode.NONE) {
                    return false;
                }
                // If multiple selection, everything is valid, so just
                // return the item's isSelected property.
                if (scope.config.selectionMode === selectionMode.MULTIPLE) {
                    return item.isSelected;
                }
                // If single selection, the item is selected if it is the
                // first item that has a truthy isSelectedProperty.
                if (scope.config.selectionMode === selectionMode.SINGLE) {
                    return item === getFirstSelectedItem();
                }
                // If we got here, there is a bogus selection mode.
                return false;
            };
            /**
                     * Callback that will be invoked when an item is clicked on
                     * @param {object} item - The item that was clicked on
                     */
            scope.onItemClick = function(item) {
                // Notify this list's parent that an item has been
                // clicked.
                if (scope.config.onAction) {
                    scope.config.onAction(item);
                }
            };
            /**
                     * Callback that will be invoked when an item's radio button
                     * is clicked
                     * @param {number} itemIndex - The index of the item
                     * @param {object} item - The item that was clicked on
                     */
            scope.onRadioClick = function(itemIndex, item) {
                scope.singleSelectionIndex = itemIndex;
                clearSelection();
                item.isSelected = true;
                // Notify this list's parent that the selection has
                // changed.
                if (scope.config.onSelectionChange) {
                    scope.config.onSelectionChange();
                }
            };
            /**
                     * Callback that will be invoked when an item's checkbox
                     * is clicked
                     */
            scope.onCheckboxChange = function() {
                // Notify this list's parent that the selection has
                // changed.
                if (scope.config.onSelectionChange) {
                    scope.config.onSelectionChange();
                }
            };
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raMessage
 * @scope
 * @module mobile-toolkit-ra
 * @restrict AE
 * @param {object} [messageType] Object representing the type of the message.
 * If not set, the error type is assigned.
 *
 * - **`error`**
 * - **`warning`**
 * - **`information`**
 * @param {object} content
 * Object representing the content of the message. The following properties are supported:
 *
 * - **`title`** - `{string}` - the title text to display at the top of the dialog.
 * - **`details`** - `{string}` - the text providing detailed information
 * - **`[confirmationDesc]`** - `{string}` - the text providing confirmation description.
 *
 * @param {object} [actionDefinitions] Object representing definition of the buttons with labels and actions.
 * See {@link mobile-toolkit-ra.directive:raActionBar raActionBar} directive for details.
 * This parameter should be set if buttons are defined neither declaratively
 * nor using content.buttons scope variable.
 * @param {object} [clickAction] Action which should be executed on click event.
 * This parameter should be set if buttons are configured using content.buttons scope variable
 * The button label is passed as an argument during execution
 * which allows to determine which button has been clicked by the user.
 *
 *
 * @description
 * The raMessage is a directive responsible for rendering the message on the modal dialogs
 * allowing for a consistent user experience in Rockwell Automation apps.
 * The directive uses {@link https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes _flexbox_}
 * in order to organize groups of buttons. Each button is created
 * using the {@link mobile-toolkit-ra.directive:raMessageButton _raMessageButton_} directive.
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** The easiest and preferred way to display the modal dialog of type error, warning and information
 *     is to use the specialized service {@link mobile-toolkit-ra.service:raMessageSvc _raMessageSvc_}.
 *     The _raMessage_ directive should be used if the functionality of the service is not sufficient.
 * </div>
 *
 * <div class="alert alert-danger" role="alert">
 *     **Note:** The raMessage directive is meant to be utilized in the template used by
 *     the {@link mobile-toolkit-ra.service:raOverlaySvc _raOverlaySvc_} service.
 * </div>
 *
 * ## Configuration parameters
 *
 * There are three ways of setting visible buttons and the action
 * which should be taken after user click.
 *
 * - **Declaratively** - Using the raMessageButton directive.
 *   In such a case there is no need to set other optional parameters.
 *   The button label as well as action are directly passed to the ra-message-button directive.
 *   <pre>
 *     <div ra-message content="content">
 *         <div ra-message-button label="Retry" action="retryAction()"></div>
 *         <div ra-message-button label="Home" action="homeAction()"></div>
 *     </div>
 *   </pre>
 *
 * - **Programmatically** - Setting the scope variable $scope.actionDefinitions.
 *   See {@link mobile-toolkit-ra.directive:raActionBar raActionBar} directive
 *   for details about the **actionDefinitions** object.
 *   <pre>
 *     <div ra-message message-type="{{messageType}}" content="content"
 *          action-definitions="actionDefinitions"/>
 *   </pre>
 *
 * - **Programmatically** - Setting the scope variable $scope.content.buttons.
 *   In such a case the **click-action** has to be set with the function which has to be executed.
 *   The button label is passed as an argument during execution, which allows
 *   to determine which button has been clicked by the user.
 *   <pre>
 *     <div ra-message message-type="{{messageType}}" content="content"
 *          click-action="clickAction"/>
 *   </pre>
 *
 * ## Template
 *
 * There is a predefined template *'raMessage/raMessageOverlay.tpl.html'* as well as
 * a css class *'ra-message-overlay'* which can be used by overlay dialogs.
 *
 * <pre>
 *     //function to open the overlay using predefined raMessageOverlay template
 *     $scope.openOverlay = function () {
 *        raOverlaySvc.open('OverlayCtrl',
 *            {
 *                title: "State the Potential Problem",
 *                confirmationDesc: "Description of the cause and solution to the potential problem."
 *            },
 *            'raMessage/raMessageOverlay.tpl.html', 'ra-message-overlay').result.then(
 *            //success callback from promise returned from the open call
 *            function (resolved) {
 *                $scope.actionMessage = resolved;
 *            },
 *            //failure callback from promise returned from the open call
 *            function (rejected) {
 *                $scope.actionMessage = rejected;
 *            }
 *        )};
 * </pre>
 *
 * @example
 * The example below shows how to extend _raMessage_ with custom actions declaratively
 * using {@link mobile-toolkit-ra.directive:raMessageButton _raMessageButton_} directive.
 * This type of extension is used e.g., in *raErrorCollectorSvc/raCommunicationErrorOverlay.tpl.html*
 * by {@link mobile-toolkit-ra.service:raErrorCollectorSvc _raErrorCollectorSvc_} service.
 *
 * <example module="exampleAppOne">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" class="ra-overlay-example">
 *            <div>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="openOverlay()">
 *                    Open
 *                </a>
 *                overlay resolved with: {{actionMessage}}
 *            </div>
 *        </div>
 *    </file>
 *    <file name="overlayOne.html">
 *        <div ra-message message-type="{{messageType}}" content="content">
 *            <div ra-message-button label="Retry" action="retryAction()"></div>
 *            <div ra-message-button label="Home" action="homeAction()"></div>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppOne', ['mobile-toolkit-ra']);
 *
 *        //this is the controller for the page hosting the overlay
 *        mod.controller('exampleCtrl',
 *        ['$scope', 'raOverlaySvc',
 *            function ($scope, raOverlaySvc) {
 *                'use strict';
 *                var overlayConfig = {
 *                    title: "State the Potential Problem",
 *                    confirmationDesc: "Description provides the cause and solution to the potential problem."
 *                };
 *
 *                //function to open the overlay using all defaults
 *                $scope.openOverlay = function () {
 *                    raOverlaySvc.open('OverlayCtrl', overlayConfig, 'overlayOne.html',
 *                     'ra-message-overlay').result.then(
 *                        //success callback from promise returned from the open call
 *                        function (resolved) {
 *                            $scope.actionMessage = resolved;
 *                        },
 *                        //failure callback from promise returned from the open call
 *                        function (rejected) {
 *                            $scope.actionMessage = rejected;
 *                        }
 *                    );
 *                };
 *            }
 *            ]);
 *
 *        //this is the controller for for the overlay itself
 *        mod.controller('OverlayCtrl', [
 *        '$scope', 'raOverlaySvc', 'config', 'RA_MESSAGE_TYPE',
 *        function ($scope, raOverlaySvc, config, RA_MESSAGE_TYPE) {
 *            $scope.content = config;
 *            $scope.retCnt = 0;
 *            $scope.title = config.title;
 *            $scope.messageType = RA_MESSAGE_TYPE.INFORMATION;
 *            $scope.retryAction = function () {
 *                $scope.retCnt ++;
 *                $scope.content.details = "Retried " + $scope.retCnt;
 *                };
 *            $scope.homeAction = function () {
 *                console.log("Home clicked ... closing");
 *                $scope.$close('HOME');
 *                };
 *            }
 *        ]);
 *    </file>
 * </example>
 *
 * The example below shows how to utilize _raMessage_ using *actionDefinitions*
 * in a similar way to how it is defined in the {@link mobile-toolkit-ra.directive:raActionBar _raActionBar_} directive.
 *
 * <example module="exampleAppTwo">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" class="ra-overlay-example">
 *            <div>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="openOverlay()">
 *                    Open
 *                </a>
 *                overlay resolved with: {{actionMessage}}
 *            </div>
 *        </div>
 *    </file>
 *    <file name="raMessageOverlayActionDefinitions.html">
 *        <div ra-message message-type="{{messageType}}" content="content" action-definitions="actionDefinitions"/>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppTwo', ['mobile-toolkit-ra']);
 *        //this is the controller for the page hosting the overlay
 *        mod.controller('exampleCtrl',
 *        ['$scope', 'raOverlaySvc',
 *            function ($scope, raOverlaySvc) {
 *                'use strict';
 *                var overlayConfig = {
 *                    title: "State the Potential Problem",
 *                    confirmationDesc: "Description provides the cause and solution to the potential problem."
 *                };
 *
 *                //function to open the overlay using all defaults
 *                $scope.openOverlay = function () {
 *                    raOverlaySvc.open('OverlayCtrl', overlayConfig, 'raMessageOverlayActionDefinitions.html',
 *                     'ra-message-overlay').result.then(
 *                        //success callback from promise returned from the open call
 *                        function (resolved) {
 *                            $scope.actionMessage = resolved;
 *                        },
 *                        //failure callback from promise returned from the open call
 *                        function (rejected) {
 *                            $scope.actionMessage = rejected;
 *                        }
 *                    );
 *                };
 *            }
 *        ]);
 *
 *         //this is the controller for for the overlay itself
 *        mod.controller('OverlayCtrl', [
 *        '$scope', 'raOverlaySvc', 'config', 'RA_MESSAGE_TYPE',
 *            function ($scope, raOverlaySvc, config, RA_MESSAGE_TYPE) {
 *                $scope.content = config;
 *                $scope.title = config.title;
 *                $scope.messageType = RA_MESSAGE_TYPE.INFORMATION;
 *
 *                $scope.actionDefinitions = [
 *                    {
 *                        tooltipText : "OK",
 *                        iconClass: "ra-icon ra-icon-commit",
 *                        actionName: "OK",
 *                        doAction: function () {
 *                            $scope.$close('OK');
 *                        }
 *                    },
 *                    {
 *                        tooltipText : "Cancel",
 *                        iconClass: "ra-icon ra-icon-cancel",
 *                        actionName: "Cancel",
 *                        doAction: function () {
 *                            $scope.$dismiss('CANCEL');
 *                        }
 *                    }
 *                ];
 *            }
 *         ]);
 * </file>
 * </example>
 *
 * The example below shows how to define buttons using *$scope.content.buttons*.
 * This type of definition is used e.g., in *raErrorCollectorSvc/raGeneralErrorOverlay.tpl.html*
 * by the {@link mobile-toolkit-ra.service:raErrorCollectorSvc _raErrorCollectorSvc_} service.
 *
 *
 * <example module="exampleAppThree">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" class="ra-overlay-example">
 *            <div>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="openOverlay()">
 *                    Open
 *                </a>
 *                overlay resolved with: {{actionMessage}}
 *            </div>
 *        </div>
 *    </file>
 *    <file name="raMessageOverlayButtons.html">
 *        <div ra-message message-type="{{messageType}}" content="content" click-action="clickAction"/>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppThree', ['mobile-toolkit-ra']);
 *        //this is the controller for the page hosting the overlay
 *        mod.controller('exampleCtrl',
 *        ['$scope', 'raOverlaySvc',
 *            function ($scope, raOverlaySvc) {
 *                'use strict';
 *                var overlayConfig = {
 *                    title: "State the Potential Problem",
 *                    confirmationDesc: "Description provides the cause and solution to the potential problem."
 *                };
 *
 *                //function to open the overlay using all defaults
 *                $scope.openOverlay = function () {
 *                    raOverlaySvc.open('OverlayCtrl', overlayConfig, 'raMessageOverlayButtons.html',
 *                     'ra-message-overlay').result.then(
 *                        //success callback from promise returned from the open call
 *                        function (resolved) {
 *                            $scope.actionMessage = resolved;
 *                        },
 *                        //failure callback from promise returned from the open call
 *                        function (rejected) {
 *                            $scope.actionMessage = rejected;
 *                        }
 *                    );
 *                };
 *            }
 *        ]);
 *
 *        //this is the controller for for the overlay itself
 *        mod.controller('OverlayCtrl', [
 *        '$scope', 'raOverlaySvc', 'config', 'RA_MESSAGE_TYPE',
 *            function ($scope, raOverlaySvc, config, RA_MESSAGE_TYPE) {
 *                $scope.content = config;
 *                $scope.title = config.title;
 *                $scope.messageType = RA_MESSAGE_TYPE.INFORMATION;
 *                $scope.retCnt = 0;
 *                $scope.content.buttons = [
 *                                    { label: "Close", action: "close" },
 *                                    {label: "Retry", action: "retry" }
 *                                    ];
 *
 *                $scope.clickAction = function (action) {
 *                    switch (action) {
 *                        case "close":
 *                            $scope.$close('CLOSE');
 *                            break;
 *                        case "retry":
 *                            $scope.retCnt ++;
 *                            $scope.content.details = "Retried " + $scope.retCnt;
 *                            break;
 *                        default:
 *                            $scope.$dismiss('CANCEL');
 *                    }
 *                };
 *            }
 *        ]);
 *    </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raMessage", [ "raErrorHandlerSvc", "$templateCache", "RA_MESSAGE_TYPE", function(raErrorHandlerSvc, $templateCache, RA_MESSAGE_TYPE) {
    "use strict";
    return {
        restrict: "AE",
        transclude: true,
        scope: {
            messageType: "@?",
            content: "=",
            actionDefinitions: "=?",
            clickAction: "=?"
        },
        replace: true,
        template: $templateCache.get("raMessage/raMessage.tpl.html"),
        link: function(scope) {
            scope.icon = "ra-icon-error";
            if (scope.messageType === RA_MESSAGE_TYPE.INFORMATION) {
                scope.icon = "ra-icon-information";
            } else if (scope.messageType === RA_MESSAGE_TYPE.WARNING) {
                scope.icon = "ra-icon-warning";
            }
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raMessageButton
 * @scope
 * @module mobile-toolkit-ra
 * @restrict AE
 * @param {string} label The label
 * @param {object} [doAction] Action which will be evaluated and executed,
 * if set, takes the precedence over the action parameter
 * @param {object} [action] Action which should be executed on click event
 *
 *
 * @description
 * The _raMessageButton_ directive is used by the
 *  {@link mobile-toolkit-ra.directive:raMessage _raMessage_} to create message buttons.
 * The message button widget uses internally
 * {@link https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes _flexbox_}.
 * In order to organize groups of buttons the flex container class should be used
 * e.g., predefined **flex-message-button-container**.
 *
 * There are two possible ways of setting the action which should take place on the click event:
 *
 * - using *action* - allows to to invoke or evaluate the expression on the parent scope
 * which will be executed on click event.
 * - using *doAction* - allows to use two-way bound value.
 * With this approach you can use the *actionDefinitions* in a similar way to how it is defined
 * in the {@link mobile-toolkit-ra.directive:raActionBar _raActionBar_} directive
 *
 *
 *
 * @example
 * <example module="example1">
 *  <file name="index.html">
 *      <div ng-controller="theController">
 *          <div class="flex-message-button-container">
 *              <div ra-message-button label="Increase" action="clickAction(label)"></div>
 *              <div ra-message-button label="Decrease" action="clickAction(label)"></div>
 *          </div>
 *          <div>
 *            <p>Result:</p>
 *            <div class="alert alert-info" role="alert">{{clickCnt}}</div>
 *          </div>
 *      </div>
 *  </file>
 *  <file name="script.js">
 *      angular.module('example1', ['mobile-toolkit-ra']);
 *      angular.module('example1')
 *          .controller('theController', ['$scope',
 *              function ($scope) {
 *                  $scope.clickCnt = 0;
 *                  $scope.clickAction = function (action) {
 *                      switch (action) {
 *                          case "Increase":
 *                              $scope.clickCnt ++;
 *                          break;
 *                          case "Decrease":
 *                              $scope.clickCnt --;
 *                          break;
 *                       }
 *              }
 *          }]);
 *  </file>
 * </example>
 *
 * <example module="example2">
 *  <file name="script.js">
 *      angular.module('example2', ['mobile-toolkit-ra']);
 *      angular.module('example2')
 *          .controller('theController', ['$scope',
 *                       function ($scope) {
 *               "use strict";
 *          $scope.clickCnt = 0;
 *
 *
 *          $scope.clickAction = function (action) {
 *             switch (action.label) {
 *                 case "Increase":
 *                     $scope.clickCnt ++;
 *                     break;
 *                 case "Decrease":
 *                     $scope.clickCnt --;
 *                     break;
 *              }
 *          };
 *
 *          $scope.actionDefinitions = [
 *              {
 *                  tooltipText : "Increase",
 *                  doAction: $scope.clickAction
 *              },
 *              {
 *                  tooltipText : "Decrease",
 *                  doAction: $scope.clickAction
 *             }
 *         ];
 *
 *      }]);
 *  </file>
 *  <file name="index.html">
 *      <div ng-controller="theController">
 *          <div class="flex-message-button-container">
 *              <div ra-message-button do-action="btn.doAction" label="{{btn.tooltipText}}"
 *              ng-repeat="btn in actionDefinitions"></div>
 *          </div>
 *          <div>
 *            <p>Result:</p>
 *            <div class="alert alert-info" role="alert">{{clickCnt}}</div>
 *          </div>
 *      </div>
 *  </file>
 * </example>
 *
 * The example below shows how to utilize _raMessage_ using *actionDefinitions*
 * in a similar way to how it is defined in the {@link mobile-toolkit-ra.directive:raActionBar _raActionBar_} directive
 *
 * <example module="example3">
 *    <file name="index.html">
 *        <div ng-controller="theController">
 *          <div class="flex-message-button-container">
 *              <div ra-message-button do-action="btn.doAction" label="{{btn.tooltipText}}"
 *              ng-repeat="btn in actionDefinitions"></div>
 *          </div>
 *          <div>
 *            <p>Result:</p>
 *            <div class="alert alert-info" role="alert">{{clickCnt}}</div>
 *          </div>
 *        </div>
 *    </file>
 *  <file name="script.js">
 *      angular.module('example3', ['mobile-toolkit-ra']);
 *      angular.module('example3')
 *          .controller('theController', ['$scope',
 *                       function ($scope) {
 *               "use strict";
 *          $scope.clickCnt = 0;
 *
 *
 *          $scope.clickAction = function (action) {
 *             switch (action.label) {
 *                 case "Increase":
 *                     $scope.clickCnt ++;
 *                     break;
 *                 case "Decrease":
 *                     $scope.clickCnt --;
 *                     break;
 *              }
 *          };
 *
 *          $scope.actionDefinitions = [
 *              {
 *                  tooltipText : "Increase",
 *                  doAction: $scope.clickAction
 *              },
 *              {
 *                  tooltipText : "Decrease",
 *                  doAction: $scope.clickAction
 *             }
 *         ];
 *
 *      }]);
 *  </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raMessageButton", [ "raErrorHandlerSvc", "$templateCache", function(raErrorHandlerSvc, $templateCache) {
    "use strict";
    return {
        restrict: "AE",
        scope: {
            label: "@",
            doAction: "=?",
            action: "&?"
        },
        replace: true,
        template: $templateCache.get("raMessage/raMessageButton.tpl.html"),
        link: function(scope) {
            if (scope.doAction) {
                scope.action = scope.doAction;
            }
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raMessageSvc
 * @description The raMessageSvc is a component to create modal dialogs of type warning,
 * error or information on top of existing screens. This service wraps
 * the {@link mobile-toolkit-ra.service:raOverlaySvc _raOverlaySvc_} with
 * a predefined template, *raMessage/raMessageOverlay.tpl.html*,
 * as well as a css class, *'ra-message-overlay'*.
 *
 *
 * @example
 * <example module="module1">
 *  <file name="index.html">
 *      <div ng-controller="exampleCtrl" class="ra-overlay-example">
 *          <div>
 *              <a class="btn btn-primary btn-lg"
 *                  role="button" ng-click="openOverlay()">
 *                  Open
 *              </a>
 *              overlay resolved with: {{actionMessage}}
 *          </div>
 *      </div>
 *  </file>
   <file name="script.js">
        angular.module('module1', ['mobile-toolkit-ra'])
         .controller('exampleCtrl', ['$scope', 'raMessageSvc', 'RA_MESSAGE_TYPE',
               function ($scope, raMessageSvc, RA_MESSAGE_TYPE) {
                    'use strict';
                    var buttons = [{label : "Close", action: "close"}];
                    //function to open the overlay using predefined raMessageOverlay template
                    $scope.openOverlay = function () {
                        raMessageSvc.open(
                            {   type: RA_MESSAGE_TYPE.WARNING,
                                title: "State the Potential Problem",
                                details: "Some details describing the potential problem.",
                                confirmationDesc: "Description provides the cause and solution.",
                                buttons: buttons
                            }).result.then(
                            //success callback from promise returned from the open call
                            function (resolved) {
                                $scope.actionMessage = resolved;
                            },
                            //failure callback from promise returned from the open call
                            function (rejected) {
                                $scope.actionMessage = rejected;
                            }
                        );
                    };
               }]);
   </file>
 * </example>
 *
 *
 */
angular.module("mobile-toolkit-ra").factory("raMessageSvc", [ "$templateCache", "raOverlaySvc", function($templateCache, raOverlaySvc) {
    "use strict";
    return {
        /**
             * @ngdoc method
             * @name mobile-toolkit-ra.service:raMessageSvc#open
             * @methodOf mobile-toolkit-ra.service:raMessageSvc
             *
             * @param {object} config An object representing the content of the message.
             * The following properties are supported:
             *
             * - **`type`** - `{string}` - Type of the message: **`error`**, **`warning`**, **`information`**
             * If not set, the error type is assigned.
             * - **`title`** - `{string}` - the title text to display at the top of the dialog.
             * - **`details`** - `{string}` - the text providing detailed information
             * - **`[confirmationDesc]`** - `{string}` - the text providing confirmation description.
             * - **buttons** - `{Array}` -
             *   An array of objects containing definition for the buttons included at the bottom of the overlay.
             *   It should contain the list of object representing buttons consisting of the label and the action
             *   properties
             * <pre>
             * ...
             * // The code below defines the config object.
             * var config = {
             *     type: RA_MESSAGE_TYPE.WARNING,
             *     title: "The title",
             *     details: "The detailed information",
             *     confirmationDesc: "The description",
             *     buttons: [{label : "Close", action: "close"}]
             * }
             * ...
             * </pre>
             *
             * @returns {object} The promise which returns the value of the property action
             * assigned to the button on which action was performed.
             * @description Opens the overlay using predefined raMessageOverlay template.
             */
        open: function(config) {
            return raOverlaySvc.open("raMessageCtrl", config, null, "ra-message-overlay", $templateCache.get("raMessage/raMessageOverlay.tpl.html"));
        }
    };
} ]);

/**
 * @describe The controller to be used by the overlay
 */
angular.module("mobile-toolkit-ra").controller("raMessageCtrl", [ "$scope", "$modalInstance", "config", function($scope, $modalInstance, config) {
    "use strict";
    $scope.content = {
        title: config.title,
        details: config.details,
        confirmationDesc: config.confirmationDesc,
        buttons: config.buttons
    };
    $scope.messageType = config.type;
    $scope.clickAction = function(action) {
        $modalInstance.close(action);
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raNavbar", [ "$window", "$templateCache", "raNavigationSvc", function($window, $templateCache, raNavigationSvc) {
    "use strict";
    return {
        restrict: "AE",
        scope: {
            config: "=?"
        },
        template: $templateCache.get("raNavbar/raNavbar.tpl.html"),
        link: function(scope) {
            var config = scope.config || {}, groupId = config.groupId;
            // Provides the configuration of the large navbar to the raNavigationSvc service
            scope.params = raNavigationSvc.setConfig(config, groupId);
            scope.navigateBack = function() {
                raNavigationSvc.navigateBack(groupId);
            };
            scope.getChevronCss = function() {
                return scope.params && scope.params.navbarChevronDown ? "ra-icon-drop-down-small" : "ra-icon-drop-up-small";
            };
            scope.showSidebar = function() {
                raNavigationSvc.setConfig({
                    isSidebarVisible: true
                }, groupId);
            };
            scope.toggleChevron = function() {
                raNavigationSvc.setNavbarChevronDownUp(!scope.params.navbarChevronDown, groupId);
            };
            scope.$on("$destroy", function() {
                scope.stateObj.unregister();
            });
            scope.stateObj = raNavigationSvc.register(config);
            scope.params = scope.stateObj.stateParams;
            scope.stateObj.promise.then(null, null, function(currentParams) {
                scope.navbarHamBadgeText = scope.params.navbarHamBadgeText;
            });
        }
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raNavbarLarge", [ "$window", "$templateCache", "raNavigationSvc", function($window, $templateCache, raNavigationSvc) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            config: "=?"
        },
        controller: [ "$scope", function($scope) {
            $scope.dropContentApi = function(api) {
                $scope.dropApi = api;
            };
        } ],
        template: $templateCache.get("raNavbarLarge/raNavbarLarge.tpl.html"),
        link: function(scope) {
            var config;
            config = scope.config = scope.config || {};
            scope.config.isNavigationItemsVisible = scope.config.isNavigationItemsVisible !== false;
            scope.hasBrandingLogo = function() {
                return !!(scope.params.brandingLogoClasses || scope.params.brandingLogoUrl) && (!scope.params.generalItems || scope.params.generalItems.length === 0) && (!scope.params.username || scope.params.username === "");
            };
            scope.hasHomeIcon = function() {
                return !!(scope.params.homeIcon && scope.params.homeIcon.iconClasses && (scope.params.homeIcon.url || scope.params.homeIcon.onItemClick) && scope.params.isNavbarHomeIconVisible !== false);
            };
            scope.navigateBack = function() {
                raNavigationSvc.navigateBack(config.groupId);
            };
            scope.onItemClick = raNavigationSvc.onItemClick;
            scope.onBrandingLogoClick = function() {
                raNavigationSvc.onBrandingLogoClick(config.groupId);
            };
            // Provides the configuration of the large navbar to the raNavigationSvc service
            scope.params = raNavigationSvc.setConfig(config);
        }
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raNavbarResponsive", [ "$templateCache", function($templateCache) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            config: "=?"
        },
        controller: [ "$scope", function($scope) {
            // Sets the configuration of navigation components.
            // It's required because they have to be assigned to the proper group.
            $scope.navigationConfig = $scope.config;
        } ],
        template: $templateCache.get("raNavbarResponsive/raNavbarResponsive.tpl.html"),
        link: function(scope) {
            var config = scope.config || {};
            // Set the CSS classes in raNavbar and raNavbarLarge, if not provided use the default rules
            scope.navbarClass = angular.isString(config.navbarClass) ? config.navbarClass : "ra-navbar-narrow";
            scope.navbarLargeClass = angular.isString(config.navbarLargeClass) ? config.navbarLargeClass : "ra-navbar-wide";
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").factory("raNavigationSvc", [ "$q", "$window", "$injector", "$timeout", "RA_NAV_GROUP", function($q, $window, $injector, $timeout, RA_NAV_GROUP) {
    "use strict";
    var states = {}, currentComponentId = 0, defaultCommonConfig = {
        username: "",
        title: "",
        navigationItems: [],
        generalItems: [],
        breadcrumbItems: [],
        brandingLogoClasses: "",
        brandingLogoUrl: "",
        horizontalBreadcrumbShowTitle: true,
        isNavbarBackButtonVisible: true,
        isNavbarHamButtonVisible: false,
        isNavbarChevronVisible: false,
        navbarChevronDown: true,
        onUsernameClick: undefined,
        onLogoutClick: undefined,
        onBrandingLogoClick: undefined,
        onBrandingLogoUrl: "",
        hasBreadcrumbReverseOrder: false,
        horizontalBreadcrumbHideFirst: false,
        homeIcon: undefined,
        onNavbarBackButtonClick: undefined,
        showSidebarUserIcon: true,
        isNavbarHomeIconVisible: true,
        titleIcon: "",
        titleIconMsg: "",
        navbarHamBadgeText: ""
    };
    /**
         * @param {string=} [groupId] The id of the group of widgets. If not provided, it will be assigned to a default.
         * @param {boolean=} [createIfNotExists] Creates the parameters object if it doesn't exist. Default is true.
         * @returns {Object} Set of parameters + the registered components in the group.
         * @description
         * Returns state object of group if such exists, or creates a new state object,
         * and returns it if object doesn't exist and `createIfNotExists` parameter is `true`.
         */
    function getState(groupId, createIfNotExists) {
        groupId = groupId || RA_NAV_GROUP.DEFAULT_GROUP_ID;
        createIfNotExists = createIfNotExists !== undefined ? createIfNotExists : true;
        if (!states[groupId] && createIfNotExists) {
            states[groupId] = {
                params: angular.copy(defaultCommonConfig),
                notifyParams: {
                    isSidebarVisible: false,
                    isBreadcrumbVisible: false,
                    hasBreadcrumbChanged: false,
                    hasNavbarHamBadgeTextChanged: false
                },
                groupId: groupId,
                components: {}
            };
        }
        return states[groupId];
    }
    /**
         * @param {Object} state The state object of group.
         * @description
         * Propagates the notifications to the registered components
         */
    function propagateNotifications(state) {
        var component;
        if (state.components && Object.keys(state.components).length > 0) {
            for (component in state.components) {
                if (state.components.hasOwnProperty(component)) {
                    state.components[component].notify(angular.copy(state.notifyParams));
                }
            }
        }
    }
    /* jshint -W101 */
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#register
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {Object=} [config] The object with initial parameters for the navigation components.
         * @returns {Object} The object includes the group parameters, the promise used for communication
         * with the component, and the function which should be used to unregister the component
         * from the group.
         *
         * | Property       | Type              | Description
         * |----------------|-------------------|--------------
         * | stateParams    | {@type Object}    | Initial value of the state parameters: <ul><li>isSidebarVisible</li><li>isBreadcrumbVisible</li><li>hasBreadcrumbChanged</li></ul>
         * | promise        | {@type promise}   | The promise used for communication with the component. It resolves with the current state parameters listed above.
         * | unregister     | {@type function}  | The function which should be used to unregister the component from the group.
         *
         * @description
         * Registers the navigation components like **`sidebar`**, **`navbar`** or **`breadcrumb`** in the service.
         *
         * <div class="alert alert-danger" role="alert">
         *     **Warning:** Please pay attention that the component should be registered only once and always has to be
         *     unregistered on `scope.$destroy`. Otherwise, you can get memory leaks due to not resolving
         *     the promises from the registrations. If you do not need to get a notification of the changed
         *     parameters, use _setConfig_ method instead.
         * </div>
         */
    /* jshint +W101 */
    function register(config) {
        var deffer = $q.defer(), componentId = currentComponentId++, groupId = config ? config.groupId : undefined, state = getState(groupId);
        setConfig(config);
        state.components[componentId] = deffer;
        // propagate the notifications to registered components
        // done in the next cycle to allow currently registered item to get promise first
        $timeout(function() {
            deffer.notify(state.notifyParams);
        }, 0);
        return {
            stateParams: state.params,
            promise: deffer.promise,
            unregister: function() {
                if (state.components[componentId]) {
                    //closes notify channel
                    deffer.resolve();
                    delete state.components[componentId];
                }
            }
        };
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#removeGroup
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {string=} [groupId] The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @description Removes the object with the group's state and resolves all promises.
         */
    function removeGroup(groupId) {
        var component, componentList;
        groupId = groupId || RA_NAV_GROUP.DEFAULT_GROUP_ID;
        if (states[groupId]) {
            componentList = states[groupId].components;
            if (componentList && Object.keys(componentList).length > 0) {
                for (component in componentList) {
                    if (componentList.hasOwnProperty(component)) {
                        componentList[component].resolve();
                    }
                }
            }
            delete states[groupId];
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#getConfig
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {string=} [groupId] The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @returns {Object} The parameters of a group or nothing if a group does not exist.
         * @description Gets the group's parameters using the specified group ID.
         */
    function getConfig(groupId) {
        var state = getState(groupId, false);
        return state && state.params;
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#setConfig
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {Object} config The object with new parameters which will be used to create or update
         * the group's parameters.
         * @param {string=} [groupId] The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @returns {Object} The parameters of a group.
         * @description Updates or creates the group's parameters using the specified group ID.
         */
    function setConfig(config, groupId) {
        var state, key, shouldUpdateHorizontalBreadcrumb, shouldUpdateNavbar, shouldUpdateNavbarHamBadgeText, groupId = groupId || config && config.groupId;
        state = getState(groupId);
        shouldUpdateNavbarHamBadgeText = config.hasOwnProperty("navbarHamBadgeText");
        if (config) {
            shouldUpdateHorizontalBreadcrumb = checkHorizontalBreadcrumbParams(state, config);
            for (key in defaultCommonConfig) {
                if (config.hasOwnProperty(key)) {
                    state.params[key] = config[key];
                }
            }
            if (!config.hasOwnProperty("isNavbarChevronVisible")) {
                state.params.isNavbarChevronVisible = angular.isArray(state.params.breadcrumbItems) && state.params.breadcrumbItems.length > 0;
            }
        }
        // set the default values when they are undefined
        state.params.isNavbarHomeIconVisible = state.params.isNavbarHomeIconVisible !== false;
        state.params.isNavbarBackButtonVisible = state.params.isNavbarBackButtonVisible !== false;
        state.params.isNavbarHamButtonVisible = !!state.params.isNavbarHamButtonVisible;
        //set params with notify
        shouldUpdateNavbar = setSidebarBreadcrumbVisibility(state, config);
        if (shouldUpdateHorizontalBreadcrumb || shouldUpdateNavbar || shouldUpdateNavbarHamBadgeText) {
            propagateNotifications(state);
        }
        return state.params;
    }
    /**
         * @param {object} state The object of the group to update.
         * @param {object} config config with options for the group.
         * @returns {Boolean} Return true if state object was modified and notify should be called.
         * @description
         * Toggles sidebar's and breadcrumb's visibility if they exist within the component group.
         * Setting `sidebar`'s visibility to `true` automatically hides the `breadcrumb`.
         */
    function setSidebarBreadcrumbVisibility(state, config) {
        var sidebarVisibilityKey = "isSidebarVisible", breadcrumbVisibilityKey = "isBreadcrumbVisible", isVisible;
        if (config && config.hasOwnProperty(sidebarVisibilityKey)) {
            isVisible = config[sidebarVisibilityKey];
            if (state.notifyParams[sidebarVisibilityKey] !== isVisible) {
                state.notifyParams[sidebarVisibilityKey] = isVisible;
                if (isVisible) {
                    // hide possible breadcrumb
                    state.notifyParams[breadcrumbVisibilityKey] = false;
                    state.params.navbarChevronDown = true;
                }
                return true;
            }
        }
        if (config && config.hasOwnProperty(breadcrumbVisibilityKey)) {
            isVisible = config[breadcrumbVisibilityKey];
            if (state.notifyParams[breadcrumbVisibilityKey] !== isVisible) {
                state.notifyParams[breadcrumbVisibilityKey] = isVisible;
                state.params.navbarChevronDown = !isVisible;
                if (isVisible) {
                    // hide possible sidebar
                    state.notifyParams[sidebarVisibilityKey] = false;
                }
                return true;
            }
        }
        return false;
    }
    /**
         * @param {object} state The object of the group to update.
         * @param {object} config config with options for the group.
         * @returns {Boolean} Return true if state object was modified and notify should be called.
         * @description
         * Determines if the horizontal breadcrumb should be repainted, by checking the config parameters
         */
    function checkHorizontalBreadcrumbParams(state, config) {
        if (config.hasOwnProperty("breadcrumbItems")) {
            if (!config.hasOwnProperty("horizontalBreadcrumbShowTitle")) {
                state.params.horizontalBreadcrumbShowTitle = true;
            }
            // to avoid costly array comparisons we can assume, that if the user passes this parameter to the
            // setConfig function, the horizontal breadcrumb should be updated
            state.notifyParams.hasBreadcrumbChanged = true;
            return true;
        }
        if (config.hasOwnProperty("title") || config.hasOwnProperty("horizontalBreadcrumbShowTitle") || config.hasOwnProperty("horizontalBreadcrumbHideFirst")) {
            state.notifyParams.hasBreadcrumbChanged = true;
            return true;
        }
        if (config.hasOwnProperty("titleIcon") || config.hasOwnProperty("titleIconMsg")) {
            state.notifyParams.hasBreadcrumbChanged = true;
            return true;
        }
        state.notifyParams.hasBreadcrumbChanged = false;
        return false;
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#setActiveItem
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {string} itemName The name of the item.
         * @param {string=} [groupId] The ID of the group of widgets. If not provided, it will be assigned
         * to the default **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @description
         * Sets the item property **`item.isSelected`** to `true` for the navigation and general items
         * based on the provided item name and the group Id.
         * If no parameter is provided, no items in the group are selected.
         */
    function setActiveItem(itemName, groupId) {
        var i, j, item, state = getState(groupId, false);
        for (i = 0; i < state.params.navigationItems.length; i++) {
            if (state.params.navigationItems[i]) {
                for (j = 0; j < state.params.navigationItems[i].length; j++) {
                    item = state.params.navigationItems[i][j];
                    if (item) {
                        item.isSelected = item.name === itemName;
                    }
                }
            }
        }
        for (i = 0; i < state.params.generalItems.length; i++) {
            item = state.params.generalItems[i];
            if (item) {
                item.isSelected = item.name === itemName;
            }
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#setNavbarChevronDownUp
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {boolean} isNavbarChevronDown Sets the chevron's arrow down if true, up if false.
         * @param {string} groupId The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @description
         * Sets the state of the chevron and the state of {@link mobile-toolkit-ra.directive:raBreadcrumb raBreadcrumb},
         * if **`raBreadcrumb`** exists in the group.
         */
    function setNavbarChevronDownUp(isNavbarChevronDown, groupId) {
        var state = getState(groupId, false);
        if (state) {
            if (isNavbarChevronDown !== state.params.navbarChevronDown) {
                if (state.params.isNavbarChevronVisible) {
                    setConfig({
                        isBreadcrumbVisible: !isNavbarChevronDown,
                        navbarChevronDown: isNavbarChevronDown,
                        isNavbarChevronVisible: state.params.isNavbarChevronVisible
                    }, groupId);
                }
            }
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#navigateBack
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {string} groupId The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @description
         * Invoked when the back button is clicked. Calls the callback function passed in `onNavbarBackButtonClick`.
         * If this function is not provided, **`window.history.back()`** is called instead.
         */
    function navigateBack(groupId) {
        var state = getState(groupId, false);
        if (state) {
            setNavbarChevronDownUp(true, groupId);
            if (state.params.onNavbarBackButtonClick) {
                state.params.onNavbarBackButtonClick();
            } else {
                $window.history.back();
            }
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#onItemClick
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {object} item An item which has been clicked and should include the `onItemClick`
         * function definition or `url` property.
         * @param {object} event An event instance passed into the function executed upon ng-click.
         * @description
         * Invoked when an item is clicked. Calls the callback function passed in `item.onItemClick`.
         * If this function is not provided, **`$window.location.href = item.url`**
         * is called instead.
         */
    function onItemClick(item, event) {
        if (item) {
            if (item.onItemClick) {
                item.onItemClick(item, event);
            } else if (item.url) {
                $window.location.href = item.url;
            }
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raNavigationSvc#onBrandingLogoClick
         * @methodOf mobile-toolkit-ra.service:raNavigationSvc
         * @param {string} groupId The ID of a group of widgets. If not provided, it will be assigned to the default
         * **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group.
         * @description
         * Invoked when the branding logo is clicked. Calls the callback function passed in `onBrandingLogoClick`.
         * If this function is not provided, **`$window.location.href = state.params.onBrandingLogoUrl`**
         * is called instead.
         */
    function onBrandingLogoClick(groupId) {
        var state = getState(groupId, false);
        if (state) {
            if (state.params.onBrandingLogoClick) {
                state.params.onBrandingLogoClick();
            } else if (state.params.onBrandingLogoUrl) {
                $window.location.href = state.params.onBrandingLogoUrl;
            }
        }
    }
    return {
        register: register,
        getConfig: getConfig,
        setConfig: setConfig,
        removeGroup: removeGroup,
        setActiveItem: setActiveItem,
        setNavbarChevronDownUp: setNavbarChevronDownUp,
        navigateBack: navigateBack,
        onItemClick: onItemClick,
        onBrandingLogoClick: onBrandingLogoClick
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").directive("raOnTapDownAddClass", [ function() {
    "use strict";
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var theClass = attrs.raOnTapDownAddClass;
            element.on("touchstart mousedown", function() {
                element.addClass(theClass);
            });
            element.on("touchend mouseup mouseout", function() {
                element.removeClass(theClass);
            });
            element.on("$destroy", function() {
                element.off("touchstart mousedown");
                element.off("touchend mouseup mouseout");
            });
        }
    };
} ]);

/* global angular */
/*jshint bitwise: false*/
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raOpcQualitySvc
 * @description
 * The raOpcQualitySvc is a singleton service which provides a set of methods
 * for evaluating OPC DA quality, OPC limit status or OPC HDA quality by passed argument.
 *
 * @example
 * <example module="exampleOne">
 * <file name="script.js">
 *  angular.module('exampleOne', ['mobile-toolkit-ra'])
 *       .controller('exampleOneCtrl', ['$scope', 'raOpcQualitySvc',
 *           function ($scope, raOpcQualitySvc) {
 *               "use strict";
 *               $scope.generated = false;
 *
 *               $scope.getQuality = function () {
 *                  if (angular.isNumber($scope.value)) {
 *                      var qualityObject = raOpcQualitySvc.asObject($scope.value);
 *                      if (qualityObject) {
 *                          $scope.overall = qualityObject.overall;
 *                          $scope.da = qualityObject.da;
 *                          $scope.hda = qualityObject.hda;
 *                          $scope.limit = qualityObject.limit;
 *                          $scope.generated = true;
 *                      }
 *                      $scope.qualityDescription = raOpcQualitySvc.asString($scope.value);
 *                  }
 *               };
 *       }]);
 * </file>
 * <file name="index.html">
 *   <div class="container-fluid" ng-controller="exampleOneCtrl">
 *      <div class="row-fluid">
 *         <div class="span12">
 *            <h3>Provide quality number e.g. 0, 64, 192, 218 or 16777284 for checking OPC Quality fields</h3>
 *            <form class="form-inline" role="form" name="form">
 *               <div class="form-group" ng-class="{'has-error': form.value.$invalid}">
 *                  <label class="control-label" for="valueInput">Input a number: </label>
 *                  <input name="value" ng-model="value" type="number" step="any"
 *                         class="form-control" id="valueInput">
 *                  <button ng-click="getQuality()">Check</button>
 *                  <div ng-show="generated">
 *                    <h3>Result: </h3>
 *                    <p><span>{{qualityDescription}}</span></p>
 *                    <ul>
 *                       <li><span>OPC Quality: {{overall}}</span></li>
 *                       <li><span>OPC Da substatus: {{da}}</span></li>
 *                       <li><span>OPC limit status: {{limit}}</span></li>
 *                       <li><span>OPC Hda: {{hda}}</span></li>
 *                    </ul>
 *                  </div>
 *               </div>
 *            </form>
 *         </div>
 *      </div>
 *   </div>
 * </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").factory("raOpcQualitySvc", [ "$translate", "raTranslateHandlerSvc", function($translate, raTranslateHandlerSvc) {
    "use strict";
    var overallMessages = {
        0: "RA_OPC_QUALITY.OVERALL_BAD",
        64: "RA_OPC_QUALITY.OVERALL_UNCERTAIN",
        128: "RA_OPC_QUALITY.OVERALL_NOT_DEFINED",
        192: "RA_OPC_QUALITY.OVERALL_GOOD"
    };
    var detailsMessages = {
        // Limit status
        0: "RA_OPC_QUALITY.DETAILS_NOT_LIMITED",
        1: "RA_OPC_QUALITY.DETAILS_LOW_LIMITED",
        2: "RA_OPC_QUALITY.DETAILS_HIGH_LIMITED",
        3: "RA_OPC_QUALITY.DETAILS_CONSTANT",
        // Bad
        4: "RA_OPC_QUALITY.DETAILS_CONFIG_ERROR",
        8: "RA_OPC_QUALITY.DETAILS_NOT_CONNECTED",
        12: "RA_OPC_QUALITY.DETAILS_DEVICE_FAILURE",
        16: "RA_OPC_QUALITY.DETAILS_SENSOR_FAILURE",
        20: "RA_OPC_QUALITY.DETAILS_LAST_KNOWN",
        24: "RA_OPC_QUALITY.DETAILS_COMM_FAILURE",
        28: "RA_OPC_QUALITY.DETAILS_OUT_OF_SERVICE",
        32: "RA_OPC_QUALITY.DETAILS_INITIALIZING",
        // Uncertain
        68: "RA_OPC_QUALITY.DETAILS_LAST_USABLE",
        80: "RA_OPC_QUALITY.DETAILS_SENSOR_NOT_ACCURATE",
        84: "RA_OPC_QUALITY.DETAILS_ENGINEERING_UNITS_EXCEEDED",
        88: "RA_OPC_QUALITY.DETAILS_SUB-NORMAL",
        // Good
        216: "RA_OPC_QUALITY.DETAILS_LOCAL_OVERRIDE",
        // Hda flags
        65536: "RA_OPC_QUALITY.DETAILS_EXTRA_DATA",
        131072: "RA_OPC_QUALITY.DETAILS_INTERPOLATED",
        262144: "RA_OPC_QUALITY.DETAILS_RAW",
        524288: "RA_OPC_QUALITY.DETAILS_CALCULATED",
        1048576: "RA_OPC_QUALITY.DETAILS_NO_BOUND",
        2097152: "RA_OPC_QUALITY.DETAILS_NO_DATA",
        4194304: "RA_OPC_QUALITY.DETAILS_DATA_LOST",
        8388608: "RA_OPC_QUALITY.DETAILS_CONVERSION",
        16777216: "RA_OPC_QUALITY.DETAILS_PARTIAL"
    };
    var updateTranslation = function(messages) {
        // Update the messages using $translate service
        angular.forEach(messages, function(key, value) {
            $translate(key).then(function(message) {
                messages[value] = message;
            });
        });
    };
    updateTranslation(overallMessages);
    updateTranslation(detailsMessages);
    raTranslateHandlerSvc.onTranslate(function() {
        updateTranslation(overallMessages);
        updateTranslation(detailsMessages);
    });
    function asObject(qualityAsInt) {
        var mask, quality = {};
        mask = qualityAsInt & service.opcDaQualityMasterMask;
        quality.overall = overallMessages[mask];
        mask = qualityAsInt & service.opcDaQualityMask;
        if (mask && detailsMessages[mask]) {
            quality.da = detailsMessages[mask];
        }
        mask = qualityAsInt & service.opcDaQualityFieldMasks.limitField;
        if (mask && detailsMessages[mask]) {
            quality.limit = detailsMessages[mask];
        }
        mask = qualityAsInt & service.opcHdaQualityMask;
        if (mask && detailsMessages[mask]) {
            quality.hda = detailsMessages[mask];
        }
        return quality;
    }
    function asString(qualityAsInt) {
        var hasDaQuality = false, qObj = asObject(qualityAsInt), qString;
        qString = qObj.overall;
        if (qObj.da) {
            qString = qString + ": " + qObj.da;
            hasDaQuality = true;
        }
        if (qObj.limit) {
            qString = qString + (hasDaQuality ? ", " : ": ") + qObj.limit;
            hasDaQuality = true;
        }
        if (qObj.hda) {
            qString = qString + (hasDaQuality ? ", " : ": ") + qObj.hda;
        }
        return qString;
    }
    var service = {
        /**
                 * @ngdoc property
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#<quality>Mask
                 * @propertyOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @type {Object}
                 * @description
                 * A list of masks for appropriate quality:
                 *
                 * - **`opcDaQualityMask`**
                 * - **`opcDaQualityMasterMask`**
                 * - **`opcHdaQualityMask`**
                 * - **`opcDaQualityFieldMasks`** (includes masks for OPC DA quality fields)
                 *  * **`limitField`**
                 *  * **`subStatusField`**
                 *  * **`quality`**
                 */
        opcDaQualityMask: 65532,
        opcDaQualityMasterMask: 192,
        opcHdaQualityMask: 4294901760,
        opcDaQualityFieldMasks: {
            limitField: 3,
            subStatusField: 60,
            quality: 192
        },
        /**
                 * @ngdoc property
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#opcDaQualityMaster
                 * @propertyOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @type {Object}
                 * @description
                 * A list of OPC DA quality values:
                 *
                 * - **`bad`**
                 * - **`uncertain`**
                 * - **`notDefined`**
                 * - **`good`**
                 */
        opcDaQualityMaster: {
            bad: 0,
            uncertain: 64,
            notDefined: 128,
            good: 192
        },
        /**
                 * @ngdoc property
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#opcDaQualityStatus
                 * @propertyOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @type {Object}
                 * @description
                 * A list of substatuses for OPC DA quality:
                 *
                 * - **`bad`**
                 * - **`configError`**
                 * - **`notConnected`**
                 * - **`deviceFailure`**
                 * - **`sensorFailure`**
                 * - **`lastKnown`**
                 * - **`commFailure`**
                 * - **`outOfService`**
                 * - **`initializing`**
                 * - **`uncertain`**
                 * - **`lastUsable`**
                 * - **`sensorNotAccurate`**
                 * - **`engUnitsExceeded`**
                 * - **`subNormal`**
                 * - **`good`**
                 * - **`localOverride`**
                 */
        opcDaQualityStatus: {
            bad: 0,
            configError: 4,
            notConnected: 8,
            deviceFailure: 12,
            sensorFailure: 16,
            lastKnown: 20,
            commFailure: 24,
            outOfService: 28,
            initializing: 32,
            uncertain: 64,
            lastUsable: 68,
            sensorNotAccurate: 80,
            engUnitsExceeded: 84,
            subNormal: 88,
            good: 192,
            localOverride: 216
        },
        /**
                 * @ngdoc property
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#opcDaQualityLimit
                 * @propertyOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @type {Object}
                 * @description
                 * A list of limit statues for OPC DA quality:
                 *
                 * - **`limitOk`**
                 * - **`limitLow`**
                 * - **`limitHigh`**
                 * - **`constant`**
                 */
        opcDaQualityLimit: {
            limitOk: 0,
            limitLow: 1,
            limitHigh: 2,
            constant: 3
        },
        /**
                 * @ngdoc property
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#opcHdaQuality
                 * @propertyOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @type {Object}
                 * @description
                 * A list of OPC HDA quality values:
                 *
                 * - **`extraData`**
                 * - **`interpolated`**
                 * - **`raw`**
                 * - **`calculated`**
                 * - **`noBound`**
                 * - **`noData`**
                 * - **`dataLost`**
                 * - **`conversion`**
                 * - **`partial`**
                 */
        opcHdaQuality: {
            /// More than one piece of data that may be hidden exists at same timestamp.
            /// Associated DA Quality: Good, Bad, Uncertain
            extraData: 65536,
            /// Interpolated data value.
            /// Associated DA Quality: Good, Bad, Uncertain
            interpolated: 131072,
            /// Raw data value.
            /// Associated DA Quality: Good, Bad, Uncertain
            raw: 262144,
            /// Calculated data value.
            /// Associated DA Quality: Good, Bad, Uncertain
            calculated: 524288,
            /// No data found to provide upper or lower bound value.
            /// Associated DA Quality: Bad
            noBound: 1048576,
            /// No data collected. Archiving not active (for item or all items).
            /// Associated DA Quality: Bad
            noData: 2097152,
            /// Collection started / stopped / lost.
            /// Associated DA Quality: Bad
            dataLost: 4194304,
            /// Scaling / conversion error.
            /// Associated DA Quality: Bad, Uncertain
            conversion: 8388608,
            /// Aggregate Value is for an incomplete interval.
            /// Associated DA Quality: Good, Bad, Uncertain
            partial: 16777216
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#asString
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {String} A concatenated (optionally) string which is a written
                 *          representation of the quality value.
                 * @description Returns a concatenated (optionally) string which is a written
                 *          representation of the quality value.
                 */
        asString: asString,
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#asObject
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {Object} A concatenated (optionally) string which is a written
                 * representation of the quality value.
                 * Can contain the following: overall quality value, OPC DA quality (optional),
                 * OPC limit status (optional) and OPC HDA quality (optional).
                 * @description Returns a concatenated (optionally) string
                 * which is a written representation of the quality value.
                 *
                 * Can contain the following:
                 *
                 * - overall - good, bad, uncertain or not defined quality value
                 * - da - OPC DA quality (optional)
                 * - limit - OPC limit status (optional)
                 * - hda - OPC HDA quality (optional)
                 */
        asObject: asObject,
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#getOpcDaQuality
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {Number} Returns the OPC DA quality portion.
                 * @description Returns the OPC DA quality portion (lower 16 bits).
                 */
        getOpcDaQuality: function(qualityAsInt) {
            return qualityAsInt & this.opcDaQualityMask;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#getOpcLimitStatus
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {Number} Returns the OPC limit status portion.
                 * @description Returns the OPC limit status portion.
                 * (not limited, low limited, high limited or constant).
                 */
        getOpcLimitStatus: function(qualityAsInt) {
            return qualityAsInt & this.opcDaQualityFieldMasks.limitField;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#getSimpleQuality
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {Number} The OPC DA Master quality portion (good, uncertain, bad, or undefined).
                 * @description Returns the OPC DA Master quality portion
                 * (good, uncertain, bad, or undefined).
                 */
        getSimpleQuality: function(qualityAsInt) {
            return qualityAsInt & this.opcDaQualityMasterMask;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#getOpcHdaQuality
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {Number} The OPC HDA quality portion.
                 * @description Returns the OPC HDA quality portion (upper 16 bits).
                 */
        getOpcHdaQuality: function(qualityAsInt) {
            return qualityAsInt & this.opcHdaQualityMask;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isGood
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument is of good quality.
                 * @description A method for checking if the passed argument is of good quality.
                 */
        isGood: function(qualityAsInt) {
            return (qualityAsInt & this.opcDaQualityFieldMasks.quality) === this.opcDaQualityMaster.good;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isUncertain
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument is of uncertain quality.
                 * @description A method for checking if the passed argument is of uncertain quality.
                 */
        isUncertain: function(qualityAsInt) {
            return (qualityAsInt & this.opcDaQualityFieldMasks.quality) === this.opcDaQualityMaster.uncertain;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isBad
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument is of bad quality.
                 * @description A method for checking if the passed argument is of bad quality.
                 */
        isBad: function(qualityAsInt) {
            return (qualityAsInt & this.opcDaQualityFieldMasks.quality) === this.opcDaQualityMaster.bad;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isDa<substatus>
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument
                 * has OPC DA quality with appropriate substatus.
                 *
                 * @description A set of methods for checking if the passed argument
                 * has OPC DA quality (good, bad, uncertain) with appropriate substatus
                 * e.g. "Configuration Error" or "Last Known Value".
                 *
                 * The list of available methods:
                 *
                 * - **`isDaConfigError`**
                 * - **`isDaNotConnected`**
                 * - **`isDaDeviceFailure`**
                 * - **`isDaSensorFailure`**
                 * - **`isDaLastKnown`**
                 * - **`isDaCommFailure`**
                 * - **`isDaOutOfService`**
                 * - **`isDaInitializing`**
                 * - **`isDaLastUsable`**
                 * - **`isDaSensorNotAccurate`**
                 * - **`isDaEngUnitsExceeded`**
                 * - **`isDaSubNormal`**
                 * - **`isDaLocalOverride`**
                 */
        isDaConfigError: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.configError) === this.opcDaQualityStatus.configError;
        },
        isDaNotConnected: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.notConnected) === this.opcDaQualityStatus.notConnected;
        },
        isDaDeviceFailure: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.deviceFailure) === this.opcDaQualityStatus.deviceFailure;
        },
        isDaSensorFailure: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.sensorFailure) === this.opcDaQualityStatus.sensorFailure;
        },
        isDaLastKnown: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.lastKnown) === this.opcDaQualityStatus.lastKnown;
        },
        isDaCommFailure: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.commFailure) === this.opcDaQualityStatus.commFailure;
        },
        isDaOutOfService: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.outOfService) === this.opcDaQualityStatus.outOfService;
        },
        isDaInitializing: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.initializing) === this.opcDaQualityStatus.initializing;
        },
        isDaLastUsable: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.lastUsable) === this.opcDaQualityStatus.lastUsable;
        },
        isDaSensorNotAccurate: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.sensorNotAccurate) === this.opcDaQualityStatus.sensorNotAccurate;
        },
        isDaEngUnitsExceeded: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.engUnitsExceeded) === this.opcDaQualityStatus.engUnitsExceeded;
        },
        isDaSubNormal: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.subNormal) === this.opcDaQualityStatus.subNormal;
        },
        isDaLocalOverride: function(qualityAsInt) {
            return (this.getOpcDaQuality(qualityAsInt) & this.opcDaQualityStatus.localOverride) === this.opcDaQualityStatus.localOverride;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isLimit<status>
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument has OPC limit status.
                 *
                 * @description A set of methods for checking if the passed argument
                 * has OPC limit status e.g. "Low limited" and "High limited".
                 *
                 * The list of available methods:
                 *
                 * - **`isLimitOk`**
                 * - **`isLimitLow`**
                 * - **`isLimitHigh`**
                 * - **`isLimitConstant`**
                 */
        isLimitOk: function(qualityAsInt) {
            return (this.getOpcLimitStatus(qualityAsInt) & this.opcDaQualityLimit.limitOk) === this.opcDaQualityLimit.limitOk;
        },
        isLimitLow: function(qualityAsInt) {
            return (this.getOpcLimitStatus(qualityAsInt) & this.opcDaQualityLimit.limitLow) === this.opcDaQualityLimit.limitLow;
        },
        isLimitHigh: function(qualityAsInt) {
            return (this.getOpcLimitStatus(qualityAsInt) & this.opcDaQualityLimit.limitHigh) === this.opcDaQualityLimit.limitHigh;
        },
        isLimitConstant: function(qualityAsInt) {
            return (this.getOpcLimitStatus(qualityAsInt) & this.opcDaQualityLimit.constant) === this.opcDaQualityLimit.constant;
        },
        /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raOpcQualitySvc#isHda<flag>
                 * @methodOf mobile-toolkit-ra.service:raOpcQualitySvc
                 * @param {Number} qualityAsInt The number representing the quality value.
                 * @returns {boolean} Returns true if the passed argument has
                 * appropriate OPC HDA quality with associated OPC DA quality.
                 *
                 * @description A set of methods for checking if the passed argument has
                 * appropriate OPC HDA quality e.g. "Extra data" or "No data"
                 * with associated OPC DA quality (good, bad, uncertain).
                 *
                 * The list of available methods:
                 *
                 * - **`isHdaExtraData`**
                 * - **`isHdaInterpolated`**
                 * - **`isHdaRaw`**
                 * - **`isHdaCalculated`**
                 * - **`isHdaNoBound`**
                 * - **`isHdaNoData`**
                 * - **`isHdaDataLost`**
                 * - **`isHdaConversion`**
                 * - **`isHdaPartial`**
                 */
        /*More than one piece of data that may be hidden exists at same timestamp.
                 * Associated DA Quality: Good, Bad, Uncertain */
        isHdaExtraData: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.extraData) === this.opcHdaQuality.extraData;
        },
        /* Interpolated data value.
                 * Associated DA Quality: Good, Bad, Uncertain */
        isHdaInterpolated: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.interpolated) === this.opcHdaQuality.interpolated;
        },
        /* Raw data value.
                 * Associated DA Quality: Good, Bad, Uncertain */
        isHdaRaw: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.raw) === this.opcHdaQuality.raw;
        },
        /* Calculated data value.
                 * Associated DA Quality: Good, Bad, Uncertain */
        isHdaCalculated: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.calculated) === this.opcHdaQuality.calculated;
        },
        /* No data found to provide upper or lower bound value.
                 * Associated DA Quality: Bad */
        isHdaNoBound: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.noBound) === this.opcHdaQuality.noBound;
        },
        /* No data collected. Archiving not active (for item or all items).
                 * Associated DA Quality: Bad */
        isHdaNoData: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.noData) === this.opcHdaQuality.noData;
        },
        /* Collection started / stopped / lost.
                 * Associated DA Quality: Bad */
        isHdaDataLost: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.dataLost) === this.opcHdaQuality.dataLost;
        },
        /* Scaling / conversion error.
                 * Associated DA Quality: Bad, Uncertain */
        isHdaConversion: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.conversion) === this.opcHdaQuality.conversion;
        },
        /* Aggregate Value is for an incomplete interval.
                 * Associated DA Quality: Good, Bad, Uncertain */
        isHdaPartial: function(qualityAsInt) {
            return (this.getOpcHdaQuality(qualityAsInt) & this.opcHdaQuality.partial) === this.opcHdaQuality.partial;
        }
    };
    return service;
} ]);

/* global angular */
//disable jshint line length for these api comments, some are required to be long for formatting
//reenabled after these comments.
/* jshint -W101 */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raOverlaySvc
 * @description The **raOverlaySvc** service is used to create modal dialogs or overlays on top of existing screens.
 * It wraps the [ui-bootstrap $modal service](http://angular-ui.github.io/bootstrap/#/modal)
 * to allow for a consistent user experience in Rockwell Apps.
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** To display the modal dialog of type error, warning or information use the specialized
 *     {@link mobile-toolkit-ra.service:raMessageSvc _raMessageSvc_} service.
 * </div>
 *
 * # Basic usage
 * The simplest way to use the **raOverlaySvc** service is to rely on the built-in template and controller. By default,
 * the service creates a full screen overlay that has a header, a user-supplied content body,
 * and an action bar that can be populated with user-supplied actions.
 *
 * <pre>
 *      raOverlaySvc.open('', config) // first parameter empty - use the default controller
 *         .result.then(
 *             function (resolved) { // success callback
 *                 $scope.actionMessage = resolved;
 *             },
 *             function (rejected) { // error callback
 *                 $scope.actionMessage = rejected;
 *             }
 *         );
 * </pre>
 *
 * To pass the data to the overlay, you can use the `config` parameter. The default controller extends the
 * overlay's `$scope` with all enumerable properties of the `config` parameter. It means that the properties of
 * this parameter are available directly as the `$scope` variables.
 *
 * When using the default template, use the `config` to set a template URL for the
 * overlay body, title and action bar definitions, and optionally the flex class:
 *
 * | Property          | Type           | Description
 * |-------------------|----------------|---------------------------------------------------------------------------
 * | title             | {@type string} | The text to be shown in the title bar.
 * | templateUrl       | {@type string} | The URL to the template that will be included in the main section of the page, which is the main content body. This template will use the `$scope` of the overlay controller (default or provided), so AngularJS bindings can be used.
 * | actionDefinitions | {@type object} | An object containing action definitions for the raActionBar included at the bottom of the overlay. See the {@link mobile-toolkit-ra.directive:raActionBar raActionBar} directive for details.
 * | flex              | {@type string} | Determines if the overlay template should be wrapped by a div with Flexbox container class. This gives the embedded template the ability to expand to fill all available screen real estate. It can be set to `RA_FLEX_CLASS.ROW`, `RA_FLEX_CLASS.COLUMN` or left empty.
 *
 * You can add to the `config` object any other data that you want to pass to the overlay.
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** Do not confuse the `templateUrl` property of the `config` object and the `template`/`templateUrl`
 *     parameters of the function calls. The `config.templateUrl` property is used to set the *overlay content*
 *     (the inner HTML template) while using the default overlay template. The parameters of the function calls
 *     set the *overlay template* (the HTML template for the entire overlay).
 * </div>
 *
 * ### Sample config:
 * <pre>
 *     {
 *          title: "My overlay",
 *          templateUrl: "overlayBody.html", // sample content: "<b>Hello {{name}}!</b>"
 *          actionDefinitions = [
 *              {
 *                  iconClass: "ra-icon-commit",
 *                  actionName: "OK",
 *                  doAction: function () {
 *                      // you can use $close(result) to pass a result of the overlay call
 *                      // or $dismiss(reason) to cancel the overlay
 *                      $scope.$close('my result');
 *                  }
 *              }
 *          ],
 *          name: "Pawel" // additional data to be passed to the overlay's scope
 *     }
 * </pre>
 *
 * In action definitions or a custom controller, to close the overlay, call `$scope.$close(result)`
 * where the result parameter is an object to return. To cancel (dismiss) the overlay, call `$scope.$dismiss(reason)`.
 *
 * # Custom logic and appearance
 * The **raOverlaySvc** service can be also used to create more customized overlays. You can customize the
 * templates, controllers, and window classes.
 *
 * ## Templates
 * If the default overlay (using the title bar, body, and action bar format) is
 * not required, client apps can supply their own templates for the entire overlay. Both inline templates and
 * template URLs are supported.
 *
 * You can set the template for a particular overlay, using:
 * - The `template` or `templateUrl` parameter of the
 *   [open()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_open) method call.
 * - The `template` or `templateUrl` property of the `modalOptions` parameter of the
 *   [openWithOptions()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_openwithoptions) method.
 *
 * There is also a possibility of replacing the default overlay template for the whole application,
 * by using the [setDefaultTemplate()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_setdefaulttemplate)
 * function.
 *
 * If the default controller is used, the template can use all the properties of the `config` parameter
 * of the overlay calls as ordinary `$scope` bindings. When using a custom controller, the controller function has to
 * set the scope manually.
 *
 * ## Custom controllers
 *
 * The default controller extends the overlay's `$scope` with all enumerable properties of the `config` parameter.
 * If a more sophisticated logic is needed, you can specify a custom controller:
 * - As a controller for a particular overlay (passing it as the first parameter of the
 * [open()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_open) or
 * [openWithOptions()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_openwithoptions) method.
 * - As a default controller for the whole application (using the
 * [setDefaultController()](#/api/mobile-toolkit-ra.service:raOverlaySvc#methods_setdefaultcontroller) method).
 *
 * The controller must take (inject) both the `raOverlaySvc` and the `config` object as dependencies. The config
 * object supplied to the controller is the same object as the config parameter in the
 * `open(…)` call. This allows the caller to provide any data to the controller when it is invoked.
 *
 * ### Sample controller:
 *
 * <pre>
 *  myModule.controller('exampleCtrl', [
 *      '$scope', 'raOverlaySvc', 'config', function ($scope, raOverlaySvc, config) {
 *          'use strict';
 *
 *          var result;
 *
 *          $scope.$on("SomeEvent", function(param) {
 *              result += config.update(param);
 *          });
 *
 *          $scope.title = config.title;
 *          $scope.actionDefinitions = [
 *          {
 *              tooltipText : "Save result",
 *              iconClass: "ra-icon-commit",
 *              actionName: "Save",
 *              doAction: function () {
 *                  $scope.$close(result);
 *              }
 *          }];
 *      }
 *  ]);
 * </pre>
 *
 * ### Accessing a nested form
 *
 * When nesting a form within the body of the default overlay template, the form's scope will be a
 * child scope of the overlay controller's scope.  This results in a situation where your controller
 * will be unable to access the form properties that Angular provides, such as `$dirty` and `$valid`.
 * To circumvent this problem and provide the access, the form must set a property in the parent scope.
 * One of the ways in which this can be done is by using `ng-init`:
 *
 * <pre>
 * <form novalidate name="myForm">
 *     <div ng-init="vm.myForm = myForm">
 *         <!-- Assumes the controller's parent scope has a vm property -->
 *     </div>
 * </form>
 * </pre>
 *
 * Getting access to the child form's properties can be particularly useful when implementing
 * actions within the overlay's controller. Action handlers will often want to make use of
 * form properties such as `$dirty` and `$valid`.
 *
 * ## Window class
 * By default, the overlay template spreads across the whole window real estate. The window class is especially useful
 * when there is need of a modal-like experience. In this case you can supply a *dummy* CSS class.
 * You don't need to define this class as it will cause the default modal styles from Bootstrap CSS to be used.
 *
 * If preferred, you can define a true class that customizes the Bootstrap CSS.
 * As an example, see the `ra-overlay` class in the MFT Web Library's CSS, that defines the full screen behavior.
 *
 */
/* jshint +W101 */
angular.module("mobile-toolkit-ra").factory("raOverlaySvc", [ "$modal", "$rootScope", "$templateCache", function($modal, $rootScope, $templateCache) {
    "use strict";
    var dismissMessage = "Modal dismissed because of location (url) change.", defaultTemplate, defaultTemplateUrl, defaultController, //disable jshint line length for these api comments, some are required to be long for formatting
    //reenabled after these comments.
    /* jshint -W101 */
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#open
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         * @param {string=} [controllerName] The name of an AngularJS controller to be used for the overlay. This allows
         * the content (body) of the overlay to have any custom logic and implementation.
         * If not provided, a default controller is used.
         *
         * @param {object=} [config] An object that is passed as a parameter to the controller. It should be used
         * as the source of data for the overlay.
         *
         * @param {string=} [templateUrl] This parameter takes the URL of a template file
         * that will be used instead of the default template. It takes precedence over
         * the *template* parameter below if both are provided. Pass `undefined` to this parameter if you do not
         * want to provide a *templateUrl* but need to use either of the parameters that follow.
         *
         * @param {string=} [windowClass] A CSS class to apply to the overlay.  By default, the overlay is in full
         * screen mode. For a modal-like experience, supply a *dummy* css class. You don't need to define this class
         * as it will cause the default modal styles from Bootstrap CSS to be used. If preferred, you can define
         * a true class that customizes the Bootstrap CSS.
         *
         * @param {string=} [template] The same as the *templateUrl* parameter, with the exception that it takes
         * a string representing the template (HTML) instead of the URL to the template.
         *
         * <div class="alert alert-warning" role="alert">
         *     **Note:** The `templateUrl` takes precedence over this parameter if both are provided.
         *     This behavior is opposite to the the standard ui-bootstrap's `$modal` precedence.
         * </div>
         *
         * @param {boolean=} [raIgnoreLocationChange] A flag indicating if the overlay should be dismissed when the
         * location changes (which is the default behavior). If you want to ignore the location change event,
         * set the flag to `true`.
         *
         * @returns {object} A model instance object that is returned from the ui-bootstrap's $modal
         * service. For details, see the [ModalInstance return object](http://angular-ui.github.io/bootstrap/#/modal).
         * The following is a quick summary:
         *
         * | Property | Type             | Details                                                                                                                  |
         * |----------|------------------|--------------------------------------------------------------------------------------------------------------------------|
         * | close    | {@type function} | A function that can be used to close the overlay, passing a result. <pre>close(result)</pre>                             |
         * | dismiss  | {@type function} | A function that can be used to dismiss the overlay, passing a reason. <pre>close(reason)</pre>                           |
         * | result   | {@type promise}  | A promise that is resolved when the overlay is closed, and rejected when the overlay is dismissed.                       |
         * | opened   | {@type promise}  | A promise that is resolved when the overlay is opened after downloading the content template and resolving all variables.|
         *
         * @description Opens the overlay dialog.
         *
         * @example
         *
         <example module="exampleApp">
            <file name="index.html">
                <div ng-controller="exampleCtrl" class="ra-overlay-example">
                    <div>
                        <a class="btn btn-primary btn-lg" role="button"
                           ng-click="openOverlay()">
                            Open Default Overlay (fullscreen)
                        </a>
                        <br>
                        overlay resolved with: {{actionMessage}}
                    </div>
                </div>
            </file>
            <file name="overlay.html">
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </file>
            <file name="script.js">
                var mod = angular.module('exampleApp', ['mobile-toolkit-ra', 'ngRoute']);

                // this is the controller for the page hosting the overlay
                mod.controller('exampleCtrl',
                    ['$scope', 'raOverlaySvc', 'RA_FLEX_CLASS', '$route',
                    function ($scope, raOverlaySvc, RA_FLEX_CLASS, $route) {
                        'use strict';
                        var overlayConfig = {
                            title: "My Overlay",
                            flex: RA_FLEX_CLASS.COLUMN
                        };

                        // function to open the overlay using the OverlayCtrl
                        // controller and provided config
                        $scope.openOverlay = function () {
                            raOverlaySvc.open('OverlayCtrl', overlayConfig).result.then(
                                // success callback from promise returned from the open call
                                function (resolved) {
                                    $scope.actionMessage = resolved;
                                },
                                // failure callback from promise returned from the open call
                                function (rejected) {
                                    $scope.actionMessage = rejected;
                                }
                            );
                        };
                    }
                ]);

                //this is the controller for for the overlay itself
                mod.controller('OverlayCtrl', [
                    '$scope', 'raOverlaySvc', 'config',
                    function ($scope, raOverlaySvc, config) {
                        'use strict';

                        $scope.templateUrl =  'overlay.html';
                        $scope.title = config.title;
                        $scope.flex = config.flex;
                        $scope.actionDefinitions = [
                            {
                                tooltipText : "OK",
                                iconClass: "ra-icon ra-icon-commit",
                                actionName: "OK",
                                doAction: function () {
                                    $scope.$close('OK');
                                }
                            },
                            {
                                tooltipText : "Cancel",
                                iconClass: "ra-icon ra-icon-cancel",
                                actionName: "Cancel",
                                doAction: function () {
                                    $scope.$dismiss('CANCEL');
                                }
                            }
                        ];
                    }
                ]);
            </file>
         </example>
         *
         */
    /* jshint +W101 */
    open = function(controllerName, config, templateUrl, windowClass, template, raIgnoreLocationChange) {
        // building a simple modalOptions object
        var modalOptions = {
            controller: controllerName,
            windowClass: windowClass,
            raIgnoreLocationChange: raIgnoreLocationChange
        };
        // if templateUrl is passed in, that becomes the default.
        // otherwise, use the template passed in
        // need to build the config object to pass to $modal, because ui-bootstrap modal default to
        // template over templateUrl, even if template is undefined
        if (templateUrl) {
            modalOptions.templateUrl = templateUrl;
        } else {
            modalOptions.template = template;
        }
        return openWithOptions(modalOptions, config);
    }, //disable jshint line length for these api comments, some are required to be long for formatting
    //reenabled after these comments.
    /* jshint -W101 */
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#openWithOptions
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         *
         * @param {object} modalOptions Modal options object. For more information, see
         * [ui-bootstrap's $modal service documentation](http://angular-ui.github.io/bootstrap/#/modal).
         * A quick summary is presented below.
         *
         * Properties used directly by the **raOverlay**:
         *
         * | Property     | Type             | Details                                                                 |
         * |--------------|------------------|-------------------------------------------------------------------------|
         * | controller   | {@type string}   | The name of the controller for an overlay instance.                     |
         * | templateUrl  | {@type string}   | The path to the template representing the overlay's content.            |
         * | template     | {@type string}   | The inline template representing the overlay's content.                 |
         * | windowClass  | {@type string}   | Additional CSS class(es) to be added to an overlay backdrop.            |
         * | resolve      | {@type object}   | Members that will be resolved and passed to the controller as locals.   |
         *
         * The `controller` property corresponds to
         * the {@link mobile-toolkit-ra.service:raOverlaySvc#methods_open raOverlaySvc.open()} method's `controllerName`
         * parameter. All the properties above will use the values that are default for the **raOverlay**, if
         * other values are not provided.
         *
         * Additional properties include:
         *
         * | Property     | Type                           | Details                                                                 |
         * |--------------|--------------------------------|-------------------------------------------------------------------------|
         * | animation    | {@type boolean}                | Set to `false` to disable animations on a new overlay/backdrop.         |
         * | backdrop     | {@type boolean} {@type string} | Controls the backdrop presence - `true`, `false` or, `'static'`.        |
         * | keyboard     | {@type boolean}                | Indicates whether the dialog should be closable by pressing the ESC key.|
         * | backdropClass| {@type string}                 | A CSS class to apply to the overlay.                                    |
         *
         * Additionally, you can set the **raOverlay** specific properties:
         *
         * | Property               | Type             | Details                                                                                        |
         * |------------------------|------------------|------------------------------------------------------------------------------------------------|
         * | raIgnoreLocationChange | {@type boolean}  | Set the flag to `true` in order to prevent dismissing the overlay on the location change event.|
         *
         * @param {object=} config An object that is passed as a parameter to the controller. It should be used as the
         * source of data for the overlay.
         *
         * @returns {object} A model instance object that is returned from the ui-bootstrap's $modal
         * service. See the {@link mobile-toolkit-ra.service:raOverlaySvc#methods_open_returns raOverlaySvc.open()}
         * for a quick summary.
         *
         * @description Opens the overlay dialog. This method takes the `modalOptions` parameter, as defined
         * in the [ui-bootstrap's $modal service documentation](http://angular-ui.github.io/bootstrap/#/modal).
         * This allows to directly configure the underlying *$modal* service, without loosing the advantage of
         * having the default values of the **raOverlay** options used if custom values are not provided.
         */
    /* jshint +W101 */
    openWithOptions = function(modalOptions, config) {
        var unregisterLocationEvent, modalInstance;
        if (!modalOptions.controller) {
            modalOptions.controller = defaultController;
        }
        if (!angular.isObject(modalOptions.resolve)) {
            modalOptions.resolve = {};
        }
        if (config || !angular.isFunction(modalOptions.resolve.config)) {
            modalOptions.resolve.config = function() {
                return config;
            };
        }
        if (modalOptions.windowClass === undefined) {
            modalOptions.windowClass = "ra-overlay";
        }
        // if neither templateUrl nor template is set, get the default template from the cache
        if (!modalOptions.templateUrl && !modalOptions.template) {
            if (defaultTemplate) {
                modalOptions.template = defaultTemplate;
            } else {
                modalOptions.templateUrl = defaultTemplateUrl;
            }
        }
        modalInstance = $modal.open(modalOptions);
        if (!modalOptions.raIgnoreLocationChange) {
            // $on returns a function to call to unregister it, so when it is called, dismiss the modal, which in
            // turn rejects the promise.  Than finally is called below to cleanup the handler.
            unregisterLocationEvent = $rootScope.$on("$locationChangeStart", function() {
                modalInstance.dismiss(dismissMessage);
            });
        }
        // provide a function to be called when the promise is completed (resolved or rejected).  Works like a
        // try/catch finally, so unregisters the handler in all cases
        // use result['finally'](..) to invoke function instead of .result.finally(..) since finally
        // may be a reserved word in some browsers
        modalInstance.result["finally"](function() {
            if (angular.isFunction(unregisterLocationEvent)) {
                unregisterLocationEvent();
            }
        });
        return modalInstance;
    }, /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#isError
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         * @param {string} err Error message to check.
         * @returns {boolean} True if the message is not a standard dismiss message for hitting escape or clicking back.
         * @description Compares the error message with standard messages for dismissing the dialog.
         */
    isError = function(err) {
        // this handles both messages coming from ui-bootstrap modal and from raOverlaySvc
        // return true only in case of "real" error
        return !(err === undefined || err === "backdrop click" || err === "escape key press" || err === dismissMessage);
    }, /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#handleError
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         * @param {string} reason Original error message.
         * @param {string} msg Error message to be passed into RAError.
         * @param {object} raErrorHandlerSvc Error handler service object.
         * @description Detects whether the error message is a standard message for dismissing the dialog and if so,
         * it doesn't process the error further. Otherwise the message is passed to the raErrorHandlerSvc and the error
         * is propagated.
         */
    handleError = function(reason, msg, raErrorHandlerSvc) {
        var err = reason;
        if (!isError(err)) {
            // escape or back button pressed
            return;
        }
        if (!raErrorHandlerSvc.isError(err)) {
            err = raErrorHandlerSvc.getRAError(msg, reason);
        }
        raErrorHandlerSvc.propagate(err);
    }, /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#setDefaultTemplate
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         * @param {string=} template A template string (HTML), a template name (from `$templateCache`)
         * or a template URL. If not provided, a predefined template will be used.
         * @description Sets the default overlay template to be used across the whole application.
         *
         * @example
         * The following example shows how to set the default template for all overlays in the application.
         *
         *<example module="exampleApp">
            <file name="index.html">
                <div ng-controller="exampleCtrl" class="ra-overlay-example">
                    <div>
                        <a class="btn btn-primary btn-lg" role="button"
                           ng-click="openOverlay()">
                            Open Overlay
                        </a>
                        <br>
                        overlay resolved with: {{actionMessage}}
                    </div>
                </div>
            </file>
            <file name="overlay-custom-template.html">
                <div class="new-overlay">
                    <div class="ra-navbar-default navbar-fixed-top ra-center" style="background-color: #00A000">
                        <div class="ra-navbar-brand">
                            <div class="ra-overflow">{{ title }}</div>
                        </div>
                    </div>
                    <div class="modal-body ra-center" style="margin-top: 50px;">
                        Hello! This is the new default template!
                    </div>
                </div>
            </file>
            <file name="script.js">
                var mod = angular.module('exampleApp', ['mobile-toolkit-ra', 'ngRoute']);

                // this is the controller for the page hosting the overlay
                mod.controller('exampleCtrl', ['$scope', 'raOverlaySvc', '$route',
                    function ($scope, raOverlaySvc, $route) {
                        'use strict';

                        // set the default template
                        raOverlaySvc.setDefaultTemplate('overlay-custom-template.html');

                        // function to open the overlay using default controller and template
                        $scope.openOverlay = function () {
                            raOverlaySvc.open('', { title: "The Overlay"}, undefined, 'dummy')
                                .result.then(
                                    // success callback
                                    function (resolved) {
                                        $scope.actionMessage = resolved;
                                    },
                                    // failure callback
                                    function (rejected) {
                                        $scope.actionMessage = rejected;
                                    }
                                );
                        };
                    }
                ]);
            </file>
         *</example>
         */
    setDefaultTemplate = function(template) {
        if (!template) {
            template = "raOverlaySvc/raOverlay.tpl.html";
        }
        // Try to fetch the template from the cache first
        if ($templateCache.get(template)) {
            defaultTemplate = $templateCache.get(template);
            return;
        }
        // If the template is an element, return the element
        try {
            if (angular.element(template).length > 0) {
                defaultTemplate = template;
                return;
            }
        } catch (err) {}
        // template is not an element, ignore the error
        // If the template is not a valid HTML string, assume that it is a URL
        defaultTemplate = undefined;
        defaultTemplateUrl = template;
    }, /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raOverlaySvc#setDefaultController
         * @methodOf mobile-toolkit-ra.service:raOverlaySvc
         * @param {string|function=} controller The name of the controller or the controller constructor function,
         * to be set as the default one. If not provided, a predefined simple controller (extending the overlay's
         * `$scope` with `config` properties) will be used.
         *
         * <div class="alert alert-danger" role="alert">
         *     <strong>Warning:</strong> When you provide a controller name string as a parameter, you have to make sure
         *     that the corresponding controller constructor function will be present in every scope from which the
         *     overlay using the default controller can be called.
         * </div>
         * @description Sets the default overlay controller to be used across the whole application.
         *
         * @example
         * The following sample shows how to set the default controller for all overlays in the application.
         *
         *<example module="exampleApp">
            <file name="index.html">
                <div ng-controller="exampleCtrl" class="ra-overlay-example">
                    <div>
                        <a class="btn btn-primary btn-lg" role="button"
                           ng-click="openOverlay()">
                            Open Overlay
                        </a>
                        <br>
                        overlay resolved with: {{actionMessage}}
                    </div>
                </div>
            </file>
            <file name="overlay.html">
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </file>
            <file name="script.js">
                var mod = angular.module('exampleApp', ['mobile-toolkit-ra', 'ngRoute']);

                // the controller for the page hosting the overlay
                mod.controller('exampleCtrl', ['$scope', 'raOverlaySvc', '$route',
                    function ($scope, raOverlaySvc, $route) {
                        'use strict';

                        // the new overlay controller to be a default one across the app
                        var newDefaultController = ['$scope', 'raOverlaySvc', 'config',
                            function ($scope, rOverlaySvc, config) {
                                $scope.templateUrl = "overlay.html";
                                $scope.title = config.title + " under my control";
                            }];

                        // set the default controller
                        raOverlaySvc.setDefaultController(newDefaultController);

                        // function to open the overlay using default controller and template
                        $scope.openOverlay = function () {
                            raOverlaySvc.open('', { title: "The Overlay" }, undefined, 'dummy')
                                .result.then(
                                    // success callback
                                    function (resolved) {
                                        $scope.actionMessage = resolved;
                                    },
                                    // failure callback
                                    function (rejected) {
                                        $scope.actionMessage = rejected;
                                    }
                                );
                        };
                    }
                ]);
            </file>
         *</example>
         */
    setDefaultController = function(controller) {
        if (!controller) {
            defaultController = [ "$scope", "raOverlaySvc", "config", function($scope, rOverlaySvc, config) {
                // Extend the controller's $scope with the config properties
                angular.forEach(config, function(property, key) {
                    $scope[key] = property;
                });
            } ];
        } else {
            defaultController = controller;
        }
    };
    setDefaultTemplate();
    setDefaultController();
    return {
        open: open,
        openWithOptions: openWithOptions,
        handleError: handleError,
        isError: isError,
        setDefaultTemplate: setDefaultTemplate,
        setDefaultController: setDefaultController
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.directive:raRadialGauge
 * @scope
 * @restrict E
 * @param {number} value The value to be displayed by the gauge
 * @param {object=} config A configuration object for the gauge. The following properties are supported:
 *
 * - **`[animation]`** - `{boolean}` - determines if the arc should be animated when initializing/changing the value.
 * - **`[label]`** - `{object} {string} {function}` - a label placed inside the gauge for bigger resolutions, and
 *   below it for smaller resolutions. It will be localized using the translate filter. If a string is passed as
 *   this parameter, it becomes the label's text. You can also pass an object, in the following form:
 *   <pre>
 *       {
 *          text: "Gauge"               // Label text
 *          icon: "ra-icon-information" // A class name of an icon
 *       }
 *   </pre>
 *   If specified, an icon is displayed next to the label. Only the {@link mobile-toolkit-ra.css:ra-icons ra-icons}
 *   are supported.
 *   Additionally, you can also pass a function, returning a string or an object containing the text and
 *   icon properties. The function takes two parameters: the current gauge value and the current widget size.
 * - **`[max]`** - `{number}` - the maximum value, used to determine the percentage (will be displayed as 100%).
 *   Defaults to 100.
 * - **`[min]`** - `{number}` - the minimum value, used to determine the percentage (will be displayed as 0%).
 *   Defaults to 0.
 * - **`[ranges]`** - `{array}` - the color classes and values for the gauge value.
 * If not provided, defaults to:
 * <pre>
 *     {
 *          0:  'good',
 *          50: 'warning',
 *          65: 'bad',
 *          80: 'critical'
 *     };
 * </pre>
 * - **`[size]`** - `{number}` - the size of the gauge (in pixels). If not set, the gauge adjusts its size to the
 *   container width. When the size is less than 150, the gauge's height has 20 pixels extra to fit
 *   the label underneath.
 * - **`[scaleLabel]`** - `{boolean}` - determines if the label should be scaled proportionally to the gauge size.
 *   Defaults to `true`.
 * - **`[scaleValue]`** - `{boolean}` - determines if the value should be scaled proportionally to the gauge size.
 *   Defaults to `true`.
 * - **`[suffix]`** - `{string}` - the suffix to be appended to the value.
 *
 * The `config` object provides only initial values that control the directive's behavior and appearance.
 * It is not watched by the directive. After updating the configuration you need to redraw the whole gauge to
 * see the changes.
 *
 *
 * @param {function=} setApi
 * A callback function that returns the API object. It should take a single parameter named `api`
 * that will contain the API object when called.
 *
 * The object passed into the callback has the following function:
 * - **redraw([disableAnimation])** - A function that redraws the gauge. It takes one boolean `disableAnimation`
 *   parameter.
 *   When the parameter is set to `true`, the arc animation is not executed. This is useful when there is a need
 *   to redraw the gauge when only its size should be changed.
 *
 *
 * @description
 * The **raRadialGauge** has been designed to be a quick-read visual indicator that demonstrates the percentage amount
 * of a whole. By default it treats the input value as a percentage value (between 0 and 100).
 *
 * If you want to display a custom value, you may need to specify the minimum (empty circle) and the maximum
 * (fully-filled circle) range, using the `config.min` and `config.max` parameters. You can also set a suffix,
 * added to the displayed value.
 *
 * # Configuring the color ranges
 * The gauge's appearance can be configured by defining the `config.ranges` object. The field names of this object
 * should correspond to the minimum values of each color range, and their values should represent the color range names.
 *
 * A sample color range object looks as the following:
 * <pre>
 *     ranges = {
 *          '-10':  'negative', // negative values should be inserted as strings
 *          0:      'good',
 *          50:     'warning',
 *          65:     'bad',
 *          80:     'critical'
 *     };
 * </pre>
 *
 * The top-level node of the gauge has a `ra-radial-gauge-state-*` class applied, which corresponds to the determined
 * color range name. In this example, for a class starting from 50 (`warning`), it will be
 * `ra-radial-gauge-state-warning`. Every gauge element can be styled depending on the state class.
 *
 * ## Class tree:
 * - `ra-radial-gauge-state-*`  - a state class, where * is replaced by the state name.
 *  - [`ra-radial-gauge-small`] - a class added for gauge sizes smaller than 150 px.
 *   - `ra-radial-gauge-circle` - the outline of the gauge circle.
 *   - `ra-radial-gauge-path`   - the arc (the colored part of the circle) indicating the percentage.
 *   - `ra-radial-gauge-value`  - the current value of the gauge.
 *    - `ra-radial-gauge-suffix` - a suffix appended to the value.
 *   - `ra-radial-gauge-label`  - the text label inside/under the gauge.
 *    - `ra-radial-gauge-icon`  - the label's icon.
 *    - `ra-radial-gauge-label-text` - the label's text.
 *
 * For example, to style the color of the arc and the text for the `warning` class you can use the following CSS:
 *
 * <pre>
    .ra-radial-gauge-state-warning .ra-radial-gauge-path {
        stroke: #ffff00;
    }

    .ra-radial-gauge-state-warning .ra-radial-gauge-value {
        fill: #ff0000;
    }
 * </pre>
 *
 * # Default styling
 * The appearance of the radial gauge component is slightly different for smaller and bigger sizes. The regular version
 * of the gauge is displayed when the `size` is set to 150 px or higher. The label and icon are placed inside the
 * gauge's circle and they scale together with the gauge. The suffix is simply appended to the value.
 *
 * For sizes below 150 px, a smaller version of the gauge is used. It differs from the regular version in the label
 * placed underneath the gauge's circle. The value suffix is in superscript and it is colored gray.
 *
 * ## Color ranges
 * By default, the `raRadialGauge` uses a predefined set of ranges and styles. You can use the predefined color
 * range names to create your own color ranges.
 *
 * | Value  | State Name | Color                                                                    | Colored elements |
 * |--------|------------|:------------------------------------------------------------------------:|------------------|
 * | 0      | good       | <div style="width:100%; background: #268127; color: white;">268127</div> | arc              |
 * | 50     | warning    | <div style="width:100%; background: #f4b647; color: white;">f4b647</div> | arc              |
 * | 65     | bad        | <div style="width:100%; background: #ee6f10; color: white;">ee6f10</div> | arc, value       |
 * | 80     | critical   | <div style="width:100%; background: #ee0e2c; color: white;">ee0e2c</div> | arc, value       |
 *
 * @example
 * # Basic usage
 * This example shows basic usage of the radial gauge. The controller sets the `cpuValue` scope variable,
 * which is presented on the gauge using the default configuration.
 *  <example module="exampleApp">
        <file name="index.html">
            <div ng-controller="sampleCtrl">
                <button ng-click="changeValue()">Change value</button>
                <ra-radial-gauge value="cpuValue"></ra-radial-gauge>
            </div>
        </file>
        <file name="script.js">
            angular.module('exampleApp', ['mobile-toolkit-ra'])
                    .controller('sampleCtrl', [ '$scope', function ($scope) {
                        // this controller simply sets the value of the cpuValue variable
                        var values = [33, 0, 55, 100, 77, 10],
                            index = 0;

                        $scope.cpuValue = values[index];

                        $scope.changeValue = function () {
                            index = (index + 1) % values.length;
                            $scope.cpuValue = values[index];
                        }
                    }
                ]
            );
        </file>
 *  </example>
 *
 * # Custom ranges and values, redrawing
 * This example presents more advanced usage of the radial gauge component. The gauge uses custom color ranges,
 * with three predefined and two additional states. The percentage is computed as 0% for the value of -50, and
 * 100% for the value of 50, and the value has a suffix appended to it. The label is shortened for sizes below
 * 150 px, and the icon is changed depending on the current value. The initial size is set to be 300 px.
 *
 * The example also shows how to use the gauge API's `redraw()` function.
 *
 *  <example module="exampleApp">
        <file name="index.html">
            <div ng-controller="sampleCtrl">
                <button ng-click="changeValue()">Change value</button>
                <button ng-click="changeSize()">Change size</button>
                <ra-radial-gauge value="cpuValue" config="gaugeConfig" set-api="apiFunc(api)">
                </ra-radial-gauge>
            </div>
        </file>
        <file name="style.css">
            .ra-radial-gauge-state-neg-bad .ra-radial-gauge-path {
                stroke: cyan; // path color for neg-bad state
            }

            .ra-radial-gauge-state-neg-bad .ra-radial-gauge-label {
                fill: red;    // label color for neg-bad state
            }

            .ra-radial-gauge-state-neg-warning .ra-radial-gauge-path {
                stroke: blue; // path color for neg-warning state
            }

            .ra-radial-gauge-state-neg-warning .ra-radial-gauge-value {
                fill: blue; // value color for neg-warning state (for small sizes suffix stays gray)
            }
        </file>
        <file name="script.js">
            angular.module('exampleApp', ['mobile-toolkit-ra'])
                    .controller('sampleCtrl', [ '$scope', function ($scope) {
                        var gaugeApi,
                            values = [-10, -40, -60, 0, 10, 50],
                            index = 0;

                        // set the gauge value
                        $scope.cpuValue = values[index];

                        $scope.changeValue = function () {
                            index = (index + 1) % values.length;
                            $scope.cpuValue = values[index];
                        }

                        // gauge configuration
                        $scope.gaugeConfig = {
                            min: -50,                   // minimal value
                            max: 50,                    // maximal value
                            ranges: {                   // custom ranges
                                '-50': 'neg-bad',
                                '-20': 'neg-warning',
                                0:     'good',
                                10:    'warning',
                                20:    'bad'
                            },
                            label: function(value, size) {
                                // the label is generated as a function of value and size
                                var icon, text;

                                // set an icon depending on the current value
                                if (value >= 20 || value < -20) {
                                    icon = "ra-icon-error"
                                }
                                else if (value >= 10 || value < -10) {
                                    icon = "ra-icon-warning"
                                }
                                else {
                                    icon = "ra-icon-information"
                                }

                                // set the label depending on the size
                                if (size < 150) {
                                    text = "Temp"
                                }
                                else {
                                    text = "Temperature"
                                }

                                // return the proper label object
                                return {
                                    text: text,
                                    icon: icon
                                }
                            },
                            suffix: '°C',   // custom suffix, appended to the value
                            size: 300       // fixed size
                        };

                        // a function responsible for exposing the gauge's API to the controller
                        $scope.apiFunc = function(api) {
                            gaugeApi = api;
                        }

                        // toggle the size of the gauge
                        $scope.changeSize = function () {
                            if ($scope.gaugeConfig.size > 120) {
                                $scope.gaugeConfig.size = 120;
                            }
                            else {
                                $scope.gaugeConfig.size = 300;
                            }
                            // after setting the size parameter, the gauge needs to be redrawn
                            gaugeApi.redraw();
                        }
                    }
                ]
            );
        </file>
 *  </example>
 */
angular.module("mobile-toolkit-ra").directive("raRadialGauge", [ "$templateCache", "$timeout", "$document", function($templateCache, $timeout, $document) {
    "use strict";
    var defaultRanges = {
        0: "good",
        50: "warning",
        65: "bad",
        80: "critical"
    }, animationOffset = 2, // how much the arc grows/shrinks per frame
    frameDuration = 20, // animation frame duration in ms
    raIconGlyphs = getRaIconGlyphs();
    //
    // Enumerate ra-icons
    //
    function getRaIconGlyphs() {
        var raIconGlyphs = [], raIconRegex = /^.(ra-icon-.*?):{1,2}before/, glyph, sheetIndex, ruleIndex, curRule, matchInfo;
        for (sheetIndex = 0; sheetIndex < $document[0].styleSheets.length; sheetIndex++) {
            for (ruleIndex = 0; ruleIndex < $document[0].styleSheets[sheetIndex].cssRules.length; ruleIndex++) {
                curRule = $document[0].styleSheets[sheetIndex].cssRules[ruleIndex];
                matchInfo = raIconRegex.exec(curRule.selectorText);
                if (matchInfo) {
                    glyph = curRule.style.content.replace(/"/g, "");
                    // remove quotes added by some browsers
                    // for IE - change char code to character
                    if (glyph[0] === "\\") {
                        // replace \ with 0x to correctly cast the string to the hex value
                        glyph = glyph.replace(/\\/, "0x");
                        glyph = String.fromCharCode(glyph);
                    }
                    raIconGlyphs[matchInfo[1]] = glyph;
                }
            }
        }
        return raIconGlyphs;
    }
    //
    // Convert the input to a percentage value for a given range
    //
    function convertToPercentage(value, min, max) {
        var result;
        min = angular.isNumber(min) && isFinite(min) ? min : 0;
        max = angular.isNumber(max) && isFinite(max) ? max : 100;
        result = (value - min) / (max - min) * 100;
        // Limit the percentage to <0, 100>
        if (result > 100) {
            return 100;
        }
        if (result < 0 || !isFinite(result)) {
            return 0;
        }
        return result;
    }
    //
    // Get the color class for the given value
    //
    function getColorClass(ranges, value) {
        var i, keys = Object.keys(ranges);
        // Sort the keys numerically
        keys.sort(function(a, b) {
            return a - b;
        });
        for (i = keys.length - 1; i >= 0; i--) {
            if (value >= keys[i]) {
                return ranges[keys[i]];
            }
        }
        // if the value is smaller, return the state from the lowest range
        return ranges[keys[0]];
    }
    //
    // Given a circle with a center and radius
    // calculate the location of the point at the given angle
    //
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
        return {
            x: radius * Math.cos(angleInRadians) + centerX,
            y: radius * Math.sin(angleInRadians) + centerY
        };
    }
    //
    // Set the label according to the configuration
    //
    function setLabel(scope) {
        scope.label = scope.config.label;
        scope.icon = undefined;
        if (angular.isFunction(scope.label)) {
            scope.label = scope.label(scope.value, scope.size);
        }
        if (angular.isObject(scope.label)) {
            // Set the icon character basing on the class name
            scope.icon = raIconGlyphs[scope.label.icon];
        } else {
            scope.label = {
                text: scope.label
            };
        }
    }
    //
    // Set the value and label positions
    //
    function calculateTextPosition(scope) {
        var computeValueScaleNormal = function(size) {
            // For big size of the gauge the label scales proportionally to the half of the
            // gauge's size, with basis on 150 px
            return .5 + .5 * (size / 150);
        }, computeValueScaleSmall = function(size) {
            // For small size of the gauge the label scales proportionally to the
            // gauge's size, with basis on 100 px
            return size / 100;
        }, computeLabelScaleNormal = function(size) {
            // For big size of the gauge the value scales proportionally to the half of the
            // gauge's size, with basis on 150 px
            return .5 + .5 * (size / 150);
        }, computeLabelScaleSmall = function() {
            // Fot small size of the gauge, the label keeps its size
            return 1;
        }, // shift the label down by 2x font height, to place it under the gauge in its small version
        labelShiftSmall = "2ex", // shift the label down by 2.5x font height, to avoid overlapping the value inside the big gauge
        labelShiftNormal = "2.5ex", // center the value, when there is no label inside the gauge
        valueShiftNoLabel = 0, // shift the value by 0.5x font height, when there is a label underneath
        valueShiftLabelPresent = "0.5ex", // extra space to be added to the height of the small-sized gauge, to make a place for the label
        bottomExtraSpaceSmall = 20, // extra space to be added to the height of the large-sized gauge
        bottomExtraSpaceNormal = 0;
        // set initial scales, used when the scaling is turned off
        scope.labelScale = 1;
        scope.valueScale = 1;
        // for small version of the gauge
        if (scope.size < scope.layoutSmallSize) {
            if (scope.config.scaleLabel !== false) {
                scope.labelScale = computeLabelScaleSmall(scope.size);
            }
            if (scope.config.scaleValue !== false) {
                scope.valueScale = computeValueScaleSmall(scope.size);
            }
            // put label at the bottom
            scope.labelY = scope.size;
            scope.labelDY = labelShiftSmall;
            scope.bottomExtraSpace = bottomExtraSpaceSmall;
        } else {
            if (scope.config.scaleLabel !== false) {
                scope.labelScale = computeLabelScaleNormal(scope.size);
            }
            if (scope.config.scaleValue !== false) {
                scope.valueScale = computeValueScaleNormal(scope.size);
            }
            // put the label in the middle of the circle and shift it down a bit
            scope.labelY = scope.center / scope.labelScale;
            scope.labelDY = labelShiftNormal;
            scope.bottomExtraSpace = bottomExtraSpaceNormal;
        }
        scope.valueX = scope.valueY = scope.center / scope.valueScale;
        scope.labelX = scope.center / scope.labelScale;
        // move the value up a little bit, when the label is displayed directly under it
        if ((scope.label.text || scope.label.icon) && scope.size >= scope.layoutSmallSize) {
            scope.valueDY = valueShiftNoLabel;
        } else {
            scope.valueDY = valueShiftLabelPresent;
        }
    }
    //
    // Calculate an SVG arc between the 2 angles for the given circle
    //
    function describeArc(centerX, centerY, radius, startAngle, endAngle) {
        var start, end, arcSweep;
        start = polarToCartesian(centerX, centerY, radius, endAngle);
        end = polarToCartesian(centerX, centerY, radius, startAngle);
        arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
        // arc direction
        return [ "M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y ].join(" ");
    }
    //
    // Get the SVG arc for current percentage
    //
    function calculateArc(scope, percentage) {
        scope.arc = describeArc(scope.center, scope.center, scope.radius, 0, percentage * 3.599999);
    }
    //
    // Prepare the next animation frame and execute again after defined period
    //
    function animateArc(scope, targetPercentage, isIncreasing) {
        // If the animation is disabled, set the percentage to the target value and draw the arc
        if (scope.config.animation === false) {
            scope.isAnimating = false;
            scope.percentage = targetPercentage;
            return calculateArc(scope, scope.percentage);
        }
        scope.isAnimating = true;
        // Increase or decrease the displayed percentage
        if (isIncreasing) {
            scope.percentage += animationOffset;
        } else {
            scope.percentage -= animationOffset;
        }
        // Draw the arc
        calculateArc(scope, scope.percentage);
        // Determine if it is necessary to draw another frame of the animation
        if (isIncreasing && scope.percentage + animationOffset < targetPercentage || !isIncreasing && scope.percentage - animationOffset > targetPercentage) {
            // Schedule the next animation frame
            scope.animatePromise = $timeout(function() {
                animateArc(scope, targetPercentage, isIncreasing);
            }, frameDuration);
        } else {
            // If not, draw the arc in its final state
            scope.isAnimating = false;
            scope.percentage = targetPercentage;
            calculateArc(scope, scope.percentage);
        }
    }
    //
    // Draw the entire gauge
    //
    function draw(scope, element, disableAnimation) {
        var targetPercentage;
        scope.config = scope.config || {};
        scope.layoutSmallSize = 150;
        // Size of the image
        if (scope.config.size > 0) {
            // user specified the size
            scope.size = scope.config.size;
        } else {
            // otherwise determine the size basing on the container width
            scope.size = element.parent()[0].getBoundingClientRect().width;
        }
        // Ranges
        if (scope.config && scope.config.ranges) {
            scope.ranges = scope.config.ranges;
        } else {
            scope.ranges = defaultRanges;
        }
        // Suffix
        scope.suffix = angular.isString(scope.config.suffix) ? scope.config.suffix : "";
        // Circle & arc position
        scope.center = Math.floor(scope.size * .5);
        scope.radius = Math.floor(scope.size * .4);
        scope.start = {
            x: scope.center,
            y: scope.center - scope.radius
        };
        // Label and value positions
        setLabel(scope);
        calculateTextPosition(scope);
        // Determine the percentage and color
        targetPercentage = convertToPercentage(scope.value, scope.config.min, scope.config.max);
        scope.stateClass = "ra-radial-gauge-state-" + getColorClass(scope.ranges, scope.value);
        if (disableAnimation !== true) {
            // Set initial percentage to 0 (for animation)
            scope.percentage = 0;
            animateArc(scope, targetPercentage, true);
        } else {
            scope.percentage = targetPercentage;
            calculateArc(scope, targetPercentage);
        }
    }
    return {
        restrict: "E",
        scope: {
            value: "=",
            config: "=",
            setApi: "&"
        },
        template: $templateCache.get("raRadialGauge/raRadialGauge.tpl.html"),
        link: function(scope, element, attrs) {
            var api;
            draw(scope, element);
            scope.isAnimating = false;
            scope.$watch("value", function(newValue) {
                var targetPercentage = convertToPercentage(newValue, scope.config.min, scope.config.max);
                // Cancel the current animation (if any)
                if (scope.animatePromise) {
                    $timeout.cancel(scope.animatePromise);
                }
                // Update the label
                setLabel(scope);
                calculateTextPosition(scope);
                scope.stateClass = "ra-radial-gauge-state-" + getColorClass(scope.ranges, scope.value);
                animateArc(scope, targetPercentage, targetPercentage > scope.percentage);
            });
            if (attrs.setApi) {
                api = {
                    redraw: function(disableAnimation) {
                        draw(scope, element, disableAnimation);
                    }
                };
                scope.setApi({
                    api: api
                });
            }
            scope.$on("$destroy", function() {
                $timeout.cancel(scope.animatePromise);
            });
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").service("raResizeSensorSvc", [ "$translate", "raErrorHandlerSvc", function($translate, raErrorHandlerSvc) {
    "use strict";
    /**
             * @ngdoc method
             * @name mobile-toolkit-ra.service:raResizeSensorSvc#registerOnHeightSensor
             * @methodOf mobile-toolkit-ra.service:raResizeSensorSvc
             * @param {Element} element An object that will be observed if the height is changed.
             * @param {Function=} [resizeEventHandler] A function to execute each time the resizing occurs.
             * The current value of the _offsetHeight_ property is passed as a parameter.
             * @return {Function} A cleanup function which should be called on a _$destroy_ event.
             * @description
             * Registers a handler which will be executed when the element's height changes.
             */
    function registerOnHeightSensor(element, resizeEventHandler) {
        var resizeElemStyle = 'style="position: absolute; left: 0; top: 0; bottom: 0; ' + 'overflow-y: scroll; z-index: -1; visibility: hidden;"', curElement, curElemPositionOnInit, curResizeEventHandler, expandElement, lastOffsetHeight, shrinkElement;
        if (!element || element.length === 0) {
            throw raErrorHandlerSvc.getRAError($translate.instant("RA_RESIZE_SENSOR.ARGUMENT_ELEMENT_MUST_BE_DEFINED"));
        }
        function setResizeEventHandlers() {
            lastOffsetHeight = curElement.offsetHeight;
            expandElement.childNodes[0].style.height = curElement.offsetHeight + 10 + "px";
            expandElement.scrollTop = expandElement.scrollHeight;
            shrinkElement.scrollTop = shrinkElement.scrollHeight;
        }
        function fireResizeEvent() {
            var curOffsetHeight = curElement.offsetHeight;
            if (curOffsetHeight !== lastOffsetHeight && angular.isFunction(curResizeEventHandler)) {
                lastOffsetHeight = curOffsetHeight;
                curResizeEventHandler(curOffsetHeight);
            }
        }
        function onScroll() {
            fireResizeEvent();
            setResizeEventHandlers();
        }
        function cleanUp() {
            expandElement.removeEventListener("scroll", onScroll);
            angular.element(expandElement).remove();
            shrinkElement.removeEventListener("scroll", onScroll);
            angular.element(shrinkElement).remove();
            curElement.style.position = curElemPositionOnInit;
        }
        curElement = element[0];
        curResizeEventHandler = resizeEventHandler;
        expandElement = angular.element("<div " + resizeElemStyle + '><div style="width:1px;"></div></div>')[0];
        shrinkElement = angular.element("<div " + resizeElemStyle + '><div style="width:1px; height: 200%"></div></div>')[0];
        curElemPositionOnInit = curElement.style.position;
        curElement.style.position = "relative";
        curElement.appendChild(expandElement);
        curElement.appendChild(shrinkElement);
        expandElement.addEventListener("scroll", onScroll);
        shrinkElement.addEventListener("scroll", onScroll);
        setResizeEventHandlers();
        return cleanUp;
    }
    return {
        registerOnHeightSensor: registerOnHeightSensor
    };
} ]);

/* global angular */
/**
 * @ngdoc filter
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.filter:raRoundIfNumber
 *
 * @param {object} value The value to round. If `value`'s type is other than
 * `number`, then `value` is returned as result.
 * @param {number} digits The number of decimal digits to round the value to.
 * If not provided, a default value of **2** is used.
 * @returns {object} Rounded numeric value or the original value, if the
 * original value was not of type `number`.
 *
 * @description
 * This filter rounds numeric values to the specified number of decimal
 * digits. If number of decimal digits is not provided, a default value of **2**
 * is used. For non numeric values, the original value is returned.
 *
 * @example
 * <example module="mobile-toolkit-ra">
 *    <file name="index.html">
 *    <form class="form-inline" role="form" name="form">
 *        <div class="form-group" ng-class="{'has-error': form.name.$invalid}">
 *            <label class="control-label" for="numberInput">Input a number: </label>
 *            <input name="name" ng-model="num" type="number" step="any"
 *                    class="form-control" id="numberInput">
 *            <label class="control-label" for="result">Result: </label>
 *            <span id="result">{{ num | raRoundIfNumber }}</span>
 *        </div>
 *    </form>
 *    </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").filter("raRoundIfNumber", [ "$filter", function($filter) {
    "use strict";
    var defaultDecimalDigits = 2;
    return function(value, digits) {
        var result = value;
        if (angular.isUndefined(digits)) {
            digits = defaultDecimalDigits;
        }
        if (typeof value === "number") {
            result = $filter("number")(value, digits);
        }
        return result;
    };
} ]);

/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.raScreenSizeSvcProvider
 * @description Provides and configures the
 * {@link mobile-toolkit-ra.service:raScreenSizeSvc _raScreenSizeSvc_} service.
 */
angular.module("mobile-toolkit-ra").constant("RA_SCREEN_SIZE_SVC_CONSTS", {
    /**
     * @ngdoc property
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS#WIDTHS_AND_HEIGHTS
     * @propertyOf mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS
     * @description The name of the rule which includes a combination of widths and heights
     */
    WIDTHS_AND_HEIGHTS: "widthsAndHeights",
    /**
         * @ngdoc property
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS#WIDTHS_AND_HEIGHTS_BIGGER
         * @propertyOf mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS
         * @description The name of the rule which includes a combination of widths and heights using bigger size
         * on any direction
         */
    WIDTHS_AND_HEIGHTS_BIGGER: "widthsAndHeightsBigger",
    /**
     * @ngdoc property
     * @module mobile-toolkit-ra
     * @name mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS#WIDTHS_ONLY
     * @propertyOf mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS
     * @description The name of the rule which includes a set of maximum widths
     */
    WIDTHS_ONLY: "widthsOnly"
}).provider("raScreenSizeSvc", function() {
    "use strict";
    // takes a comma-separated list of screen sizes to match.
    // returns true if any of them match.
    var rules = {
        widthsAndHeights: {
            lg: [ "(min-width: 1200px) and (min-height: 1200px)" ],
            md: [ "(min-width:  992px) and (max-width:  1199px) and (min-height: 992px)", "(min-height: 992px) and (max-height: 1199px) and (min-width:  992px)" ],
            sm: [ "(min-width: 768px) and (max-width: 991px) and (min-height: 768px)", "(min-height: 768px) and (max-height: 991px) and (min-width: 768px)" ],
            xs: [ "(max-width: 767px)", "(max-height: 767px)" ]
        },
        widthsAndHeightsBigger: {
            lg: [ "(min-width: 1200px)", "(min-height: 1200px)" ],
            md: [ "(min-width:  992px) and (max-width:  1199px) and (max-height: 1199px)", "(min-height: 992px) and (max-height: 1199px) and (max-width:  1199px)" ],
            sm: [ "(min-width: 768px) and (max-width: 991px) and (max-height: 992px)", "(min-height: 768px) and (max-height: 991px) and (max-width: 992px)" ],
            xs: [ "(max-width: 767px) and (max-height: 767px)" ]
        },
        widthsOnly: {
            lg: [ "(min-width: 1200px)" ],
            md: [ "(min-width: 992px) and (max-width: 1199px)" ],
            sm: [ "(min-width: 768px) and (max-width: 991px)" ],
            xs: [ "(max-width: 767px)" ]
        }
    };
    /**
    * @ngdoc method
    * @name mobile-toolkit-ra.raScreenSizeSvcProvider#$get
    * @methodOf mobile-toolkit-ra.raScreenSizeSvcProvider
    * @returns {Object} An instance of the _raScreenSizeSvc_ service.
    * @description Creates and returns an instance of _raScreenSizeSvc_.
    */
    this.$get = [ "$window", "raErrorHandlerSvc", "$rootScope", function($window, raErrorHandlerSvc, $rootScope) {
        /**
         * @ngdoc service
         * @module mobile-toolkit-ra
         * @name mobile-toolkit-ra.service:raScreenSizeSvc
         * @description
         * The raScreenSizeSvc is used to determine if the screen size (in any direction)
         * meets the criteria passed in. Screen dimensions are taken from Bootstrap's
         * responsive design: http://getbootstrap.com/css/#responsive-utilities
         * <br>Possible values are: lg, md, sm, xs.
         * <ul>
         * <li>xs - Extra small devices (Phones <768px)</li>
         * <li>sm - Small devices (Tablets ≥768px)</li>
         * <li>md - Medium devices (Desktops ≥992px)</li>
         * <li>lg - Large devices (Desktops ≥1200px)</li>
         * </ul>
         * <div class="alert alert-info" role="alert">
         *     **Info:** In case of large devices (Desktops) there is a possibility that
         *     none of the options above meets the criteria. It is possible e.g. when the height of the browser window
         *     exceeds the limit for medium devices and the width is still lower than 1200px.
         *     In such a case, the default size should be set.
         * </div>
         *
         * ###  orientationchange Event
         * raScreenSizeSvc add new functionality to listen _orientationchange_ event,
         * which is important to run different JS codes under landscape and portrait mode.
         * we can register multiple user listeners to the service and invoke them when _orientationchange_
         * event is triggered by rotating your mobile device.
         *
         * @example
         <example module="exampleOne">
            <file name="script.js">
                angular.module('exampleOne', ['mobile-toolkit-ra'])
                    .controller('exampleOneCtrl', ['$scope', 'raScreenSizeSvc', 'RA_SCREEN_SIZE_SVC_CONSTS',
                        function ($scope, raScreenSizeSvc, RA_SCREEN_SIZE_SVC_CONSTS) {
                            "use strict";
                            var unsubscriber = null;

                            $scope.sizes = [
                                {name:'xs', displayName:'Extra small'},
                                {name:'sm', displayName:'Small'},
                                {name:'md', displayName:'Medium'},
                                {name:'lg', displayName:'Large'}
                            ];
                            $scope.rules = [{
                                    value: RA_SCREEN_SIZE_SVC_CONSTS.WIDTHS_AND_HEIGHTS,
                                    displayName:'Widths and heights'
                                }, {
                                    value: RA_SCREEN_SIZE_SVC_CONSTS.WIDTHS_AND_HEIGHTS_BIGGER,
                                    displayName:'Widths and heights favoring bigger dimension'
                                }, {
                                    value:RA_SCREEN_SIZE_SVC_CONSTS.WIDTHS_ONLY,
                                    displayName:'Widths only'
                                }
                            ];
                            $scope.mySize = $scope.sizes[2];
                            $scope.myRule = $scope.rules[0];
                            $scope.getMinScreenDimension = function () {
                                $scope.checkLabel =  'Returned value for ' +
                                    $scope.mySize.name + ' (' + $scope.mySize.displayName + ' device) and ' +
                                    $scope.myRule.value + ' (' + $scope.myRule.displayName + ' rule) ' +
                                raScreenSizeSvc.minScreenDimensionIs($scope.mySize.name, $scope.myRule.value);
                            };

                             $scope.getOrientationValue = function  () {
                                 var orientationVal = raScreenSizeSvc.isLandScape() ? "landscape": "portrait";
                                 $scope.orientationValue = 'Current orientation value is: ' + orientationVal;
                             }

                             $scope.$on('$destroy', function () {
                                 if (typeof unsubscriber === 'function') {
                                    unsubscriber();
                                    unsubscriber = null;
                                 }
                             });

                             unsubscriber = raScreenSizeSvc.onOrientationChange(function (isLandscape) {
                                var strOrientationValue = isLandscape ? 'Landscape' : 'Portrait';
                                $scope.orientationValue = '\'orientationchange\' event triggered,' +
                                    'the orientation value is: ' + strOrientationValue;
                             });

                             raScreenSizeSvc.startOrientationListening();
                        }]);
            </file>
            <file name="index-new-window.html">
                <div class="container-fluid" ng-controller="exampleOneCtrl">
                    <div class="row-fluid">
                        <div>
                            <div class="row">
                                <span>Rule:</span>
                                <select ng-model="myRule" ng-options="rule.displayName for rule in rules">
                                </select><br>
                            </div>
                            <div class="row">
                                <span>Size:</span>
                                <select ng-model="mySize" ng-options="size.displayName for size in sizes">
                                </select><br>
                            </div>
                            <div class="row">
                                <span>
                                    Resize the window and press the "Check" button to see
                                    if the screen meets selected criteria
                                </span>
                            </div>
                            <div class="row">
                                <button ng-click="getMinScreenDimension()">
                                    Check Screen Size
                                </button>
                                &nbsp;
                                <button ng-click="getOrientationValue()">
                                    Check Orientation Value
                                </button>
                            </div>
                            <div class="row">
                                <span>
                                    {{checkLabel}}
                                </span>
                            </div>
                            <div class="row">
                                Orientation value:
                                <span>
                                    {{orientationValue}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </file>
         </example>
         */
        var raScreenSizeSvc = {};
        /**
         * @ngdoc method
         * @name mobile-toolkit-ra.service:raScreenSizeSvc#minScreenDimensionIs
         * @methodOf mobile-toolkit-ra.service:raScreenSizeSvc
         * @param {Array} [list] An array of strings or comma separated list
         * of strings used to check against to determine screen size.
         * Possible values are lg, md, sm, xs.
         * @param {string} [ruleName]
         * Indicates the rule which will be used to determine the screen size.   Possible values are:
         *     - `"widthsAndHeights"` - default - includes a combination of widths and heights,
         *     - `"widthsAndHeightsBigger"` - includes a combination of widths and heights favoring bigger dimension,
         *     - `"widthsOnly"` - default - includes a set of maximum widths.
         *
         * The appropriate values of ruleName are available as constants on
         * {@link mobile-toolkit-ra:RA_SCREEN_SIZE_SVC_CONSTS _RA_SCREEN_SIZE_SVC_CONSTS_}
         * @returns {bool} Bool indicating if device resolution matches one
         * of the types passed in via the list param
         * @description Function to return if the device (or browser)
         * screen size matched one of the values provided.
         */
        raScreenSizeSvc.minScreenDimensionIs = function(list, ruleName) {
            var sizes = ruleName !== "" && rules.hasOwnProperty(ruleName) ? rules[ruleName] : rules.widthsAndHeights;
            // validate that we're getting a string or array.
            if (typeof list !== "string" && !Array.isArray(list)) {
                throw raErrorHandlerSvc.getRAError("Error in raScreenSizeSvc.minScreenDimensionIs", "raScreenSizeSvc.minScreenDimensionIs requires array or comma-separated list");
            }
            // if it's a string, convert to array.
            if (typeof list === "string") {
                list = list.split(/\s*,\s*/);
            }
            return list.some(function(size) {
                if ($window.matchMedia && sizes[size]) {
                    return sizes[size].some(function(value) {
                        return $window.matchMedia(value).matches;
                    });
                }
                return false;
            });
        };
        /**
        * @ngdoc property
        * @name mobile-toolkit-ra.service:raScreenSizeSvc#listeners
        * @propertyOf mobile-toolkit-ra.service:raScreenSizeSvc
        * @description  listener pool for orientationchange event.
        */
        raScreenSizeSvc.listeners = [];
        /**
        * @ngdoc method
        * @name mobile-toolkit-ra.service:raScreenSizeSvc#onOrientationChange
        * @methodOf mobile-toolkit-ra.service:raScreenSizeSvc
        * @param {function} [listenerFunc] callback function on orientationChanged event which
        * take a boolean parameter to indicates whether current device is in landscape mode.
        * @returns {function} return the function which will unsubscribe the current
        * listener from the pool. If the `listenerFunc` is not provided, false will be returned.
        * @description Function to register event handler that will be invoked while
        * 'orientationChange' event is triggered. This method can run multiple times and register
        * multiple event handlers.
        */
        raScreenSizeSvc.onOrientationChange = function(listenerFunc) {
            var self = this;
            if (typeof listenerFunc !== "function") {
                return false;
            }
            var len = self.listeners.push(listenerFunc);
            return function() {
                delete self.listeners[len - 1];
            };
        };
        /**
        * @ngdoc method
        * @name mobile-toolkit-ra.service:raScreenSizeSvc#startOrientationListening
        * @methodOf mobile-toolkit-ra.service:raScreenSizeSvc
        * @description start listening on 'orientationchange' event.
        */
        raScreenSizeSvc.startOrientationListening = function() {
            var self = this, win = $window, evt = null;
            //when current window is embeded in iframe and the device type is android,
            //we need to detect the onOrientationChange event on top window.
            if ($window.top && $window.top !== $window) {
                win = $window.top;
            }
            //some device haven't provided the orientationchange event.
            //we will detect 'onresize' event.
            if ("onorientationchange" in win) {
                evt = "orientationchange";
            } else {
                evt = "resize";
            }
            win.addEventListener(evt, function() {
                var isLandscape = null;
                //boolean value to show whether we are in landscape mode.
                if ("orientation" in win) {
                    //In most mobile devices, window.orientation value in the landscape mode will get 90 or -90.
                    isLandscape = Math.abs(win.orientation) === 90;
                } else {
                    //if we get no orientation value, we will judge the landscape mode
                    //by checking window.innerWidth and window.innerHeight.
                    // it will return the same value with the 'isLandScape' method.
                    isLandscape = win.innerWidth > win.innerHeight;
                }
                if (self.listeners) {
                    angular.forEach(self.listeners, function(listenerFunc) {
                        if (typeof listenerFunc === "function") {
                            if (!$rootScope.$$phase) {
                                $rootScope.$apply(function() {
                                    listenerFunc(isLandscape);
                                });
                            } else {
                                listenerFunc(isLandscape);
                            }
                        }
                    });
                }
            });
        };
        /**
        * @ngdoc method
        * @name mobile-toolkit-ra.service:raScreenSizeSvc#isLandScape
        * @methodOf mobile-toolkit-ra.service:raScreenSizeSvc
        * @returns {Boolean} whether current device is in landscape mode
        * @description fetch the current orientation value of the device.
        */
        raScreenSizeSvc.isLandScape = function() {
            return $window.matchMedia("(orientation: landscape)").matches;
        };
        return raScreenSizeSvc;
    } ];
});

// jsHint Global variables
/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raSidebar
 * @module mobile-toolkit-ra
 * @restrict E
 * @scope
 *
 * @param {Object=} config
 * An object providing initial configuration for this component. It can contain a subset of properties described on the
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc} page. Note that some of the properties can be
 * shared with other navigation components if present in the same group.
 *
 * The following properties affect this directive:
 * - **`[groupId]`**
 * - **`[username]`**
 * - **`[isSidebarVisible]`**
 * - **`[showSidebarUserIcon]`**
 *
 * The `config` object provides only initial values that control the directive's behavior and appearance.
 * If there is a need to alter them in some way at runtime, it should be done using
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc's methods}.
 *
 * @description
 * This directive is responsible for rendering and controlling the visibility of the sidebar component. The widget is
 * attached to the right edge of the screen and slides from right to left when shown.
 * A common use case for such a component is to provide a list of navigation links inside the sidebar which allow the
 * user to navigate through different views or routes inside the application.
 *
 * The component supports providing custom HTML content for the sidebar. The content needs to be wrapped inside the
 * **`<ra-sidebar>`** HTML tag and can be positioned using flexbox (**`raSidebar`** supports flexbox for
 * transcluded content).
 * More information on using a flexbox-based layout can be found {@link nonapi/flexboxLayout.md in this article}.
 * Consider using the {@link mobile-toolkit-ra.directive:raSidebarDefaultContent raSidebarDefaultContent} when you
 * need to provide only simple navigation or integrate the sidebar's content with the
 * {@link mobile-toolkit-ra.directive:raNavbarLarge raNavbarLarge}.
 *
 * The component internally uses logic provided by {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc}
 * and can be used for further control of the directive at runtime.
 *
 * The **raSidebar's** visibility can be controlled either manually using the
 * {@link mobile-toolkit-ra.service:raNavigationSvc raNavigationSvc.setConfig()} method, or can be handled
 * automatically by widgets congregated in one group and sharing the same group ID.
 *
 * # Grouping navigation components together
 *
 * The **raSidebar**,
 * {@link mobile-toolkit-ra.directive:raBreadcrumb raBreadcrumb},
 * {@link mobile-toolkit-ra.directive:raHorizontalBreadcrumb raHorizontalBreadcrumb},
 * {@link mobile-toolkit-ra.directive:raNavbar raNavbar} and
 * {@link mobile-toolkit-ra.directive:raNavbarLarge raNavbarLarge} can be easily coupled together
 * using a shared group ID.
 * Assigning these widgets to one common group ensures that they interact properly.
 * For example the *raBreadcrumb* and the *raHorizontalBreadcrumb* can share the same list of items, and one of them
 * can be displayed depending on the screen size (using CSS).
 * Grouping also relieves the user from writing additional code that would handle standard interactions between
 * the components, such as "hide the breadcrumb when the sidebar is open", etc. These interactions are provided
 * out-of-the-box if the components use a shared group ID.
 * By default, these widgets are assigned to `RA_NAV_GROUP.DEFAULT_GROUP_ID` if
 * the `config` object is not provided, or the `config.groupId` property is not set.
 *
 * <div class="alert alert-info" role="alert">
 * **Remember**: when created, the `raSidebar`,
 * {@link mobile-toolkit-ra.directive:raHorizontalBreadcrumb raHorizontalBreadcrumb},
 * {@link mobile-toolkit-ra.directive:raNavbar raNavbar},
 * {@link mobile-toolkit-ra.directive:raBreadcrumb raBreadcrumb} and
 * {@link mobile-toolkit-ra.directive:raNavbarLarge raNavbarLarge}
 * are assigned to the default **`RA_NAV_GROUP.DEFAULT_GROUP_ID`** group if no custom group ID is set.
 * </div>
 *
 * <div class="alert alert-info" role="alert">
 * **Notice**: the `raSidebar`, as opposed to the
 * {@link mobile-toolkit-ra.directive:raSidebarDefaultContent raSidebarDefaultContent},
 * transcludes the HTML content wrapped inside `<ra-sidebar>` tag.
 * </div>
 *
 * @example
 *
 * # Without Flexbox
 *
 * A sample usage of the sidebar without flexbox. The example shows also the usage of the common configuration
 * which has been provided by the sidebar to the raNavigationSvc.
 *
 * <example module="exampleApp">
 * <file name="style.css">
 * .ra-sidebar-relative-container {
 *     position: relative;
 *     width:  100%;
 *     height: 350px;
 * }
 * </file>
 * <file name="index.html">
 * <div ng-controller="exampleCtrl" class="ra-sidebar-container">
 *     <div class="ra-sidebar-relative-container">
 *         <ra-sidebar config="sidebarConfig">
 *             <!-- BEGIN your sidebar content here -->
 *             <div class="ra-side-bar-content">
 *                 <div class="list-group ra-list-group">
 *                     <a class="list-group-item ra-list-group-item">Home</a>
 *                     <a class="list-group-item ra-list-group-item">About</a>
 *                 </div>
 *             </div>
 *             <!-- END of sidebar content -->
 *         </ra-sidebar>
 *     </div>
 *     <button ng-click="hideShowSidebarUsingService();">
 *         Toggle sidebar visibility
 *     </button>
 * </div>
 * </file>
 * <file name="script.js">
 * var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 *
 * myModule.controller('exampleCtrl', ['$scope', 'raNavigationSvc', function ($scope, raNavigationSvc) {
 *     "use strict";
 *     var groupId = "sidebarGroupId",
 *         navigationConfig,
 *         username = 'Sample user name',
 *         stateObj,
 *         isVisible;
 *
 *     $scope.sidebarConfig = {
 *         groupId: groupId,
 *         username: username,
 *         isSidebarVisible: true,
 *         showSidebarUserIcon: false
 *     };
 *
 *     $scope.hideShowSidebarUsingService = function () {
 *          isVisible = !isVisible;
 *          raNavigationSvc.setConfig({isSidebarVisible: isVisible}, groupId);
 *      };
 *
 *      // register the sidebar in the service
 *      stateObj = raNavigationSvc.register($scope.sidebarConfig);
 *
 *      // keeps isVisible local variable in sync with sidebar's state
 *      stateObj.promise.then(null, null, function onNotify(newParams) {
 *          isVisible = newParams.isSidebarVisible;
 *      });
 *
 *      $scope.$on('$destroy',function () {
 *         stateObj.unregister();
 *      });
 *
 * }]);
 * </file>
 * </example>
 *
 * # With Flexbox
 *
 * A sample usage of the sidebar based on a flexbox layout. The example shows the possibility of defining
 * the sidebar’s own configuration without using the service.
 *
 * <example module="exampleApp">
 * <file name="style.css">
 * .ra-sidebar-container {
 *     width:  100%;
 *     height: 370px;
 * }
 * </file>
 * <file name="index.html">
 * <div ng-controller="exampleCtrl" class="ra-sidebar-container ra-flex-column">
 *    <div class="ra-flex-item-dynamic ra-flex-column ra-sidebar-relative-helper">
 *       <ra-sidebar config="sidebarConfig">
 *          <!-- BEGIN your sidebar content here -->
 *          <div class="ra-flex-item-dynamic ra-scroll-y ra-side-bar-content">
 *             <div class="list-group ra-list-group">
 *                <a class="list-group-item ra-list-group-item">Home</a>
 *                <a class="list-group-item ra-list-group-item">About</a>
 *             </div>
 *          </div>
 *          <!-- END of sidebar content -->
 *       </ra-sidebar>
 *    </div>
 *    <div class="panel-default">
 *        <button ng-click="hideShowSidebarUsingService()">
 *            Toggle sidebar visibility
 *        </button>
 *    </div>
 * </div>
 * </file>
 * <file name="script.js">
 * var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 *
 * myModule.controller('exampleCtrl', ['$scope', 'raNavigationSvc', function ($scope, raNavigationSvc) {
 *     "use strict";
 *     var groupId = "sidebarGroupId",
 *         username = 'Sample user name',
 *         stateObj,
 *         isVisible;
 *
 *     $scope.sidebarConfig = {
 *         groupId: groupId,
 *         username: username,
 *         isSidebarVisible: true
 *     };
 *
 *     $scope.hideShowSidebarUsingService = function () {
 *          isVisible = !isVisible;
 *          raNavigationSvc.setConfig({isSidebarVisible: isVisible}, groupId);
 *      };
 *
 *      // register only the group in the service
 *      stateObj = raNavigationSvc.register({groupId: groupId});
 *
 *      // keeps isVisible local variable in sync with sidebar's state
 *      stateObj.promise.then(null, null, function onNotify(newParams) {
 *          isVisible = newParams.isSidebarVisible;
 *      });
 *
 *      $scope.$on('$destroy',function () {
 *         stateObj.unregister();
 *      });
 * }]);
 * </file>
 * </example>
 *
 *
 */
angular.module("mobile-toolkit-ra").directive("raSidebar", [ "$templateCache", "$animate", "raNavigationSvc", function($templateCache, $animate, raNavigationSvc) {
    "use strict";
    return {
        restrict: "E",
        transclude: true,
        scope: {
            config: "=?"
        },
        template: $templateCache.get("raSidebar/raSidebar.tpl.html"),
        link: function(scope, element) {
            var animatedElement = element.findElement(".ra-rightside"), absHelperElem = element.findElement(".ra-sidebar-absolute-helper"), config = scope.config || {}, groupId = config.groupId, currentAnimatePromise, isVisible = false;
            /**
                     * Helper function that shows or hides sidebar.
                     * @param {boolean} doShow If set to true then shows sidebar, otherwise will hide.
                     */
            function showHideSidebar(doShow) {
                if (currentAnimatePromise !== undefined) {
                    $animate.cancel(currentAnimatePromise);
                    currentAnimatePromise = undefined;
                }
                if (doShow) {
                    absHelperElem.addClass("show-sidebar");
                    currentAnimatePromise = $animate.addClass(animatedElement, "ra-rightside-anim");
                    currentAnimatePromise.then(function done() {
                        currentAnimatePromise = undefined;
                    });
                } else {
                    currentAnimatePromise = $animate.removeClass(animatedElement, "ra-rightside-anim");
                    currentAnimatePromise.then(function done() {
                        if (!isVisible) {
                            absHelperElem.removeClass("show-sidebar");
                            currentAnimatePromise = undefined;
                        }
                    });
                }
            }
            config.isNavbarHamButtonVisible = true;
            // If not provided the value of isSidebarVisible
            // sidebar should be not visible by default
            config.isSidebarVisible = !!config.isSidebarVisible;
            scope.stateObj = raNavigationSvc.register(config);
            scope.params = scope.stateObj.stateParams;
            scope.stateObj.promise.then(null, null, function(currentParams) {
                var stateSidebarVisibility = currentParams.isSidebarVisible;
                if (isVisible !== stateSidebarVisibility) {
                    isVisible = stateSidebarVisibility;
                    showHideSidebar(isVisible);
                }
            });
            scope.hideSidebar = function() {
                raNavigationSvc.setConfig({
                    isSidebarVisible: false
                }, groupId);
            };
            scope.$on("$destroy", function() {
                scope.stateObj.unregister();
            });
        },
        replace: false
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raSidebarDefaultContent", [ "$templateCache", "raNavigationSvc", function($templateCache, raNavigationSvc) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            config: "=?"
        },
        template: $templateCache.get("raSidebarDefaultContent/raSidebarDefaultContent.tpl.html"),
        link: function(scope) {
            var config;
            config = scope.config = scope.config || {};
            scope.config.isNavigationItemsVisible = scope.config.isNavigationItemsVisible !== false;
            scope.onItemClick = raNavigationSvc.onItemClick;
            scope.onBrandingLogoClick = function() {
                raNavigationSvc.onBrandingLogoClick(config.groupId);
            };
            config.isNavbarHamButtonVisible = true;
            scope.params = raNavigationSvc.setConfig(config);
        }
    };
} ]);

/*global angular*/
/*global getComputedStyle*/
/* jshint -W101 */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raSplitter
 * @module mobile-toolkit-ra
 * @restrict A
 * @param {Object=} ra-splitter
 * The ra-splitter attribute can take an optional config object containing the following properties:
 *
 *
 * - **[resizable]** - `{boolean}` - Defining whether the splitter can be moved by drag and drop or by touch gestures.
 * The default value is `true`.
 * - **[redrawOnDrag]** - `{boolean}` - Defining whether to redraw the panes contents while dragging.
 * The default value is `true`.
 * - **[onStatusChange]** - `{function}` - Defining a callback function that will be invoked whenever the user is moving the splitter.
 * The function is called many times during a single splitter move operation, passing the current splitter state object as the only function parameter named `splitterStatus`.
 *     - **splitterStatus** - `{object}` - Indicating a state object comprised of the following properties:
 *          - **collapsed1** - {boolean} - Indicating whether the first pane is collapsed
 *          - **collapsed2** - {boolean} - Indicating whether the second pane is collapsed
 *          - **pane1Size** - {number} - Indicating the size of the first pane (the size meaning the height of the vertically oriented splitter and the width of the horizontally oriented one)
 *          - **pane2Size** - {number} - Indicating the size of the second pane (the size meaning the height of the vertically oriented splitter and the width of the horizontally oriented one)
 *
 * @param {function=} set-api
 * A callback function that returns the API object. It should take a single parameter named `api`
 * that will contain the API object when called.
 *
 * The object passed into the callback has the following functions:
 *
 * - **getStatus()** - `{function}` -
 *   Indicating a function that returns the `splitterStatus` object described above, the same as the `onStatusChange` function does.
 * - **collapsePane(paneNum)** - `{function}` -
 *   Indicating a function that collapses a given pane indicated by the `paneNum` property as 1 or 2.
 * - **expandPane(paneNum)** - `{function}` -
 *   Indicating a function that expands previously collapsed pane indicated by the `paneNum` property as 1 or 2.
 *
 * @description
 * The ra-splitter is a UI widget of the attribute type that splits the contents of the container created
 * with the [ra-flex-row](#/nonapi/flexboxLayout.md#flexbox-and-the-mft-toolkit_how-to-use-the-flexbox-based-css-in-the-mft-toolkit_flex-containers)
 * or [ra-flex-column](#/nonapi/flexboxLayout.md#flexbox-and-the-mft-toolkit_how-to-use-the-flexbox-based-css-in-the-mft-toolkit_flex-containers)
 * classes into two panes.
 * The widget requires the panes to be defined as two immediate child elements
 * which should be of the [ra-flex-item-dynamic](#/nonapi/flexboxLayout.md#flexbox-and-the-mft-toolkit_how-to-use-the-flexbox-based-css-in-the-mft-toolkit_flex-items)
 * or [ra-flex-item-static](#/nonapi/flexboxLayout.md#flexbox-and-the-mft-toolkit_how-to-use-the-flexbox-based-css-in-the-mft-toolkit_flex-items) flex items type.
 * The panes also need to have the {@link mobile-toolkit-ra.directive:raSplitterPane ra-splitter-pane}
 * attribute type directive defined for each pane flex item.
 * There are two types of `ra-splitter` depending on the container type:
 * 1. A horizontal splitter, defined by `ra-flex-row`.
     <pre>
        <div class="ra-flex-row" ra-splitter>
             <div class="ra-flex-item-[dynamic|static]” ra-splitter-pane>
                <!-- first pane content -->
             </div>
             <div class="ra-flex-item-[dynamic|static]” ra-splitter-pane>
                <!-- second pane content -->
             </div>
        </div>
     </pre>
 * 2. A vertical splitter, defined by `ra-flex-column`.
     <pre>
         <div class="ra-flex-column" ra-splitter>
             <div class="ra-flex-item-[dynamic|static]” ra-splitter-pane>
                <!-- first pane content -->
             </div>
             <div class="ra-flex-item-[dynamic|static]” ra-splitter-pane>
                <!-- second pane content -->
             </div>
         </div>
     </pre>

 @example

 - A horizontal splitter example with both dynamic collapsing panes with `minSize` limits.
 <example module="exampleApp">
 <file name="index.html">
 <div class="ra-flex-column" style="height:150px">
     <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter>
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{collapsible: true, minSize: 50}">
             <div class="ra-flex-item-dynamic ra-scroll-y">
                 <div>minSize: 50px</div>
                 <div class="tall-content-item">1 - dynamic - tall content</div>
             </div>
         </div>
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{collapsible: true, minSize: 100}">
             <div class="ra-flex-item-dynamic ra-scroll-y">
                 <div>minSize: 100px</div>
                 <div class="tall-content-item">2 - dynamic - tall content</div>
             </div>
         </div>
     </div>
 </div>
 </file>
 <file name="style.css">
    ** {
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -o-user-select: none;
        user-select: none;
    }
    body {
        //overflow: hidden;
        //background-color: red;
    }
 </file>
 <file name="script.js">
 var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 </file>
 </example>

 - A horizontal splitter example with the left static collapsing pane and the right dynamic one.
   The splitter status is shown in the right pane in runtime.
 <example module="exampleApp2">
 <file name="index.html">
 <div class="ra-flex-column" style="height:150px" ng-controller="splitterCtrl">
     <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter="{onStatusChange: setRuntimeStatus}">
         <div class="ra-flex-item-static ra-flex-column" ra-splitter-pane="{collapsible: true}">
             <div class="ra-flex-item-dynamic ra-scroll-y">
                 <div class="tall-content-item">static - tall content</div>
             </div>
         </div>
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
             <div class="ra-flex-item-dynamic ra-scroll-y">
                 <div>Current splitterStatus:</div>
                 <div>{{runtimeSplitterStatus}}</div>
             </div>
         </div>
     </div>
 </div>
 </file>
 <file name="style.css">
 </file>
 <file name="script.js">
 var myModule = angular.module('exampleApp2', ['mobile-toolkit-ra'])
 .controller('splitterCtrl', ['$scope', function ($scope) {

    $scope.setRuntimeStatus = function(status) {
        $scope.runtimeSplitterStatus = status;
    };
}]);
 </file>
 </example>

 - A vertical splitter example with the upper static pane and the right dynamic one, both collapsing.
 <example module="exampleApp3">
 <file name="index.html">
 <div class="ra-flex-column" style="height:200px">
     <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter>
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{collapsible: true}">
             <div class="ra-flex-item-dynamic ra-scroll-y">
                <div class="tall-content-item">1 - dynamic - tall content</div>
            </div>
         </div>
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{collapsible: true}">
             <div class="ra-flex-item-dynamic ra-scroll-y">
                 <div class="tall-content-item">2 - dynamic - tall content</div>
             </div>
         </div>
     </div>
 </div>
 </file>
 <file name="style.css">
 </file>
 <file name="script.js">
 var myModule = angular.module('exampleApp3', ['mobile-toolkit-ra']);
 </file>
 </example>

 - A complex example with 4 nested splitters.
 <example module="exampleApp4">
 <file name="index.html">
     <div class="ra-flex-column" style="height:200px">
         <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter>
             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                 <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter>
                     <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                         <div class="ra-flex-item-dynamic ra-scroll-y">
                            <div class="tall-content-item">dynamic - tall content</div>
                         </div>
                     </div>
                     <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                        <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter>
                             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                                 <div class="ra-flex-item-dynamic ra-scroll-y">
                                    <div class="tall-content-item">dynamic - tall content</div>
                                 </div>
                             </div>
                             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                                 <div class="ra-flex-item-dynamic ra-scroll-y">
                                    <div class="tall-content-item">dynamic - tall content</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                 </div>
             </div>
             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                 <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter>
                     <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                         <div class="ra-flex-item-dynamic ra-scroll-y">
                            <div class="tall-content-item">dynamic - tall content</div>
                         </div>
                     </div>
                     <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                         <div class="ra-flex-item-dynamic ra-scroll-y">
                            <div class="tall-content-item">dynamic - tall content</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </file>
 <file name="style.css">
 </file>
 <file name="script.js">
    var myModule = angular.module('exampleApp4', ['mobile-toolkit-ra']);
 </file>
 </example>

 - Example which has set the `minSize`, the `maxSize` and the `initialSize` properties for the right pane and disabled `redrawOnDrag` property.
 <example module="exampleApp">
 <file name="index.html">
         <div class="ra-flex-column" style="height:150px">
             <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter="{redrawOnDrag: false}">
                 <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                     <div class="ra-flex-item-dynamic ra-scroll-y">
                        <div class="tall-content-item">1 - dynamic - tall content</div>
                    </div>
                 </div>
                  <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{minSize: 100, maxSize:500, initialSize: 500}">
                     <div class="ra-flex-item-dynamic ra-scroll-y">
                        <div>minSize: 100, maxSize:500, initialSize: 500</div>
                        <div class="tall-content-item">2 - dynamic - tall content</div>
                     </div>
                 </div>
             </div>
         </div>
 </file>
 <file name="style.css">
 ** {
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -o-user-select: none;
        user-select: none;
    }
 body {
        //overflow: hidden;
        //background-color: red;
    }
 </file>
 <file name="script.js">
 var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 </file>
 </example>


 - Example of the not resizable splitter controlled by the splitter's api operations.
   The initial size is set on the left panel.
 <example module="exampleApp">
 <file name="index.html">
     <div class="ra-flex-column" style="height:190px" ng-controller="splitterCtrl">
         <div class="ra-flex-item-static ra-flex-row">
             <button ng-click="hideShowPanes(1, true)">Collapse first</button>
             <button ng-click="hideShowPanes(1, false)">Expand first</button>
             <button ng-click="hideShowPanes(2, true)">Collapse second</button>
             <button ng-click="hideShowPanes(2, false)">Expand second</button>
             <button ng-click="getStatus(2, false)">Get status</button>
         </div>
         <div class="ra-flex-item-dynamic ra-flex-row" set-api="setSplitterApi(api)"
              ra-splitter="{resizable: false}">
             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane="{initialSize: 200}">
                 <div class="ra-flex-item-dynamic ra-scroll-y">
                    <div>initialSize: 200</div>
                    <div class="tall-content-item">1 - dynamic - tall content</div>
                 </div>
             </div>
             <div class="ra-flex-item-dynamic ra-flex-column" ra-splitter-pane>
                <div class="ra-flex-item-dynamic ra-scroll-y">
                    <div>splitter status (Click "Get status"):</div>
                    <div>{{splitterStatus}}</div>
                 </div>
             </div>
         </div>
     </div>
 </file>
 <file name="style.css">
 ** {
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -o-user-select: none;
        user-select: none;
    }
 body {
        //overflow: hidden;
        //background-color: red;
    }
 </file>
 <file name="script.js">
 angular.module('exampleApp', ['mobile-toolkit-ra'])
 .controller('splitterCtrl', ['$scope', function ($scope) {
    var splitterApi;

    $scope.setSplitterApi = function (api) {
        splitterApi = api;
    };

    $scope.hideShowPanes = function(paneNum, collapse) {
        if (collapse) {
            splitterApi.collapsePane(paneNum);
        } else {
            splitterApi.expandPane(paneNum);
        }
    };

    $scope.getStatus = function() {
       $scope.splitterStatus = splitterApi.getStatus();
    };
}]);
 </file>
 </example>
 */
/* jshint +W101 */
angular.module("mobile-toolkit-ra").directive("raSplitter", [ "$compile", "$templateCache", "$window", "$timeout", "$log", "raTouchSvc", function($compile, $templateCache, $window, $timeout, $log, raTouchSvc) {
    "use strict";
    return {
        restrict: "A",
        scope: {
            raSplitter: "=*?",
            setApi: "&"
        },
        controller: [ "$scope", function($scope) {
            $scope.panes = [];
            this.addPane = function(pane) {
                if ($scope.panes.length > 1) {
                    $log.warn("ra-splitter can have only two ra-splitter-pane elements");
                    return;
                }
                $scope.panes.push(pane);
            };
        } ],
        link: function(scope, containerElem) {
            var dontResizeOnDrag = scope.raSplitter && scope.raSplitter.redrawOnDrag === false;
            var pane1 = scope.panes[0];
            var pane2 = scope.panes[1];
            var vertical = containerElem.hasClass("ra-flex-column");
            var splitterElement = angular.element($templateCache.get("raSplitter/raSplitter.tpl.html"));
            var documentEventsHandler;
            var handlerCompiled = $compile(splitterElement)(scope);
            var overButtonTouch = false;
            var resizeButtons = splitterElement.findElements(".ra-splitter-toggle");
            var wideHandler = splitterElement.findElement(".ra-split-wider-handler");
            var absoluteGripper = angular.element(splitterElement[1]);
            var containerVisibilityOnInit = containerElem[0].style.visibility;
            var splitterInitialized = false;
            //this is variable for the splitter status object containing current splitter parameters defined below.
            //The object is intended to be visible outside the splitter and updated by onStatusChange function.
            var currentStatus;
            var splitterAPI = {
                getStatus: function() {
                    return angular.copy(currentStatus);
                },
                collapsePane: function(paneNum) {
                    collapseExpandPane(paneNum, true);
                },
                expandPane: function(paneNum) {
                    collapseExpandPane(paneNum, false);
                }
            };
            if (!pane1 || !pane2) {
                //we have only one or no panes. Do nothing;
                $log.warn("the ra-splitter requires the 2 ra-splitter-pane child elements");
                return;
            }
            if (!vertical && !containerElem.hasClass("ra-flex-row")) {
                $log.warn("the ra-splitter host element should contain " + "either the 'ra-flex-column' or the 'ra-flex-row' class");
                return;
            }
            containerElem[0].style.visibility = "hidden";
            //minimize jumping effect while sizes/visibility setting
            if (typeof scope.setApi === "function") {
                scope.setApi({
                    api: splitterAPI
                });
            }
            scope.resizable = !scope.raSplitter || scope.raSplitter.resizable !== false;
            pane1.elem.after(handlerCompiled);
            scope.collapsed1 = false;
            scope.collapsed2 = false;
            scope.dragging = false;
            scope.vertical = vertical;
            currentStatus = {
                collapsed1: scope.collapsed1,
                collapsed2: scope.collapsed2,
                pane1Size: 0,
                pane2Size: 0
            };
            scope.onHidePaneClick = function(ev, pane1Clicked) {
                ev.preventDefault();
                if (pane1Clicked === true) {
                    collapseExpandPane(1, !scope.collapsed1);
                } else {
                    collapseExpandPane(2, !scope.collapsed2);
                }
            };
            if (scope.resizable) {
                containerElem.on("mousemove touchmove", function(ev) {
                    if (scope.dragging) {
                        ev.preventDefault();
                    } else {
                        //do not prevent while not dragging to allow select content of the container
                        return;
                    }
                    scope.$apply(function() {
                        var panesSizes = getCurrentPanesSizes(raTouchSvc.getTouchClickPosition(ev));
                        verifySizeLimits(panesSizes);
                        moveSplitter(panesSizes);
                        if (!dontResizeOnDrag) {
                            resizePanes(panesSizes);
                        }
                    });
                });
                resizeButtons.on("mousedown touchstart", function() {
                    overButtonTouch = true;
                });
                wideHandler.on("mousedown touchstart", function(ev) {
                    scope.$apply(function() {
                        var panesSizes;
                        if (overButtonTouch || scope.collapsed1 || scope.collapsed2) {
                            return;
                        }
                        panesSizes = getCurrentPanesSizes(raTouchSvc.getTouchClickPosition(ev));
                        verifySizeLimits(panesSizes);
                        moveSplitter(panesSizes);
                        scope.dragging = true;
                    });
                });
                documentEventsHandler = angular.element($window.document).on("mouseup touchend", function(ev) {
                    overButtonTouch = false;
                    if (!scope.dragging) {
                        return;
                    }
                    scope.$apply(function() {
                        var panesSizes;
                        if (dontResizeOnDrag) {
                            //couldn't resize while dragging so resizing at the end
                            panesSizes = getCurrentPanesSizes(raTouchSvc.getTouchClickPosition(ev));
                            verifySizeLimits(panesSizes);
                            moveSplitter(panesSizes);
                            resizePanes(panesSizes);
                        }
                        scope.dragging = false;
                    });
                });
                containerElem.on("$destroy", function() {
                    angular.element($window.document).off("resize", documentEventsHandler);
                    splitterElement[0].removeEventListener("animationstart", firstInit, false);
                    splitterElement[0].removeEventListener("webkitAnimationStart", firstInit, false);
                    splitterElement[0].removeEventListener("MSAnimationStart", firstInit, false);
                    containerElem.off("mousemove touchmove");
                    resizeButtons.off("mousedown touchstart");
                    wideHandler.off("mousedown touchstart");
                });
            }
            splitterElement[0].addEventListener("animationstart", firstInit, false);
            //w3c
            splitterElement[0].addEventListener("webkitAnimationStart", firstInit, false);
            //ios <=8.4
            splitterElement[0].addEventListener("MSAnimationStart", firstInit, false);
            //ie10
            $timeout(function() {
                var panesSizes = getCurrentPanesSizes();
                if (panesSizes.bothPanesLength > 0) {
                    firstInit();
                }
            }, 0);
            function firstInit() {
                var panesSizes;
                if (splitterInitialized) {
                    return;
                }
                splitterInitialized = true;
                determineDynamicOrStatic(pane1);
                determineDynamicOrStatic(pane2);
                setButtonsVisibility(true);
                panesSizes = getCurrentPanesSizes();
                setInitialPanesSizes(panesSizes);
                verifySizeLimits(panesSizes);
                resizePanes(panesSizes);
                setInitialPanesVisibility();
                containerElem[0].style.visibility = containerVisibilityOnInit;
            }
            function determineDynamicOrStatic(pane) {
                pane.isDynamic = pane.elem.hasClass("ra-flex-item-dynamic");
                if (!pane.isDynamic && !pane.elem.hasClass("ra-flex-item-static")) {
                    $log.warn("the ra-splitter-pane host element should contain " + "either the 'ra-flex-item-dynamic' or the 'ra-flex-item-static' class");
                }
            }
            function setInitialPanesVisibility() {
                if (pane1.initiallyCollapsed && pane2.initiallyCollapsed) {
                    $log.warn("the both panes can't be initially collapsed in the same time");
                } else if (pane1.initiallyCollapsed) {
                    if (canCollapsePane(1)) {
                        collapseExpandPane(1, true);
                    } else {
                        $log.warn("can't initially hide the pane #1" + " because its neighbor isn't type of the ra-flex-item-dynamic");
                    }
                } else if (pane2.initiallyCollapsed) {
                    if (canCollapsePane(2)) {
                        collapseExpandPane(2, true);
                    } else {
                        $log.warn("can't initially hide the pane #2" + " because its neighbor isn't type of the ra-flex-item-dynamic");
                    }
                }
            }
            function canCollapsePane(paneNum) {
                var ret = false;
                if (paneNum === 1) {
                    ret = pane2.isDynamic;
                } else {
                    ret = pane1.isDynamic;
                }
                return ret;
            }
            function setButtonsVisibility() {
                var arrowForwardDownVisible = false, arrowBackUpVisible = false;
                if (!scope.collapsed1 && !scope.collapsed2) {
                    arrowForwardDownVisible = pane2.collapsible && canCollapsePane(2);
                    arrowBackUpVisible = pane1.collapsible && canCollapsePane(1);
                } else if (scope.collapsed1) {
                    arrowForwardDownVisible = pane1.collapsible;
                } else if (scope.collapsed2) {
                    arrowBackUpVisible = pane2.collapsible;
                }
                scope.arrowForwardDownVisible = arrowForwardDownVisible;
                scope.arrowBackUpVisible = arrowBackUpVisible;
            }
            function collapseExpandPane(paneNum, collapse) {
                if (paneNum === 1) {
                    if (!collapse && scope.collapsed1) {
                        pane1.elem[0].style.display = "";
                        scope.collapsed1 = false;
                        pane2.broadcastResize();
                    } else if (collapse && !scope.collapsed1) {
                        if (canCollapsePane(1)) {
                            pane1.elem[0].style.display = "none";
                            scope.collapsed1 = true;
                            pane2.elem[0].style.display = "";
                            scope.collapsed2 = false;
                            pane2.broadcastResize();
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                } else if (paneNum === 2) {
                    if (!collapse && scope.collapsed2) {
                        pane2.elem[0].style.display = "";
                        scope.collapsed2 = false;
                        pane1.broadcastResize();
                    } else if (collapse && !scope.collapsed2) {
                        if (canCollapsePane(2)) {
                            pane2.elem[0].style.display = "none";
                            scope.collapsed2 = true;
                            pane1.elem[0].style.display = "";
                            scope.collapsed1 = false;
                            pane1.broadcastResize();
                        }
                    } else {
                        return;
                    }
                } else {
                    $log.warn("there are only paneNum === 1 and paneNum === 2 available");
                    return;
                }
                setButtonsVisibility();
                currentStatus.collapsed1 = scope.collapsed1;
                currentStatus.collapsed2 = scope.collapsed2;
                setCurrentStatusOutside();
            }
            function setInitialPanesSizes(panesSizes) {
                if (pane1.initialSize > 0 || pane2.initialSize > 0) {
                    if (pane1.initialSize > 0 && pane2.initialSize > 0) {
                        //initialSize param for both panes - in this case the ratio of the both sizes is calculated
                        // assuming that both initial sizes should equal 100% of current pane size
                        panesSizes.pane1Size = pane1.initialSize * panesSizes.bothPanesLength / (pane1.initialSize + pane2.initialSize);
                        panesSizes.pane2Size = panesSizes.bothPanesLength - panesSizes.pane1Size;
                    } else if (pane1.initialSize > 0) {
                        panesSizes.pane1Size = pane1.initialSize;
                        panesSizes.pane2Size = panesSizes.bothPanesLength - panesSizes.pane1Size;
                    } else if (pane2.initialSize > 0) {
                        panesSizes.pane2Size = pane2.initialSize;
                        panesSizes.pane1Size = panesSizes.bothPanesLength - panesSizes.pane2Size;
                    }
                }
            }
            function verifySizeLimits(panesSizes) {
                if (panesSizes.pane1Size < pane1.minSize) {
                    panesSizes.pane1Size = pane1.minSize;
                    panesSizes.pane2Size = panesSizes.bothPanesLength - panesSizes.pane1Size;
                } else if (panesSizes.pane2Size < pane2.minSize) {
                    panesSizes.pane2Size = pane2.minSize;
                    panesSizes.pane1Size = panesSizes.bothPanesLength - panesSizes.pane2Size;
                }
                if (pane1.maxSize > 0) {
                    if (panesSizes.pane1Size > pane1.maxSize) {
                        panesSizes.pane1Size = pane1.maxSize;
                        panesSizes.pane2Size = panesSizes.bothPanesLength - panesSizes.pane1Size;
                    }
                }
                if (pane2.maxSize > 0) {
                    if (panesSizes.pane2Size > pane2.maxSize) {
                        panesSizes.pane2Size = pane2.maxSize;
                        panesSizes.pane1Size = panesSizes.bothPanesLength - panesSizes.pane2Size;
                    }
                }
            }
            function setCurrentStatusOutside() {
                if (scope.raSplitter && typeof scope.raSplitter.onStatusChange === "function") {
                    scope.raSplitter.onStatusChange(angular.copy(currentStatus));
                }
            }
            function getCurrentPanesSizes(xy) {
                var ret = {};
                var pane1Bounds = pane1.elem[0].getBoundingClientRect(), pane2Bounds = pane2.elem[0].getBoundingClientRect();
                ret.pane1Width = pane1Bounds.width;
                ret.pane1Height = pane1Bounds.height;
                if (vertical) {
                    ret.pane1Size = pane1Bounds.height;
                    ret.pane2Size = pane2Bounds.height;
                } else {
                    ret.pane1Size = pane1Bounds.width;
                    ret.pane2Size = pane2Bounds.width;
                }
                ret.bothPanesLength = ret.pane1Size + ret.pane2Size;
                if (xy !== undefined) {
                    //modify panels sizes using current xy position
                    if (vertical) {
                        ret.pane1Size = xy.y - pane1Bounds.top;
                    } else {
                        ret.pane1Size = xy.x - pane1Bounds.left;
                    }
                    ret.pane2Size = ret.bothPanesLength - ret.pane1Size;
                }
                return ret;
            }
            function moveSplitter(panesSizes) {
                var containerComputedStyle, splitterOffset;
                containerComputedStyle = getComputedStyle(containerElem[0], null);
                if (vertical) {
                    splitterOffset = panesSizes.pane1Size + parseFloat(containerComputedStyle.paddingTop);
                    absoluteGripper.css("top", splitterOffset + "px");
                    absoluteGripper.css("width", panesSizes.pane1Width + "px");
                } else {
                    splitterOffset = panesSizes.pane1Size + parseFloat(containerComputedStyle.paddingLeft);
                    absoluteGripper.css("left", splitterOffset + "px");
                    absoluteGripper.css("height", panesSizes.pane1Height + "px");
                }
            }
            function resizePanes(panesSizes) {
                var splitByPercentage = pane1.isDynamic && pane2.isDynamic;
                if (!splitByPercentage) {
                    var firstPaneStatic = !pane1.isDynamic;
                    var staticPane = firstPaneStatic ? pane1 : pane2;
                    staticPane.elem.css(vertical ? "height" : "width", (firstPaneStatic ? panesSizes.pane1Size : panesSizes.pane2Size) + "px");
                } else {
                    setFlexBasis(pane1.elem, panesSizes.pane1Size);
                    setFlexBasis(pane2.elem, panesSizes.pane2Size);
                }
                pane1.broadcastResize();
                pane2.broadcastResize();
                currentStatus.pane1Size = panesSizes.pane1Size;
                currentStatus.pane2Size = panesSizes.pane2Size;
                setCurrentStatusOutside();
            }
            function setFlexBasis(theElement, value) {
                theElement.css("flex-basis", value + "px");
                theElement.css("-webkit-flex-basis", value + "px");
                theElement.css("-ms-flex-preferred-size", value + "px");
            }
        }
    };
} ]).directive("raSplitterPane", [ "LAYOUT_EVENTS", "$log", function(LAYOUT_EVENTS, $log) {
    "use strict";
    return {
        restrict: "A",
        require: "^raSplitter",
        scope: {
            raSplitterPane: "=*?"
        },
        link: function(scope, element, attrs, raSplitterCtrl) {
            var minSize = scope.raSplitterPane && scope.raSplitterPane.minSize > 0 ? scope.raSplitterPane.minSize : 0;
            var maxSize = scope.raSplitterPane && scope.raSplitterPane.maxSize > 0 ? scope.raSplitterPane.maxSize : -1;
            var initialSize = scope.raSplitterPane && scope.raSplitterPane.initialSize > 0 ? scope.raSplitterPane.initialSize : -1;
            var initiallyCollapsed = scope.raSplitterPane && scope.raSplitterPane.initiallyCollapsed === true;
            if (maxSize !== -1 && minSize > 0 && maxSize < minSize) {
                $log.warn("ra-splitter-pane: the maxSize parameter should be greater than the minSize");
                return;
            }
            if (initialSize !== -1 && minSize > 0 && initialSize < minSize) {
                $log.warn("ra-splitter-pane: the initialSize parameter should be greater than or equal to the minSize");
                return;
            }
            if (initialSize !== -1 && maxSize !== -1 && initialSize > maxSize) {
                $log.warn("ra-splitter-pane: the initialSize parameter should be less than or equal to the maxSize");
                return;
            }
            raSplitterCtrl.addPane({
                elem: element,
                isDynamic: true,
                //to be really determined later on by the ra-splitter
                collapsible: scope.raSplitterPane && scope.raSplitterPane.collapsible,
                broadcastResize: function() {
                    scope.$parent.$broadcast(LAYOUT_EVENTS.ELEMENT_RESIZE);
                },
                minSize: minSize,
                maxSize: maxSize,
                initialSize: initialSize,
                initiallyCollapsed: initiallyCollapsed
            });
        }
    };
} ]);

// jsHint Global variables
/* global angular */
angular.module("mobile-toolkit-ra").directive("raTabletNavbar", [ "$templateCache", "raTabletNavbarSvc", "RA_NAV_GROUP", function($templateCache, raTabletNavbarSvc, RA_NAV_GROUP) {
    "use strict";
    return {
        restrict: "A",
        scope: {
            config: "=?"
        },
        template: $templateCache.get("raTabletNavbar/raTabletNavbar.tpl.html"),
        link: function(scope) {
            var config = scope.config || {}, groupId = config.groupId || RA_NAV_GROUP.DEFAULT_GROUP_ID;
            raTabletNavbarSvc.register(groupId, config).then(null, null, function stateChangeNotify(params) {
                scope.logopath = params.logoPath;
                scope.logolinkadd = params.linkAddress;
                scope.itemsList = params.itemsList;
                scope.subtitle = params.subtitle;
                scope.dispath = params.displayPath;
                scope.hasDispath = String(scope.dispath).length > 0;
                scope.acciconpath = params.accessRightIcon;
                scope.acciconMsg = params.accessRightIconMsg;
            });
            scope.invokeDoAction = function(event, actionItem) {
                if (angular.isFunction(actionItem.doAction)) {
                    event.preventDefault();
                    actionItem.doAction();
                }
            };
            scope.clickDisplayPathItem = function(event, id, last) {
                if (!last) {
                    id = Number(id) || 0;
                    raTabletNavbarSvc.setTitle(groupId, scope.dispath.slice(1, id));
                } else {
                    event.preventDefault();
                }
            };
            scope.$on("$destroy", function() {
                raTabletNavbarSvc.unregister(groupId);
            });
            raTabletNavbarSvc.updateState(groupId);
        },
        replace: false
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").factory("raTabletNavbarSvc", [ "$q", function($q) {
    "use strict";
    var //hashTable like object which keeps state of raNavbar directive(s)
    states = {};
    /**
         * @name mobile-toolkit-ra.raTabletNavbarSvc#getState
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         *         A group can contain any subset of
         * @param {boolean=} [createIfNotExists] Creates the parameters object if it doesn't exist.
         * @returns {Object} set of parameters + eventDefer object used for communication with the widget.
         * @description
         * Returns state object of the {@link mobile-toolkit-ra.directive.raNavbar raNavbar} widget if such exists,
         * or creates a new state object, and returns it if object doesn't exist and `createIfNotExists` parameter is
         * `true`.
         */
    function getState(groupId, createIfNotExists) {
        if (!states[groupId] && createIfNotExists) {
            states[groupId] = {
                params: {
                    logoPath: "",
                    linkAddress: "",
                    itemsList: [],
                    //manages title content
                    displayPath: "",
                    //manages chevron state up/down
                    accessRightIcon: "",
                    accessRightIconMsg: "",
                    subtitle: ""
                },
                eventDefer: $q.defer()
            };
        }
        return states[groupId];
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#register
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {Object} config Object with initial parameters passed to directive.
         * @returns {Promise} The promise object.
         * @description
         * Registers the {@link mobile-toolkit-ra.directive:raNavbar raNavbar} directive in the service. This method
         * performs the following tasks:
         *
         * 1. A state object is created for the widget if didn't exist before.
         * 2. Initial parameters from passed config object overwrite current state.
         * 3. A promise object is returned for one way communication service->directive.
         */
    function register(groupId, config) {
        var state = getState(groupId, true);
        state.params.displayPath = config.displayPath !== undefined ? config.displayPath : [];
        state.params.itemsList = config.itemsList !== undefined ? config.itemsList : [];
        state.params.logoPath = config.logoPath !== undefined ? config.logoPath : "";
        state.params.linkAddress = config.linkAddress !== undefined ? config.linkAddress : "";
        state.params.accessRightIcon = config.accessRightIcon !== undefined ? config.accessRightIcon : "";
        state.params.accessRightIconMsg = config.accessRightIconMsg !== undefined ? config.accessRightIconMsg : "";
        state.params.subtitle = config.subtitle !== undefined ? config.subtitle : "";
        return state.eventDefer.promise;
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#unregister
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @description
         * Unregisters the {@link mobile-toolkit-ra.directive:raNavbar raNavbar} directive from the service by:
         *
         * 1. Deleting a reference to the state object.
         * 2. Resolving (closing) the promise communication channel.
         */
    function unregister(groupId) {
        var state = getState(groupId);
        if (state) {
            delete states[groupId];
            //closes notify channel
            state.eventDefer.resolve();
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#updateState
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @description Updates the directive's state using specified group id.
         */
    function updateState(groupId) {
        var state = getState(groupId);
        if (state) {
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#getStateChangeNotifyPromise
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @returns {Promise} The promise object.
         * @description
         * Returns promise for state changes notify channel.
         */
    function getStateChangeNotifyPromise(groupId) {
        var state = getState(groupId, true);
        return state.eventDefer.promise;
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#setTitle
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {object | array} newDisPath display in navbar. {link: link, label: label}.
         * @param {boolean} append append the new items to the list if true,
         * otherwise replace the whole list.
         * @description
         * Sets the {@link mobile-toolkit-ra.directive:raTabletNavbar raTabletNavbar}'s page title
         * if append is false, then replace the whole list with the new display path.
         * else check whether the new path item  is in the list, and remove the rest items.
         */
    function setTitle(groupId, newDisPath, append) {
        var state = getState(groupId);
        var dispaths;
        newDisPath = newDisPath || [];
        if (state && newDisPath) {
            dispaths = state.params.displayPath;
            if (append) {
                if (angular.isArray(newDisPath)) {
                    state.params.displayPath = dispaths.concat(newDisPath);
                } else if (newDisPath.label) {
                    if (!dispaths || !dispaths[0] || dispaths[0].label !== newDisPath.label) {
                        state.params.displayPath.push(newDisPath);
                    }
                }
            } else {
                state.params.displayPath = [].concat(state.params.displayPath[0], newDisPath);
            }
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#setMenuItems
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {object array} optoin menu items list in navbar.
         * @description
         * Sets the menu items list for the tablet navbar to navigate to other page,
         * the item contains 'linkAdd' and 'nameText' two properties.
         */
    function setMenuItems(groupId, strItemList) {
        var state = getState(groupId);
        if (state) {
            state.params.itemsList = strItemList;
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#setSubTitle
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {object array} optoin menu items list in navbar.
         * @description
         * Sets the subtitle
         * the subtitle displays while the menu items are not provided.
         */
    function setSubTitle(groupId, strSubTitle) {
        var state = getState(groupId);
        if (state) {
            state.params.subtitle = strSubTitle;
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#setAccessIcon
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {string} the icon file path.
         * @description
         * Sets the {@link mobile-toolkit-ra.directive:raTabletNavbar raTabletNavbar}'s view page
         * access right icon file path.
         */
    function setAccessIcon(groupId, titleIcon) {
        var state = getState(groupId);
        if (state) {
            if (angular.isString(titleIcon)) {
                state.params.accessRightIcon = titleIcon;
            } else if (angular.isArray(titleIcon)) {
                state.params.accessRightIcon = titleIcon[0] || "";
                state.params.accessRightIconMsg = titleIcon[1] || "";
            }
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    /**
         * @ngdoc method
         * @name mobile-toolkit-ra.raTabletNavbarSvc#setLogoIconPath
         * @methodOf mobile-toolkit-ra.raTabletNavbarSvc
         * @param {string} groupId The id of the group of widgets.
         * @param {string} the logo icon file path.
         * @description
         * Sets the {@link mobile-toolkit-ra.directive:raTabletNavbar raTabletNavbar}'s logo icon file path.
         */
    function setLogoIconPath(groupId, strIconPath, strLinkAdd) {
        var state = getState(groupId);
        if (state) {
            state.params.logoPath = strIconPath;
            state.params.linkAddress = strLinkAdd;
            state.eventDefer.notify(angular.copy(state.params));
        }
    }
    return {
        register: register,
        unregister: unregister,
        updateState: updateState,
        getStateChangeNotifyPromise: getStateChangeNotifyPromise,
        setTitle: setTitle,
        setSubTitle: setSubTitle,
        setMenuItems: setMenuItems,
        setAccessIcon: setAccessIcon,
        setLogoIconPath: setLogoIconPath
    };
} ]);

/* global angular */
/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raTimeoutCollectorSvc
 * @description The raTimeoutCollectorSvc improves the performance, when there is a need to execute
 * a set of operations after their timeouts expire. Instead of preparing separate timeouts for each function,
 * the service collects and executes the functions in a single timeout. The only supported
 * is the timeout with the delay set to 0.
 *
 **/
angular.module("mobile-toolkit-ra").factory("raTimeoutCollectorSvc", [ "$timeout", "$log", function($timeout, $log) {
    "use strict";
    var queue = [];
    var timeout = null;
    return {
        /**
             * @ngdoc method
             * @name mobile-toolkit-ra.service:raTimeoutCollectorSvc#remove
             * @methodOf mobile-toolkit-ra.service:raTimeoutCollectorSvc
             * @param {function} fn timeout function
             * @description A method used to remove an element from the timeouts queue and cancel the timeout function.
             * Should be used e.g in the $destroy
             */
        remove: function(fn) {
            if (queue.indexOf(fn) !== -1) {
                queue.splice(queue.indexOf(fn), 1);
                if (queue.length === 0) {
                    $timeout.cancel(timeout);
                    timeout = null;
                }
            }
        },
        /**
             * @ngdoc method
             * @name mobile-toolkit-ra.service:raTimeoutCollectorSvc#add
             * @methodOf mobile-toolkit-ra.service:raTimeoutCollectorSvc
             * @param {function} fn timeout function
             * @description A method used to add an element to the timeouts queue
             */
        add: function(fn) {
            if (typeof fn !== "function") {
                $log.warn("Passed object is not a function!");
                return;
            }
            if (queue.indexOf(fn) === -1) {
                queue.push(fn);
            }
            if (!timeout) {
                timeout = $timeout(function() {
                    var copy = queue.slice(), i;
                    timeout = null;
                    // reset scheduled array first in case one of the functions throws an error
                    queue.length = 0;
                    for (i = copy.length - 1; i >= 0; i--) {
                        copy[i]();
                    }
                }, 0);
            }
        }
    };
} ]);

/* global angular */
/* jshint -W101 */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raToast
 * @module mobile-toolkit-ra
 * @restrict AE
 * @param {object} [ra-toast-options] Configuration object for the toast container.
 * The configuration object has the following properties:
 *
 * | Property           | Type              | Details                                                                          |
 * |--------------------|-------------------|----------------------------------------------------------------------------------|
 * | toaster-id         | {@type string}    | The Id of the toaster container.                                                 |
 * | moveAboveActionBar | {@type boolean}   | It specifies whether a toast message is to be displayed above the action bar     |
 * | moveUnderNavbar    | {@type boolean}   | It specifies whether a toast message is to be displayed under the navigation bar |
 * | messageLimit       | {@type number}    | The number of the toast messages to be displayed simultaneously                  |
 * | showCloseButton    | {@type boolean}   | A close button visibility                                                        |
 * | position-class     | {@type string}    | A style defining the toast message                                               |
 *
 * For full list and the description of the all possible options please refer to
 * the {@link https://github.com/jirikavi/AngularJS-Toaster _AngularJS Toaster_} documentation.
 *
 * @description
 * The raToast is a directive responsible for rendering the toast notification message
 * allowing for a consistent user experience in Rockwell Automation apps.
 * The directive wraps the {@link https://github.com/jirikavi/AngularJS-Toaster _AngularJS Toaster_} with
 * a predefined template *raToast/raToast.tpl.html*.
 * For a complete description of the possible settings and the information on how to display notifications,
 * refer to the {@link mobile-toolkit-ra.service:raToastSvc _raToastSvc_} service.
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** By default the _raToast_ toast message appears at the bottom of the page. When a particular
 *     controller contains the _raActionBar_ definition, the _raActionBar_ may get covered by the toast message.
 *     To ensure that the _raToast_ toast message is displayed above the _raActionBar_,
 *     use the {@link #/api/mobile-toolkit-ra.service:raToastSvc#methods _moveAboveActionBar_} function
 *     of the {@link #/api/mobile-toolkit-ra.service:raToastSvc _raToastSvc_} service or set the `position-class` option
 *     to `ra-toast-bottom-full-width ra-toast-above-actionbar`.
 * </div>
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** In order to display toast messages at the top of the page, the `position-class`
 *     option of the `ra-toast-options` parameter must be set to the `ra-toast-top-full-width` class.
 *     Additionally, when a particular controller contains the _raNavbar_ or the _raNavbarLarge_ definition,
 *     toast messages should be configured to be shown under the navigation bar. This may be done
 *     using the {@link #/api/mobile-toolkit-ra.service:raToastSvc#methods _moveUnderNavbar_} function
 *     of the {@link #/api/mobile-toolkit-ra.service:raToastSvc _raToastSvc_} service or setting
 *     the `ra-toast-under-navbar` class together with the `ra-toast-top-full-width` class in the `position-class`
 *     option.
 * </div>
 * @example
 * The example below shows the usage of the _raToast_ with the default settings.
 *
 * <example module="exampleAppOne">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" style="height:200px">
 *            <div>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="showMessage()">
 *                    Show the message
 *                </a>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="toggleToastPosition()">
 *                    Toggle the toast position
 *                </a>
 *            </div>
 *            <ra-toast></ra-toast>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppOne', ['mobile-toolkit-ra', 'toaster']);
 *        mod.controller('exampleCtrl', [
 *           '$scope', 'raToastSvc',
 *           function ($scope, raToastSvc) {
 *               $scope.aboveActionBar = false;
 *               $scope.toggleToastPosition = function () {
 *                   $scope.aboveActionBar = !$scope.aboveActionBar;
 *                   raToastSvc.moveAboveActionBar($scope.aboveActionBar);
 *               };
 *               $scope.showMessage = function () {
 *                   raToastSvc.pop("Simple toast message");
 *               };
 *           }
 *        ]);
 *    </file>
 * </example>
 *
 * The example below shows how to configure toast messages to be shown at the top of the page.
 *
 * <example module="exampleAppTwo">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" style="height:200px">
 *            <div style="position:absolute;bottom:0">
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="showMessage()">
 *                    Show the message
 *                </a>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="toggleToastPosition()">
 *                    Toggle the toast position
 *                </a>
 *            </div>
 *            <ra-toast ra-toast-options='{"position-class": "ra-toast-top-full-width"}'></ra-toast>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppTwo', ['mobile-toolkit-ra', 'toaster']);
 *        mod.controller('exampleCtrl', [
 *           '$scope', 'raToastSvc',
 *           function ($scope, raToastSvc) {
 *               $scope.underNavbar = false;
 *               $scope.toggleToastPosition = function () {
 *                   $scope.underNavbar = !$scope.underNavbar;
 *                   raToastSvc.moveUnderNavbar($scope.underNavbar);
 *               };
 *               $scope.showMessage = function () {
 *                   raToastSvc.pop("Toast message at the top");
 *               };
 *           }
 *        ]);
 *    </file>
 * </example>
 *
 * The example below shows how to configure toast messages to be shown above the action bar or under the navigation bar
 * using proper css classes.
 *
 * <example module="exampleAppThree">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl" style="height:200px">
 *            <div style="position:absolute;bottom:0">
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="showTopMessage()">
 *                    Show the message at the top
 *                </a>
 *                <a class="btn btn-primary btn-lg" role="button" ng-click="showBottomMessage()">
 *                    Show the message at the bottom
 *                </a>
 *            </div>
 *            <ra-toast ra-toast-options='{"toaster-id": "ra-toaster-id-1", "messageLimit": "2",
 *                      "position-class": "ra-toast-under-navbar ra-toast-top-full-width"}'>
 *            </ra-toast>
 *            <ra-toast ra-toast-options='{"toaster-id": "ra-toaster-id-2", "messageLimit": "2",
 *                      "position-class": "ra-toast-above-actionbar ra-toast-bottom-full-width"}'></ra-toast>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppThree', ['mobile-toolkit-ra', 'toaster']);
 *        mod.controller('exampleCtrl', [
 *           '$scope', 'raToastSvc',
 *           function ($scope, raToastSvc) {
 *               $scope.showTopMessage = function () {
 *                   var config = {
 *                      toasterId: 'ra-toaster-id-1'
 *                   };
 *                   raToastSvc.pop("Toast message at the top", config);
 *               };
 *               $scope.showBottomMessage = function () {
 *                   var config = {
 *                      toasterId: 'ra-toaster-id-2'
 *                   };
 *                   raToastSvc.pop("Toast message at the bottom", config);
 *               };
 *           }
 *        ]);
 *    </file>
 * </example>
 *
 */
/* jshint +W101 */
angular.module("mobile-toolkit-ra").directive("raToast", [ "$templateCache", "raToastSvc", function($templateCache, raToastSvc) {
    "use strict";
    return {
        scope: {
            raToastOptions: "=?"
        },
        restrict: "AE",
        template: $templateCache.get("raToast/raToast.tpl.html"),
        link: {
            pre: function(scope) {
                var config = scope.raToastOptions || {};
                if (!config["position-class"]) {
                    config["position-class"] = "ra-toast-bottom-full-width";
                }
                scope.options = config;
                raToastSvc.addToaster(config);
                scope.params = raToastSvc.getToastConfig(config["toaster-id"]);
            }
        }
    };
} ]);

/* global angular */
angular.module("mobile-toolkit-ra").provider("raToastSvc", [ "$injector", function($injector) {
    "use strict";
    /**
     * @ngdoc method
     * @name mobile-toolkit-ra.raToastSvcProvider#extendToastTypes
     * @methodOf mobile-toolkit-ra.raToastSvcProvider
     * @param {Object} toastTypes A definition of the toast notification types in the following form:
     * <pre>
     *     {
     *         typeName1:  'type-class-1',
     *         typeName2:  'type-class-2'
     *     };
     * </pre>
     * @description Extends the list of toast notification types available for the
     * {@link mobile-toolkit-ra.service:raToastSvc _raToastSvc_} service.
     * The setting for an existing type will be overridden if its name is the same
     * as the name of any of the new types.
     */
    this.extendToastTypes = function(toastTypes) {
        // toasterConfig comes from the toaster module (AngularJS Toaster)
        var toasterConfig = $injector.get("toasterConfig");
        angular.forEach(toastTypes, function(value, key) {
            toasterConfig["icon-classes"][key] = value;
        });
    };
    /**
     * @ngdoc method
     * @name mobile-toolkit-ra.raToastSvcProvider#$get
     * @methodOf mobile-toolkit-ra.raToastSvcProvider
     * @returns {Object} An instance of the _raToastSvc_ service
     * @description Creates and returns an instance of _raToastSvc_
     */
    this.$get = [ "$templateCache", "toaster", "$translate", "raTranslateHandlerSvc", "RA_TOAST", function($templateCache, toaster, $translate, raTranslateHandlerSvc, RA_TOAST) {
        /**
             * @ngdoc service
             * @module mobile-toolkit-ra
             * @name mobile-toolkit-ra.service:raToastSvc
             * @description The raToastSvc is a component to display simple toast notifications of type warning,
             * error, information, success or wait on top of existing screens at the bottom of the page.
             * There is a possibility to extend the list of available toast notification types by using the
             * `extendToastTypes` method of the {@link mobile-toolkit-ra.raToastSvcProvider raToastSvcProvider}
             * (see the example below). This service wraps the
             * {@link https://github.com/jirikavi/AngularJS-Toaster _AngularJS Toaster_}
             * with a predefined template, *raToast/raToast.tpl.html*.
             * The component also customizes the css classes of the {@link http://codeseven.github.io/toastr _toastr_}.
             *
             * <div class="alert alert-info" role="alert">
             *     **Note:** The _raToastSvc_ service cooperates with the toaster container directive:
             *     {@link mobile-toolkit-ra.directive:raToast _raToast_}, which has to be added to the application.
             * </div>
             *
             * <div class="alert alert-info" role="alert">
             *     **Note:** In order to use the _raToastSvc_ service you have to add a _toaster_
             *     as an angular module dependency. For more information about adding 3rd party components, refer to
             *     {@link #/nonapi/addingThirdPartyDependencies.md#using-ratoastsvc _Adding Third-Party Dependencies_}.
             * </div>
             *
             * @example
             * The example below shows how to set up simple toast with the message limit.
             * <example module="exampleAppLimit">
             *  <file name="index.html">
             *  <div ng-controller="exampleCtrl" style="height:200px">
             *      <div class="panel panel-default">
             *          <div class="panel-body">
             *              <a id="buttonModal"
             *                  class="btn btn-primary" role="button" ng-click="pop()">
             *                  Show message
             *              </a>
             *              <a id="raClearMessageButton" ng-click="clearMessages()"
             *                  class="btn btn-primary">
             *                  Clear messages
             *              </a>
             *              </br>
             *              limit: <input type="number" name="limit" ng-model="limit"
             *                  min="0" max="10">
             *              <a id="setLimitButton" ng-click="setLimit()"
             *                  class="btn btn-primary">
             *                  Set limit
             *              </a>
             *          </div>
             *      </div>
             *      <ra-toast ra-toast-options='{"messageLimit": "2"}'></ra-toast>
             *  </div>
             *  </file>
             *  <file name="script.js">
             *  angular.module('exampleAppLimit', ['mobile-toolkit-ra', 'toaster'])
             *   .controller('exampleCtrl', ['$scope', 'raToastSvc', 'RA_TOAST',
             *      function ($scope, raToastSvc, RA_TOAST) {
             *         'use strict';
             *
             *         $scope.toastId = 0;
             *         $scope.limit = 2;
             *
             *         $scope.pop = function () {
             *            $scope.toastId ++;
             *            var config = {
             *                 type: "info",
             *                 toastId: $scope.toastId,
             *                 timeout: 0
             *             };
             *            raToastSvc.pop("Example text. ID: " + $scope.toastId, config);
             *         };
             *
             *         $scope.setLimit = function () {
             *             $scope.limit = $scope.limit !== null ?
             *                 $scope.limit : RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED;
             *             raToastSvc.setMessageLimit($scope.limit, $scope.toasterId);
             *         };
             *
             *
             *         $scope.clearMessages = function () {
             *             raToastSvc.clear("*");
             *         };
             *     }]);
             *  </file>
             * </example>
             * Below is the complex example showing the different configuration options.
             * <example module="exampleApp">
             *  <file name="index.html">
             *  <div ng-controller="exampleCtrl">
             *        <div class="panel panel-default">
             *            <div class="panel-body">
             *                <a id="buttonModal"
             *                   class="btn btn-primary" role="button" ng-click="open()">
             *                   Show message
             *                </a>
             *                <a class="btn"
             *                   ng-class="{true: 'btn-primary', false: 'btn-danger'}[!hideClose]"
             *                   ng-click="hideClose = !hideClose">
             *                   {{hideClose && 'Hide close' || 'Show close'}}
             *                </a>
             *                <a class="btn"
             *                   ng-class="{true: 'btn-primary', false: 'btn-danger'}[!clickHandler]"
             *                   ng-click="clickHandler = !clickHandler">
             *                   {{!clickHandler && "Don\'t handle click" || "Handle click"}}
             *                </a>
             *                <a class="btn"
             *                   ng-class="{true: 'btn-primary', false: 'btn-danger'}[!hideCallback]"
             *                   ng-click="hideCallback = !hideCallback">
             *                   {{!hideCallback && 'Don\'t execute callback' || 'Execute callback'}}
             *                </a>
             *                <a id="raClearMessageButton" ng-click="clearMessage()"
             *                   class="btn btn-primary">
             *                   Clear message
             *                </a>
             *                <a id="raClearMessageButton" ng-click="clearMessages()"
             *                   class="btn btn-primary">
             *                   Clear messages
             *                </a>
             *                Toast ID: <input type="text" ng-model="clearToastId">
             *                <a id="raToggleToastPosition" ng-click="toggleToastPosition()"
             *                   class="btn btn-primary">
             *                   Toggle toast position
             *                </a>
             *            </div>
             *            <div class="panel panel-default">
             *                <div class="panel-heading">
             *                    <span>message:</span>
             *                    <input type="text" ng-model="messageText">
             *                    <span>message type:</span>
             *                    <select ng-model="messageType">
             *                        <option value="info">info</option>
             *                        <option value="success">success</option>
             *                        <option value="error">error</option>
             *                        <option value="warning">warning</option>
             *                        <option value="wait">wait</option>
             *                    </select>
             *                    <span>Toaster:</span>
             *                    <select ng-model="toasterId">
             *                        <option value="ra-toaster-id-1">ra-toaster-id-1</option>
             *                        <option value="ra-toaster-id-2">ra-toaster-id-2</option>
             *                    </select>
             *                    <span>timeout:</span>
             *                    <input type="number" name="timeout"
             *                           ng-model="timeout"  min="0" max="3000" required>
             *                </div>
             *            <div class="panel">
             *                Click count: {{clickCnt}}
             *                Callback count: {{callbackCnt}}
             *                ToastID: {{toastId}}
             *            </div>
             *            <div class="panel">
             *                Display above actionBar: {{aboveActionBar}}
             *            </div>
             *         </div>
             *     </div>
             *     <ra-toast ra-toast-options='{"toaster-id": "ra-toaster-id-1"}'></ra-toast>
             *     <ra-toast
             *         ra-toast-options='{"toaster-id": "ra-toaster-id-2",
             *                            "position-class": "ra-toast-top-full-width"}'>
             *     </ra-toast>
             *  </div>
             *  </file>
             *  <file name="script.js">
             *  angular.module('exampleApp', ['mobile-toolkit-ra', 'toaster'])
             *   .controller('exampleCtrl', ['$scope', 'raToastSvc',
             *      function ($scope, raToastSvc) {
             *         'use strict';
             *         $scope.clickCnt = 0;
             *         $scope.callbackCnt = 0;
             *         $scope.messageType = "info";
             *         $scope.messageText = "Text of the message";
             *         $scope.timeout = 0;
             *         $scope.aboveActionBar = false;
             *         $scope.toastId = 0;
             *         $scope.toasterId = "ra-toaster-id-1";
             *
             *         var clickHandler = function (toast, isCloseButton) {
             *             if (isCloseButton) {
             *                 return true;
             *             }
             *             $scope.clickCnt ++;
             *         };
             *
             *         var onHideCallback = function () {
             *             $scope.callbackCnt++;
             *         };
             *
             *         $scope.toggleToastPosition = function () {
             *             $scope.aboveActionBar = !$scope.aboveActionBar;
             *             raToastSvc.moveAboveActionBar($scope.aboveActionBar);
             *         };
             *
             *         //example using no config object
             *         $scope.open = function () {
             *            $scope.toastId ++;
             *            var config = {};
             *
             *            config.type = $scope.messageType;
             *            config.timeout = $scope.timeout;
             *            config.showCloseButton = $scope.hideClose ? false : true;
             *            config.clickHandler = $scope.clickHandler ? clickHandler : undefined;
             *            config.onHideCallback = $scope.hideCallback ? onHideCallback : undefined;
             *
             *            config.toasterId = $scope.toasterId;
             *            config.toastId = $scope.toastId;
             *            raToastSvc.pop($scope.messageText + ". ID: " + $scope.toastId, config);
             *
             *         };
             *
             *         $scope.clearMessages = function () {
             *               raToastSvc.clear("*");
             *         };
             *
             *         $scope.clearMessage = function () {
             *               raToastSvc.clear($scope.toasterId, $scope.clearToastId);
             *         };
             *     }]);
             *  </file>
             * </example>
             *
             * The example below shows how to extend the list of available toast notification types
             * with custom types using the {@link mobile-toolkit-ra.raToastSvcProvider raToastSvcProvider}.
             *
             * <example module="exampleAppProvider">
             *  <file name="index.html">
             *  <div ng-controller="exampleCtrl">
             *        <div class="panel panel-default">
             *            <div class="panel-body">
             *                <a id="buttonModal"
             *                   class="btn btn-primary" role="button" ng-click="open()">
             *                   Show message
             *                </a>
             *                <a id="raClearMessageButton" ng-click="clearMessages()"
             *                   class="btn btn-primary">
             *                   Clear messages
             *                </a>
             *            </div>
             *            <div class="panel panel-default">
             *                <div class="panel-heading">
             *                    <span>message type:</span>
             *                    <select ng-model="messageType">
             *                        <option value="customYellow">custom yellow</option>
             *                        <option value="customPink">custom pink</option>
             *                    </select>
             *                </div>
             *         </div>
             *     </div>
             *     <ra-toast></ra-toast>
             *  </div>
             *  </file>
             *  <file name="style.css">
             *  .custom-yellow {
             *    background-color: #FFFF00;
             *  }
             *  .custom-pink {
             *    background-color: #FF00FF;
             *  }
             *  </file>
             *  <file name="script.js">
             *  angular.module('exampleAppProvider', ['mobile-toolkit-ra', 'toaster'])
             *    .config(["raToastSvcProvider", function(raToastSvcProvider) {
             *      var newTypes = {
             *          customYellow: "custom-yellow",
             *          customPink: "custom-pink",
             *      };
             *      raToastSvcProvider.extendToastTypes(newTypes);
             *    }])
             *   .controller('exampleCtrl', ['$scope', 'raToastSvc',
             *      function ($scope, raToastSvc) {
             *         'use strict';
             *
             *         $scope.messageType = "customYellow";
             *
             *         // example using no config object
             *         $scope.open = function () {
             *            var config = {
             *                 type: $scope.messageType
             *             };
             *            raToastSvc.pop("Example text", config);
             *         };
             *
             *         $scope.clearMessages = function () {
             *             raToastSvc.clear("*");
             *         };
             *     }]);
             *  </file>
             * </example>
             *
             *
             */
        var messageBuffer = {}, poppedMessages = {}, toastConfig = {}, statements, clearMode = {};
        var addToaster = function(config) {
            if (!config) {
                return;
            }
            config.moveAboveActionBar = config.moveAboveActionBar || false;
            config.moveUnderNavbar = config.moveUnderNavbar || false;
            config.messageLimit = config.messageLimit || RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED;
            toastConfig[config["toaster-id"]] = config;
        };
        var popMessageFromBuffer = function(toasterId) {
            var msg;
            if (!messageBuffer[toasterId] || !poppedMessages[toasterId]) {
                return;
            }
            if ((toastConfig[toasterId].messageLimit === RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED || poppedMessages[toasterId].length < toastConfig[toasterId].messageLimit) && messageBuffer[toasterId].length > 0) {
                msg = messageBuffer[toasterId].shift();
                poppedMessages[toasterId].push(msg);
                callToasterPop(msg);
            }
        };
        var popMessage = function(message) {
            if (!poppedMessages[message.toasterId]) {
                poppedMessages[message.toasterId] = [];
            }
            if (!messageBuffer[message.toasterId]) {
                messageBuffer[message.toasterId] = [];
            }
            if (poppedMessages[message.toasterId].length < toastConfig[message.toasterId].messageLimit && messageBuffer[message.toasterId].length === 0 || toastConfig[message.toasterId].messageLimit === RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED) {
                poppedMessages[message.toasterId].push(message);
                callToasterPop(message);
                return;
            }
            popMessageFromBuffer(message.toasterId);
            messageBuffer[message.toasterId].push(message);
        };
        var callToasterPop = function(message) {
            if (angular.isFunction(message.onShowCallback)) {
                message.onShowCallback();
            }
            toaster.pop(message);
        };
        var updateTranslation = function() {
            statements = {
                errorNotDefinedToasterId: $translate.instant("RA_TOAST.NOT_DEFINED_TOASTER_ID")
            };
        };
        updateTranslation();
        raTranslateHandlerSvc.onTranslate(function() {
            updateTranslation();
        });
        return {
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#setMessageLimit
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {number} limit the number of toast messages to be displayed simultaneously.
                 * 0 means that all messages will be buffered,
                 * RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED means that no limitation is set
                 * @param {string} toasterId the Id of the toaster container.
                 * @description A method used to set the limit number of the toast messages.
                 */
            setMessageLimit: function(limit, toasterId) {
                var i, cnt;
                if (!toastConfig[toasterId]) {
                    throw new Error(statements.errorNotDefinedToasterId);
                }
                if (toastConfig[toasterId].messageLimit === RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED || toastConfig[toasterId].messageLimit >= limit) {
                    toastConfig[toasterId].messageLimit = limit;
                    return;
                }
                // no messages popped, buffer not set yet
                if (!messageBuffer[toasterId]) {
                    toastConfig[toasterId].messageLimit = limit;
                    return;
                }
                // set the number of the messages to be taken from the buffer
                cnt = limit === RA_TOAST.MESSAGE_NUMBER_LIMIT.UNLIMITED ? messageBuffer[toasterId].length : limit - toastConfig[toasterId].messageLimit;
                toastConfig[toasterId].messageLimit = limit;
                for (i = 0; i < cnt; i++) {
                    popMessageFromBuffer(toasterId);
                }
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#getToastConfig
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {string} toasterId the Id of the toaster container.
                 * @returns {Object} The configuration of the toast component
                 * @description A method used to get the toast configuration
                 */
            getToastConfig: function(toasterId) {
                return toastConfig[toasterId];
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#addToaster
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {Object} config The configuration object for the toast container
                 * @description Defines a new toaster container with default settings using provided toasterID
                 */
            addToaster: addToaster,
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#moveAboveActionBar
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {Boolean} flag A parameter indicating whether a toast message
                 * should be displayed above the action bar. The default value is false.
                 * @param {string} toasterId The Id of the toaster container.
                 * @description A method that specifies whether a toast message
                 * is to be displayed above the action bar
                 */
            moveAboveActionBar: function(flag, toasterId) {
                if (!toastConfig[toasterId]) {
                    throw new Error(statements.errorNotDefinedToasterId);
                }
                toastConfig[toasterId].moveAboveActionBar = flag ? flag : false;
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#moveUnderNavbar
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {Boolean} flag A parameter indicating whether a toast message
                 * should be displayed under the navigation bar. The default value is false.
                 * @param {string} toasterId The Id of the toaster container.
                 * @description A method that specifies whether a toast message
                 * is to be displayed under the navigation bar
                 */
            moveUnderNavbar: function(flag, toasterId) {
                if (!toastConfig[toasterId]) {
                    throw new Error(statements.errorNotDefinedToasterId);
                }
                toastConfig[toasterId].moveUnderNavbar = flag ? flag : false;
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#pop
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {string} message Text to be displayed as a notification.
                 * @param {Object} params An object that is passed as a configuration of the toast.
                 *
                 * - **type** - `{string}` -
                 *   The type of the toast message. By default one of: "info", "success", "warning", "error", "wait".
                 *   The list of the available types can be extended configuring
                 *   the {@link mobile-toolkit-ra.raToastSvcProvider _raToastSvcProvider_} provider.
                 * - **timeout** - `{number}` - Defines how long the toast message will be visible
                 *    in milliseconds. 0 means infinite. The default value is 5000.
                 * - **showCloseButton** - `{boolean}` -
                 *   Defines the visibility of the close button. The default value is true.
                 * - **clickHandler** - `{function}` -
                 *    Defines a callback function that will be invoked whenever the user clicks on a message.
                 *    If defined it overwrites the default behavior which hides the message.
                 *    The clickHandler takes two parameters, the first one is the toast object, the second
                 *    is the boolean value which indicates if the close button was clicked.
                 *    The clickHandler returns boolean value indicating if the toast has to be hidden or not.
                 * - **onHideCallback** - `{function}` -
                 *    Defines a callback function that can be attached to each toast instance.
                 *    The callback will be invoked upon toast removal.
                 * - **onShowCallback** - `{function}` -
                 *    Defines a callback function that can be attached to each toast instance.
                 *    The callback will be invoked just before the toast is shown.
                 * - **toasterId** - `{string}` -
                 *    Defines the id of the toaster container (not required if the toaster-id option is not defined)
                 * - **toastId ** - `{string}` -
                 *    Defines the id of the message (not required)
                 *
                 * @description Method used to display the toast message
                 */
            pop: function(message, params) {
                var config = {
                    body: message,
                    showCloseButton: true,
                    timeout: 5e3
                };
                if (params) {
                    if (!toastConfig[params.toasterId]) {
                        throw new Error(statements.errorNotDefinedToasterId);
                    }
                    params.body = message;
                    angular.extend(config, params);
                }
                config.onHideCallback = function() {
                    var i;
                    poppedMessages[config.toasterId].splice(poppedMessages[config.toasterId].indexOf(config), 1);
                    if (params && angular.isFunction(params.onHideCallback)) {
                        params.onHideCallback();
                    }
                    // check if toasts are being cleared using clear function
                    if (clearMode[config.toasterId] && clearMode[config.toasterId].toClearMessages) {
                        if (clearMode[config.toasterId].toClearMessages > 1) {
                            clearMode[config.toasterId].toClearMessages--;
                            return;
                        }
                        // pop are cleared toasts
                        for (i = 0; i < clearMode[config.toasterId].poppedMessages; i++) {
                            popMessageFromBuffer(config.toasterId);
                        }
                        clearMode[config.toasterId] = {
                            poppedMessages: 0,
                            toClearMessages: 0
                        };
                    }
                    popMessageFromBuffer(config.toasterId);
                };
                popMessage(config);
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#clear
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @param {string} toasterId The Id of the toaster
                 * @param {string} toastId The Id of the toast message.
                 * @description Method used to clear visible toast messages.
                 * If no toastId provided, clear visible toasts within provided toasterID.
                 * To clear all visible toasts pass the asterisk as a toasterId parameter.
                 */
            clear: function(toasterId, toastId) {
                var toasters = [ toasterId ];
                if (toastId) {
                    return toaster.clear(toasterId, toastId);
                }
                if (toasterId === "*") {
                    toasters = Object.keys(poppedMessages);
                }
                angular.forEach(toasters, function(key) {
                    clearMode[key] = {
                        poppedMessages: poppedMessages[key].length,
                        toClearMessages: poppedMessages[key].length
                    };
                });
                toaster.clear(toasterId, toastId);
            },
            /**
                 * @ngdoc method
                 * @name mobile-toolkit-ra.service:raToastSvc#getToaster
                 * @methodOf mobile-toolkit-ra.service:raToastSvc
                 * @description Method used to retrieve the internal toaster service
                 */
            getToaster: function() {
                return toaster;
            }
        };
    } ];
} ]);

// jsHint Global variables
/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raToggleSwitch
 * @module mobile-toolkit-ra
 * @restrict E
 * @param {string} checked An angular expression which determines the state of the switch – `true` when the state
 * is "On", and `false` when the state is "Off".
 * @param {object=} config The configuration object for this directive, which may contain the following properties:
 *
 * | Name       | Type              | Description
 * |------------|-------------------|-----------------------------------------------------------------------------------
 * | id         | {@type string}    | The identifier of the underlying checkbox element.
 * | name       | {@type string}    | The name of the underlying checkbox element.
 * | disabled   | {@type boolean}   | Determines whether the switch is disabled. Defaults to `false`.
 * |className|{@type string}|The name of the class to be applied to the switch. Can be used to customize its appearance.
 * | onChange   | {@type function}  | A callback function to be invoked when the state of the switch changes.
 * | textOn     | {@type string}    | A text label to be shown on the switch when it's turned on. Defaults to "YES".
 * | textOff    | {@type string}    | A text label to be shown on the switch when it's turned off. Defaults to "NO".
 *
 * @description
 * The **raToggleSwitch** is a directive that provides a mobile toggle switch, which can be used instead of the
 * ordinary checkbox control. The switch is customizable and reacts to touch and swipe events.
 *
 * # Appearance and behavior
 * The switch is a small horizontal bar with a handle. It can change its state when the user:
 * - Clicks/taps on the switch area.
 * - Clicks/taps on the switch area, and then holds and moves the handle to the middle of the switch or further.
 * - Changes the value of the bound expression.
 *
 * ## Labels
 * The switch displays the "YES" or "NO" label, depending on its state. These texts can be
 * customized using the `textOn` and `textOff` properties of the `config` parameter.
 *
 * <div class="alert alert-info" role="alert">
 *   **Note:** Internally the `textOn` and `textOff` attributes use the _translate_ filter,
 *   which allows to automatically translate the content within the view layer.
 *   In order to translate the content, use the translation ID as a text parameter.
 *   More detailed information about angular-translate can be found in the
 *   [Internationalization and Localization](#/nonapi/i18n.md) document.
 * </div>
 *
 * ## Size and color
 * The default styling of the toggle switch follows the recommendations of the UX Design Team. If you want to customize
 * its appearance, you can use the `className` property of the `config` object to alter the default styles.
 * The provided class will be applied to the main container of the switch.
 *
 * You can use the following CSS selectors for styling the switch parts:
 *
 * - `ra-toggle-switch` - The main container of the switch element.
 *  - `ra-toggle-switch-area` - The touchable area of the switch, on top of which the handle slides.
 *      - `ra-toggle-switch-handle` - The switch handle.
 *      - `ra-toggle-switch-text` - The general container of the switch labels.
 *          - `ra-toggle-switch-text-on` - The label to be displayed when the switch is turned on.
 *          - `ra-toggle-switch-text-off` - The label to be displayed when the switch is turned off.
 *
 * The main container has additional classes applied:
 * - `ra-toggle-switch-on` - When the switch is turned on.
 * - `ra-toggle-switch-disabled` - When the switch is disabled.
 *
 * @example
 *
 * The typical usage of the toggle switch in application settings.
 *
 * <example module="exampleApp">
 *      <file name="index.html">
 *           <div ng-controller="exampleCtrl" class="ra-flex-column">
 *              <div class="ra-flex-item-static ra-flex-row ra-flex-row-valign-middle setting"
 *                   ng-repeat="setting in settings">
 *
 *                  <!-- Title -->
 *                  <div class="checkbox-setting ra-flex-item-static">
 *                      <span class="title">{{ setting.title }}</span>
 *                  </div>
 *
 *                  <!-- Unused space -->
 *                  <div class="ra-flex-item-dynamic"></div>
 *
 *                   <!-- Checkbox (switch) value -->
 *                  <ra-toggle-switch class="ra-flex-item-static"
 *                                    checked="setting.value"
 *                                    config="setting.config">
 *                  </ra-toggle-switch>
 *              </div>
 *
 *              <div class="well" style="margin-top: 10px; height: 100px; overflow-y: scroll">
 *                   <div ng-repeat="statusMessage in statusMessages track by $index">
 *                       {{statusMessage}}
 *                   </div>
 *               </div>
 *
 *              <div class="ra-flex-row ra-flex-row-valign-center">
 *                   <div class="ra-flex-item-static">
 *                       The switch <ra-toggle-switch class="ra-flex-item-static" checked="switch1">
 *                       </ra-toggle-switch> can be also used inline.
 *                   </div>
 *               </div>
 *           </div>
 *       </file>
 *       <file name="style.css">
 *           .setting .title {
 *              font-family: OpenSansBold;
 *              color: #939597;
 *           }
 *
 *           .setting div {
 *              padding: 10px 0;
 *           }
 *
 *           .switch-green.ra-toggle-switch-on .ra-toggle-switch-area {
 *              background: green;
 *              border-color: green;
 *           }
 *           .switch-green.ra-toggle-switch-on .ra-toggle-switch-handle {
 *              border-color: green;
 *           }
 *       </file>
 *       <file name="script.js">
 *            var myModule = angular.module('exampleApp', ['mobile-toolkit-ra']);
 *
 *            myModule.controller('exampleCtrl', ['$scope',
 *                 function ($scope) {
 *                      "use strict";
 *                      $scope.settings = [
 *                          {
 *                              title: "First option",
 *                              value: false
 *                          },
 *                          {
 *                              title: "Second option (custom labels)",
 *                              value: true,
 *                              config: {
 *                                  textOn: 'ON',
 *                                  textOff: 'OFF'
 *                              }
 *                          },
 *                          {
 *                              title: "Third option (disabled, on)",
 *                              value: true,
 *                              config: {
 *                                  disabled: true
 *                              }
 *                          },
 *                          {
 *                              title: "Fourth option (with callback)",
 *                              value: false,
 *                              config: {
 *                                  onChange: function() {
 *                                      $scope.statusMessages.push('Switch callback: ' +
  *                                         $scope.settings[3].value);
 *                                  }
 *                              }
 *                          },
 *                          {
 *                              title: "Green switch",
 *                              value: true,
 *                              config: {
 *                                  className: 'switch-green'
 *                              }
 *                          }
 *                      ];
 *
 *                      $scope.switch1 = true;
 *                      $scope.statusMessages = [];
 *            }]);
 *       </file>
 * </example>
 *
 *
 *
 */
angular.module("mobile-toolkit-ra").directive("raToggleSwitch", [ "$templateCache", "$window", "$timeout", "raTouchSvc", function($templateCache, $window, $timeout, raTouchSvc) {
    "use strict";
    return {
        restrict: "E",
        template: $templateCache.get("raToggleSwitch/raToggleSwitch.tpl.html"),
        scope: {
            checked: "=",
            config: "=?"
        },
        link: function(scope, element) {
            var trackChanges = false, overButtonTouch = false, overSwitchTouch = false, mouseMoved = false, touchMoved = false, touchPosition = 0, handleElement = element.findElement(".ra-toggle-switch-handle"), switchElement = element.findElement(".ra-toggle-switch-area"), documentEventsHandler, threshold = 5, // max movement for touch devices to be interpreted as click
            totalOffset = 0, moveHandleTo = function(pos) {
                if (scope.handleOffset !== pos) {
                    scope.handleOffset = pos;
                    handleElement.css("left", scope.handleOffset + "px");
                }
            }, switchOn = function() {
                scope.checked = true;
                moveHandleTo(scope.handleLeftPos + scope.switchWidth);
            }, switchOff = function() {
                scope.checked = false;
                moveHandleTo(scope.handleLeftPos);
            }, dragHandle = function(event) {
                var offset, xy;
                if (overButtonTouch || overSwitchTouch) {
                    event.preventDefault();
                    handleElement.removeClass("ra-toggle-switch-animated");
                    xy = raTouchSvc.getTouchClickPosition(event);
                    offset = xy.x - touchPosition;
                    scope.handleOffset += offset;
                    // limit the handle movement to the switch area
                    if (offset > 0) {
                        scope.handleOffset = Math.min(scope.handleOffset, scope.handleLeftPos + scope.switchWidth);
                    } else {
                        scope.handleOffset = Math.max(scope.handleOffset, scope.handleLeftPos);
                    }
                    handleElement.addClass("ra-toggle-switch-handle-active");
                    handleElement.css("left", scope.handleOffset + "px");
                    touchPosition += offset;
                    totalOffset += Math.abs(offset);
                }
            }, startTouch = function(event) {
                event.preventDefault();
                totalOffset = 0;
                touchPosition = raTouchSvc.getTouchClickPosition(event).x;
                mouseMoved = false;
                touchMoved = false;
            };
            scope.config = scope.config || {};
            scope.handleOffset = 0;
            scope.handleLeftPos = scope.handleOffset;
            scope.switchWidth = switchElement[0].clientWidth - handleElement[0].clientWidth;
            scope.toggle = function() {
                scope.checked = !scope.checked;
            };
            scope.$watch("checked", function(newValue) {
                if (newValue) {
                    switchOn();
                } else {
                    switchOff();
                }
                // when the onChange parameter is present
                if (trackChanges && angular.isFunction(scope.config.onChange)) {
                    scope.config.onChange();
                }
            });
            switchElement.on("mousemove", function(event) {
                if (!scope.config.disabled) {
                    dragHandle(event);
                    mouseMoved = true;
                }
            });
            switchElement.on("touchmove", function(event) {
                if (!scope.config.disabled) {
                    dragHandle(event);
                    touchMoved = true;
                }
            });
            handleElement.on("mousedown touchstart", function(event) {
                if (!scope.config.disabled) {
                    overButtonTouch = true;
                    startTouch(event);
                }
            });
            switchElement.on("mousedown touchstart", function(event) {
                if (!scope.config.disabled) {
                    overSwitchTouch = true;
                    startTouch(event);
                }
            });
            documentEventsHandler = angular.element($window.document).on("mouseup touchend", function(event) {
                if (!scope.config.disabled && (overSwitchTouch || overButtonTouch)) {
                    event.preventDefault();
                    handleElement.addClass("ra-toggle-switch-animated");
                    // we need to tell angular that we'll change the checked
                    scope.$apply(function() {
                        // switch on or off depending on the handle's relative position
                        if (mouseMoved || touchMoved && totalOffset > threshold) {
                            if (scope.handleOffset > scope.switchWidth / 2) {
                                switchOn();
                            } else {
                                switchOff();
                            }
                        } else {
                            scope.toggle();
                        }
                    });
                    handleElement.removeClass("ra-toggle-switch-handle-active");
                    overButtonTouch = false;
                    overSwitchTouch = false;
                    mouseMoved = false;
                    touchMoved = false;
                    totalOffset = 0;
                }
            });
            // prevent animation and callback when first shown
            $timeout(function() {
                handleElement.addClass("ra-toggle-switch-animated");
                switchElement.addClass("ra-toggle-switch-animated");
                trackChanges = true;
            }, 0);
            element.on("$destroy", function() {
                angular.element($window.document).off("mouseup touchend", documentEventsHandler);
                switchElement.off("touchmove");
                switchElement.off("mousemove");
                handleElement.off("mousedown touchstart");
                switchElement.off("mousedown touchstart");
            });
        }
    };
} ]);

/* global angular */
/**
 * This service is intended as an internal helper for touch events
 */
angular.module("mobile-toolkit-ra").factory("raTouchSvc", [ function() {
    "use strict";
    /**
         * Method normalizing touch and click position in different environmnents
         * @param event
         * @returns {Object} An object containing normalized x and y members of the click/touch position
         */
    var getTouchClickPosition = function(event) {
        var xy;
        if (event.originalEvent !== undefined && event.originalEvent.changedTouches !== undefined) {
            xy = {
                x: event.originalEvent.changedTouches[0].pageX,
                y: event.originalEvent.changedTouches[0].pageY
            };
        } else if (event.changedTouches !== undefined) {
            xy = {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            };
        } else {
            xy = {
                x: event.clientX,
                y: event.clientY
            };
        }
        return xy;
    };
    return {
        getTouchClickPosition: getTouchClickPosition
    };
} ]);

/**
 * @ngdoc service
 * @module mobile-toolkit-ra
 * @name mobile-toolkit-ra.service:raTranslateHandlerSvc
 * @description
 * The _raTranslateHandlerSvc_ is a service wrapping the angular-translate's $translateChangeSuccess event.
 * More detailed information about angular-translate can be found in the 
 * [Internationalization and Localization](##/nonapi/i18n.md) document.
 *
 * The _raTranslateHandlerSvc_ allows to register the function which will be called when the change
 * of the translation occurs.
 * _raTranslateHandlerSvc_ simplifies the usage of the _$translate_ service
 * because it doesn't provide two-way data binding by default. The _$translate_ service works asynchronously,
 * which means it returns the translation for the given translation id as soon as it can determine it.
 * However, this doesn't mean that it knows when a language has been changed. And because of that
 * translations translated through a directive _$translate_ call don't get updated when changing
 * the language at runtime.
 * _raTranslateHandlerSvc_ is an emitter which simplifies the usage of the _$translate_ service.
 *
 * <div class="alert alert-info" role="alert">
 *     **Note:** There is still a need to manually update the translated messages when the translation changes.
 * </div>
 *
 * @example
 *
 * <example module="translateExample">
 *      <file name="script.js">
 *          var translations = {
 *              TITLE: 'The Title',
 *              HEADLINE: 'Headline',
 *              PARAGRAPH: 'Paragraph',
 *              NAMESPACE: {
 *                      PARAGRAPH: 'Second paragraph'
 *                  },
 *              BUTTON_TEXT_CHANGE_LANGUAGE: 'Change language'
 *          },
 *          translationsPL = {
 *              TITLE: 'Tytuł',
 *              HEADLINE: 'Nagłówek',
 *              PARAGRAPH: 'Paragraf',
 *              NAMESPACE: {
 *                      PARAGRAPH: 'Drugi paragraf'
 *                  },
 *              BUTTON_TEXT_CHANGE_LANGUAGE: 'Zmień język'
 *          };
 *
 *          angular.module('translateExample', ['mobile-toolkit-ra', 'pascalprecht.translate'])
 *               .config(['$translateProvider',
 *                   function ($translateProvider) {
 *                       "use strict";
 *                       // Configuring the application to use angular-translate
 *                      // add translation table
 *                      $translateProvider
 *                          .translations('en', translations)
 *                          .translations('pl', translationsPL)
 *                          .preferredLanguage('en');
 *                   }
 *               ]
 *           );
 *
 *           angular.module('translateExample')
 *               .factory('homeViewSvc', ['$translate','raTranslateHandlerSvc',
 *                   function ($translate, raTranslateHandlerSvc) {
 *                   "use strict";
 *                   var items = [], title,
 *                      homeViewSvc =  {
 *                          getItems: function () {
 *                              return items;
 *                          },
 *                          getTitle: function () {
 *                              return title;
 *                          },
 *                          refresh: function () {
 *                              items = [
 *                                   {
 *                                       name: $translate.instant('HEADLINE')
 *                                   },
 *                                   {
 *                                       name: $translate.instant('PARAGRAPH')
 *                                   },
 *                                   {
 *                                       name: $translate.instant('NAMESPACE.PARAGRAPH')
 *                                   }
 *                               ];
 *
 *                               title = $translate.instant('TITLE');
 *
 *                               return homeViewSvc;
 *                          }
 *                      };
 *                      raTranslateHandlerSvc.onTranslate(function () {
 *                          homeViewSvc.refresh();
 *                      });
 *
 *                      return homeViewSvc.refresh();
 *               }])
 *               .controller('HomeViewCtrl', ['$scope',
 *                          'homeViewSvc', '$translate', 'raTranslateHandlerSvc',
 *                   function ($scope,
 *                          homeViewSvc, $translate, raTranslateHandlerSvc) {
 *                       "use strict";
 *                       // Implementation of the function passed as argument to raTranslateHandlerSvc
 *                       raTranslateHandlerSvc.onTranslate(function () {
 *                           $scope.items = homeViewSvc.getItems();
 *                           $scope.title = homeViewSvc.getTitle();
 *                       });
 *
 *                       $scope.title = homeViewSvc.getTitle();
 *                       $scope.items = homeViewSvc.getItems();
 *
 *                       $scope.toggleLang = function () {
 *                           $translate.use() === 'en'? $translate.use('pl') : $translate.use('en');
 *                      };
 *
 *               }]);
 *
 *      </file>
 *
 *      <file name="index.html">
 *
 *       <div ng-controller="HomeViewCtrl">
 *         <div class="container-fluid">
 *           <div class="row">
 *               <h4>{{title}}</h4>
 *           </div>
 *           <div class="row" ng-repeat="item in items">
 *               {{item.name}}
 *           </div>
 *           <div class="row">
 *               <button ng-click="toggleLang()" translate="BUTTON_TEXT_CHANGE_LANGUAGE"></button>
 *           </div>
 *         </div>
 *       </div>
 *      </file>
 * </example>
 */
/* global angular */
angular.module("mobile-toolkit-ra").factory("raTranslateHandlerSvc", [ "$rootScope", "$translate", function($rootScope, $translate) {
    "use strict";
    return {
        onTranslate: function(fn) {
            if (!angular.isFunction(fn)) {
                return;
            }
            $rootScope.$on("$translateChangeSuccess", function() {
                fn($translate);
            });
        }
    };
} ]);

/* global angular */
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raTree
 * @scope
 * @module mobile-toolkit-ra
 * @restrict A
 * @param {object} raTree An object representing the tree model.
 * The following is the example of the tree model:
 * <pre>
 * ...
 *  $scope.tree = [
 *      {
 *          label: "My node 3",
 *          myProperty : "myProperty 3",
 *          children: [
 *              {
 *                  label: "My node 3.1",
 *                  myProperty : "myProperty 3.1",
 *                  children: []
 *              }
 *          ]
 *      }
 *  ];
 * ...
 * </pre>
 * You can mark a tree node with a "loading" indicator when there is an ongoing activity
 * related to this node. The `ra-spinner` class is used for this purpose. The spinner replaces
 * the expand/collapse icons. To use the spinner, set the `isLoading` property of the node to `true`.
 * See the example below.
 *
 * @param {function=} raTreeUserSelectCallback An object representing the function
 * called while selecting the tree node label. The function retrieves the current node
 * of the tree model as a parameter.
 * @param {array=} raTreeNodeExt An array of the objects defining the extension of the tree node.
 * The following properties are supported:
 *
 * - **`iconClass`** - `{string}` - The icon definition.
 * - **`condition`** - `{function}` - The condition function. Defines the condition under which the object is displayed.
 * The current node object is passed as a parameter. It must return a boolean value.
  *
 * <pre>
 * ...
 * // The code below defines the extension object.
 * $scope.treeExtension = [
 *     {
 *         iconClass : "ra-icon ra-icon-archive",
 *         condition : function (node) {
 *             return node && node.hasArchive;
 *         }
 *     },
 *     {
 *         iconClass : "ra-icon ra-icon-schedules",
 *         condition : function (node) {
 *             return node && node.hasSchedule;
 *         }
 *     }
 * ]
 * ...
 * </pre>
 * @param {boolean=} raTreeExpandOnCaret
 * A parameter defining if the node should be expanded only when the caret icon is tapped.
 *
 * @param {boolean=} raTreeNodeIconEnabled
 * A parameter defining if nodes in the tree may show its icons.
 * * If set to **`true`** icons are allowed.
 * When node has no icon to show space for one icon will be preserved to keep sibling nodes aligned.
 * If set to **`false`** or not defined, icons will not be shown.
 *
 * @param {function=} setApi
 * A callback function that returns an API object. It takes a single parameter named 'api'
 * that will contain the API object when called.
 *
 * The object passed to the callback function has the functions and properties listed below.
 * The node ids used by the api functions are generated automatically for each node based on its location in the tree.
 * The node locations are marked with successive numbers in the top-to-bottom hierarchy.
 * The topmost node in the tree is marked with "0". The node counting is restarted at each node level.
 * The node id consists of a series of numbers assigned to the individual node locations
 * that make up the path to the given node, separated with the underscore symbol.
 * For example, the node with the id "1_0" points to the first subnode ("0") of the second node ("1").
 *
 * - **getSelectedNode()** - `{function}` -
 *   A function that returns the currently selected item.
 * - **selectNode(String)** - `{function}` -
 *    A function that sets the currently selected item using the item id as a parameter.
 *    Please note that preceding nodes are not expanded automatically.
 * - **clearSelection()** - `{function}` -
 *   A function that deselects currently selected item.
 * - **getExpandedNodes()** - `{function}` -
 *   A function that returns an array of the ids of the currently expanded nodes.
 * - **setExpandedNodes(Array)** - `{function}` -
 *   A function that expands nodes using an array of the ids of the nodes
 *   to be expanded as a parameter.
 * - **expandNode(String)** - `{function}` -
 *   A function that expands a particular node using the id of the node
 *   to be expanded as a parameter.
 * - **collapseNode(String)** - `{function}` -
 *   A function that collapses a particular node using the id of the node
 *   to be collapsed as a parameter
 * - **collapseNodes()** - `{function}` -
 *   A function that collapses all nodes.
 *
 * @description
 * The raTree directive is responsible for rendering the tree component.
 *
 * @example
 * The example below shows how to use the _raTree_ directive:
 * <example module="exampleAppOne">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl">
 *            <div class="panel panel-default">
 *                <div class="panel-body">
 *                    <div ra-tree="tree1">
 *                    </div>
 *                </div>
 *            </div>
 *            <div class="panel panel-default">
 *                <div class="panel-body">
 *                    <div ra-tree="tree2" ra-tree-expand-on-caret="true">
 *                    </div>
 *                </div>
 *            </div>
 *         </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppOne', ['mobile-toolkit-ra']);
 *        mod.controller('exampleCtrl',
 *        ['$scope',
 *            function ($scope) {
 *                'use strict';
 *                //definition of the tree models
 *                $scope.tree1 = [
 *                    {
 *                        label: "My node 1",
 *                        myProperty : "myProperty 1",
 *                        children: [
 *                            {
 *                                label: "My node 1.1",
 *                                myProperty : "myProperty 1.1",
 *                                children: [
 *                                    {
 *                                        label: "My node 1.1.1",
 *                                        myProperty : "myProperty 1.1.1",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.2",
 *                                        myProperty : "myProperty 1.1.2",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.3",
 *                                        myProperty : "myProperty 1.1.3",
 *                                        children: []
 *                                    }
 *                                ]
 *                            }
 *                        ]
 *                    }
 *                ];
 *
 *                $scope.tree2 = [
 *                    {
 *                        label: "My node 1",
 *                        myProperty : "myProperty 1",
 *                        children: [
 *                            {
 *                                label: "My node 1.1",
 *                                myProperty : "myProperty 1.1",
 *                                children: [
 *                                    {
 *                                        label: "My node 1.1.1",
 *                                        myProperty : "myProperty 1.1.1",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.2",
 *                                        myProperty : "myProperty 1.1.2",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.3",
 *                                        myProperty : "myProperty 1.1.3",
 *                                        children: []
 *                                    }
 *                                ]
 *                            }
 *                        ]
 *                    }
 *                ];
 *            }
 *        ]);
 *
 *    </file>
 * </example>
 *
 * The example below shows how to extend the _raTree_ directive with
 * the custom extensions and how to use the api.
 * <example module="exampleAppTwo">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl">
 *            <div class="panel-body">
 *                <div class="panel-row">selected label: {{treeLabel}}</div>
 *                <div class="panel-row">
 *                    <input type="button" ng-click="getSelectedNode()" value="Save selected"/>
 *                    <input type="button" ng-click="selectNode()" value="Load selected"/>
 *                    <input type="button" ng-click="clearSelection()" value="Clear selected"/>
 *                    <input type="button" ng-click="collapseNodes()" value="Collapse nodes"/>
 *                    <input type="button" ng-click="saveNodes()" value="Save nodes"/>
 *                    <input type="button" ng-click="loadNodes()" value="Load nodes"/>
 *                </div>
 *            </div>
 *            <div class="panel panel-default">
 *                <div class="panel-body">
 *                    <div ra-tree="tree"
 *                        ra-tree-user-select-callback="myUserSelectCallback(node)"
 *                        ra-tree-node-ext="treeExtension"
 *                        set-api="setTreeApi(api)">
 *                    </div>
 *                </div>
 *            </div>
 *         </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppTwo', ['mobile-toolkit-ra']);
 *        mod.controller('exampleCtrl',
 *        ['$scope',
 *            function ($scope) {
 *                'use strict';
 *
 *                var treeApi, selectedNode, expandedNodes = [];
 *                $scope.setTreeApi = function (api) {
 *                    treeApi = api;
 *                };
 *
 *                $scope.getSelectedNode = function () {
 *                    if (treeApi && treeApi.getSelectedNode) {
 *                        selectedNode = treeApi.getSelectedNode();
 *                    }
 *                };
 *
 *                $scope.clearSelection = function () {
 *                    if (treeApi && treeApi.clearSelection) {
 *                        treeApi.clearSelection();
 *                    }
 *                };
 *
 *                $scope.selectNode = function () {
 *                    if (selectedNode !== undefined && treeApi && treeApi.selectNode) {
 *                        treeApi.selectNode(selectedNode);
 *                    }
 *                };
 *
 *                $scope.loadNodes = function () {
 *                    if (treeApi && treeApi.setExpandedNodes) {
 *                        treeApi.setExpandedNodes(angular.copy(expandedNodes));
 *                    }
 *                };
 *
 *                $scope.saveNodes = function () {
 *                    if (treeApi && treeApi.getExpandedNodes) {
 *                        expandedNodes = angular.copy(treeApi.getExpandedNodes());
 *                    }
 *                };
 *
 *                $scope.collapseNodes = function () {
 *                    if (treeApi && treeApi.collapseNodes) {
 *                        treeApi.collapseNodes();
 *                    }
 *                };
 *                //definition of the tree model
 *                $scope.tree = [
 *                    {
 *                        label: "My node 1",
 *                        myProperty : "myProperty 1",
 *                        children: []
 *                    },
 *                    {
 *                        label: "My node 2",
 *                        myProperty : "myProperty 2",
 *                        children: [
 *                            {
 *                                label: "My node 2.1",
 *                                myProperty : "myProperty 2.1",
 *                                hasSchedule: true,
 *                                children: [
 *                                    {
 *                                        label: "My node 2.1.1",
 *                                        myProperty : "myProperty 2.1.1",
 *                                        children: [
 *                                            {
 *                                                label: "My node 2.1.1.1",
 *                                                myProperty : "myProperty 2.1.1.1"
 *                                            }
 *                                        ]
 *
 *                                    }
 *                                ]
 *                            },
 *                            {
 *                                label: "My node 3.1",
 *                                myProperty : "myProperty 3.1",
 *                                hasSchedule: true,
 *                                children: [
 *                                    {
 *                                        label: "My node 3.1.1",
 *                                        myProperty : "myProperty 3.1.1",
 *                                        children: [
 *                                            {
 *                                                label: "My node 3.1.1.1",
 *                                                myProperty : "myProperty 3.1.1.1"
 *                                            }
 *                                        ]
 *
 *                                    }
 *                                ]
 *                            }
 *                        ]
 *                    },
 *                    {
 *                        label: "My node 4",
 *                        myProperty : "myProperty 4",
 *                        children: [
 *                            {
 *                                label: "My node 4.1",
 *                                myProperty : "myProperty 4.1",
 *                                children: []
 *                            }
 *                        ]
 *                    }
 *                ];
 *
 *                $scope.myUserSelectCallback = function (node) {
 *                    $scope.treeLabel = node.label;
 *                };
 *
 *                $scope.treeExtension = [
 *                    {
 *                        iconClass : "ra-icon ra-icon-archive",
 *                        condition : function (node) {
 *                            return node && node.hasArchive;
 *                        }
 *                    },
 *                    {
 *                        iconClass : "ra-icon ra-icon-schedules",
 *                        condition : function (node) {
 *                            return node && node.hasSchedule;
 *                        }
 *                    }
 *                ]
 *            }
 *        ]);
 *
 *    </file>
 * </example>
 * The example below shows how to use the _raTree_ directive along with the _raSplitter_ directive:
 * <example module="exampleAppThree">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl">
 *            <div class="panel panel-default">
 *                <div class="panel-body">
 *                    <div class="ra-flex-column" style="height:250px">
 *                       <div class="ra-flex-item-dynamic ra-flex-row" ra-splitter>
 *                           <div class="ra-flex-item-dynamic ra-flex-column"
 *                               ra-splitter-pane="{collapsible: true, minSize: 50}">
 *                               <div class="ra-flex-item-dynamic ra-scroll-y">
 *                                   <div ra-tree="tree"
 *                                       ra-tree-user-select-callback="myUserSelectCallback(node)"/>
 *                                   </div>
 *                               </div>
 *                           </div>
 *                           <div class="ra-flex-item-dynamic ra-flex-column"
 *                               ra-splitter-pane="{collapsible: true, minSize: 100}">
 *                               <div class="ra-flex-item-dynamic ra-scroll-y">
 *                                   <div class="panel-row">selected label: {{treeLabel}}</div>
 *                               </div>
 *                           </div>
 *                       </div>
 *                    </div>
 *                </div>
 *            </div>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppThree', ['mobile-toolkit-ra']);
 *        mod.controller('exampleCtrl',
 *        ['$scope',
 *            function ($scope) {
 *                'use strict';
 *                //definition of the tree model
 *                $scope.tree = [
 *                    {
 *                        label: "My node 1",
 *                        myProperty : "myProperty 1",
 *                        children: [
 *                            {
 *                                label: "My node 1.1",
 *                                myProperty : "myProperty 1.1",
 *                                children: [
 *                                    {
 *                                        label: "My node 1.1.1",
 *                                        myProperty : "myProperty 1.1.1",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.2",
 *                                        myProperty : "myProperty 1.1.2",
 *                                        children: []
 *                                    },
 *                                    {
 *                                        label: "My node 1.1.3",
 *                                        myProperty : "myProperty 1.1.3",
 *                                        children: []
 *                                    }
 *                                ]
 *                            }
 *                        ]
 *                    }
 *                ];
 *
 *                $scope.myUserSelectCallback = function (node) {
 *                    $scope.treeLabel = node.label;
 *                };
 *            }
 *        ]);
 *    </file>
 * </example>
 * The example below shows how to use the __isLoading__ property of a node
 * (showing/hiding the "loading" indicator when the node label is clicked):
 * <example module="exampleAppFour">
 *    <file name="index.html">
 *        <div ng-controller="exampleCtrl">
 *            <div class="panel panel-default">
 *                <div class="panel-body" style="height:180px">
 *                    <div ra-tree="tree" ra-tree-expand-on-caret="true"
 *                         ra-tree-user-select-callback="toggleLoadingIndicator(node)"></div>
 *                </div>
 *            </div>
 *        </div>
 *    </file>
 *    <file name="script.js">
 *        var mod = angular.module('exampleAppFour', ['mobile-toolkit-ra']);
 *        mod.controller('exampleCtrl',
 *        ['$scope',
 *            function ($scope) {
 *                'use strict';
 *                //definition of the tree model
 *                $scope.tree = [
 *                    {
 *                        label: "Tree 5 node 1",
 *                        children: [
 *                            {
 *                                label: "Tree 5 node 1.1",
 *                                children: [
 *                                    {
 *                                        label: "Tree 5 node 1.1.1",
 *                                        children: []
 *                                    }
 *                                ]
 *                            },
 *                            {
 *                                label: "Tree 5 node 1.2",
 *                                children: []
 *                            }
 *                        ]
 *                    },
 *                ];
 *
 *                $scope.toggleLoadingIndicator = function (node) {
 *                    node.isLoading = !node.isLoading;
 *                };
 *            }
 *        ]);
 *    </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raTree", [ "raIdGenSvc", "$templateCache", function(raIdGenSvc, $templateCache) {
    "use strict";
    return {
        restrict: "A",
        template: $templateCache.get("raTree/raTree.tpl.html"),
        scope: {
            model: "=raTree",
            raTreeUserSelectCallback: "&",
            raTreeNodeExt: "=",
            raTreeExpandOnCaret: "=",
            raTreeNodeIconEnabled: "=?",
            setApi: "&"
        },
        controller: "raTreeCtrl",
        link: function(scope, directiveElem, attrs) {
            var treeApi = {};
            /**
                     * @description Provides api of directive
                     * @constructor
                     */
            function RaTreeApi() {
                return {
                    getSelectedNode: scope.getSelectedNode,
                    selectNode: scope.selectNode,
                    clearSelection: scope.clearSelection,
                    getExpandedNodes: scope.getExpandedNodes,
                    setExpandedNodes: scope.setExpandedNodes,
                    isExpanded: scope.isExpanded,
                    expandNode: scope.expandNode,
                    collapseNode: scope.collapseNode,
                    collapseNodes: scope.collapseNodes
                };
            }
            // If the user has provided an setApi function to obtain the public API,
            // create and call it now.
            if (attrs.setApi) {
                treeApi = new RaTreeApi();
                scope.setApi({
                    api: treeApi
                });
            }
        }
    };
} ]).controller("raTreeCtrl", [ "$scope", function($scope) {
    "use strict";
    var tree = {
        raTree: $scope.raTree
    };
    $scope.selectedNode = "";
    $scope.expandedNodes = [];
    $scope.selectNode = function(itemId) {
        $scope.selectedNode = itemId;
    };
    $scope.getSelectedNode = function() {
        return $scope.selectedNode;
    };
    $scope.clearSelection = function() {
        $scope.selectedNode = "";
    };
    $scope.isExpanded = function(nodeId) {
        return $scope.expandedNodes.indexOf(nodeId) >= 0;
    };
    $scope.expandNode = function(nodeId) {
        $scope.expandedNodes.push(nodeId);
    };
    $scope.collapseNode = function(nodeId) {
        $scope.expandedNodes.splice($scope.expandedNodes.indexOf(nodeId), 1);
    };
    $scope.collapseNodes = function() {
        $scope.expandedNodes = [];
    };
    $scope.getExpandedNodes = function() {
        return $scope.expandedNodes;
    };
    $scope.setExpandedNodes = function(nodes) {
        $scope.expandedNodes = nodes;
    };
    if ($scope.raTreeUserSelectCallback) {
        tree.userDefinedCallback = $scope.raTreeUserSelectCallback;
    }
    if ($scope.raTreeExpandOnCaret) {
        tree.expandOnCaret = $scope.raTreeExpandOnCaret;
    }
    tree.nodeIconEnabled = $scope.raTreeNodeIconEnabled === true;
    if ($scope.raTreeNodeExt) {
        tree.treeExtension = $scope.raTreeNodeExt;
    }
    this.selectNode = $scope.selectNode;
    this.getSelectedNode = $scope.getSelectedNode;
    this.isExpanded = $scope.isExpanded;
    this.expandNode = $scope.expandNode;
    this.collapseNode = $scope.collapseNode;
    this.getTree = function() {
        return tree;
    };
} ]).directive("raTreeInternal", [ "$compile", "$templateCache", function($compile, $templateCache) {
    "use strict";
    return {
        require: "^raTree",
        restrict: "A",
        scope: {
            model: "=raTreeInternal",
            raTreeNodeIndent: "=",
            raTreeNodeId: "="
        },
        link: function(scope, elements, attrs, treeCtrl) {
            var template;
            if (scope.raTreeNodeIndent !== undefined) {
                scope.indent = scope.raTreeNodeIndent + 1;
            } else {
                scope.indent = 0;
            }
            // converts the scope.indent (integer) to the collection used by the ng-repeat
            scope.getIndentation = function() {
                var arr = [];
                for (var i = 0; i < scope.indent; i++) {
                    arr.push(i);
                }
                return arr;
            };
            // returns node style class
            scope.getNodeStyle = function(node, index) {
                if (node) {
                    if (node.isLoading) {
                        return "ra-spinner";
                    }
                    if (node.children && node.children.length) {
                        return treeCtrl.isExpanded(scope.getId(index)) ? "ra-icon-caret-expanded" : "ra-icon-caret-collapsed";
                    }
                }
                return "empty-node";
            };
            // returns node head style class
            scope.getNodeHeadStyle = function(index) {
                if (scope.getId(index) === treeCtrl.getSelectedNode()) {
                    return "ra-tree-node-selected";
                }
            };
            scope.getExtension = function() {
                return treeCtrl.getTree().treeExtension;
            };
            scope.getId = function(index) {
                var prefix = "";
                if (scope.raTreeNodeId !== undefined) {
                    prefix = scope.raTreeNodeId + "_";
                }
                return prefix + index;
            };
            scope.isExpanded = function(index) {
                return treeCtrl.isExpanded(scope.getId(index));
            };
            scope.nodeIconEnabled = function() {
                return treeCtrl.getTree().nodeIconEnabled;
            };
            template = $compile($templateCache.get("raTree/raTreeInternal.tpl.html"))(scope);
            elements.append(template);
            if (!scope.selectNodeHead) {
                scope.selectNodeHead = function(index, event) {
                    var indexId = scope.getId(index);
                    if (treeCtrl.getTree().expandOnCaret) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        }
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        event.cancelBubble = true;
                        event.returnValue = false;
                        if (treeCtrl.isExpanded(indexId)) {
                            treeCtrl.collapseNode(indexId);
                        } else {
                            treeCtrl.expandNode(indexId);
                        }
                    }
                };
            }
            if (!scope.selectNode) {
                scope.selectNode = function(node, index) {
                    var indexId = scope.getId(index);
                    treeCtrl.selectNode(indexId);
                    if (treeCtrl.getTree().userDefinedCallback) {
                        treeCtrl.getTree().userDefinedCallback({
                            node: node
                        });
                    }
                    if (!treeCtrl.getTree().expandOnCaret) {
                        if (treeCtrl.isExpanded(indexId)) {
                            treeCtrl.collapseNode(indexId);
                        } else {
                            treeCtrl.expandNode(indexId);
                        }
                    }
                };
            }
        }
    };
} ]);

/* global angular */
/* global navigator */
/*jshint bitwise: false*/
/**
 * @ngdoc directive
 * @name mobile-toolkit-ra.directive:raTruncate
 * @module mobile-toolkit-ra
 * @restrict A
 * @scope
 *
 * @param {string} ngBind angular bound value to append
 * @param {.=} [breakAll] if supplied, will truncate text between any two letters.  If not supplied, will
 * truncate by word. (Like CSS { word-break: break-all}). When truncating by word, if the first word does not fit,
 * the break-all behavior is forced.
 *
 * @description
 * An Angular directive to truncate multi-line text to visible height of an element. Bound data will be
 * placed in element text. Supports truncating by word or at any character. When truncating by word, if the
 * first word does not fit, the break-all behavior is forced.
 *
 * NOTE: Only use this component if you need multi-line truncation WITH an appended ellipsis. If you need a single
 * line truncate and ellipsis, or just a multi line truncate (without appending ellipsis), a CSS only solution can be
 * used.  Use the "ra-overflow" class (defined in mobile-toolkit-ra.css), which has been created for these use cases.
 *
 * NOTE: This component works on visible space of an element, so it is required to have the max-height or
 * height property to be set on the element that this is applied to. It cannot be applied to a parent div.
 *
 * NOTE: This component listens for the browser's window resize event. If the element is in a container that
 * can be resized (like resizable panels) and you want to truncate the text, then the event
 * `LAYOUT_EVENTS.ELEMENT_RESIZE` should be broadcast.
 * <pre>
 *      scope.$broadcast(LAYOUT_EVENTS.ELEMENT_RESIZE);
 * </pre>
 *
 * ngBind is used here as it is a real angular directive that binds the property on scope to the element text.
 * In fact, they recommend using it so you don't see the template markup '{{ }}' on your page before rendering.
 * https://docs.angularjs.org/api/ng/directive/ngBind. In the case of this component, ngBind is used so it "appears"
 * to work like regular binding, but internally does something different.
 *
 * <!--
 * Based on work from https://github.com/dibari/angular-ellipsis.  It was modified to add break-all functionality
 * and some unneeded functionality was removed. Also the original source needed to be modified as it did
 * not create an angular module.  The removed functionality included an override for the ellipsis character,
 * adding text after the ellipsis, and adding click functionality to the ellipsis (show more).
 * -->
 * @example
 * <example module="mobile-toolkit-ra">
 *     <file name="index.html">
 *         <div ng-controller="ctrl1">
 *             <p>
 *                 <button ng-click="changeSize()" class="btn">Switch div width</button>
 *             </p>
 *             <div ra-truncate ng-bind="boundData" class="maxWidth100">
 *             </div>
 *             <div ra-truncate ng-bind="boundData2" break-all class="width100">
 *             </div>
 *             <div ra-truncate ng-bind="boundData3" class="width100">
 *             </div>
 *             <div ra-truncate ng-bind="boundData" break-all class="height20">
 *             </div>
 *         </div>
 *     </file>
 *     <file name="script.js">
 *         var module = angular.module('mobile-toolkit-ra');
 *         module.controller('ctrl1', ['$scope', '$rootElement', 'LAYOUT_EVENTS',
 *                 function($scope, $rootElement, LAYOUT_EVENTS) {
 *                     $scope.changedSize = false;
 *                     $scope.boundData = 'Some text that we want to truncate';
 *                     $scope.boundData2 = 'AnotherTextThatShouldBeTruncatedAsWell';
 *                     $scope.boundData3 = 'LongTextWhereBreakAllIsForced';
 *                     $scope.changeSize = function () {
 *                         var widthSize;
 *                         $scope.changedSize = !$scope.changedSize;
 *                         widthSize = $scope.changedSize ? "50px" : "";
 *                         $rootElement.find("div[ra-truncate]").css("width", widthSize);
 *                         $scope.$broadcast(LAYOUT_EVENTS.ELEMENT_RESIZE);
 *                     };
 *                 }]);
 *     </file>
 *     <file name="style.css">
 *         .width100 {
 *             width: 100px;
 *             height: 20px;
 *             word-wrap: break-word;
 *             word-break: break-all;
 *         }
 *         .maxWidth100 {
 *             max-width: 100px;
 *             height: 20px;
 *         }
 *         .height20 {
 *             height: 20px;
 *         }
 *     </file>
 * </example>
 */
angular.module("mobile-toolkit-ra").directive("raTruncate", [ "$window", "LAYOUT_EVENTS", "raTimeoutCollectorSvc", function($window, LAYOUT_EVENTS, raTimeoutCollectorSvc) {
    "use strict";
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return {
        restrict: "A",
        scope: {
            ngBind: "=",
            breakAll: "@?"
        },
        link: function(scope, element, attributes) {
            var lastElementHeight, lastElementWidth, breakAll = typeof attributes.breakAll !== "undefined";
            /**
                         * Helper function that escapes HTML entities
                         * that may occur in scope.ngBind.
                         * @param {string} sourceHtml
                         * @returns {string} returns html
                         */
            function escapeHtmlEntities(sourceHtml) {
                var el = angular.element("<textarea />");
                var result = el.text(sourceHtml).html();
                el.remove();
                return result;
            }
            /**
                         * Helper function that is responsible for truncating
                         * text of element if it has overflow.
                         */
            function buildEllipsis() {
                var ellipsisSymbol = "&hellip;", isOverflowedFlag, indexOfBindArrayIn, indexOfBindArrayOut, bindArrayIn, bindArrayOut = [], bindArrayInLength = 0, bindArrayToContact, indexOfTextIn, indexOfTextOut, textIn, textInLength = 0, textOut = "", encodedContent, truncatedText, forceBreakAll = false;
                if (typeof scope.ngBind === "string") {
                    // this is a way of encoding and thus escaping HTML entities
                    // that may occur in scope.ngBind - in this case we don't
                    // want the HTML entities displayed (rendered)
                    encodedContent = escapeHtmlEntities(scope.ngBind);
                    // another way of not displaying HTML entities is to simply do:
                    //
                    // element.text(scope.ngBind);
                    //
                    // but it's better to preserve the ability to display HTML
                    // content with special characters escaped rather than just
                    // outputting plain text
                    element.html(encodedContent);
                    isOverflowedFlag = isOverflowed(element);
                    if (isOverflowedFlag) {
                        bindArrayIn = encodedContent.split(" ");
                        do {
                            if (isOverflowedFlag) {
                                // the part which divides the bindArrayIn by indexOfBindArrayIn
                                // and the right part of array is stored in bindArrayOut,
                                // the bindArrayInLength includes the length of bindArrayIn
                                // from the previous step and means that this length of array
                                // should not be truncated
                                indexOfBindArrayIn = bindArrayInLength + (bindArrayIn.length - bindArrayInLength >> 1);
                                bindArrayOut = bindArrayIn.splice(indexOfBindArrayIn, bindArrayIn.length);
                            } else {
                                // the part where the text isn't overflowed
                                // so to the bindArrayIn is added the half of elements from bindArrayOut
                                // stores the length of current array for the next iteration
                                // because now we know that length of array fits inside an element
                                // so it shouldn't be truncated
                                bindArrayInLength = bindArrayIn.length;
                                indexOfBindArrayOut = bindArrayOut.length >> 1;
                                // dividing the array bindArrayOut on half and
                                // adding the left part from bindArrayOut to the bindArrayIn
                                bindArrayToContact = bindArrayOut.splice(0, indexOfBindArrayOut);
                                bindArrayIn = bindArrayIn.concat(bindArrayToContact);
                            }
                            element.html(bindArrayIn.join(" ") + ellipsisSymbol);
                            isOverflowedFlag = isOverflowed(element);
                        } while (bindArrayOut.length > 1);
                        if (bindArrayIn.length === 0 || bindArrayIn.length === 1 && isOverflowedFlag) {
                            // first word is long overflowing word - force breakAll
                            forceBreakAll = true;
                        }
                        // the part which removes the last element from bindArrayIn
                        // because of this that remained only an one word
                        // which couldn't fit to the available place but still the text
                        // is overflowed
                        if (isOverflowedFlag && bindArrayIn.length > 0) {
                            bindArrayOut = [ bindArrayIn.pop() ];
                            element.html(bindArrayIn.join(" ") + ellipsisSymbol);
                        }
                        // the part which truncates the remained word
                        // in case if the breakAll is set to true
                        if ((breakAll || forceBreakAll) && bindArrayOut.length === 1) {
                            // on beginning we assume that the text is overflowed
                            // so in below loop first we have to cut the text on half
                            isOverflowedFlag = true;
                            textIn = bindArrayOut[0];
                            truncatedText = bindArrayIn.join(" ");
                            do {
                                if (isOverflowedFlag) {
                                    // the part which cuts the textIn by indexOfTextIn and the right
                                    // part of cut text is stored in textOut,
                                    // the textInLength includes the length of textIn from previous step
                                    // and means that this length of text should not be truncated
                                    indexOfTextIn = textInLength + (textIn.length - textInLength >> 1);
                                    // the right part of half textIn is appended to textOut
                                    // for the next iteration
                                    textOut = textIn.substr(indexOfTextIn);
                                    textIn = textIn.substr(0, indexOfTextIn);
                                } else {
                                    // the part where the text isn't overflowed
                                    // so to the left part from half of textOut
                                    // is appended to the textIn
                                    // stores the length of current text for the next iteration
                                    // because now we know that length of text fits inside an element
                                    // so it shouldn't be truncated
                                    textInLength = textIn.length;
                                    indexOfTextOut = textOut.length >> 1;
                                    textIn = textIn + textOut.substr(0, indexOfTextOut);
                                    // the only right part from half of textOut
                                    // is needed for the next iteration
                                    textOut = textOut.substr(indexOfTextOut);
                                }
                                element.html(truncatedText + (textIn.length > 0 ? " " + textIn : "") + ellipsisSymbol);
                                isOverflowedFlag = isOverflowed(element);
                            } while (textOut.length > 1);
                            if (isOverflowedFlag && textIn.length > 0) {
                                // we have to truncate the last character but only when there is anything.
                                // Otherwise we didn't fit even one character
                                textIn = textIn.substr(0, textIn.length - 1);
                                element.html(truncatedText + (textIn.length > 0 ? " " + textIn : "") + ellipsisSymbol);
                            }
                        }
                    }
                }
            }
            /**
                         * Helper function that checks if element has overflow of
                         * text beyond height or max-height.
                         * @param {element} thisElement DOM object
                         * @returns {boolean} true if element has overflow of text
                         */
            function isOverflowed(thisElement) {
                return thisElement[0].scrollHeight > thisElement[0].clientHeight;
            }
            /**
                         * Helper function that checks if an element's height or width has changed
                         * and executes the buildEllipsis function if needed
                         */
            function resize() {
                var offsetWidth = element.prop("offsetWidth"), offsetHeight = element.prop("offsetHeight");
                if (lastElementWidth !== offsetWidth || lastElementHeight !== offsetHeight || isSafari && isOverflowed(element)) {
                    buildEllipsis();
                }
                lastElementWidth = offsetWidth;
                lastElementHeight = offsetHeight;
            }
            // Execute ellipsis truncate if the data we are binding from changes
            scope.$watch("ngBind", function() {
                raTimeoutCollectorSvc.add(resize);
                lastElementWidth = undefined;
                lastElementHeight = undefined;
            });
            var onResize = function() {
                raTimeoutCollectorSvc.add(resize);
            };
            element.css("overflow", "hidden");
            // Execute ellipsis truncate if size of element has been changed
            scope.$on(LAYOUT_EVENTS.ELEMENT_RESIZE, onResize);
            angular.element($window).on("resize", onResize);
            scope.$on("$destroy", function() {
                angular.element($window).off("resize", onResize);
                raTimeoutCollectorSvc.remove(resize);
            });
        }
    };
} ]);
//# sourceMappingURL=debug/mobile-toolkit-ra.js.map