let collector = new FormCollector();
let btn = document.querySelector('.aweb-form__submit-btn');
btn.addEventListener("click", ()=>{
    collector.collectForms();
})
