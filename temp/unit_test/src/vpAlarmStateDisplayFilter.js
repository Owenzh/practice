// Copyright Rockwell Automation Technologies, Inc.
// All Rights Reserved.

/*global angular, app*/

angular.module('vpFilterModule')

    /**
     * Alarm state is evaluate by 4 binary bits. From higher bit to lower bit, they're
     * (isFaulted) -> (isAcked) -> (isActive) -> (isInactive)
     *      0             0             0              0      = 0
     *      0             0             0              1      = 1
     *      0             0             1              0      = 2
     *      0             1             0              0      = 4
     *      1             0             0              0      = 8
     */

    .filter('vpAlarmStateDisplay', function() {
        return function(state) {
            var parsedState = '';
            if(!state){
                return parsedState;
            }

            if ((state & 1) !== 0) {
                parsedState += 'Normal,' + ' ';
            }

            if ((state & 2) !== 0) {
                parsedState += 'In Alarm,' + ' ';
            }

            if ((state & 4) !== 0) {
                parsedState += 'Acked' + ' ';

            } else {
                parsedState += 'UnAcked' + ' ';
            }

            if ((state & 8) !== 0) {
                parsedState += 'Faulted';
            }

            return parsedState;
        }
    });
