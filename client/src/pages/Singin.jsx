import React, { useState } from "react";
import { Link } from "react-router-dom";


const SingIn = () => {
    const [isSingUp, setIsSingUp] = useState(false);

    document.title = `Debater -${isSingUp ? 'Sing Up' : 'Sing In'}`;






    return (
        <>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl ">{isSingUp ? 'Sing Up' : 'Sing In'}</h2>
                        <div className="form-control">
                            {isSingUp &&
                                <>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" className="input input-bordered" />
                                </>}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />

                            {isSingUp &&
                                <>
                                    <label className="label">
                                        <span className="label-text">Conform Password</span>
                                    </label>
                                    <input type="password" placeholder="conform password" className="input input-bordered" />
                                </>}
                            {!isSingUp &&
                                <label className="label">
                                    <Link to="/forget_passowrd" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">{isSingUp ? 'Sing Up' : 'Sing In'}</button>
                            <label className="label">{!isSingUp ? "Don't have an account?" : "Already have an account?"}</label>
                            <button className="btn btn-info" onClick={() => setIsSingUp(!isSingUp)}>{!isSingUp ? 'Sing Up' : 'Sing In'}</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingIn;
