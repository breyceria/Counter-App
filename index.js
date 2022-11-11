let count = 0;
let printCount = document.getElementById("count-el")
let saveRunning = document.getElementById("save-running")

function increment() {
    count += 1
    printCount.textContent = count
}

function saverest() {
    let runningString = count + ' - '
    saveRunning.textContent += runningString
    printCount.textContent = 0;
    count = 0

}

