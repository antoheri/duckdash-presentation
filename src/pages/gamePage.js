// src/pages/GamePage.js
import React from 'react';
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameImage from "../components/GameImage";
import gameImagesData from "../datas/gameImages";

function GamePage() {
    return (
        <div>
            <Header />
            <main>
                <section id="articles">
                    <article>
                        <header>
                            <h2>Game Screenshots Overview</h2>
                            <p>Overview of all game images and their descriptions</p>
                        </header>

                            {gameImagesData.map((img, index) => (
                                <GameImage
                                           key={index}
                                           title={img.title}
                                           image={img.image}
                                           description={img.description}
                                />
                            ))}
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default GamePage;
