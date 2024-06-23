"use client"
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './css/MapCard.module.css';
import Head from 'next/head'


mapboxgl.accessToken = "pk.eyJ1IjoiaG9zc2lpIiwiYSI6ImNseHJlODJ2aTFhMTYyam9kcXRneHMwM3EifQ.kyfJbEu4i698Iv9bD7xqjg";


const MapCard = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(13.841179);
    const [lat, setLat] = useState(-11.201150);
    const [zoom, setZoom] = useState(17);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('load', () => {
            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Your Location Name'))
                .addTo(map.current);
        });

        // new mapboxgl.Marker()
        //     .setLngLat([lng, lat])
        //     // .setPopup(
        //     //     new mapboxgl.Popup({ offset: 25 }).setText('Cine Sporting-Sumbe')
        //     // )
        //     .addTo(map.current);

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [lng, lat, zoom]);



    return (
        <>
            <Head>
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
            </Head>

            <div className={styles.card}>
                <h2 className='text-center'>Adicionar marker /////////Cine Sporting</h2>
                <div className={styles.mapContainer}>
                    <div ref={mapContainer} className={styles.map} />
                </div>
            </div>
        </>
    );
};

export default MapCard;
