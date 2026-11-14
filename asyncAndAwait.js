require('dotenv').config();

function returnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Returned Promise")
        }, 5000);
    })
}

const initFunction = async () => {
    console.log(await returnPromise());
    console.log("My secret database password is:", process.env.DB_PASSWORD)
}

initFunction();