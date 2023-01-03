import axios from "axios";

export const createNewTimeCheck = async (data: string) => {
    const { data: response } = await axios.post('https://open-aitc-backend.vercel.app/find-complexity',{
        "prompt": data,
    }
    );
    return response.data;
    };