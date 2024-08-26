function um() {
    let a = 4
    let b = 10
    let div = a/b
    let mult = a*b
    let adicao = a+b
    let sub = a-b
    let qualop = "qualop"
    if (qualop === "divisão"){
        console.log(div)
    }
    else if (qualop === "mult"){
        console.log(mult)
    }
    else if (qualop === adicao){
        console.log(adicao)
    }
    else if (qualop === sub){
        console.log(sub)
    }
    
    }
    
    function dois() {
    let num = 25
    let lista= []
    for(let primo=0; primo<=num; primo++){
        let div1 = num/primo
        if (div1 % 1 === 0) {
            lista.push(div1)
        };
    }
    console.log(lista.length); //retornar numero de indices da lista
    if (lista.length === 2) {
        console.log(num, "é um numero primo")
    }
    else (console.log(num, "não é um primo e é divisivel por", lista))
    }
    
    function tres() {
    let string = "string@.qk%$#jdbca#"
    let lista = []
    for (const char of string) {
        if(char == "@" || char == "%" || char == "#" || char == "$" || char == "&" ){
            lista.push(char)
        }
      }
      console.log(lista)
      console.log(lista.length)
    }
    
    function quatro(){
    let nota1 = 10
    let nota2 = 9
    let nota3 = 8
    let nota4 = 7
    let media = (nota1+nota2+nota3+nota4)/4
    if (media<5){
        console.log("reprovado")
    }
    else if (media>=5 && media<7){
        console.log("recuperação")
    }
    else if (media>=7){
        console.log("aprovado")
    }
    }
    console.log(quatro())
    