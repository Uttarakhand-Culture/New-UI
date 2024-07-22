import style from "./DropDownMenu.module.css";

type DropDownMenuProps = {
    title : string,
}

export default function DropDownMenu(props: DropDownMenuProps) {
    return(
        <>
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

            <div className={style["dropdown-menu-container"]}>
                <ul>
                    <li>hi Hello</li>
                </ul>

            </div>
        </>
    );
}