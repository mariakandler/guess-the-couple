const levelH1 = document.getElementById('levelH1');
const tipsDiv = document.getElementById('tipsDiv');

function cleanInput() {
    const input1 = document.getElementById('man');
    const input2 = document.getElementById('woman');
    input1.value = '';
    input2.value = '';
}

export function level1() {
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They were so into crimes...';
    const img = document.getElementById('imgTip');
    img.src = 'https://media.licdn.com/dms/image/C5612AQGdOanwdV5PGw/article-cover_image-shrink_600_2000/0/1520059387073?e=2147483647&v=beta&t=WHcwEoKZ4l2kNcQgfOGeNDvYH7lDCtpViD086HbRDqs'

    tipsDiv.append(textTip, img)
}

export function level2() {
    levelH1.innerHTML = 'Level 2'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'Their passion was so ravishing they chose death...';
    const img = document.getElementById('imgTip');
    img.src = 'https://istoedinheiro.com.br/wp-content/uploads/sites/17/2021/10/veneno.jpg'

    tipsDiv.append(textTip, img)
}

export function level3() {
    levelH1.innerHTML = 'Level 3'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They could not resist the temptations in Eden\'s Garden...';
    const img = document.getElementById('imgTip');
    img.src = 'https://mythicalcreatures.info/media/garden-of-eden-1200x807.jpg'

    tipsDiv.append(textTip, img)
}
export function level4() {
    levelH1.innerHTML = 'Level 4'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They met in the sets...';
    const img = document.getElementById('imgTip');
    img.src = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2016/07/aranha-teia-e1469570155700.jpg'

    tipsDiv.append(textTip, img)
}
export function level5() {
    levelH1.innerHTML = 'Level 5'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They are a powerfull couple for the political representation of the black movement...';
    const img = document.getElementById('imgTip');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFFCUCQmV8FrX5DGpaMBN4at6xRHHqTEOlg&s'

    tipsDiv.append(textTip, img)
}
export function level6() {
    levelH1.innerHTML = 'Level 6'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'Every night in my dreams I see you, I feeeel yoouuu...';
    const img = document.getElementById('imgTip');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa61IWHB6OzuVcZ6bAmiN-HzXJ6NR_atmZ9w&s'

    tipsDiv.append(textTip, img)
}
export function level7() {
    levelH1.innerHTML = 'Level 7'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They have two very memorable colors in their visual identity...';
    const img = document.getElementById('imgTip');
    img.src = 'https://st2.depositphotos.com/1140262/10110/i/950/depositphotos_101100796-stock-photo-magician-holding-magic-hat-and.jpg'

    tipsDiv.append(textTip, img)
}
export function level8() {
    levelH1.innerHTML = 'Nível 8'
    cleanInput()
    const textTip = document.getElementById('textTip');
    textTip.innerHTML = 'They are not (yet), but they could be a couple... (pronouns)';
    const img = document.getElementById('imgTip');
    img.src = 'https://www.shutterstock.com/image-photo/you-me-cheerful-black-lady-260nw-2083879444.jpg'

    tipsDiv.append(textTip, img)
}