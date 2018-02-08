angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.status', {
    url: '/char_Status',
    views: {
      'tab3': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

  .state('gurpsManager', {
    url: '/initial_page',
    templateUrl: 'templates/gurpsManager.html',
    controller: 'gurpsManagerCtrl'
  })

  .state('characterFeatures', {
    url: '/create_adventure_1',
    templateUrl: 'templates/characterFeatures.html',
    controller: 'characterFeaturesCtrl'
  })

  .state('characterStatus', {
    url: '/create_adventure_2',
    templateUrl: 'templates/characterStatus.html',
    controller: 'characterStatusCtrl'
  })

  .state('characterLanguages', {
    url: '/create_adventure_3',
    templateUrl: 'templates/characterLanguages.html',
    controller: 'characterLanguagesCtrl'
  })

  .state('characterSkills', {
    url: '/create_adventure_4',
    templateUrl: 'templates/characterSkills.html',
    controller: 'characterSkillsCtrl'
  })

  .state('characterAdvantages', {
    url: '/create_adventure_5',
    templateUrl: 'templates/characterAdvantages.html',
    controller: 'characterAdvantagesCtrl'
  })

  .state('characterDisadvantages', {
    url: '/create_adventure_6',
    templateUrl: 'templates/characterDisadvantages.html',
    controller: 'characterDisadvantagesCtrl'
  })

  .state('characterInventory', {
    url: '/create_adventure_7',
    templateUrl: 'templates/characterInventory.html',
    controller: 'characterInventoryCtrl'
  })

  .state('characterResume', {
    url: '/create_adventure_7',
    templateUrl: 'templates/characterResume.html',
    controller: 'characterResumeCtrl'
  })

  .state('tabsController.extras', {
    url: '/char_Extras',
    views: {
      'tab7': {
        templateUrl: 'templates/extras.html',
        controller: 'extrasCtrl'
      }
    }
  })

  .state('tabsController.tests', {
    url: '/char_Tests',
    views: {
      'tab1': {
        templateUrl: 'templates/tests.html',
        controller: 'testsCtrl'
      }
    }
  })

  .state('tabsController.inventory', {
    url: '/char_Inventory',
    views: {
      'tab6': {
        templateUrl: 'templates/inventory.html',
        controller: 'inventoryCtrl'
      }
    }
  })

  .state('tabsController.skills', {
    url: '/char_Skills',
    views: {
      'tab4': {
        templateUrl: 'templates/skills.html',
        controller: 'skillsCtrl'
      }
    }
  })

  .state('tabsController.equipments', {
    url: '/char_Equipments',
    views: {
      'tab9': {
        templateUrl: 'templates/equipments.html',
        controller: 'equipmentsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/initial_page')


});