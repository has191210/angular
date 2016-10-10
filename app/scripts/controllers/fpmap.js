'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:FpmapCtrl
 * @description
 * # FpmapCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('FpmapCtrl', function ($scope,  leafletData, leafletBoundsHelpers) {
 
var maxBounds = leafletBoundsHelpers.createBoundsFromArray([[-293.5, -354], [293.5, 354]]);
var mainMarker = {
                lat: 51,
                lng: 0,
                focus: true,
                message: "Hey, drag me if you want",
                draggable: true
            };


 angular.extend($scope, {
        defaults: {
          scrollWheelZoom: false,
          crs: 'Simple',
          maxZoom: 0
        },
        center: {
            lat: 0,
            lng: 0,
            zoom: 0
        },
        maxBounds: maxBounds,
        layers: {
            baselayers: {
                andes: {
                    name: '',
                    type: 'imageOverlay',
                    url: 'images/OfficeLayout.png',
                    bounds: [[-293.5, -354], [293.5, 354]],
                      layerParams: {
                                showOnSelector: false,
                                noWrap: true,
                                attribution: 'Creative Commons image found <a href="http://www.flickr.com/photos/c32/8025422440/">here</a>'
                            }

                }
            },
        },


        markers: {
                    mainMarker: angular.copy(mainMarker)
                }
    });

  	
});
