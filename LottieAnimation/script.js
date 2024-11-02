const animationContainer = document.getElementById('animationContainer');

// Load animation using Lottie
const animation = lottie.loadAnimation({
    container: animationContainer, // the DOM element that will contain the animation
    renderer: 'svg',
    loop: true, // set to false if you don’t want it to loop
    autoplay: true, // set to false if you don’t want it to autoplay
    path: 'animation.json' // path to the animation JSON file
});
