import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ERROR_IMAGE from "../images/404error.svg";


export default () => {
    document.title = 'Debater -Page Not Found';
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 4000);
    }, []);

    return (
        <div className="h-[80vh] w-screen flex justify-center items-center">
            <div>
                <img src={ERROR_IMAGE} alt="404 page not found image" />
            </div>
        </div>
    )
}
