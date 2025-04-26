var score = 0
var misstracker = 0
const tagbot = document.getElementById('tagbot')
const slap = new Audio('AUDIO/slap-oh_LGvkhyt.mp3')
const dodge = new Audio('AUDIO/weave.mp3')
const laugh = new Audio('AUDIO/funny_82hiegE.mp3');
const peter = new Audio('AUDIO/laugh-3_9wVKqU7.mp3');
const mmm = new Audio('AUDIO/mmm-6.mp3');
const getout = new Audio('AUDIO/tuco-get-out_GUkoo8V.mp3')
const aintthatfantastic = new Audio('AUDIO/aintthatfantastic.mp3')

var translation = ''
var tcount = 0
var dancecounter = 0
var dancescore = 0
var multiplier = 1
var price = 20

function show(appear, button) {
    /* alert(var1) */
    //hide the one div that is shown
    reseteverything()
    console.log("Attempting to show:", appear)
    document.getElementById('homebody').style.display = 'none';
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'none';

    document.getElementById("button1").className = "button1 minihover"
    document.getElementById("button2").className = "button2 minihover"
    document.getElementById("button3").className = "button3 minihover"
    document.getElementById("button4").className = "button4 minihover"
    document.getElementById("button5").className = "button5 minihover"

    //show the one div that you sent to this function
    document.getElementById(appear).style.display = 'block';
    if (document.getElementById(button) !== document.getElementById('homebutton')) {
         document.getElementById(button).className = "buttonselected" }

    //this sucker is supposed to change the height of the window if penguins is selected.
    // if (document.getElementById(button) === document.getElementById('button3')) {
    //     document.getElementById('mainflex').style.height = 5000 + 'px'
    //     document.getElementById('header').style.flex = '2'
    //     document.getElementById('page3').style.flex = '50'



    // }
}
function ballballball(){
    console.log('ball')
    document.getElementById('fantasticpicture').style.backgroundImage ="url('images/mrfantastic.jpeg')"
    aintthatfantastic.play()
    document.getElementById('fantasticpicture').style.cursor = 'default'

}

function reseteverything() {


    document.documentElement.style.overflow = 'visible';


    song.currentTime = 0
    song.pause()
    aintthatfantastic.currentTime=0
    aintthatfantastic.pause()
    ball.className = "hide";
    document.getElementById('kermitdance').className = 'hide'
    document.getElementById('grudance').className = 'hide'
    document.getElementById('songbutton').className = 'songbutton'
    tagbot.className = 'tagbot'

    tagbot.style.left = 600 + 'px';
    tagbot.style.top = 400 + 'px';
    document.getElementById('taunt').className = 'taunt'
    document.getElementById('taunt').innerText = "You won't hit me, punk"
    // document.getElementById('mainflex').style.height = '100%'
    // document.getElementById('header').style.flex = 2
    // document.getElementById('page3').style.flex = 6


    translation = ''
    score = 0
    misstracker = 0
    dancecounter = 0

}




//DUCK
function submittranslate(){
    console.log('pressed button')
    translation =document.getElementById('duckinput').value
    tcount = translation.length
    console.log(translation.length)
    if (tcount > 90){
        translation = 'Slow down there shakespeare, ducks dont do novels' 
     }
    if (tcount <= 90){
        translation = '"quack quack quack quack quack quack quack quack quack quack"' 
     }
    if (tcount <= 80){
        translation = '"quack quack quack quack quack quack quack quack quack"' 
     }
     if (tcount <= 70){
        translation = '"quack quack quack quack quack quack quack quack"' 
     }
     if (tcount <= 60){
        translation = '"quack quack quack quack quack quack quack"' 
     }
    if (tcount <= 50){
        translation = '"quack quack quack quack quack quack"' 
     }
      if (tcount <= 40){
        translation = '"quack quack quack quack quack"' 
     }
      if (tcount <= 30){
        translation = '"quack quack quack quack"' 
     }
      if (tcount <= 20){
        translation = '"quack quack quack"' 
     }
      if (tcount <= 10){
        translation = '"quack quack"'
     }
      if (tcount < 10){
        translation = '"quack"'
     }
     if (tcount < 1){
        translation = 'you gonna say something?'
     }
    document.getElementById('duckprompt').innerText = translation
}






//TAG
//this is so weird i don't know why this works
function hidetaunt() {
    document.getElementById('taunt').className = 'hide'
}
function backtoneutral() {
    tagbot.style.backgroundImage = "url('IMAGES/neutral_face.png')"
}
function weave() {
    document.getElementById('taunt').className = 'hide'
    document.getElementById('tagbot').style.left = Math.floor(Math.random() * 1201) + 'px';
    //1200 pixel range
    document.getElementById('tagbot').style.top = Math.floor(Math.random() * 501) + 200 + 'px';
    //700
    misstracker += 1
    if ((misstracker % 5) === 1) {
        var decidetaunt = Math.floor(Math.random() * 7)
        if (decidetaunt === 1) {
            tagbot.style.backgroundImage = "url('IMAGES/surfer.png')"
            setTimeout(backtoneutral, 500)
            dodge.play()
        }
        if (decidetaunt === 2) {
            tagbot.style.backgroundImage = "url('IMAGES/stuck_out_tongue.png')"
            setTimeout(backtoneutral, 500)
            laugh.currentTime = .2
            laugh.play()
        }
        if (decidetaunt === 3) {
            tagbot.style.backgroundImage = "url('IMAGES/grin.png')"
            setTimeout(backtoneutral, 500)
            peter.play()
        }
        if (decidetaunt === 4) {
            tagbot.style.backgroundImage = "url('IMAGES/sunglasses.png')"
            setTimeout(backtoneutral, 500)
            mmm.play()
        }
        if (decidetaunt === 5) {
            tagbot.style.backgroundImage = "url('IMAGES/surfer.png')"
            setTimeout(backtoneutral, 500)
            dodge.play()
        }

    }


    if (misstracker === 10) {
        document.getElementById('taunt').className = 'taunt'
        document.getElementById('taunt').innerText = "that's 10 misses in a row"
        setTimeout(hidetaunt, 7000);
    }
    if (misstracker === 15) {
        document.getElementById('taunt').className = 'taunt'
        document.getElementById('taunt').innerText = "that's 15 misses in a row"
        setTimeout(hidetaunt, 7000);
    }
    if (misstracker === 20) {
        document.getElementById('taunt').className = 'taunt'
        document.getElementById('taunt').innerText = "THAT'S 20 MISSES IN A ROW"
        setTimeout(hidetaunt, 7000);
    }
    if (misstracker === 30) {
        document.getElementById('taunt').className = 'taunt'
        document.getElementById('taunt').innerText = "You should quit"
        setTimeout(hidetaunt, 7000);
    }

}

function tagged() {
    score += 1
    document.getElementById('scoreboard').innerText = 'Score: ' + score
    misstracker = 0

    peter.pause()
    peter.currentTime = 0
    laugh.pause()
    laugh.currentTime = .2
    mmm.pause()
    mmm.currentTime = 0
    dodge.pause()
    dodge.currentTime = 0

    slap.currentTime = .1
    slap.play()
    tagbot.style.backgroundImage = "url('IMAGES/dizzy_face.png')"
    setTimeout(backtoneutral, 500)

}

//DANCETAB
function dance(){
    console.log(dancecounter)
    document.getElementById('theman').style.backgroundImage = "url('NAPOLEON/"+dancecounter+".gif')"
    console.log(document.getElementById('theman').style.backgroundImage)
    dancecounter += 2
    dancescore += multiplier
    document.getElementById('dancescore').innerText = "Current Score: "+dancescore +"\n\n Dancepower: " +multiplier
    if (dancecounter == 38){
        dancecounter = 0
    }
}

function purchase(){
    if (dancescore >= price){
        dancescore -= price
        multiplier +=1
        document.getElementById('dancescore').innerText = "Current Score: "+dancescore +"\n\n Dancepower: " +multiplier
console.log(multiplier)        
price *= 1.5
        document.getElementById('increasescoreconfirm').innerText = 'SUCCESS!'
        setTimeout(() => {
            document.getElementById('increasescoreconfirm').innerText = 'PURCHASE';
        }, 1000);
        price= Math.round(price)
        document.getElementById('actuallyincreasescore').innerText='Increase Power by ' +(multiplier+2)+
    ': ' +price+' points'


    }

    

}






//PENGUINS

var windowheight = 0;
var ydistance = 0;
var pengwinheight = 0;
function pengscroll(){
console.log('hello')
console.log(ydistance)
console.log(pengwinheight)

windowheight = window.innerHeight
ydistance = window.scrollY;
pengwinheight = document.documentElement.scrollHeight;
//https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
if (windowheight + ydistance >= pengwinheight && document.getElementById('page3').style.display=='block') {    
    console.log('success')
    setTimeout(() => {
        document.getElementById('penguinguy').style.backgroundImage = "url('IMAGES/penguinengry2.png')"
        getout.currentTime = .2
        getout.play()
    }, 500);
    
    //need it to wait a second
    //https://www.youtube.com/watch?v=JRevaOwNKTI
    setTimeout(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }, 500);
    setTimeout(() => {
        document.getElementById('penguinguy').style.backgroundImage = "url('IMAGES/penguinshower.png')"
    }, 1000);


}

}

window.onscroll = pengscroll;

//
//
//
//
//
//
//
//
//
//

//Surprise








// JAMMING
function showgru() {
    document.getElementById('grudance').className = 'grudance'
}
function postplay() {
    document.getElementById('songbutton').className = 'hide'
    document.getElementById('kermitdance').className = 'kermitdance'
}
const song = new Audio('AUDIO/feelit.mp3');
var ball = document.getElementById('ball')
function playsong() {
    song.play()
    ball.className = "circle"
    document.getElementById('songbutton').className = 'songbutton songdash'
    setTimeout(postplay, 4500);
    setTimeout(showgru, 14000);
    document.documentElement.style.overflow = 'hidden'; // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    


    // setTimeout(20000)
    // document.getElementById('songbutton').className = 'hide;'



}

