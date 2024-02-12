class FormCollector
{
    collectForms(form)
    {
        let forms = document.querySelectorAll(".aweb-form");
        if (forms.length <= 0) {return null}
        forms.forEach((form) => {
            let formData = new FormData(form);
        })
    }
    initForms()
    {

    }
}


