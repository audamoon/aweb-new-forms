class AwebForm {
    ajaxController = new AjaxController();

    init(formID, sumbitBtnID) {
        let sumbitBtn = document.getElementById(sumbitBtnID);
        sumbitBtn.addEventListener("click", () => {
            this.ajaxController.setData(this.getFormData(formID));
            this.ajaxController.sendRequest();
        })
    }

    getFormData(formID) {
        let form = document.getElementById(formID);
        return new FormData(form);
    }
}