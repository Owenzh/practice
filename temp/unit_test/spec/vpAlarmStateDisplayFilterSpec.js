describe('vpFilterModule test suite', function () {
    beforeEach(angular.mock.module('vpFilterModule'));
    var $filter;
    describe('vpAlarmStateDisplay filter', function () {
        beforeEach(angular.mock.inject(function (_$filter_) {
            $filter = _$filter_;
        }));
        it('state 0 should empty', function () {
            var r = $filter('vpAlarmStateDisplay')(0);
            expect(r).toEqual('');
        });
        it('state 1 should Normal, UnAcked', function () {
            var r = $filter('vpAlarmStateDisplay')(1);
            expect(r).toEqual('Normal, UnAcked ');
        });
        it('state 2 should In Alarm, UnAcked', function () {
            var r = $filter('vpAlarmStateDisplay')(2);
            expect(r).toEqual('In Alarm, UnAcked ');
        });
        it('state 4 should Acked', function () {
            var r = $filter('vpAlarmStateDisplay')(4);
            expect(r).toEqual('Acked ');
        });
        it('state 8 should UnAcked Faulted', function () {
            var r = $filter('vpAlarmStateDisplay')(8);
            expect(r).toEqual('UnAcked Faulted');
        });
    });
});