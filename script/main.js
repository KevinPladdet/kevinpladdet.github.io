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
        document.getElementById("aboutMe").innerHTML = '<span style=\"font-weight:normal\"> Impact is a 3D platformer where your goal is to get the best time possible. There is a timer in the top left and multiple checkpoints to help you along the way. <br></br> While making this project I learned how to design maps and how to use ProBuilder + the Unity Terrain Editor. <br></br> Impact took me 4 months to make in Unity (few hours per week) and you can play it on Windows. <br></br> Click <a href="https://itskevin183.itch.io/impact"><i>here</i></a> to try Impact out for yourself.';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("aboutMe").innerHTML = '<span style=\"font-weight:normal\"> Impact is een 3D platformer met als doel om de snelste tijd te halen. Linksboven in het scherm is een timer en er zijn meerdere checkpoints die je helpen het level te halen. <br></br> Terwijl ik dit project maakte leerde ik ProBuilder en de Unity Terrain Editor te gebruiken. <br></br> Impact duurde me 4 maanden om te maken in Unity (paar uur per week) en je kan het spelen op Windows. <br></br> Klik <a href="https://itskevin183.itch.io/impact"><i>hier</i></a> om Impact te spelen.';
    }
}

function ChangeLanguageSocCar()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("soccarInfo").innerHTML = '<span style=\"font-weight:normal\"> SocCar is a 3D game where you play soccer with cars. You can play a match with your friend in split screen mode or practice alone in the Training mode. You can also boost yourself to gain more speed and crash into your opponent or the ball.<br></br>While making this project I learned how to make a score system, a car controller and how to set up split screen.<br></br>SocCar took me a month to make in Unity and you can play it on Windows and Mac.<br></br><i>(SocCar is still in development)</i><br></br>Click <a href="/gamebuilds/WebGL SocCar/SocCarWeb.html"><i>here</i></a> to try SocCar out for yourself.';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("soccarInfo").innerHTML = '<span style=\"font-weight:normal\"> SocCar is een 3D spel waarin je voetbal speelt met auto’s. Je kan dit spel alleen spelen in de training mode of tegen je vrienden met split screen. Je kan jezelf ook boosten om meer snelheid te krijgen en tegen je tegenstander of de bal te botsen.<br></br>Tijdens het maken van dit project heb ik geleerd hoe ik een scoresysteem, een autocontroller en split screen maak.<br></br>SocCar kostte me een maand om te maken in Unity en je kan het spelen op Windows en Mac.<br></br><i>(SocCar is nogsteeds in development)</i><br></br>Klik <a href="/gamebuilds/WebGL SocCar/SocCarWeb.html"><i>hier</i></a> om SocCar te spelen.';
    }
}

function ChangeLanguageTanks()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("tanksInfo").innerHTML = '<span style=\"font-weight:normal\"> Tanks 2D is a simple game where you can have tank fights with your friend. There is a fun map and a powerup in the middle that will double your bullet speed. You can also shoot yourself to get launched in the opposite way, this can get you from one side of the map to the other in seconds.<br></br>While making this project I learned how to make 2D movement, a shooting system and a powerup.<br></br>Tanks 2D took me a month to make in Unity and you can play it on Windows and Mac.<br></br>Click <a href="/gamebuilds/tanks2d/tanks2D.html"><i>here</i></a> to try Tanks 2D out for yourself.';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("tanksInfo").innerHTML = '<span style=\"font-weight:normal\"> Tanks 2D is een eenvoudig spel waarin je tankgevechten kan hebben met je vrienden. Er is een leuke map met een powerup in het midden die je kogel snelheid verdubbelt. Je kan ook op jezelf schieten om in de tegenovergestelde richting te worden gelanceerd. Hierdoor kan je in seconden van de ene naar de andere kant van de map gaan.<br></br>Tijdens het maken van dit project heb ik geleerd hoe ik 2D beweging, een schietsysteem en een powerup maak.<br></br>Tanks 2D kostte me een maand om te maken in Unity en je kan het op Windows en Mac spelen.<br></br>Klik <a href="/gamebuilds/tanks2d/tanks2D.html"><i>hier</i></a> om Tanks 2D te spelen.';
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
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is a 3D platformer where your goal is to get the best time possible.'; 
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Have tank fights with your friend in this simple game! Will you win? ';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Soccer with cars, against your friends or alone. Can you score enough goals? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is a challenging game that is easy to learn, but hard to master!';
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> This is a webshop I made with JavaScript. Check it out <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>here!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> Here I will put another website at some point. ';
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
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is een 3D Platformer met als doel om de snelste tijd te halen.';
        document.getElementById("tanksDescription").innerHTML = '<span style="font-size:18px;"> Tanks 2D is een simpel spel waarin je tankgevechten hebt met je vrienden.';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Voetbal met auto\'s, tegen je vrienden of alleen. Kun jij genoeg goals maken? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen!';
        document.getElementById("DescriptionTMS").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten.';
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> Dit is een webshop die ik heb gemaakt met JavaScript. Bekijk het <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>hier!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> Hier zal ik binnenkort een website plaatsen. ';
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
        document.getElementById("wsInfo").innerHTML = '<span style=\"font-weight:normal\"> Wizard’s Struggle is a challenging game that is easy to learn, but hard to master!<br></br>The game is 2 - ∞ hours long, the average time for the playtesters to finish was 4h.<br></br>If you fall you will lose most of your progress.<br></br>Can you save the princess? <br></br>This game was made for the <a href="https://itch.io/jam/game-off-2022" target="_blank" rel="noopener noreferrer"><i>Game Off 2022</i></a>.<br></br>I had a month to make a game based off a theme.<br></br>The theme of the Game Off 2022 is "Cliché"<br></br>I had a month to make a game based on that theme.<br></br>My cliché is "At the end of the day, the hero saves the girl".<br></br>While making this project I learned how to design 2D maps (I used Illustrator) and how to use audio in Unity. (SFX and music)<br></br>Wizard’s Struggle took me a month to make in Unity (around 10 hours per week) and you can play it on Windows. <br></br>Click <a href="https://itskevin183.itch.io/wizards-struggle" target="_blank" rel="noopener noreferrer"><i>here</i></a> to try Wizard’s Struggle out for yourself.';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("wsInfo").innerHTML = '<span style=\"font-weight:normal\"> Wizard’s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen!<br></br>Het spel is 2 - ∞ uur lang, de gemiddelde tijd voor de playtesters om het uit te spelen was 4 uur.<br></br>Als je valt verlies je een groot deel van je vooruitgang.<br></br>Kun jij de prinses redden?<br></br>Dit spel is gemaakt voor de <a href="https://itch.io/jam/game-off-2022" target="_blank" rel="noopener noreferrer"><i>Game Off 2022</i></a>.<br></br>Ik had een maand om een spel te maken gebaseerd op een thema.<br></br>Het thema van de Game Off 2022 is "Cliché".<br></br>Ik had een maand om een spel te maken gebaseerd op dat thema.<br></br>Mijn cliché is "Aan het einde van de dag, redt de held de prinses".<br></br>Tijdens het maken van dit project heb ik geleerd hoe je 2D maps ontwerpt (ik gebruikte Illustrator) en hoe je audio gebruikt in Unity. (SFX en muziek)<br></br>Wizard’s Struggle duurde me een maand om te maken met Unity (ongeveer 10 uur per week) en je kunt het spelen op Windows.<br></br>Klik <a href="https://itskevin183.itch.io/wizards-struggle" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om Wizard’s Struggle zelf uit te proberen.';
    }
}

function ChangeLanguageConstructionMadness()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";document.getElementById("cmInfo").innerHTML = '<span style=\"font-weight:normal\"> Construction Madness is a 2D game where you climb a construction site. At the top of the construction site is a worker who is trying to stop you by throwing his tools and paint cans down.Can you get to the top and defeat the worker?<br></br>I made this game in a group with 4 art designers and 1 other programmer.The game took us 2 months to make and was made with Unity.I made the Main Menu/Settings Menu/Pause Menu, the Hammer system, the Animations and the Level Design.<br></br>While making this project I learned how to work together in the same project using GitHub and how to add animations to characters and objects.<br></br>Click <a href="/gamebuilds/WebGL_ConstructionMadness/ConstructionMadnessWeb.html"><i>here</i></a> to try Construction Madness out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("cmInfo").innerHTML = '<span style=\"font-weight:normal\"> Construction Madness is een 2D-spel waarin je een bouwplaats beklimt. Op de top van de bouwplaats staat een werker die je probeert tegen te houden door zijn gereedschap en verfblikken naar beneden te gooien. Kun jij de top bereiken en de werker verslaan?<br></br>Ik heb dit spel gemaakt in een groep met 4 art designers en 1 andere programmeur. Het spel kostte ons 2 maanden om te maken en is gemaakt met Unity. Ik heb het main menu/settings menu/pause menu, het hamersysteem, de animaties en het levelontwerp gemaakt.<br></br>Tijdens het maken van dit project heb ik geleerd hoe je samenwerkt in hetzelfde project met behulp van GitHub en hoe je animaties toevoegt aan personages en objecten.<br></br>Klik <a href="/gamebuilds/WebGL_ConstructionMadness/ConstructionMadnessWeb.html"><i>hier</i></a> om Construction Madness zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageTimmyMidnightSnack()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";document.getElementById("tmsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks. The goal of the game is to eat everything, but if your mother catches you eating you lose. Can you eat everything without getting caught?<br></br><b>Game Jam</b><br></br>I made this game for a Game Jam at school. The theme of the Game Jam was "Forbidden Midnight Snack". The Game Jam was 2 days long and the game was made with Unity. I worked in a group with 1 asset creator and 1 other programmer. I programmed everything except the eating mechanic. While making this game I got better at using GitHub and adding animations. I also made the game using trial and error, without following tutorials. <br></br>Click <a href="/gamebuilds/WebGL_TimmysMidnightSnack/TimmyMidnightSnackWeb.html"><i>here</i></a> to try Timmy\'s Midnight Snack out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("tmsInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b> <br></br> Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten. Het doel van het spel is om alles op te eten, maar als je moeder je betrapt verlies je. Kun jij alles opeten zonder betrapt te worden?  <br></br> <b>Game Jam</b> <br></br> Ik heb dit spel gemaakt voor een Game Jam op school. Het thema van de Game Jam was "Forbidden Midnight Snack". De Game Jam duurde 2 dagen en het spel is gemaakt met Unity. Ik werkte in een groep met 1 asset creator en 1 andere programmeur. Ik heb alles geprogrammeerd behalve het eet mechanic. Tijdens het maken van dit spel werd ik beter in het gebruik van GitHub en het toevoegen van animaties.  Ik maakte het spel ook met trial en errors, zonder tutorials te volgen.  <br></br> Klik <a href="/gamebuilds/WebGL_TimmysMidnightSnack/TimmyMidnightSnackWeb.html"><i>hier</i></a> om Timmy\'s Midnight Snack zelf uit te proberen. </span> <br></br> <i>Dit werkt niet op telefoons/tablets.</i>';
    }
}