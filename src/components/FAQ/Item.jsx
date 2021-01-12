import React from 'react'
import bemCssModules from "bem-css-modules";

import { default as FAQStyles } from "./FAQ.module.scss";

const style = bemCssModules(FAQStyles);



function Item({faq, index, toggleFAQ}) {




    return (
        
        <div
        className={style("faq" + (faq.open ? 'open' : ''))}
        key={index}
        onClick={() => toggleFAQ(index)}
        
    >
        <div className={style("question")}>
            {faq.question}
        </div>
        <div className={style("answer")}>
            {faq.answer}
        </div>
    </div>
    )
}

export default Item
