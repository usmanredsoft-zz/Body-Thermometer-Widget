<?php 
include('loadquestions.php');
?>
<!doctype html>  
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Termometer</title>
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="SliderPips/css/jqueryui.min.css" />
<link rel="stylesheet" href="SliderPips/css/jquery-ui-slider-pips.min.css" />
<link rel="stylesheet" href="css/style.css">

<script type="text/javascript">
	var QUESTIONS = <?php echo $questions; ?>
</script>
</head>

<body>

<div id="container">
    

    <div id="main">
        <div class="border">
            <div class="inner">
            	<div id="introContainer" class="contentContainer">
            		<h2 class="section-title">Introduction</h2>
            		<p class="sectionContent">Temperature is measured using thermometer. Using the thermometer set the correct temperature for each question. There are 5 questions. You have 3 chances to correctly set the temperature for each question.</p>
            		<div class="button-wrapper">
            			<button type="button" id="startButton">Start</button>
            		</div>
            	</div>
            	<div id="scoreContainer" class="contentContainer">
            		<h2 class="section-title">Score</h2>
            		<div class="sectionContent" id="resultCard">
            			
            		</div>
            		<div class="button-wrapper">
            			<button type="button" id="playAgain">Play Again</button>
            		</div>
            	</div>
            	<div id="gameContainder" class="contentContainer">
                    <div id="questionContainer" class="sectionContent"></div>
        	    	<div id="thermometerContainer">
        				<div id="thermometer">
        					<div class="top"></div>
        					<div class="middle" style="height: 0px;"><span>0%</span></div>
        					<div class="bottom"></div>
        				</div>
        				<div id="thermometerRange">
        					<div class="slider scale-slider" id="flat-slider"></div>
        				</div>
        	    	</div>
        	    	<div id="resultCard"></div>
        	    	<button type="button" id="checkResult">Check</button>
        	    	<div id="statusContainer"></div>
            	</div>
            </div>
        </div>
    </div>

  
</div>


<script src="js/jquery-3.1.0.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="SliderPips/js/jquery-ui-slider-pips.js"></script>
<script src="js/script.js"></script>
</body>
</html>