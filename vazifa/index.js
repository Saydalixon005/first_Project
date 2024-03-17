const y1 = document.querySelector('#a')
const y2 = document.querySelector('#b')
const y3 = document.querySelector('#c')
const p3 = document.querySelector('.page3')
const p4 = document.querySelector('.page4')
const p5 = document.querySelector('.page5')
const p1 = document.querySelector('.page1')
const l = document.querySelector('.login')
const lp = document.querySelector('.loginp')

y1.addEventListener('click', () =>{
    p3.style.display='flex'
    p1.style.display='none'
    p4.style.display='none'
    lp.style.display='none'

})
y2.addEventListener('click', () =>{
    p4.style.display='flex'
    p1.style.display='none'
    p3.style.display='none'
    p5.style.display='none'
    lp.style.display='none'
})
y3.addEventListener('click', () =>{
    p5.style.display='flex'
    p1.style.display='none'
    p4.style.display='none'
    p3.style.display='none'
    lp.style.display='none'

})
l.addEventListener('click', () =>{
    lp.style.display='flex'


})


function Activityd(){
    const ism = document.querySelector('.ism')
    const fam = document.querySelector('.fam')
    let isml = ism.value.trim();
    let faml = fam.value.trim();
    let regism = /[A-Z].{0,3}$/;
    let regfam = /[A-Z].{0,3}$/;
    if(regism.test(isml) || regfam.test(faml)){
        alert('Tug"ri ')
        lp.style.display='none'
    }else{
        alert('xato')
    }
}