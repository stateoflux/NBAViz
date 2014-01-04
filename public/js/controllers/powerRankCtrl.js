angular.module('mean.chart')
  .controller('powerRankCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.teams = [
      {
        abbreviation:"ATL",
        franchise:"Atlanta Hawks",
        logo_url: "atl_hawks.gif",
        winPct:0.536,
        teamColor1: "#000080",
        teamColor2: "#FF0000",
        teamColor3: "#C0C0C0",
        starVal: 35000000
      },
      {
        abbreviation:"BOS",
        franchise:"Boston Celtics",
        logo_url: "bstn_celtics.gif",
        winPct:0.333,
        teamColor1: "#009E60",
        teamColor2: "#FFFFFF",
        teamColor3: "#000000",
        starVal: 35000000
      },
      {
        abbreviation:"BKN",
        franchise:"Brooklyn Nets",
        logo_url: "bkn_nets.gif",
        winPct:0.414,
        teamColor1: "#000000",
        teamColor2: "#FFFFFF",
        teamColor3: "#000000",
        starVal: 35000000
      },
      {
        abbreviation:"CHA",
        franchise:"Charlotte Bobcats",
        logo_url: "chlt_bobcats.gif",
        winPct:0.483,
        teamColor1: "#002B5C",
        teamColor2: "#5191CD",
        teamColor3: "#F26531",
        starVal: 35000000
      },
      {
        abbreviation:"CHI",
        franchise:"Chicago Bulls",
        logo_url: "chi_bulls.gif",
        winPct:0.385,
        teamColor1: "#D4001F",
        teamColor2: "#000000",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"CLE",
        franchise:"Cleveland Cavaliers",
        logo_url: "cvld_cavs.gif",
        winPct:0.37,
        teamColor1: "#b3121d",
        teamColor2: "#FFD700",
        teamColor3: "#000080",
        starVal: 35000000
      },
      {
        abbreviation:"DAL",
        franchise:"Dallas Mavericks",
        logo_url: "dls_mavericks.gif",
        winPct:0.571,
        teamColor1: "#0b60ad",
        teamColor2: "#072156",
        teamColor3: "#A9A9A9",
        starVal: 35000000
      },
      {
        abbreviation:"DEN",
        franchise:"Denver Nuggets",
        logo_url: "dvr_nuggets.gif",
        winPct:0.519,
        teamColor1: "#4b90cd",
        teamColor2: "#fdb827",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"DET",
        franchise:"Detroit Pistons",
        logo_url: "det_pistons.gif",
        winPct:0.467,
        teamColor1: "#00519a",
        teamColor2: "#EB003C",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"GSW",
        franchise:"Golden State Warriors",
        logo_url: "gs_warriors.png",
        winPct:0.552,
        teamColor1: "#04529c",
        teamColor2: "#FFCC33",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"HOU",
        franchise:"Houston Rockets",
        logo_url: "hstn_rockets.gif",
        winPct:0.621,
        teamColor1: "#CE1138",
        teamColor2: "#CCCCCC",
        teamColor3: "#000000",
        starVal: 35000000
      },
      {
        abbreviation:"IND",
        franchise:"Indiana Pacers",
        logo_url: "ind_pacers.gif",
        winPct:0.821,
        teamColor1: "#092c57",
        teamColor2: "#ffc322",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"LAC",
        franchise:"Los Angeles Clippers",
        logo_url: "la_clippers.gif",
        winPct:0.69,
        teamColor1: "#EE2944",
        teamColor2: "#146AA2",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"LAL",
        franchise:"Los Angeles Lakers",
        logo_url: "lakers.gif",
        winPct:0.464,
        teamColor1: "#4A2583",
        teamColor2: "#F5AF1B",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"MEM",
        franchise:"Memphis Grizzlies",
        logo_url: "mphs_grizzlies.gif",
        winPct:0.444,
        teamColor1: "#001F70",
        teamColor2: "#7399C6",
        teamColor3: "#BED4E9",
        starVal: 35000000
      },
      {
        abbreviation:"MIA",
        franchise:"Miami Heat",
        logo_url: "mia_heat.gif",
        winPct:0.778,
        teamColor1: "#1E3344",
        teamColor2: "#B62630",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"MIL",
        franchise:"Milwaukee Bucks",
        logo_url: "mil_bucks.gif",
        winPct:0.214,
        teamColor1: "#003614",
        teamColor2: "#E32636",
        teamColor3: "#C0C0C0",
        starVal: 35000000
      },
      {
        abbreviation:"MIN",
        franchise:"Minnesota Timberwolves",
        logo_url: "minn_timberwolves.gif",
        winPct:0.464,
        teamColor1: "#0F4D92",
        teamColor2: "#8c92ac",
        teamColor3: "#50c878",
        starVal: 35000000
      },
      {
        abbreviation:"NOP",
        franchise:"New Orleans Pelicans",
        logo_url: "no_pelicans.png",
        winPct:0.462,
        teamColor1: "#072248",
        teamColor2: "#A1854D",
        teamColor3: "#C72E35",
        starVal: 35000000
      },
      {
        abbreviation:"NYK",
        franchise:"New York Knicks",
        logo_url: "ny_knicks.gif",
        winPct:0.333,
        teamColor1: "#0953a0",
        teamColor2: "#FF7518",
        teamColor3: "#C0C0C0",
        starVal: 35000000
      },
      {
        abbreviation:"OKC",
        franchise:"Oklahoma City Thunder",
        logo_url: "ok_thunder.gif",
        winPct:0.815,
        teamColor1: "#007DC3",
        teamColor2: "#F05133",
        teamColor3: "#FDBB30",
        starVal: 35000000
      },
      {
        abbreviation:"ORL",
        franchise:"Orlando Magic",
        logo_url: "orl_magic.gif",
        winPct:0.286,
        teamColor1: "#0047AB",
        teamColor2: "#000000",
        teamColor3: "#708090",
        starVal: 35000000
      },
      {
        abbreviation:"PHI",
        franchise:"Philadelphia 76ers",
        logo_url: "phil_76ers.gif",
        winPct:0.286,
        teamColor1: "#D0103A",
        teamColor2: "#0046AD",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"PHX",
        franchise:"Phoenix Suns",
        logo_url: "phnx_suns.png",
        winPct:0.63,
        teamColor1: "#FF8800",
        teamColor2: "#423189",
        teamColor3: "#000000",
        starVal: 35000000
      },
      {
        abbreviation:"POR",
        franchise:"Portland Trail Blazers",
        logo_url: "por_trail_blazers.gif",
        winPct:0.821,
        teamColor1: "#F0163A",
        teamColor2: "#B6BFBF",
        teamColor3: "#000000",
        starVal: 35000000
      },
      {
        abbreviation:"SAC",
        franchise:"Sacramento Kings",
        logo_url: "sac_kings.gif",
        winPct:0.296,
        teamColor1: "#753BBD",
        teamColor2: "#000000",
        teamColor3: "#8A8D8F",
        starVal: 35000000
      },
      {
        abbreviation:"SAS",
        franchise:"San Antonio Spurs",
        logo_url: "sa_spurs.gif",
        winPct:0.786,
        teamColor1: "#000000",
        teamColor2: "#BEC8C9",
        teamColor3: "#FFFFFF",
        starVal: 35000000
      },
      {
        abbreviation:"TOR",
        franchise:"Toronto Raptors",
        logo_url: "tor_raptors.gif",
        winPct:0.423,
        teamColor1: "#B31B1B",
        teamColor2: "#000000",
        teamColor3: "#708090",
        starVal: 35000000
      },
      {
        abbreviation:"UTA",
        franchise:"Utah Jazz",
        logo_url: "utah_jazz.gif",
        winPct:0.258,
        teamColor1: "#00275D",
        teamColor2: "#FF9100",
        teamColor3: "#0D4006",
        starVal: 35000000
      },
      {
        abbreviation:"WAS",
        franchise:"Washington Wizards",
        logo_url: "wash_wizards.gif",
        winPct:0.48,
        teamColor1: "#C60C30",
        teamColor2: "#FFFFFF",
        teamColor3: "#002244",
        starVal: 35000000
      }
    ];

    $scope.stats = {
      "Hollinger_MPG": {weight: 1},
      "Hollinger_PF": {weight:1},
      "Hollinger_PFPG": {weight:1},
      "Hollinger_PFP48M": {weight:1},
      "PF_per_MIN": {weight:1},
      "Hollinger_FLAG": {weight:1},
      "Hollinger_TECH": {weight:1},
      "Hollinger_EJECT": {weight:1},
      "GP": {weight:1},
      "MIN_per_game": {weight:1},
      "Total_MIN": {weight:1},
      "STL_per_game": {weight:1},
      "Total_STL": {weight:1},
      "STL_per_MIN": {weight:1},
      "BLK_per_game": {weight:1},
      "Total_BLK": {weight:1},
      "BLK_per_MIN": {weight:1},
      "Opp_FGM_at_Rim_per_game": {weight:1},
      "Total_Opp_FGM_at_Rim": {weight:1},
      "Opp_FGM_at_Rim_per_min": {weight:1},
      "Opp_FGA_at_Rim_per_game": {weight:1},
      "Total_Opp_FGA_at_Rim": {weight:1},
      "Opp_FGA_at_Rim_per_Minute": {weight:1},
      "Opp_FGP_at_Rim": {weight:1},
      "Catch_and_Shoot_Total_PTS": {weight:1},
      "Catch_and_Shoot_PTS_per_game": {weight:1},
      "Catch_and_Shoot_PTS_per_Minute": {weight:1},
      "Catch_and_Shoot_FGM_per_game": {weight:1},
      "Total_Catch_and_Shoot_FGM": {weight:1},
      "Catch_and_Shoot_FGM_per_Minute": {weight:1},
      "Catch_and_Shoot_FGA_per_game": {weight:1},
      "Total_Catch_and_Shoot_FGA": {weight:1},
      "Catch_and_Shoot_FGA_per_Minute": {weight:1},
      "Catch_and_Shoot_FG_PCT": {weight:1},
      "Catch_and_Shoot_3FGM_per_game": {weight:1},
      "Total_Catch_and_Shoot_3FGM": {weight:1},
      "Catch_and_Shoot_3FGM_per_Minute": {weight:1},
      "Catch_and_Shoot_3FGA_per_game": {weight:1},
      "Total_Catch_and_Shoot_3FGA": {weight:1},
      "Catch_and_Shoot_3FGA_per_Minute": {weight:1},
      "Catch_and_Shoot_3FG_PCT": {weight:1},
      "Catch_and_Shoot_eFG_PCT": {weight:1},
      "REB_per_game": {weight:1},
      "Total_REB": {weight:1},
      "REB_per_Minute": {weight:1},
      "Percentage_of_rebounds_per_chance": {weight:1},
      "REB_Chances_per_game": {weight:1},
      "Total_REB_Chances": {weight:1},
      "REB_Chances_per_Minute": {weight:1},
      "Contested_REB_per_game": {weight:1},
      "Total_Contested_REB": {weight:1},
      "Contested_REB_per_Minute": {weight:1},
      "Uncontested_REB_per_game": {weight:1},
      "Total_Uncontested_REB": {weight:1},
      "Uncontested_REB_per_Minute": {weight:1},
      "Contested_REB_Percentage": {weight:1},
      "Distance_Traveled_Per_Game_miles": {weight:1},
      "Distance_Traveled_total_miles": {weight:1},
      "Distance_Traveled_per_Minute": {weight:1},
      "Average_Speed_mph": {weight:1},
      "Distance_Traveled_Per_48_Minutes_miles": {weight:1},
      "Pull_Up_Shots_Total_PTS": {weight:1},
      "Pull_Up_Shots_PTS_per_game": {weight:1},
      "Pull_Up_Shots_PTS_per_Minute": {weight:1},
      "Pull_Up_Shots_FGM_per_game": {weight:1},
      "Total_Pull_Up_Shots_FGM": {weight:1},
      "Pull_Up_Shots_FGM_per_Minute": {weight:1},
      "Pull_Up_Shots_FGA_per_game": {weight:1},
      "Total_Pull_Up_Shots_FGA": {weight:1},
      "Pull_Up_Shots_FGA_per_Minute": {weight:1},
      "Pull_Up_Shots_FG_PCT": {weight:1},
      "Pull_Up_Shots_FG3M_per_game": {weight:1},
      "Total_Pull_Up_Shots_FG3M": {weight:1},
      "Pull_Up_Shots_FG3M_per_Minute": {weight:1},
      "Pull_Up_Shots_FG3A_per_game": {weight:1},
      "Total_Pull_Up_Shots_FG3A": {weight:1},
      "Pull_Up_Shots_FG3A_per_Minute": {weight:1},
      "Pull_Up_Shots_FG3_PCT": {weight:1},
      "Pull_Up_Shots_EFG_PCT": {weight:1},
      "PTS_per_game": {weight:1},
      "Total_PTS": {weight:1},
      "PTS_per_Minute": {weight:1},
      "Drives_PTS_per_game": {weight:1},
      "Total_Drives_PTS": {weight:1},
      "Drives_PTS_per_Minute": {weight:1},
      "Drives_FG_PCT": {weight:1},
      "Close_Shots_PTS_per_game": {weight:1},
      "Total_Close_Shots_PTS": {weight:1},
      "Close_Shots_PTS_per_Minute": {weight:1},
      "Close_Shots_FG_PCT": {weight:1},
      "Total_Catch_and_Shoot_PTS": {weight:1},
      "Total_Pull_Up_Shots_PTS": {weight:1},
      "eFG_PCT": {weight:1},
      "FG_PCT_on_Drives": {weight:1},
      "Drives_Per_Game": {weight:1},
      "Total_Drives": {weight:1},
      "Drives_per_Minute": {weight:1},
      "Player_PPG_on_Drives": {weight:1},
      "Total_Player_PTS_on_Drives": {weight:1},
      "Player_PTS_on_Drives_per_Minute": {weight:1},
      "Team_PPG_on_Drives": {weight:1},
      "Total_Team_Points_on_Drives": {weight:1},
      "Team_Points_on_Drives_per_Minute": {weight:1},
      "PTS_Per_48_Min_on_Drives": {weight:1},
      "AST_per_game": {weight:1},
      "Total_AST": {weight:1},
      "AST_per_Minute": {weight:1},
      "Passes_per_game": {weight:1},
      "Total_Passes": {weight:1},
      "Passes_per_Minute": {weight:1},
      "FT_Assists_per_game": {weight:1},
      "Total_FT_Assists": {weight:1},
      "FT_Assists_per_Minute": {weight:1},
      "Secondary_Assists_per_game": {weight:1},
      "Total_Secondary_Assists": {weight:1},
      "Secondary_Assists_per_Minute": {weight:1},
      "Assist_opportunities_per_game": {weight:1},
      "Total_Assist_opportunities": {weight:1},
      "Assist_opportunities_per_Minute": {weight:1},
      "Points_created_by_assist_per_game": {weight:1},
      "Total_Points_created_by_assist": {weight:1},
      "Points_created_by_assist_per_Minute": {weight:1},
      "Points_Created_by_AST_Per_48_Min": {weight:1},
      "Touches_per_game": {weight:1},
      "Total_Touches": {weight:1},
      "Touches_per_Minute": {weight:1},
      "Front_Court_Touches_per_game": {weight:1},
      "Total_Front_Court_Touches": {weight:1},
      "Front_Court_Touches_per_Minute": {weight:1},
      "Time_of_Possession_per_game__min": {weight:1},
      "Total_Time_of_Possession": {weight:1},
      "Close_Touches_per_game": {weight:1},
      "Total_Close_Touches": {weight:1},
      "Close_Touches_per_Minute": {weight:1},
      "Elbow_Touches_per_game": {weight:1},
      "Total_Elbow_Touches": {weight:1},
      "Elbow_Touches_per_Minute": {weight:1},
      "PTS_Per_Touch": {weight:1},
      "PTS_Per_Half_Court_Touch": {weight:1}
    };

    $scope.players = [
      { name: "lebron james", headShot: "lebron_james.png" },
      { name: "lebron james", headShot: "lebron_james.png" },
      { name: "lebron james", headShot: "lebron_james.png" },
      { name: "lebron james", headShot: "lebron_james.png" },
      { name: "lebron james", headShot: "lebron_james.png" }
    ];


    $scope.options = {width: 940, height: 500};

    $scope.showToolTip = function() {

    };

    $scope.updateTeamStarVals = function (){
      console.log("updateTeamStarVals");
      $scope.teams.forEach(function (team){
        team.starVal += Math.floor(Math.random() * ( 5000000 - (-5000000)  + 1) + -5000000);
        console.log(team.starVal);
      });
    };

    $scope.calculateAllTeamStarVals = function (){
      $scope.teams.forEach(function (team){
        $scope.calculateTeamStar(team);
      });
    };


    $scope.calculateTeamStar = function (team) {
      $http.get('http://localhost:3000/teams/'+team.abbreviation)
        .success(function (teamData){
          var teamStarVal = 0;
          teamData.forEach(function (player) {
            teamStarVal += $scope.calculatePlayerStar(player);
          });
          team.starVal = teamStarVal;
        });
    };

    $scope.calculatePlayerStar = function (player, weights) {
      weights = weights || $scope.stats;
      var starStatistic = 0;
      for (var key in weights){
        starStatistic += player[key]*parseFloat(weights[key].weight);
      }
      return player.Total_MIN*starStatistic;
    };

    $scope.data = $scope.teams;

    $scope.hovered = function(d){
      console.log(d);
    };
  }]);


