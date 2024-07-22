import style from "./page.module.css"
import Image from "next/image"
import Card from "@/components/ui/Card";

export default function Trekking() {
    return (<>
            <header className={style["page-header"]}>

                <section className={style["hero-section"]}>
                    <div className={style["text-container"]}>
                        <h1>Trekking</h1>
                        <p>EXPLORE HIDDEN PLACES IN UTTARAKHAND</p>
                    </div>
                    <div className={style["img-container"]}>
                        <Image src={"/heroImage.png"} alt="TREKKING" width="368" height="400"/>
                    </div>
                </section>

                <section className={style["search-section"]}>
                    <div className={style["search-container"]}>

                        <div className={style["item"]}>
                            <p>Difficulty level</p>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>

                            <div></div>
                        </div>

                        <div className={style["item"]}>
                            <p>Location</p>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>
                        </div>

                        <div className={style["item"]}>
                            <p>Altitude</p>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>
                        </div>

                    </div>
                </section>
            </header>

            <div className={style["card-container"]}>
                <Card title={"ROOPKUND TREK"} subTitle={"MODERATE RISK · 5KM · ALMORA"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>

                <Card title={"ROOPKUND TREK"} subTitle={"MODERATE RISK · 5KM · ALMORA"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>

                <Card title={"ROOPKUND TREK"} subTitle={"MODERATE RISK · 5KM · ALMORA"}
                      description={"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
                          "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
                          "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."}
                      image={"/roopkund.png"}/>
            </div>
        </>
    );
}
