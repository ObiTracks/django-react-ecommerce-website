import { useEffect, useState } from "react";
import { QuoteBuilder } from "../components/QuoteBuilder.client";
import { default as Logo } from "/logo.svg";
import { default as RoomRender } from "/RoomRender.png";
import WalkthroughStepper from "../components/WalthroughStepper.client";
import { MantineProvider } from '@mantine/core';
import { Button } from "../components/Button.client";

export default function HomePage() {
    const showQuoteBuilder = () => {
        document.getElementById("quote-builder-root").classList.toggle("closed");
    }
    return <div className="index">
        <div className="navbar">
            <img className="logo" src={Logo} alt="" />
            <div className="links">
                <a className="link font-white font-semibold" href="#">Quotes</a>
                <a className="link font-white font-semibold" href="#">Store</a>
                <a className="link font-white font-semibold" href="#" id="login-link">Login</a>
                <a className="link font-white font-semibold" href="#" id="login-link">Signup</a>

                <a className="">
                    Cart
                    <img src="" alt="" />
                    <div className="cartCount">
                        cart count
                    </div>
                </a>
            </div>
        </div >

        <div className="hero">
            <div className="hero-content">
                <h1 className="font-white">Quote Posters to Remind You of Whats Important</h1>
                <p className="font-white">Choose your favorite quotes and have them shipped to your door as a quote posters for your walls. Easy, fast and cheap</p>
                <div className="buttons">
                    {/* <button className="button font-black font-uppercase font-semibold" onClick={
            showQuoteBuilder
          }>Get yours now</button> */}
                    <Button text="Get yours now" click={showQuoteBuilder} />
                </div>
            </div>
            <img className="hero-image" src={RoomRender} alt="" />
        </div>

        <div className="section" id="quotes-section">
            <h2 className="font-gradient-purple">Quotes for Every Mindset</h2>
            <div className="flex-grid">
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
                <div className="card-quote">
                    <h4>Deep quote deep quote</h4>
                    <p>Author</p>
                </div>
            </div>


        </div>

        <WalkthroughStepper />

        {/* <div className="modal"> */}
        <QuoteBuilder />
        {/* </div> */}
    </div >;
}