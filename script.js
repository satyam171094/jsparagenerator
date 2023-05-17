const input = document.querySelector(".input")
const container = document.querySelector(".container")



const wordGenerator = (n) =>{
    let word = "";
    const letter = "abcdefghijklmnopqrstuvwxyz";
    for(i = 0; i< n; i++){
        const random = Math.floor(Math.random() * 26)
        word += letter[random]
    }
    return word;
}


const paraGenerator = ()=>{
    let inputNum = Number(input.value)
   
    let para = "";
    for(j =0; j< inputNum; j++){
       const newRandom = Math.floor(Math.random() * 10)
       para += wordGenerator(newRandom) + " "; 
    }
    const div = document.createElement("div")
    div.setAttribute("class", "output");

    const span = document.createElement("span")
    span.innerText = para
    div.append(span)

    container.append(div)

}

paraGenerator()