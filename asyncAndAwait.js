function returnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Returned Promise")
        }, 5000);
    })
}

const initFunction = async () => {
    console.log(await returnPromise());
}

initFunction();