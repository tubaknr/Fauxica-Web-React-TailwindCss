import React from "react";
import Header from "../components/Header";

export default function Contact(){
    return(
        <div className="font-Inter">
            <Header/>
            <div className="m-40 items-center flex flex-col justify-center block">
                <div className="text-center">
                    <h1 className="font-bold text-4xl m-5 dark:text-white">Contact Us</h1>
                    <p className="text-black text-xl m-10 dark:text-slate-200">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                </div>

                <div className="text-center items-start">
                    <form>
                        <div className="flex flex-col m-5">
                            <label for="email" className="text-left my-3 dark:text-slate-200">Your email</label>
                            <input type="text" id="email" placeholder="name@flowbite.com" className="p-3 border border-gray-200 rounded-xl w-full"></input>
                        </div>
                        <div className="flex flex-col m-5">
                            <label for="subject" className="text-left my-3 dark:text-slate-200">Your subject</label>
                            <input type="text" id="subject" placeholder="Let us know how we can help you." className="p-3 border border-gray-200 rounded-xl w-full"></input>
                        </div>

                        <div className="flex flex-col m-5">
                            <label for="message" className="text-left my-3 dark:text-slate-200">Your message</label>
                            <textarea
                                type="text" 
                                id="message" 
                                placeholder="Leave a comment..." 
                                rows="5"
                                className="pr-80 pl-6 py-5 border border-gray-200 rounded-xl w-full">
                            </textarea>
                        </div>
                        
                        <div className="flex m-5">
                            <button className="my-4 bg-customYellow px-7 py-4 rounded-xl text-black text-left">Send message</button>
                        </div>

                    </form>

                    <div className="flex block m-20 italic">
                        <div>
                            <p className="cursor-pointer text-center m-5 dark:text-slate-200">+44 117 847490</p>
                            <p className="cursor-pointer text-center m-5 dark:text-slate-200">info@fauxica.co.uk</p>
                            <p className="cursor-pointer m-5 mb-20 text-center dark:text-slate-200">KT1 1AR, Kingston upon Thames, London, UK.</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39811.37466783969!2d-0.32448431181450793!3d51.41755207722524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876093778987453%3A0x4c3f21b23e3e35ec!2sKingston%20upon%20Thames%2C%20UK!5e0!3m2!1sen!2str!4v1725453411980!5m2!1sen!2str" 
                                width="800" 
                                height="450"
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Google Map">
                            </iframe>

                        </div>
                    </div>
                </div>
                    <p className="mt-40 dark:text-slate-200">All Rights Reserved. Tuba Culhaoglu 2024.</p>
            </div>
        </div>
    );
}

