"use client"
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './css/MapCard.module.css';
import Head from 'next/head'


mapboxgl.accessToken = "pk.eyJ1IjoiaG9zc2lpIiwiYSI6ImNseHJlODJ2aTFhMTYyam9kcXRneHMwM3EifQ.kyfJbEu4i698Iv9bD7xqjg";


const MapCard = () => {
    const mapContainer = useRef(null);
    const mapContainer2 = useRef(null);

    const map = useRef(null);
    const [lng, setLng] = useState(13.841179);
    const [lat, setLat] = useState(-11.201150);
    const [zoom, setZoom] = useState(17);

    const map2 = useRef(null);
    const [lng2, setLng2] = useState(13.839739633382269);
    const [lat2, setLat2] = useState(-11.19909759224687);
    const [zoom2, setZoom2] = useState(17);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });

        map.current.on('load', () => {
            new mapboxgl.Marker()
                .setLngLat([lat,lng])
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Cine Sporting - Sumbe'))
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


    useEffect(() => {
        if (map2.current) return; // initialize map only once
        map2.current = new mapboxgl.Map({
            container: mapContainer2.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng2, lat2],
            zoom: zoom2,
            attributionControl: false
        });

        map2.current.on('load', () => {
            new mapboxgl.Marker()
                .setLngLat([lat2, lng2])
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Praça da Liberdade-Sumbe'))
                .addTo(map2.current);
        });

        // new mapboxgl.Marker()
        //     .setLngLat([lng, lat])
        //     // .setPopup(
        //     //     new mapboxgl.Popup({ offset: 25 }).setText('Cine Sporting-Sumbe')
        //     // )
        //     .addTo(map.current);

        map2.current.on('move', () => {
            setLng(map2.current.getCenter().lng.toFixed(4));
            setLat(map2.current.getCenter().lat.toFixed(4));
            setZoom(map2.current.getZoom().toFixed(2));
        });
    }, [lng2, lat2, zoom2]);


    return (
        <>
            <Head>
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
            </Head>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 p-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-center text-xl font-bold mb-4">Cine Sporting - Sumbe</h2>
                        <div className="h-64 bg-gray-200 rounded-lg" ref={mapContainer}></div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-center text-xl font-bold mb-4">Praça da Liberdade-Sumbe</h2>
                        <div className="h-64 bg-gray-200 rounded-lg" ref={mapContainer2} ></div> 
                        {/* ref={mapContainer} */}
                    </div>
                </div>
            </div>

            {/* <div className={styles.card}>
                <h2 className='text-center'>Adicionar marker /////////Cine Sporting</h2>
                <div className={styles.mapContainer}>
                    <div ref={mapContainer} className={styles.map} />
                </div>
            </div> */}
        </>
    );
};

export default MapCard;
