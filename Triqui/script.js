let combinacionGanar = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]

let movimientoLA = [[4,1,2],[3,2,6],[6,9,8],[4,7,8]]
let movimientoLC = [[4,5,2],[2,5,6],[6,5,8],[4,5,8]]
let movimientoLR = [[2,5,7],[2,5,9],[6,5,1],[6,5,7],[8,5,1],[8,5,3],[4,5,3],[4,5,9]]
let movimientoE = [[1,7,3],[7,1,9],[9,7,3],[3,1,9]]
let movimientoV = [[1,5,3],[3,5,9],[9,5,7],[7,5,1]]

let movimientos = [[4,1,2],[3,2,6],[6,9,8],[4,7,8],[4,5,2],[2,5,6],[6,5,8],[4,5,8],[2,5,7],[2,5,9],[6,5,1],[6,5,7],[8,5,1],[8,5,3],[4,5,3],[4,5,9],[1,7,3],[7,1,9],[9,7,3],[3,1,9],[1,5,3],[3,5,9],[9,5,7],[7,5,1]]

let avaliables = [1,2,3,4,5,6,7,8,9]
let plays_player = []
let plays_pc = []

function select_box(contain){
    let icons = document.querySelectorAll(".icons")
    let icon = icons[contain-1]
    plays_player.push(contain)
    let index = avaliables.indexOf(contain)

    avaliables.splice(index, 1)
    icon.setAttribute("name", "close")
    hide_box(index)
    movements_pc(contain)
    let ganador = winner()
    console.log(ganador);
    if (ganador){
        alert("El ganador es: " + ganador)
        let divs = document.querySelectorAll(".contain_game div")
        divs.forEach(div => {
            div.style = "pointer-events: none"
        })
    }

    setTimeout(()=>{
        index = play_pc()
        hide_box(index)
    }, 1000)

    ganador = winner()
    if (ganador){
        alert("El ganador es: " + ganador)
        let divs = document.querySelectorAll(".contain_game div")
        divs.forEach(div => {
            div.style = "pointer-events: none"
        })
    }
}

function hide_box(contain){
    let icons = document.querySelectorAll(".icons")
    let icon = icons[contain]
    icon = icon.parentElement
    icon.style = "pointer-events: none"
}

let possible_play = ""

function play_pc(){
    let play = ""
    if(plays_pc.length == 0){
        play = avaliables[Math.floor(Math.random() * avaliables.length)]
        possible_m_pc(play)
        possible_play = movimientos[Math.floor(Math.random() * movimientos.length)]
        console.log(possible_play);
    }else{
        let stop_play = stop_play_player()

        if(stop_play != 0){
            play = stop_play

        }else{
            let move_win_pc = movement_win_pc()
            if(move_win_pc != 0){
                play = move_win_pc
            }else{
                play = possible_play[Math.floor(Math.random() * possible_play.length)]
                possible_m_pc(play)
            }
        }
    }
    let icons = document.querySelectorAll(".icons")
    let icon = icons[play-1]
    icon.setAttribute("name", "ellipse-outline")
    let index = avaliables.indexOf(play)
    plays_pc.push(avaliables[index])

    avaliables.splice(index, 1)
    console.log(avaliables);
    
    return play-1
}


//elimina jugadas que ya haya usado el jugador
function movements_pc(play) {
    movimientos = movimientos.filter(arr => !arr.includes(play));
}

function possible_m_pc(play){
    movimientos = movimientos.filter(arr => arr.includes(play));
    for(let i = 0; i < movimientos.length; i++){
        let index = movimientos[i].indexOf(play);
        movimientos[i].splice(index, 1);
    }
}

function stop_play_player(){
    plays_player = plays_player.sort()
    let ubication = [0]
    for(let i = 0; i < combinacionGanar.length; i++){
        for(let x = 0; x < plays_player.length-1; x++){
            if(combinacionGanar[i].includes(plays_player[x]) && combinacionGanar[i].includes(plays_player[x+1])){             
                ubication = combinacionGanar[i]
                let index = ubication.indexOf(plays_player[x])
                ubication.splice(index,1)
                index = ubication.indexOf(plays_player[x+1])
                ubication.splice(index,1)

                console.log((ubication[0] in avaliables));
                console.log(!(ubication[0] in avaliables));
                if(!(ubication[0] in avaliables)){
                    ubication = [0]
                    return ubication
                }
            }
        }
    }
    console.log(ubication);
    return ubication[0]
}

function winner(){
    plays_player = plays_player.sort()
    plays_pc = plays_pc.sort()
    let winner = false
    for(let i = 0; i < combinacionGanar.length; i++){
        for(let x = 0; x < plays_player.length-2; x++){
            if(combinacionGanar[i].includes(plays_player[x]) && combinacionGanar[i].includes(plays_player[x+1]) && combinacionGanar[i].includes(plays_player[x+2])){                
                winner = "Player"
            }
        }
    }
    for(let i = 0; i < combinacionGanar.length; i++){
        for(let x = 0; x < plays_pc.length-2; x++){
            if(combinacionGanar[i].includes(plays_pc[x]) && combinacionGanar[i].includes(plays_pc[x+1]) && combinacionGanar[i].includes(plays_pc[x+2])){                
                winner = "PC"
            }
        }
    }
    return winner
}

function movement_win_pc(){
    plays_pc = plays_pc.sort()
    let ubication = [0]
    for(let i = 0; i < combinacionGanar.length; i++){
        for(let x = 0; x < plays_pc.length-1; x++){
            if(combinacionGanar[i].includes(plays_pc[x]) && combinacionGanar[i].includes(plays_pc[x+1])){                
                ubication = combinacionGanar[i]
                let index = ubication.indexOf(plays_pc[x])
                ubication.splice(index,1)
                index = ubication.indexOf(plays_pc[x+1])
                ubication.splice(index,1)
                if(!(ubication[0] in avaliables)){
                    ubication = [0]
                    return ubication
                }
            }
        }
    }
    console.log(ubication);
    return ubication[0]
}

// function movements_pc(play){
//     console.log(play);
//     for(let i = 0; i < movimientos.length; i++){
//         if(movimientos[i].includes(play)){
//             movimientos.splice(i,1)
//         }
//     }
//     // for(let x = 0; x < movimientos[i].length; x++){
//         //     if(play == movimientos[i][x]){
//         //         movimientos.splice(i,1)
//         //         console.log(movimientos[i][x]);
//         //         console.log(movimientos[i] + "elimina");
//         //     }
//         // }
//     console.log(movimientos);
// }

