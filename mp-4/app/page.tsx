"use client";
import { useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find the Weather in any city!</h1>
      <p className={styles.subtitle}>Enter a city name below to get the current weather</p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={city}
          placeholder="City name"
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />
        <Link href={`/${city}`} className={styles.button}>Get Weather</Link>
      </div>
    </div>
  );
}