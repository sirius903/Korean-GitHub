let appHeaders = document.querySelectorAll(".AppHeader-context-item-label");
appHeaders.forEach(a => {
    if(a.innerText == 'Dashboard'){
        a.innerText = '대시보드';
    }else if(a.innerText == 'Issues'){
        a.innerText = '이슈';
    }
})

setTimeout(() => {
    let search = document.getElementById("qb-input-query");
    search.innerHTML = '검색을 위해 <kbd class="AppHeader-search-kbd">/</kbd>을 누르세요';
    
    let f4 = document.querySelectorAll('.f4');
    f4.forEach(a => {
        if(a.innerText == 'Popular repositories'){
            a.innerText = '있기있는 저장소';
        }else if(a.innerText.includes('contributions in the last year')){
            a.innerText = '최근 1년간 ' + a.innerText.split(' ')[0] + '개의 기여';
        }else if(a.innerText == 'Contribution activity'){
            a.innerText = '기여 활동';
        }
    })
}, 1000);

document.querySelector('.AppHeader-button.p-0').addEventListener("click", function(){
    setTimeout(() => {
        let actionList = document.querySelectorAll(".ActionListItem-label");
        actionList.forEach(a => {
            if(a.innerText == 'Home'){
                a.innerText = '홈';
            }else if(a.innerText == 'Issues'){
                a.innerText = '이슈';
            }else if(a.innerText == 'Pull requests'){
                a.innerText = 'Pull requests';
            }else if(a.innerText == 'Projects'){
                a.innerText = '프로젝트';
            }else if(a.innerText == 'Discussions'){
                a.innerText = '토론';
            }else if(a.innerText == 'Codespaces'){
                a.innerText = '코드스페이스';
            }else if(a.innerText == 'Explore'){
                a.innerText = 'Explore';
            }else if(a.innerText == 'Marketplace'){
                a.innerText = '마켓플레이스';
            }
        })
    }, 500)
})
let inline = document.querySelectorAll(".d-inline-flex");
inline.forEach(a => {
    if(a.innerText == 'Overview'){
        a.querySelector('span').innerText = '개요';
    }else if(a.innerText.includes('Repositories')){
        a.querySelector('span').innerText = '저장소';
    }else if(a.innerText == 'Projects'){
        a.querySelector('span').innerText = '프로젝트';
    }else if(a.innerText == 'Packages'){
        a.querySelector('span').innerText = '패키지';
    }else if(a.innerText.includes('Stars')){
        a.querySelector('span').innerText = '별';
    }
})