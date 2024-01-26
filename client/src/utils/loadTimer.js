export function LoadTimer(action, time){
    setTimeout(()=>{
        action(false)
    }, time)
}