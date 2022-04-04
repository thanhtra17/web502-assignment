import React from "react";


type ShowInfoProps = {

    children: JSX.Element
}

const ShowInfo = (props: ShowInfoProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}
export default ShowInfo