import axios from "axios";

export const createNewTimeCheck = async (data: string) => {
    console.log(data);
    const res = await axios.post('https://h6fgptwzm0.execute-api.ap-southeast-2.amazonaws.com/Dev',{
        "prompt": data,

    }, 
    );
    return res;
    };