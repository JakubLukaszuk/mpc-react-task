import React from "react";
import './CheckMark.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ICheckMark{
    isChecked: boolean
}

const CheckMark:React.FC<ICheckMark> = (props) => {
    const {isChecked} = props;

  return (
    <div className="Checkmark">
        {isChecked? <FontAwesomeIcon icon={faCheck} size="1x"/>: null}
    </div>
  );
};

export default CheckMark;
