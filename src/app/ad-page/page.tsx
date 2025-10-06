"use client";

import Image from "next/image";
import styles from "./AdPage.module.css";
import FraneIcon from "@/app/_assets/Franee46.jpeg";

export default function VinResult() {
  // Mock data — replace with fetched VIN data later
  const car = {
    make: "BMW",
    model: "E46 328i",
    year: 2000,
    engine: "2.8L I6 (M52TUB28)",
    transmission: "5-speed manual",
    drivetrain: "RWD",
    color: "Titanium Silver Metallic",
    mileage: "156,000 km",
    image: FraneIcon,
    aiDescription:
      "This BMW E46 328i represents the essence of early-2000s driving pleasure. Equipped with the legendary inline-six engine, precise manual transmission, and timeless design, it blends performance and refinement. The chassis delivers excellent balance and steering feedback — an authentic BMW experience for enthusiasts who value pure, analog connection to the road.",
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          AI Generated Ad for{" "}
          <span className={styles.highlight}>
            {car.make} {car.model}
          </span>
        </h1>

        <div className={styles.content}>
          {/* Left — Car Image */}
          <div className={styles.imageWrapper}>
            <Image
              src={car.image}
              alt={`${car.make} ${car.model}`}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>

          {/* Right — Details */}
          <div className={styles.details}>
            <h2 className={styles.carName}>
              {car.year} {car.make} {car.model}
            </h2>
            <ul className={styles.specs}>
              <li>
                <span>Engine:</span> {car.engine}
              </li>
              <li>
                <span>Transmission:</span> {car.transmission}
              </li>
              <li>
                <span>Drivetrain:</span> {car.drivetrain}
              </li>
              <li>
                <span>Color:</span> {car.color}
              </li>
              <li>
                <span>Mileage:</span> {car.mileage}
              </li>
            </ul>

            <div className={styles.description}>
              <h3>AI Description</h3>
              <p>{car.aiDescription}</p>
            </div>

            <button className={styles.button}>Generate Again</button>
          </div>
        </div>
      </div>
    </section>
  );
}
