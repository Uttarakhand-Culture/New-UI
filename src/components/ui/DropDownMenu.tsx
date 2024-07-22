import style from "./DropDownMenu.module.css";

type DropDownMenuProps = {
    title : string,
}

export default function DropDownMenu(props: DropDownMenuProps) {
    return(
        <>
            <div className={style["item"]}>
                <p>{props.title}</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         height="24px"
                         viewBox="0 -960 960 960"
                         width="24px" fill="#e8eaed"><path
                        d="M480-360 280-560h400L480-360Z"/>
                    </svg>
                </span>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    );
}