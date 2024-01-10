import React from "react";
import { about } from "../data/dummydata"
import { Heading } from "../common/Heading"
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import pdf from "../data/image/Desenhos.pdf"

export const About = () => {
    return (
        
    <>
        <section className='about'>
            <div className="container flex">
                {about.map((val, i) => (
                    <>
                    <div className="left" data-aos='fade-down-right'>
                        <img src={val.cover}  alt='' ></img>
                    </div>
                    <div className="right" data-aos='fade-down-left'>
                        <Heading title="Sobre Mim"/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        {/* <button>Download CV</button> */}
                        <h2> <Heading title="Ideias de Tatuagens"/>  </h2><SubdirectoryArrowRightIcon/>
                        <button className="download-desenhos"><a href={pdf} download="Desenhos">Veja Meus Projetos</a></button> 
                    </div>
                    </>

                ))}
            </div>
        </section>
    </>

 )
}