function ChangeLanguage()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("aboutMe").innerHTML  = "<span style=\"font-weight:normal\"> I'm Kevin Pladdet, I’m 17 years old and from the Netherlands. I’m currently following an education about Software Development where I’m learning how to code and how to make games/websites.<br></br>I’m very interested when it comes to game development, I love making games from scratch and seeing how it develops towards a complete game. On this website you can find some projects I’ve made along the way, which you can play if you’d like.";
        document.getElementById("featuredProductsText").innerHTML = "Featured Products";
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is a 3D platformer where your goal is to get the best time possible.'; 
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Have tank fights with your friend in this simple game! Will you win? ';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Soccer with cars, against your friends or alone. Can you score enough goals? ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is a 2D game where you are climbing a construction site, can you get to the top? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is a challenging game that is easy to learn, but hard to master!';
        document.getElementById("tmsDescription").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks.';
        document.getElementById("emailDescription").innerHTML = '<span style="font-size:18px;"> Got something you want to tell me? Send me a message! ';
        document.getElementById("githubDescription").innerHTML = '<span style="font-size:18px;"> This is my GitHub page where I share the code of projects I have done.  ';
        document.getElementById("contactMe").innerHTML = "Contact Me";
        document.getElementById("translateButtonMail").innerHTML = "Mail Me";
        document.getElementById("translateButtonGithub").innerHTML = "GitHub Page";

        const collection = document.getElementsByClassName("moreInfoButton");
        for (let i = 0; i < collection.length; i++) 
        {
        collection[i].innerHTML = "More Info";
        }
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("aboutMe").innerHTML = "<span style=\"font-weight:normal\"> Mijn naam is Kevin Pladdet. Ik ben 17 jaar oud en ik kom uit Nederland. Op dit moment volg ik de opleiding Software Development, waar ik leer coderen en games/websites te maken. <br> </br> Ik ben erg geïnteresseerd als het gaat om game development. Ik vind het leuk om games vanaf het begin te maken en te zien hoe het ontwikkelt naar een complete game. Op deze website kan je allerlei projecten zien (en spelen) die ik heb gemaakt.";
        document.getElementById("featuredProductsText").innerHTML = "Aanbevolen Projecten";
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is een 3D Platformer met als doel om de snelste tijd te halen.';
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Tanks 2D is een simpel spel waarin je tankgevechten hebt met je vrienden.';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Voetbal met auto\'s, tegen je vrienden of alleen. Kun jij genoeg goals maken? ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is een 2D spel waar je een bouwplaats beklimt, kan jij de top bereiken? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen!';
        document.getElementById("tmsDescription").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten.';
        document.getElementById("emailDescription").innerHTML = '<span style="font-size:18px;"> Wil je me iets vertellen? Stuur me een berichtje!  ';
        document.getElementById("githubDescription").innerHTML = '<span style="font-size:18px;"> Dit is mijn GitHub pagina waar ik de code deel van projecten.';
        document.getElementById("contactMe").innerHTML = "Neem Contact Met Mij Op";
        document.getElementById("translateButtonMail").innerHTML = "Mail Mij";
        document.getElementById("translateButtonGithub").innerHTML = "GitHub Pagina";

        const collection = document.getElementsByClassName("moreInfoButton");
        for (let i = 0; i < collection.length; i++) 
        {
        collection[i].innerHTML = "Meer Info";
        }
    }
}

function ChangeLanguageImpact()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("aboutMe").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Impact is a 3D platformer where your goal is to get the best time possible. There is a timer in the top left and multiple checkpoints to help you along the way. <br></br><b>What did I learn?</b><br></br>While making this project I learned how to design maps and how to use ProBuilder + the Unity Terrain Editor.<br></br><b>Other Information</b><br></br>Impact took me 4 months to make in Unity (few hours per week) and you can play it on Windows. <br></br><i>I have lost the files of this project, so I can\'t link them.</i><br></br>Click <a href="https://itskevin183.itch.io/impact" target="_blank" rel="noopener noreferrer"><i>here</i></a> to try Impact out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>  ';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("aboutMe").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Impact is een 3D platformer met als doel om de snelste tijd te halen. Linksboven in het scherm is een timer en er zijn meerdere checkpoints die je helpen het level te halen. <br></br><b>Wat heb ik geleerd?</b><br></br>Terwijl ik dit project maakte leerde ik hoe ik ProBuilder en de Unity Terrain Editor kon gebruiken. <br></br><b>Overige Informatie</b><br></br>Impact kostte me 4 maanden om te maken in Unity (paar uur per week) en je kunt het spelen op Windows. <br></br><i>Ik ben de bestanden van dit project kwijt, dus ik kan ze helaas niet linken.</i><br></br>Klik <a href="https://itskevin183.itch.io/impact" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om Impact zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageSocCar()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("soccarInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>SocCar is a 3D game where you play soccer with cars. You can play a match with your friend in split screen mode or practice alone in the Training mode. You can also boost yourself to gain more speed and crash into your opponent or the ball.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to make a score system, a car controller and how to set up split screen.<br></br><b>Other Information</b><br></br>SocCar took me a month to make in Unity and you can play it on Windows and Mac. <br></br>Click <a href="https://github.com/KevinPladdet/SocCar" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of SocCar.</span><br></br>Click <a href="/gamebuilds/WebGL_SocCar/SocCarWeb.html"><i>here</i></a> to try SocCar out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("soccarInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>SocCar is een 3D-spel waarin je voetbal speelt met auto\'s. Je kunt een wedstrijd spelen met je vriend in split screen modus of alleen oefenen in de Training modus. Je kunt jezelf ook boosten om meer snelheid te krijgen en tegen je tegenstander of de bal te botsen.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik geleerd hoe je een scoresysteem maakt, een autocontroller en hoe je splitscreen instelt.<br></br><b>Overige Informatie</b><br></br>SocCar kostte me een maand om te maken in Unity en je kunt het spelen op Windows en Mac.<br></br>Klik <a href="https://github.com/KevinPladdet/SocCar" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub pagina van SocCar te gaan.</span><br></br>Klik <a href="/gamebuilds/WebGL_SocCar/SocCarWeb.html"><i>hier</i></a> om SocCar zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageTanks()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("tanksInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Tanks 2D is a simple game where you can have tank fights with your friend. There is a fun map and a powerup in the middle that will double your bullet speed. You can also shoot yourself to get launched in the opposite way, this can get you from one side of the mapto the other in seconds.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to make 2D movement, a shooting system and a powerup.<br></br><b>Other Information</b><br></br>Tanks 2D took me a month to make in Unity and you can play it on Windows and Mac.<br></br>Click <a href="https://github.com/KevinPladdet/Tanks_2D" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Tanks 2D.</span><br></br>Click <a href="/gamebuilds/tanks2d/tanks2D.html"><i>here</i></a> to try Tanks 2D out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>  ';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("tanksInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Tanks 2D is een eenvoudig spel waarin je tankgevechten kan hebben met je vrienden. Er is een leuke map met een powerup in het midden die je kogel snelheid verdubbelt. Je kan ook op jezelf schieten om in de tegenovergestelde richting te worden gelanceerd. Hierdoor kan je in seconden van de ene naar de andere kant van de map gaan.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik geleerd hoe ik 2D beweging, een schietsysteem en een powerup maak.<br></br><b>Overige Informatie</b><br></br>Tanks 2D kostte me een maand om te maken in Unity en je kunt het spelen op Windows en Mac.<br></br>Klik <a href="https://github.com/KevinPladdet/Tanks_2D" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub pagina van Tanks 2D te gaan.</span><br></br>Klik <a href="/gamebuilds/tanks2d/tanks2D.html"><i>hier</i></a> om Tanks 2D zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageSkills()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("education").innerHTML = '<span style=\"font-weight:normal\"> <i class="fa-regular fa-file-lines"></i> Education';
        document.getElementById("codingText").innerHTML = '<i class="fa-solid fa-code"></i> Coding';
        document.getElementById("skillsText").innerHTML = '<i class="fa-solid fa-gears"></i> Skills';
        document.getElementById("sdEducation").innerHTML = '<span style="font-weight:normal; font-size:32px;"> <u> Currently following a four year education of Software Development in the Netherlands </u>'
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("education").innerHTML = '<span style=\"font-weight:normal\"> <i class="fa-regular fa-file-lines"></i> Educatie';
        document.getElementById("sdEducation").innerHTML = '<span style="font-weight:normal; font-size:32px;"> <u> Op dit moment volg ik een vierjarige opleiding Software Development in Nederland </u>' 
        document.getElementById("educationYear").innerHTML = '2021 - 2025'
        document.getElementById("codingText").innerHTML = '<i class="fa-solid fa-code"></i> Coderen';
        document.getElementById("skillsText").innerHTML = '<i class="fa-solid fa-gears"></i> Vaardigheden';
    }
}

function ChangeLanguageFeaturedProducts()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("otherProjectsText").innerHTML = '<i class="fa-solid fa-up-right-from-square"></i>&nbsp; Other Projects';
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is a 3D platformer where your goal is to get the best time possible.'; 
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Have tank fights with your friend in this simple game! Will you win? ';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Soccer with cars, against your friends or alone. Can you score enough goals? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is a challenging game that is easy to learn, but hard to master!';
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> This is a webshop I made with JavaScript. Check it out <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>here!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> This project is about an Arduino Jukebox, which you can play songs on. ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is a 2D game where you are climbing a construction site, can you get to the top? ';
        document.getElementById("DescriptionTMS").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks.';
        document.getElementById("translateButtonGithubTwo").innerHTML = "GitHub Page";

        const collection = document.getElementsByClassName("moreInfoButton");
        for (let i = 0; i < collection.length; i++) 
        {
        collection[i].innerHTML = "More Info";
        }
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("otherProjectsText").innerHTML = '<i class="fa-solid fa-up-right-from-square"></i>&nbsp; Andere Projecten';
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is een 3D Platformer met als doel om de snelste tijd te halen.';
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Tanks 2D is een simpel spel waarin je tankgevechten hebt met je vrienden.';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Voetbal met auto\'s, tegen je vrienden of alleen. Kun jij genoeg goals maken? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen!';
        document.getElementById("DescriptionTMS").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten.';
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> Dit is een webshop die ik heb gemaakt met JavaScript. Bekijk het <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>hier!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> Dit project gaat over een Arduino Jukebox, waarop je liedjes kunt afspelen. ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is een 2D spel waar je een bouwplaats beklimt, kan jij de top bereiken?';
        document.getElementById("translateButtonGithubTwo").innerHTML = "GitHub Pagina";

        const collection = document.getElementsByClassName("moreInfoButton");
        for (let i = 0; i < collection.length; i++) 
        {
        collection[i].innerHTML = "Meer Info";
        }
    }
}

function ChangeLanguageWS()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("wsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Wizard\'s Struggle is a challenging game that is easy to learn, but hard to master!The game is 2 - ∞ hours long, the average time for the playtesters to finish was 4h. If you fall you will lose most of your progress. Can you save the princess? <br></br><b>Game Jam</b><br></br>This game was made for the <a href="https://itch.io/jam/game-off-2022" target="_blank" rel="noopener noreferrer"><i>Game Off 2022</i></a>. I had a month to make a game based off a theme. The theme of the Game Off 2022 is "Cliché". My cliché is "At the end of the day, the hero saves the girl".<br></br><b>What did I learn?</b><br></br>While making this project I learned how to design 2D maps (I used Illustrator) and how to use audio in Unity. (SFX and music)<br></br><b>Other Information</b><br></br>Wizard\'s Struggle took me a month to make in Unity (around 10 hours per week) and you can play it on Windows. <br></br>Click <a href="https://itskevin183.itch.io/wizards-struggle" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the itch.io page of Wizard\'s Struggle.<br></br>Click <a href="https://github.com/KevinPladdet/Wizards-Struggle" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Wizard\'s Struggle. </span><br></br>Click <a href="/gamebuilds/WebGL_WizardsStruggle/WizardsStruggleWeb.html"><i>here</i></a> to try Wizard\'s Struggle out for yourself. </span>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("wsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Wizard\'s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen! Het spel duurt 2 - ∞ uur, de gemiddelde tijd voor de playtesters om het uit te spelen was 4 uur. Als je valt verlies je het grootste deel van je voortgang. Kun jij de prinses redden?<br></br><b>Game Jam</b><br></br>Dit spel is gemaakt voor de <a href="https://itch.io/jam/game-off-2022" target="_blank" rel="noopener noreferrer"><i>Game Off 2022</i></a>Ik had een maand om een spel te maken gebaseerd op een thema. Het thema van de Game Off 2022 is "Cliché". Mijn cliché is "Aan het einde van de dag redt de held het meisje".<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik geleerd hoe je 2D maps ontwerpt (ik gebruikte Illustrator) en hoe je audio gebruikt in Unity. (SFX en muziek)<br></br><b>Overige Informatie</b><br></br>Wizard\'s Struggle kostte me een maand om te maken in Unity (ongeveer 10 uur per week) en je kunt het spelen op Windows.<br></br>Klik <a href="https://itskevin183.itch.io/wizards-struggle" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de itch.io pagina van Wizard\'s Struggle te gaan.<br></br>Klik <a href="https://github.com/KevinPladdet/Wizards-Struggle" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub pagina van Wizard\'s Struggle te gaan.</span><br></br>Klik <a href="/gamebuilds/WebGL_WizardsStruggle/WizardsStruggleWeb.html"><i>hier</i></a> om Wizard\'s Struggle zelf uit te proberen.</span>';
    }
}

function ChangeLanguageConstructionMadness()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";document.getElementById("cmInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Construction Madness is a 2D game where you climb a construction site. At the top of the construction site is a worker who is trying to stop you by throwing his tools and paint cans down. Can you get to the top and defeat the worker?<br></br><b>Team Project</b><br></br>I made this game in a group with 4 art designers and 1 other programmer. The game took us 2 months to make and was made with Unity. I made the Main Menu/Settings Menu/Pause Menu, the Hammer system, the Animations and the Level Design.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to work together in the same project using GitHub and how to add animations to characters and objects.<br></br>Click <a href="https://github.com/StanNooijen/Construction-madness" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Construction Madness. </span><br></br>Click <a href="/gamebuilds/WebGL_ConstructionMadness/ConstructionMadnessWeb.html"><i>here</i></a> to try Construction Madness out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("cmInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Construction Madness is een 2D-spel waarin je een bouwplaats beklimt. Bovenaan de bouwplaats staat een werker die je probeert tegen te houden door zijn gereedschap en verfblikken naar beneden te gooien. Kun jij de top bereiken en de werker verslaan?<br></br><b>Team Project</b><br></br>Ik heb dit spel gemaakt in een groep met 4 art designers en 1 andere programmeur. Het spel kostte ons 2 maanden om te maken en is gemaakt met Unity. Ik heb het main menu/settings menu/pause menu, het hamersysteem, de animaties en het level design gemaakt.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik geleerd hoe je samenwerkt in hetzelfde project met behulp van GitHub en hoe je animaties toevoegt aan personages en objecten.<br></br>Klik <a href="https://github.com/StanNooijen/Construction-madness" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub-pagina van Construction Madness te gaan. </span><br></br>Klik <a href="/gamebuilds/WebGL_ConstructionMadness/ConstructionMadnessWeb.html"><i>hier</i></a> om Construction Madness zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageTimmyMidnightSnack()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";document.getElementById("tmsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks. The goal of the game is to eat everything, but if your mother catches you eating you lose. Can you eat everything without getting caught?<br></br><b>Game Jam</b><br></br>I made this game for a Game Jam at school. The theme of the Game Jam was "Forbidden Midnight Snack". The Game Jam was 2 days long and the game was made with Unity. I worked in a group with 1 asset creator and 1 other programmer. I programmed everything except the eating mechanic. While making this game I got better at using GitHub and adding animations. I also made the game using trial and error, without following tutorials. <br></br>Click <a href="https://github.com/KevinPladdet/GameJam_School" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Timmy\'s Midnight Snack. </span><br></br>Click <a href="/gamebuilds/WebGL_TimmysMidnightSnack/TimmyMidnightSnackWeb.html"><i>here</i></a> to try Timmy\'s Midnight Snack out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("tmsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten. Het doel van het spel is om alles op te eten, maar als je moeder je betrapt bij het eten verlies je. Kun je alles opeten zonder betrapt te worden?<br></br><b>Game Jam</b><br></br>Ik heb dit spel gemaakt voor een Game Jam op school. Het thema van de Game Jam was "Forbidden Midnight Snack". De Game Jam was 2 dagen lang en het spel is gemaakt met Unity. Ik werkte in een groep met 1 asset creator en 1 andere programmeur. Ik heb alles geprogrammeerd, behalve het eet mechanic. Tijdens het maken van dit spel ben ik beter geworden in het gebruik van GitHub en het toevoegen van animaties. Ik maakte het spel ook met vallen en opstaan, zonder tutorials te volgen. <br></br>Klik <a href="https://github.com/KevinPladdet/GameJam_School" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub pagina van Timmy\'s Midnight Snack te gaan. </span><br></br>Klik <a href="/gamebuilds/WebGL_TimmysMidnightSnack/TimmyMidnightSnackWeb.html"><i>hier</i></a> om Timmy\'s Midnight Snack zelf uit te proberen.</span><br></br><i>Dit werkt niet op telefoons/tablets.</i></i>';
    }
}

function ChangeLanguageJukebox()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("arduinojukeboxInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the project about?</b><br></br>This project is about an Arduino Jukebox which I have made with someone else. The idea is basically a Jukebox that uses an LCD screen to display what song you currently have selected. There is a button on the Arduino, if you press it a simple version of the selected song will play. If you press the button again, the song will stop playing. There is also a potentiometer, which you can use to select a song.<br></br><b>Why did I make this project?</b><br></br>I have made this project with someone else for a school project, the assignment was to create a creative Arduino Circuit that isn\'t too simple to make.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to work together in Tinkercad, which is a website to make Arduino Circuits in. I also learned a lot more about the LCD screen, for example how to put a custom icon on it.<br></br>Click <a href="https://pastebin.com/8BXx3VW2" target="_blank" rel="noopener noreferrer"><i>here</i></a> to check out the code.<br></br>Below this text you can find a picture of the Tinkercad project.  ';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("arduinojukeboxInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het project over?</b><br></br>Dit project gaat over een Arduino Jukebox die ik samen met iemand anders heb gemaakt. Het idee is een Jukebox die een LCD-scherm gebruikt om te laten zien welk nummer je op dat moment geselecteerd hebt. Er zit een knop op de Arduino en als je die indrukt dan speelt er een eenvoudige versie van het geselecteerde nummer af. Als je nogmaals op de knop drukt, stopt het liedje met spelen. Er is ook een potentiometer, waarmee je een liedje kunt selecteren.<br></br><b>Waarom heb ik dit project gemaakt?</b><br></br>Ik heb dit project samen met iemand anders gemaakt voor een schoolproject, de opdracht was om een creatief Arduino Circuit te maken dat niet te simpel.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik geleerd hoe je kan samenwerken in Tinkercad, wat een website is waarin je Arduino Circuits kan maken. Ik heb ook veel geleerd over het LCD-scherm, bijvoorbeeld hoe je een custom icon er op kan zetten.<br></br>Klik <a href="https://pastebin.com/8BXx3VW2" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om de code te zien.<br></br>Hieronder kan je een foto van het Tinkercad project zien.';
    }
}