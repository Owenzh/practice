// Copyright Rockwell Automation Technologies, Inc.
// All Rights Reserved.

/*global angular, app*/

angular.module('vpFilterModule')

    .filter('vpCountNumberFilter', [
        '$filter',
        function($filter) {
            var maxCount = 2000,
                maxText = '2,000+',
                maxBadgeCount = 99,
                maxBadgeText = '+';

            // Available format:
            //   1
            //   99
            //   999
            //   1,999
            //   2,000+ : count number greater than 2000
            function getFormattedText(count) {
                var formattedText = '';

                if (!angular.isNumber(count) || count !== count || count <= 0) {
                    formattedText = '';

                } else if (count > 0 && count <= maxCount) {
                    formattedText = $filter('number')(count, 0);

                } else {
                    formattedText = maxText;
                }

                return formattedText;
            }

            // Available format:
            //   '1'
            //   '99'
            //   '+' : count number greater than 99
            function getFormattedBadgeText(count) {
                var formattedText = ''

                if (!angular.isNumber(count) || count !== count || count <= 0) {
                    formattedText = '';

                } else if (count > 0 && count <= maxBadgeCount) {
                    formattedText = count + '';

                } else {
                    formattedText = maxBadgeText;
                }

                return formattedText;
            }

            // convert a given count number to proper display format
            function vpCountNumberFilter(count, isBadge) {
                if (isBadge) {
                    return getFormattedBadgeText(count);

                } else {
                    return getFormattedText(count);
                }
            }

            return vpCountNumberFilter;
        }
    ]);

describe('FTVP web api test suite', function () {

    beforeEach(angular.mock.module('vpFilterModule'));

    describe('Filter', function () {
        var $filter;

        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
        }));

        it('function test', function () {
            var vpCountNumberFilter = $filter('vpCountNumberFilter');
            var formattedText;
            //isBadge--true 99

            //isBadge--false 2000
            formattedText = vpCountNumberFilter(500, false);
            expect(formattedText).toEqual('500');

        });
    });


});