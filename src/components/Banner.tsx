import {ReactElement, ReactNode, SetStateAction, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import {GitHub, LinkedIn, X} from "@mui/icons-material";

import arrow1 from "../assets/A2.svg"
import {iBanner, iBannerItem} from "../constants/componentsConstants";

export default (props: iBanner) => {
    const marq = useRef<HTMLDivElement | null>(null);
    const intervaler = useRef<string | number | NodeJS.Timer | undefined>();
    const [move, setMove] = useState<boolean>(true);

    useEffect(() => {
        if (move) {
            intervaler.current = setInterval(() => {
                const marquise = document.getElementById("marquise");
                const childPosition = marq.current?.offsetLeft as number;
                const childWidth = marq.current?.offsetWidth as number;
                if (childPosition != null && childWidth && marquise)
                    // console.log("is good", childPosition * -1, childPosition)
                    if (((childPosition * -1) < childWidth)) {
                        marquise.style.left = `${childPosition - 1}px`
                    } else {
                        marquise.style.left = `${((childWidth / 3) + window.screen.width)}px`;
                    }
            }, props.bannerSpeed || 10)
            return () => {
                clearInterval(intervaler.current);
            }
        }

    }, [move, props.bannerSpeed || 10]);

    function Accelerate(value: boolean) {
        setMove(value)
    }

    return <BannerWrapper
                onMouseEnter={() => Accelerate(false)}
                onMouseLeave={() => Accelerate(true)}
    >
        <BannerScroll ref={marq} id={"marquise"}>
            <img src={arrow1} style={{width: "15px", transform: "rotate(-90deg)"}} alt={"arrow-left"}/>
            {props.types.map(({name, action}) => <BannerItem name={name} action={action}/>)}
            <img src={arrow1} style={{width: "15px", transform: "rotate(90deg)"}} alt={"arrow-right"}/>
        </BannerScroll>
    </BannerWrapper>
}

const BannerWrapper = styled.div`
    background: #00000094;
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

`

const BannerScroll = styled.div`
    position: absolute;
    height: 50%;
    min-width: 50px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    left: 80%;
`

const BannerItem = ({name, action}: iBannerItem) => {

    return <BannerItemWrapper className={"banner-item"} onClick={()=> action()}>
        <div className={"feature-icon"}>
            {name === "GITHUB" ? <GitHub/> : name === "LINKED-IN" ? <LinkedIn/> : <X/>}
        </div>
    </BannerItemWrapper>
}

const BannerItemWrapper = styled.div`
    cursor: pointer;
    transition: 0.1s;
    position: relative;

    .content-data {
        position: absolute;
        background: lightblue;
        width: 100px;
        height: 150px;
        top: -80px;
        left: -40px;
        z-index: 1000;
        /* Add padding to ensure it doesn't get cut off */
        padding: 10px;
        box-sizing: border-box; /* Include padding in the width and height */
        display: none;
    }

    &:hover {
        transform: scale(1.1);

        & .feature-icon svg {
            fill: rgb(0, 191, 255);
        }

    }
`