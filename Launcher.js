var a = prompt("1-blob \n-about:blank \n3-N/A \n4-Repository"); if (A == 1) %7Bconst htmlContent = %60 <!DOCTYPE HTML><HTML lang="en"><head><title>New Tab</title><link rel="stylesheet" type="text/css" href="stylez.css"><link href="https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>html, body {height: 100%;margin: 0;}iframe {width: 100%; height: 100vh; border: none; } </style></head><body><iframe src="https://the-wagonization.github.io/The-Wagon-Site/Pages/Home.html"></iframe></body></HTML> `; const blob = new Blob([htmlContent], { type: %27text/html%27 }); const url = URL.createObjectURL(blob); window.open(url);  setTimeout(function() { window.location.replace(url); }, 3000)} else if (A == 2) {window.open(%27about:blank%27, %27_blank%27).document.write(`<iframe src="https://the-wagonization.github.io/The-Wagon-Site/Pages/Home.html" style="width:100%; height:100vh; border:none;"></iframe>`)} else if (A == 3) {window.open(%27https://the-wagonization.github.io/The-Wagon-Site/Pages/Home.html%27, %27_blank;%27)} else if (A == 4) {window.open(%27https://github.com/The-Wagonization/The-Wagon-Site/%27, %27_blank%27)} else if (A == null) {alert("odama")} else {alert("that character has aids")};
