// import Cookies from "universal-cookie";
// import { toast} from 'react-toastify';


export const getFileSrcFromPublicimg= (name) => {
    return `${process.env.PUBLIC_URL}/assets/images/${name}`;
}; 