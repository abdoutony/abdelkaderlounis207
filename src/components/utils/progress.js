import React from "react"

export default function Progress({ technology, width }) {
  return (
    <div class="progress">
      <div class="progress-value" style={{ width: width }}>
        <span className="text-white fs-11" style={{ fontFamily: "PoppinsMeduim" }}>
          {technology}
        </span>
      </div>
    </div>
  )
}
