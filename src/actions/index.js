import axios from "axios";

export function fetchTrademarkWithquery(query, callback){
    return function(dispatch){
        let options= () => ({
            'Method': 'GET',
            'url' : 'https://uspto-trademark.p.rapidapi.com/v1/trademarkSearch/amazon/%7BsearchType%7D',
            headers:{
                'x-rapidapi-host': 'uspto-trademark.p.rapidapi.com',
                'x-rapidapi-key' : 'eb880407b3msh0f698ef509d897fp175df9jsnca1b3a1d806c'
            }
        })

        axios.request(options).then(response =>{
            console.log(response.data);
        }).catch()
    }
}