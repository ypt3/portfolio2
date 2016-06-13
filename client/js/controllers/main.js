myPage.controller('UsersController', function ($scope, $location, $log, $uibModal, $document, $window) {


    $scope.projects = {
        Mean: {
          title: "MEAN Blog",
          slides: [
              {pic: '../img/Vibe/meanblog.png',
              caption: "Home Page"},
              {pic: "../img/Vibe/meanmain.png",
              caption: "Main page"},
              {pic: "../img/Vibe/meanpost.png",
              caption: "Posts page"}
          ],
          description: "Users can register/login to post and comment topics, also users can like or dislike posts and comments that relate to those topics.",
          tech:[
              {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
              {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
              {pic: "../img/logos/PassportLogo.svg", caption: "PassportJS"},
              {pic: "../img/logos/awslogo.png", caption: "AWS"}
           ],
           link: "http://54.187.89.164/#/home"
      } ,
      FlixnGrub: {
          title: "Game Shop",
          description: "Users can add customers and products. Customers can place orders of those products.",
          tech: [
              {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
              {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: "../img/logos/MaterializeLogo.png", caption: "MaterializeCSS"},
              {pic: "../img/logos/herokulogo.png", caption: "Heroku"}
          ],
          slides: [
              {pic: "../img/FlixnGrub/gamemain.png",
              caption: "Dashboard page"},
              {pic: "../img/FlixnGrub/gamecustomer.png",
              caption: "Add customers page"}
          ],
          link: "https://game-shop.herokuapp.com/#/"
      },
      Giphtionary: {
         title: "Doist",
         description: "Users can list up their daily task on this site and they can remove them once the task is completed.",
         tech: [
             {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
             {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
             {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
             {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
             {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
             {pic: "../img/logos/herokulogo.png", caption: "Heroku"}
          ],
          slides: [
              {pic: "../img/Giphtionary/doist.png",
              caption: "Main task page"},
          ],
         link: "https://doist.herokuapp.com/"
     },

      MEANTrivia: {
          // title: "MEAN Trivia",
          // description: "Trivia app that allows users to add questions, test themselves, filter, and compare scores from previous quizzes. Less front-end focus as was completed in under 5 hours.",
          // tech: [
          //     {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
          //     {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
          //     {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
          //     {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
          //     {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
          //     {pic: "../img/logos/awslogo.png", caption: "AWS"}
          // ],
          // slides: [
          //     {pic: "../img/MEANTrivia/MEANTrivia.png", caption: "Dashboard"},
          //     {pic: "../img/MEANTrivia/MEANTriviaFilter.png", caption: "Filter results"},
          //     {pic: "../img/MEANTrivia/MEANTriviaAdd.png", caption: "Add a Question to the quiz"},
          // ],
          // link: "https://ec2-52-53-232-51.us-west-1.compute.amazonaws.com"
      },


    PropertyFindr: {
        title: "Idea Wall",
        description: "Ruby on Rails app that people can post, share and like ideas",
        tech: [
            {pic: "../img/logos/ruby.png", caption: "Ruby"},
            {pic: "../img/logos/rails.png", caption: "Rails"},
            {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
            {pic: "../img/logos/sqlite.png", caption: "SQLite"}

        ],
        slides: [
        { pic: "../img/reactProperty/login.png", caption: "Login/Register Page"},
        {pic: "../img/reactProperty/main.png", caption: "Main Page"},
        {pic: "../img/reactProperty/info.png", caption: "Likes Info Page"}
    ],
        github: "https://github.com/ypt3/ideall-wall",
    },

    DojoParty: {
        title: "Ball Traveler",
        description: "Python app which allows users to search for their favorite NBA team season schedule.",
        tech: [
            {pic: "../img/logos/pythonLogo.png", caption: "Python"},
            {pic: "../img/logos/MySQL-icon.png", caption: "mySQL"},
            {pic: "../img/logos/flask2.png", caption: "Flask"},
            {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
            {pic: "../img/logos/jqueryLogo.png", caption: "jQuery"},
            {pic: "../img/logos/googleMapsAPI.png", caption: "Google Map API"}

        ],
        slides: [
            {pic: "../img/DojoParty/ball1.png", caption: "Main page"},
            {pic: "../img/DojoParty/ball2.png", caption: "Login/Register page"},
            {pic: "../img/DojoParty/ball3.png", caption: "Choose your team"}
        ],
        github: "https://github.com/jnguyen10/ball_traveller"
    }
}


    	   $scope.openModal = function(name){
    		   var modalInstance = $uibModal.open({
    		                 templateUrl: '../partials/Static/projectModal.html',
    		                 controller: 'ModalInstanceCtrl',
    		                 scope: $scope,
                             size: 'lg',
    		   	 			resolve: {
    							project: function() {
    								return $scope.projects[name]
    							}
    						}
    		               })
    	   		}

                $scope.sendMail = function(emailId,subject,message){
                    $window.open("mailto:"+ emailId + "?subject=" + subject+"&body="+message,"_self");
                };

$scope.email = function() {
    $scope.sendMail("alanalan216@gmail.com","Inquiry","");
    return
}

})
