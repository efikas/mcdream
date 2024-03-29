'use client'

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./icons";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { StarIcon } from "./pages";
import Image from "next/image";
import dynamic from 'next/dynamic'
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

// const { MapContainer, TileLayer, Marker, Popup } = dynamic(() => import('react-leaflet'), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet/lib/Popup'), {ssr: false});
// const MapContainer = dynamic(() => import('react-leaflet/lib/MapContainer'), {ssr: false});
// const TileLayer = dynamic(() => import('react-leaflet/lib/TileLayer'), {ssr: false});
// const Marker = dynamic(() => import('react-leaflet/lib/Marker'), {ssr: false});
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export function MoreContent({ setMore, more }) {
  const ref = useRef(null);

  useEffect(() => {
    if (more) {
      document.body.style.overflow = "hidden";
      if (ref && ref.current) {
        ref.current.scroll({ top: 0 });
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [more]);

  const content =
    more == undefined ? (
      <></>
    ) : more == "offers" ? (
      <Offers />
    ) : more == "more" ? (
      <More />
    ) : more == "reviews" ? (
      <Reviews />
    ) : more == "rule" ? (
      <Rule />
    ) : (
      <Safe />
    );
  return (
    <div className={`morecontent ${more} ${more && "active"}`}>
      <div className="header">
        <button onClick={() => setMore()}>
          <CloseIcon />
        </button>
      </div>
      <div ref={ref} className="context">
        {content}
      </div>
    </div>
  );
}

const Reviews = () => (
  <div className="reviewspopup">
    <div className="upp">
      <h1>
        <StarIcon />
        4.86 · 126 reviews
      </h1>
      <ul>
        <li>
          <p>Cleanliness</p>
          <div className="div">
            <span className="m"></span>
          </div>
          <p>4.8</p>
        </li>
        <li>
          <p>Communication</p>
          <div className="div">
            <span></span>
          </div>
          <p>4.9</p>
        </li>
        <li>
          <p>Check-in</p>
          <div className="div">
            <span></span>
          </div>
          <p>4.9</p>
        </li>
        <li>
          <p>Accuracy</p>
          <div className="div">
            <span></span>
          </div>
          <p>4.9</p>
        </li>
        <li>
          <p>Location</p>
          <div className="div">
            <span className="m"></span>
          </div>
          <p>4.8</p>
        </li>
        <li>
          <p>Value</p>
          <div className="div">
            <span className="s"></span>
          </div>
          <p>4.7</p>
        </li>
      </ul>
    </div>
    <ul>
      <li>
        <div className="profile">
          <Image
            alt=""
            width={40}
            height={40}
            src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
          />
          <p className="name">Aldo</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          The service is impeccable. The staff is super friendly and responsive.
          <br /> We highly recommend it.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Anisha</p>
          <p className="date">June 2023</p>
        </div>

        <p className="content">
          we loved the place to stay beautiful night was so good & lovely
          morning sounds
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Sanal</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          We had a very relaxing time in the villa. The hosts were very
          responsive when we had questions. The food they cooked was also great!
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Yiting</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">We had a wonderful time at Veluvana!</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Muhammad</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">It was just perfect. Thank you 🙏</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Alex</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">
          It was an amazing experience, I will never forget the words before
          entering ARE YOU READY and we saw this wonderful place.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            width={40}
            height={40}
            src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
          />
          <p className="name">Aldo</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          The service is impeccable. The staff is super friendly and responsive.
          <br /> We highly recommend it.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Anisha</p>
          <p className="date">June 2023</p>
        </div>

        <p className="content">
          we loved the place to stay beautiful night was so good & lovely
          morning sounds
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Sanal</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          We had a very relaxing time in the villa. The hosts were very
          responsive when we had questions. The food they cooked was also great!
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Yiting</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">We had a wonderful time at Veluvana!</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Muhammad</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">It was just perfect. Thank you 🙏</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Alex</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">
          It was an amazing experience, I will never forget the words before
          entering ARE YOU READY and we saw this wonderful place.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            width={40}
            height={40}
            src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
          />
          <p className="name">Aldo</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          The service is impeccable. The staff is super friendly and responsive.
          <br /> We highly recommend it.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Anisha</p>
          <p className="date">June 2023</p>
        </div>

        <p className="content">
          we loved the place to stay beautiful night was so good & lovely
          morning sounds
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Sanal</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          We had a very relaxing time in the villa. The hosts were very
          responsive when we had questions. The food they cooked was also great!
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Yiting</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">We had a wonderful time at Veluvana!</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Muhammad</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">It was just perfect. Thank you 🙏</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Alex</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">
          It was an amazing experience, I will never forget the words before
          entering ARE YOU READY and we saw this wonderful place.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            width={40}
            height={40}
            src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
          />
          <p className="name">Aldo</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          The service is impeccable. The staff is super friendly and responsive.
          <br /> We highly recommend it.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Anisha</p>
          <p className="date">June 2023</p>
        </div>

        <p className="content">
          we loved the place to stay beautiful night was so good & lovely
          morning sounds
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Sanal</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          We had a very relaxing time in the villa. The hosts were very
          responsive when we had questions. The food they cooked was also great!
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Yiting</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">We had a wonderful time at Veluvana!</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Muhammad</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">It was just perfect. Thank you 🙏</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Alex</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">
          It was an amazing experience, I will never forget the words before
          entering ARE YOU READY and we saw this wonderful place.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            width={40}
            height={40}
            src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
          />
          <p className="name">Aldo</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          The service is impeccable. The staff is super friendly and responsive.
          <br /> We highly recommend it.
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Anisha</p>
          <p className="date">June 2023</p>
        </div>

        <p className="content">
          we loved the place to stay beautiful night was so good & lovely
          morning sounds
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Sanal</p>
          <p className="date">June 2023</p>
        </div>
        <p className="content">
          We had a very relaxing time in the villa. The hosts were very
          responsive when we had questions. The food they cooked was also great!
        </p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Yiting</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">We had a wonderful time at Veluvana!</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Muhammad</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">It was just perfect. Thank you 🙏</p>
      </li>
      <li>
        <div className="profile">
          <Image
            alt=""
            src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
            width={40}
            height={40}
          />
          <p className="name">Alex</p>
          <p className="date">May 2023</p>
        </div>
        <p className="content">
          It was an amazing experience, I will never forget the words before
          entering ARE YOU READY and we saw this wonderful place.
        </p>
      </li>
    </ul>
  </div>
);
const Rule = () => (
  <div className="rule">
    <h1>Rule</h1>
  </div>
);
const Safe = () => (
  <div className="safe">
    <h1>Safe</h1>
  </div>
);

const Offers = () => (
  <ul className="offers">
    <h1 className="title">What this place offers</h1>
    <ul>
      <h2>Scenic views</h2>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5 5 0 0 1-4 4.9v4.29A9.04 9.04 0 0 1 23.95 22a8.94 8.94 0 0 1 3.74.81l.31.15v2.33A6.96 6.96 0 0 0 23.95 24a6.88 6.88 0 0 0-6.93 5.87l-.02.15v.1a1 1 0 0 1-.88.87L16 31a1 1 0 0 1-.97-.77l-.02-.12A6.95 6.95 0 0 0 7.97 24 6.96 6.96 0 0 0 4 25.23v-2.31a9.16 9.16 0 0 1 11 2.3V20.9a5 5 0 0 1-4-4.68V16h-.22a5 5 0 0 1 0-10H11v-.22A5 5 0 0 1 16 1zm2.86 14.1a4.98 4.98 0 0 1-5.72 0l-.07.23a3 3 0 1 0 5.85 0zM11 8a3 3 0 1 0 .67 5.93l.23-.07A4.98 4.98 0 0 1 11 11c0-1.06.33-2.05.9-2.86l-.23-.07A3.01 3.01 0 0 0 11 8zm10 0c-.23 0-.45.03-.67.07l-.23.07c.57.8.9 1.8.9 2.86a4.98 4.98 0 0 1-.9 2.86l.23.07A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.93 3.67l.07.23a4.98 4.98 0 0 1 5.72 0l.07-.23A3 3 0 0 0 16 3z"></path>
        </svg>
        <p>Garden view</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        <p>Mountain view</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z"></path>
        </svg>
        <p>Pool view</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        <p>Valley view</p>
      </li>
    </ul>
    <ul>
      <h2>Bathroom</h2>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M14 27v.2a4 4 0 0 1-3.8 3.8H4v-2h6.15a2 2 0 0 0 1.84-1.84L12 27zM10 1c.54 0 1.07.05 1.58.14l.38.07 17.45 3.65a2 2 0 0 1 1.58 1.79l.01.16v6.38a2 2 0 0 1-1.43 1.91l-.16.04-13.55 2.83 1.76 6.5A2 2 0 0 1 15.87 27l-.18.01h-3.93a2 2 0 0 1-1.88-1.32l-.05-.15-1.88-6.76A9 9 0 0 1 10 1zm5.7 24-1.8-6.62-1.81.38a9 9 0 0 1-1.67.23h-.33L11.76 25zM10 3a7 7 0 1 0 1.32 13.88l.33-.07L29 13.18V6.8L11.54 3.17A7.03 7.03 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
        </svg>
        <p>Hair dryer</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path>
        </svg>
        <p>Shampoo</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 32a12 12 0 0 0 12-12c0-6.22-3.67-12.51-10.92-18.89L16 .18l-1.08.93C7.67 7.5 4 13.78 4 20c0 6.58 5.4 12 12 12zm0-2c-5.5 0-10-4.53-10-10 0-5.33 3.12-10.88 9.42-16.65l.41-.37.17-.15.58.52c6.04 5.53 9.15 10.85 9.4 15.98l.02.34V20a10 10 0 0 1-10 10zm-3.45-5.1a8.95 8.95 0 0 1 2.12-4.92l.24-.26.44-.47a6.97 6.97 0 0 0 1.83-4.41v-.72a6.03 6.03 0 0 0-2.02-.06 4.98 4.98 0 0 1-1.44 4 10.95 10.95 0 0 0-2.87 5.02 6.03 6.03 0 0 0 1.7 1.83zM16 26h.25l.25-.02v-.14c0-1.32.51-2.58 1.46-3.53a10.98 10.98 0 0 0 3.02-5.66 6.03 6.03 0 0 0-1.8-1.74 8.97 8.97 0 0 1-2.17 5.5l-.23.25-.45.46a6.96 6.96 0 0 0-1.82 4.42v.27c.47.12.97.19 1.49.19z"></path>
        </svg>
        <p>Hot water</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        </svg>
        <p>Shower gel</p>
      </li>
    </ul>
    <ul>
      <h2>Bedroom and laundry</h2>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14a1 1 0 0 0-.87-.85zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-4.8 5.58c1.36.2 2.64.8 3.68 1.75l.46.45a8.97 8.97 0 0 0 4.62 2.28 5.02 5.02 0 0 1-2.01 1.55 10.98 10.98 0 0 1-4.26-2.65 4.96 4.96 0 0 0-2.66-1.38 4.68 4.68 0 0 1 .17-2zm3.09-3.28c1.34.55 2.58 1.36 3.64 2.42a4.97 4.97 0 0 0 3 1.44 4.99 4.99 0 0 1-.07 2 6.97 6.97 0 0 1-4.11-1.8l-.47-.45a8.96 8.96 0 0 0-4.07-2.17 5 5 0 0 1 2.08-1.44zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <p>Dryer</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M11 1v7l1.9 20.82v.17a2.01 2.01 0 0 1-1.81 2 2 2 0 0 1-.18.01H2.92a2.01 2.01 0 0 1-1.82-2v-.09l1.9-21V1zm6 0h.15a2 2 0 0 1 1.84 1.84L19 3v7.12l-2 8V31h-2V17.96l.03-.16.03-.16L16.72 11H13V1zm11 0a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H21v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.09 9H4.9L3.1 29h7.81v-.06zM17 3h-2v6h2zM9 3H5v4h4z"></path>
        </svg>
        <div className="text">
          <p>Essentials</p>
          <p className="de">Towels, bed sheets, soap, and toilet paper</p>
        </div>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 2a5 5 0 0 1 1.66 9.72 1 1 0 0 0-.65.81l-.01.13v.81l13.23 9.05a3 3 0 0 1 1.3 2.28v.2a3 3 0 0 1-3 3H3.47a3 3 0 0 1-1.69-5.48L15 13.47v-.81a3 3 0 0 1 1.82-2.76l.17-.07a3 3 0 1 0-3.99-3V7h-2a5 5 0 0 1 5-5zm0 13.21L2.9 24.17A1 1 0 0 0 3.46 26h25.07a1 1 0 0 0 .57-1.82z"></path>
        </svg>
        <p>Hangers</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M19.59 2a2 2 0 0 1 1.28.47l.13.12L29.41 11a2 2 0 0 1 .58 1.24l.01.17V25a5 5 0 0 1-4.78 5H4a2 2 0 0 1-2-1.85V7a5 5 0 0 1 4.78-5H7zM7 4a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H26v2H7a4.98 4.98 0 0 1-3-1v3h21a3 3 0 0 0 3-2.82V22H6v-2h22v-6h-5a5 5 0 0 1-5-4.78V4zm20.59 8L20 4.42V9a3 3 0 0 0 2.82 3H23z"></path>
        </svg>
        <p>Bed linens</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.03 3h.3a12.5 12.5 0 0 1 11.82 9.48l.07.3 1.73 7.79.03.14A2 2 0 0 1 28.15 23H2.1a2 2 0 0 1-1.85-1.84v-7.38a5 5 0 0 1 4.77-4.77L5.25 9h9V5h-14V3zm11.53 16H2.25v2H28zM16.24 5v6H5.07a3 3 0 0 0-2.82 2.82V17H27.1l-.84-3.78-.07-.28a10.5 10.5 0 0 0-9.6-7.92L16.32 5z"></path>
        </svg>
        <p>Iron</p>
      </li>
    </ul>
    <ul>
      <h2>Internet and office</h2>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path>
        </svg>
        <p>Wifi</p>
      </li>
    </ul>
    <ul>
      <h2>Kitchen and dining</h2>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path>
        </svg>
        <div className="text">
          <p>Kitchen</p>
          <p className="de">Space where guests can cook their own meals</p>
        </div>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <p>Refrigerator</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M29 1v2a13 13 0 0 0-.3 26h.3v2a15 15 0 0 1-.31-30zM3 1h2v6h2V1h2v6h2V1h2v9a5 5 0 0 1-4 4.9V31H7V14.9a5.01 5.01 0 0 1-3.98-4.44L3 10.22V10zm26 6v2a7 7 0 0 0-.24 14H29v2a9 9 0 0 1-.27-18zM11 9H5v1.15a3 3 0 0 0 6 .03V10z"></path>
        </svg>
        <div className="text">
          <p>Dishes and silverware</p>
          <p className="de">Bowls, chopsticks, plates, cups, etc.</p>
        </div>
      </li>
    </ul>
  </ul>
);

const More = () => (
  <div className="text">
    <h1>About this space</h1>
    <p>
      Veluvana is a unique bamboo house with a wonderful view of Sidemen Valley,
      a genuine tropical landscape with Mount Agung peak on its back. This
      getaway spot is a great place to bring into reality the dream adventure of
      the true wanderer. We invite you to feel the magnificent vibes of the
      entire house to escape the life that is full of drama into a journey with
      ultimate joy.
    </p>
    <h2>The space</h2>
    <p>
      The bamboo house is located at the main tourist district of Sidemen, a
      small town with a magnificent landscape in the southern flank of Mount
      Agung. Sidemen is not a touristy area, it is about a 90-minute drive from
      Bali Airport and a 45-minute drive from Ubud. Besides the beautiful
      scenery and the indigenous culture Sidemen also surrounded by a lot of
      famous tourist destinations in Bali. Some of them include; Lempuyang
      Temple (The Gateway to Heaven), Besakih (The Mother Temple of Bali), Tirta
      Gangga Royal Water Palace, Telaga Waja River for Rafting, Amed Diving
      Spot, and Bias Putih the Virgin Beach.
    </p>
    <br />
    <p>
      Upon arrival at Veluvana bamboo house, you will find the upper ground
      parking area with a small gazebo on the west side of the entrance and a
      small front office building in the north-east edge. Take your time in the
      upper ground to enjoy the welcome drink served by our doorman while
      resting from a long journey through the wavy road of East Bali.
    </p>
    <br />
    <p>
      Once you finish your drink, the declining stairs down to the north edge of
      the upper ground will lead you to the bamboo house. You will not see the
      building until you reach the lower ground as it is secluded behind the
      bamboo wall and vegetation. At the lower ground, you will notice a small
      fish pond to be your silent neighbor during your stay. Spin the leaf door
      and follow the stone path to head into the ground level of the bamboo
      house. All part of the building is fully designed for guest enjoyment. Sit
      back the bamboo couch to watch the painting-like scenery right from the
      ground level porch. On the left side of the house is a small pool to chill
      with your partner. While at the right end are the semi-open toilet and the
      lush rain-forest shower. There is also a kitchenette at the back of the
      couch that features a sink, a cooler, a coffee maker, a water heater, and
      seasonal fruit will also be served subject to availability.
    </p>
    <br />
    <p>
      Climb up to the upper level of the house through the bamboo stairs, you
      will enter the all bamboo bedroom that facing north to the Sidemen Valley
      with the green hills and Mount Agung on its back. Half of the room wall is
      windows with transparent glass that allows sunrise to light up your mind
      and sunset to color up your soul. The room features a comfort double-sized
      bed, a single reclining sofa bed, and a cozy bedroom chair where you can
      kick back and relax with a book or hustling on a laptop before rolling
      into bed.
    </p>
    <br />
    <p>
      The upper level of the house also features a balcony on the east side and
      the dreamy hanging net right in front of your bed. Carefully spin the east
      door to enjoy sightseeing from the east balcony especially when the
      sunlight softly appears to charm you up from your restful sleep. If you
      brave enough to try relaxing on the hanging net while enjoying the
      magnificent view of Mount Agung, open the north side window and go down
      slowly to the net. Layback and chill like you were floating on a soft
      cloud. It is okay to also bring pillows and blanket to the net because
      anyone can fall asleep by the soft wind of the Sidemen Valley.
    </p>
    <br />
    <h2>Other things to note</h2>
    <p>BEFORE YOU BOOK, PLEASE READ A FEW DETAILS FOR YOUR CONSIDERATION:</p>
    <br />
    <p>
      1. The Construction The construction and furniture are mostly made of
      locally-sourced bamboo that covered with rice straw roofs. The building is
      designed and built by local bamboo artisans with serious consideration to
      the strength of the entire part of the construction and furniture. The
      lower level floor is a half meter from the ground with a higher edge on
      the north porch; please take care of your step while playing on this site.
      The upper level is 2.5 meters from the ground with stairs that are
      considered easy to climb; watch your head and hold the railing for your
      safety.
    </p>
    <br />
    <p>
      2. Water, Electricity, and Wi-Fi The water you use in this house is
      supplied by the regional water company that distributes fresh water
      sourced from Mount Agung aquifer. Although the water is fresh, it is not
      ready to drink water, so please drink only water that is served in the
      bottle and ask the doormen to refill if it runs out. The electricity
      installed in the house is connected with the main east Bali grid system to
      assure you have reliable lighting in the night and optimum power supply to
      your device. Because we understand you may physically off-grid, but your
      digital presence can have no break. So, Wi-Fi is free as always.
    </p>
    <br />
    <p>
      3. The Location The small town of Sidemen is less crowded compare to Ubud
      and any other tourist destination in Bali. This area is slowly growing as
      the indigenous culture and society remain preserved by its humility. You
      can explore the village in a short-range by foot, a scooter is also
      available to rent if you want to go a little bit further to the town
      center or the neighbor village.
    </p>
    <br />
    <p>
      4. Public Facility The small town of Sidemen has a village hall,
      traditional market, small grocery, school, and hospital with an emergency
      care unit. Ride a scooter around 5 – 10 minutes from the bamboo house to
      reach one of these facilities. Bigger public facilities are available in
      the nearest town of Semarapura that requires a 20-minute drive or Denpasar
      that is around 60 minutes from Sidemen.
    </p>
    <p>
      5. The Climate The climate is divided into two seasons, dry or wet. The
      dry season comes around May – September while the wet season is from
      October – April each year. However, climate change has made the weather a
      bit unpredictable. Sometimes there is a rainy day within the dry season,
      and not all day is rainy during the wet season. When you stay during the
      wet season please consider facing heavy rain with a wind that may blow
      water into the lower ground porch, the upper balcony, and the hanging net.
      However, we have installed curtains and roll-up blinds at the lower ground
      so you can protect yourself from rainwater or bugs in the night.
    </p>
    <br />
    <p>
      6. The Bugs The bamboo house is located within a rice terrace with rich
      biodiversity. Our commitment to reducing the carbon footprint has led us
      to design the house with minimum impact on the surrounding living
      organism. Stay in this bamboo house means that you are willing to share
      your living space with other creatures. Ants, fly, mosquito, and other
      insects are commonly found outside of the building especially during fruit
      season. As long as you keep the space clean and not leave any left food
      open, they will not come to disturb you. If you notice mosquito entering
      the bedroom area, we highly recommend you to use the mosquito net on the
      bed during your sleep. If you have a specific insect allergy or afraid of
      these insects, we suggest this bamboo house is not good for you. Or you
      may go at your own risk.
    </p>
    <br />
    <p>
      7. Room Services You have a doormen stand-by at 7.00 am – 9.00 pm at the
      upper ground, you can ask him almost anything you need to make your stay
      enjoyable. He will help you with breakfast, food for lunch and dinner,
      find a masseur, room cleaning, laundry, transportation, area information,
      and tourist activities. You can also contact us online through MCDream
      platform in case the onsite services do not meet your needs.
    </p>
    <br />
    <p>
      8. Breakfast, Lunch, and Dinner Breakfast for two is included in your
      booking. You can ask the doormen to serve the breakfast in the spot you
      want. Whether it is floating on the pool (additional charge), on the couch
      or you feel too heavy to wake up from your bed, the breakfast will be
      served at your convenience. We plan to have a small restaurant in the
      upper ground so that you can order food for your lunch as well as dinner.
      For now, you can walk around as there are several restaurants available
      near the house. Or you can ask the doormen to buy one.
    </p>
    <br />
    <p>
      9. Air Conditioning We do not install air conditioning in the house as it
      is against our spirit to maintain natural air remain fresh and healthy.
      Matter-fact we think we do not need that urban stuff around Sidemen
      Village, especially when you let the soft natural wind flows into your
      space.
    </p>
    <br />
    <p>
      10. Use of Hanging Net The hanging net is made of strong string with iron
      steel pillars to sustain the weight of the user. Using the hanging net
      means you understand the risk that you may fell off to the side of the net
      if you are not careful. Only use the hanging net if you are confident that
      you have a good balance and always have your partner watching you in case
      you need help to get back to the room. Do not use the hanging net after
      hitting even a shoot of alcohol. Do not jump down from the hanging net and
      do not hang on it as it is your pull up bar.
    </p>
    <br />
    <p>
      11. The Neighborhood As the bamboo house is located in the main tourist
      district of Sidemen, several accommodations and restaurants are situated
      near your space. You will see some buildings on the west side of the
      house. Right at the back of the house is also accommodation with several
      rooms. The neighbor is warm and friendly, especially the owner of the
      surrounding properties. However, to make sure you have great privacy
      during your stay, we have created a high bamboo fence at the back of the
      house and plant dense vegetation on each border with the neighbor
      property.
    </p>
    <br />
    <p>
      12. Irresponsible Behavior Irresponsible behavior and threatening and
      abusive conduct towards the host, doormen, neighbors of the house, and the
      villager will not be tolerated. The host will refuse to allow check-in to
      the house if there is any case and or information that assume the guest
      (s) have related to any irresponsible behavior, threatening, and abusive
      conduct toward the mentioned person above. The host also has a full
      authority to end guest stay in the house if there is any case and or
      information that assume the guest (s) have related to any irresponsible
      behavior, threatening, and abusive conduct toward the mentioned person
      above. No refund will be given regarding the cancelation/canceled stay due
      to irresponsible behavior, threatening, and abusive conduct toward the
      mentioned person above. The host will not have a further responsibility to
      the guest once the booking is canceled and or the stay is ended.
    </p>
  </div>
);

export function MoreBg({ setMore, more }) {
  return (
    <div
      className={`morebg ${more && "active"}`}
      onClick={() => setMore()}
    ></div>
  );
}

export function OffsersList({ setMore }) {
  return (
    <ul>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5 5 0 0 1-4 4.9v4.29A9.04 9.04 0 0 1 23.95 22a8.94 8.94 0 0 1 3.74.81l.31.15v2.33A6.96 6.96 0 0 0 23.95 24a6.88 6.88 0 0 0-6.93 5.87l-.02.15v.1a1 1 0 0 1-.88.87L16 31a1 1 0 0 1-.97-.77l-.02-.12A6.95 6.95 0 0 0 7.97 24 6.96 6.96 0 0 0 4 25.23v-2.31a9.16 9.16 0 0 1 11 2.3V20.9a5 5 0 0 1-4-4.68V16h-.22a5 5 0 0 1 0-10H11v-.22A5 5 0 0 1 16 1zm2.86 14.1a4.98 4.98 0 0 1-5.72 0l-.07.23a3 3 0 1 0 5.85 0zM11 8a3 3 0 1 0 .67 5.93l.23-.07A4.98 4.98 0 0 1 11 11c0-1.06.33-2.05.9-2.86l-.23-.07A3.01 3.01 0 0 0 11 8zm10 0c-.23 0-.45.03-.67.07l-.23.07c.57.8.9 1.8.9 2.86a4.98 4.98 0 0 1-.9 2.86l.23.07A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.93 3.67l.07.23a4.98 4.98 0 0 1 5.72 0l.07-.23A3 3 0 0 0 16 3z"></path>
        </svg>
        <p>Garden view</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path>
        </svg>
        <p>Kitchen</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
        </svg>
        <p>Free parking on premises</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97zm3.75 1.9a2 2 0 0 0-2.98.08l-.1.14-4.84 6.86a2 2 0 0 0 2.05 3.02l.17-.04 4-1.07a1 1 0 0 1 .5 0l3.97 1.06.15.04a2 2 0 0 0 2.13-2.97l-4.95-7.01zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        </svg>
        <p>Pets allowed</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        <p>Mountain view</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path>
        </svg>
        <p>Wifi</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z"></path>
        </svg>
        <p>Private pool</p>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14a1 1 0 0 0-.87-.85zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-4.8 5.58c1.36.2 2.64.8 3.68 1.75l.46.45a8.97 8.97 0 0 0 4.62 2.28 5.02 5.02 0 0 1-2.01 1.55 10.98 10.98 0 0 1-4.26-2.65 4.96 4.96 0 0 0-2.66-1.38 4.68 4.68 0 0 1 .17-2zm3.09-3.28c1.34.55 2.58 1.36 3.64 2.42a4.97 4.97 0 0 0 3 1.44 4.99 4.99 0 0 1-.07 2 6.97 6.97 0 0 1-4.11-1.8l-.47-.45a8.96 8.96 0 0 0-4.07-2.17 5 5 0 0 1 2.08-1.44zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <p>Dryer</p>
      </li>
      <li className="d">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="m3.49 7.73 1.44 1.44A12.94 12.94 0 0 0 3 16a13 13 0 0 0 19.82 11.07l1.45 1.44A14.93 14.93 0 0 1 16 31 15 15 0 0 1 3.49 7.73zm.22-5.44 26 26-1.42 1.42-26-26 1.42-1.42zM16 1a15 15 0 0 1 12.52 23.27l-1.45-1.45A12.94 12.94 0 0 0 29 16 13 13 0 0 0 16 3a12.94 12.94 0 0 0-6.83 1.93L7.74 3.5A14.93 14.93 0 0 1 16 1zm-4.9 16a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <p>Smoke alarm</p>
      </li>
      <li className="d">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
        <p>Carbon monoxide alarm</p>
      </li>
      <button onClick={() => setMore("offers")}>Show all 28 amenities</button>
    </ul>
  );
}
// 12 month shortnames
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const DateView = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="dateview">
        <DateCalendar disablePast showDaysOutsideCurrentMonth />
        <DateCalendar disablePast showDaysOutsideCurrentMonth />
      </div>
    </LocalizationProvider>
  );
};

export function PlaceList(props) {
  return (
    <div className={`headerlist ${props.className}`}>
      <div className="content">
        <ul>
          <li>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 80,
                  behavior: "smooth",
                })
              }
            >
              Photos
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if(document == null) return;
                const mainh = document.querySelector("main").scrollHeight;
                const sleepH = document.querySelector(".sleep").scrollHeight;
                const offersH = document.querySelector(".offers").scrollHeight;
                window.scrollTo({
                  top: mainh - sleepH - offersH - 147,
                  behavior: "smooth",
                });
              }}
            >
              Amenities
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if(document == null) return;
                const mainh = document.querySelector("main").scrollHeight;
                window.scrollTo({
                  top: mainh + 25,
                  behavior: "smooth",
                });
              }}
            >
              Reviews
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if(!document) return;
                const mainh = document.querySelector("main").scrollHeight;
                const reviewsh =
                  document.querySelector("#reviews").scrollHeight;
                window.scrollTo({
                  top: mainh + reviewsh + 26,
                  behavior: "smooth",
                });
              }}
            >
              Location
            </button>
          </li>
          <div className={`check`} id="xddd">
            <div className="text">
              <div className="price">
                € 472 <span>night</span>
              </div>
              <div className="star">
                <StarIcon />
                <span>4.86</span> <span className="dot">·</span> 126 reviews
              </div>
            </div>

            <button>CHECK AVAILABILITY</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export const Map = () => {
  return (
    <div id="map">
      <h1>Where you’ll be</h1>
      <h2>Sidemen, Bali, Indonesia</h2>
      {/* {(typeof window !== 'undefined') && (<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> 
        </Marker>
      </MapContainer>)} */}
    </div>
  );
};

export const Footer = () => (
  <footer id="footer">
    <div className="upside">
      <div className="content">
        <h1>Explore other options in and around Sidemen</h1>
        <ul>
          <li>Lombok</li>
          <li>Sanur</li>
          <li>Penida Island</li>
          <li>Denpasar</li>
          <li>Bingin Beach</li>
          <li>Gili Trawangan</li>
          <li>Nusa Dua Beach</li>
          <li>Nusa Lembongan</li>
          <li>Kuta Beach</li>
          <li>Seminyak Beach</li>
          <li>Canggu Beach</li>
          <li>Ubud</li>
        </ul>
        <h2>Other types of stays on MCDream</h2>
        <ul>
          <li>Sidemen vacation rentals</li>
          <li>Sidemen monthly stays</li>
          <li>Design</li>
          <li>Amazing pools</li>
          <li>OMG!</li>
          <li>Luxury rentals in Bali</li>
        </ul>
      </div>
    </div>
    <div className="downside">
      <div className="content">
        <ul className="top">
          <ul className="s">
            <li>Support</li>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighborhood concern</li>
          </ul>
          <ul className="s">
            <li>Community</li>
            <li>MCDream: disaster relief housing</li>
            <li>Combating discrimination</li>
          </ul>
          <ul className="s">
            <li>Hosting</li>
            <li>MCDream your home</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
            <li>MCDream-friendly apartments</li>
          </ul>
          <ul>
            <li>MCDream</li>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </ul>
        <p className="xd">© 2024 MCDream, Inc</p>
      </div>
    </div>
  </footer>
);
