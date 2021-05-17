//ProgressBar
const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);
function progressBar() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;

    progress.style.width = per + '%';
}

//smooth
const anchors = document.querySelectorAll('a[href^="#"]')
for(let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//AnimBlock_2
const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]

function createSquare() {
    const section = document.querySelector('.block_2');
    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(()=>{
        square.remove()
    }, 7000)
}

setInterval(createSquare, 100);


function sqrt() {
    let m = [1,2,3,4,5,6, 23, 213, 12321];
    let s = 0;
    for(i=0; i<=m.length; i+=1) {
        if( m[i] % 2 == 1 ) {
            s += Math.sqrt(m[i]);
        }
    }
    console.log(s);
}

