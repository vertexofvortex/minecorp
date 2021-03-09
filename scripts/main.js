window.onload = function() {
    buildLayout();
}

function buildLayout() {
    welcomeAvatarReplacement();
    welcomeNicknameReplacement();
    moveCounters();
    longerLastpost();
    moveModers();
    makeIteminfoRound()
}

function welcomeAvatarReplacement() {
    var avatar = document.querySelector('#brd-navlinks > a:nth-child(1)');
    var welcome = document.querySelector('#welcome');
    
    avatar.remove();
    welcome.append(avatar);
}
function welcomeNicknameReplacement() {
    var nicknameBox = document.querySelector('#welcome span');
    var nickname = document.querySelector('#welcome span strong').innerHTML;

    nicknameBox.innerHTML = nickname;
}
function moveCounters() {
    var items = document.querySelectorAll('.main-item');
    
    items.forEach(function(item) {
        try {
            var subject = document.querySelector(`#${item.id} .item-subject`);
            var topicsCounter = document.querySelector(`#${item.id} .info-topics strong`);
            var postsCounter = document.querySelector(`#${item.id} .info-posts strong`);
            var countersBox = document.createElement('div');
            
            countersBox.classList.add('counters-box');
            countersBox.innerHTML = `<span class="counter counter-topics" title="Тем в разделе">${topicsCounter.innerHTML}</span><span class="counter counter-posts" title="Ответов в разделе">${postsCounter.innerHTML}</span>`;
            subject.appendChild(countersBox);
        } catch {}
    });
}
function longerLastpost() {
    var headings = document.querySelectorAll('.main-content .main-item li.info-lastpost strong a');

    headings.forEach(function(heading) {
        heading.innerHTML = heading.title;
    });
}
function moveModers() {
    var items = document.querySelectorAll('.main-item');

    items.forEach(function(item) {
        try {
            var modlist = document.querySelector(`#${item.id} .modlist`);
            var topicsCounter = document.querySelector(`#${item.id} .counters-box`)
            modlist.innerHTML = modlist.innerHTML.replace('Модераторы: ', '');
            modlist.setAttribute('title', 'Модераторы раздела');
            
            topicsCounter.appendChild(modlist);
        } catch {}
    });
}