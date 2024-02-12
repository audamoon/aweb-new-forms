class AjaxController {
    postPath = '/src/ResponceController.php';
    initData = {};

    setData(formData) {
        this.initData = {
            method: "POST",
            body: formData,
        }
    }

    sendRequest() {
        fetch(this.postPath, this.initData)
            .then((responce) => {
                console.log(responce);
            })
    }
}