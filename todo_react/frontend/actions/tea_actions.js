export const RECIEVE_TEA = "RECIEVE_TEA"
// export const RECIEVE_TEA 

//static 
// export const recievedGreenTea = {
//     type : 'RECEIVE_TEA',
//     tea:{
//         flavor: 'green',
//         amount : 2.75,
//         id:1
//     }
// }

// dynamic action creator just a funct returning a pojo
export const recieveTea = (tea) => {
    return {
        type: RECIEVE_TEA,
        tea: tea
    };
};


export const RECIEVE_CUP = "RECIEVE_CUP";
export const recieveCup = (cup) => {
    return {
        type: RECIEVE_CUP,
        cup: cup
    };
};



// export default recieveTea;
export default recieveCup;
