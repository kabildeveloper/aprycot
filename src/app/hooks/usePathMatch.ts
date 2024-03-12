import {matchPath, useLocation} from "react-router-dom";

const usePathMatch = () => {
    const location = useLocation();
    return (path:string) => {
        return !!matchPath(location.pathname, path);
    }
}

export default usePathMatch;