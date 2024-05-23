{
    "words": "words for the variable words."
}

<template>
    <main class="home-page">
        <div class="portrait-intro">
            <div class="portrait-image">
                <img src="../../public/portrait_drawn_med.svg" class="image" alt="vue">
            </div>
            <div class="intro-block">
                <h1>Introduction</h1>
                <hr>
                <p>Hello! I'm Cale DePaolo, a passionate web developer and digital enthusiast based in the beautiful state of Wyoming. With 18 months of professional experience in the tech industry, I've developed a strong foundation in creating seamless, user-friendly websites and applications. My journey started with a curiosity for coding and has quickly evolved into a rewarding career where I business with digital solutions. When I'm not immersed in coding, you can find me exploring Wyoming's stunning landscapes, experimenting with new recipes in the kitchen, or out at my local course for a round of golf. I believe in continuous learning and staying ahead of the curve in this fast-paced digital world. Welcome to my corner of the internet, where I share my projects and a little about myself. Let's build something amazing together!</p>
            </div>
        </div>
        
        <div class="bio-block">
            <h1>Bio</h1>
            <hr>
            <p>I am a versatile software developer currently engaged in two exciting projects: developing this website and prototyping a web-based solution for a potential startup. With a year and a half of experience as a Front-End Software Engineer at Teladoc Health, I had the privilege of working with the myStrength team, where I honed my skills alongside a group of exceptional developers. This role significantly enhanced my full stack development abilities, complementing my prior focus on back-end development, API creation, and unit testing during my academic projects and internships.</p>
            <p>My senior design project with Western EcoSystems Technology (WEST) involved leveraging their AI model to create a solution for processing visual information, further broadening my technical expertise. I am passionate about learning and implementing new technologies to develop innovative software solutions.</p>
            <p>Currently, I am seeking my next professional opportunity in software development. I aim to continue expanding my skills and aspire to grow into a senior engineering role. I am eager to join a forward-thinking company that values continuous learning and offers opportunities for career advancement.</p>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    hr {
        border-top: 1px solid var(--primary);
    }
    div {
        color: var(--primary);

    }
    .portrait-intro {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: flex-end;
        
        .portrait-image {
            border: solid;
            border-width: 0.2rem;
            border-color: var(--primary);
            border-radius:2em;
            min-width:24rem;
            max-width: 24rem;
            max-height: 30rem;
            overflow: hidden;
        } 

        .intro-block {
            padding: 2rem;
            background: #FFFCE2;
            border: solid;
            border-width: 0.2rem;
            border-color: var(--primary);
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
        p {
            padding-bottom: 20px;
        }
    }
    @media (max-width: 768px) {
        .portrait-intro {
            display: flex;
            flex-direction: column;
            max-width: 100%;     
            align-items: flex-start;
        }
        .intro-block {
            display: flex;
            min-width: 20rem;
            flex-direction: column;
            max-width: 100%;
        }
        .bio-block { 
            display: flex;
            flex-direction: column;
            max-width: 100%;
        }



    }
}
</style>