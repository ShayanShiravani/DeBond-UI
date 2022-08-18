import { faCircleInfo } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "components/Tooltip"
import { PropsWithChildren } from "react"
// import { Tooltip } from "@material-tailwind/react";

interface InfoBoxType {
  caption: string,
  tooltipText: string
}
const InfoBox: React.FC<PropsWithChildren<InfoBoxType>> = (props) => {
  const {
    caption,
    tooltipText,
    children
  } = props
  return (
    <div className="py-2 shadow-lg rounded-lg bg-slate-200">
      <p className="mb-2">{children}</p>
      <Tooltip message={tooltipText}>
        <span className="text-xs">
            {caption} <FontAwesomeIcon icon={faCircleInfo} />
        </span>
      </Tooltip>
    </div>
  )
}

export default InfoBox