import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Carousel } from 'antd';
import { fetchBanners } from '../redux/slice/bannerSlice';
import { imgUrl } from "../apikeys"
import { InfoCircleOutlined,CaretRightOutlined } from "@ant-design/icons"
import styles from "../styles/banner.module.scss";

export default function Banner() {
    const banners = useSelector((state) => state.banner);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBanners());
    }, [])
    console.log(banners);
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay>
            {banners.value.results && banners.value.results.map(e => {
                return (
                    <div>
                        <div className={styles.containter} style={{ backgroundImage: `url("${imgUrl + "original" + e.backdrop_path}")` }}>
                            <div className={styles.content} >
                                <p className={styles.title} >{e.title}</p>
                                <p className={styles.language} >{e.original_language}</p>
                                <p className={styles.desc} >{e.overview}</p>
                               <div className={styles.btn}>
                               <Button><CaretRightOutlined/>play</Button>
                                <Button className={styles.btn1}><InfoCircleOutlined />More Info</Button>
                               </div>
                            </div>
                        </div>


                    </div>
                )
            })}

        </Carousel>
    )
}

