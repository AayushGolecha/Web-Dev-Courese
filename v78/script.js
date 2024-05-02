
// const addItem = async (item) => {

//     await randomDelay()
//     let div = document.createElement("div")
//     div.innerHTML = item
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         // let timeOut = 1 + 6 * Math.random() + "000"
//         let timeOut = Number(Math.floor(Math.random() * 7) + 1 + "000");
//         console.log(timeOut)
//         setTimeout(() => {
//             resolve()
//         }, timeOut)
//     })
// }

// async function main(){

//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div");
//         last = last[last.length - 1]
//         if (last.innerHTML.endsWith("...")) {
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
//         }
//         else {

//             last.innerHTML = last.innerHTML + "."
//         }

//     }, 500);

//     let arr = [">>> Initializing Hacking...", ">>> Reading your Files...", ">>> Password files Detected...", ">>> Sending all passwords and personal files to server...", ">>> Cleaning up..."]

//     for (const item of arr) {
//         addItem(item)
//     }

//     await randomDelay()
//     clearInterval(t)
// }
// main()

alert("Javascript is Loaded");

async function displayMessage(msg) {
    let r = Number(Math.floor(Math.random() * 7) + 1 + "000");
    console.log(r);

    let h = document.createElement("div");
    h.classList.add("big");

    let p1 = await new Promise((res, rej) => {
        setTimeout(() => {
            res(msg);
        }, r);
    })
        .then((val) => {
            h.innerText = val;
            document.body.appendChild(h);
        })

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {

            last.innerHTML = last.innerHTML + "."
        }

    }, 800);
    
    
}
async function main() {
    await displayMessage(">>> Initializing Hacking");
    console.log("done");
    await displayMessage(">>> Reading your Files");
    console.log("done");
    await displayMessage(">>> Password files detected");
    console.log("done");
    await displayMessage(">>> Sending all passwords and personal files to server");
    console.log("done");
    await displayMessage(">>> Cleaning up");
    console.log("done");
    clearInterval(t)
}

main();
