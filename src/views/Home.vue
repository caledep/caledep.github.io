{
    "words": "words for the variable words."
}

<template>
    <main class="home-page">
        <div class="portrait-intro">
            <div>
                <img src="../../public/portrait_drawn_med.svg" class="portrait-image" alt="vue">
            </div>
            <div class="intro-block">
                <h1>Introduction</h1>
                <p>Hello! I'm Cale DePaolo, a passionate web developer and digital enthusiast based in the beautiful state of Wyoming. With 18 months of professional experience in the tech industry, I've developed a strong foundation in creating seamless, user-friendly websites and applications. My journey started with a curiosity for coding and has quickly evolved into a rewarding career where I help businesses establish their online presence. When I'm not immersed in coding, you can find me exploring Wyoming's stunning landscapes, experimenting with new recipes in the kitchen, or out at my local course for a round of golf. I believe in continuous learning and staying ahead of the curve in this fast-paced digital world. Welcome to my corner of the internet, where I share my projects, insights, and the occasional tech tutorial. Let's build something amazing together!</p>
            </div>
        </div>
        
        <div class="bio-block">
            <h1>Bio</h1>
            <p>Hello! I'm Cale DePaolo, a passionate web developer and digital enthusiast based in the beautiful state of Wyoming. With 18 months of professional experience in the tech industry, I've developed a strong foundation in creating seamless, user-friendly websites and applications. My journey started with a curiosity for coding and has quickly evolved into a rewarding career where I help businesses establish their online presence. When I'm not immersed in coding, you can find me exploring Wyoming's stunning landscapes, experimenting with new recipes in the kitchen, or out at my local course for a round of golf. I believe in continuous learning and staying ahead of the curve in this fast-paced digital world. Welcome to my corner of the internet, where I share my projects, insights, and the occasional tech tutorial. Let's build something amazing together!</p>

        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .portrait-intro {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: flex-end;
        .portrait-image {
            border: solid;
            border-width: 0.2rem;
            border-color: #161a4a;
            border-radius:2em;
            max-width: 24rem;
        } 

        .intro-block {
            padding: 2rem;
            background: #FFFCE2;
            border: solid;
            border-width: 0.2rem;
            border-color: #161a4a;
            max-height: fit-content;
            max-width: calc(87rem - 24rem - 2rem - 0.4rem);
            border-radius:2em; 
        }
    }
    .bio-block {
        padding: 2rem;
        border: solid;    
        max-width: 87rem;
        background: #FFFCE2;

        border-width: 3px;
        border-color: #161a4a;
        border-radius:2em;
    }
    @media (max-width: 768px) {
        .portrait-intro {
            display: flex;
            flex-direction: column;
            max-width: 20rem;     
            align-items: flex-start;
        }
        .intro-block {
            display: flex;
            min-width: 20rem;
            flex-direction: column;
            max-width: 20rem;
        }
        .bio-block { 
            display: flex;
            flex-direction: column;
            max-width: 20rem;
        }



    }
}
</style>