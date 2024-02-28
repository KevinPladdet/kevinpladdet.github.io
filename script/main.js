function ChangeLanguage()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("aboutMe").innerHTML  = "<span style=\"font-weight:normal\"> I'm Kevin Pladdet, I’m 18 years old and from the Netherlands. I’m currently following an education about Software Development where I’m learning how to code and how to make games/websites.<br></br>I’m very interested when it comes to game development, I love making games from scratch and seeing how it develops towards a complete game. On this website you can find some projects I’ve made along the way, which you can play if you’d like.";
        document.getElementById("featuredProductsText").innerHTML = "Featured Products";
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is a 3D platformer where your goal is to get the best time possible.'; 
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Soccer with cars, against your friends or alone. Can you score enough goals? ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is a 2D game where you are climbing a construction site, can you get to the top? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is a challenging game that is easy to learn, but hard to master!';
        document.getElementById("tmsDescription").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks.';
        document.getElementById("emailDescription").innerHTML = '<span style="font-size:18px;"> Got something you want to tell me? Send me a message! ';
        document.getElementById("githubDescription").innerHTML = '<span style="font-size:18px;"> This is my GitHub page where I share the code of projects I have done.  ';
        document.getElementById("retroRampageDescription").innerHTML = '<span style="font-size:18px;"> Retro Rampage is a 2D Top Down Shooter, can you survive?';
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
        document.getElementById("aboutMe").innerHTML = "<span style=\"font-weight:normal\"> Mijn naam is Kevin Pladdet. Ik ben 18 jaar oud en ik kom uit Nederland. Op dit moment volg ik de opleiding Software Development, waar ik leer coderen en games/websites te maken. <br> </br> Ik ben erg geïnteresseerd als het gaat om game development. Ik vind het leuk om games vanaf het begin te maken en te zien hoe het ontwikkelt naar een complete game. Op deze website kan je allerlei projecten zien (en spelen) die ik heb gemaakt.";
        document.getElementById("featuredProductsText").innerHTML = "Aanbevolen Projecten";
        document.getElementById("impactDescription").innerHTML = '<span style="font-size:18px;"> Impact is een 3D Platformer met als doel om de snelste tijd te halen.';
        document.getElementById("soccarDescription").innerHTML = '<span style="font-size:18px;"> Voetbal met auto\'s, tegen je vrienden of alleen. Kun jij genoeg goals maken? ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is een 2D spel waar je een bouwplaats beklimt, kan jij de top bereiken? ';
        document.getElementById("fourthDescription").innerHTML = '<span style="font-size:18px;"> Wizard\'s Struggle is een uitdagend spel dat makkelijk te leren is, maar moeilijk te beheersen!';
        document.getElementById("tmsDescription").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is een 2D spel over een jongen die \'s nachts wegglipt om wat snacks te eten.';
        document.getElementById("emailDescription").innerHTML = '<span style="font-size:18px;"> Wil je me iets vertellen? Stuur me een berichtje!  ';
        document.getElementById("githubDescription").innerHTML = '<span style="font-size:18px;"> Dit is mijn GitHub pagina waar ik de code deel van projecten.';
        document.getElementById("retroRampageDescription").innerHTML = '<span style="font-size:18px;"> Retro Rampage is een 2D Top Down Shooter, kun jij overleven?';
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
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> This is a webshop made with JavaScript. Check it out <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>here!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> This project is about an Arduino Jukebox, which you can play songs on. ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is a 2D game where you are climbing a construction site, can you get to the top? ';
        document.getElementById("DescriptionTMS").innerHTML = '<span style="font-size:18px;"> Timmy\'s Midnight Snack is a 2D game about a boy who snuck out at night to eat some snacks.';
        document.getElementById("translateButtonGithubTwo").innerHTML = "GitHub Page";
        document.getElementById("translateButtonGithubThree").innerHTML = "GitHub Page";
        document.getElementById("DescriptionSS").innerHTML = '<span style="font-size:18px;"> Coming Soon';
        document.getElementById("retroRampageDescription").innerHTML = '<span style="font-size:18px;"> Retro Rampage is a 2D Top Down Shooter, can you survive?';
        document.getElementById("furnitureHomepageDescription").innerHTML = '<span style="font-size:18px;"> This is a furniture homepage website made with JavaScript. Check it out <a href="https://kevinpladdet.github.io/furniturehomepagekevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>here!';
        document.getElementById("vrProjectDescription").innerHTML = '<span style="font-size:18px;"> This is a small VR sandbox mainly made to try out VR.';
        document.getElementById("DescriptionSS").innerHTML = '<span style="font-size:18px;"> ShadeSword is a 3D Action-Stealth game where stealth is only an afterthought.';
        document.getElementById("suikaGameDescription").innerHTML = '<span style="font-size:18px;"> Suika Game is a game about merging fruits, can you get a watermelon?';
        document.getElementById("redoDescription").innerHTML = '<span style="font-size:18px;"> Redo is a 3D platformer, where each level grants you a new ability. <br> Can you collect all of them and finish the final level?';
        document.getElementById("DescriptionProjectS").innerHTML = '<span style="font-size:18px;"> Project S is a rhythm game, can you get the S rank?';
        document.getElementById("descriptionWW").innerHTML = '<span style="font-size:18px;"> Whisker Wonderland is a 2D game about herding cats.';

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
        document.getElementById("webshopDescription").innerHTML = '<span style="font-size:18px;"> Dit is een webshop gemaakt met JavaScript. Bekijk het <a href="https://kevinpladdet.github.io/webshopkevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>hier!</i></a>';
        document.getElementById("websiteTwo").innerHTML = '<span style="font-size:18px;"> Dit project gaat over een Arduino Jukebox, waarop je liedjes kunt afspelen. ';
        document.getElementById("constructionDescription").innerHTML = '<span style="font-size:18px;"> Construction Madness is een 2D spel waar je een bouwplaats beklimt, kan jij de top bereiken?';
        document.getElementById("translateButtonGithubTwo").innerHTML = "GitHub Pagina";
        document.getElementById("translateButtonGithubThree").innerHTML = "GitHub Pagina";
        document.getElementById("vrProjectDescription").innerHTML = '<span style="font-size:18px;"> Dit is een kleine sandbox die voornamelijk is gemaakt om VR uit te proberen.';
        document.getElementById("DescriptionSS").innerHTML = '<span style="font-size:18px;"> Binnenkort Beschikbaar';
        document.getElementById("retroRampageDescription").innerHTML = '<span style="font-size:18px;"> Retro Rampage is een 2D Top Down Shooter, kun jij overleven?';
        document.getElementById("furnitureHomepageDescription").innerHTML = '<span style="font-size:18px;"> Dit is een website voor meubels, gemaakt met JavaScript. Bekijk hem <a href="https://kevinpladdet.github.io/furniturehomepagekevinpladdet.github.io/" target="_blank" rel="noopener noreferrer"><i>hier!';
        document.getElementById("vrProjectDescription").innerHTML = '<span style="font-size:18px;"> Dit is een kleine sandbox die voornamelijk is gemaakt om VR uit te proberen.';
        document.getElementById("DescriptionSS").innerHTML = '<span style="font-size:18px;"> ShadeSword is een 3D Action-Stealth-spel waarin stealth slechts een bijzaak is.';
        document.getElementById("suikaGameDescription").innerHTML = '<span style="font-size:18px;"> Suika Game is een spel over het samenvoegen van fruit. Kun jij een watermeloen krijgen?';
        document.getElementById("redoDescription").innerHTML = '<span style="font-size:18px;"> Redo is een 3D platformer, waarin je in elk level een nieuwe vaardigheid krijgt. <br> Kun jij ze allemaal verzamelen en het laatste level uitspelen?';
        document.getElementById("DescriptionProjectS").innerHTML = '<span style="font-size:18px;"> Project S is een rhythm game, kun jij de S rank behalen?';
        document.getElementById("descriptionWW").innerHTML = '<span style="font-size:18px;"> Whisker Wonderland is een 2D game over katten hoeden.';

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

function ChangeLanguageRetroRampage()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("rrInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Retro Rampage is a 2D Top Down Shooter.The goal of the game is to kill as many enemies as you can.You start out with a pistol, but you may find other weapons along the way.How long can you survive?<br></br><b>Team Project</b><br></br>I made this game in a group with 2 other programmersThe game took us 2 months to make and was made with Unity.I made the enemies using NavMeshAgent, which I\'ve never used before.The enemies will spawn randomly and will only start following you if you get close to them.The enemies also shoot at you and will have optimized movement, so they won\'t run into walls.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to use NavMesh.I had never used NavMesh before, but I now know how to pathfind with it.<br></br>Click <a href="https://github.com/MaartenvdGoor/Retro-Rampage/tree/Development" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Retro Rampage. </span><br></br>Click <a href="/gamebuilds/WebGL_RetroRampage/RetroRampageWeb.html"><i>here</i></a> to try Retro Rampage out for yourself. </span><br></br><i>This does not work on phones/tablets.</i>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("rrInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Retro Rampage is een 2D Top Down Shooter. Het doel van het spel is om zoveel mogelijk vijanden te doden. Je begint met een pistool, maar je kunt onderweg ook andere wapens vinden. Hoe lang kan jij overleven?<br></br><b>Team Project</b><br></br>Ik heb dit spel gemaakt in een groep met 2 andere programmeurs. Het spel kostte ons 2 maanden om te maken en is gemaakt met Unity. Ik heb de vijanden gemaakt met NavMeshAgent, wat ik nog nooit eerder heb gebruikt. De vijanden spawnen willekeurig en volgen je alleen als je in de buurt komt. De vijanden schieten ook op je en hebben geoptimaliseerde bewegingen, zodat ze niet tegen muren oplopen.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project heb ik NavMesh leren gebruiken. Ik had NavMesh nog nooit gebruikt, maar ik weet nu hoe ik ermee moet pathfinden.<br></br>Klik <a href="https://github.com/MaartenvdGoor/Retro-Rampage/tree/Development" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub-pagina van Retro Rampage te gaan.</span><br></br>Klik <a href="/gamebuilds/WebGL_RetroRampage/RetroRampageWeb.html"><i>hier</i></a> om Retro Rampage zelf uit te proberen.</span><br></br><i>Dit werkt niet op telefoons/tablets.</i>';
    }
}

function ChangeLanguageVRProject()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("vrInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Information</b><br></br> At school I had the oppertunity to make a small VR game using the Meta Quest 2 headset. I took this oppertunity and wanted to make a sandbox game, including a basketball hoop. After I made a basketball hoop including bouncy basketballs, I then added guns which you can shoot objects with. At this point the sandbox was finished, but it was all placeholder assets. My goal was to make it look nice, so I downloaded some asset packs and made everything look much more appealing. <br></br><b>What did I learn?</b><br></br>I had never used VR before, but I really liked it. I learned how to setup a VR project and how the Meta Quest 2 works. Besides that I learned how to use Quest Link and how to make grabbable objects.';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("vrInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Informatie</b><br></br>Op school kreeg ik de kans om een klein VR-spel te maken met de Meta Quest 2 headset. Ik greep deze kans en wilde een sandbox game maken met een basketbalhoepel. Nadat ik een basketbalhoepel met basketballen had gemaakt, voegde ik revolvers toe waarmee je op objecten kunt schieten. Op dit punt was de sandbox af, maar het waren allemaal placeholder assets. Mijn doel was om het er leuk uit te laten zien, dus ik heb wat asset packs gedownload en alles ziet er nu veel aantrekkelijker uit. <br></br><b>Wat heb ik geleerd?</b><br></br>Ik had nog nooit VR gebruikt, maar ik vond het erg leuk. Ik heb geleerd hoe je een VR project opzet en hoe de Meta Quest 2 werkt. Daarnaast heb ik geleerd hoe ik Quest Link kan gebruiken en hoe ik grijpbare objecten kan maken.';
    }
}

function ChangeLanguageShadeSword()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("ssInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>ShadeSword is a 3D Action-Stealth game where stealth is only an afterthought. Whether you sneak around all enemies, beat them up individually or take them out silently, as long as you can get to the end you\’ll have won the game.<br></br><b>Team Project</b><br></br>I made this game in a group with 6 other programmers. The game took us 2 months to make and was made with Unity.<br></br><b>Planning</b><br></br>We designed the game using a <a href="https://docs.google.com/document/d/12WtjpQqYu_oYE8p5je8wy0ZJ3BMP5Xa9MPwGcX_xxB4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i>Game Design Document</i></a>, which really helps us understand how exactly we\'re going to make the game. After the Game Design Document was finished, we started dividing the tasks and made a backlog with <a href="https://imgur.com/a/ds0TWhi" target="_blank" rel="noopener noreferrer"><i>Trello</i></a>.<br></br><b>SCRUM</b><br></br>We used SCRUM as our working method, so we had a sprint every 2 weeks. A sprint is a deadline where everyone has to finish their tasks. After a sprint was done, a new one would be made.</b><br></b><br><b>Why is the game not finished?</b><br></br>The game isn\'t finished because some of my group members did not finish their parts in time. This is a shame, since the idea of the game is really cool.<br></br><b>What did I make?</b><br></br>I made the inventory, including the healing / kunai / health bar. Besides that I also made scriptable objects, the death menu / win menu and a bit of the level design. Lastly all of the sounds you can hear in the video are all added by myself too, the sounds include: Healing SFX - Kunai SFX, Damage taken SFX, Switching through inventory SFX.<br></br><b>GitHub Page</b><br></br>Click <a href="https://github.com/KevinPladdet/Agile_Final" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of ShadeSword. </span>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("ssInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>ShadeSword is een 3D Action-Stealth-spel waarin stealth slechts een bijzaak is. Of je nu om alle vijanden heen sluipt, ze individueel in elkaar slaat of ze stilletjes uitschakelt, als je het einde maar haalt, heb je het spel gewonnen.<br></br><b>Team Project</b><br></br>Ik heb dit spel gemaakt in een groep met 6 andere programmeurs. Het spel kostte ons 2 maanden om te maken en is gemaakt met Unity.<br></br><b>Planning</b><br></br>We hebben het spel ontworpen met behulp van een <a href="https://docs.google.com/document/d/12WtjpQqYu_oYE8p5je8wy0ZJ3BMP5Xa9MPwGcX_xxB4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i>Game Design Document</i></a>, zodat we precies weten hoe we het spel gaan maken. Nadat het Game Design Document klaar was, begonnen we met het verdelen van de taken en maakten we een backlog met <a href="https://imgur.com/a/ds0TWhi" target="_blank" rel="noopener noreferrer"><i>Trello</i></a>.<br></br><b>SCRUM</b><br></br>We gebruikten SCRUM als onze werkmethode, dus we hadden elke 2 weken een sprint. Een sprint is een deadline waarop iedereen zijn taken af moet hebben. Als een sprint klaar was, werd er een nieuwe sprint gemaakt.<br></br><b>Waarom is het spel niet af?</b><br></br>Het spel is niet af, omdat een aantal van mijn groepsleden hun onderdelen niet op tijd af hadden. Dit is jammer, want het idee van het spel is best cool.<br></br><b>Wat heb ik gemaakt?</b><br></br>Ik heb de inventory gemaakt, inclusief het healen, de kunai en de health bar. Naast dat heb ik ook scriptable objects, het death menu + win menu en een beetje van het level design gemaakt. Tot slot zijn alle geluiden die je in de video hoort ook allemaal door mij toegevoegd: Healing SFX - Kunai SFX, Damage taken SFX, Switching through inventory SFX.<br></br><b>GitHub Pagina</b><br></br>Klik <a href="https://github.com/KevinPladdet/Agile_Final" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub pagina van ShadeSword te gaan. </span>';
    }
}

function ChangeLanguageSuikaGame()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("sgInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Suika Game is a game about merging fruits. The goal of the game is to get the highest score possible. If a piece of fruit touches the top of the box, you lose. Can you get a watermelon?<br></br><b>Why did I make this project?</b><br></br>Before I made Suika Game, I was working on Redo for several months. I got burned out from working on it and decided I wanted to work on a small project. I had watched and played Suika Game for quite a bit, so I figured it\'d be fun to try making it myself.<br></br><b>What did I learn?</b><br></br>While making this project I learned how to break down the original Suika Game into all of its mechanics. I made a task in Trello for each mechanic of Suika Game and started making them one by one. Once they were all done, I put everything together.<br></br>When the game was done, I decided it would be fun to add an "Admin Mode". Whenever Admin Mode is on, the player can drag and drop every fruit. The trigger that ends the game is disabled, so the player can not lose. This mode is basically a cheat mode, but its a lot of fun to use. <br></br><b>Other Information</b><br></br>Suika Game took me 2 weeks to make in Unity (around 40 hours per week) and you can play it on Windows. <br></br><i>The assets and sounds from this project are from the original Suika Game, you can buy the original Suika Game <a href="https://ec.nintendo.com/NZ/en/titles/70010000074333" target="_blank" rel="noopener noreferrer"><i>here</i></a>.</i><br></br>Click <a href="/gamebuilds/WebGL_SuikaGame/SuikaGameWeb.html"><i>here</i></a> to try Suika Game out for yourself. </span><br></br><i>This does not work on phones/tablets.</i> </span>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("sgInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Suika Game is een spel over het samenvoegen van fruit. Het doel van het spel is om een zo hoog mogelijke score te halen. Je verliest als fruit de bovenkant van de box aanraakt. Kun jij een watermeloen krijgen?<br></br><b>Waarom heb ik het gemaakt?</b><br></br>Voordat ik was begonnen met Suika Game maken, was ik al een paar maanden bezig met Redo. Uiteindelijk kreeg ik een burn-out van Redo en besloot dat ik aan een klein project wilde werken. Ik had Suika Game al een tijdje bekeken en gespeeld, dus het leek me leuk om het zelf te maken.<br></br><b>Wat heb ik geleerd?</b><br></br>Tijdens het maken van dit project leerde ik hoe ik de originele Suika Game kon opsplitsen in alle mechanics. Ik maakte een taak in Trello voor elk mechanic van Suika Game en begon ze één voor één te maken. Toen ze allemaal klaar waren, voegde ik alles samen.<br></br>Toen het spel af was, besloot ik dat het leuk zou zijn om een "Admin Mode" toe te voegen. Wanneer Admin Mode is ingeschakeld, kan de speler elk fruit verslepen. De trigger die het spel beëindigt is uitgeschakeld, dus de speler kan niet af gaan. Deze modus is eigenlijk een cheatmodus, maar het is erg leuk om te gebruiken. <br></br><b>Overige Informatie</b><br></br>Suika Game kostte me 2 weken om te maken in Unity (ongeveer 40 uur per week) en je kunt het spelen op Windows.<br></br><i>De assets and geluiden van dit project zijn van de originele Suika Game, je kunt de originele Suika Game <a href="https://ec.nintendo.com/NZ/en/titles/70010000074333" target="_blank" rel="noopener noreferrer"><i>hier</i></a> kopen.</i><br></br>Klik <a href="/gamebuilds/WebGL_SuikaGame/SuikaGameWeb.html"><i>hier</i></a> om Suika Game zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i> </span>';
    }
}

function ChangeLanguageWhiskerWonderland()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("wwInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>What\'s the game about?</b><br></br>Whisker Wonderland is a 2D game about herding cats.<br></br>The cats will get faster the longer you keep going. If a cat goes in the wrong altar or if a cat goes out of the screen, you will lose a live. You have 3 lives, the game will end once you lose all 3 of them.<br></br>The game has a score system and will save your highscore in the highscores menu.<br></br><b>Game Jam</b><br></br>I made this game for a Game Jam at school.<br></br>The theme of the Game Jam was "Herding Cats".<br>The Game Jam was 2 days long (around 6 hours total) and the game was made with Unity.<br></br>It was also an international Game Jam, so each team on school had to work together with 1 programmer from Sweden. My group consisted of 4 programmers.<br></br><b>What did I make?</b><br></br>I made the drag and drop system for the cats.<br></br>A simple game like this will get better with a score system, so I made one. The score of the player will be saved to the highscores menu with player prefs once the player loses.<br></br>After the score system I made the main menu and highscores menu. A total of 5 highscores can be saved in the highscores menu.<br></br>When all the seperate mechanics of the game were done, I put all of them together in the main scene.<br></br>Once I was done I made a build and got ready to present it. After a couple rounds of presenting, we managed to win the game jam.<br></br><b>Other Information</b><br></br>Click <a href="https://github.com/KevinPladdet/Herding_Cats" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Whisker Wonderland. </span><br></br>Click <a href="/gamebuilds/WebGL_TimmysMidnightSnack/TimmyMidnightSnackWeb.html"><i>here</i></a> to try Whisker Wonderland out for yourself. </span><br></br><i>This does not work on phones/tablets.</i> </span>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("wwInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Waar gaat het spel over?</b><br></br>Whisker Wonderland is een 2D game over katten hoeden.<br></br>De katten worden sneller naarmate je langer doorgaat. Als een kat in het verkeerde altaar gaat of als een kat uit het scherm gaat, verlies je een leven. Je hebt 3 levens, het spel eindigt als je ze alle 3 kwijt bent.<br></br>Hel spel heeft een score systeem en slaat je highscore op in het highscores menu.<br></br><b>Game Jam</b><br></br>Ik heb dit spel gemaakt voor een game jam op school.<br></br>Het thema van de game jam is "Herding Cats".<br>De Game Jam duurde 2 dagen (in totaal ongeveer 6 uur) en het spel is gemaakt met Unity.<br></br>De Game Jam was internationaal, dus elk team op school moest samenwerken met 1 programmeur uit Zweden. Mijn groep bestond uit 4 programmeurs.<br></br><b>Wat heb ik gemaakt?</b><br></br>Ik heb het drag en drop systeem voor de katten gemaakt.<br></br>Een simpel spel als dit wordt beter met een scoresysteem, dus heb ik er een gemaakt. De score van de speler wordt opgeslagen in het highscores menu met player prefs.<br></br>Na het score systeem heb ik het main menu en het highscores menu gemaakt. Je kunt in totaal 5 highscores opslaan in het highscores menu.<br></br>Toen alle mechanics van het spel af waren, heb ik ze allemaal samengevoegd in de main scene.<br></br>Toen ik klaar was, maakte ik een build en maakte ik me klaar om die te presenteren. Na een paar rondes presenteren, wisten we de game jam te winnen.<br></br><b>Overige Informatie</b><br></br>Klik <a href="https://github.com/KevinPladdet/Herding_Cats" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub-pagina van Whisker Wonderland te gaan. </span><br></br>Klik <a href="/gamebuilds/WebGL_WhiskerWonderland/WhiskerWonderlandWeb.html"><i>hier</i></a> om Whisker Wonderland zelf uit te proberen.</span><br></br><i>Dit werkt niet op telefoons/tablets.</i> </span>';
    }
}

function ChangeLanguageProjectS()
{
    var t = document.getElementById("slideThree");
    console.log(t.value);
    if(t.value=="NL")
    {
        t.value="EN";
        document.getElementById("psInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Collaborative Project</b><br></br>I worked on this project during my internship with <a href="https://nl.linkedin.com/in/beau-verwimp-33a079223" target="_blank" rel="noopener noreferrer"><i>Beau Verwimp</i></a> and <a href="https://www.behance.net/HindAna" target="_blank" rel="noopener noreferrer"><i>Hind Anajay</i></a>.<br></br>Hind is a digital design & media student, and made a comic during the internship.<br></br>Beau is a software developer student, so he would make the website for the comic.<br></br>My goal was to make a game that was related to the comic and would appear on the website.<br></br>The working method we used was "scrum" and we used Trello to keep track of our tasks. We made 2 sprints of 2 weeks, so we could get everything done within a month.<br></br>We worked on this project for a month and managed to get everything done in the end.<br></br><b>What\'s the game about?</b><br></br>Project S is a rhythm game, where the goal is to get the highest score possible.<br></br>There are 4 buttons you can press, each button being a different row. When the song starts, notes will start falling. Once a note is inside of a button, you need to press that button. If you press it perfectly, you will get more score than if you\'d press it late or early.<br></br>There is also a score multiplier depending on how many notes you hit in a row. If you miss a note, the score multiplier goes back to x1.<br></br>Once the song ends, a results screen will appear. <br>On the results screen you can see how many times you hit each note, how many times you missed a note, your total score and your rank.<br></br>At the start of the game there is a controls menu.<br>In this menu the player can input their own controls, instead of the default ones.<br>If the player inputs an invalid or duplicate input, the game can not be started until it has been changed to a valid input.<br></br><b>Other Information</b><br></br>Click <a href="https://github.com/KevinPladdet/ProjectStage" target="_blank" rel="noopener noreferrer"><i>here</i></a> to go to the GitHub page of Project S. </span><br></br>Click <a href="/gamebuilds/WebGL_ProjectS/ProjectSWeb.html"><i>here</i></a> to try Project S out for yourself. </span><br></br><i>This does not work on phones/tablets.</i> </span>';
    }
    else if(t.value=="EN")
    {
        t.value="NL";
        document.getElementById("psInfo").innerHTML = '<span style=\"font-weight:normal\"> <b>Samenwerkings Project</b><br></br>Ik heb aan dit project gewerkt tijdens mijn stage met 2 andere stagiaires: <a href="https://nl.linkedin.com/in/beau-verwimp-33a079223" target="_blank" rel="noopener noreferrer"><i>Beau Verwimp</i></a> en <a href="https://www.behance.net/HindAna" target="_blank" rel="noopener noreferrer"><i>Hind Anajay</i></a>.<br></br>Hind is een digital design & media student en heeft een een strip gemaakt tijdens de stage.<br></br>Beau is een software developer student en heeft een website voor de strip gemaakt.<br></br>Mijn doel was om een spel te maken dat gerelateerd was aan de strip en uiteindelijk op de website zou verschijnen.<br></br>De werkwijze die wij gebruikten was "scrum" en we hebben Trello gebruikt om onze taken bij te houden. We hebben 2 sprints van 2 weken gemaakt, zodat we binnen een maand alles af konden krijgen.<br></br>We hebben een maand aan dit project gewerkt en hebben uiteindelijk alles afgekregen.<br></br><b>Waar gaat het spel over?</b><br></br>Project S is een rhythm spel, waarin het de bedoeling is om een zo hoog mogelijke score te halen.<br></br>Je kunt op 4 knoppen drukken, waarbij elke knop een andere rij is. Als het liedje begint, beginnen de noten te vallen. Zodra een noot op een knop land, moet je op die knop drukken. Als je de knop perfect klikt, krijg je meer punten dan wanneer je de knop te laat of te vroeg indrukt.<br></br>Er is ook een scorevermenigvuldiger afhankelijk van het aantal noten dat je achter elkaar raakt. Als je een noot mist, gaat de scorevermenigvuldiger terug naar x1.<br></br>Zodra het nummer is afgelopen, verschijnt er een resultaten scherm. <br>Op het resultatenscherm kun je zien hoe vaak je elke noot hebt geraakt, hoe vaak je een noot hebt gemist, maar ook je totale score en je behaalde rank.<br></br>Aan het begin van het spel is er een controls menu.<br>In dit menu kan de speler zijn eigen controls invoegen, in plaats van de standaard controls.<br>Als de speler een ongeldige of dubbele toets invoert, kan het spel niet worden gestart totdat de invoer is gewijzigd naar een geldige invoer.<br></br><b>Overige Informatie</b><br></br>Klik <a href="https://github.com/KevinPladdet/ProjectStage" target="_blank" rel="noopener noreferrer"><i>hier</i></a> om naar de GitHub-pagina van Project S te gaan. </span><br></br>Klik <a href="/gamebuilds/WebGL_ProjectS/ProjectSWeb.html"><i>hier</i></a> om Project S zelf uit te proberen. </span><br></br><i>Dit werkt niet op telefoons/tablets.</i> </span>';
    }
}