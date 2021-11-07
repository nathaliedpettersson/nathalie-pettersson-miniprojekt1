const body = document.querySelector('body');

for (let i=1; i<6; i++) {
    const h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerText = `Rad ${i}`;
    const textStorlek = 1+(i * 7);
    h2.style.fontSize = `${textStorlek}px`;
    h2.style.textAlign = 'center';
    h2.style.color = '#a8a8f0';
}

const allH2 = document.querySelectorAll('h2');

for(let i = 0; i < allH2.length; i++) {
    let hue = (60 / allH2.length) * i + 495;
    allH2[i].style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
}

for(let i=0; i < allH2.length; i++) {
    let margin = i*7;
    allH2[i].style.margin = `${margin}px 0px`;
}

for(let i=0; i < allH2.length; i++) {
    let padding = i*i;
    allH2[i].style.padding = `${padding}px 0px`;
}

const wrapper = document.createElement('div');
body.appendChild(wrapper);
wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'space-evenly';
wrapper.style.border = '1px solid black';
wrapper.style.padding = '60px';

const firstListContainer = document.createElement('ul');
wrapper.appendChild(firstListContainer);
firstListContainer.style.border = '10px solid #a8a8f0'; 
firstListContainer.style.margin = 0;
firstListContainer.style.padding = 0;
firstListContainer.style.width = '3rem';

for(let i=0; i < 10; i++) {
    const firstList = document.createElement('li');
    firstListContainer.appendChild(firstList);
    firstList.innerText = `${i}`;   
    firstList.style.listStyleType = 'none';
    firstList.style.textAlign = 'left';

if(i == 4) {
    firstList.style.backgroundColor = '#a8a8f0';
    firstList.style.color = 'white';
}

    else if(i % 2 == 0 ) {
        firstList.style.backgroundColor = 'black';
        firstList.style.color = 'white';
    }
}

const secondListContainer = document.createElement('ul');
wrapper.appendChild(secondListContainer);
secondListContainer.style.border = '10px solid #a8a8f0'; 
secondListContainer.style.margin = 0;
secondListContainer.style.padding = 0;
secondListContainer.style.width = '3rem';

for(let i=9; i >= 0; i--) {
    const secondList = document.createElement('li');
    secondListContainer.appendChild(secondList);
    secondList.innerText = `${i}`;   
    secondList.style.listStyleType = 'none';
    secondList.style.textAlign = 'center';

    if (i == 8) {
        secondList.style.backgroundColor = '#a8a8f0';
        secondList.style.color = 'white';
    }

    else if (i % 2 == 0) {
        secondList.style.backgroundColor = 'black';
        secondList.style.color = 'white';
    }
}

const nummer = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const thirdListContainer = document.createElement('ul');
    wrapper.appendChild(thirdListContainer);
    thirdListContainer.style.border = '10px solid #a8a8f0'; 
    thirdListContainer.style.margin = 0;
    thirdListContainer.style.padding = 0;
    thirdListContainer.style.width = '3rem';

for(let i=0; i<nummer.length; i++){
    const thirdList = document.createElement('li');
    thirdListContainer.appendChild(thirdList);
    thirdList.innerText = nummer[i];
    thirdList.style.listStyleType = 'none';
    thirdList.style.textAlign = 'right';

    if (nummer[i] === 'sex') {
        thirdList.style.backgroundColor = '#a8a8f0';
    }

    else if (i % 2 == 0) {
        thirdList.style.backgroundColor = 'black';
        thirdList.style.color = 'white';
    }
}
