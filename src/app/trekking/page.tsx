import styles from "./page.module.css"
import Image from "next/image"
import Card from "@/components/ui/Card";
import DropDownMenu from "@/components/ui/DropDownMenu";

export default function Trekking() {
    return (<>
            <header className={styles["page-header"]}>

                <section className={styles["hero-section"]}>
                    <div className={styles["text-container"]}>
                        <h1>Trekking</h1>
                        <p>EXPLORE HIDDEN PLACES IN UTTARAKHAND</p>
                    </div>
                    <div className={styles["img-container"]}>
                        <Image src={"/heroImage.png"} alt="TREKKING" width="368" height="400"/>
                    </div>
                </section>


                <section className={styles["search-section"]}>
                    <div className={styles["search-container"]}>
                        <div className={styles["item"]}>
                            <label htmlFor="difficulty-level"/>
                            <select id="difficulty-level">
                                <option value="" >Difficulty level</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        <div className={styles["item"]}>
                        <label htmlFor="district"/>
                            <select id="district">
                                <option value="" >District</option>
                                <option value="Almora">Almora</option>
                                <option value="Bageshwar">Bageshwar</option>
                                <option value="Chamoli">Chamoli</option>
                                <option value="Champawat">Champawat</option>
                                <option value="Dehradun">Dehradun</option>
                                <option value="Haridwar">Haridwar</option>
                                <option value="Nainital">Nainital</option>
                                <option value="Pauri Garhwal">Pauri Garhwal</option>
                                <option value="Pithoragarh">Pithoragarh</option>
                                <option value="Rudraprayag">Rudraprayag</option>
                                <option value="Tehri Garhwal">Tehri Garhwal</option>
                                <option value="Udham Singh Nagar">Udham Singh Nagar</option>
                                <option value="Uttarkashi">Uttarkashi</option>
                            </select>
                        </div>

                        <div className={styles["item"]}>
                            <label htmlFor="altitude"/>
                            <select id="altitude">
                                <option value="">Altitude</option>
                                <option value="Low">2500m</option>
                                <option value="Moderate">2500m - 3500m </option>
                                <option value="High">3500m acclimatization</option>
                            </select>
                        </div>
                    </div>
                </section>


            </header>

            <div className={styles["card-container"]}>
                <Card title={"ROOPKUND TREK"} subTitle={"HIGH RISK · 4536m · CHAMOLI"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>

                <Card title={"ROOPKUND TREK"} subTitle={"HIGH RISK · 4536m · CHAMOLI"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>

                <Card title={"ROOPKUND TREK"} subTitle={"HIGH RISK · 4536m · CHAMOLI"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>
            </div>
        </>
    );
}
