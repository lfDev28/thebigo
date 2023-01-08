import axios from "axios";

export const createNewTimeCheck = async (data: string) => {
    const res = await axios.post('https://h6fgptwzm0.execute-api.ap-southeast-2.amazonaws.com/Dev',{
        "prompt": data,

    }, 
    );
    return cleanString(res.data);
    };

    const cleanString = (str: string) => {
        if (str.length === 0) return str;
        if (str[0] === 'O' && str[str.length-1]  === ')') {
          return str;
        } else {
          return str.substring(str.indexOf('O'), str.indexOf(')') + 1);
        }
      };